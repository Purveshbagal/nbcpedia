"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImage from "../../../images/logo-removebg-preview.png";
import { siteContact } from "../site-content";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  }

  return (
    <div className="sticky top-0 z-50">
      <div className="relative z-10 bg-gradient-to-r from-[#27982d] via-[#2eab34] to-[#26922b] text-white">
        <div className="container-premium flex items-center justify-between py-2 text-[10px] sm:text-xs">
          <div className="flex items-center gap-4 sm:gap-5 opacity-95">
            <a href={`tel:${siteContact.phone}`} className="inline-flex items-center gap-2 transition-opacity hover:opacity-75">
              <span className="text-base">☎</span>
              <span>{siteContact.phone}</span>
            </a>
            <a href={`mailto:${siteContact.email}`} className="hidden items-center gap-2 transition-opacity hover:opacity-75 sm:inline-flex">
              <span className="text-base">✉</span>
              <span>{siteContact.email}</span>
            </a>
          </div>
          <p className="hidden text-[10px] sm:block sm:text-xs">NBC Pedia (A Div of Indo NBC Laboratories Pvt Ltd)</p>
        </div>
      </div>

      <header
        className={`border-b bg-white/92 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "border-white/70 shadow-[0_10px_30px_rgba(50,150,55,0.12)]" : "border-white/50 shadow-none"
        }`}
      >
        <div className="container-premium flex items-center justify-between gap-4 py-2 sm:py-3">
          <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-[1.02] sm:gap-3">
            <Image
              src={logoImage}
              alt="NBC Pedia"
              className="h-auto w-[140px] sm:w-[160px] md:w-[180px] lg:w-[190px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 text-xs font-semibold text-slate-700 sm:gap-8 md:flex md:gap-10 lg:text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative pb-2 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#32b539] after:transition-transform after:duration-300 hover:text-[#2aa830] hover:after:scale-x-100 ${
                  isActive(link.href) ? "text-[#2aa830] after:scale-x-100" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/products"
              className="hidden rounded-full bg-gradient-to-r from-[#33b63a] to-[#40c847] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:scale-[1.03] hover:from-[#2ba731] hover:to-[#35b73c] hover:shadow-md md:inline-flex"
            >
              View Products
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#b5edb8] bg-white text-[#33b53a] shadow-sm transition-transform duration-200 active:scale-95 sm:h-11 sm:w-11 md:hidden"
            >
              <span className="relative flex h-4 w-5 flex-col justify-between">
                <span
                  className={`h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
                    menuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full rounded-full bg-current transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>

            <div className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#b5edb8] bg-white text-[#33b53a] shadow-sm sm:h-11 sm:w-11 md:flex">
              <UserIcon />
            </div>
          </div>
        </div>

        <div
          className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <nav className="container-premium flex flex-col gap-1 border-t border-[#e9f8e9] bg-white/98 py-3 text-sm font-semibold text-slate-700">
              {navLinks.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-lg px-3 py-2.5 transition-all duration-200 hover:translate-x-1 hover:bg-[#f5fcf5] hover:text-[#2aa830] ${
                    isActive(link.href) ? "bg-[#f5fcf5] text-[#2aa830]" : ""
                  }`}
                  style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/products"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#33b63a] to-[#40c847] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-transform duration-200 active:scale-95"
              >
                View Products
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21a8 8 0 1 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  );
}
