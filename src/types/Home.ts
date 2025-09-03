// src/types/home.ts
import { DefaultSectionData, DefaultPreviewData } from "@/types/SectionData";
import { ContactInfo } from "@/types/Contact";

export interface CoursesPreviewData {
  banner: DefaultSectionData;
}

export interface ContactPreviewData {
  preview: DefaultPreviewData;
  contactInfo?: ContactInfo;
}

export interface HomeData {
  heroData: HeroData;
  aboutPreview: DefaultPreviewData;
  whyChoosePreview: DefaultPreviewData;
  contactPreview: ContactPreviewData;
  coursesPreview: DefaultPreviewData;
}

// Hero section
export interface TitleSegment {
  text: string;
  isHighlighted: boolean;
}

export interface HeroData {
  titleSegments: TitleSegment[];
  description: string;
}