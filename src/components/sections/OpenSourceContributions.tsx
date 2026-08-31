import { OPEN_SOURCE } from '@/src/lib/content/open-source';
import { LogoWall } from './LogoWall';

export function OpenSourceContributions() {
  return (
    <LogoWall
      id="open-source"
      eyebrow="Community"
      title="Open-Source Contributions and Developments"
      items={OPEN_SOURCE}
      chip
    />
  );
}
