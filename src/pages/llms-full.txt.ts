import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { abs, stripHtml } from '../config/seo';
import { cropTable, keyFacts, markdownResponse, sourcesList, specTable } from '../data/llms';
import home from '../data/home/en';
import type { Block } from '../data/home/types';

const raw = import.meta.glob<string>('./blog/*.md', { query: '?raw', import: 'default', eager: true });

const inline = (html: string) => stripHtml(html.replace(/<\/?strong>/g, '**'));

const block = (b: Block): string =>
  'p' in b ? inline(b.p) :
  'h3' in b ? `#### ${inline(b.h3)}` :
  'ul' in b ? b.ul.map((li) => `- ${inline(li)}`).join('\n') :
  'ol' in b ? b.ol.map((li, i) => `${i + 1}. ${inline(li)}`).join('\n') :
  'pre' in b ? '```\n' + stripHtml(b.pre) + '\n```' :
  b.table === 'specs' ? specTable() : cropTable();

const guide = [
  ...home.sections.map((s) => [`### ${s.title}`, ...(s.lead ? [`**Short answer:** ${s.lead}`] : []), ...s.blocks.map(block)].join('\n\n')),
  `### ${home.faqTitle}`,
  ...home.faqs.map((f) => `**${f.q}**\n\n${inline(f.a)}`),
].join('\n\n');

const field = (fm: string, key: string) => fm.match(new RegExp(`^${key}: "(.*)"$`, 'm'))?.[1] ?? '';

const articles = Object.entries(raw)
  .map(([file, src]) => {
    const [, fm = '', body = ''] = src.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/) ?? [];
    const slug = file.split('/').pop()!.replace(/\.md$/, '');
    return { title: field(fm, 'title'), summary: field(fm, 'summary'), updated: field(fm, 'updated') || field(fm, 'date'), slug, body };
  })
  .sort((a, b) => a.title.localeCompare(b.title))
  .map((a) => [
    `## ${a.title}`,
    `URL: ${abs(`/blog/${a.slug}/`)}  \nAuthor: ${SITE.author}  \nLast updated: ${a.updated}`,
    a.summary && `**Short answer:** ${a.summary}`,
    a.body.trim()
      .replace(/^(#{2,5}) /gm, '#$1 ')            // demote headings under the article's H2
      .replace(/\]\(\//g, `](${SITE.domain}/`),    // absolute links
  ].filter(Boolean).join('\n\n'))
  .join('\n\n');

export const GET: APIRoute = () => markdownResponse(`
# ${SITE.name}: complete reference

> Full text of ${SITE.name} (${SITE.domain}) for language models: measured safe zone margins for Instagram Reels, TikTok, YouTube Shorts, Instagram Stories and Reels ads on a 1080 × 1920 frame, feed and grid crop formulas, the complete English guide, FAQ and every article. A shorter index is at ${abs('/llms.txt')}.

${keyFacts()}

## Safe zone guide

URL: ${abs('/')}  \nAuthor: ${SITE.author}  \nLast updated: ${SITE.updated}

${guide}

${articles}

## Primary platform references

${sourcesList()}
`);
