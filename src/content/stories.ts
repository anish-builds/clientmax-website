export interface ClientStory {
  id: string;
  number: string;
  clientContext: string;
  location: string;
  timeline: string;
  goal: string;
  focus: string;
  result: string;
  quote: string;
}

export const CLIENT_STORIES: ClientStory[] = [
  {
    id: 'story-01',
    number: '01 / CLIENT STORY',
    clientContext: 'First-Time Automotive Buyer',
    location: 'Atlanta, GA',
    timeline: '90-Day Strategy Cycle',
    goal: 'Secure Tier-1 vehicle financing directly through credit union underwriting rather than predatory dealership subprime lenders.',
    focus: 'Corrected 2 outdated address inaccuracies, eliminated high revolving balances using statement-closing date timing, and added an installment credit-building line.',
    result: 'Qualified for manufacturer direct financing without co-signer requirements; saved thousands in projected interest fees.',
    quote: 'Before working with Razila, I was terrified to walk into a dealership. She taught me how to read my own 3-bureau report, clear reporting noise, and walk in holding pre-approved financing. The difference in confidence was night and day.',
  },
  {
    id: 'story-02',
    number: '02 / CLIENT STORY',
    clientContext: 'Independent Business Founder',
    location: 'Houston, TX',
    timeline: '6-Month Structured Build',
    goal: 'Separate personal finances from commercial operating expenses and qualify for tier-1 business credit lines without personal guarantees.',
    focus: 'Audited personal credit profile to ensure zero derogatory remarks, established personal credit limits above $15,000 threshold, and structured business reporting trade lines.',
    result: 'Transferred commercial liabilities off personal credit utilization; restored personal revolving utilization to under 4%.',
    quote: 'CLIENTSMAX is completely different from the generic credit repair services that spam your social media. No hype, no empty guarantees—just pure strategic clarity on how underwriters actually evaluate risk.',
  },
  {
    id: 'story-03',
    number: '03 / CLIENT STORY',
    clientContext: 'Prospective Homebuyer',
    location: 'Charlotte, NC',
    timeline: '4-Month Pre-Mortgage Optimization',
    goal: 'Optimize tri-merge mortgage FICO scores prior to loan pre-approval to access conventional lending terms.',
    focus: 'Strategically paid down revolving balances across 4 credit cards to optimize aggregate and per-card utilization thresholds; halted all new inquiry activity.',
    result: 'Positioned middle FICO score to satisfy prime mortgage lending guidelines with zero manual underwriting flags.',
    quote: 'Razila looked at my report and immediately pointed out three mistakes that two other credit consultants had missed. She operates with absolute integrity and deep financial mastery.',
  },
];
