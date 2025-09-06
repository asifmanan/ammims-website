// src/assets/data/coursesData.ts (wrapper file around JSON)
import {OfferedCourses, Course, CoursesData} from "@/types/Courses"
import { DefaultPreviewData } from "@/types/SectionData";
import rawCoursesData from "@/assets/data/courses/coursesData.json"
import rawOfferedCoursesList from "@/assets/data/courses/offeredCourses.json"

export const coursesData: CoursesData = rawCoursesData;

// For homepage preview
export const coursesPreview: DefaultPreviewData = coursesData.preview

// suitable for slug lookup, used in src/app/courses/[slug]/page.tsx
export const offeredCourses: OfferedCourses = rawOfferedCoursesList;

// suitable for iteration, used in courses grid and homepage.
export const offeredCoursesArray: Course[] = Object.values(rawOfferedCoursesList)