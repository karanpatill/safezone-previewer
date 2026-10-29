/**
 * Single source of truth for every safe-zone number on the site.
 * All values are pixels on the 1080 × 1920 (9:16) delivery canvas.
 */
export const FRAME = { w: 1080, h: 1920 } as const;

export type PlatformId = 'reels' | 'tiktok' | 'shorts' | 'story' | 'reelsAds' | 'custom';
export type UiKind = 'reels' | 'tiktok' | 'shorts' | 'story' | 'reelsAds' | 'none';
export type Source = 'measured' | 'metaAds' | 'metaStories' | 'custom';

export interface Margins { top: number; right: number; bottom: number; left: number }

export interface PlatformSpec {
  id: PlatformId;
  margins: Margins;
  ui: UiKind;
  source: Source;
}

export const PLATFORMS: Record<PlatformId, PlatformSpec> = {
  reels:    { id: 'reels',    margins: { top: 220, right: 140, bottom: 420, left: 60 }, ui: 'reels',    source: 'measured' },
  tiktok:   { id: 'tiktok',   margins: { top: 180, right: 150, bottom: 480, left: 60 }, ui: 'tiktok',   source: 'measured' },
  shorts:   { id: 'shorts',   margins: { top: 160, right: 140, bottom: 380, left: 60 }, ui: 'shorts',   source: 'measured' },
  story:    { id: 'story',    margins: { top: 250, right: 65,  bottom: 250, left: 65 }, ui: 'story',    source: 'metaStories' },
  reelsAds: { id: 'reelsAds', margins: { top: 250, right: 65,  bottom: 670, left: 65 }, ui: 'reelsAds', source: 'metaAds' },
  custom:   { id: 'custom',   margins: { top: 200, right: 120, bottom: 400, left: 60 }, ui: 'none',     source: 'custom' },
};

export const PLATFORM_ORDER: PlatformId[] = ['reels', 'tiktok', 'shorts', 'story', 'reelsAds', 'custom'];

/** Centered crops applied to a 9:16 upload when it is shown outside the full-screen player. */
export const CROPS = {
  crop45: { w: 1080, h: 1350 }, // Instagram / Facebook home feed
  crop34: { w: 1080, h: 1440 }, // Instagram profile grid (3:4 since January 2025)
  crop11: { w: 1080, h: 1080 }, // legacy square grid, Facebook & LinkedIn square placements
} as const;

export const cropOffset = (h: number) => (FRAME.h - h) / 2;

export const safeRect = (m: Margins) => ({
  x: m.left,
  y: m.top,
  w: FRAME.w - m.left - m.right,
  h: FRAME.h - m.top - m.bottom,
});

export const usablePct = (m: Margins) => {
  const r = safeRect(m);
  return Math.round(((r.w * r.h) / (FRAME.w * FRAME.h)) * 1000) / 10;
};
