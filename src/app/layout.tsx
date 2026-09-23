import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/content/site';
import { RedirectProvider } from '@/context/RedirectContext';
import { RedirectModal } from '@/components/ui/RedirectModal';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCTA } from '@/components/ui/MobileStickyCTA';
import { CustomCursor } from '@/components/ui/CustomCursor';

// ── Self-hosted via next/font — no external Google requests at runtime ────────
const fraunces = Fraunces({
  subsets: ['latin'],
  // Fraunces is a variable font; omit explicit weights so axes are allowed.
  // We rely on CSS font-weight utilities (font-normal=400, font-semibold=600)
  // to select within the variable range at use-site.
  axes: ['SOFT', 'opsz'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  // Inter is also a variable font — next/font will self-host the full VF.
  // Individual weights (400/500/600) are selected with Tailwind utilities.
  variable: '--font-body',
  display: 'swap',
});


export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — Personal Credit Strategy & Financial Education`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'credit education',
    'financial strategy',
    'credit consultation',
    'Razila credit strategist',
    '3-bureau report review',
    'vehicle financing strategy',
    'credit building',
    'CLIENTSMAX',
  ],
  authors: [{ name: 'Razila', url: 'https://clientsmax.com' }],
  creator: 'CLIENTSMAX',
  metadataBase: new URL('https://clientsmax.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clientsmax.com',
    title: `${SITE_CONFIG.name} — Personal Credit Strategy & Financial Education`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — Personal Credit Strategy & Financial Education`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable} bg-white text-[#111827] selection:bg-[#15803D] selection:text-white`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased bg-white text-[#111827] relative">
        <CustomCursor />
        <RedirectProvider>
          <SmoothScroll>
            {/* Outbound Gateway Modal for Verified Partner Links */}
            <RedirectModal />

            {/* Clean White Minimal Navigation */}
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-1">{children}</main>

            {/* Subtle Mobile Sticky Booking CTA */}
            <MobileStickyCTA />

            {/* Minimal Dark Charcoal Footer */}
            <Footer />
          </SmoothScroll>
        </RedirectProvider>
      </body>
    </html>
  );
}
