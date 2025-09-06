// src/types/Course.ts
import { DefaultSectionData, DefaultPreviewData } from "@/types/SectionData";
export interface Course {
  name: string;
  slug: string;
  description: string;
  highlight: string;
  overview: string[];
  duration: string;
  eligibility: string;
  career: string;
}

export type OfferedCourses = Record<string, Course>;

export interface CoursesData {
  preview: DefaultPreviewData;
  banner: DefaultSectionData;
}