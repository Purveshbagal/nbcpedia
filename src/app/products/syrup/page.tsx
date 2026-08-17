import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";
import { buildPageMetadata } from "../../lib/seo";
import { getProductPath, syrupProducts } from "../products-data";
import ProductSearch from "../ProductSearch";

export const metadata: Metadata = buildPageMetadata({
  title: "Syrup Products",
  description:
    "Explore NBC Pedia's full pediatric syrup range — composition, pack size and dosage details for every syrup.",
  path: "/products/syrup",
});

export default function SyrupProductsPage() {
  return (
    <main className="product-detail-shell py-8 sm:py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "" },
          { name: "Products", path: "/products" },
          { name: "Syrup Products", path: "/products/syrup" },
        ]}
      />
      <div className="container-premium">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <Link href="/" className="transition-colors hover:text-[#33b53a]">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-[#33b53a]">Syrup Products</span>
        </nav>

        <Reveal>
          <div className="mb-6 sm:mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#33b63a]">Our Products</p>
            <h1 className="mt-1 text-[24px] font-extrabold tracking-tight text-slate-900 sm:text-[30px] cartoon-heading">
              Syrup Products
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Explore our syrup range. Each product includes a quick More Info option.
            </p>
            <ProductSearch products={syrupProducts} placeholder="Search syrup products..." />
          </div>
        </Reveal>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {syrupProducts.map((product, index) => (
            <Reveal key={product.name} delay={index * 50}>
              {product.slug ? (
                <Link
                  href={getProductPath(product)}
                  className="group block h-full rounded-xl border border-[#e9f8e9] bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(63,151,67,0.14)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-[#eefaed] bg-white">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={220}
                        height={220}
                        quality={55}
                        sizes="96px"
                        className="h-full w-full object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="truncate text-base font-bold text-slate-900">{product.name}</h2>
                      <p className="text-sm leading-5 text-slate-600">{product.listingSummary}</p>
                    </div>
                  </div>

                  <span className="mt-4 mx-auto inline-flex h-8 items-center justify-center rounded-md bg-[#34b63b] px-4 text-xs font-semibold text-white transition-all duration-200 group-hover:bg-[#2ba731] group-hover:shadow-md group-active:scale-95">
                    More Info
                  </span>
                </Link>
              ) : (
                <article className="group h-full rounded-xl border border-[#e9f8e9] bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(63,151,67,0.14)]">
                  <div className="flex items-start gap-3">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-[#eefaed] bg-white">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={220}
                        height={220}
                        quality={55}
                        sizes="96px"
                        className="h-full w-full object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="truncate text-base font-bold text-slate-900">{product.name}</h2>
                      <p className="text-sm leading-5 text-slate-600">{product.listingSummary}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-4 mx-auto inline-flex h-8 items-center justify-center rounded-md bg-[#34b63b] px-4 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#2ba731] hover:shadow-md active:scale-95"
                  >
                    More Info
                  </button>
                </article>
              )}
            </Reveal>
          ))}
        </section>
      </div>
    </main>
  );
}
