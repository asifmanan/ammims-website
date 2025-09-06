"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/assets/data/nav/navLinks";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-snow shadow-md sticky top-0 z-50 text-jet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo_ammims_192x192.svg"
              alt="Abdul Manan Memorial Institute of Medical Sciences"
              width={24} 
              height={24} 
              className="h-8 w-auto sm:h-10"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:bg-jet hover:text-snow transition p-1 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground hover:text-brand-primary"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-brand-primary z-40 flex flex-col items-center justify-center space-y-8">
          {/* Close button in top-right */}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 text-snow hover:text-snow/80"
          >
            <X size={32} />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-snow text-2xl font-semibold hover:text-snow/80 transition"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}