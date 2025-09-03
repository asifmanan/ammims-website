// src/app/courses/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import {offeredCourses} from "@/assets/data/courses/coursesData"

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {  
  const {slug} = await params;
  const course = offeredCourses[slug];

  if (!course) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">{course.name}</h1>
        <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
          {course.description}
        </p>
      </section>

      {/* Detailed Description */}
      <section className="pt-16 bg-snow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-primary mb-4">Course Overview</h2>
          {course.overview.map((paragraph, index) => (
            <p className="pb-4 text-lg text-jet/80 whitespace-pre-line" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-snow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-brand-primary">
              Duration
            </h2>
            <p className="mt-2 text-jet/80">{course.duration}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-brand-primary">
              Eligibility
            </h2>
            <p className="mt-2 text-jet/80">{course.eligibility}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-brand-primary">
              Career Opportunities
            </h2>
            <p className="mt-2 text-jet/80">{course.career}</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-jet">
          Ready to start your journey in {course.name}?
        </h2>
        <p className="mt-4 text-lg text-jet/80">
          Apply now and take the first step towards a rewarding healthcare career.
        </p>
        <Link
          href="/admissions"
          className="mt-6 inline-block px-8 py-3 rounded-full bg-raspberry text-white font-semibold shadow-md hover:bg-dazzle-rose transition"
        >
          Apply Now
        </Link>
      </section>
    </div>
  );
}
