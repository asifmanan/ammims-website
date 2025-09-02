// src/assets/data/contactData.ts (wrapper file around JSON)
import { ContactData, ContactInfo } from "@/types/contact";
import rawContactData from "@/assets/data/contact/contactData.json";
import rawContactInfo from "@/assets/data/contact/contactInfo.json";

export const contactData: ContactData = rawContactData;
export const contactInfo: ContactInfo = rawContactInfo;