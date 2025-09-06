import Link from "next/link";
import { HeroData } from "@/types/Home";

interface HeroProps {
  data: HeroData;
}
export default function Hero({data}: HeroProps) {
  return (
    <section className="relative isolate bg-gradient-to-br from-brand-primary/10 via-snow to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Institute Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-jet">
          {data.titleSegments.map((segment, index) => (
            <span 
              key={index}
              className={segment.isHighlighted ? "block text-brand-primary" : ""}>{segment.text}</span>
          ))}
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-lg sm:text-xl text-jet/80 max-w-2xl mx-auto">
          {data.description}
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
        <div className="pt-4">
          <p className="text-sm text-jet/80">
            Already know your program?{" "}
          <Link href="/apply" className="text-raspberry font-semibold hover:text-raspberry/80">
            Go straight to the form →
          </Link>
        </p>
        </div>
      </div>

      {/* Decorative Transparency Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-dazzle-rose/10 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
