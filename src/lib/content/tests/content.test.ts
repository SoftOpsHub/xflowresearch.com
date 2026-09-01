import { describe, it, expect } from 'vitest';
import { ASSET_KEYS } from '@/src/lib/assets';
import { SITE } from '@/src/lib/content/site';
import { SERVICES, SERVICE_PAGES } from '@/src/lib/content/services';
import { SERVICE_CONTENT } from '@/src/lib/content/service-content';
import { PRODUCTS, PRODUCT_PAGES } from '@/src/lib/content/products';
import { PRODUCT_CONTENT } from '@/src/lib/content/product-content';
import { PARTNERS } from '@/src/lib/content/partners';
import { OFFICES } from '@/src/lib/content/offices';
import { PAGES } from '@/src/lib/content/metadata';

const keys = new Set(ASSET_KEYS);
const routes = ['/', '/about-us', '/contact'];

function collectAssetKeys(): string[] {
  const out: string[] = [SITE.logo];
  SERVICES.forEach((s) => out.push(s.icon));
  PRODUCTS.forEach((p) => p.image && out.push(p.image));
  PARTNERS.forEach((p) => out.push(p.logo));
  OFFICES.forEach((o) => out.push(o.logo));
  Object.values(PAGES).forEach((p) => out.push(p.ogImage));
  for (const { blocks } of [...Object.values(SERVICE_CONTENT), ...Object.values(PRODUCT_CONTENT)]) {
    for (const block of blocks) {
      if (block.type === 'gallery') block.items.forEach((it) => out.push(it.image));
    }
  }
  return out;
}

describe('content data integrity', () => {
  it('every referenced asset key exists in the manifest', () => {
    const missing = collectAssetKeys()
      .filter((k) => !k.startsWith('lucide:'))
      .filter((k) => !keys.has(k));
    expect(missing).toEqual([]);
  });

  it('nav points at the three real routes', () => {
    expect(SITE.navItems.map((n) => n.href)).toEqual(routes);
  });

  it('footer text matches the live copyright line', () => {
    expect(SITE.footerText).toBe('© 2026 · xFlow Research Inc · All Rights Reserved');
  });

  it('has exactly three offices; Dubai and Austin carry an email', () => {
    expect(OFFICES).toHaveLength(3);
    OFFICES.forEach((o) => expect(o.addressLines.length).toBeGreaterThan(0));
    expect(OFFICES.filter((o) => o.email).map((o) => o.entity)).toEqual([
      'X Flow Software Technology LLC',
      'xFlow Research Inc.',
    ]);
  });

  it('no content string hotlinks a live asset', () => {
    const blob = JSON.stringify({ SERVICES, PRODUCTS, PARTNERS });
    expect(blob).not.toMatch(/xflowresearch\.com\/wp-content/);
  });

  it('every service and product page carries body content', () => {
    for (const s of SERVICE_PAGES) {
      const content = SERVICE_CONTENT[s.slug];
      expect(content, s.slug).toBeDefined();
      expect(content?.blocks.length ?? 0, s.slug).toBeGreaterThan(0);
    }
    for (const p of PRODUCT_PAGES) {
      const content = PRODUCT_CONTENT[p.slug];
      expect(content, p.slug).toBeDefined();
      expect(content?.blocks.length ?? 0, p.slug).toBeGreaterThan(0);
    }
  });

  it('service and product content use the xFlow Research brand only', () => {
    const blob = JSON.stringify({ SERVICE_CONTENT, PRODUCT_CONTENT });
    expect(blob).not.toMatch(/xFlow Tech|xflowtech\.net/);
  });

  it('every page has a non-empty ordered section list', () => {
    for (const route of routes) {
      const meta = PAGES[route as keyof typeof PAGES];
      expect(meta.sections.length).toBeGreaterThan(0);
    }
  });

  it('service, product and partner names are unique and non-empty', () => {
    for (const list of [
      SERVICES.map((s) => s.name),
      PRODUCTS.map((p) => p.name),
      PARTNERS.map((p) => p.name),
    ]) {
      expect(list.every((n) => n.trim().length > 0)).toBe(true);
      expect(new Set(list).size).toBe(list.length);
    }
  });
});
