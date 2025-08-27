import Link from "next/link";

const courses = [
  {
    name: "Medical Laboratory Technology",
    description:
      "Gain expertise in diagnostic testing, lab equipment, and clinical analysis to support patient care.",
    href: "/courses",
  },
  {
    name: "Radiology & Imaging Technology",
    description:
      "Learn X-ray, CT, MRI, and ultrasound imaging techniques with hands-on training.",
    href: "/courses",
  },
  {
    name: "Physiotherapy Technology",
    description:
      "Develop rehabilitation skills to help patients recover mobility and improve quality of life.",
    href: "/courses",
  },
  {
    name: "Emergency & Trauma Care",
    description:
      "Train to respond effectively in critical emergency situations and pre-hospital care.",
    href: "/courses",
  },
];

export default function CoursesPreview() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-jet">
          Our Programs
        </h2>

        <p className="mt-4 text-lg text-jet/80 text-center max-w-2xl mx-auto">
          Explore a range of paramedical courses designed to equip students with
          the skills and knowledge needed for successful healthcare careers.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.name}
              className="rounded-2xl bg-snow p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-brand-primary">
                {course.name}
              </h3>
              <p className="mt-2 text-jet/80 text-sm">{course.description}</p>
              <Link
                href={course.href}
                className="mt-4 inline-block text-sm font-medium text-raspberry hover:text-raspberry/80 transition"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-block rounded-2xl bg-brand-primary px-6 py-3 text-white font-semibold shadow-md hover:bg-brand-primary/90 transition"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
