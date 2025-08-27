import Link from "next/link";

export default function AdmissionsCallout() {
  return (
    <section className="bg-brand-primary text-white py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Admissions Open for 2025
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Apply now to join our next batch of future healthcare professionals.
        </p>
        <div className="mt-8">
          <Link
            href="/admissions"
            className="rounded-2xl bg-raspberry px-6 py-3 font-semibold shadow-md hover:bg-raspberry/90 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
