"""
Generate full production favicon, app icon, and touch icon suite for SafeZoneSnap.
Creates:
- favicon.ico (16x16, 32x32, 48x48)
- favicon-16x16.png
- favicon-32x32.png
- favicon-48x48.png
- favicon-96x96.png
- apple-touch-icon.png (180x180)
- mstile-150x150.png (150x150)
- android-chrome-192x192.png (192x192)
- android-chrome-512x512.png (512x512)
- android-chrome-maskable-512x512.png (512x512 with safe padding)
"""

import os
from PIL import Image, ImageDraw

def render_master_icon(size=1024, padding_ratio=0.10, bg_color=(8, 9, 12, 255), is_maskable=False):
    """
    Renders the SafeZoneSnap phone + safe zone overlay logo.
    size: width & height in px
    padding_ratio: extra breathing space around the graphic (maskable needs ~20% padding)
    """
    img = Image.new("RGBA", (size, size), bg_color)
    draw = ImageDraw.Draw(img)

    # Effective drawing area
    pad = int(size * (0.22 if is_maskable else padding_ratio))
    x0, y0 = pad, pad
    x1, y1 = size - pad, size - pad
    w = x1 - x0
    h = y1 - y0

    # Phone dimensions (aspect approx 9:16 inside bounds)
    phone_w = int(w * 0.62)
    phone_h = int(h * 0.96)
    px0 = x0 + (w - phone_w) // 2
    py0 = y0 + (h - phone_h) // 2
    px1 = px0 + phone_w
    py1 = py0 + phone_h

    corner_r = int(phone_w * 0.18)
    stroke_w = max(4, int(size * 0.038))

    # Outer phone border (light slate / white)
    draw.rounded_rectangle(
        [px0, py0, px1, py1],
        radius=corner_r,
        outline=(244, 245, 247, 255),
        width=stroke_w
    )

    # Phone dynamic island / speaker notch at top
    notch_w = int(phone_w * 0.32)
    notch_h = max(6, int(size * 0.024))
    nx0 = px0 + (phone_w - notch_w) // 2
    ny0 = py0 + stroke_w + int(size * 0.02)
    draw.rounded_rectangle(
        [nx0, ny0, nx0 + notch_w, ny0 + notch_h],
        radius=notch_h // 2,
        fill=(100, 116, 139, 200)
    )

    # Safe Zone inner boundary (Emerald green #34d399)
    # Scaled to represent the Reels / TikTok central content safe zone
    sz_margin_x = int(phone_w * 0.16)
    sz_top = int(phone_h * 0.18)
    sz_bottom = int(phone_h * 0.22)

    sx0 = px0 + sz_margin_x
    sy0 = py0 + sz_top
    sx1 = px1 - sz_margin_x
    sy1 = py1 - sz_bottom
    sz_radius = int(phone_w * 0.08)
    sz_stroke = max(3, int(size * 0.032))

    # Soft emerald glow / subtle fill
    draw.rounded_rectangle(
        [sx0, sy0, sx1, sy1],
        radius=sz_radius,
        fill=(52, 211, 153, 30),
        outline=(52, 211, 153, 255),
        width=sz_stroke
    )

    # Home indicator bar at bottom
    bar_w = int(phone_w * 0.36)
    bar_h = max(4, int(size * 0.014))
    bx0 = px0 + (phone_w - bar_w) // 2
    by0 = py1 - stroke_w - int(size * 0.026)
    draw.rounded_rectangle(
        [bx0, by0, bx0 + bar_w, by0 + bar_h],
        radius=bar_h // 2,
        fill=(100, 116, 139, 200)
    )

    return img

def main():
    public_dir = os.path.join(os.path.dirname(__file__), "..", "public")
    public_dir = os.path.abspath(public_dir)
    print(f"Generating icon suite in {public_dir}...")

    # Master high-res images
    master_standard = render_master_icon(size=1024, padding_ratio=0.10)
    master_maskable = render_master_icon(size=1024, is_maskable=True)

    # 1. Favicon PNGs
    for sz in [16, 32, 48, 96]:
        resized = master_standard.resize((sz, sz), Image.Resampling.LANCZOS)
        out_path = os.path.join(public_dir, f"favicon-{sz}x{sz}.png")
        resized.save(out_path, "PNG", optimize=True)
        print(f"Generated {out_path}")

    # 2. Multi-resolution favicon.ico (16, 32, 48)
    ico_16 = master_standard.resize((16, 16), Image.Resampling.LANCZOS)
    ico_32 = master_standard.resize((32, 32), Image.Resampling.LANCZOS)
    ico_48 = master_standard.resize((48, 48), Image.Resampling.LANCZOS)
    ico_path = os.path.join(public_dir, "favicon.ico")
    ico_32.save(
        ico_path,
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=[ico_16, ico_48]
    )
    print(f"Generated {ico_path}")

    # 3. Apple Touch Icon (180x180)
    apple_icon = master_standard.resize((180, 180), Image.Resampling.LANCZOS)
    apple_path = os.path.join(public_dir, "apple-touch-icon.png")
    apple_icon.save(apple_path, "PNG", optimize=True)
    print(f"Generated {apple_path}")

    # 4. Microsoft Tile (150x150)
    mstile = master_standard.resize((150, 150), Image.Resampling.LANCZOS)
    mstile_path = os.path.join(public_dir, "mstile-150x150.png")
    mstile.save(mstile_path, "PNG", optimize=True)
    print(f"Generated {mstile_path}")

    # 5. Android Chrome icons
    chrome_192 = master_standard.resize((192, 192), Image.Resampling.LANCZOS)
    chrome_192.save(os.path.join(public_dir, "android-chrome-192x192.png"), "PNG", optimize=True)

    chrome_512 = master_standard.resize((512, 512), Image.Resampling.LANCZOS)
    chrome_512.save(os.path.join(public_dir, "android-chrome-512x512.png"), "PNG", optimize=True)

    maskable_512 = master_maskable.resize((512, 512), Image.Resampling.LANCZOS)
    maskable_512.save(os.path.join(public_dir, "android-chrome-maskable-512x512.png"), "PNG", optimize=True)
    print("Generated Android Chrome standard & maskable icons")

if __name__ == "__main__":
    main()
