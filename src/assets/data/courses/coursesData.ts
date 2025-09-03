// src/assets/data/coursesData.ts (wrapper file around JSON)
import {OfferedCourses, Course} from "@/types/course"
import rawOfferedCoursesList from "@/assets/data/courses/offeredCourses.json"

// suitable for slug lookup, used in src/app/courses/[slug]/page.tsx
export const offeredCourses: OfferedCourses = rawOfferedCoursesList;

// suitable for iteration, used in courses grid and homepage.
export const offeredCoursesArray: Course[] = Object.values(rawOfferedCoursesList)