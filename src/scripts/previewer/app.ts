import { FRAME, PLATFORMS, safeRect, usablePct, type Margins, type PlatformId } from '../../data/platforms';
import type { UiStrings } from '../../i18n/ui';
import { createStore, marginsOf, type Fit, type LayerKey, type State } from './store';
import { regionAt, render, type Media, type Region } from './render';

type T = UiStrings['tool'];

const FULL_NAMES: Record<PlatformId, string> = {
  reels: 'Instagram Reels', tiktok: 'TikTok', shorts: 'YouTube Shorts',
  story: 'Instagram Stories', reelsAds: 'Instagram Reels Ads', custom: 'Custom',
};

class SafeZonePreviewer extends HTMLElement {
  private t!: T;
  private store = createStore();
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private stage!: HTMLElement;
  private video!: HTMLVideoElement;
  private media: Media | null = null;
  private objectUrl: string | null = null;
  private scale = 1;
  private pointer: { x: number; y: number; region: Region } | null = null;
  private raf = 0;
  private toastTimer = 0;

  private $<E extends HTMLElement = HTMLElement>(ref: string) {
    return this.querySelector<E>(`[data-ref="${ref}"]`)!;
  }

  connectedCallback() {
    this.t = JSON.parse(this.dataset.i18n ?? '{}');
    this.canvas = this.$<HTMLCanvasElement>('canvas');
    this.ctx = this.canvas.getContext('2d', { alpha: false })!;
    this.stage = this.$('stage');
    this.video = this.$<HTMLVideoElement>('video');

    new ResizeObserver(() => this.resize()).observe(this.stage);
    this.bindControls();
    this.bindStage();
    this.bindVideo();
    this.store.subscribe(() => { this.syncControls(); this.draw(); });
    this.syncControls();
    this.resize();
    this.dataset.ready = '';
  }

  /* ——— rendering ——— */

  private resize() {
    const r = this.stage.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 3);
    const w = Math.max(1, Math.round(r.width * dpr));
    const h = Math.max(1, Math.round(r.height * dpr));
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
    }
    this.scale = w / FRAME.w;
    this.paint();
  }

  private draw() {
    if (this.raf) return;
    this.raf = requestAnimationFrame(() => { this.raf = 0; this.paint(); });
  }

  private paint() {
    const s = this.store.get();
    render(this.ctx, {
      scale: this.scale, state: s, margins: marginsOf(s), ui: PLATFORMS[s.platform].ui,
      media: this.media, mock: this.t.mock, pointer: this.pointer,
    });
  }

  /** Repaints on every decoded video frame, falling back to rAF where the callback API is missing. */
  private loopVideo = () => {
    if (this.video.paused || this.media?.source !== this.video) return;
    this.paint();
    this.updateScrub();
    if ('requestVideoFrameCallback' in this.video) this.video.requestVideoFrameCallback(this.loopVideo);
    else requestAnimationFrame(this.loopVideo);
  };

  /* ——— controls ——— */

  private bindControls() {
    this.addEventListener('change', (e) => {
      const el = e.target as HTMLInputElement;
      if (el.name === 'platform') this.store.set({ platform: el.value as PlatformId });
      else if (el.name === 'fit') this.store.set({ fit: el.value as Fit, panX: 0, panY: 0 });
      else if (el.dataset.layer) this.store.set({ layers: { ...this.store.get().layers, [el.dataset.layer]: el.checked } });
      else if (el.dataset.ref === 'file' && el.files?.[0]) { this.load(el.files[0]); el.value = ''; }
    });

    this.addEventListener('input', (e) => {
      const el = e.target as HTMLInputElement;
      const v = Number(el.value);
      if (el.dataset.ref === 'uiOpacity') this.store.set({ uiOpacity: v });
      else if (el.dataset.ref === 'zoom') this.store.set({ zoom: v });
      else if (el.dataset.margin) this.store.set({ custom: { ...this.store.get().custom, [el.dataset.margin]: v } });
      else if (el.dataset.ref === 'scrub' && this.video.duration) {
        this.video.currentTime = (v / 1000) * this.video.duration;
        if (this.video.paused) this.video.addEventListener('seeked', () => this.paint(), { once: true });
      }
    });

    this.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-action]');
      if (!btn) return;
      switch (btn.dataset.action) {
        case 'browse': this.$<HTMLInputElement>('file').click(); break;
        case 'remove': this.clearMedia(); break;
        case 'recenter': this.store.set({ panX: 0, panY: 0, zoom: 100 }); break;
        case 'frame': this.exportPng(false); break;
        case 'template': this.exportPng(true); break;
        case 'copy': this.copySpecs(); break;
        case 'reset': this.store.reset(); this.toast(this.t.toast.reset); break;
        case 'play': this.video.paused ? this.video.play() : this.video.pause(); break;
      }
    });

    // Pasting a screenshot is the fastest way to check a design straight out of Figma or Canva.
    document.addEventListener('paste', (e) => {
      const file = [...(e.clipboardData?.files ?? [])].find((f) => f.type.startsWith('image/'));
      if (file) this.load(file);
    });
  }

  private syncControls() {
    const s = this.store.get();
    const m = marginsOf(s);
    const r = safeRect(m);
    const spec = PLATFORMS[s.platform];

    this.querySelectorAll<HTMLInputElement>('input[name="platform"]').forEach((i) => (i.checked = i.value === s.platform));
    this.querySelectorAll<HTMLInputElement>('input[name="fit"]').forEach((i) => (i.checked = i.value === s.fit));
    this.querySelectorAll<HTMLInputElement>('[data-layer]').forEach((i) => (i.checked = s.layers[i.dataset.layer as LayerKey]));
    this.querySelectorAll<HTMLInputElement>('[data-margin]').forEach((i) => {
      const k = i.dataset.margin as keyof Margins;
      i.value = String(s.custom[k]);
      this.$(`margin-${k}`).textContent = `${s.custom[k]} px`;
    });
    this.$<HTMLInputElement>('uiOpacity').value = String(s.uiOpacity);
    this.$('uiOpacityValue').textContent = `${s.uiOpacity}%`;
    this.$<HTMLInputElement>('zoom').value = String(s.zoom);
    this.$('zoomValue').textContent = `${s.zoom}%`;

    this.$('marginsPanel').hidden = s.platform !== 'custom';
    this.$('sourceNote').textContent = this.t.source[spec.source];
    this.$('readSafe').textContent = r.w > 0 && r.h > 0 ? `${r.w} × ${r.h} px` : '—';
    this.$('readUsable').textContent = r.w > 0 && r.h > 0 ? `${usablePct(m)}%` : '0%';
    this.$('readMargins').textContent = `${m.top} / ${m.right} / ${m.bottom} / ${m.left}`;
  }

  /* ——— stage interaction ——— */

  private toFrame(e: { clientX: number; clientY: number }) {
    const r = this.canvas.getBoundingClientRect();
    return {
      x: Math.round(((e.clientX - r.left) / r.width) * FRAME.w),
      y: Math.round(((e.clientY - r.top) / r.height) * FRAME.h),
    };
  }

  private inspect(p: { x: number; y: number } | null) {
    const s = this.store.get();
    const status = this.$('readStatus');
    const dot = this.$('statusDot');
    if (!p || p.x < 0 || p.y < 0 || p.x > FRAME.w || p.y > FRAME.h) {
      this.pointer = null;
      this.$('readCursor').textContent = '—';
      status.textContent = this.t.status.idle;
      dot.dataset.state = 'idle';
    } else {
      const region = regionAt(p.x, p.y, marginsOf(s));
      this.pointer = { ...p, region };
      this.$('readCursor').textContent = `x ${p.x} · y ${p.y}`;
      const off45 = (FRAME.h - 1350) / 2;
      const cropped = p.y < off45 || p.y > FRAME.h - off45;
      status.textContent = this.t.status[region] + (cropped && region === 'safe' ? ` · ${this.t.status.cropped}` : '');
      dot.dataset.state = region === 'safe' ? (cropped ? 'warn' : 'safe') : 'danger';
    }
    this.draw();
  }

  private bindStage() {
    let drag: { id: number; x: number; y: number; px: number; py: number } | null = null;
    const c = this.canvas;

    c.addEventListener('pointerdown', (e) => {
      if (!this.media) return;
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, px: this.store.get().panX, py: this.store.get().panY };
      c.setPointerCapture(e.pointerId);
      c.dataset.dragging = '';
    });
    c.addEventListener('pointermove', (e) => {
      if (drag && e.pointerId === drag.id) {
        const k = FRAME.w / c.getBoundingClientRect().width;
        this.store.set({ panX: Math.round(drag.px + (e.clientX - drag.x) * k), panY: Math.round(drag.py + (e.clientY - drag.y) * k) });
      }
      if (e.pointerType !== 'touch' || !drag) this.inspect(this.toFrame(e));
    });
    const end = (e: PointerEvent) => {
      if (drag?.id === e.pointerId) { drag = null; delete c.dataset.dragging; }
    };
    c.addEventListener('pointerup', end);
    c.addEventListener('pointercancel', end);
    c.addEventListener('pointerleave', () => { if (!drag) this.inspect(null); });

    c.addEventListener('wheel', (e) => {
      if (!this.media || !(e.ctrlKey || e.metaKey)) return;
      e.preventDefault();
      const zoom = Math.min(400, Math.max(50, Math.round(this.store.get().zoom * (e.deltaY < 0 ? 1.06 : 1 / 1.06))));
      this.store.set({ zoom });
    }, { passive: false });

    c.addEventListener('keydown', (e) => {
      if (!this.media) return;
      const step = e.shiftKey ? 50 : 10;
      const s = this.store.get();
      const moves: Record<string, Partial<State>> = {
        ArrowLeft: { panX: s.panX - step }, ArrowRight: { panX: s.panX + step },
        ArrowUp: { panY: s.panY - step }, ArrowDown: { panY: s.panY + step },
        '+': { zoom: Math.min(400, s.zoom + 5) }, '=': { zoom: Math.min(400, s.zoom + 5) },
        '-': { zoom: Math.max(50, s.zoom - 5) }, '0': { panX: 0, panY: 0, zoom: 100 },
      };
      if (moves[e.key]) { e.preventDefault(); this.store.set(moves[e.key]); }
    });

    // The whole tool is a drop target so a file can land on the controls or the frame.
    let depth = 0;
    this.addEventListener('dragenter', (e) => { e.preventDefault(); depth++; this.dataset.dragover = ''; });
    this.addEventListener('dragover', (e) => e.preventDefault());
    this.addEventListener('dragleave', () => { if (--depth <= 0) { depth = 0; delete this.dataset.dragover; } });
    this.addEventListener('drop', (e) => {
      e.preventDefault();
      depth = 0;
      delete this.dataset.dragover;
      const f = e.dataTransfer?.files?.[0];
      if (f) this.load(f);
    });
  }

  /* ——— media ——— */

  private async load(file: File) {
    const isVideo = file.type.startsWith('video/');
    if (!isVideo && !file.type.startsWith('image/')) return this.toast(this.t.toast.badType, true);

    this.releaseMedia();
    this.objectUrl = URL.createObjectURL(file);

    try {
      if (isVideo) {
        const v = this.video;
        v.src = this.objectUrl;
        await new Promise<void>((ok, fail) => {
          v.onloadeddata = () => ok();
          v.onerror = () => fail(new Error('decode'));
        });
        this.media = { source: v, w: v.videoWidth, h: v.videoHeight };
        v.play().catch(() => {});
      } else {
        const img = new Image();
        img.src = this.objectUrl;
        await img.decode();
        this.media = { source: img, w: img.naturalWidth, h: img.naturalHeight };
      }
    } catch {
      this.releaseMedia();
      this.toast(this.t.toast.badType, true);
      return;
    }

    this.$('fileName').textContent = file.name;
    const { w, h } = this.media;
    const ratio = w / h;
    const aspect = Math.abs(ratio - 9 / 16) < 0.01 ? '9:16' : Math.abs(ratio - 4 / 5) < 0.01 ? '4:5' : Math.abs(ratio - 1) < 0.01 ? '1:1' : Math.abs(ratio - 16 / 9) < 0.01 ? '16:9' : ratio.toFixed(3);
    this.$('fileMeta').textContent = `${w} × ${h} · ${aspect}`;
    this.$('fileMeta').dataset.warn = String(aspect !== '9:16');
    this.dataset.hasMedia = '';
    this.$('videoBar').hidden = !isVideo;
    this.store.set({ panX: 0, panY: 0, zoom: 100 });
  }

  private releaseMedia() {
    this.video.pause();
    this.video.removeAttribute('src');
    this.video.load();
    if (this.objectUrl) URL.revokeObjectURL(this.objectUrl);
    this.objectUrl = null;
    this.media = null;
  }

  private clearMedia() {
    this.releaseMedia();
    delete this.dataset.hasMedia;
    this.$('videoBar').hidden = true;
    this.store.set({ panX: 0, panY: 0, zoom: 100 });
  }

  private bindVideo() {
    const v = this.video;
    const btn = this.$('playBtn');
    v.addEventListener('play', () => { btn.dataset.playing = ''; btn.setAttribute('aria-label', this.t.video.pause); this.loopVideo(); });
    v.addEventListener('pause', () => { delete btn.dataset.playing; btn.setAttribute('aria-label', this.t.video.play); });
  }

  private updateScrub() {
    const v = this.video;
    if (!v.duration) return;
    this.$<HTMLInputElement>('scrub').value = String(Math.round((v.currentTime / v.duration) * 1000));
    const fmt = (n: number) => `${Math.floor(n / 60)}:${String(Math.floor(n % 60)).padStart(2, '0')}`;
    this.$('time').textContent = `${fmt(v.currentTime)} / ${fmt(v.duration)}`;
  }

  /* ——— output ——— */

  private exportPng(template: boolean) {
    const s = this.store.get();
    const c = document.createElement('canvas');
    c.width = FRAME.w;
    c.height = FRAME.h;
    const ctx = c.getContext('2d')!;
    render(ctx, { scale: 1, state: s, margins: marginsOf(s), ui: PLATFORMS[s.platform].ui, media: template ? null : this.media, mock: this.t.mock, template });
    c.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `safezonesnap-${s.platform}-${template ? 'overlay' : 'preview'}-1080x1920.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      this.toast(this.t.toast.saved);
    }, 'image/png');
  }

  private async copySpecs() {
    const s = this.store.get();
    const m = marginsOf(s);
    const r = safeRect(m);
    const mt = this.t.margins;
    const body = [
      `${FULL_NAMES[s.platform]} · 1080 × 1920 (9:16)`,
      `${mt.top} ${m.top} px · ${mt.right} ${m.right} px · ${mt.bottom} ${m.bottom} px · ${mt.left} ${m.left} px`,
      `${this.t.readout.safeArea}: ${r.w} × ${r.h} px (x ${r.x}–${r.x + r.w}, y ${r.y}–${r.y + r.h}) · ${usablePct(m)}%`,
      `${location.origin}${location.pathname}`,
    ].join('\n');
    try {
      await navigator.clipboard.writeText(body);
      this.toast(this.t.toast.copied);
    } catch {
      this.toast(this.t.toast.copyFailed, true);
    }
  }

  private toast(msg: string, error = false) {
    const el = this.$('toast');
    el.textContent = msg;
    el.dataset.error = String(error);
    el.dataset.show = '';
    clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => delete el.dataset.show, 2400);
  }
}

customElements.define('safezone-previewer', SafeZonePreviewer);
