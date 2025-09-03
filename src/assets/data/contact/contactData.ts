// src/assets/data/contactData.ts (wrapper file around JSON)
import { ContactData, ContactInfo } from "@/types/Contact";
import { ContactPreviewData } from "@/types/Home";
import { DefaultPreviewData } from "@/types/SectionData";
import rawContactData from "@/assets/data/contact/contactData.json";
import rawContactInfo from "@/assets/data/contact/contactInfo.json";

export const contactData: ContactData = rawContactData;
export const contactInfo: ContactInfo = rawContactInfo;
export const preview: DefaultPreviewData = contactData.preview;
export const contactPreview: ContactPreviewData = {preview, contactInfo};