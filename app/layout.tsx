import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { cn } from '@/src/lib/utils';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'XFLOW Research',
  description: 'XFLOW research — a static site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn('font-sans', ibmPlexSans.variable, ibmPlexMono.variable)}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
