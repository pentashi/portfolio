import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';
import { JetBrains_Mono } from 'next/font/google';
import { site, person } from '@/config/portfolio';

// Applies the visitor's saved theme (if any) before first paint, so there's no
// flash. There is no forced default — the base :root look is used until a theme
// is picked in the tour. Runs synchronously as the first thing in <body>; the
// tour writes the same `pf-theme` localStorage key.
const themeInit = `(function(){try{var t=localStorage.getItem('pf-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.brand,
  authors: [{ name: `${person.firstName} ${person.lastName}` }],
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: site.logo, type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.title,
    title: site.title,
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
};

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrains.className}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
