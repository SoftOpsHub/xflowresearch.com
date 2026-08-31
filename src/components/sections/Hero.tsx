import { Container } from '@/src/components/layout/Container';
import { INTRO, SITE, TAGLINE } from '@/src/lib/content/site';

export function Hero() {
  return (
    <section className="bg-brand-header text-white">
      <Container className="py-20 text-center sm:py-28">
        <p className="text-sm font-semibold tracking-wide text-white/70 uppercase">
          {SITE.siteName}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{TAGLINE}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">{INTRO}</p>
      </Container>
    </section>
  );
}
