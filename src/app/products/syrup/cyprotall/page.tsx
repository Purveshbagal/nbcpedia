import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Mascot from "../../../components/Mascot";
import ProductJsonLd from "../../../components/ProductJsonLd";
import RelatedProducts from "../../../components/RelatedProducts";
import { buildProductMetadata, getProductBySlug } from "../../products-data";

const product = getProductBySlug("syrup", "cyprotall")!;

export const metadata: Metadata = buildProductMetadata(product);

export default function CyprotallPage() {
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
            Cyprotall
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 product-detail-body">
            Appetite stimulant syrup and drops combining cyproheptadine and tricholine citrate for weight gain support.
          </p>
        </section>

        <section className="product-detail-image-card mt-6 rounded-3xl p-4 sm:p-6">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[#e2f5ea] bg-[#fbfffd] p-3 sm:max-w-md">
            <Image
              src="/products/syrup/Picsart_26-08-05_10-55-33-696.png"
              alt="Cyprotall"
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
            <p className="product-detail-body mt-2 text-base leading-7">Cyprotall</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Composition</h2>
            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Cyprotall Syrup:</span> Each 5ml contains
              Cyproheptadine 2mg &amp; Tricholine Citrate 275mg with Sorbitol, as Syrup in 100 &amp; 200ml pack.
            </p>
            <p className="product-detail-body mt-2 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Cyprotall Drops:</span> Each 1ml contains
              Cyproheptadine 1.5mg &amp; Tricholine Citrate 55mg as Drops in 15ml pack.
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Pack Size</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Syrup: 100ml &amp; 200ml. Drops: 15ml.</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Formulation</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Syrup &amp; Drops</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Flavour</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Syrup: Mango Flavour. Drops: Orange Flavour.</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5">
            <h2 className="product-detail-heading text-lg font-bold">Category</h2>
            <p className="product-detail-body mt-2 text-base leading-7">Appetite Stimulant</p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Therapy / Class</h2>
            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Cyproheptadine:</span> Appetite Stimulant
              (Piperidine Antihistamine)
            </p>
            <p className="product-detail-body mt-2 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Tricholine Citrate:</span> Lipotropic Agent
              (Bile Acid Binding Agent)
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Mechanism of Action</h2>
            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Cyproheptadine:</span> It competes with free
              histamine for binding at HA-receptor sites, antagonizing the effects of histamine on HA-receptors and
              reducing the symptoms brought on by histamine HA-receptor binding. It also competes with serotonin at
              receptor sites in smooth muscle in the intestines and other locations. Antagonism of serotonin on the
              appetite centre of the hypothalamus may account for its ability to stimulate appetite.
            </p>
            <p className="product-detail-body mt-3 text-sm leading-7">
              <span className="product-detail-heading font-semibold">Tricholine Citrate:</span> It contains three
              molecules of choline. Clinical interest in choline centres on its lipotropic action and its utility in
              the treatment of fatty infiltration and cirrhosis of the liver. Choline converts fat into
              phospholipids like lecithin, which is essential to bio membrane structure and its function. Lecithin
              is also a major component of high-density lipoprotein (HDL) and is used to mobilize cholesterol from
              cell membranes. In patients with fatty liver, an increased rate of phospholipid turnover has been
              observed following administration of choline.
            </p>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Indications</h2>
            <ul className="product-detail-body mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>Loss of Appetite</li>
              <li>Weight Loss</li>
              <li>Anorexia Nervosa</li>
              <li>As an adjunct to anti-tubercular &amp; antiretroviral regimens for weight gain</li>
              <li>
                In underweight children who have inadequate dietary intake or loss of appetite, and children
                suffering from anaemia, liver or digestive disorders
              </li>
            </ul>
          </article>

          <article className="product-detail-info-card rounded-2xl p-5 sm:col-span-2">
            <h2 className="product-detail-heading text-lg font-bold">Dosage &amp; Administration</h2>
            <p className="product-detail-body mt-3 text-sm leading-7">
              Cyproheptadine 0.25 mg/kg/dose, to be taken twice or thrice a day. It has been proved to be safe even
              for children less than 2 years of age.
            </p>
          </article>
        </section>

        <RelatedProducts product={product} />
      </div>
    </main>
  );
}
