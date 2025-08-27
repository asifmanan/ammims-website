import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate bg-gradient-to-br from-brand-primary/10 via-snow to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Institute Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-jet">
          Abdul Manan Memorial Institute of
          <span className="block text-brand-primary">Medical Sciences</span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-lg sm:text-xl text-jet/80 max-w-2xl mx-auto">
          Empowering future healthcare professionals through excellence in
          paramedical education.
        </p>

        {/* Call to Action */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/courses"
            className="rounded-2xl bg-brand-primary px-6 py-3 text-white font-semibold shadow-md hover:bg-brand-primary/90 transition"
          >
            Explore Courses
          </Link>
          <Link
            href="/admissions"
            className="rounded-2xl bg-raspberry px-6 py-3 text-white font-semibold shadow-md hover:bg-raspberry/90 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Decorative Transparency Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-dazzle-rose/10 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
