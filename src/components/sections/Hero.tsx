import { Container } from '@/src/components/layout/Container';
import { assetSrc, hasAsset } from '@/src/lib/assets';
import { INTRO, TAGLINE } from '@/src/lib/content/site';

// Drop a photo at public/assets/hero-bg.jpg (and keep the manifest key) to use a
// background image; otherwise the hero falls back to a solid brand gradient.
const heroBg = hasAsset('hero-bg') ? assetSrc('hero-bg') : null;

export function Hero() {
  return (
    <section
      className="bg-brand-header relative isolate overflow-hidden text-white"
      style={
        heroBg
          ? {
              backgroundImage: `url(${heroBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="bg-brand-header/80 absolute inset-0 -z-10" />
      <Container className="py-24 text-center sm:py-32">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{TAGLINE}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-base text-white/85 sm:text-lg">{INTRO}</p>
      </Container>
    </section>
  );
}
