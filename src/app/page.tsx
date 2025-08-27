import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import CoursesPreview from "@/components/CoursesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import AdmissionsCallout from "@/components/AdmissionsCallout";
import ContactPreview from "@/components/ContactPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <CoursesPreview />
      <WhyChooseUs />
      <AboutPreview />
      <ContactPreview />
      <AdmissionsCallout />
      
      {/* later: About, Courses preview, etc. */}
    </>
  );
}
