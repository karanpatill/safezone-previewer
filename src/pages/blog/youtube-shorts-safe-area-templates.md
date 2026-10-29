---
layout: ../../layouts/Prose.astro
title: "YouTube Shorts Safe Area: Margins, Templates and Shelf Thumbnails"
description: "The YouTube Shorts player covers less of your frame than Reels or TikTok, but it covers it in different places. Here are the margins and how to build a reusable template."
date: "2026-10-30"
---

YouTube Shorts gives you the largest organic safe area of the three big short-video players. It also places its interface a little differently from Reels and TikTok, so a template built for one app does not carry over exactly. This guide covers the Shorts margins, the parts of the player that cause trouble, and how to build an overlay template for your editor.

## YouTube Shorts margins on 1080 × 1920

| Edge | Margin | Covered by |
| --- | --- | --- |
| Top | 160 px | Status bar, search, overflow menu |
| Bottom | 380 px | Title, channel row with Subscribe, sound row, progress bar, navigation |
| Left | 60 px | Edge padding |
| Right | 140 px | Like, dislike, comment, share, remix, sound thumbnail |

The safe area is **880 × 1380 px**, from x 60 to x 940 and y 160 to y 1540, which is about 59% of the frame, noticeably more than Reels (54%) or TikTok (53%).

## What is different about the Shorts player

### The title sits above the channel

On Reels and TikTok the account handle comes first and the caption below it. Shorts reverses that: the **video title** is the top row of the bottom block, around y 1560, with the channel avatar, @handle and a solid white Subscribe button beneath it, then the sound row. The title is usually one line but can wrap to two, so keep a little extra room above y 1540 if your titles are long.

### The progress bar is visible

Shorts shows a thin red progress bar just above the navigation bar. It is only a few pixels tall, but it marks the point where the player’s controls begin, and viewers scrub with it. Anything important placed right at the bottom of the frame will sit underneath their thumb.

### The like rail starts high

The like and dislike buttons begin at around y 1000, higher than the first button on Reels. Comment, share and remix follow, with a square sound thumbnail at the bottom. If your subject or text sits on the right side of the frame anywhere in the lower half, expect overlap.

### The top is minimal

The top bar contains only search and an overflow menu on the right. There is no centred tab bar as on TikTok, so a centred headline can sit as high as y 160 without colliding with anything.

## Shorts on desktop and in the shelf

Shorts are also shown in the Shorts shelf on the YouTube home page and in search results, where the thumbnail is a vertical crop of your chosen frame, and on desktop, where the video plays in a 9:16 player with the action buttons outside the video. Neither view covers more of the frame than the mobile player does, so if your layout passes on mobile it will pass there too. What changes is the thumbnail: make sure your chosen frame has its key subject and any text in the centre of the frame.

## Building a reusable template

A template saves you from guessing in every edit:

1. Open the [previewer](/#tool) and choose **Shorts**.
2. Leave on the layers you want as guides: typically the safe zone outline and the covered-area tint. Turn off the app interface if you find it distracting while editing, or keep it for a realistic preview.
3. Click **Download overlay**. You get a transparent 1080 × 1920 PNG.
4. In Premiere Pro, Final Cut, DaVinci Resolve or CapCut, place the PNG on the top video track across the full sequence and lock the track.
5. Disable or delete the track before exporting.

If you publish the same edit to Shorts, Reels and TikTok, build a universal template instead with the **Custom** preset set to 220 top, 150 right, 480 bottom and 60 left. That is the intersection of all three apps.

## Placing text for Shorts

- **Subtitles:** a bottom baseline between y 1250 and y 1500 works for Shorts alone. If the video also goes to TikTok, move it up to y 1180–1420.
- **Titles and hooks:** anywhere between y 200 and y 900 reads well and stays clear of the bottom block.
- **End screens:** Shorts does not support classic end-screen elements, so a “subscribe” prompt has to be part of the video. Place it in the centre of the frame, not next to the real Subscribe button, where it will be covered.

## Margins as percentages

```
top    160 / 1920 =  8.33 %
bottom 380 / 1920 = 19.79 %
left    60 / 1080 =  5.56 %
right  140 / 1080 = 12.96 %
```

At 2160 × 3840 that is 320, 760, 120 and 280 px.

## Keep a buffer

YouTube adjusts the Shorts player regularly, and longer titles, a pinned comment preview or a linked video can add height to the bottom block. Use the values above as minimums and leave a 40–60 px buffer wherever your design allows.
