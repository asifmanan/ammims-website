"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { contactData, contactInfo } from "@/assets/data/contact/contactData";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thank you for contacting us! We’ll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-primary text-white py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">{contactData.banner.title}</h1>
        <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
          {contactData.banner.description}
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-snow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">{contactData.messageDetail.title}</h2>
            <Card className="shadow-md flex-1">
              <CardHeader>
                <CardTitle className="text-brand-primary">{contactData.messageDetail.cardTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                  <Input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                  />
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={7}
                    required
                  />
                  <Button type="submit" className="w-full md:w-auto cursor-pointer">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-brand-primary mb-6">{contactData.contactDetail.title}</h2>
            <p className="text-lg text-jet/80 mb-4">
              {contactData.contactDetail.description}
            </p>
            <ul className="space-y-3 text-jet/80">
              <li><strong>📍 Address:</strong> {contactInfo.address}</li>
              <li><strong>📞 Phone:</strong> {contactInfo.phone}</li>
              <li><strong>✉️ Email:</strong> {contactInfo.email}</li>
            </ul>

            {/* Map Placeholder */}
            <div className="mt-8">
              <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                Google Maps Embed Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
