---
layout: ../../layouts/Prose.astro
title: "Instagram Reels Safe Zone: Exact Dimensions for 1080 × 1920"
description: "The pixel margins that keep text, faces and CTAs clear of the Reels interface, plus the 4:5 feed and 3:4 grid crops most guides forget."
date: "2026-10-30"
---

Instagram Reels plays your video full-screen at 9:16 and then draws its own interface directly on top of it. This guide gives you the margins to design around, explains where each number comes from, and covers the two crops that catch out even experienced editors: the 4:5 home feed and the 3:4 profile grid.

## The short answer

On a 1080 × 1920 frame, keep anything that must be readable inside this rectangle:

| Edge | Margin | Why |
| --- | --- | --- |
| Top | 220 px | Status bar, “Reels” title, camera icon |
| Bottom | 420 px | Handle and Follow button, caption, audio row, navigation |
| Left | 60 px | Edge padding and rounded screen corners |
| Right | 140 px | Like, comment, share, more and audio buttons |

That leaves a safe area of **880 × 1280 px**, from x 60 to x 940 and from y 220 to y 1500. It is 54% of the frame, so roughly half of what you film is reliably visible to every viewer.

If your Reel will also appear in the main feed (it will, unless you have turned that off) the top limit becomes **y 285**, not y 220. The next sections explain why.

## Where each part of the interface sits

### Bottom: the crowded zone

The bottom 420 px of a Reel are occupied by four stacked rows:

1. **The creator row**: avatar, handle and an outlined Follow button, centred around y 1590. Collaborative Reels show two handles here, which makes the row longer but not taller.
2. **The caption**: one line, sometimes two, truncated with “more” until the viewer taps it. Expanded captions temporarily cover much more of the frame, but viewers expect that and it is not something to design around.
3. **The audio row**: a music note followed by the sound name, scrolling if it is long.
4. **The app navigation**: on phones whose screen is close to 9:16, the Home, Search, Create, Reels and Profile bar overlaps the bottom of the video. On taller phones it sits below the video, but you cannot count on that.

Between the caption and the video, Instagram adds a soft dark gradient so its white text stays legible. That gradient also darkens anything of yours in the lower fifth of the frame, which is another reason to keep key visuals higher.

### Right: the action rail

The like, comment and share buttons are stacked from about y 1080 to y 1500, with the “more” menu and an audio thumbnail below. Each icon has a count underneath it, and the whole column is about 120 px wide. Add a little breathing room and you get the 140 px right margin.

This rail is the most common cause of covered text, because it overlaps the middle of the frame vertically. A subtitle that is wide enough to reach x 960 will collide with the like count even though it is nowhere near the bottom.

### Top: title and camera

The phone’s status bar occupies the first 80 to 100 px, then Instagram draws the “Reels” title on the left and a camera icon on the right at around y 150. A 220 px top margin keeps headlines clear of both, with a small buffer for phones with a larger status bar or a notch.

## The 4:5 feed crop

When a Reel autoplays in the home feed between photo posts, Instagram shows it at **4:5 (1080 × 1350)**, taken from the vertical centre of your 9:16 frame. That removes 285 px from the top and 285 px from the bottom.

At the bottom this does not matter much: the Reels interface already covers the bottom 420 px. At the top it matters a lot. The feed crop cuts deeper than the Reels interface does (285 vs 220 px), so a hook placed at y 240 is perfectly visible in the Reels tab but sliced in half in the feed, which is where many viewers first see it.

**Rule of thumb:** if a Reel will be seen in both places, keep text between y 285 and y 1500.

## The 3:4 profile grid

In January 2025 Instagram replaced its square profile grid with vertical **3:4 tiles (1080 × 1440)**. A Reel’s cover is cropped to that shape from the centre, removing 240 px from the top and bottom.

This affects cover design more than the video itself. A cover title placed in the top quarter of a 9:16 frame was safe on the old square grid only by accident, and it is often cut off on the new one. Keep cover titles inside the middle 1080 × 1440, ideally in the central third so they also survive the smaller grid thumbnails other people see when browsing your profile.

## Reels ads have stricter margins

Paid Reels add a “Sponsored” label and a call-to-action button above the creator row, so the covered area at the bottom grows. Meta’s published guidance for Reels ads is to keep **14% of the top (≈250 px), 35% of the bottom (≈670 px) and 6% of each side (≈65 px)** free of text and logos. That leaves roughly 950 × 1000 px, under half the frame.

If you are producing one asset for both organic posting and paid promotion, design to the ad margins. They are stricter at the top and the bottom, and the extra space at the sides is easy to use for background.

## Converting to other resolutions

The margins scale with the frame, so convert them to percentages once:

```
top    220 / 1920 = 11.46 %
bottom 420 / 1920 = 21.88 %
left    60 / 1080 =  5.56 %
right  140 / 1080 = 12.96 %
```

At 720 × 1280 that is 147, 280, 40 and 93 px. On a 4K vertical timeline (2160 × 3840) it is 440, 840, 120 and 280 px.

## A practical checklist before you post

- Is every word of on-screen text between x 60 and x 940?
- Is all text above y 1500, and below y 285 if the Reel will appear in the feed?
- Do subtitles stay narrow enough (roughly 32 characters per line) to avoid the right rail?
- Is your logo, if any, inside the safe area rather than in a corner?
- Is the cover title inside the central 1080 × 1440?

The fastest way to check all of these at once is to drop a frame into the [SafeZoneSnap previewer](/#tool), switch on the 4:5 and 3:4 layers, and hover over your text: the inspector tells you exactly which part of the interface or crop each point falls under.

## Why other guides give different numbers

You will find Reels templates with a bottom margin anywhere from 350 to 500 px. Interface layouts vary with app version, interface language, accessibility text size and caption length, and Instagram regularly tests layout changes with subsets of users. The values here are conservative references measured from the current layout. Treat them as minimums and leave an extra 40–60 px where you can.
