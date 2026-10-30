import os

layout_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "src", "layouts", "Layout.astro"))

with open(layout_path, "r", encoding="utf-8") as f:
    content = f.read()

# Normalize CRLF to LF for consistent matching
content = content.replace("\r\n", "\n")

target_favicon = '    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n    <link rel="sitemap" href="/sitemap.xml" />'

replacement_favicon = '''    <!-- Multi-platform Favicons & Browser Icons -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="shortcut icon" href="/favicon.ico" />

    <!-- Apple iOS Safari & Home Screen -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="SafeZoneSnap" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

    <!-- Safari Pinned Tab -->
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#34d399" />

    <!-- Progressive Web App (PWA) & Android -->
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="application-name" content="SafeZoneSnap" />
    <meta name="mobile-web-app-capable" content="yes" />

    <!-- Microsoft Tiles (Windows 10/11 Start & Edge) -->
    <meta name="msapplication-TileColor" content="#08090c" />
    <meta name="msapplication-config" content="/browserconfig.xml" />

    <link rel="sitemap" href="/sitemap.xml" />'''

target_og = '    <meta property="og:image" content={imageUrl} />'
replacement_og = '''    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:secure_url" content={imageUrl} />'''

target_tw = '    <meta name="twitter:card" content="summary_large_image" />'
replacement_tw = '''    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@SafeZoneSnap" />
    <meta name="twitter:creator" content="@SafeZoneSnap" />'''

if target_favicon in content:
    content = content.replace(target_favicon, replacement_favicon)
    print("Replaced favicon section")
else:
    print("target_favicon NOT found")

if target_og in content:
    content = content.replace(target_og, replacement_og)
    print("Replaced og section")

if target_tw in content:
    content = content.replace(target_tw, replacement_tw)
    print("Replaced twitter section")

with open(layout_path, "w", encoding="utf-8", newline="\n") as f:
    f.write(content)

print("Saved updated Layout.astro")
