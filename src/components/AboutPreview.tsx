import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-jet">
          About Our Institute
        </h2>

        <p className="mt-6 text-lg text-jet/80 max-w-3xl mx-auto">
          At Abdul Manan Memorial Institute of Medical Sciences, we are
          dedicated to shaping the next generation of healthcare professionals.
          Our paramedical programs combine academic excellence with practical
          training, empowering students to make a real difference in the world
          of healthcare.
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
