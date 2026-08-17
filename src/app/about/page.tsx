import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import Mascot from "../components/Mascot";
import BreadcrumbJsonLd from "../components/BreadcrumbJsonLd";
import { buildPageMetadata } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Learn about NBC Pedia, the pediatric division of Indo NBC Laboratories Pvt. Ltd. — our expertise, quality standards, and commitment to child healthcare.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="text-slate-800">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "" }, { name: "About Us", path: "/about" }]} />
      <main className="relative z-10 container-premium pb-10 pt-4 sm:pb-12 sm:pt-6">
        <Reveal>
          <section className="rounded-xl border border-[#ebf9ea] bg-white/80 p-6 shadow-[0_12px_45px_rgba(79,185,84,0.08)] sm:rounded-2xl sm:p-8 lg:rounded-[2rem] lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
              <div className="max-w-4xl">
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-green-600">About Us</p>
                <h1 className="cartoon-heading mt-3 text-[30px] font-black leading-[1.1] tracking-tight sm:text-[40px] lg:text-[54px]">
                  About NBC Pedia
                </h1>
                <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 sm:text-[17px] lg:text-[18px]">
                  <p>
                    We specialize in providing pediatric medications with utmost care and expertise. We understand the unique needs of children when it comes to healthcare, and we are committed to offering safe and effective solutions.
                  </p>
                  <p>
                    Our extensive selection of pediatric medications covers a wide range of conditions, ensuring that you can find the right treatment for your child.
                  </p>
                  <p>
                    Rest assured, all our medications are sourced from reputable manufacturers and adhere to stringent quality standards. Your child&apos;s health and well-being are our top priorities, and we are here to support you every step of the way.
                  </p>
                </div>

                <div className="mt-8 rounded-2xl border border-green-100 bg-white/90 p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6">
                  <h2 className="cartoon-heading text-xl font-extrabold tracking-tight sm:text-2xl">Why Choose Us for Pediatric Needs</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    Discover why we are the best in pediatric healthcare: Expertise, Quality, Safety, Extensive Selection, and Unwavering Care. Experience excellence for your child&apos;s well-being.
                  </p>
                  <div className="mt-5 rounded-3xl border border-green-200 bg-green-50/80 p-4 shadow-[0_16px_40px_rgba(119,221,124,0.08)]">
                    <ol className="grid gap-3 text-sm font-semibold text-green-700 sm:text-base">
                      <li className="rounded-2xl border border-green-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">1. Expertise</li>
                      <li className="rounded-2xl border border-green-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">2. QC</li>
                      <li className="rounded-2xl border border-green-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">3. Quality</li>
                      <li className="rounded-2xl border border-green-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">4. Safety</li>
                      <li className="rounded-2xl border border-green-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">5. Care</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.6rem] border border-green-100 bg-gradient-to-b from-green-50/90 via-white to-white p-5 shadow-[0_16px_40px_rgba(72,160,76,0.10)] sm:p-6">
                <div className="pointer-events-none absolute -right-2 -top-2 w-16 opacity-95 sm:w-20">
                  <Mascot className="w-full" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-green-600">Why Choose Us</p>
                <h2 className="mt-2 max-w-[70%] text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">Why Parents Trust NBC Pedia</h2>

                <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-green-100 bg-white/85 p-3 text-center">
                  <div>
                    <p className="text-lg font-black text-green-700">100%</p>
                    <p className="text-[11px] font-semibold text-slate-500">Quality Focus</p>
                  </div>
                  <div>
                    <p className="text-lg font-black text-emerald-600">24/7</p>
                    <p className="text-[11px] font-semibold text-slate-500">Support Intent</p>
                  </div>
                  <div>
                    <p className="text-lg font-black text-teal-600">Pedia</p>
                    <p className="text-[11px] font-semibold text-slate-500">Specialized</p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-green-100 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-700">
                        <TrustShieldIcon />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-green-700">Quality Assured Medicines</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">Sourced from reputed manufacturers with strict quality standards.</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-green-100 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                        <PediatricCareIcon />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-green-700">Child-Centric Care</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">Formulations and support designed around pediatric healthcare needs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-green-100 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                        <GuidanceIcon />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-green-700">Reliable Guidance</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">Our team is here to help families choose safe and effective treatment paths.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
    </div>
  );
}

function TrustShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 3v5c0 5-3.1 8.5-7 10-3.9-1.5-7-5-7-10V6l7-3Z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

function PediatricCareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 6c1.6-2.2 5-1 5 1.8 0 2.6-2.8 4.4-5 6.2-2.2-1.8-5-3.6-5-6.2C7 5 10.4 3.8 12 6Z" />
      <path d="M5 18c2.5-2 4.5-3 7-3s4.5 1 7 3" />
    </svg>
  );
}

function GuidanceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12a8 8 0 1 1 16 0" />
      <path d="M4 13v4a2 2 0 0 0 2 2h1v-6H4Z" />
      <path d="M20 13v4a2 2 0 0 1-2 2h-1v-6h3Z" />
      <path d="M12 19a2 2 0 0 0 2-2" />
    </svg>
  );
}