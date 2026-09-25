import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';
import { JetBrains_Mono } from 'next/font/google';
import { site } from '@/config/portfolio';

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
  title: site.title,
  description: site.description,
  icons: {
    icon: [{ url: site.logo, type: 'image/x-icon' }],
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
