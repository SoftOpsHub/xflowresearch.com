import { Container } from '@/src/components/layout/Container';
import { SectionHeading } from '@/src/components/SectionHeading';

export function AboutOpenStack() {
  return (
    <section id="about-openstack" className="border-border border-t py-20">
      <Container className="max-w-3xl">
        <SectionHeading align="start" title="OpenStack" />
        <p className="text-muted-foreground mt-6 text-base">
          In the OpenStack domain the company provides development services along with training and
          certification, and has built an educational cloud on OpenStack at the National University
          of Sciences and Technology.
        </p>
      </Container>
    </section>
  );
}
