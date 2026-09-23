import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE_CONFIG } from '@/content/site';
import { RedirectProvider } from '@/context/RedirectContext';
import { RedirectModal } from '@/components/ui/RedirectModal';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCTA } from '@/components/ui/MobileStickyCTA';

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
    <html lang="en" className="bg-white text-[#111827] selection:bg-[#15803D] selection:text-white">
      <body className="min-h-screen flex flex-col font-sans antialiased bg-white text-[#111827] relative">
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
