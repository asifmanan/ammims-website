// src/types/course.ts
import { Banner } from "./Banner";
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
  banner: Banner;
}