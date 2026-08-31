import { Container } from '@/src/components/layout/Container';
import { SectionHeading } from '@/src/components/SectionHeading';

export function AboutIntro() {
  return (
    <section id="about-intro" className="py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          align="start"
          eyebrow="About Us"
          title="Network infrastructure, from research to production"
        />
        <div className="text-muted-foreground mt-6 space-y-4 text-base">
          <p>
            xFlow Research Inc. was among the first companies to offer SDN, NFV, and OpenStack
            development services. Its roots in academic networking research give it the skills and
            resources to move quickly from proof of concept to scalable software.
          </p>
          <p>
            The team works across controllers, Open vSwitch, network overlays, NIC porting,
            virtualization, OpenFlow, DPDK, and SR-IOV, and delivers benchmarking and profiling
            services alongside custom TCAM-optimization and data-visualization software.
          </p>
        </div>
      </Container>
    </section>
  );
}
