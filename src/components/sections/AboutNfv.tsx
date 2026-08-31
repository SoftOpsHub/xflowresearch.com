import { Container } from '@/src/components/layout/Container';
import { SectionHeading } from '@/src/components/SectionHeading';

export function AboutNfv() {
  return (
    <section id="about-nfv" className="border-border border-t py-20">
      <Container className="max-w-3xl">
        <SectionHeading align="start" title="NFV" />
        <p className="text-muted-foreground mt-6 text-base">
          In NFV the focus is research and development around virtualized network functions,
          NFV-infrastructure development and automation, VNF management, and orchestration. The
          company is active in NFV R&amp;D and has completed a number of proof-of-concept projects.
        </p>
      </Container>
    </section>
  );
}
