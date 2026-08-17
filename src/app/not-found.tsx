import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="product-detail-shell flex min-h-[50vh] flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#33b63a]">404</p>
      <h1 className="cartoon-heading mt-2 text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link
        href="/"
        className="btn-pop mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-[#34b63b] to-[#46cf4d] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:from-[#2ba731] hover:to-[#38bf3f]"
      >
        Back to Home
      </Link>
    </main>
  );
}
