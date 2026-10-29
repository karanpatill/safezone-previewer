export const SITE = {
  name: 'SafeZoneSnap',
  domain: 'https://safezonesnap.com',
  email: 'support@safezonesnap.com',
  /** Set to your AdSense publisher ID (e.g. "ca-pub-1234567890123456") once approved. */
  adsenseClient: '' as string,
  author: 'Karan Patil',
  updated: '2026-10-30',
} as const;

export const LOCALES = ['en', 'es', 'pt', 'fr', 'de', 'hi'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<Locale, { name: string; htmlLang: string; og: string }> = {
  en: { name: 'English', htmlLang: 'en', og: 'en_US' },
  es: { name: 'Español', htmlLang: 'es', og: 'es_ES' },
  pt: { name: 'Português', htmlLang: 'pt-BR', og: 'pt_BR' },
  fr: { name: 'Français', htmlLang: 'fr', og: 'fr_FR' },
  de: { name: 'Deutsch', htmlLang: 'de', og: 'de_DE' },
  hi: { name: 'हिन्दी', htmlLang: 'hi', og: 'hi_IN' },
};

export const homePath = (l: Locale) => (l === 'en' ? '/' : `/${l}/`);
