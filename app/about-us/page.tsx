import type { Metadata } from 'next';
import { AboutIntro } from '@/src/components/sections/AboutIntro';
import { AboutExpertise } from '@/src/components/sections/AboutExpertise';
import { AboutOpenStack } from '@/src/components/sections/AboutOpenStack';
import { AboutNfv } from '@/src/components/sections/AboutNfv';
import { PAGES } from '@/src/lib/content/metadata';

export const metadata: Metadata = {
  title: PAGES['/about-us'].title,
  description: PAGES['/about-us'].description,
};

export default function AboutUsPage() {
  return (
    <>
      <AboutIntro />
      <AboutExpertise />
      <AboutOpenStack />
      <AboutNfv />
    </>
  );
}
