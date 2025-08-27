import Link from "next/link";

export default function ContactPreview() {
  return (
    <section className="bg-snow py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-jet">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-jet/80">
          Have questions? We’d love to hear from you.
        </p>

        <div className="mt-6 space-y-2 text-jet/80">
          <p>📍 Near Shaheed Baba Masjid, Caravan Road, Mardan, Pakistan</p>
          <p>📞 +92 300 1234567</p>
          <p>✉️ info@ammims.edu.pk</p>
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="rounded-2xl bg-brand-primary px-6 py-3 text-white font-semibold shadow-md hover:bg-brand-primary/90 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
