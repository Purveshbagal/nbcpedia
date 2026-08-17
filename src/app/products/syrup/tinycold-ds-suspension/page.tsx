import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Mascot from "../../../components/Mascot";
import ProductJsonLd from "../../../components/ProductJsonLd";
import RelatedProducts from "../../../components/RelatedProducts";
import { buildProductMetadata, getProductBySlug } from "../../products-data";

const product = getProductBySlug("syrup", "tinycold-ds-suspension")!;

export const metadata: Metadata = buildProductMetadata(product);

export default function TinycoldDSSuspensionPage() {
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
            Tinycold-DS Suspension
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 product-detail-body">
            Triple-action suspension for cold symptoms, nasal congestion, allergy, and fever relief.
          </p>
        </section>

        <section className="product-detail-image-card mt-6 rounded-3xl p-4 sm:p-6">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[#e2f5ea] bg-[#fbfffd] p-3 sm:max-w-md">
            <Image
              src="/products/syrup/Picsart_26-06-21_19-40-53-703.png"
              alt="Tinycold-DS Suspension"
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
            <p className="product-detail-body mt-2 text-base leading-7">Tinycold-DS Suspension</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Composition</h2>
            <p className="product-detail-body mt-2 text-base leading-7">
              Each 5ml contains Phenylephrine 5mg + Chlorpheniramine 2mg + Paracetamol 250mg
              <br />
              Pack Size - 60ml.
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
            <h2 className="product-detail-heading cartoon-heading text-lg font-bold">Categories</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Suspension, Syrups</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Description</h2>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Therapy / Class</h2>

            <p className="product-detail-accent mt-3 text-sm font-bold uppercase tracking-wide">Therapy</p>
            <ul className="product-detail-body mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>Phenylephrine: Decongestant</li>
              <li>Chlorpheniramine: Antiallergic</li>
              <li>Paracetamol: Analgesics with Antipyretic</li>
            </ul>

            <p className="product-detail-accent mt-4 text-sm font-bold uppercase tracking-wide">Class</p>
            <ul className="product-detail-body mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>Phenylephrine: Selective Alpha-1 Adrenergic Agonist</li>
              <li>Chlorpheniramine: Antihistamine H1 Receptor Antagonist</li>
              <li>Paracetamol: Para Aminophenol Derivatives</li>
            </ul>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Mechanism of Action</h2>

            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Phenylephrine:</span> It stimulates
              alpha-adrenergic receptors on the nasal mucosa (direct effect) causing vasoconstriction of local vessels.
              The vasoconstrictiv action decreases mucosal edema, leading to a decongestant effect.
            </p>

            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Chlorpheniramine:</span> It has H1-antagonist
              activity belonging to the alkylamine class of antihistamines and it appear to compete with histamine for
              receptor site on effector cells. It antagonizes the allergic response vasodilatation, increased vascular
              permeability, increased mucus secretion of nasal tissue.
            </p>

            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Paracetamol:</span> Paracetamol primarily raises
              the pain threshold in the central nervous system (CNS) by inhibiting COX-1, COX-2, and COX-3 enzymes
              involved in prostaglandin synthesis. Its antipyretic properties result from direct effects on the
              hypothalamus, promoting peripheral vasodilation, sweating, and heat dissipation.
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Indications</h2>
            <ul className="product-detail-body mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>
                For relief of coughs and upper respiratory symptoms, including nasal congestion, associated with Fever,
                Allergy &amp; Common Cold
              </li>
            </ul>
          </article>
        </section>

        <RelatedProducts product={product} />
      </div>
    </main>
  );
}
