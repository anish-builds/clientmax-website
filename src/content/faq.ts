export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'What happens during the consultation?',
    answer:
      'During your private 1-on-1 consultation with Razila, you will conduct a line-by-line review of your credit profile. You will discuss your immediate financial goals—such as purchasing a vehicle, preparing for a mortgage, or expanding personal or business lines—and leave with a prioritized, step-by-step roadmap tailored to your specific timeline.',
  },
  {
    id: 'faq-02',
    question: 'Who is CLIENTSMAX for?',
    answer:
      'CLIENTSMAX works with ambitious individuals, prospective homebuyers, auto buyers, and business founders who want clear, honest credit strategy. Whether you have limited credit history, are recovering from past setbacks, or want to position an already-good score for prime tier-1 lending rates, our advisory is designed for those seeking intentional financial clarity.',
  },
  {
    id: 'faq-03',
    question: 'Can CLIENTSMAX guarantee a credit-score increase?',
    answer:
      'No. Ethical guidelines and federal credit regulations strictly prohibit guaranteeing specific point increases or promising the removal of accurate reporting. Credit scores are determined solely by independent scoring models and licensed financial institutions. We provide the strategy, timing rules, and education to help you optimize every factor within your control.',
  },
  {
    id: 'faq-04',
    question: 'Can you help me understand my credit report?',
    answer:
      'Yes. Many clients find 3-bureau credit reports confusing and overwhelming. Razila walks you through exactly how Experian, Equifax, and TransUnion document your trade lines, helping you spot reporting inaccuracies, understand how balances report, and see what underwriters actually look at.',
  },
  {
    id: 'faq-05',
    question: 'How long does the credit optimization process take?',
    answer:
      'While your initial strategy consultation is a focused, high-impact session, credit progress operates in reporting cycles. Most bureau updates occur every 30 to 45 days as lenders report statement balances. Depending on your starting point and objectives, clients typically execute their personalized roadmaps over 60-day, 90-day, or 6-month cycles.',
  },
  {
    id: 'faq-06',
    question: 'Do you work with clients remotely?',
    answer:
      'Yes. CLIENTSMAX works with clients nationwide. All consultations and advisory sessions are conducted via secure, private video calls, allowing you to review your reports and strategy from anywhere.',
  },
  {
    id: 'faq-07',
    question: 'What should I prepare before my consultation?',
    answer:
      'Before your scheduled call, have recent access to your 3-bureau credit report and write down your upcoming financial targets (such as buying a car in the next 90 days, applying for a mortgage, or lowering current interest rates). Having this information ready ensures we can jump straight into actionable strategy.',
  },
  {
    id: 'faq-08',
    question: 'Is CLIENTSMAX a credit repair company?',
    answer:
      'No. CLIENTSMAX is an editorial credit education and strategic advisory brand, not a high-volume dispute mill. Rather than charging endless monthly fees to send automated template letters, we teach you how credit systems work and guide you on the exact sequencing needed to build lasting credit strength independently.',
  },
];
