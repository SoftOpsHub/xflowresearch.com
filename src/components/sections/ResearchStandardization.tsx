import { RESEARCH_PARTNERS } from '@/src/lib/content/research';
import { LogoWall } from './LogoWall';

export function ResearchStandardization() {
  return (
    <LogoWall
      id="research-standardization"
      eyebrow="Standards"
      title="Research and Standardization"
      items={RESEARCH_PARTNERS}
    />
  );
}
