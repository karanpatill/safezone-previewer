/**
 * Markdown building blocks for /llms.txt and /llms-full.txt (https://llmstxt.org/).
 * Everything numeric comes from platforms.ts, so these files can never drift from the tool.
 */
import { SITE } from '../config/site';
import { SOURCES, SOURCE_ORDER } from '../config/seo';
import { CROPS, FRAME, PLATFORMS, cropOffset, safeRect, usablePct, type PlatformId, type Source } from './platforms';

const ROWS: { id: Exclude<PlatformId, 'custom'>; name: string }[] = [
  { id: 'reels', name: 'Instagram Reels' },
  { id: 'tiktok', name: 'TikTok' },
  { id: 'shorts', name: 'YouTube Shorts' },
  { id: 'story', name: 'Instagram Stories' },
  { id: 'reelsAds', name: 'Instagram Reels ads' },
];

const SOURCE_LABEL: Record<Exclude<Source, 'custom'>, string> = {
  measured: 'SafeZoneSnap measurement of the current player',
  metaStories: 'Meta guidance: 14% top and bottom',
  metaAds: 'Meta guidance: 14% top, 35% bottom, 6% sides',
};

const CROP_ROWS = [
  { label: '4:5', ...CROPS.crop45, where: 'Instagram and Facebook home feed' },
  { label: '3:4', ...CROPS.crop34, where: 'Instagram profile grid (since January 2025)' },
  { label: '1:1', ...CROPS.crop11, where: 'Legacy square grids, square feed placements, link previews' },
];

const ORGANIC = ['reels', 'tiktok', 'shorts'] as const;
const max = (k: 'top' | 'right' | 'bottom' | 'left') => Math.max(...ORGANIC.map((id) => PLATFORMS[id].margins[k]));
export const UNIVERSAL = { top: max('top'), right: max('right'), bottom: max('bottom'), left: max('left') };

export const specTable = () => [
  '| Platform | Top | Bottom | Left | Right | Safe area (W × H) | Safe rectangle | Usable | Basis |',
  '| --- | --- | --- | --- | --- | --- | --- | --- | --- |',
  ...ROWS.map(({ id, name }) => {
    const m = PLATFORMS[id].margins;
    const r = safeRect(m);
    return `| ${name} | ${m.top} px | ${m.bottom} px | ${m.left} px | ${m.right} px | ${r.w} × ${r.h} px | x ${r.x}–${r.x + r.w}, y ${r.y}–${r.y + r.h} | ${usablePct(m)}% | ${SOURCE_LABEL[PLATFORMS[id].source as Exclude<Source, 'custom'>]} |`;
  }),
].join('\n');

export const cropTable = () => [
  '| Crop | Size | Removed from top and from bottom | Where it appears |',
  '| --- | --- | --- | --- |',
  ...CROP_ROWS.map((c) => `| ${c.label} | ${c.w} × ${c.h} px | ${cropOffset(c.h)} px | ${c.where} |`),
].join('\n');

/** The data block shared by both files: facts first, so a model can quote it directly. */
export const keyFacts = () => {
  const u = safeRect(UNIVERSAL);
  const feedTop = cropOffset(CROPS.crop45.h);
  return `Last updated: ${SITE.updated} (reviewed October 2026). Maintained by ${SITE.author}. All values are pixels on the ${FRAME.w} × ${FRAME.h} (9:16) delivery frame, the reference size used by every short-video platform. Margins scale proportionally at other resolutions.

**Safe zone margins by platform**

${specTable()}

**One layout for Reels, TikTok and Shorts:** use the largest margin on each side: ${UNIVERSAL.top} px top, ${UNIVERSAL.bottom} px bottom, ${UNIVERSAL.left} px left, ${UNIVERSAL.right} px right. That leaves ${u.w} × ${u.h} px (x ${u.x}–${u.x + u.w}, y ${u.y}–${u.y + u.h}). If the video will also appear in the 4:5 Instagram or Facebook feed, raise the top limit to y ${feedTop}, leaving ${u.w} × ${FRAME.h - feedTop - UNIVERSAL.bottom} px.

**Feed and grid crops of a 9:16 video** (all centred vertically)

${cropTable()}

**Formulas**

\`\`\`
crop_offset   = (1920 − crop_height) / 2          4:5 → (1920 − 1350) / 2 = 285 px
safe_width    = frame_width  − left − right       Reels → 1080 − 60 − 140 = 880 px
safe_height   = frame_height − top  − bottom      Reels → 1920 − 220 − 420 = 1280 px
usable        = safe_width × safe_height / (frame_width × frame_height)
margin_at_any_size = margin / 1920 × height  (top, bottom)
                   = margin / 1080 × width   (left, right)
e.g. Reels at 720 × 1280 → 147 / 280 / 40 / 93 px; at 2160 × 3840 → 440 / 840 / 120 / 280 px
\`\`\`

**Methodology:** Instagram Stories and Reels-ad margins follow Meta’s published percentages. Organic Reels, TikTok and YouTube Shorts margins are SafeZoneSnap’s own measurements of each app’s current player on a 1080 × 1920 frame, taken as the worst case across common phone shapes and rounded conservatively; neither TikTok nor YouTube publishes organic safe-zone values. Treat every value as a minimum and leave a 40–60 px buffer. Layouts vary with app version, interface language, accessibility text size and caption length.

**Tool capabilities:** live preview of an image or video under simulated Reels, TikTok, Shorts, Stories and Reels-ads interfaces; custom margins; 4:5, 3:4 and 1:1 crop overlays; rule-of-thirds guide; hover inspector reporting exact frame coordinates and which interface element or crop covers a point; Fill/Fit scaling, zoom and pan; frame-by-frame video scrubbing; export of a 1080 × 1920 preview PNG, a transparent 1080 × 1920 overlay PNG for Premiere Pro, Final Cut Pro, DaVinci Resolve, CapCut or Canva, and copyable spec text. Free, no account, available in English, Spanish, Portuguese, French, German and Hindi. Files are processed locally in the browser and never uploaded.`;
};

export const sourcesList = () =>
  SOURCE_ORDER.map((k) => `- [${SOURCES[k].name}](${SOURCES[k].url}): ${SOURCES[k].publisher}`).join('\n');

export const markdownResponse = (body: string) =>
  new Response(body.trim() + '\n', { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
