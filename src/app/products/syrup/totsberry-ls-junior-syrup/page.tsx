import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Mascot from "../../../components/Mascot";
import ProductJsonLd from "../../../components/ProductJsonLd";
import RelatedProducts from "../../../components/RelatedProducts";
import { buildProductMetadata, getProductBySlug } from "../../products-data";

const product = getProductBySlug("syrup", "totsberry-ls-junior-syrup")!;

export const metadata: Metadata = buildProductMetadata(product);

export default function TotsberryLSJuniorSyrupPage() {
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
            Totsberry LS Junior Syrup
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 product-detail-body">
            Mucolytic-expectorant bronchodilator syrup for productive cough and bronchospasm symptom relief.
          </p>
        </section>

        <section className="product-detail-image-card mt-6 rounded-3xl p-4 sm:p-6">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[#e2f5ea] bg-[#fbfffd] p-3 sm:max-w-md">
            <Image
              src="/products/syrup/Picsart_26-06-21_19-41-40-034.png"
              alt="Totsberry LS Junior Syrup"
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
            <p className="product-detail-body mt-2 text-base leading-7">Totsberry LS Junior Syrup</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Composition</h2>
            <p className="product-detail-body mt-2 text-base leading-7">
              Each 5ml contains Ambroxol 15mg, Guaiphenesin 50mg &amp; Levosalbutamol 0.5mg
              <br />
              Pack Size: 60ml.
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Formulation</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Syrup</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Flavour</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Orange Flavour</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading cartoon-heading text-lg font-bold">Category</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Syrups</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Description</h2>
            <p className="product-detail-body mt-2 text-sm leading-6">Therapy/Class: Mucolytic/Expectorant</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Therapy / Class</h2>

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
              NO-dependent activation of soluble guanylate cyclase. It is also possible that the inhibition of
              NO-dependent activation of soluble guanylate cyclase can suppress the excessive mucus secretion,
              therefore it lowers the phlegm viscosity and improves the mucociliary transport of bronchial secretions.
            </p>

            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Guaiphenesin:</span> It acts by enhancing the
              output of phlegm (sputum) and bronchial secretions via decreasing the adhesiveness and surface tension of
              such material. Furthermore, it elicits an increased flow of less viscous gastric secretions that
              subsequently promote ciliary action - all actions that ultimately change dry, unproductive coughing to
              coughs that are more productive and less frequent. Essentially, by decreasing the viscosity and
              adhesiveness of such secretions, it enhances the efficacy of mucociliary activity in removing accumulated
              secretions from the upper and lower airway.
            </p>

            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Levosalbutamol:</span> It activates
              beta2-adrenergic receptors on airway smooth muscle leads to the activation of adenyl cyclase and to an
              increase in the intracellular concentration of cyclic-3&apos;, 5&apos;-adenosine monophosphate (cyclic
              AMP). The increase in cyclic AMP is associated with the activation of protein kinase A, which, in turn,
              inhibits the phosphorylation of myosin and lowers intracellular ionic calcium concentrations, resulting in
              muscle relaxation. It relaxes the smooth muscles of all airways, from the trachea to the terminal
              bronchioles. Increased cyclic AMP concentrations are also associated with the inhibition of the release of
              mediators from mast cells in the airways.
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Indications</h2>
            <ul className="product-detail-body mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>Symptomatic relief of Bronchospasm in Bronchial Asthma &amp; Chronic Bronchitis.</li>
              <li>Treatment of productive cough associated with...</li>
              <li>Bronchial Asthma</li>
              <li>Bronchitis</li>
              <li>Bronchiectasis</li>
              <li>Chronic Obstructive Pulmonary Diseases (COPD)</li>
              <li>Bronchitis (Inflammation of Bronchial Tubes)</li>
              <li>Emphysema (Shortness of Breath)</li>
              <li>Upper &amp; Lower Respiratory Infections</li>
            </ul>
          </article>
        </section>

        <RelatedProducts product={product} />
      </div>
    </main>
  );
}
