import { CROPS, FRAME, cropOffset, safeRect, type Margins, type UiKind } from '../../data/platforms';
import { icon, type IconName } from './icons';
import type { State } from './store';

export interface MockStrings {
  follow: string; subscribe: string; caption: string; audio: string; reply: string;
  sponsored: string; cta: string; forYou: string; following: string; reels: string; handle: string;
}

export interface Media { source: CanvasImageSource; w: number; h: number }

export type Region = 'safe' | 'top' | 'bottom' | 'left' | 'right';

export interface RenderOptions {
  /** Device pixels per frame pixel. 1 for a 1080 × 1920 export. */
  scale: number;
  state: State;
  margins: Margins;
  ui: UiKind;
  media: Media | null;
  mock: MockStrings;
  /** Transparent background and no media: produces an overlay template for editing apps. */
  template?: boolean;
  /** Live-view-only crosshair in frame coordinates. */
  pointer?: { x: number; y: number; region: Region } | null;
}

const W = FRAME.w;
const H = FRAME.h;
const FONT = 'system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans", "Noto Sans Devanagari", sans-serif';

const COLORS = {
  safe: '#34d399',
  danger: 'rgba(251, 113, 133, 0.9)',
  crop45: '#fbbf24',
  crop34: '#38bdf8',
  crop11: '#e2e8f0',
};

export function regionAt(x: number, y: number, m: Margins): Region {
  const r = safeRect(m);
  if (x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h) return 'safe';
  // Distance into each band decides which interface element the point sits under.
  const dTop = r.y - y, dBottom = y - (r.y + r.h), dLeft = r.x - x, dRight = x - (r.x + r.w);
  const max = Math.max(dTop, dBottom, dLeft, dRight);
  if (max === dBottom) return 'bottom';
  if (max === dTop) return 'top';
  if (max === dRight) return 'right';
  return 'left';
}

/** Rect that media is drawn into, in frame px. Shared with hit-testing in the controller. */
export function mediaRect(media: Media, s: State) {
  const base = s.fit === 'cover' ? Math.max(W / media.w, H / media.h) : Math.min(W / media.w, H / media.h);
  const k = base * (s.zoom / 100);
  const w = media.w * k;
  const h = media.h * k;
  return { x: (W - w) / 2 + s.panX, y: (H - h) / 2 + s.panY, w, h };
}

let hatch: CanvasPattern | null = null;
function hatchPattern(ctx: CanvasRenderingContext2D) {
  if (hatch) return hatch;
  const c = document.createElement('canvas');
  c.width = c.height = 24;
  const g = c.getContext('2d')!;
  g.fillStyle = 'rgba(244, 63, 94, 0.14)';
  g.fillRect(0, 0, 24, 24);
  g.strokeStyle = 'rgba(251, 113, 133, 0.32)';
  g.lineWidth = 3;
  g.beginPath();
  g.moveTo(-6, 30); g.lineTo(30, -6);
  g.moveTo(-6, 6); g.lineTo(6, -6);
  g.moveTo(18, 30); g.lineTo(30, 18);
  g.stroke();
  hatch = ctx.createPattern(c, 'repeat');
  return hatch!;
}

export function render(ctx: CanvasRenderingContext2D, o: RenderOptions) {
  const { scale, state, margins } = o;
  const L = state.layers;
  // Line widths and labels stay legible at preview size yet scale naturally in the full-size export.
  const hair = Math.max(2, 1 / scale);
  const fs = Math.max(24, 10.5 / scale);

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.setTransform(scale, 0, 0, scale, 0, 0);

  if (!o.template) {
    ctx.fillStyle = '#0c0e13';
    ctx.fillRect(0, 0, W, H);
    if (o.media) {
      const r = mediaRect(o.media, state);
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(o.media.source, r.x, r.y, r.w, r.h);
    } else {
      drawBlueprint(ctx, hair);
    }
  }

  const sr = safeRect(margins);

  if (L.danger) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, W, H);
    ctx.rect(sr.x, sr.y, sr.w, sr.h);
    ctx.fillStyle = hatchPattern(ctx);
    ctx.fill('evenodd');
    ctx.restore();
  }

  if (L.thirds) {
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.38)';
    ctx.lineWidth = hair;
    ctx.beginPath();
    for (const f of [1 / 3, 2 / 3]) {
      ctx.moveTo(W * f, 0); ctx.lineTo(W * f, H);
      ctx.moveTo(0, H * f); ctx.lineTo(W, H * f);
    }
    ctx.stroke();
    ctx.restore();
  }

  if (L.crop11) drawCrop(ctx, '1:1', CROPS.crop11.h, COLORS.crop11, hair, fs, 'left');
  if (L.crop34) drawCrop(ctx, '3:4', CROPS.crop34.h, COLORS.crop34, hair, fs, 'center');
  if (L.crop45) drawCrop(ctx, '4:5', CROPS.crop45.h, COLORS.crop45, hair, fs, 'right');

  if (L.ui && o.ui !== 'none') {
    ctx.save();
    ctx.globalAlpha = state.uiOpacity / 100;
    drawUi(ctx, o.ui, o.mock);
    ctx.restore();
  }

  if (L.safe) drawSafe(ctx, margins, hair, fs);

  if (o.pointer) {
    const { x, y, region } = o.pointer;
    ctx.save();
    ctx.strokeStyle = region === 'safe' ? 'rgba(52,211,153,0.9)' : COLORS.danger;
    ctx.lineWidth = hair * 0.75;
    ctx.setLineDash([6 / scale, 6 / scale]);
    ctx.beginPath();
    ctx.moveTo(x, 0); ctx.lineTo(x, H);
    ctx.moveTo(0, y); ctx.lineTo(W, y);
    ctx.stroke();
    ctx.restore();
  }
}

function drawBlueprint(ctx: CanvasRenderingContext2D, hair: number) {
  ctx.save();
  ctx.strokeStyle = 'rgba(148,163,184,0.07)';
  ctx.lineWidth = hair * 0.6;
  ctx.beginPath();
  for (let x = 60; x < W; x += 60) { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
  for (let y = 60; y < H; y += 60) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
  ctx.stroke();
  ctx.restore();
}

function pill(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, fs: number, fg: string, align: 'left' | 'center' | 'right' = 'left') {
  ctx.save();
  ctx.font = `600 ${fs}px ${FONT}`;
  const tw = ctx.measureText(text).width;
  const px = fs * 0.5, h = fs * 1.6, w = tw + px * 2;
  const left = align === 'left' ? x : align === 'center' ? x - w / 2 : x - w;
  ctx.fillStyle = 'rgba(9, 11, 15, 0.82)';
  ctx.beginPath();
  ctx.roundRect(left, y, w, h, h / 2);
  ctx.fill();
  ctx.fillStyle = fg;
  ctx.textBaseline = 'middle';
  ctx.fillText(text, left + px, y + h / 2 + 1);
  ctx.restore();
}

function drawCrop(ctx: CanvasRenderingContext2D, label: string, h: number, color: string, hair: number, fs: number, align: 'left' | 'center' | 'right') {
  const off = cropOffset(h);
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.38)';
  ctx.fillRect(0, 0, W, off);
  ctx.fillRect(0, H - off, W, off);
  ctx.strokeStyle = color;
  ctx.lineWidth = hair;
  ctx.setLineDash([hair * 6, hair * 4]);
  ctx.beginPath();
  ctx.moveTo(0, off); ctx.lineTo(W, off);
  ctx.moveTo(0, H - off); ctx.lineTo(W, H - off);
  ctx.stroke();
  ctx.restore();
  const x = align === 'left' ? 24 : align === 'center' ? W / 2 : W - 180;
  pill(ctx, `${label} · 1080 × ${h}`, x, off + 12, fs * 0.9, color, align);
}

function drawSafe(ctx: CanvasRenderingContext2D, m: Margins, hair: number, fs: number) {
  const r = safeRect(m);
  if (r.w <= 0 || r.h <= 0) return;
  ctx.save();
  ctx.strokeStyle = COLORS.safe;
  ctx.lineWidth = hair;
  ctx.strokeRect(r.x, r.y, r.w, r.h);

  // Corner brackets for a precise, instrument-like read of the boundary.
  const b = Math.min(56, r.w / 4, r.h / 4);
  ctx.lineWidth = hair * 2.2;
  ctx.lineCap = 'square';
  ctx.beginPath();
  for (const [cx, cy, sx, sy] of [[r.x, r.y, 1, 1], [r.x + r.w, r.y, -1, 1], [r.x, r.y + r.h, 1, -1], [r.x + r.w, r.y + r.h, -1, -1]]) {
    ctx.moveTo(cx, cy + b * sy); ctx.lineTo(cx, cy); ctx.lineTo(cx + b * sx, cy);
  }
  ctx.stroke();
  ctx.restore();

  // Calipers from the frame edge to the safe boundary.
  const cal = (x1: number, y1: number, x2: number, y2: number, v: number) => {
    if (v < 1) return;
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.75)';
    ctx.lineWidth = hair * 0.8;
    ctx.beginPath();
    ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
    const t = 10;
    if (x1 === x2) { ctx.moveTo(x1 - t, y1); ctx.lineTo(x1 + t, y1); ctx.moveTo(x2 - t, y2); ctx.lineTo(x2 + t, y2); }
    else { ctx.moveTo(x1, y1 - t); ctx.lineTo(x1, y1 + t); ctx.moveTo(x2, y2 - t); ctx.lineTo(x2, y2 + t); }
    ctx.stroke();
    ctx.restore();
  };
  const cx = r.x + r.w * 0.5;
  const cy = r.y + r.h * 0.5;
  cal(cx, 0, cx, r.y, m.top);
  cal(cx, r.y + r.h, cx, H, m.bottom);
  cal(0, cy, r.x, cy, m.left);
  cal(r.x + r.w, cy, W, cy, m.right);
  const lf = fs * 0.85;
  if (m.top >= lf * 2.2) pill(ctx, `${m.top}`, cx + 14, r.y / 2 - lf * 0.8, lf, '#fff');
  if (m.bottom >= lf * 2.2) pill(ctx, `${m.bottom}`, cx + 14, r.y + r.h + m.bottom / 2 - lf * 0.8, lf, '#fff');

  pill(ctx, `${r.w} × ${r.h}`, r.x + 14, r.y + 14, fs, COLORS.safe);
}

/* ——— Simulated platform interfaces, laid out in 1080 × 1920 frame px ——— */

function glyph(ctx: CanvasRenderingContext2D, name: IconName, cx: number, cy: number, size: number, opts: { fill?: boolean; rotate?: number; width?: number } = {}) {
  const k = size / 24;
  ctx.save();
  ctx.translate(cx, cy);
  if (opts.rotate) ctx.rotate(opts.rotate);
  ctx.scale(k, k);
  ctx.translate(-12, -12);
  ctx.lineWidth = opts.width ?? 2;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  const p = icon(name);
  if (opts.fill) ctx.fill(p);
  ctx.stroke(p);
  ctx.restore();
}

function text(ctx: CanvasRenderingContext2D, s: string, x: number, y: number, size: number, weight = 500, align: CanvasTextAlign = 'left', maxW?: number) {
  ctx.font = `${weight} ${size}px ${FONT}`;
  ctx.textAlign = align;
  ctx.textBaseline = 'middle';
  let out = s;
  if (maxW && ctx.measureText(out).width > maxW) {
    while (out.length > 1 && ctx.measureText(out + '…').width > maxW) out = out.slice(0, -1);
    out = out.trimEnd() + '…';
  }
  ctx.fillText(out, x, y);
}

function avatar(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.save();
  ctx.fillStyle = '#334155';
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
  ctx.lineWidth = 3; ctx.strokeStyle = '#fff'; ctx.stroke();
  ctx.fillStyle = '#94a3b8';
  ctx.beginPath(); ctx.arc(cx, cy - r * 0.18, r * 0.36, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx, cy + r * 0.62, r * 0.62, r * 0.42, 0, Math.PI, 0); ctx.fill();
  ctx.restore();
}

function rail(ctx: CanvasRenderingContext2D, cx: number, items: { icon?: IconName; y: number; label?: string; rotate?: number }[], size = 68) {
  for (const it of items) {
    if (it.icon) glyph(ctx, it.icon, cx, it.y, size, { rotate: it.rotate, width: 1.9 });
    if (it.label) text(ctx, it.label, cx, it.y + size * 0.78, 27, 600, 'center');
  }
}

function scrim(ctx: CanvasRenderingContext2D, fromY: number, toY: number, top = false) {
  const g = ctx.createLinearGradient(0, fromY, 0, toY);
  g.addColorStop(0, top ? 'rgba(0,0,0,0.42)' : 'rgba(0,0,0,0)');
  g.addColorStop(1, top ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)');
  ctx.fillStyle = g;
  ctx.fillRect(0, Math.min(fromY, toY), W, Math.abs(toY - fromY));
}

function navBar(ctx: CanvasRenderingContext2D, icons: IconName[], dark = true) {
  ctx.save();
  ctx.fillStyle = dark ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.6)';
  ctx.fillRect(0, 1790, W, 130);
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(0, 1790); ctx.lineTo(W, 1790); ctx.stroke();
  ctx.strokeStyle = '#fff';
  ctx.fillStyle = '#fff';
  const step = W / icons.length;
  icons.forEach((n, i) => {
    const cx = step * i + step / 2;
    if (n === 'plus') {
      ctx.save();
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.roundRect(cx - 44, 1824, 88, 58, 16); ctx.stroke();
      ctx.restore();
      glyph(ctx, 'plus', cx, 1853, 40, { width: 2.4 });
    } else glyph(ctx, n, cx, 1853, 56);
  });
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.beginPath(); ctx.roundRect(W / 2 - 140, 1900, 280, 9, 5); ctx.fill();
  ctx.restore();
}

function outlineButton(ctx: CanvasRenderingContext2D, label: string, x: number, cy: number, filled = false) {
  ctx.save();
  ctx.font = `600 28px ${FONT}`;
  const w = ctx.measureText(label).width + 40;
  ctx.beginPath(); ctx.roundRect(x, cy - 25, w, 50, filled ? 25 : 12);
  if (filled) { ctx.fillStyle = '#fff'; ctx.fill(); ctx.fillStyle = '#0f0f0f'; }
  else { ctx.lineWidth = 2.5; ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.stroke(); ctx.fillStyle = '#fff'; }
  text(ctx, label, x + w / 2, cy + 1, 28, 600, 'center');
  ctx.restore();
}

function handleRow(ctx: CanvasRenderingContext2D, handle: string, cy: number, after?: () => void) {
  avatar(ctx, 88, cy, 36);
  ctx.fillStyle = '#fff';
  text(ctx, handle, 142, cy, 34, 700);
  if (after) after();
}

function drawUi(ctx: CanvasRenderingContext2D, kind: UiKind, m: MockStrings) {
  ctx.save();
  ctx.fillStyle = '#fff';
  ctx.strokeStyle = '#fff';
  ctx.shadowColor = 'rgba(0,0,0,0.45)';
  ctx.shadowBlur = 10;

  const status = () => {
    text(ctx, '9:41', 72, 44, 30, 600);
    ctx.beginPath(); ctx.roundRect(950, 32, 58, 26, 7); ctx.lineWidth = 2.5; ctx.stroke();
    ctx.fillRect(955, 37, 40, 16);
  };

  ctx.save(); ctx.shadowBlur = 0;
  if (kind === 'story') scrim(ctx, 0, 300, true);
  else { scrim(ctx, 0, 260, true); scrim(ctx, 1250, 1790); }
  ctx.restore();

  if (kind === 'reels' || kind === 'reelsAds') {
    status();
    text(ctx, m.reels, 48, 150, 54, 700);
    glyph(ctx, 'camera', 1010, 150, 60);
    rail(ctx, 1010, [
      { icon: 'heart', y: 1130, label: '24.1K' },
      { icon: 'comment', y: 1285, label: '318' },
      { icon: 'send', y: 1440, label: '1,204' },
    ]);
    for (const dy of [-14, 0, 14]) { ctx.beginPath(); ctx.arc(1010 + dy, 1580, 5.5, 0, Math.PI * 2); ctx.fill(); }
    ctx.save(); ctx.lineWidth = 4; ctx.fillStyle = '#475569';
    ctx.beginPath(); ctx.roundRect(984, 1660, 52, 52, 10); ctx.fill(); ctx.stroke(); ctx.restore();

    if (kind === 'reelsAds') {
      ctx.save(); ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      ctx.beginPath(); ctx.roundRect(36, 1440, 880, 84, 14); ctx.fill();
      ctx.fillStyle = '#fff';
      text(ctx, m.cta, 72, 1482, 32, 600);
      ctx.strokeStyle = '#fff';
      glyph(ctx, 'chevron', 880, 1482, 40);
      ctx.restore();
    }
    handleRow(ctx, m.handle, 1590, () => {
      ctx.font = `700 34px ${FONT}`;
      const x = 142 + ctx.measureText(m.handle).width + 24;
      outlineButton(ctx, m.follow, x, 1590);
    });
    if (kind === 'reelsAds') { ctx.globalAlpha *= 0.85; text(ctx, m.sponsored, 142, 1636, 26, 500); ctx.globalAlpha /= 0.85; }
    text(ctx, m.caption, 50, 1690, 31, 400, 'left', 820);
    glyph(ctx, 'music', 66, 1748, 30);
    text(ctx, `${m.handle} · ${m.audio}`, 94, 1748, 28, 500, 'left', 760);
    ctx.shadowBlur = 0;
    navBar(ctx, ['home', 'search', 'plus', 'play', 'user']);
  }

  if (kind === 'tiktok') {
    status();
    glyph(ctx, 'tv', 64, 150, 54);
    ctx.globalAlpha *= 0.7; text(ctx, m.following, 470, 150, 36, 600, 'right'); ctx.globalAlpha /= 0.7;
    text(ctx, m.forYou, 520, 150, 38, 700, 'left');
    ctx.font = `700 38px ${FONT}`;
    const fw = ctx.measureText(m.forYou).width;
    ctx.fillRect(520 + fw / 2 - 26, 186, 52, 6);
    glyph(ctx, 'search', 1012, 150, 56);

    avatar(ctx, 1004, 1010, 46);
    ctx.save(); ctx.shadowBlur = 0; ctx.fillStyle = '#fe2c55';
    ctx.beginPath(); ctx.arc(1004, 1058, 20, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#fff'; glyph(ctx, 'plus', 1004, 1058, 26, { width: 3.4 }); ctx.restore();
    rail(ctx, 1004, [
      { icon: 'heart', y: 1180, label: '86.4K' },
      { icon: 'comment', y: 1322, label: '1,032' },
      { icon: 'bookmark', y: 1464, label: '9,881' },
      { icon: 'share', y: 1606, label: '4,410' },
    ], 70);
    ctx.save(); ctx.fillStyle = '#1e293b'; ctx.lineWidth = 12; ctx.strokeStyle = '#111';
    ctx.beginPath(); ctx.arc(1004, 1730, 40, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();

    text(ctx, `@${m.handle}`, 44, 1556, 36, 700);
    text(ctx, m.caption, 44, 1612, 32, 400, 'left', 840);
    text(ctx, '#creator #tutorial #fyp', 44, 1660, 32, 600, 'left', 840);
    glyph(ctx, 'music', 60, 1722, 30);
    text(ctx, `${m.audio} — ${m.handle}`, 88, 1722, 30, 500, 'left', 760);
    ctx.shadowBlur = 0;
    navBar(ctx, ['home', 'users', 'plus', 'comment', 'user']);
  }

  if (kind === 'shorts') {
    status();
    glyph(ctx, 'search', 900, 140, 54);
    for (const dy of [-14, 0, 14]) { ctx.beginPath(); ctx.arc(1012, 140 + dy, 5.5, 0, Math.PI * 2); ctx.fill(); }
    rail(ctx, 1006, [
      { icon: 'thumb', y: 1060, label: '12K' },
      { icon: 'thumb', y: 1200, rotate: Math.PI },
      { icon: 'comment', y: 1330, label: '248' },
      { icon: 'share', y: 1470 },
      { icon: 'remix', y: 1590 },
    ], 64);
    ctx.save(); ctx.lineWidth = 4; ctx.fillStyle = '#475569';
    ctx.beginPath(); ctx.roundRect(978, 1692, 56, 56, 12); ctx.fill(); ctx.stroke(); ctx.restore();

    text(ctx, m.caption, 44, 1566, 32, 500, 'left', 840);
    avatar(ctx, 76, 1640, 32);
    ctx.fillStyle = '#fff';
    text(ctx, `@${m.handle}`, 124, 1640, 31, 600);
    ctx.font = `600 31px ${FONT}`;
    outlineButton(ctx, m.subscribe, 124 + ctx.measureText(`@${m.handle}`).width + 24, 1640, true);
    ctx.fillStyle = '#fff';
    glyph(ctx, 'music', 58, 1716, 28);
    text(ctx, m.audio, 86, 1716, 27, 500, 'left', 760);
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ff0033'; ctx.fillRect(0, 1782, W * 0.38, 6);
    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.fillRect(W * 0.38, 1782, W * 0.62, 6);
    navBar(ctx, ['home', 'play', 'plus', 'tv', 'user']);
  }

  if (kind === 'story') {
    ctx.save(); ctx.shadowBlur = 0;
    const segs = 3, gap = 8, x0 = 24, total = W - 48, sw = (total - gap * (segs - 1)) / segs;
    for (let i = 0; i < segs; i++) {
      ctx.fillStyle = i === 0 ? '#fff' : 'rgba(255,255,255,0.4)';
      ctx.beginPath(); ctx.roundRect(x0 + i * (sw + gap), 70, sw, 6, 3); ctx.fill();
    }
    ctx.restore();
    avatar(ctx, 80, 140, 34);
    text(ctx, m.handle, 130, 140, 32, 700);
    ctx.font = `700 32px ${FONT}`;
    ctx.globalAlpha *= 0.7; text(ctx, '2h', 130 + ctx.measureText(m.handle).width + 18, 140, 30, 500); ctx.globalAlpha /= 0.7;
    for (const dx of [-14, 0, 14]) { ctx.beginPath(); ctx.arc(930 + dx, 140, 5.5, 0, Math.PI * 2); ctx.fill(); }
    glyph(ctx, 'close', 1014, 140, 50, { width: 2.4 });

    ctx.save(); ctx.shadowBlur = 0; ctx.lineWidth = 2.5; ctx.strokeStyle = 'rgba(255,255,255,0.8)';
    ctx.beginPath(); ctx.roundRect(36, 1772, 800, 92, 46); ctx.stroke(); ctx.restore();
    text(ctx, m.reply, 82, 1818, 31, 500);
    glyph(ctx, 'heart', 910, 1818, 58);
    glyph(ctx, 'send', 1012, 1818, 56);
  }

  ctx.restore();
}
