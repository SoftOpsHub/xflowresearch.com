import { Container } from '@/src/components/layout/Container';
import { SectionHeading } from '@/src/components/SectionHeading';
import { assetSrc } from '@/src/lib/assets';
import { PRODUCTS } from '@/src/lib/content/products';

export function Products() {
  return (
    <section id="products" className="border-border border-t py-20">
      <Container>
        <SectionHeading eyebrow="Products" title="Products" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <li
              key={product.slug}
              className="border-border bg-card flex flex-col rounded-lg border p-6"
            >
              {product.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={assetSrc(product.image)}
                  alt=""
                  className="mb-4 h-32 w-full rounded-md object-contain"
                />
              ) : null}
              <h3 className="text-card-foreground font-semibold">{product.name}</h3>
              <p className="text-muted-foreground mt-1 text-sm">{product.blurb}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
