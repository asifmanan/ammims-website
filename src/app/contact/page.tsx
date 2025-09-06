"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { contactData, contactInfo } from "@/assets/data/contact/contactData";
import { MapPin, Phone, Mail } from "lucide-react";

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
              <li className="flex gap-2 items-start">
                <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <span className="font-mono"><strong>Address: </strong>{contactInfo.address}</span>
              </li>
              <li className="flex gap-2 items-start">
                <Phone className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0">
                    <strong>Phone: </strong>
                  </div>
                  <div className="flex flex-col gap-1">
                    {contactInfo.phone.map((phone) => (
                      <span key={phone.number}>
                        {phone.label}: {phone.number}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <Mail className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <span><strong>Email: </strong> {contactInfo.email}</span>
              </li>
            </ul>

            {/* Map Placeholder */}
            <div className="mt-8">
              <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d291.85593807324324!2d72.03921351564486!3d34.188361784024046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38decb1638fd4e37%3A0x939c38bf49fb4203!2sAbdul%20Manan%20Memorial%20Institute%20of%20Medical%20Sciences!5e1!3m2!1sen!2suk!4v1757155842422!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
