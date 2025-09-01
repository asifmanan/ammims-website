import { CardData } from "@/types/CardData";

export interface WhyChooseSection {
  title: string;
  description: string;
  cards: CardData[];
}

export interface AboutData {
  banner: {
    title: string;
    description: string
  };
  
  mission: {
    title: string;
    description: string;
  };

  vision: {
    title: string;
    description: string;
  };

  whyChoose: WhyChooseSection;
} 