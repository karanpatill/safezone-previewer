---
layout: ../../layouts/Prose.astro
title: "Aspect Ratios Explained: 9:16 vs 4:5 vs 3:4 vs 1:1 vs 16:9"
description: "What each social video aspect ratio is for, the pixel sizes to export, and how one vertical master gets cropped as it moves through feeds, grids and players."
summary: "Export 9:16 (1080 × 1920) for Reels, TikTok, Shorts and Stories, 4:5 (1080 × 1350) for feed posts, 3:4 (1080 × 1440) for the Instagram profile grid, 1:1 (1080 × 1080) for square placements and 16:9 (1920 × 1080) for YouTube and the web. A 9:16 master cropped to 4:5 loses 285 px at the top and bottom."
updated: "2026-10-30"
sources: [metaAds, shortsHelp]
date: "2026-10-30"
---

An aspect ratio is simply a frame’s width divided by its height, written as two whole numbers. It sounds trivial, but on social platforms the same video is shown at several different ratios depending on where it appears, and each change of shape crops something away. Knowing which ratio applies where tells you what to protect in your frame.

## The five ratios that matter

| Ratio | Export size | Decimal | Typical use |
| --- | --- | --- | --- |
| 9:16 | 1080 × 1920 | 0.5625 | Reels, TikTok, Shorts, Stories (full-screen) |
| 3:4 | 1080 × 1440 | 0.75 | Instagram profile grid (since January 2025) |
| 4:5 | 1080 × 1350 | 0.8 | Instagram and Facebook feed posts |
| 1:1 | 1080 × 1080 | 1.0 | Legacy grids, square feed placements, many link previews |
| 16:9 | 1920 × 1080 | 1.778 | YouTube, websites, TVs, presentations |

All the vertical and square formats share a width of 1080 px. That is deliberate: platforms normalise uploads to 1080 px wide, so keeping the width fixed means only the height changes between formats.

## How a vertical master gets cropped

Most short-form video is produced once, at 9:16, and then reused across surfaces. Each surface takes a centred crop:

- **4:5 feed** keeps the middle 1350 px of height and drops **285 px** from the top and bottom.
- **3:4 grid** keeps the middle 1440 px and drops **240 px** from each end.
- **1:1 square** keeps the middle 1080 px and drops **420 px** from each end.

Overlay those three crops on the same frame and you get nested rectangles: the square inside the 4:5 inside the 3:4 inside the full 9:16. The practical takeaway is that the **centre of a vertical frame is precious**. Anything in the top or bottom 285 px will disappear in the feed, and anything in the top or bottom 420 px will disappear on square surfaces.

You can see all three crops on your own footage by turning on the crop layers in the [previewer](/#tool).

## Why 9:16 is the default for short-form

Phones are held upright, and a 9:16 frame fills most of a modern phone screen. Most current phones are around 19.5:9 or 20:9, which is taller than 9:16, so the platforms fit your video to the width and either letterbox it or place navigation in the leftover space. Shooting at 9:16 therefore gives you the largest possible image on the most devices without platforms scaling or cropping the sides.

## Where 4:5 still wins

For feed posts (images and carousels in particular) 4:5 takes up more vertical space than a square without being cropped. It is the tallest ratio Instagram shows without cropping in the feed, which is why it is the default for photo posts. If a piece will *only* appear in the feed, producing it at 4:5 gives you a larger usable area than cropping a 9:16 master, because there is no interface on top of a feed image apart from the like row beneath it.

## When to produce a separate 16:9 version

Horizontal 16:9 remains the right format for YouTube long-form, websites and anything watched on a TV or laptop. Converting a 9:16 master to 16:9 means either pillarboxing (bars at the sides) or cropping to a strip one third of the height, so it is usually better to shoot wide and reframe vertically than the other way round. Many editors shoot 4K 16:9 and cut a 9:16 version from it, using the extra resolution so that the vertical crop stays sharp at 1080 × 1920.

## Converting between ratios

The arithmetic is simple. For a fixed width *w*, the height at ratio *a:b* is:

```
height = w × b / a

1080 × 16 / 9 = 1920   (9:16)
1080 ×  4 / 3 = 1440   (3:4)
1080 ×  5 / 4 = 1350   (4:5)
```

The amount cropped from each end when a 9:16 frame is shown at a shorter ratio is:

```
crop_per_edge = (1920 − target_height) / 2

4:5  → (1920 − 1350) / 2 = 285 px
3:4  → (1920 − 1440) / 2 = 240 px
1:1  → (1920 − 1080) / 2 = 420 px
```

## A layout that survives every crop

If one vertical master has to work everywhere:

1. Keep text and faces between **y 420 and y 1440**. That clears the square crop at the top and the strictest interface (TikTok’s) at the bottom.
2. If you do not need square placements, relax the top to **y 285** for the 4:5 feed.
3. Keep text between **x 60 and x 930** so it clears the right-hand action rail on every app.
4. Fill the whole 9:16 frame with picture, so nothing looks empty when it is shown full-screen.

That is a smaller area than any single platform needs, but it is the price of one master for every surface.
