import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="p-8">
      <p>Page not found.</p>
      <Link className="mt-2 inline-block underline" href="/">
        Go home
      </Link>
    </div>
  );
}
