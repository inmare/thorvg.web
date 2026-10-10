import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://thorvg-perf-test.vercel.app'),
  title: 'ThorVG Web — Performance Test',
  description: 'ThorVG WebCanvas performance tester for SW / WebGL / WebGPU renderers',
  openGraph: {
    title: 'ThorVG Web — Performance Test',
    description: 'ThorVG WebCanvas performance tester for SW / WebGL / WebGPU renderers',
    url: '/',
    siteName: 'ThorVG Web - Performance Test',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 750,
        alt: 'ThorVG Web Performance Test'
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
