import Link from "next/link";
import {contactInfo} from "@/assets/data/contact/contactData";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-jet text-snow py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3">
        
        {/* Column 1: Branding */}
        <div>
          <h3 className="text-xl font-bold text-brand-primary">
            AMMIMS
          </h3>
          <p className="mt-2 text-sm text-snow/80">
            Abdul Manan Memorial Institute of Medical Sciences.  
            empowering healthcare professionals through excellence in paramedical education.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-brand-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brand-primary transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-brand-primary transition">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="hover:text-brand-primary transition">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-primary transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-snow/80">
            <li className="flex gap-2 items-start">
              <MapPin className="w-5 h-5 text-dazzle-rose flex-shrink-0" />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex gap-2 items-start">
              <Phone className="w-5 h-5 text-dazzle-rose flex-shrink-0" />
              <div className="flex flex-col gap-1">
                {contactInfo.phone.map((phone) => (
              <span key={phone.number}>
                {phone.label}: {phone.number}
              </span>
            ))}

              </div>
              
            </li>
            <li className="flex gap-2 items-start">
              <Mail className="w-5 h-5 text-dazzle-rose flex-shrink-0" />
              <span>{contactInfo.email}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-snow/20 pt-4 text-center text-xs text-snow/70">
        © {new Date().getFullYear()} Abdul Manan Memorial Institute of Medical Sciences. All rights reserved.
      </div>
    </footer>
  );
}
