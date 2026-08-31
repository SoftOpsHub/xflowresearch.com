import { Container } from '@/src/components/layout/Container';
import { SectionHeading } from '@/src/components/SectionHeading';
import { assetSrc } from '@/src/lib/assets';
import { SERVICES } from '@/src/lib/content/services';

export function ServicesGrid() {
  return (
    <section id="services" className="py-20">
      <Container>
        <SectionHeading eyebrow="What we do" title="Areas of Expertise" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li
              key={service.slug}
              className="border-border bg-card flex gap-4 rounded-lg border p-5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetSrc(service.icon)}
                alt=""
                className="size-10 shrink-0 object-contain"
              />
              <div>
                <h3 className="text-card-foreground font-semibold">{service.name}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{service.blurb}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
