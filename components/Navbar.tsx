"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "I'm New", href: "/im-new" },
  { label: "Watch", href: "/watch" },
  { label: "About", href: "/about" },
  { label: "News", href: "/community" },
  { label: "Staff", href: "/staff" },
  { label: "Give", href: "/give" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Logo size={36} bg="light" />
          <span className="text-xl font-bold text-[#80A8C8] tracking-tight">
            180 CHURCH
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-gray hover:text-brand-blue font-medium transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/plan-a-visit"
            className="bg-brand-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-blue-dark transition-colors"
          >
            Plan a Visit
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-brand-dark transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-brand-dark transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-brand-dark transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-gray hover:text-brand-blue font-medium text-base py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/plan-a-visit"
            className="bg-brand-blue text-white px-5 py-3 rounded-full text-sm font-semibold text-center hover:bg-brand-blue-dark transition-colors mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Plan a Visit
          </Link>
        </div>
      )}
    </nav>
  );
}
