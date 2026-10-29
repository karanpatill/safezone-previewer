import type { HomeContent } from './types';

const en: HomeContent = {
  toc: 'On this page',
  cropWhere: [
    'Instagram and Facebook home feed, where a Reel autoplays between photo posts',
    'Instagram profile grid (3:4 tiles since January 2025)',
    'Legacy square grids, Facebook and LinkedIn square placements, many link previews',
  ],
  sections: [
    {
      id: 'what',
      title: 'What a safe zone actually is',
      blocks: [
        { p: 'A safe zone is the part of a vertical video frame that no platform interface will ever sit on top of. Instagram Reels, TikTok and YouTube Shorts all play your upload edge to edge on a 1080 × 1920 pixel canvas, and then draw their own buttons, captions, progress bars and navigation directly over it. Nothing is reserved for the interface: the app simply paints its controls on your pixels. Whatever you place under those controls is either hidden outright or made hard to read by the dark gradient (the “scrim”) the app adds to keep its own white text legible.' },
        { p: 'That is why a frame that looks perfectly composed in your editor can fall apart after upload. The subtitle that sat neatly in the lower third now runs into the caption and the audio ticker. The price tag in the corner of a product shot disappears behind the like button. The presenter’s face, framed slightly high for a “headroom” look, collides with the Following / For You tabs. None of this shows up in a desktop preview window, because editors know nothing about the interface that will later be stacked on top.' },
        { p: 'A safe zone is therefore not an aesthetic suggestion. It is a set of four measured margins — top, right, bottom and left — expressed in pixels of the delivery frame. Anything that must be seen and read (text, logos, faces, product details, calls to action) belongs inside the rectangle those margins leave behind. Background, texture, motion and atmosphere can and should still fill the whole 9:16 canvas, because the area under the interface is still visible; it is just not reliable.' },
        { p: 'SafeZoneSnap lets you check this before you publish. Load any image or video, choose a platform, and the previewer draws a faithful simulation of that app’s interface, the exact safe rectangle, the regions it covers, and the crops applied when the same video appears in a feed or on a profile grid. Everything runs in your browser; your files are never uploaded anywhere.' },
      ],
    },
    {
      id: 'why',
      title: 'Why the interface lands where it does',
      blocks: [
        { p: 'Every short-video player follows the same basic layout logic, and understanding it makes the numbers below easy to remember rather than something to look up every time.' },
        { h3: 'The bottom is always the most crowded edge' },
        { p: 'The lower part of the screen carries the creator identity (avatar, handle and a Follow or Subscribe button), the caption, the audio attribution, a progress or scrub bar and, on most phones, the app’s own navigation bar. That is four to six stacked rows of interface, which is why bottom margins are measured in hundreds of pixels: 380 px on YouTube Shorts, 420 px on Reels and 480 px on TikTok, where captions can run longer and hashtags often wrap onto a second line. Paid placements are taller still, because ads add a call-to-action button above the handle.' },
        { h3: 'The right edge carries the action rail' },
        { p: 'Likes, comments, shares, saves and the audio or remix shortcut are stacked in a vertical column on the right, starting around the vertical centre of the frame and running down into the caption area. The rail is roughly 120 to 150 px wide including its labels, which is why the right margin is always larger than the left. Layouts are mirrored for right-to-left interface languages, but because most audiences use left-to-right interfaces, the conventional safe zone keeps its larger margin on the right.' },
        { h3: 'The top hosts tabs, search and the status bar' },
        { p: 'At the top you have the phone’s own status bar (time, signal, battery), then the app’s feed switcher or title and a camera or search icon. It is a single row on most apps, so top margins are smaller: 160 px on Shorts, 180 px on TikTok and 220 px on Reels. Stories are the exception, with a progress indicator, the account name and a close button that together push the clear area down to about 250 px.' },
        { h3: 'Phone shape changes the picture, but not the rule' },
        { p: 'Most modern phones have a screen around 19.5:9, which is taller than 9:16. On those devices some apps letterbox the video and place navigation in the extra space below it, so less of your frame is covered than on a 16:9-shaped phone, where every control lands on your pixels. Because you cannot choose the phone your audience uses, safe zones are drawn for the worst case: the full interface sitting on top of the full 1080 × 1920 frame. If your content clears that, it clears everything.' },
      ],
    },
    {
      id: 'specs',
      title: 'Safe zone dimensions by platform',
      blocks: [
        { p: 'The table lists the margins SafeZoneSnap uses for each preset, measured on the standard 1080 × 1920 delivery frame. “Safe area” is the rectangle left once all four margins are removed, and “usable” is the share of the full frame it represents. The Reels Ads and Stories rows follow Meta’s published creative guidance; the organic Reels, TikTok and Shorts rows are reference measurements taken from each app’s current layout.' },
        { table: 'specs' },
        { h3: 'Instagram Reels' },
        { p: 'Keep text inside x 60–940 and y 220–1500. The handle and Follow button start at about y 1550, a single-line caption sits beneath them and the audio row beneath that. Reels captions are truncated to one or two lines until the viewer taps, so the bottom margin is stable, but it grows for collaborative posts with two handles and for posts with a location or product tag. If the same Reel will also appear in the main feed, read the 4:5 crop section below: the feed view removes 285 px from the top and bottom, which is a stricter limit at the top than the Reels interface itself.' },
        { h3: 'TikTok' },
        { p: 'Keep text inside x 60–930 and y 180–1440. TikTok has the tallest bottom block of the three major players because captions show more text by default, hashtags frequently wrap, and the sound row, TikTok Shop anchors and effect labels can stack above the navigation bar. The right rail is also slightly wider, because the creator avatar with its follow badge sits at the top of the column. When a caption is expanded it can climb well past the safe line, but viewers expect that and it is temporary; plan for the collapsed state.' },
        { h3: 'YouTube Shorts' },
        { p: 'Keep text inside x 60–940 and y 160–1540. Shorts has the most generous safe area of the organic players. The title, channel row and Subscribe button sit lower than their Reels and TikTok counterparts, and the top bar holds only search and a menu. The like and dislike pair on the right rail starts higher in the frame than you might expect, so do not let text drift to the right edge in the middle of the frame either.' },
        { h3: 'Instagram Stories' },
        { p: 'Meta recommends keeping roughly 14% of the frame — about 250 px — clear at both the top and bottom of a Story. The top holds the progress segments, account name and close button; the bottom holds the reply field and reaction buttons, or a link sticker and “Send message” bar. Sides are much freer than in Reels because there is no action rail, but a 65 px side margin still protects text from the rounded corners and edge gestures on modern phones.' },
        { h3: 'Reels ads' },
        { p: 'For paid Reels, Meta’s guidance is to keep 14% of the top (about 250 px), 35% of the bottom (about 670 px) and 6% of each side (about 65 px) free of text and logos. The much larger bottom margin accounts for the Sponsored label, the call-to-action button and the expanded ad caption. If one asset will run as both an organic post and an ad, design to the ad margins: they are the stricter of the two at the bottom.' },
      ],
    },
    {
      id: 'crops',
      title: 'Feed and grid crops: the second safe zone',
      blocks: [
        { p: 'A vertical video is not always shown at 9:16. When a Reel autoplays in the main Instagram or Facebook feed, it is cropped to 4:5. On your Instagram profile it becomes a 3:4 tile, the shape Instagram moved to in January 2025 after years of square thumbnails. Other surfaces still use 1:1. Each crop is taken from the vertical centre of your frame, so it removes equal bands from the top and the bottom.' },
        { table: 'crops' },
        { p: 'The practical consequence is that the top of your frame is squeezed from two directions. The Reels interface covers the first 220 px, while the 4:5 feed crop removes the first 285 px. A headline at y 240 is therefore safe in the Reels tab but cut off in the feed. If your Reel needs to work in both places, which is the default for most accounts, treat y 285 as the real top of your text area.' },
        { p: 'Cover images deserve special care. The thumbnail people see on your profile is the centre 1080 × 1440 of the cover frame, so a title placed near the top or bottom of a 9:16 cover will be cut off in the grid even though it looked fine in the editor. Turn on the 3:4 layer in the previewer and keep cover titles inside it, ideally in the middle third.' },
      ],
    },
    {
      id: 'math',
      title: 'The math: converting margins to any resolution',
      blocks: [
        { p: 'Safe zones are published in pixels on a 1080 × 1920 frame, but you may be editing at 720 × 1280, 2160 × 3840 or inside a design tool with an arbitrary canvas. Because every platform scales your upload to the screen, the margins scale proportionally. Convert them to fractions of the frame once and they work at any size.' },
        { pre: 'top%    = top    / 1920        right%  = right / 1080\nbottom% = bottom / 1920        left%   = left  / 1080\n\nmargin_at_your_size = margin% × your_height  (top, bottom)\n                    = margin% × your_width   (left, right)' },
        { p: 'For Instagram Reels that gives 11.46% top, 21.88% bottom, 5.56% left and 12.96% right. At 720 × 1280 those become 147, 280, 40 and 93 px. At 2160 × 3840 (4K vertical) they double to 440, 840, 120 and 280 px. The safe-area size follows directly:' },
        { pre: 'safe_width  = frame_width  − left − right     →  1080 − 60 − 140 = 880 px\nsafe_height = frame_height − top  − bottom    →  1920 − 220 − 420 = 1280 px\nusable      = (safe_width × safe_height) / (frame_width × frame_height)\n            = (880 × 1280) / (1080 × 1920) ≈ 54.3 %' },
        { h3: 'One layout for every platform' },
        { p: 'Many teams publish the same edit to all three short-video apps. In that case the safe zone is the intersection of all of them: take the largest top, right, bottom and left margin across the platforms you target. For Reels, TikTok and Shorts that is 220 px top (Reels), 150 px right (TikTok), 480 px bottom (TikTok) and 60 px left, which leaves a <strong>870 × 1220 px</strong> rectangle from x 60 to 930 and y 220 to 1440, about 51% of the frame. Add the 4:5 feed crop and the top limit moves to y 285, leaving 870 × 1155 px. Switch to the Custom preset and enter those values to keep a universal guide on screen.' },
        { pre: 'universal_top    = max(220, 180, 160) = 220   (285 if the 4:5 feed matters)\nuniversal_right  = max(140, 150, 140) = 150\nuniversal_bottom = max(420, 480, 380) = 480\nuniversal_left   = max( 60,  60,  60) =  60' },
      ],
    },
    {
      id: 'workflow',
      title: 'How to use the previewer in a real edit',
      blocks: [
        { ol: [
          '<strong>Export a still or a short clip</strong> from your editor at the final resolution. A single frame with your heaviest text is usually enough; a short clip is useful for checking animated captions.',
          '<strong>Drop it onto the previewer</strong> or paste a screenshot with Ctrl + V / ⌘ + V. Videos loop silently and can be scrubbed frame by frame with the slider under the frame.',
          '<strong>Switch between platforms</strong> to see each interface. The hatched red bands mark covered areas, and the green outline is the safe rectangle with its size in pixels.',
          '<strong>Hover any element</strong> — a word, a logo, a face — to read its exact frame coordinates and whether it sits inside the safe zone, behind a specific part of the interface, or outside the 4:5 feed crop.',
          '<strong>Fix the edit, not the preview.</strong> Fill and Fit, zoom and drag let you test how a reframe would look, but the authoritative fix belongs in your project file.',
          '<strong>Share the result.</strong> Download preview saves a 1080 × 1920 PNG with the overlay baked in for client approval; Copy specs puts the margins and safe-area coordinates on your clipboard for a brief or a ticket.',
        ] },
        { h3: 'Using the overlay template inside your editor' },
        { p: '“Download overlay” produces a transparent 1080 × 1920 PNG containing only the guides and interface you have switched on. Drop it on the top track of Premiere Pro, Final Cut Pro, DaVinci Resolve, CapCut or Canva, stretch it to the full frame, and lock or disable the track before export so it never ends up in the published video. Because the template is rendered at exactly 1080 × 1920, it aligns pixel for pixel with a vertical sequence of the same size and scales cleanly onto 4K vertical timelines.' },
      ],
    },
    {
      id: 'type',
      title: 'Placing subtitles, titles and calls to action',
      blocks: [
        { p: 'Knowing where the safe zone ends is half the job. The other half is laying out text so it reads at phone size inside that space.' },
        { ul: [
          '<strong>Subtitles:</strong> place the baseline of the bottom line between y 1180 and y 1420. That keeps two lines clear of the TikTok caption block, the tightest of the three, while staying low enough not to cover a speaker’s face. At 1080 px wide, a font size of 48–64 px with a heavy weight and a soft shadow or a solid box reads well on small screens.',
          '<strong>Line length:</strong> aim for roughly 32 characters per line and never more than two lines on screen. Long lines push text toward the right rail; a narrow, centred block is safer than a wide one.',
          '<strong>Hooks and headlines:</strong> the first second is often a full-frame title. Keep it between y 300 and y 900 so it survives the 4:5 feed crop and the top interface, and avoid the top-right corner where camera and search icons sit.',
          '<strong>Logos and handles:</strong> watermark-style logos in corners are almost always covered. Place them top-left inside the safe zone, or build the brand into the content itself.',
          '<strong>Calls to action:</strong> buttons, prices and arrows pointing at “the link below” must sit above the safe bottom line. An arrow pointing down into the caption area points at the platform’s interface, not your link.',
          '<strong>Faces:</strong> centre faces horizontally, or bias them slightly left, to keep them clear of the action rail. Eyes around one third of the way down the frame suit both 9:16 and 4:5 crops.',
        ] },
      ],
    },
    {
      id: 'accuracy',
      title: 'Why measurements differ between sources',
      blocks: [
        { p: 'If you compare safe-zone templates from different sites you will see numbers that differ by 20 to 80 px. That is expected, and it is not because one of them is wrong. App layouts change with updates and A/B tests, interface languages produce longer or shorter labels, accessibility text settings enlarge captions, captions vary in length, and some placements add rows such as shop tags or location stickers. Our organic presets are conservative reference values taken from current layouts; the ad and Stories presets follow Meta’s published guidance.' },
        { p: 'Treat every safe zone as a minimum, not a target. A small extra buffer — two or three percent of the frame, roughly 40 to 60 px — protects you from the next layout tweak. When a platform changes its interface significantly, we update the presets and the date at the top of this guide.' },
      ],
    },
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    { q: 'Are my videos or images uploaded anywhere?', a: 'No. Files are opened directly in your browser with standard web APIs and drawn on a canvas on your own device. Nothing is sent to a server, so unreleased client work and private footage stay private. Only your display preferences (platform, layers, opacity) are remembered, in your browser’s local storage.' },
    { q: 'What resolution should a vertical video be?', a: 'Export at 1080 × 1920 pixels (9:16) for Reels, TikTok, Shorts and Stories. All three short-video platforms accept higher resolutions such as 2160 × 3840 and scale them down for playback; the safe-zone percentages stay the same at any size.' },
    { q: 'What is the safe zone for Instagram Reels?', a: 'On a 1080 × 1920 frame, keep important content at least 220 px from the top, 420 px from the bottom, 60 px from the left and 140 px from the right. That leaves an 880 × 1280 px safe area. If the Reel will also appear in the main feed, keep text below y 285 as well, because the 4:5 feed crop removes the top and bottom 285 px.' },
    { q: 'What is the TikTok safe zone?', a: 'Keep content at least 180 px from the top, 480 px from the bottom, 60 px from the left and 150 px from the right, leaving an 870 × 1260 px area. TikTok’s bottom margin is the largest of the organic players because captions, hashtags and the sound row stack above the navigation bar.' },
    { q: 'Is there one safe zone that works on every platform?', a: 'Yes: use the largest margin on each side across the platforms you post to. For Reels, TikTok and Shorts together that is 220 px top, 150 px right, 480 px bottom and 60 px left, an 870 × 1220 px area. Enter those values in the Custom preset to keep it on screen.' },
    { q: 'Why does my Reel look cropped in the feed?', a: 'In the home feed, Instagram shows Reels at 4:5 (1080 × 1350), removing 285 px from the top and bottom of the 9:16 frame. On your profile grid, Reels show as 3:4 tiles (1080 × 1440), removing 240 px from each end. Turn on the crop layers to see both.' },
    { q: 'Can I use the downloaded overlay in Premiere Pro, CapCut or Canva?', a: 'Yes. “Download overlay” saves a transparent 1080 × 1920 PNG with only the guides you have enabled. Place it on the top layer of your project as a reference, then hide or delete it before exporting the final video.' },
    { q: 'Does the previewer work with horizontal or square files?', a: 'It does. Choose Fill frame to see how a platform would crop the file to 9:16, or Fit inside to see it letterboxed. The media panel flags any file that is not 9:16 so you know the platform will crop or pad it.' },
    { q: 'How often are the specs updated?', a: 'We review the presets whenever Instagram, TikTok or YouTube ships a visible change to the player layout, and at least quarterly. The review date is shown at the top of this guide.' },
  ],
};

export default en;
