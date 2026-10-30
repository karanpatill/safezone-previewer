import type { APIRoute } from 'astro';
import { SITE, LOCALES, LOCALE_META, homePath } from '../config/site';
import { abs } from '../config/seo';

interface Md { url: string; frontmatter: { date?: string; updated?: string } }

// Every Markdown page (blog posts, about, legal) is picked up automatically, with its own lastmod.
const md = Object.values(import.meta.glob<Md>(['./*.md', './blog/*.md'], { eager: true }))
  .map((m) => ({ path: `${m.url}/`, lastmod: m.frontmatter.updated ?? m.frontmatter.date ?? SITE.updated }));
const astroPages = ['/blog/', '/contact/'].map((path) => ({ path, lastmod: SITE.updated }));

const link = (hreflang: string, p: string) => `<xhtml:link rel="alternate" hreflang="${hreflang}" href="${abs(p)}"/>`;

export const GET: APIRoute = () => {
  const homeAlternates = LOCALES.map((l) => link(LOCALE_META[l].htmlLang, homePath(l))).join('') + link('x-default', '/');

  const entries = [
    ...LOCALES.map((l) => `<url><loc>${abs(homePath(l))}</loc><lastmod>${SITE.updated}</lastmod>${homeAlternates}</url>`),
    // English-only pages: self-referencing en + x-default, matching the tags in their <head>.
    ...[...astroPages, ...md]
      .sort((a, b) => a.path.localeCompare(b.path))
      .map(({ path, lastmod }) => `<url><loc>${abs(path)}</loc><lastmod>${lastmod}</lastmod>${link('en', path)}${link('x-default', path)}</url>`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
