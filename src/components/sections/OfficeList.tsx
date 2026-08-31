import { Container } from '@/src/components/layout/Container';
import { SectionHeading } from '@/src/components/SectionHeading';
import { OFFICES } from '@/src/lib/content/offices';

export function OfficeList() {
  return (
    <section id="offices" className="py-20">
      <Container>
        <SectionHeading eyebrow="Contact Us" title="Our offices" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICES.map((office) => (
            <li
              key={office.entity}
              className="border-border bg-card text-card-foreground rounded-lg border p-6"
            >
              <h3 className="font-semibold">{office.entity}</h3>
              <address className="text-muted-foreground mt-2 text-sm not-italic">
                {office.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              {office.email ? (
                <a
                  href={`mailto:${office.email}`}
                  className="text-brand-accent mt-3 inline-block text-sm font-medium underline underline-offset-4"
                >
                  {office.email}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
