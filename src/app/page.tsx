// src/app/page.tsx
import { homeData } from "@/assets/data/home/homeData";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import CoursesPreview from "@/components/home/CoursesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AdmissionsCallout from "@/components/AdmissionsCallout";
import ContactPreview from "@/components/home/ContactPreview";

export default function HomePage() {
  return (
    <>
      <Hero data={homeData.heroData} />
      <CoursesPreview data={homeData.coursesPreview} />
      <WhyChooseUs data={homeData.whyChoosePreview} />
      <AboutPreview data={homeData.aboutPreview} />
      <ContactPreview data={homeData.contactPreview} />
      <AdmissionsCallout />
    </>
  );
}
