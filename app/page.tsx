import type { Metadata } from 'next';
import { Hero } from '@/src/components/sections/Hero';
import { ServicesGrid } from '@/src/components/sections/ServicesGrid';
import { OpenSourceContributions } from '@/src/components/sections/OpenSourceContributions';
import { ResearchStandardization } from '@/src/components/sections/ResearchStandardization';
import { Products } from '@/src/components/sections/Products';
import { PartnerLogoWall } from '@/src/components/sections/PartnerLogoWall';
import { PAGES } from '@/src/lib/content/metadata';

export const metadata: Metadata = {
  title: PAGES['/'].title,
  description: PAGES['/'].description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <OpenSourceContributions />
      <ResearchStandardization />
      <Products />
      <PartnerLogoWall />
    </>
  );
}
