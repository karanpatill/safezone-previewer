import { PLATFORMS, type Margins, type PlatformId } from '../../data/platforms';

export type LayerKey = 'ui' | 'safe' | 'danger' | 'crop45' | 'crop34' | 'crop11' | 'thirds';
export type Fit = 'cover' | 'contain';

export interface State {
  platform: PlatformId;
  layers: Record<LayerKey, boolean>;
  uiOpacity: number; // 0–100
  fit: Fit;
  zoom: number; // 100–400 (%)
  panX: number; // frame px
  panY: number;
  custom: Margins;
}

const KEY = 'safezonesnap:v1';

export const defaults = (): State => ({
  platform: 'reels',
  layers: { ui: true, safe: true, danger: true, crop45: false, crop34: false, crop11: false, thirds: false },
  uiOpacity: 90,
  fit: 'cover',
  zoom: 100,
  panX: 0,
  panY: 0,
  custom: { ...PLATFORMS.custom.margins },
});

const clamp = (v: unknown, lo: number, hi: number, fb: number) =>
  typeof v === 'number' && Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : fb;

/** Restores persisted settings, validating every field so a stale or hand-edited entry can never break the tool. */
function load(): State {
  const d = defaults();
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? 'null');
    if (!raw || typeof raw !== 'object') return d;
    const layers = { ...d.layers };
    for (const k of Object.keys(layers) as LayerKey[]) {
      if (typeof raw.layers?.[k] === 'boolean') layers[k] = raw.layers[k];
    }
    const c = raw.custom ?? {};
    return {
      ...d,
      platform: raw.platform in PLATFORMS ? raw.platform : d.platform,
      layers,
      uiOpacity: clamp(raw.uiOpacity, 0, 100, d.uiOpacity),
      fit: raw.fit === 'contain' ? 'contain' : 'cover',
      custom: {
        top: clamp(c.top, 0, 800, d.custom.top),
        right: clamp(c.right, 0, 400, d.custom.right),
        bottom: clamp(c.bottom, 0, 900, d.custom.bottom),
        left: clamp(c.left, 0, 400, d.custom.left),
      },
    };
  } catch {
    return d;
  }
}

type Listener = (s: State) => void;

export function createStore() {
  let state = load();
  const listeners = new Set<Listener>();
  let saveTimer = 0;

  const persist = () => {
    clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => {
      // Framing is tied to the loaded file, so only durable preferences are stored.
      const { panX, panY, zoom, ...durable } = state;
      try { localStorage.setItem(KEY, JSON.stringify(durable)); } catch { /* storage full or disabled */ }
    }, 150);
  };

  return {
    get: () => state,
    set(patch: Partial<State>) {
      state = { ...state, ...patch };
      persist();
      listeners.forEach((l) => l(state));
    },
    reset() {
      state = defaults();
      persist();
      listeners.forEach((l) => l(state));
    },
    subscribe(l: Listener) {
      listeners.add(l);
      return () => listeners.delete(l);
    },
  };
}

export const marginsOf = (s: State): Margins => (s.platform === 'custom' ? s.custom : PLATFORMS[s.platform].margins);
