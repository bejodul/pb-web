"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();

  const isServicePage = ["/services", "/solutions"];

  const effectiveActiveSection = isServicePage.includes(pathname)
    ? "services"
    : activeSection;

  // Definisikan nama-nama section
  const sections = [
    "home",
    "about",
    "services",
    "clients",
    "principals",
    "contact",
  ];

  // Menggunakan IntersectionObserver untuk mendeteksi section yang terlihat
  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Mengupdate section aktif
          }
        });
      },
      { threshold: 0.5 }
    ); // threshold 0.5 artinya 50% dari elemen harus terlihat

    // Memulai observer pada setiap section
    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    // Cleanup observer saat komponen dibersihkan
    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) observer.unobserve(el);
      });
    };
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/", section: "home" },
    { name: "About Us", href: "/#about", section: "about" },
    { name: "Services & Solutions", href: "/#services", section: "services" },
    { name: "Clients", href: "/#clients", section: "clients" },
    { name: "Principals", href: "/#principals", section: "principals" },
    { name: "Contact Us", href: "/#contact", section: "contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-5 justify-center">
          <Image
            src="/logo/logo.png"
            alt="Company Logo"
            width={50}
            height={50}
            priority
          />
          <Link href="/" className="text-2xl font-bold text-green">
            Primus Niaga Brunei
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg text-green">
          {navItems.map((item) => (
            <li key={item.section}>
              <Link
                href={item.href}
                className={`hover:text-blue-600 transition duration-300 ${
                  effectiveActiveSection === item.section ? "font-bold" : ""
                }`}
                onClick={() => setActiveSection(item.section)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 shadow-md">
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="font-bold">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Services & Solutions
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Clients
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Principals
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
