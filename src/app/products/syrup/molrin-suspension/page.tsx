import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Mascot from "../../../components/Mascot";
import ProductJsonLd from "../../../components/ProductJsonLd";
import RelatedProducts from "../../../components/RelatedProducts";
import { buildProductMetadata, getProductBySlug } from "../../products-data";

const product = getProductBySlug("syrup", "molrin-suspension")!;

export const metadata: Metadata = buildProductMetadata(product);

export default function MolrinSuspensionPage() {
  return (
    <main className="product-detail-shell py-8 sm:py-12">
      <ProductJsonLd product={product} />
      <div className="container-premium mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <Link href="/" className="transition-colors hover:text-[#33b53a]">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/products/syrup" className="transition-colors hover:text-[#33b53a]">
            Syrup Products
          </Link>
        </nav>

        <Link
          href="/products/syrup"
          className="product-detail-back-link mb-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5"
        >
          <span aria-hidden="true">←</span> Back to Syrup Products
        </Link>

        <section className="product-detail-hero rounded-3xl p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-2 -top-2 z-10 w-16 opacity-95 sm:w-20">
            <Mascot className="w-full" />
          </div>
          <p className="product-detail-accent text-xs font-bold uppercase tracking-[0.2em]">Syrup Product Details</p>
          <h1 className="product-detail-heading mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Molrin Suspension
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 product-detail-body">
            Pediatric analgesic and antipyretic suspension with paracetamol formulation for fever and pain relief.
          </p>
        </section>

        <section className="product-detail-image-card mt-6 rounded-3xl p-4 sm:p-6">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[#e2f5ea] bg-[#fbfffd] p-3 sm:max-w-md">
            <Image
              src="/products/syrup/Syrup1.png"
              alt="Molrin Suspension"
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
            <p className="product-detail-body mt-2 text-base leading-7">Molrin Suspension</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Composition</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Each 5ml contains Paracetamol 250mg.</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Pack Size</h2>
            <p className="product-detail-body mt-2 text-base leading-7">60ml</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Formulation</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Suspension</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Flavour</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Mango Flavour</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Category</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Suspension</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Description</h2>
            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Therapy / Class:</span> Analgesics &amp; Antipyretic / Para Aminophenol Derivatives
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Mechanism of Action</h2>
            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Analgesic Mechanism:</span> It produces analgesic
              action by inhibiting the COX pathway in the central nervous system but not in peripheral tissues. It acts
              within the CNS to increase the pain threshold by inhibiting central cyclo-oxygenase (Both COX-1 &amp; COX-2).
            </p>
            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Anti-Pyretic Mechanism:</span> It also produces
              antipyretic effect by inhibiting PG synthesis in the central nervous system &amp; blocking the actions of
              endogenous pyrogens at the hypothalamic thermo-regulatory centers.
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Indications</h2>
            <ul className="product-detail-body mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>Treatment Of Fever</li>
              <li>Treatment of Mild Pain or for the temporary relief of headache</li>
              <li>Myalgia</li>
              <li>Back Pain</li>
              <li>Musculoskeletal Pain</li>
              <li>Dental Pain (e.g., toothache)</li>
              <li>Dysmenorrhea, Arthralgia</li>
              <li>Minor aches &amp; pains associated with common cold or flu</li>
              <li>Moderate pain to severe pain with adjunctive opioid analgesics</li>
              <li>Acute treatment of migraine</li>
            </ul>
          </article>
        </section>

        <RelatedProducts product={product} />
      </div>
    </main>
  );
}
