// src/app/courses/page.tsx
import CoursesGrid from "@/components/courses/CoursesGrid";
import { coursesData } from "@/assets/data/courses/coursesData";

export const metadata = {
  title: "Courses | Abdul Manan Memorial Institute of Medical Sciences",
  description: "Explore the range of paramedical courses offered at AMMIMS.",
};

export default function CoursesPage() {
  return (
    <div>
      <section className="bg-brand-primary text-white py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">
          {coursesData.banner.title}
        </h1>
        <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
          {coursesData.banner.description}
        </p>
      </section>

      <CoursesGrid />
    </div>
  );
}
