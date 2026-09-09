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
  description: 'CLIENTSMAX is an editorial credit education brand and strategic advisory founded by Razila. We help ambitious individuals understand, build, and leverage their credit profile without automated gimmicks or false promises.',
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
    href: '/contact',
  },
  disclaimer: 'CLIENTSMAX provides educational guidance and strategic consulting regarding consumer credit profiles. CLIENTSMAX does not guarantee specific credit scores, points increases, or the removal of legally accurate and verifiable reporting. We do not provide legal, tax, or official banking services. Credit decisions, rates, and approvals are determined solely by independent licensed financial institutions and credit reporting agencies.',
  copyrightYear: 2026,
  founder: {
    name: 'Razila',
    role: 'Founder & Principal Credit Strategist',
    title: 'Architect of Credit Literacy',
    bioShort: 'Razila founded CLIENTSMAX to counter the sea of aggressive sales tactics and opaque promises that plague the credit industry. Her approach treats personal credit not as a rescue operation, but as a long-term wealth instrument.',
    quote: 'Credit is not an emergency fix. It is the architectural foundation of modern financial sovereignty. Once you master the rules of the game, you stop asking for permission.',
  },
};
