export interface ExternalResource {
  id: string;
  name: string;
  tagline: string;
  category: 'report' | 'consultation' | 'building' | 'cards' | 'vehicle' | 'social';
  url: string;
  isExternal: boolean;
  requiresTransition: boolean;
  destinationLabel: string;
  description: string;
  whyChoose: string;
  badge: string;
  buttonText: string;
}

export interface SocialLink {
  platform: 'Instagram' | 'TikTok' | 'Facebook' | 'Threads';
  handle: string;
  url: string;
  audienceContext: string;
}

/**
 * CLIENTSMAX Centralized Source of Truth for External Links
 * Official Linktree Reference: https://linktr.ee/razila
 * 
 * Preserves all referral parameters, affiliate IDs, partner tags, and exact redirect targets.
 */
export const clientmaxLinks = {
  creditReport: 'https://calendly.com/clientsmax',
  calendly: 'https://calendly.com/clientsmax',
  kikoff: 'http://kikoff.pxf.io/clientsmaxllc',
  creditCard: 'https://i.capitalone.com/JBs8Ni2j1',
  vehicle: 'https://www.clarelyourcarguy.com',
  instagram: 'https://instagram.com/clientsmax',
  threads: 'https://www.threads.net/@clientsmax',
  facebook: 'https://www.facebook.com/clientsmax',
  tiktok: 'https://www.tiktok.com/@clientsmax',
};

export const RESOURCES: Record<string, ExternalResource> = {
  creditReport: {
    id: 'credit-report',
    name: '1-on-1 Credit Consultation',
    tagline: 'Review your credit profile and immediate priorities with Razila.',
    category: 'consultation',
    url: clientmaxLinks.calendly,
    isExternal: true,
    requiresTransition: true,
    destinationLabel: 'Calendly Private Scheduler',
    description: 'Schedule a comprehensive 1-on-1 review with Razila to analyze your credit profile, address questions, and map out your next steps.',
    whyChoose: 'You cannot strategize what you do not understand. Reviewing your credit profile with a strategist provides clear direction before taking your next financial step.',
    badge: '01 / CONSULTATION',
    buttonText: 'BOOK YOUR CREDIT CONSULTATION →',
  },
  consultation: {
    id: 'consultation',
    name: 'Private Strategic Consultation',
    tagline: '1-on-1 advisory with Razila.',
    category: 'consultation',
    url: clientmaxLinks.calendly,
    isExternal: true,
    requiresTransition: true,
    destinationLabel: 'Calendly Private Scheduler',
    description: 'A focused, confidential review of your current credit profile and a customized roadmap tailored to your vehicle, mortgage, or credit goals.',
    whyChoose: 'Cut through generic advice. Receive a direct, human analysis with zero automated guesswork and no false promises.',
    badge: 'ADVISORY',
    buttonText: 'BOOK A ONE-ON-ONE CONSULTATION →',
  },
  creditBuilding: {
    id: 'credit-building',
    name: 'Kikoff Credit Builder',
    tagline: 'Establish positive payment history with zero interest.',
    category: 'building',
    url: clientmaxLinks.kikoff,
    isExternal: true,
    requiresTransition: true,
    destinationLabel: 'Kikoff Official Partner Portal',
    description: 'A dedicated credit-building line reported monthly to Equifax and Experian designed to establish on-time payment records without debt traps.',
    whyChoose: 'Payment history is one of the most significant scoring factors. Kikoff provides an accessible, low-friction tool to log recurring on-time records.',
    badge: 'FOUNDATION',
    buttonText: 'EXPLORE CREDIT BUILDING →',
  },
  creditCards: {
    id: 'credit-cards',
    name: 'Capital One Pre-Approval',
    tagline: 'Pre-qualify with zero impact to your credit score.',
    category: 'cards',
    url: clientmaxLinks.creditCard,
    isExternal: true,
    requiresTransition: true,
    destinationLabel: 'Capital One Referral Portal',
    description: 'Check available credit card tiers tailored to your score range with a soft inquiry before submitting a formal application.',
    whyChoose: 'Avoid blind hard inquiries. Viewing pre-approved options protects your credit profile while granting you intentional revolving capacity.',
    badge: 'LEVERAGE',
    buttonText: 'EXPLORE CREDIT CARDS →',
  },
  vehicle: {
    id: 'vehicle',
    name: 'Clarel Vehicle Finance Resource',
    tagline: 'Navigate automotive lending and lease approvals strategically.',
    category: 'vehicle',
    url: clientmaxLinks.vehicle,
    isExternal: true,
    requiresTransition: true,
    destinationLabel: 'Clarel Your Car Guy Portal',
    description: 'Specialized automotive credit insights to help you secure prime lending rates and favorable terms rather than dealership markups.',
    whyChoose: 'Dealerships often send your application to multiple lenders at once. Understanding your credit standing beforehand helps prevent unnecessary inquiry clusters.',
    badge: 'ACQUISITION',
    buttonText: 'EXPLORE VEHICLE OPTIONS →',
  },
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Instagram',
    handle: '@clientsmax',
    url: clientmaxLinks.instagram,
    audienceContext: 'Daily strategic breakdowns, case studies, and Q&As.',
  },
  {
    platform: 'TikTok',
    handle: '@clientsmax',
    url: clientmaxLinks.tiktok,
    audienceContext: 'Fast-paced credit mechanics, myth-busting, and walkthroughs.',
  },
  {
    platform: 'Facebook',
    handle: 'CLIENTSMAX',
    url: clientmaxLinks.facebook,
    audienceContext: 'Community announcements, educational essays, and updates.',
  },
  {
    platform: 'Threads',
    handle: '@clientsmax',
    url: clientmaxLinks.threads,
    audienceContext: 'Real-time commentary on rate cuts, lending updates, and bureau trends.',
  },
];

export function getResource(id: keyof typeof RESOURCES): ExternalResource {
  return RESOURCES[id];
}

