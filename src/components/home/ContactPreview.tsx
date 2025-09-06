import Link from "next/link";
import { ContactPreviewData } from "@/types/Home";
import { MapPin, Phone, Mail } from "lucide-react";

interface ContactPreviewProps {
  data: ContactPreviewData;
}

export default function ContactPreview({data}:ContactPreviewProps) {
  return (
    <section className="bg-snow py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-jet">
          {data.preview.title}
        </h2>
        <p className="mt-4 text-lg text-jet/80">
          {data.preview.description}
        </p>

        <div className="mt-6 space-y-2 text-jet/80">
          <div className="flex gap-2 items-center justify-center">
            <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0" />
            <p>{data.contactInfo?.address}</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-brand-primary flex-shrink-0" />
            <div className="flex flex-col gap-1">
              {data.contactInfo?.phone.map((p) => (
                <span key={p.number}>
                  {p.label}: {p.number}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-brand-primary flex-shrink-0" />
            <p>{data.contactInfo?.email}</p>
          </div>
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
