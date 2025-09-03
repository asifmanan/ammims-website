// src/assets/data/aboutData.ts (wrapper file around JSON)
import { AboutData } from "@/types/About";
// import { WhyChoosePreviewData } from "@/types/About";
import { DefaultPreviewData } from "@/types/SectionData";
import rawAboutData from "@/assets/data/about/aboutData.json"

export const aboutData: AboutData = rawAboutData;

// simplified for use on home page.
export const aboutPreview: DefaultPreviewData = aboutData.preview;
export const whyChoosePreview: DefaultPreviewData = aboutData.whyChoosePreview;