import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Mascot from "../../../components/Mascot";
import ProductJsonLd from "../../../components/ProductJsonLd";
import RelatedProducts from "../../../components/RelatedProducts";
import { buildProductMetadata, getProductBySlug } from "../../products-data";

const product = getProductBySlug("syrup", "totsberry-ls-syrup")!;

export const metadata: Metadata = buildProductMetadata(product);

export default function TotsberryLSSyrupPage() {
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
            Totsberry LS Syrup
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 product-detail-body">
            Mucolytic-expectorant-bronchodilator syrup for productive cough and bronchospasm-associated respiratory conditions.
          </p>
        </section>

        <section className="product-detail-image-card mt-6 rounded-3xl p-4 sm:p-6">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[#e2f5ea] bg-[#fbfffd] p-3 sm:max-w-md">
            <Image
              src="/products/syrup/Syrup3.png"
              alt="Totsberry LS Syrup"
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
            <p className="product-detail-body mt-2 text-base leading-7">Totsberry LS Syrup</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Composition</h2>
            <p className="product-detail-body mt-2 text-base leading-7">
              Each 5ml contains Ambroxol 30mg, Guaiphenesin 50mg &amp; Levosalbutamol 1mg.
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Pack Size</h2>
            <p className="product-detail-body mt-2 text-base leading-7">100ml</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Formulation</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Syrup</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Flavour</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Mango Flavour</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Category</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Syrups</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Description</h2>
            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Therapy/Class:</span> Mucolytic / Expectorant
            </p>

            <p className="product-detail-accent mt-3 text-sm font-bold uppercase tracking-wide">Therapy</p>
            <ul className="product-detail-body mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>Ambroxol: Mucolytic Agent</li>
              <li>Guaiphenesin: Expectorant</li>
              <li>Levosalbutamol: Bronchodilators</li>
            </ul>

            <p className="product-detail-accent mt-4 text-sm font-bold uppercase tracking-wide">Class</p>
            <ul className="product-detail-body mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>Ambroxol: Aromatic Benzylamine</li>
              <li>Guaiphenesin: Glyceryl Guaiacolate</li>
              <li>Levosalbutamol: Beta2-Adrenergic Receptors agonist</li>
            </ul>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Mechanism of Action</h2>
            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Ambroxol:</span> It has been shown to inhibit the
              NO-dependent activation of soluble guanylate cyclase. It is also possible that inhibition of this pathway
              suppresses excessive mucus secretion, lowering phlegm viscosity and improving mucociliary transport of
              bronchial secretions.
            </p>
            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Guaiphenesin:</span> It acts by enhancing the output
              of phlegm (sputum) and bronchial secretions by decreasing adhesiveness and surface tension. It increases
              flow of less viscous gastric secretions that promote ciliary action, changing dry unproductive cough into
              more productive, less frequent cough.
            </p>
            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Levosalbutamol:</span> It activates beta2-adrenergic
              receptors on airway smooth muscle, increasing intracellular cyclic AMP and activating protein kinase A.
              This lowers intracellular calcium and causes smooth muscle relaxation from trachea to terminal bronchioles,
              while also inhibiting mediator release from mast cells in airways.
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Indications</h2>
            <ul className="product-detail-body mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>Symptomatic relief of bronchospasm in bronchial asthma &amp; chronic bronchitis</li>
              <li>Treatment of productive cough associated with bronchial asthma</li>
              <li>Bronchitis</li>
              <li>Bronchiectasis</li>
              <li>Chronic Obstructive Pulmonary Diseases (COPD)</li>
              <li>Bronchitis (inflammation of bronchial tubes)</li>
              <li>Emphysema (shortness of breath)</li>
              <li>Upper &amp; lower respiratory infections</li>
            </ul>
          </article>
        </section>

        <RelatedProducts product={product} />
      </div>
    </main>
  );
}
