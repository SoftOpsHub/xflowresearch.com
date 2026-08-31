import type { ReactNode } from 'react';
import { Container } from '@/src/components/layout/Container';
import { SectionHeading } from '@/src/components/SectionHeading';
import { assetSrc } from '@/src/lib/assets';
import { SERVICES } from '@/src/lib/content/services';
import type { Service } from '@/src/lib/content/types';

function Card({ service }: { service: Service }) {
  const inner: ReactNode = (
    <>
      <span className="bg-brand-header flex size-16 shrink-0 items-center justify-center rounded-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetSrc(service.icon)}
          alt=""
          className="size-8 object-contain brightness-0 invert"
        />
      </span>
      <span className="text-foreground group-hover:text-brand-accent text-base font-semibold">
        {service.name}
      </span>
    </>
  );

  const className = 'group flex items-center gap-4 py-4';

  return service.href ? (
    <a href={service.href} target="_blank" rel="noreferrer noopener" className={className}>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
}

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          align="start"
          title="Areas of Expertise"
          intro="xFlow Research specialises in advanced telecom and cloud infrastructure, custom software development, and data analytics — spanning NFV/SDN, DevOps, testing, cyber security, and open-source collaboration."
        />
        <ul className="mt-10 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li key={service.slug}>
              <Card service={service} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
