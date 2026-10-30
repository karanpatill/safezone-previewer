import type { APIRoute } from 'astro';
import { SITE, LOCALES, LOCALE_META, homePath } from '../config/site';
import { abs } from '../config/seo';
import { keyFacts, markdownResponse, sourcesList } from '../data/llms';

interface Post { url: string; frontmatter: { title: string; description: string; summary?: string; date: string } }
const posts = Object.values(import.meta.glob<Post>('./blog/*.md', { eager: true }))
  .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));

export const GET: APIRoute = () => markdownResponse(`
# ${SITE.name}

> ${SITE.name} is a free, browser-based safe zone checker for vertical video. It shows exactly where Instagram Reels, TikTok, YouTube Shorts, Instagram Stories and Reels ads draw their buttons, captions and navigation over a 1080 × 1920 (9:16) frame, and how the 4:5 feed, 3:4 profile grid and 1:1 crops cut it. Files never leave the browser.

${keyFacts()}

## Tool

${LOCALES.map((l) => `- [Safe zone previewer and guide (${LOCALE_META[l].name})](${abs(homePath(l))}): interactive checker with the full measured guide, spec tables and FAQ`).join('\n')}

## Guides

${posts.map((p) => `- [${p.frontmatter.title}](${abs(p.url + '/')}): ${p.frontmatter.summary ?? p.frontmatter.description}`).join('\n')}

## Primary platform references

${sourcesList()}

## Optional

- [Full text of the guide and every article](${abs('/llms-full.txt')}): single Markdown file for context windows
- [About and measurement methodology](${abs('/about/')}): who maintains the site and how presets are measured
- [Disclaimer](${abs('/disclaimer/')}): measurements are references, not platform guarantees
- [Contact](${abs('/contact/')}): report a platform layout change
`);
