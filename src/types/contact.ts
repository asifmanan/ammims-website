// src/types/contact.ts
interface DefaultDataSection {
  title: string;
  description: string;
}

interface messageDetail {
  title: string;
  description?: string;
  cardTitle?: string;
}

export interface ContactData {
  banner: DefaultDataSection;
  messageDetail: messageDetail;
  contactDetail: DefaultDataSection;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}