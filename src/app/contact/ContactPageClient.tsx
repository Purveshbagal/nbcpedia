"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { siteContact } from "../site-content";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactPageClient() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sent, setSent] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Inquiry from ${form.name || "Website Visitor"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "-"}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${siteContact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="product-detail-shell">
      <main className="container-premium pt-8 pb-8 sm:pt-12 sm:pb-10">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <Link href="/" className="transition-colors hover:text-[#33b53a]">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-[#33b53a]">Contact Us</span>
        </nav>

        <Reveal>
          <div className="mb-8 sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#33b63a]">Get In Touch</p>
            <h1 className="mt-1 text-[26px] font-extrabold tracking-tight text-slate-900 sm:text-[34px] cartoon-heading">
              Contact Us
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Have a question about our pediatric range or want to place an inquiry? Reach out to our team, or send
              us a message directly below.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <Reveal>
            <div className="rounded-2xl bg-gradient-to-br from-[#248e29] via-[#31ab37] to-[#1e7a23] p-6 text-white shadow-2xl shadow-[#2aa830]/30 sm:p-8">
              <h2 className="text-lg font-bold sm:text-xl">{siteContact.company}</h2>
              <p className="mt-1 text-sm text-white/75">Pediatric Division: NBC Pedia</p>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/12">
                    <PinIcon />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-white/60">Address</p>
                    <p className="mt-1 text-sm leading-6 text-white/90">{siteContact.address}</p>
                  </div>
                </div>

                <a href={`tel:${siteContact.phone}`} className="flex items-start gap-3 transition-opacity hover:opacity-80">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/12">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-white/60">Phone</p>
                    <p className="mt-1 text-sm text-white/90">{siteContact.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${siteContact.email}`} className="flex items-start gap-3 transition-opacity hover:opacity-80">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/12">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-white/60">Email</p>
                    <p className="mt-1 text-sm text-white/90">{siteContact.email}</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 flex gap-2">
                <SocialDot label="f" />
                <SocialDot label="ig" />
                <SocialDot label="in" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#e9f8e9] bg-white p-6 shadow-[0_14px_34px_rgba(70,156,74,0.11)] sm:p-8"
            >
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Send Inquiry</h2>
              <p className="mt-1 text-sm text-slate-500">Fill in your details and we&apos;ll get back to you.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-[#ddf5dc] bg-[#fafdfa] px-3.5 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-[#33b53a] focus:bg-white"
                    placeholder="Your name"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="text-xs font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-[#ddf5dc] bg-[#fafdfa] px-3.5 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-[#33b53a] focus:bg-white"
                    placeholder="Optional"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-[#ddf5dc] bg-[#fafdfa] px-3.5 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-[#33b53a] focus:bg-white"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1.5 w-full resize-none rounded-lg border border-[#ddf5dc] bg-[#fafdfa] px-3.5 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-[#33b53a] focus:bg-white"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-pop mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#34b63b] to-[#46cf4d] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:from-[#2ba731] hover:to-[#38bf3f]"
              >
                <SendIcon />
                Send Inquiry
              </button>

              {sent ? (
                <p className="mt-4 text-sm font-medium text-[#1f8b66]">
                  Your email app should now open with your message ready to send. If it didn&apos;t, email us
                  directly at {siteContact.email}.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </main>
    </div>
  );
}

function SocialDot({ label }: { label: string }) {
  return (
    <div className="flex h-9 min-w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 px-2 text-xs font-semibold text-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20">
      {label}
    </div>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5c0-.6.4-1 1-1h3l2 5-2 1.3a11 11 0 0 0 5 5l1.3-2 5 2v3c0 .6-.4 1-1 1A15 15 0 0 1 4 5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </svg>
  );
}
