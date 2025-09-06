// src/app/admissions/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { faqSectionData } from "@/assets/data/admission/admissionData";
import FAQ from "@/components/admissions/faq";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">Admissions</h1>
        <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
          Take the first step toward your career in healthcare. Admissions are
          now open.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild size="lg" className="bg-raspberry hover:bg-raspberry/90">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>

      {/* Admission Information */}
      <section className="py-16 bg-snow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-jet mb-12">
            Admission Information
          </h2>

          {/* Eligibility Criteria */}
          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-primary">
                Eligibility Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="text-jet/80">
              <div>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>SSC with Biology with at least <b>50% marks</b>.</li>
                  <li>Age limit: <b>up to 30 years</b>.</li>
                  <li>Admission is based on merit and seat availability.</li>
                </ul>
              </div>
            </CardContent>
          </Card>


          {/* Admission Process */}
          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-primary">
                Admission Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-6 text-jet/80 space-y-2">
                <li>
                  Fill out the <b>application form</b> (available online or at
                  the institute).
                </li>
                <li>
                  Submit <b>required documents</b> before the deadline.
                </li>
                <li>
                  Appear for <b>entry test</b> or interview (if applicable).
                </li>
                <li>
                  Successful candidates will be notified of{" "}
                  <b>admission confirmation</b>.
                </li>
                <li>
                  Pay the <b>admission fee</b> to secure your seat.
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Documents Required */}
          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-primary">
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-jet/80 space-y-2">
                <li>
                  <b>Matriculation Certificate</b> & Marksheet
                </li>
                <li>
                  <b>CNIC/B-Form</b> & Father’s CNIC
                </li>
                <li>
                  <b>Recent Passport-size Photographs</b> (4)
                </li>
                <li>
                  <b>Domicile</b> (if required)
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ data={faqSectionData}/>

      

      {/* Contact CTA */}
      <section className="py-8 text-center">
        <p className="text-jet/80">
          Still have questions?{" "}
          <Link
            href="/contact"
            className="text-raspberry font-semibold hover:text-raspberry/80 transition"
          >
            Contact our Admissions Office
          </Link>
          .
        </p>
      </section>
      {/* Strong Final CTA */}
      <section className="bg-snow p-8">
        <div className="text-center">
          <h3 className="text-4xl font-semibold text-jet mb-4">
            Ready to Apply?
          </h3>
          <p className="text-jet/80 mb-6">
            Complete your application today and secure your seat in our
            upcoming session.
          </p>
          <Button asChild size="lg" className="bg-raspberry hover:bg-raspberry/90">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
