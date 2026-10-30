---
layout: ../../layouts/Prose.astro
title: "TikTok Safe Zone Margins: Keeping Captions and Subtitles Clear"
description: "Why TikTok covers more of the bottom of your video than any other app, the exact margins on a 1080 × 1920 frame, and how to place subtitles that survive it."
summary: "The TikTok safe zone on a 1080 × 1920 video is 180 px from the top, 480 px from the bottom, 60 px from the left and 150 px from the right, leaving 870 × 1260 px. Its bottom margin is the largest of any short-video app, so place subtitle baselines between y 1180 and y 1420."
updated: "2026-10-30"
sources: [tiktokDev, tiktokAds]
date: "2026-10-30"
---

TikTok covers more of a vertical video than Instagram Reels or YouTube Shorts, and almost all of the extra coverage is at the bottom, which is exactly where most editors put their subtitles. This guide covers the margins, the reasons behind them, and a placement system for text that works on every TikTok layout.

## TikTok safe zone at a glance

On the standard 1080 × 1920 canvas:

| Edge | Margin | Covered by |
| --- | --- | --- |
| Top | 180 px | Status bar, LIVE icon, Following / For You tabs, search |
| Bottom | 480 px | Handle, caption, hashtags, sound row, shop and effect labels, navigation |
| Left | 60 px | Edge padding |
| Right | 150 px | Profile avatar, like, comment, save, share, sound disc |

The remaining safe area is **870 × 1260 px**, from x 60 to x 930 and y 180 to y 1440, about 53% of the frame.

## Why the bottom margin is so large

On Reels, the caption is truncated to a single line by default. TikTok shows more: a bold handle, a caption that often runs to two lines, hashtags that wrap onto their own line, and a sound row beneath. On top of that, several optional rows can appear above the caption:

- **TikTok Shop** product anchors on commerce videos
- **Effect or template labels** when a video uses a branded effect or CapCut template
- **Location, playlist or series tags**
- **“See translation”** links on videos in another language

Then comes the bottom navigation bar, which on many phones overlaps the video. Stack all of that and the interface easily climbs to y 1440 or higher. A 480 px bottom margin covers the common case with one optional row; videos with several of the rows above can need more.

## The right rail on TikTok

TikTok’s right column is a little wider and starts higher than Instagram’s. At the top is the creator’s profile picture with a red follow badge, around y 1010, followed by like, comment, save and share, each with a count, and finally the spinning sound disc at about y 1730. The column spans x 930–1080 on a 1080-wide frame, which is why the right margin is 150 px.

Because the avatar sits so high, anything you place on the right side of the frame between y 950 and the bottom is at risk. A presenter framed on the right third of the image will often have the like button over their shoulder.

## The top of the frame

The Following / For You switcher is centred at the top, with a LIVE icon on the left and search on the right, all around y 150. A 180 px top margin keeps text clear of the tab labels. TikTok’s top is less crowded than Instagram’s, but the tabs are centred, so a centred headline that starts above y 180 will collide with them directly.

## Placing subtitles on TikTok

Subtitles are where most TikTok layout problems happen. A reliable system:

1. **Set the bottom subtitle baseline between y 1180 and y 1420.** That leaves room for two lines above the caption block, with a small buffer.
2. **Keep the subtitle block narrow.** Centre it and limit lines to around 32 characters, so the text spans roughly x 140 to x 940 at most and never reaches the right rail.
3. **Use a heavy weight at 48–64 px** with either a soft shadow or a solid box. TikTok’s own gradient darkens the lower third, so pure white text with a subtle shadow reads well there.
4. **Avoid TikTok’s auto-caption position** if you also burn in your own subtitles. Auto captions appear in the lower middle and will overlap burned-in text; choose one or the other.

If you use the same edit on Reels and Shorts, these positions also work there, because TikTok’s bottom margin is the strictest of the three.

## TikTok ads and Spark Ads

In-feed ads replace the sound row with a “Sponsored” label and add a call-to-action button that slides in above the caption after a few seconds. In practice that pushes the covered area up by roughly another 100–150 px. If a video will be boosted or used as a Spark Ad, keep text above about y 1300, and check the current TikTok Ads Manager placement preview before launch, since ad layouts are tested frequently.

## Converting the margins

```
top    180 / 1920 =  9.38 %
bottom 480 / 1920 = 25.00 %
left    60 / 1080 =  5.56 %
right  150 / 1080 = 13.89 %
```

The bottom margin is exactly one quarter of the frame height, which is an easy number to remember: **the bottom quarter of a TikTok belongs to TikTok.**

## Checking your video

Drop a frame or clip into the [previewer](/#tool), choose TikTok, and hover the cursor over your subtitles. The inspector reports the exact coordinates and whether the point sits inside the safe zone or behind the caption area or action buttons. Use “Download overlay” to get a transparent 1080 × 1920 guide to place on the top track in CapCut or Premiere while you edit.

## A note on accuracy

TikTok changes its interface often and tests variants with different users, and caption length changes the layout from video to video. The margins here are conservative references from the current layout. Treat them as a minimum, and when a video carries extra rows such as shop links, give the bottom another 60–100 px.
