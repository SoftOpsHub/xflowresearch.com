import { Container } from '@/src/components/layout/Container';
import { SectionHeading } from '@/src/components/SectionHeading';

const AREAS = [
  'SDN controllers and Open vSwitch porting',
  'Network overlays: VxLAN, NVGRE, STT, GTP',
  'NIC porting, virtualization, OpenFlow, DPDK, SR-IOV',
  'Benchmarking and profiling',
  'TCAM optimization and data-visualization software',
];

export function AboutExpertise() {
  return (
    <section id="about-expertise" className="border-border border-t py-20">
      <Container className="max-w-3xl">
        <SectionHeading align="start" title="Focus areas" />
        <ul className="mt-6 space-y-3">
          {AREAS.map((area) => (
            <li key={area} className="text-muted-foreground flex gap-3 text-base">
              <span aria-hidden className="bg-brand-accent mt-2 size-1.5 shrink-0 rounded-full" />
              {area}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
