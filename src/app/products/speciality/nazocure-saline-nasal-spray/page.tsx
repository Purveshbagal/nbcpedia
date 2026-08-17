import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Mascot from "../../../components/Mascot";
import ProductJsonLd from "../../../components/ProductJsonLd";
import RelatedProducts from "../../../components/RelatedProducts";
import { buildProductMetadata, getProductBySlug } from "../../products-data";

const product = getProductBySlug("speciality", "nazocure-saline-nasal-spray")!;

export const metadata: Metadata = buildProductMetadata(product);

export default function NazocureSalineNasalSprayPage() {
  return (
    <main className="product-detail-shell py-8 sm:py-12">
      <ProductJsonLd product={product} />
      <div className="container-premium mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <Link href="/" className="transition-colors hover:text-[#33b53a]">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/products/speciality" className="transition-colors hover:text-[#33b53a]">
            Speciality Products
          </Link>
        </nav>

        <Link
          href="/products/speciality"
          className="product-detail-back-link mb-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5"
        >
          <span aria-hidden="true">←</span> Back to Speciality Products
        </Link>

        <section className="product-detail-hero rounded-3xl p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-2 -top-2 z-10 w-16 opacity-95 sm:w-20">
            <Mascot className="w-full" />
          </div>
          <p className="product-detail-accent text-xs font-bold uppercase tracking-[0.2em]">
            Speciality Product Details
          </p>
          <h1 className="product-detail-heading mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Nazocure Saline Nasal Spray
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 product-detail-body">
            Saline nasal irrigating spray for relief of nasal congestion, irritation and dryness of the nasal
            passages.
          </p>
        </section>

        <section className="product-detail-image-card mt-6 rounded-3xl p-4 sm:p-6">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[#e2f5ea] bg-[#fbfffd] p-3 sm:max-w-md">
            <Image
              src="/products/speciality/nazocure-saline-nasal-spray.png"
              alt="Nazocure Saline Nasal Spray"
              width={700}
              height={700}
              quality={72}
              sizes="(max-width: 768px) 85vw, 420px"
              className="h-auto w-full object-contain"
            />
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Product Name</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Nazocure Saline Nasal Spray</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Composition</h2>
            <p className="product-detail-body mt-2 text-base leading-7">
              Each 1ml saline solution contains 0.65% w/v of Sodium Chloride as Nasal spray. Pack Size: 20ml.
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Formulation</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Nasal Solution</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Category</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Nasal Spray</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Description</h2>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Therapy / Class</h2>

            <p className="product-detail-accent mt-3 text-sm font-bold uppercase tracking-wide">Therapy</p>
            <p className="product-detail-body mt-2 text-sm leading-6">Nasal Irrigating Solution</p>

            <p className="product-detail-accent mt-4 text-sm font-bold uppercase tracking-wide">Class</p>
            <p className="product-detail-body mt-2 text-sm leading-6">Inorganic Salt</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Mechanism of Action</h2>
            <p className="product-detail-body mt-3 text-sm leading-7">
              It helps to cleanse the nasal cavities when the nose is blocked, by washing away the excess mucus or
              the allergen particles such as dust/pollen.
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Indications</h2>
            <ul className="product-detail-body mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>Relief of Nasal Congestion or Stuffy Nose</li>
              <li>Alleviation of Nasal Irritation</li>
              <li>Management of Dryness of the Nasal Passages</li>
            </ul>
          </article>
        </section>

        <RelatedProducts product={product} />
      </div>
    </main>
  );
}
