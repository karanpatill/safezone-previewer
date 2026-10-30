import { SITE } from './site';

/** Stable JSON-LD node IDs so every page's graph points at the same entities. */
export const ID = {
  org: `${SITE.domain}/#organization`,
  website: `${SITE.domain}/#website`,
  person: `${SITE.domain}/about/#author`,
} as const;

export const OG_IMAGE = { path: '/og-image.png', width: 1200, height: 630 } as const;

export const abs = (p: string) => new URL(p, SITE.domain).href;

export const stripHtml = (s: string) => s.replace(/<[^>]+>/g, '');

/**
 * Primary platform references. Only Meta publishes safe-zone percentages (Stories, Reels ads);
 * the organic Reels, TikTok and Shorts presets are our own measurements, so the other links are
 * cited for frame size and player behaviour, never for margin values.
 */
export const SOURCES = {
  metaAds: { name: 'Meta Ads Guide — placement specs for Stories and Reels ads', publisher: 'Meta', url: 'https://www.facebook.com/business/ads-guide' },
  metaDev: { name: 'Instagram Platform documentation — Reels and Stories media publishing', publisher: 'Meta for Developers', url: 'https://developers.facebook.com/docs/instagram-platform/' },
  tiktokDev: { name: 'TikTok for Developers — Content Posting API and video requirements', publisher: 'TikTok (ByteDance)', url: 'https://developers.tiktok.com/' },
  tiktokAds: { name: 'TikTok Ads Manager Help Center — in-feed video ad specifications', publisher: 'TikTok (ByteDance)', url: 'https://ads.tiktok.com/help/' },
  shortsHelp: { name: 'YouTube Help — Get started creating YouTube Shorts', publisher: 'Google', url: 'https://support.google.com/youtube/answer/10059070' },
  ytPlayer: { name: 'YouTube IFrame Player API reference', publisher: 'Google for Developers', url: 'https://developers.google.com/youtube/iframe_api_reference' },
} as const;

export type SourceId = keyof typeof SOURCES;
export const SOURCE_ORDER = Object.keys(SOURCES) as SourceId[];

export const breadcrumbList = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
});
