import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Mascot from "../../../components/Mascot";
import ProductJsonLd from "../../../components/ProductJsonLd";
import RelatedProducts from "../../../components/RelatedProducts";
import { buildProductMetadata, getProductBySlug } from "../../products-data";

const product = getProductBySlug("tablet", "pediamont-lc-kid-tablet")!;

export const metadata: Metadata = buildProductMetadata(product);

export default function PediamontLCKidTabletPage() {
  return (
    <main className="product-detail-shell py-8 sm:py-12">
      <ProductJsonLd product={product} />
      <div className="container-premium mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <Link href="/" className="transition-colors hover:text-[#33b53a]">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/products/tablet" className="transition-colors hover:text-[#33b53a]">
            Tablet Products
          </Link>
        </nav>

        <Link
          href="/products/tablet"
          className="product-detail-back-link mb-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5"
        >
          <span aria-hidden="true">←</span> Back to Tablet Products
        </Link>

        <section className="product-detail-hero rounded-3xl p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-2 -top-2 z-10 w-16 opacity-95 sm:w-20">
            <Mascot className="w-full" />
          </div>
          <p className="product-detail-accent text-xs font-bold uppercase tracking-[0.2em]">Tablet Product Details</p>
          <h1 className="product-detail-heading mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Pediamont LC Kid Tablet
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 product-detail-body">
            Anti-allergic dispersible tablet for allergic rhinitis support and respiratory symptom management.
          </p>
        </section>

        <section className="product-detail-image-card mt-6 rounded-3xl p-4 sm:p-6">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[#e2f5ea] bg-[#fbfffd] p-3 sm:max-w-md">
            <Image
              src="/products/tablet/1000728849.png"
              alt="Pediamont LC Kid Tablet"
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
            <p className="product-detail-body mt-2 text-base leading-7">Pediamont LC Kid Tablet</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Composition</h2>
            <p className="product-detail-body mt-2 text-base leading-7">
              Each Dispersible Tablet contains Levocetirizine 2.5mg &amp; Montelukast 4mg
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Pack Size</h2>
            <p className="product-detail-body mt-2 text-base leading-7">10 Tablets in Strip</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Formulation</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Dispersible Tablet</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Flavour</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Orange Flavour</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading cartoon-heading text-lg font-bold">Category</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Tablets</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Description</h2>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Therapy / Class</h2>

            <p className="product-detail-accent mt-3 text-sm font-bold uppercase tracking-wide">Levocetirizine</p>
            <p className="product-detail-body mt-1 text-sm leading-6">
              <span className="product-detail-heading font-semibold">Therapy:</span> Anti-Allergic
            </p>
            <p className="product-detail-body mt-1 text-sm leading-6">
              <span className="product-detail-heading font-semibold">Class:</span> Second Generation Antihistamines
            </p>

            <p className="product-detail-accent mt-4 text-sm font-bold uppercase tracking-wide">Montelukast</p>
            <p className="product-detail-body mt-1 text-sm leading-6">
              <span className="product-detail-heading font-semibold">Therapy:</span> Anti-Allergic
            </p>
            <p className="product-detail-body mt-1 text-sm leading-6">
              <span className="product-detail-heading font-semibold">Class:</span> Leukotriene receptor antagonist
              (LTRA)
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Mechanism of Action</h2>

            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Levocetirizine:</span> It is a highly selective
              for histamine H1-receptors &amp; competes with free histamine for binding at H1-receptor sites. This
              competitive antagonism blocks the effects of histamine on H1-receptors in the GI tract, large blood
              vessels, and bronchial smooth muscle. Blockade of H1-receptors also suppresses the formation of edema,
              flare, and pruritus that result from histaminic activity. It also has anti-inflammatory action related to
              a reduction in eosinophils, neutrophils, interleukin-4 and interleukin-8.
            </p>

            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Montelukast:</span> It bind &amp; act as
              antagonists to cysteinyl leukotriene (CysLT) receptor found in the human airway including airway smooth
              muscle cells and airway macrophages. CysLTs have been correlated with the pathophysiology of asthma and
              allergic rhinitis.
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Indications</h2>
            <ul className="product-detail-body mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>Alleviation of symptoms associated with allergic rhinitis, whether it&apos;s seasonal or perennial.</li>
              <li>Prophylactic treatment for seasonal allergic rhinitis.</li>
              <li>Management of bronchial asthma and bronchitis.</li>
            </ul>
          </article>
        </section>

        <RelatedProducts product={product} />
      </div>
    </main>
  );
}
