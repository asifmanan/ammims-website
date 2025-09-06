// src/types/About.ts
import { DefaultSectionData, DefaultPreviewData } from "@/types/SectionData";
import { CardData } from "@/types/CardData";

export interface WhyChooseSection {
  title: string;
  description: string;
  cards: CardData[];
}

export interface AboutData {
  preview: DefaultPreviewData;
  whyChoosePreview: DefaultPreviewData;
  banner: DefaultSectionData;
  mission: DefaultSectionData;
  vision: DefaultSectionData;
  whyChoose: WhyChooseSection;
} 