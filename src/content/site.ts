export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const SITE_CONFIG = {
  name: 'CLIENTSMAX',
  legalName: 'CLIENTSMAX Financial Strategy & Credit Education',
  eyebrow: 'CREDIT EDUCATION + STRATEGY',
  tagline: 'Your Credit Is More Than A Number.',
  description: 'CLIENTSMAX helps people understand, build, and strategically use their credit. Founded by Razila in 2021, providing authentic 1-on-1 guidance with zero automated gimmicks.',
  positioning: 'Credit strategist helping clients understand, build, and use credit with intention.',
  primaryNav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Resources', href: '/resources' },
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
  metrics: {
    clientsHelped: '5,000+',
    foundedYear: 2021,
    advisoryFormat: '1-on-1',
  },
  founder: {
    name: 'Razila',
    role: 'Founder & Principal Credit Strategist',
    positioning: 'Credit strategist helping clients understand, build, and use credit with intention.',
    title: 'Founder & Credit Strategist',
    foundedYear: 2021,
    clientsHelped: '5,000+',
    bioShort: 'Razila founded CLIENTSMAX in 2021 after learning the American financial system from the ground up. Having guided 5,000+ clients, she teaches real people how to understand, build, and strategically use their credit with complete clarity.',
    quote: 'Credit is not an emergency fix. It is the foundation for long-term financial strength. Once you understand the rules lenders play by, you can move with complete confidence.',
    storyHeadline: 'From starting over to helping others move forward.',
    storyLead: 'I came to America from Nepal in 2018 with a dream, limited English, and no clear idea of where that journey would take me.',
    storyParagraphs: [
      'I came to America from Nepal in 2018 with a dream, limited English, and no clear idea of where that journey would take me.',
      'I started in door-to-door sales, thinking I was simply building a career. Instead, I discovered my greatest strength: connecting with people and earning their trust.',
      'When the pandemic changed everything, I began looking for another way to use that gift to help people. That search led me to the credit industry and eventually to founding ClientsMax in 2021.',
      'Since then, I’ve had the privilege of working with 5,000+ clients, helping people understand their credit, build stronger financial foundations, and work toward opportunities they once thought were out of reach.',
      'As an immigrant who once had to learn the American financial system from the ground up, I know how overwhelming it can feel when you don’t know where to start.',
      'ClientsMax is my way of turning what I’ve learned into something that can help others move forward.',
    ],
    closingEmphasis: "And I'm just getting started.",
  },
};
