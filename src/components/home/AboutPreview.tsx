import Link from "next/link";
import { DefaultPreviewData } from "@/types/SectionData";

interface AboutPreviewProps {
  data: DefaultPreviewData;
}

export default function AboutPreview({data}: AboutPreviewProps) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-jet">
          {data.title}
        </h2>

        <p className="mt-6 text-lg text-jet/80 max-w-3xl mx-auto">
          {data.description}
        </p>

        <div className="mt-8">
          <Link
            href="/about"
            className="inline-block rounded-2xl bg-brand-primary px-6 py-3 text-white font-semibold shadow-md hover:bg-brand-primary/90 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
