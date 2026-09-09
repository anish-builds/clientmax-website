import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE_CONFIG } from '@/content/site';
import { RedirectProvider } from '@/context/RedirectContext';
import { RedirectModal } from '@/components/ui/RedirectModal';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCTA } from '@/components/ui/MobileStickyCTA';

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — Credit Education & Financial Strategy`,
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
    title: `${SITE_CONFIG.name} — Credit Education & Strategy`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — Credit Education & Strategy`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#F5F2EA',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#F5F2EA] text-[#20221F] selection:bg-[#B9D65A] selection:text-[#20221F]">
      <body className="min-h-screen flex flex-col font-editorial-sans antialiased bg-[#F5F2EA] text-[#20221F] relative">
        <RedirectProvider>
          <SmoothScroll>
            {/* 2.5% Grain Texture */}
            <GrainOverlay />

            {/* Desktop Spring Cursor */}
            <CustomCursor />

            {/* Outbound Gateway Modal */}
            <RedirectModal />

            {/* Sticky Editorial Navigation */}
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-1">{children}</main>

            {/* Unobtrusive Mobile Floating Booking CTA */}
            <MobileStickyCTA />

            {/* Monolithic Editorial Footer */}
            <Footer />
          </SmoothScroll>
        </RedirectProvider>
      </body>
    </html>
  );
}
