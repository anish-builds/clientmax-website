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
  threads: 'https://www.threads.com/threads.com',
  facebook: 'https://www.facebook.com/clientsmax',
  tiktok: 'https://www.tiktok.com/@clientsmax',
};

export const RESOURCES: Record<string, ExternalResource> = {
  creditReport: {
    id: 'credit-report',
    name: 'Identity & Credit Audit',
    tagline: 'Schedule a 1-on-1 Credit & Identity Audit.',
    category: 'report',
    url: clientmaxLinks.calendly,
    isExternal: true,
    requiresTransition: true,
    destinationLabel: 'Calendly Private Scheduler',
    description: 'Schedule a comprehensive 3-bureau report review and advisory session directly with Razila and CLIENTSMAX.',
    whyChoose: 'You cannot strategize what you cannot measure. A comprehensive 3-bureau audit is the essential baseline before taking any financial action.',
    badge: '01 / BASELINE',
    buttonText: 'GET YOUR CREDIT REPORT →',
  },
  consultation: {
    id: 'consultation',
    name: 'Private Strategic Consultation',
    tagline: '1-on-1 advisory with Razila & CLIENTSMAX.',
    category: 'consultation',
    url: clientmaxLinks.calendly,
    isExternal: true,
    requiresTransition: true,
    destinationLabel: 'Calendly Private Scheduler',
    description: 'A deep-dive review of your current credit profile, immediate priorities, and a customized roadmap tailored to your vehicle, mortgage, or credit goals.',
    whyChoose: 'Cut through generic advice. Receive an honest, human analysis with zero automated guesswork and no false promises.',
    badge: 'ADVISORY',
    buttonText: 'BOOK A CONSULTATION →',
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
    whyChoose: 'Payment history accounts for 35% of your score. Kikoff provides an accessible, low-friction tool to log recurring on-time records.',
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
    description: 'Check available credit card tiers tailored to your score range with a soft pull before submitting a formal application.',
    whyChoose: 'Avoid blind hard inquiries. Seeing pre-approved options protects your credit profile while granting you intentional revolving capacity.',
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
    description: 'Specialized automotive credit insights to help you secure Tier-1 lending rates and favorable terms rather than dealership markups.',
    whyChoose: 'Car dealerships often submit your file to 10+ lenders simultaneously. Knowing your standing beforehand prevents unnecessary hard inquiry clusters.',
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

