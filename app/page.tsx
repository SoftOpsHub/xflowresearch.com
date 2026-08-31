import { Container } from '@/src/components/layout/Container';

export default function Home() {
  return (
    <main className="py-16">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">XFLOW Research</h1>
        <p className="text-muted-foreground mt-2">
          Static site scaffold — Next.js static export, Tailwind, shadcn/ui, Zustand.
        </p>
      </Container>
    </main>
  );
}
