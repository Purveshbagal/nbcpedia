import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Mascot from "../../../components/Mascot";
import ProductJsonLd from "../../../components/ProductJsonLd";
import RelatedProducts from "../../../components/RelatedProducts";
import { buildProductMetadata, getProductBySlug } from "../../products-data";

const product = getProductBySlug("speciality", "bactomust-ointment")!;

export const metadata: Metadata = buildProductMetadata(product);

export default function BactomustOintmentPage() {
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
            Bactomust Ointment
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 product-detail-body">
            Topical antibiotic ointment for impetigo and secondary skin infections.
          </p>
        </section>

        <section className="product-detail-image-card mt-6 rounded-3xl p-4 sm:p-6">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[#e2f5ea] bg-[#fbfffd] p-3 sm:max-w-md">
            <Image
              src="/products/speciality/bactomust-ointment.png"
              alt="Bactomust Ointment"
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
            <p className="product-detail-body mt-2 text-base leading-7">Bactomust Ointment</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Composition</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Mupirocin 2% w/w. Pack Size: 5gm.</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Formulation</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Ointment</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Category</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Speciality Product</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Description</h2>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Therapy / Class</h2>
            <p className="product-detail-body mt-2 text-sm leading-6">Mupirocin: Topical Antibiotic</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Mechanism of Action</h2>
            <ul className="product-detail-body mt-3 list-disc space-y-3 pl-5 text-sm leading-6">
              <li>
                <span className="product-detail-heading font-semibold">Enzyme Inhibition:</span> Mupirocin closely
                mimics the amino acid isoleucine. It slips into the active site of the bacterial enzyme, preventing
                it from attaching isoleucine to the transfer RNA (tRNA).
              </li>
              <li>
                <span className="product-detail-heading font-semibold">Protein and RNA Stoppage:</span> Without the
                correct tRNA, the bacteria cannot make the proteins needed to survive and replicate. Additionally,
                the leftover uncharged tRNA triggers the bacteria to stop RNA synthesis as well.
              </li>
              <li>
                <span className="product-detail-heading font-semibold">Bacteriostatic vs. Bactericidal:</span> At
                lower concentrations, it is bacteriostatic (stops bacteria from multiplying). At the higher
                concentrations achieved when applied topically as an ointment, it becomes bactericidal (actively
                kills the bacteria).
              </li>
              <li>
                <span className="product-detail-heading font-semibold">Human Safety:</span> Because human cells use
                a different version of this enzyme, mupirocin selectively harms only the bacteria without damaging
                your own cells.
              </li>
            </ul>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Indications</h2>
            <ul className="product-detail-body mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>Impetigo</li>
              <li>Secondary Skin Infections</li>
            </ul>
          </article>
        </section>

        <RelatedProducts product={product} />
      </div>
    </main>
  );
}
