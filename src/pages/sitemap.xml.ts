import type { APIRoute } from 'astro';
import { SITE, LOCALES, LOCALE_META, homePath } from '../config/site';

const posts = Object.keys(import.meta.glob('./blog/*.md')).map((f) => `/blog/${f.split('/').pop()!.replace(/\.md$/, '')}/`);
const pages = ['/blog/', '/about/', '/contact/', '/privacy-policy/', '/terms-of-service/', '/disclaimer/'];

const url = (p: string) => new URL(p, SITE.domain).href;

export const GET: APIRoute = () => {
  const homeAlternates = LOCALES.map((l) => `<xhtml:link rel="alternate" hreflang="${LOCALE_META[l].htmlLang}" href="${url(homePath(l))}"/>`).join('')
    + `<xhtml:link rel="alternate" hreflang="x-default" href="${url('/')}"/>`;

  const entries = [
    ...LOCALES.map((l) => `<url><loc>${url(homePath(l))}</loc><lastmod>${SITE.updated}</lastmod>${homeAlternates}</url>`),
    ...[...posts, ...pages].map((p) => `<url><loc>${url(p)}</loc><lastmod>${SITE.updated}</lastmod></url>`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
