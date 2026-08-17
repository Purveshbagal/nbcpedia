"use client";

import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Mascot from "./Mascot";
import FloatingShapes from "./FloatingShapes";
import { siteContact } from "../site-content";

import "swiper/css";

// One tight, bottom-aligned product cluster on a shared platform — all five
// sit on (almost) the same baseline and heavily overlap each other, like a
// shelf display, rather than being spread out with gaps between them.
// Left-to-right sequence: Pediamont, Molrin, Pediagesic, Totsberry, Tinycold-AF
// (Pediagesic and Tinycold-AF sit a step behind, peeking out from between
// their taller front-row neighbours). left/bottom/height are all percentages
// of the stage box, so the whole composition scales together at every breakpoint.
const stagedProducts = [
  {
    role: "1-pediamont",
    src: "/sidebar/second-slide/1000728849.png",
    alt: "Pediamont LC Kid tablet strip and carton",
    width: 831,
    height: 479,
    className: "left-[4%] bottom-0 z-30 h-[46%] -rotate-[9deg]",
  },
  {
    role: "2-molrin",
    src: "/sidebar/second-slide/1000728847.png",
    alt: "Molrin 250 Suspension bottle with measuring cup",
    width: 638,
    height: 1003,
    className: "left-[24%] bottom-0 z-40 h-[94%]",
  },
  {
    role: "3-pediagesic",
    src: "/sidebar/second-slide/1000718902.png",
    alt: "Pediagesic-P Suspension bottle and carton",
    width: 1575,
    height: 2047,
    className: "left-[36%] bottom-[3%] z-10 h-[78%] -rotate-[5deg]",
  },
  {
    role: "4-totsberry",
    src: "/sidebar/second-slide/1000718913.png",
    alt: "Totsberry PD Syrup bottle and carton",
    width: 1741,
    height: 2047,
    className: "left-[50%] bottom-0 z-30 h-[86%] rotate-[4deg]",
  },
  {
    role: "5-tinycold-af",
    src: "/sidebar/second-slide/1000718908.png",
    alt: "Tinycold-AF Syrup bottle and carton",
    width: 1741,
    height: 2047,
    className: "left-[66%] bottom-[3%] z-10 h-[76%] rotate-[7deg]",
  },
];

const features = [
  { label: "Pediatric Approved", icon: <PediatricApprovedIcon /> },
  { label: "Safe & Gentle", icon: <SafeGentleIcon /> },
  { label: "Quality Assured", icon: <QualityAssuredIcon /> },
  { label: "Trusted by Parents", icon: <TrustedParentsIcon /> },
  { label: "Pleasant Taste", icon: <PleasantTasteIcon /> },
  { label: "Recommended by Pediatricians", icon: <RecommendedIcon /> },
];

const healthTips = [
  {
    icon: "/third-slide/icon1-dosage.webp",
    text: "Always use age-specific dosages; never give adult medicine to a child or infant.",
  },
  {
    icon: "/third-slide/icon2-store.webp",
    text: "Store medicines out of children's reach, in a cool, dry place as labelled.",
  },
  {
    icon: "/third-slide/icon3-hydrate.webp",
    text: "Keep your child hydrated and rested when they're unwell to support faster recovery.",
  },
  {
    icon: "/third-slide/icon4-consult.webp",
    text: "Consult a pediatrician before starting any new supplement, syrup, or over-the-counter medicine.",
  },
];

export default function HeroSlider() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  // Nav arrows are pinned to this measured pixel value instead of a live
  // `top: 50%`, so they hold still while autoHeight smoothly animates the
  // panel's height between slides — only jumping once the height has
  // actually stopped changing (autoHeight's own transition doesn't line up
  // with Swiper's transitionEnd event, so we watch real layout instead of
  // trusting that event's timing).
  const [arrowTop, setArrowTop] = useState<number | null>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    let settleTimer: ReturnType<typeof setTimeout>;
    const observer = new ResizeObserver(([entry]) => {
      clearTimeout(settleTimer);
      const height = entry.contentRect.height;
      settleTimer = setTimeout(() => setArrowTop(height / 2), 120);
    });
    observer.observe(panel);

    return () => {
      clearTimeout(settleTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={panelRef} className="hero-glow hero-panel relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#e8f8e8] bg-[#f6fcf6] shadow-[0_18px_50px_rgba(63,151,67,0.14)]">
      <Swiper
        modules={[Autoplay]}
        speed={700}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        autoHeight
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        <SwiperSlide>
          {/* Slide 1. Height is fixed per breakpoint — matching the same
              values slides 2-4 always used (tuned to slide 1's original
              on-screen size), so desktop/tablet look exactly like before.
              Only the mobile value was made taller, since the old
              aspect-ratio-driven image (~80px tall at phone widths) was far
              too short for the text overlay and got clipped. The image is
              `fill` so it crops to whatever height is set instead of
              dictating it. */}
          <div className="relative h-[260px] w-full sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[380px]">
            <Image
              src="/sidebar/side.jpeg"
              alt="NBC Pedia slide"
              fill
              sizes="100vw"
              className="object-cover object-[69%_28%] sm:object-center"
              priority
            />
            <FloatingShapes />
            <div className="hero-overlay absolute inset-y-0 left-0 z-10 flex w-[64%] items-center px-4 sm:w-[62%] sm:px-8 md:px-10 lg:px-12 xl:px-16">
              <div className="max-w-[700px]">
                <p className="inline-flex rounded-full border border-white/75 bg-white/80 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#30a836] shadow-sm sm:text-[11px]">
                  Trusted Pediatric Healthcare
                </p>
                <h1 className="mt-2 text-[20px] font-black leading-[1.1] tracking-tight text-[#0f2d21] sm:text-[26px] md:text-[34px] lg:text-[42px] xl:text-[52px]">
                  Comprehensive Care for
                  <span className="block">
                    <span className="text-[#33b63a]">Children Health</span>
                    <span className="text-[#0f2d21]"> and </span>
                    <span className="text-[#11946e]">Development</span>
                  </span>
                </h1>
                <p className="mt-3 max-w-[560px] text-[10px] font-medium leading-[1.9] text-[#24503e] sm:mt-4 sm:text-[12px] md:text-[14px] lg:text-[17px] xl:text-[19px]">
                  Committed to providing safe, effective and reliable healthcare solutions for a healthier tomorrow.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
                  <a href="#products" className="btn-pop inline-flex items-center rounded-full bg-gradient-to-r from-[#34b63b] to-[#46cf4d] px-4 py-2 text-xs font-semibold text-white shadow-md transition-colors hover:from-[#2ba731] hover:to-[#38bf3f] sm:px-5 sm:py-2.5 sm:text-sm">
                    Explore Categories
                  </a>
                  <a href="/contact" className="btn-pop inline-flex items-center rounded-full border border-[#d4f4d5] bg-white/85 px-4 py-2 text-xs font-semibold text-[#33b53a] transition-colors hover:bg-white sm:px-5 sm:py-2.5 sm:text-sm">
                    Contact Team
                  </a>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-3 right-3 z-[2] hidden w-16 drop-shadow-lg sm:block md:w-20 lg:w-24">
              <Mascot className="w-full" />
            </div>
          </div>

          <div className="relative z-10 grid gap-2 border-t border-white/65 bg-white/70 p-2 backdrop-blur-sm sm:grid-cols-3 sm:gap-3 sm:p-3">
            <Metric
              label="Focused Portfolio"
              value="6+ Pediatric Forms"
              tone="from-[#eefaed] to-[#f6fcf6]"
              labelColor="text-[#33b53a]"
              valueColor="text-[#2c5343]"
            />
            <Metric
              label="Quality Benchmark"
              value="High Safety Standards"
              tone="from-[#e7fbf3] to-[#f2fdf9]"
              labelColor="text-[#188f68]"
              valueColor="text-[#1c3d2f]"
            />
            <Metric
              label="Parent Confidence"
              value="Trusted Support Network"
              tone="from-[#eafaf1] to-[#f4fdf8]"
              labelColor="text-[#1f8b66]"
              valueColor="text-[#254238]"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* Slide 2 — safety & trust. Capped to roughly slide 1's typical
              height and scrolls internally if content runs over, without
              touching slide 1's own (autoHeight, unconstrained) sizing. */}
          <div className="hero-slide-scroll relative flex max-h-[420px] flex-col gap-2.5 overflow-y-auto px-11 pb-9 pt-3 sm:max-h-[460px] sm:gap-3 sm:px-14 sm:pb-10 sm:pt-4 md:max-h-[540px] md:px-16 lg:max-h-[420px] lg:flex-row lg:items-center lg:gap-6 lg:px-10 xl:max-h-[480px] xl:gap-8 xl:px-12">
            <FloatingShapes
              shapes={[
                { kind: "star", top: "6%", left: "3%", size: 14, color: "#ffb648", delay: "0.2s", duration: "6.5s" },
                { kind: "heart", top: "88%", left: "5%", size: 14, color: "#ff8fab", delay: "1.4s", duration: "7.5s" },
                { kind: "bubble", top: "10%", left: "96%", size: 12, color: "#7ee0c3", delay: "0.8s", duration: "8s" },
                { kind: "star", top: "90%", left: "94%", size: 10, color: "#afebb2", delay: "1.9s", duration: "7s" },
              ]}
            />

            <div className="relative z-10 flex-shrink-0 lg:flex lg:basis-[40%] lg:flex-col lg:justify-center">
              <p className="inline-flex items-center gap-1.5 rounded-full border border-white/75 bg-white/80 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#30a836] shadow-sm sm:text-[11px]">
                <HeartMiniIcon /> Trusted by Parents, Loved by Kids
              </p>
              <h2 className="mt-2 text-[20px] font-black leading-[1.1] tracking-tight text-[#0f2d21] sm:text-[26px] md:text-[34px] lg:text-[42px] xl:text-[52px]">
                Safe Medicines,
                <span className="block text-[#33b63a]">Stronger Care,</span>
                <span className="block text-[#11946e]">Brighter Tomorrow.</span>
              </h2>
              <p className="mt-2 max-w-[560px] text-[10px] font-medium leading-snug text-[#24503e] sm:mt-3 sm:text-[12px] md:text-[14px] lg:text-[17px] xl:text-[19px]">
                Carefully selected pediatric medicines for every little need. Safe, effective and gentle
                healthcare trusted by doctors and parents.
              </p>

              <div className="mt-2 grid grid-cols-3 gap-1.5 sm:mt-3 sm:gap-2">
                {features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-1.5 rounded-lg border border-white/75 bg-white/80 px-1.5 py-1 shadow-sm backdrop-blur-sm sm:px-2"
                  >
                    <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#effaef] to-[#f6fcf6] text-[#33b53a] sm:h-5 sm:w-5">
                      {feature.icon}
                    </div>
                    <span className="text-[7px] font-semibold leading-tight text-[#2c5343] sm:text-[8.5px]">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-platform-stage relative z-10 mx-auto h-[130px] w-full max-w-[300px] flex-shrink-0 sm:h-[170px] sm:max-w-[380px] md:h-[210px] md:max-w-[460px] lg:h-[260px] lg:max-w-none lg:basis-[60%] lg:flex-none xl:h-[290px]">
              <div className="product-platform-blob-1" aria-hidden="true" />
              <div className="product-platform-blob-2" aria-hidden="true" />
              <div className="product-platform-base" aria-hidden="true" />
              {stagedProducts.map((product) => (
                <Image
                  key={product.src}
                  src={product.src}
                  alt={product.alt}
                  width={product.width}
                  height={product.height}
                  sizes="(max-width: 640px) 32vw, (max-width: 1024px) 24vw, 18vw"
                  className={`absolute w-auto object-contain drop-shadow-2xl ${product.className}`}
                />
              ))}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* Slide 3 — health tips for parents. Uses the exact same
              width=2048/height=442 intrinsic box as slide 1's image, so the
              browser computes an identical height at every viewport width
              (verified with Playwright, not guessed). */}
          <div className="relative w-full">
            <Image
              src="/third-slide/background.jpg"
              alt="Family spending healthy time together outdoors"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e3d29]/85 via-[#155038]/78 to-[#0a2c1e]/88" />

            <div className="hero-slide-scroll relative z-10 flex flex-col items-center justify-center px-11 py-6 sm:px-14 sm:py-8 md:px-16">
              <h2 className="text-center text-base font-extrabold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-[34px]">
                Health Tips For Parents
              </h2>
              <p className="mt-1 max-w-md text-center text-[10px] leading-snug text-white/85 sm:mt-2 sm:max-w-lg sm:text-sm md:text-base">
                Simple, expert-backed habits every parent should know to keep their little ones safe, healthy and
                smiling.
              </p>

              <div className="mt-2 flex w-full max-w-5xl flex-wrap items-start justify-center gap-x-2 gap-y-3 sm:mt-4 sm:flex-nowrap sm:justify-between md:mt-6">
                {healthTips.map((tip, index) => (
                  <div key={tip.text} className="contents">
                    <div className="flex w-[44%] flex-col items-center text-center sm:w-auto sm:flex-1 sm:px-2">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-lg sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-[72px] lg:w-[72px]">
                        <Image
                          src={tip.icon}
                          alt=""
                          width={200}
                          height={200}
                          className="h-4 w-4 object-contain sm:h-7 sm:w-7 md:h-9 md:w-9 lg:h-10 lg:w-10"
                        />
                      </div>
                      <p className="mt-1 text-[10px] leading-snug text-white/90 sm:mt-2.5 sm:text-[13px] md:text-sm">
                        {tip.text}
                      </p>
                    </div>
                    {index < healthTips.length - 1 ? (
                      <div className="hidden flex-shrink-0 items-center pt-8 sm:flex">
                        <TipArrowIcon />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* Slide 4 — contact CTA. Same content-driven max-height scale as
              slides 2 & 3, so its footprint stays consistent. */}
          <div className="relative w-full">
            <Image
              src="/fourth slide/medicine-capsules-global-health-with-geometric-pattern-digital-remix.jpg"
              alt="Global healthcare and medicine background"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c2733]/80 via-[#2c3e50]/68 to-[#141c24]/82" />

            <div className="hero-slide-scroll relative z-10 flex flex-col items-center justify-center px-11 py-8 text-center sm:px-14 sm:py-10 md:px-16">
              <FloatingShapes
                shapes={[
                  { kind: "star", top: "8%", left: "4%", size: 16, color: "#ffd66b", delay: "0.2s", duration: "6.5s" },
                  { kind: "heart", top: "85%", left: "6%", size: 16, color: "#ff8fab", delay: "1.2s", duration: "7.5s" },
                  { kind: "bubble", top: "12%", left: "95%", size: 14, color: "#9be6c8", delay: "0.6s", duration: "8s" },
                  { kind: "star", top: "88%", left: "93%", size: 12, color: "#afebb2", delay: "1.8s", duration: "7s" },
                ]}
              />

              <p className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white sm:text-[11px]">
                <HeartMiniIcon /> Get In Touch
              </p>
              <h2 className="relative z-10 mt-2 text-xl font-black leading-[1.1] tracking-tight text-white sm:mt-3 sm:text-3xl md:text-4xl lg:text-[44px]">
                We&apos;re Here to Help Your{" "}
                <span className="text-[#5be06a]">Little One</span>{" "}
                <span className="text-[#7ee0c3]">Thrive</span>
              </h2>
              <p className="relative z-10 mt-2 max-w-xl text-[11px] font-medium leading-snug text-white/80 sm:mt-3 sm:text-sm md:text-base">
                Questions about our pediatric range or need guidance choosing the right product? Our team is just a
                call or message away.
              </p>

              <div className="relative z-10 mt-4 flex flex-wrap items-center justify-center gap-2 sm:mt-5 sm:gap-3">
                <a
                  href={`tel:${siteContact.phone}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white transition-colors hover:bg-white/20 sm:text-xs"
                >
                  <PhoneMiniIcon /> {siteContact.phone}
                </a>
                <a
                  href={`mailto:${siteContact.email}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white transition-colors hover:bg-white/20 sm:text-xs"
                >
                  <MailMiniIcon /> {siteContact.email}
                </a>
              </div>

              <div className="relative z-10 mt-4 flex flex-wrap justify-center gap-2 sm:mt-6 sm:gap-3">
                <a
                  href={`tel:${siteContact.phone}`}
                  className="btn-pop inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#2aa830] shadow-md transition-colors hover:bg-white/90 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  Call Now
                </a>
                <Link
                  href="/contact"
                  className="btn-pop inline-flex items-center rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/20 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button
        type="button"
        onClick={() => swiperInstance?.slidePrev()}
        aria-label="Previous slide"
        style={arrowTop != null ? { top: arrowTop } : undefined}
        className="hero-slider-arrow absolute left-2 top-1/2 z-20 -translate-y-1/2 sm:left-3"
      >
        <ChevronIcon direction="left" />
      </button>
      <button
        type="button"
        onClick={() => swiperInstance?.slideNext()}
        aria-label="Next slide"
        style={arrowTop != null ? { top: arrowTop } : undefined}
        className="hero-slider-arrow absolute right-2 top-1/2 z-20 -translate-y-1/2 sm:right-3"
      >
        <ChevronIcon direction="right" />
      </button>

      <div className="hero-slider-dots absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1.5 shadow-sm backdrop-blur-sm sm:bottom-3">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            type="button"
            onClick={() => swiperInstance?.slideToLoop(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeIndex === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? "w-5 bg-[#33b53a]" : "w-2 bg-[#b5edb8] hover:bg-[#8ce090]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  tone,
  labelColor,
  valueColor,
}: {
  label: string;
  value: string;
  tone: string;
  labelColor: string;
  valueColor: string;
}) {
  return (
    <div className={`rounded-xl border border-white/85 bg-gradient-to-r ${tone} px-3 py-2 shadow-[0_8px_20px_rgba(67,148,71,0.08)] sm:px-4 sm:py-3`}>
      <p className={`text-[9px] font-semibold uppercase tracking-[0.18em] ${labelColor} sm:text-[10px]`}>{label}</p>
      <p className={`mt-0.5 text-xs font-bold ${valueColor} sm:text-sm`}>{value}</p>
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {direction === "left" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

function HeartMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3 text-[#ff6f91] sm:h-3.5 sm:w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M12 20.5S3 14.9 3 8.9C3 5.9 5.4 3.5 8.3 3.5c1.7 0 3.3.8 4.3 2.2 1-1.4 2.6-2.2 4.3-2.2 2.9 0 5.3 2.4 5.3 5.4 0 6-9.2 11.6-9.2 11.6Z" />
    </svg>
  );
}

function PhoneMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5c0-.6.4-1 1-1h3l2 5-2 1.3a11 11 0 0 0 5 5l1.3-2 5 2v3c0 .6-.4 1-1 1A15 15 0 0 1 4 5Z" />
    </svg>
  );
}

function MailMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PediatricApprovedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 3v5c0 5-3.1 8.5-7 10-3.9-1.5-7-5-7-10V6l7-3Z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

function SafeGentleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 14c2-3 4-4 7-4s5 1 7 4" />
      <path d="M7 14l-2 3a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-2-3" />
      <path d="M12 6c1.6-2.2 5-1 5 1.8 0 2.6-2.8 4.4-5 6.2-2.2-1.8-5-3.6-5-6.2C7 5 10.4 3.8 12 6Z" />
    </svg>
  );
}

function QualityAssuredIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8.5" r="5" />
      <path d="M9 12.5l-1.5 6.5L12 17l4.5 2-1.5-6.5" />
    </svg>
  );
}

function TrustedParentsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16.5" cy="9.5" r="2.3" />
      <path d="M3.5 19c.5-3.2 2.7-5 5.5-5s5 1.8 5.5 5" />
      <path d="M15.5 15.3c2 .2 3.4 1.7 3.8 3.7" />
    </svg>
  );
}

function PleasantTasteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <path d="M8 14c1.2 1.6 2.6 2.4 4 2.4s2.8-.8 4-2.4" />
    </svg>
  );
}

function RecommendedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 4v6a4 4 0 0 0 8 0V4" />
      <path d="M6 7H4.5" />
      <path d="M14 7h1.5" />
      <circle cx="17.5" cy="14.5" r="2.5" />
      <path d="M14 10.5v1a4 4 0 0 1-4 4h-.5" />
    </svg>
  );
}

function TipArrowIcon() {
  return (
    <svg viewBox="0 0 60 24" className="h-4 w-10 text-white/50 md:h-5 md:w-14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="3 4" aria-hidden="true">
      <path d="M2 18c14-14 40-14 54 0" />
      <path d="M48 10l8 8-8 4" strokeDasharray="0" />
    </svg>
  );
}
