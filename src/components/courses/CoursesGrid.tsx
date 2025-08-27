import Link from "next/link";

const courses = [
  { name: "Health Technology", slug: "health-technology" },
  { name: "Radiology Technology", slug: "radiology-technology" },
  { name: "Surgical Technology", slug: "surgical-technology" },
  { name: "Dental Technology", slug: "dental-technology" },
  { name: "Hepatology Technology", slug: "hepatology-technology" },
  { name: "Cariology Technology", slug: "cariology-technology" },
  { name: "Anesthesiology Technology", slug: "anesthesiology-technology" },
];

export default function CoursesGrid() {
  return (
    <section className="py-16 bg-snow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="block rounded-2xl bg-white p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold text-brand-primary">
                {course.name}
              </h3>
              <p className="mt-2 text-sm text-jet/70">
                Learn more about {course.name} and how this program prepares you
                for a successful career in healthcare.
              </p>
              <span className="mt-4 inline-block text-raspberry font-medium">
                View Details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
