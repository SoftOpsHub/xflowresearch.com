import { Container } from '@/src/components/layout/Container';
import { SectionHeading } from '@/src/components/SectionHeading';
import { assetSrc } from '@/src/lib/assets';
import type { AssetKey } from '@/src/lib/content/types';

interface LogoItem {
  name: string;
  logo: AssetKey | null;
  url?: string | null;
}

interface LogoWallProps {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: readonly LogoItem[];
}

export function LogoWall({ id, eyebrow, title, intro, items }: LogoWallProps) {
  return (
    <section id={id} className="border-border border-t py-20">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <ul className="mt-12 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => {
            const img = item.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={assetSrc(item.logo)}
                alt={item.name}
                className="max-h-14 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
              />
            ) : (
              <span className="text-muted-foreground text-sm font-medium">{item.name}</span>
            );
            return (
              <li key={item.name} className="flex items-center justify-center">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer noopener" title={item.name}>
                    {img}
                  </a>
                ) : (
                  img
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
