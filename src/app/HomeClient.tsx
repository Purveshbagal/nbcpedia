"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./components/Reveal";
import HeroSlider from "./components/HeroSlider";

const products = [
  {
    title: "Drops",
    description:
      "Proven and dependable liquid formulations designed for easy administration and effective treatment in children's healthcare.",
    iconBg: "from-green-100 to-green-50",
    iconColor: "text-green-700",
    image: "/catlouge image/Drop.jpeg",
    icon: <DropIcon />,
  },
  {
    title: "Dry Syrups",
    description:
      "Convenient and precise dosage forms for effective treatment and ease of administration.",
    iconBg: "from-green-100 to-green-50",
    iconColor: "text-green-700",
    image: "/catlouge image/Dry Syrup.jpeg",
    icon: <BottleIcon />,
  },
  {
    title: "Tablets",
    description:
      "Easy-to-use solid dosage forms for accurate dosing and effective treatment in pediatric healthcare.",
    iconBg: "from-emerald-100 to-emerald-50",
    iconColor: "text-emerald-700",
    image: "/catlouge image/Tablet.jpeg",
    icon: <CapsuleIcon />,
  },
  {
    title: "Syrups",
    description:
      "Safe and tasty liquid medications specially formulated for children, ensuring easy administration and effective treatment.",
    iconBg: "from-orange-100 to-orange-50",
    iconColor: "text-orange-700",
    image: "/catlouge image/Syrup.jpeg",
    icon: <SyrupIcon />,
  },
  {
    title: "GUMMIES",
    description:
      "Fun and tasty chewable supplements that make taking vitamins a delightful experience for kids.",
    iconBg: "from-rose-100 to-rose-50",
    iconColor: "text-rose-700",
    image: "/catlouge image/Gummies.jpeg",
    icon: <BearIcon />,
  },
  {
    title: "Injectable",
    description:
      "Trusted and reliable injectable medication for precise administration and effective treatment in pediatric healthcare.",
    iconBg: "from-green-100 to-green-50",
    iconColor: "text-green-700",
    image: "/catlouge image/Injectable.jpeg",
    icon: <InjectionIcon />,
  },
  {
    title: "Speciality Products",
    description:
      "Advanced and unique therapy formulations for specialized pediatric care needs.",
    iconBg: "from-sky-100 to-sky-50",
    iconColor: "text-sky-700",
    image: "/catlouge image/Speciality Product.jpeg",
    icon: <DiamondIcon />,
  },
];

const assurances = [
  {
    title: "Trusted Quality",
    copy: "High quality products for your little ones",
    icon: <ShieldIcon />,
  },
  {
    title: "Safe & Effective",
    copy: "Safe, effective and reliable pediatric care",
    icon: <HeartHandsIcon />,
  },
  {
    title: "Expert Support",
    copy: "Here to support parents and healthcare professionals",
    icon: <SupportIcon />,
  },
  {
    title: "Innovation Driven",
    copy: "Innovative solutions for better tomorrow",
    icon: <SparkIcon />,
  },
];

const certifications = [
  { image: "/Certified/image 1.png", alt: "WHO GMP Certified" },
  { image: "/Certified/image 2.png", alt: "WHO Certified" },
  { image: "/Certified/image 3.png", alt: "HACCP Food Safety Certified" },
  { image: "/Certified/image 4.png", alt: "ISO 9001:2015 Certified" },
];

export default function HomeClient() {
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPreviewImage(null);
      }
    }

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="text-slate-900">
      <main id="home" className="relative z-10 container-premium pb-8 pt-3 sm:pb-10">
        <HeroSlider />

        <Reveal className="mt-7 sm:mt-10">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3 sm:mb-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#33b63a]">Our Categories</p>
              <h2 className="mt-1 text-[20px] font-extrabold tracking-tight text-slate-900 sm:text-[26px]">Pediatric Product Range</h2>
            </div>
            <p className="max-w-xl text-xs leading-6 text-slate-500 sm:text-sm">
              Designed for safety, precision, and easy administration across pediatric age groups.
            </p>
          </div>
        </Reveal>

        <section id="products" className="mt-3 grid gap-3 sm:gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article className="category-card group flex h-full flex-col items-center text-center rounded-2xl border border-[#e9f8e9] bg-white/95 p-4 sm:p-5 shadow-[0_14px_34px_rgba(70,156,74,0.11)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:rotate-[0.3deg] hover:shadow-[0_18px_44px_rgba(67,162,72,0.2)]">
                <svg className="card-scanner pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
                  <rect
                    x="1"
                    y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx="15"
                    ry="15"
                    pathLength={100}
                    className="card-scanner-path"
                  />
                </svg>
                <div className="category-bar mb-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#33b63a] via-[#44cc4b] via-[#2ab98b] to-[#33b63a] [background-size:200%_100%]" />
                <button
                  type="button"
                  onClick={() => setPreviewImage({ src: item.image, alt: `${item.title} product logo` })}
                  className="category-icon-float relative h-14 w-14 overflow-hidden rounded-lg border border-white/70 bg-white shadow-inner transition hover:scale-[1.03] sm:h-16 sm:w-16 sm:rounded-[1.25rem]"
                  style={{ animationDelay: `${index * 0.4}s` }}
                  aria-label={`View ${item.title} image in full screen`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} product logo`}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                  <div className={`category-badge-pulse absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${item.iconBg} ${item.iconColor} shadow-sm sm:h-7 sm:w-7`}>
                    <div className="scale-75">{item.icon}</div>
                  </div>
                </button>
                <h2 className="category-title mt-3 sm:mt-4 text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900 cartoon-heading">{item.title}</h2>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600">{item.description}</p>
                <a
                  href={
                    item.title === "Syrups"
                      ? "/products/syrup"
                      : item.title === "Tablets"
                        ? "/products/tablet"
                        : item.title === "Speciality Products"
                          ? "/products/speciality"
                          : "/contact"
                  }
                  className="btn-pop mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-[#34b63b] to-[#46cf4d] px-4 py-2 text-xs font-semibold text-white shadow-md transition-colors hover:from-[#2ba731] hover:to-[#38bf3f] sm:mt-5 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  View Products
                </a>
              </article>
            </Reveal>
          ))}
        </section>

        <Reveal className="mt-7 sm:mt-9">
          <div className="grid gap-3 rounded-2xl border border-[#e8f8e8] bg-gradient-to-r from-[#f0fbef] via-[#fff7fb] to-[#edf9f4] p-4 shadow-[0_14px_34px_rgba(73,158,77,0.1)] sm:grid-cols-3 sm:gap-4 sm:p-5 lg:p-6">
            <InfoCard
              title="Parent Friendly"
              copy="Clear dosage formats and kid-friendly options to improve daily adherence."
            />
            <InfoCard
              title="Clinically Minded"
              copy="Designed for precision and consistency across each pediatric treatment stage."
            />
            <InfoCard
              title="Reliable Delivery"
              copy="From product quality to support, every touchpoint is built for trust."
            />
          </div>
        </Reveal>

        <Reveal className="mt-6 sm:mt-8">
          <div className="grid gap-2 sm:gap-3 rounded-2xl border border-[#e9f8e9] bg-white/92 p-3 sm:p-4 shadow-[0_18px_45px_rgba(67,148,71,0.12)] md:grid-cols-2 xl:grid-cols-4">
            {assurances.map((item) => (
              <div key={item.title} className="group flex items-start gap-2 sm:gap-3 rounded-lg sm:rounded-2xl p-2 sm:p-3 transition-colors duration-300 hover:bg-[#fafdfa]">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-2xl bg-gradient-to-br from-[#effaef] to-[#f6fcf6] text-[#33b53a] flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <div className="text-sm sm:text-base">{item.icon}</div>
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">{item.title}</h3>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="mt-7 sm:mt-9">
          <div className="rounded-2xl border border-[#e9f8e9] bg-white/92 p-4 text-center shadow-[0_18px_45px_rgba(67,148,71,0.12)] sm:p-6">
            <h2 className="cartoon-heading text-[17px] font-extrabold uppercase tracking-[0.04em] text-black sm:text-[30px] sm:tracking-wide">
              Our Manufacturing Facilities Are Certified
            </h2>
            <div className="mt-5 grid grid-cols-4 items-center justify-items-center gap-3 sm:mt-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-14">
              {certifications.map((cert) => (
                <div key={cert.alt} className="flex h-16 w-16 items-center justify-center sm:h-32 sm:w-32">
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    width={240}
                    height={240}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </main>

      {previewImage ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-[fadeInModal_220ms_ease-out]"
          onClick={() => setPreviewImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-slate-900 shadow transition-transform duration-200 hover:scale-105 active:scale-95"
            onClick={() => setPreviewImage(null)}
            aria-label="Close image preview"
          >
            X
          </button>
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl animate-[scaleInModal_240ms_cubic-bezier(0.16,1,0.3,1)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={previewImage.src}
              alt={previewImage.alt}
              width={1600}
              height={1200}
              className="h-auto max-h-[90vh] w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function InfoCard({ title, copy }: { title: string; copy: string }) {
  return (
    <article className="rounded-xl border border-white/85 bg-white/86 p-3 shadow-sm sm:p-4">
      <h3 className="text-sm font-bold text-[#2aa330] sm:text-base">{title}</h3>
      <p className="mt-1 text-xs leading-6 text-slate-600 sm:text-sm">{copy}</p>
    </article>
  );
}

function DropIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c2.5 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3.5-7 6-11Z" />
      <path d="M15 15c-.5 1.5-1.7 2.6-3.2 3" />
    </svg>
  );
}

function BottleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3h6" />
      <path d="M10 3v3l-2 2v13h8V8l-2-2V3" />
      <path d="M8 11h8" />
    </svg>
  );
}

function CapsuleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 5a4.5 4.5 0 0 0-3.2 7.7l6.5 6.5a4.5 4.5 0 1 0 6.4-6.4L11.2 6.3A4.5 4.5 0 0 0 8 5Z" />
      <path d="M9 8l7 7" />
    </svg>
  );
}

function SyrupIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 3h4" />
      <path d="M9 3v3l-2 2v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8l-2-2V3" />
      <path d="M8 12h8" />
      <path d="M8 15c1.5-1 2.5-1 4 0s2.5 1 4 0" />
    </svg>
  );
}

function BearIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7" cy="7" r="2" />
      <circle cx="17" cy="7" r="2" />
      <circle cx="12" cy="13" r="6" />
      <circle cx="10" cy="12" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="14" cy="12" r="0.8" fill="currentColor" stroke="none" />
      <path d="M11 15c.7.6 1.3.6 2 0" />
    </svg>
  );
}

function InjectionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 7l7 7" />
      <path d="M15 4l5 5" />
      <path d="M7 10l7 7" />
      <path d="M14 8l2-2 2 2-2 2" />
      <path d="M5 19l3-3" />
      <path d="M4 20l1-1" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 8l3-4h6l3 4" />
      <path d="M6 8h12" />
      <path d="M6 8l6 12 6-12" />
      <path d="M9 4l-.5 4M15 4l.5 4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 3v5c0 5-3.1 8.5-7 10-3.9-1.5-7-5-7-10V6l7-3Z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

function HeartHandsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 14c2-3 4-4 7-4s5 1 7 4" />
      <path d="M7 14l-2 3a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-2-3" />
      <path d="M12 6c1.6-2.2 5-1 5 1.8 0 2.6-2.8 4.4-5 6.2-2.2-1.8-5-3.6-5-6.2C7 5 10.4 3.8 12 6Z" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12a8 8 0 1 1 16 0" />
      <path d="M4 13v4a2 2 0 0 0 2 2h1v-6H4Z" />
      <path d="M20 13v4a2 2 0 0 1-2 2h-1v-6h3Z" />
      <path d="M12 19a2 2 0 0 0 2-2" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />
      <path d="M5 18l1 4 1-4 4-1-4-1-1-4-1 4-4 1 4 1Z" />
    </svg>
  );
}
