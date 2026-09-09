export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const SITE_CONFIG = {
  name: 'CLIENTSMAX',
  legalName: 'CLIENTSMAX Financial Strategy & Credit Education',
  eyebrow: 'CREDIT EDUCATION + STRATEGY',
  tagline: 'Your Credit Is A Tool. Learn To Command It.',
  description: 'CLIENTSMAX is a credit education brand and strategic advisory founded by Razila. We help clients understand, build, and use their credit profile with intention—free of automated gimmicks and false promises.',
  positioning: 'Credit strategist helping clients understand, build, and use credit with intention.',
  primaryNav: [
    { label: 'Journey', href: '/journey' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ] as NavItem[],
  ctaButton: {
    label: 'START YOUR JOURNEY',
    href: '/start',
  },
  secondaryCta: {
    label: 'BOOK A CONSULTATION',
    href: 'https://calendly.com/clientsmax',
  },
  disclaimer: 'CLIENTSMAX provides educational guidance and strategic consulting regarding consumer credit profiles. CLIENTSMAX does not guarantee specific credit scores, points increases, or the removal of legally accurate and verifiable reporting. We do not provide legal, tax, or official banking services. Credit decisions, rates, and approvals are determined solely by independent licensed financial institutions and credit reporting agencies.',
  copyrightYear: 2026,
  founder: {
    name: 'Razila',
    role: 'Founder & Principal Credit Strategist',
    positioning: 'Credit strategist helping clients understand, build, and use credit with intention.',
    title: 'Credit Strategist & Founder',
    bioShort: 'Razila is a credit strategist helping clients understand, build, and use credit with intention. She founded CLIENTSMAX to counter aggressive sales tactics and opaque promises, giving clients practical, lasting financial clarity.',
    quote: 'Credit is not an emergency fix. It is the foundation for long-term financial strength. Once you understand the rules lenders play by, you can move with complete confidence.',
  },
};
