import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/src/test/render';
import { ServicesGrid } from '../ServicesGrid';
import { Products } from '../Products';
import { PartnerLogoWall } from '../PartnerLogoWall';
import { SERVICES } from '@/src/lib/content/services';
import { PRODUCTS } from '@/src/lib/content/products';
import { PARTNERS } from '@/src/lib/content/partners';

describe('home sections', () => {
  it('ServicesGrid renders one heading per service', () => {
    renderWithProviders(<ServicesGrid />);
    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { name: service.name })).toBeInTheDocument();
    }
  });

  it('Products renders one card per product', () => {
    renderWithProviders(<Products />);
    for (const product of PRODUCTS) {
      expect(screen.getByRole('heading', { name: product.name })).toBeInTheDocument();
    }
  });

  it('PartnerLogoWall renders an image per partner with its name as alt', () => {
    renderWithProviders(<PartnerLogoWall />);
    for (const partner of PARTNERS) {
      expect(screen.getByRole('img', { name: partner.name })).toBeInTheDocument();
    }
  });
});
