import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Mascot from "../../../components/Mascot";
import ProductJsonLd from "../../../components/ProductJsonLd";
import RelatedProducts from "../../../components/RelatedProducts";
import { buildProductMetadata, getProductBySlug } from "../../products-data";

const product = getProductBySlug("syrup", "pediagesic-p-suspension")!;

export const metadata: Metadata = buildProductMetadata(product);

export default function PediagesicPSuspensionPage() {
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
            Pediagesic-P Suspension
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 product-detail-body">
            Pediatric pain and fever management syrup with balanced analgesic and antipyretic action.
          </p>
        </section>

        <section className="product-detail-image-card mt-6 rounded-3xl p-4 sm:p-6">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[#e2f5ea] bg-[#fbfffd] p-3 sm:max-w-md">
            <Image
              src="/products/syrup/Picsart_26-06-21_19-38-10-020.png"
              alt="Pediagesic-P Suspension"
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
            <p className="product-detail-body mt-2 text-base leading-7">Pediagesic-P Suspension</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Composition</h2>
            <p className="product-detail-body mt-2 text-base leading-7">
              Each 5ml contains Meenamic Acid 50mg + Paracetamol 125mg as suspension Pack Size : 60ml.
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Formulation</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Suspension</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Flavour</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Mango Flavour</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Description</h2>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Therapy / Class</h2>

            <p className="product-detail-accent mt-3 text-sm font-bold uppercase tracking-wide">Therapy</p>
            <ul className="product-detail-body mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>Mefenamic Acid: Analgesic, Anti-Inflammatory &amp; Antipyretic</li>
              <li>Paracetamol: Analgesics &amp; Antipyretic</li>
            </ul>

            <p className="product-detail-accent mt-4 text-sm font-bold uppercase tracking-wide">Class</p>
            <ul className="product-detail-body mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>Mefenamic Acid: Nonsteroidal Anti-Inflammatory Drugs (NSAIDs)</li>
              <li>Paracetamol: Para Aminophenol Derivatives</li>
            </ul>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Mechanism of Action</h2>
            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Mefenamic Acid:</span> Mefenamic acid binds the
              prostaglandin synthetase receptors COX-1 and COX-2, inhibiting the action of prostaglandin synthetase.
              As these receptors have a role as a major mediator of inflammation and/or a role for prostanoid
              signalling in activity-dependent plasticity, the symptoms of pain are temporarily reduced.
            </p>
            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Paracetamol:</span> Paracetamol primarily raises the pain
              threshold in the central nervous system (CNS) by inhibiting COX-1, COX-2, and COX-3 enzymes involved in
              prostaglandin synthesis. Its antipyretic properties result from direct effects on the hypothalamus,
              promoting peripheral vasodilation, sweating, and heat dissipation.
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Indications</h2>
            <p className="product-detail-body mt-2 text-sm leading-6">In Mild to Moderate Pain associated with....</p>
            <ul className="product-detail-body mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>Flu, Cold or Fever</li>
              <li>Teething / Immunization</li>
              <li>Tonsillitis / Pharyngitis</li>
              <li>Otitis Media</li>
              <li>Onset of Menses</li>
              <li>Muscular/Sport Injury</li>
              <li>Migraine</li>
            </ul>
          </article>
        </section>

        <RelatedProducts product={product} />
      </div>
    </main>
  );
}
