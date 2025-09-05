export interface FaqData {
  question: string;
  answer: string;
}

export interface FaqSectionData {
  title: string;
  description: string;
  questions : FaqData[];
}