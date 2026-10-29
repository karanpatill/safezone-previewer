---
layout: ../layouts/Prose.astro
title: "About SafeZoneSnap"
description: "Why this tool exists, how the safe-zone presets are measured, and the principles behind how it is built."
eyebrow: "About"
updated: "2026-10-30"
---

SafeZoneSnap is a free, browser-based previewer that shows exactly where Instagram, TikTok and YouTube will draw their interfaces over a vertical video. It is built and maintained by Karan Patil, an independent developer who builds small, focused web utilities.

## Why it exists

Every short-video app paints its buttons, captions and navigation directly over your footage, and no editing application shows you that interface while you work. The usual workaround is a downloaded PNG template that has to be imported, aligned and remembered on every project, and is often years out of date.

SafeZoneSnap replaces that with a live preview. You drop a frame or a clip onto the page, switch between platforms, and see a faithful simulation of each interface, the precise safe rectangle, the regions it covers and the crops applied in feeds and on profile grids. When you need a guide inside your editor, it renders a pixel-exact 1080 × 1920 overlay on demand.

## How the presets are measured

All measurements are expressed in pixels on the 1080 × 1920 delivery frame, which every major platform uses as its reference size.

- **Organic Reels, TikTok and Shorts presets** are reference margins measured from each app’s current player layout, taken as the worst case across common phone shapes and rounded to conservative values.
- **Stories and Reels Ads presets** follow Meta’s published creative guidance (14% top and bottom for Stories; 14% top, 35% bottom and 6% sides for Reels ads).
- **Feed and grid crops** follow the current display ratios: 4:5 in the Instagram and Facebook feed, 3:4 on the Instagram profile grid since January 2025, and 1:1 for square placements.

Interfaces change with app updates, interface language and caption length, so we treat every value as a minimum and review the presets whenever a platform ships a visible change. The review date is shown on the main guide. If you spot a layout change before we do, [let us know](/contact/).

## How it is built

- **Private by design.** Your files are opened and rendered entirely in your browser. Nothing is uploaded, so unreleased client work stays on your machine.
- **Fast.** The site is static HTML with a small amount of TypeScript for the previewer. There is no account, no sign-up and nothing to install.
- **Accurate first.** One data file drives the previewer, the exported overlays and every table on the site, so the numbers you read always match the numbers you see.
- **Free.** The site is supported by advertising. Ads never appear inside the tool itself.

## Independence

SafeZoneSnap is not affiliated with, endorsed by or sponsored by Meta, Instagram, TikTok, ByteDance, Google or YouTube. Interface simulations are simplified illustrations drawn for layout checking and do not reproduce any platform’s proprietary artwork.
