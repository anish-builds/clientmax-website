export interface CreditFactor {
  percentage: string;
  name: string;
  weightLabel: string;
  editorialSummary: string;
  strategicTakeaway: string;
  misconception: string;
}

export const FICO_DISCLOSURE =
  'FICO scoring models consider several major factors, including payment history, amounts owed, length of credit history, credit mix, and new credit. The relative impact can vary by scoring model and individual profile.';

export const CREDIT_FACTORS: CreditFactor[] = [
  {
    percentage: '~35%',
    name: 'Payment History',
    weightLabel: 'Foundational Consideration',
    editorialSummary: 'Lenders evaluate whether you honor payment obligations on time. In most FICO scoring models, payment history carries the largest relative weight. A single 30-day late payment can significantly affect your profile because it signals repayment difficulty.',
    strategicTakeaway: 'Set up automatic minimum payments on every account. Even when paying balances in full later, auto-pay protects your on-time payment track record.',
    misconception: 'Myth: "If I pay before the grace period ends, it will not hurt me." Fact: Once 30 days past the due date pass, lenders can report a delinquency to the credit bureaus.',
  },
  {
    percentage: '~30%',
    name: 'Amounts Owed / Utilization',
    weightLabel: 'Revolving Balance Ratio',
    editorialSummary: 'Revolving credit utilization measures what portion of your credit limits you are actively using. Unlike payment history, utilization reflects your current balances—lowering reported balances can show positive changes relatively quickly once lenders report new cycles.',
    strategicTakeaway: 'Be mindful of your statement closing dates. Paying balances a few business days before your statement closing date ensures a lower balance is reported to the bureaus.',
    misconception: 'Myth: "You must carry a 1% to 3% balance month-to-month to show activity." Fact: You do not need to pay interest to build good credit. Paying in full after statement close builds positive history without interest charges.',
  },
  {
    percentage: '~15%',
    name: 'Length of Credit History',
    weightLabel: 'Account Longevity',
    editorialSummary: 'Scoring models generally favor an established credit history. This factor considers the age of your oldest account, the average age of all accounts, and how recently specific accounts were used.',
    strategicTakeaway: 'Keep your oldest fee-free credit cards open and active with an occasional small charge. Keeping them open supports your average account age over time.',
    misconception: 'Myth: "Closing unused credit cards immediately boosts your score." Fact: Closing an older card can reduce your total available credit limit (which may increase utilization) and eventually shortens account history.',
  },
  {
    percentage: '~10%',
    name: 'Credit Mix & Depth',
    weightLabel: 'Account Types',
    editorialSummary: 'Scoring models look favorably on consumers who can responsibly manage different types of credit: revolving credit (credit cards) alongside installment credit (auto loans, mortgages, student loans).',
    strategicTakeaway: 'Never take out a loan simply for "credit mix." Focus on the accounts you genuinely need, and manage revolving cards and installment loans responsibly.',
    misconception: 'Myth: "You need multiple loans to have a strong score." Fact: A healthy profile requires only a few well-managed, seasoned accounts across your available credit types.',
  },
  {
    percentage: '~10%',
    name: 'New Inquiries & Recency',
    weightLabel: 'New Credit & Recency',
    editorialSummary: 'Applying for several new credit lines in a short timeframe can indicate heightened risk to lenders. While a single hard inquiry typically has a minor effect, clustering multiple inquiries outside shopping windows can impact your score.',
    strategicTakeaway: 'Prioritize soft-inquiry pre-qualifications when exploring new cards. When shopping for vehicle loans or mortgages, concentrate applications within a 14 to 45 day window so scoring models treat them as a single rate-shopping event.',
    misconception: 'Myth: "Checking your own credit score hurts your rating." Fact: Checking your own credit report through monitoring tools is a soft inquiry and never affects your credit score.',
  },
];
