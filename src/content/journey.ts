export interface JourneyStage {
  step: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  mindsetShift: string;
  keyActions: string[];
  recommendedToolKey: string;
  recommendedToolName: string;
  pitfallToAvoid: string;
}

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: '01',
    title: 'UNDERSTAND',
    subtitle: 'Audit & Bureau Clarity',
    tagline: 'Know where you stand before making a single move.',
    description: 'Most individuals only look at their score when denied an application. Understanding credit requires dissecting the 3 major bureaus (Experian, TransUnion, Equifax), identifying reporting discrepancies, and auditing your debt-to-limit ratios.',
    mindsetShift: 'Stop viewing your score as a moral judgment. It is an algorithmic risk assessment that responds to precise mechanical inputs.',
    keyActions: [
      'Order an unadulterated 3-bureau credit audit.',
      'Check for naming mismatches, outdated addresses, and misreported balances.',
      'Calculate current revolving utilization per card and in aggregate.',
    ],
    recommendedToolKey: 'creditReport',
    recommendedToolName: 'Identity & Credit Audit',
    pitfallToAvoid: 'Relying exclusively on free single-bureau app approximations that omit secondary remarks and auto-specific FICO scores.',
  },
  {
    step: '02',
    title: 'STRATEGIZE',
    subtitle: 'Custom Priority Sequencing',
    tagline: 'Sequence every action in the correct mathematical order.',
    description: 'Throwing money blindly at balances or disputing items without legal grounds often triggers re-aging or score drops. Strategy dictates the sequence: pay-down calendar, reporting statement cycles, and targeted correction.',
    mindsetShift: 'Credit moves require deliberate timing. Paying a card on the due date versus the statement closing date yields completely different scoring results.',
    keyActions: [
      'Align statement closing dates with payment schedules.',
      'Identify whether utilization reduction or aged account seasoning yields maximum impact.',
      'Map specific threshold targets (e.g., crossing under 9% aggregate utilization).',
    ],
    recommendedToolKey: 'consultation',
    recommendedToolName: 'Private Strategy Session',
    pitfallToAvoid: 'Paying off old closed collection accounts without negotiating written settlement terms, which can inadvertently reset activity dates.',
  },
  {
    step: '03',
    title: 'BUILD',
    subtitle: 'Disciplined Credit Architecture',
    tagline: 'Construct deep, durable positive reporting lines.',
    description: 'A clean report with zero depth is just as fragile as a damaged report. Building entails introducing structured, low-risk revolving and installment reporting lines that age gracefully and demonstrate multi-tier reliability.',
    mindsetShift: 'You do not build credit by carrying expensive balances or paying interest. You build credit by generating perfect on-time reporting history at minimal cost.',
    keyActions: [
      'Activate structured installment builder accounts (e.g., Kikoff).',
      'Maintain continuous 100% on-time payment logs across all trade lines.',
      'Keep revolving lines active through automated micro-subscriptions.',
    ],
    recommendedToolKey: 'creditBuilding',
    recommendedToolName: 'Kikoff Credit Builder',
    pitfallToAvoid: 'Applying for multiple high-rate store retail cards that inflict hard inquiries and drag down average account age.',
  },
  {
    step: '04',
    title: 'LEVERAGE',
    subtitle: 'Institutional Borrowing Power',
    tagline: 'Command Tier-1 interest rates and institutional capital.',
    description: 'The end goal of credit education is not merely reaching a high score—it is using that institutional trust to acquire prime vehicle terms, real estate financing, and premium rewards capital on your own terms.',
    mindsetShift: 'Credit is an asset that works for you. Borrow at prime rates to fund appreciate-able assets and preserve your liquid cash.',
    keyActions: [
      'Utilize soft-pull pre-approvals before committing to hard inquiry pulls.',
      'Secure Tier-1 automotive lending without predatory dealership markups.',
      'Negotiate credit limit increases every 6–12 months to naturally depress utilization.',
    ],
    recommendedToolKey: 'creditCards',
    recommendedToolName: 'Capital One Pre-Approval',
    pitfallToAvoid: 'Applying blindly at point-of-sale desks or auto dealerships where your file is shotgunned to 15 different lenders.',
  },
];
