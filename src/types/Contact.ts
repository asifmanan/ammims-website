// src/types/Contact.ts
import { DefaultSectionData, DefaultPreviewData } from "@/types/SectionData";

interface messageDetail {
  title: string;
  description?: string;
  cardTitle?: string;
}

export interface ContactData {
  preview: DefaultPreviewData;
  banner: DefaultSectionData;
  messageDetail: messageDetail;
  contactDetail: DefaultSectionData;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}