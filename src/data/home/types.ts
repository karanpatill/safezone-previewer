export type Block =
  | { p: string }
  | { h3: string }
  | { ul: string[] }
  | { ol: string[] }
  | { pre: string }
  | { table: 'specs' | 'crops' };

export interface Section { id: string; title: string; blocks: Block[] }

export interface HomeContent {
  toc: string;
  sections: Section[];
  /** Localized "where it appears" cells for the crop table, in 4:5, 3:4, 1:1 order. */
  cropWhere: [string, string, string];
  faqTitle: string;
  faqs: { q: string; a: string }[];
}
