import rawHeroData from "@/assets/data/home/heroData.json"
import { HomeData, HeroData } from "@/types/Home";
import {
  aboutPreview, 
  whyChoosePreview } from "@/assets/data/about/aboutData";
import { contactPreview } from "@/assets/data/contact/contactData";
import { coursesPreview } from "@/assets/data/courses/coursesData";
export const heroData: HeroData = rawHeroData.hero;
export const homeData: HomeData = {
  heroData,
  aboutPreview,
  whyChoosePreview,
  contactPreview,
  coursesPreview
}

