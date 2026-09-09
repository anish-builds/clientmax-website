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
    description: 'Many people only examine their credit after an application is denied. Understanding credit means reviewing all 3 major bureaus (Experian, TransUnion, Equifax), identifying reporting discrepancies, and checking your balance-to-limit ratios.',
    mindsetShift: 'Stop viewing your score as a personal judgment. Credit is a structured evaluation of risk based on consistent habits and reporting timelines.',
    keyActions: [
      'Review a comprehensive 3-bureau credit report.',
      'Check for naming mismatches, outdated addresses, and balance reporting errors.',
      'Calculate current revolving utilization per card and overall.',
    ],
    recommendedToolKey: 'creditReport',
    recommendedToolName: '1-on-1 Credit Consultation',
    pitfallToAvoid: 'Relying exclusively on free single-bureau monitoring apps that leave out secondary remarks or auto-specific FICO scores.',
  },
  {
    step: '02',
    title: 'STRATEGIZE',
    subtitle: 'Custom Priority Sequencing',
    tagline: 'Sequence every action in the right order.',
    description: 'Throwing money blindly at balances or disputing items without understanding reporting rules can slow your progress. A clear strategy identifies your payment calendar, statement closing cycles, and specific priorities.',
    mindsetShift: 'Credit timing matters. Understanding the difference between your payment due date and your statement closing date can make a noticeable difference in reported utilization.',
    keyActions: [
      'Align statement closing dates with your payment schedules.',
      'Identify whether balance reduction or account seasoning offers the biggest immediate benefit.',
      'Map specific balance thresholds (such as keeping utilization comfortably below 10%).',
    ],
    recommendedToolKey: 'consultation',
    recommendedToolName: 'Private Strategy Session',
    pitfallToAvoid: 'Paying off old closed collection accounts without negotiating written terms, which can inadvertently reset the activity date.',
  },
  {
    step: '03',
    title: 'BUILD',
    subtitle: 'Consistent Credit Habits',
    tagline: 'Build durable, positive reporting lines over time.',
    description: 'A clean report with very little history is fragile. Building durable credit strength requires active revolving and installment lines that report consistently on-time with zero unnecessary debt.',
    mindsetShift: 'You do not build credit by carrying expensive balances or paying interest. You build credit by generating steady on-time payment history over time.',
    keyActions: [
      'Activate structured credit builder accounts (such as Kikoff).',
      'Maintain an unbroken on-time payment track record across all accounts.',
      'Keep revolving accounts active with small, planned recurring charges.',
    ],
    recommendedToolKey: 'creditBuilding',
    recommendedToolName: 'Kikoff Credit Builder',
    pitfallToAvoid: 'Applying for multiple high-interest retail store cards that add hard inquiries and reduce your average account age.',
  },
  {
    step: '04',
    title: 'LEVERAGE',
    subtitle: 'Prime Borrowing Power',
    tagline: 'Access prime interest rates and favorable financing on your terms.',
    description: 'The real goal of credit education is not just a three-digit number—it is having the credibility to secure prime auto financing, mortgage terms, and financial flexibility without high fees or predatory markups.',
    mindsetShift: 'Credit is a tool for your future. When managed intentionally, it helps you secure favorable rates, protect your savings, and build lasting financial stability.',
    keyActions: [
      'Use soft-inquiry pre-approvals before committing to hard inquiry applications.',
      'Secure prime automotive financing rather than settling for high dealership finance markups.',
      'Request credit limit increases periodically to naturally lower your utilization ratio.',
    ],
    recommendedToolKey: 'creditCards',
    recommendedToolName: 'Capital One Pre-Approval',
    pitfallToAvoid: 'Applying blindly at auto dealerships or retail desks where your credit file is submitted to dozens of lenders at once.',
  },
];
