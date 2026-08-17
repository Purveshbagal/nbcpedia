import Link from "next/link";
import { siteContact } from "../site-content";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 mt-8">
      <div className="container-premium">
        <div className="w-full rounded-2xl bg-gradient-to-br from-[#248e29] via-[#31ab37] to-[#1e7a23] px-4 pt-6 pb-5 text-white shadow-2xl shadow-[#2aa830]/30 sm:px-8 md:py-8">
          <div className="grid items-center gap-6 sm:grid-cols-3">
            <div>
              <p className="max-w-sm text-xs leading-6 text-white/75 sm:text-sm sm:leading-7">
                NBC Pedia is the pediatric division of {siteContact.company}. We are committed to providing
                quality healthcare solutions for the little ones.
              </p>
              <div className="mt-4 flex items-center gap-2 sm:gap-3">
                <SocialDot label="f" />
                <SocialDot label="ig" />
                <SocialDot label="in" />
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold sm:text-lg">Quick Links</h3>
              <div className="mt-3 space-y-2 text-xs text-white/80 sm:space-y-3 sm:text-sm">
                {quickLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block w-fit transition-colors hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold sm:text-lg">Contact Us</h3>
              <div className="mt-3 space-y-2 text-xs text-white/80 sm:space-y-3 sm:text-sm">
                <p>{siteContact.company}</p>
                <p>{siteContact.address}</p>
                <a className="block w-fit transition-colors hover:text-white" href={`tel:${siteContact.phone}`}>
                  {siteContact.phone}
                </a>
                <a className="block w-fit transition-colors hover:text-white" href={`mailto:${siteContact.email}`}>
                  {siteContact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-3 border-t border-white/15 pt-3 pb-2 text-center text-xs text-white/70 sm:text-sm">
            © {new Date().getFullYear()} NBC Pedia. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialDot({ label }: { label: string }) {
  return (
    <div className="flex h-9 min-w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 px-2 text-xs font-semibold text-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 sm:h-10 sm:min-w-10 sm:px-3 sm:text-sm">
      {label}
    </div>
  );
}
