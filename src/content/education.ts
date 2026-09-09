export interface CreditFactor {
  percentage: string;
  name: string;
  weightLabel: string;
  editorialSummary: string;
  strategicTakeaway: string;
  misconception: string;
}

export const CREDIT_FACTORS: CreditFactor[] = [
  {
    percentage: '35%',
    name: 'Payment History',
    weightLabel: 'Foundational Weight',
    editorialSummary: 'The algorithm prioritizes one simple metric above all others: do you honor obligations on time? A single 30-day late payment can diminish a score dramatically because it indicates immediate liquidity distress.',
    strategicTakeaway: 'Automate minimum payments on every single account without exception. Even if you plan to pay in full later, auto-pay guarantees the 35% tier remains pristine.',
    misconception: 'Myth: "If I pay before the grace period ends, it will not hurt me." Fact: Once 30 days past the due date pass, lenders are legally entitled to report delinquency to the bureaus.',
  },
  {
    percentage: '30%',
    name: 'Amounts Owed / Utilization',
    weightLabel: 'High Volatility Weight',
    editorialSummary: 'Revolving credit utilization measures what percentage of your credit limits you are actively using. Unlike payment history, utilization has no memory in older scoring models—lowering it can reflect positive changes within 30 to 45 days.',
    strategicTakeaway: 'Do not wait for the payment due date. Pay your balance 2–3 business days BEFORE the statement closing date, which is when the balance is actually captured and sent to the bureaus.',
    misconception: 'Myth: "You must carry a 1% to 3% balance to show activity." Fact: You never need to pay a cent in interest. The statement balance reports whether you pay interest or not.',
  },
  {
    percentage: '15%',
    name: 'Length of Credit History',
    weightLabel: 'Compound Endurance',
    editorialSummary: 'Lenders value longevity. This factor calculates the average age of all your accounts (AAoA), the age of your oldest trade line, and the recency of your latest opened account.',
    strategicTakeaway: 'Keep your oldest fee-free credit cards open and active with a trivial recurring charge. Closing your oldest card will eventually cause it to fall off your report, eroding your age foundation.',
    misconception: 'Myth: "Closing unused credit cards boosts your score." Fact: Closing cards reduces your total available credit limit (spiking utilization) and eventually truncates account longevity.',
  },
  {
    percentage: '10%',
    name: 'Credit Mix & Depth',
    weightLabel: 'Portfolio Diversity',
    editorialSummary: 'Scoring models reward consumers who can manage distinct types of debt responsibly: revolving credit (credit cards, lines of credit) alongside installment debt (auto loans, mortgages, student loans).',
    strategicTakeaway: 'Never take out a loan solely for "credit mix." However, if your report is 100% revolving cards, adding a zero-risk micro-installment builder can balance your portfolio naturally.',
    misconception: 'Myth: "You need 10 different loans to have great credit." Fact: A healthy mix requires only a few well-managed, seasoned trade lines across revolving and installment categories.',
  },
  {
    percentage: '10%',
    name: 'New Inquiries & Recency',
    weightLabel: 'Risk Velocity',
    editorialSummary: 'Each hard inquiry placed on your report signals that you are seeking new liabilities. While one inquiry typically costs 3 to 5 points, clustering 5 inquiries in 60 days signals heightened risk to underwriting algorithms.',
    strategicTakeaway: 'Always prioritize pre-qualification soft pulls. When shopping for vehicle loans or mortgages, concentrate inquiries within a 14-day window so FICO clusters them as a single shopping event.',
    misconception: 'Myth: "Checking your own credit score hurts your rating." Fact: Personal credit checks via monitoring portals are soft inquiries and have zero impact on your score.',
  },
];
