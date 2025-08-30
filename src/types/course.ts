// src/types/course.ts
export interface Course {
  name: string;
  description: string;
  overview: string[];
  duration: string;
  eligibility: string;
  career: string;
}

export type CoursesData = Record<string, Course>;