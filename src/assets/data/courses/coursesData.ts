// src/assets/data/coursesData.ts (wrapper file around JSON)
import {CoursesData, Course} from "@/types/course"
import rawCoursesData from "@/assets/data/courses/coursesData.json"

// suitable for slug lookup, used in src/app/courses/[slug]/page.tsx
export const coursesData: CoursesData = rawCoursesData;

// suitable for iteration, used in courses grid and homepage.
export const coursesDataArray: Course[] = Object.values(rawCoursesData)