import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import BreadcrumbJsonLd from "../components/BreadcrumbJsonLd";
import { buildPageMetadata } from "../lib/seo";
import { getProductPath, specialityProducts, syrupProducts, tabletProducts } from "./products-data";
import ProductSearch from "./ProductSearch";

const groups = [
  { id: "syrups", label: "Syrup Products", items: syrupProducts },
  { id: "tablets", label: "Tablet Products", items: tabletProducts },
  { id: "speciality", label: "Speciality Products", items: specialityProducts },
];

const searchableProducts = [...syrupProducts, ...tabletProducts, ...specialityProducts];

export const metadata: Metadata = buildPageMetadata({
  title: "All Products",
  description:
    "Browse NBC Pedia's full pediatric range across syrups and tablets — composition, pack size and dosage details for every product.",
  path: "/products",
});

export default function AllProductsPage() {
  return (
    <main className="product-detail-shell py-8 sm:py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "" }, { name: "All Products", path: "/products" }]} />
      <div className="container-premium">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <Link href="/" className="transition-colors hover:text-[#33b53a]">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-[#33b53a]">All Products</span>
        </nav>

        <Reveal>
          <div className="mb-6 sm:mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#33b63a]">Our Products</p>
            <h1 className="mt-1 text-[24px] font-extrabold tracking-tight text-slate-900 sm:text-[30px] cartoon-heading">
              All Products
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Browse our full pediatric range across syrups, tablets and speciality products. Each product includes a
              quick More Info option.
            </p>

            <ProductSearch products={searchableProducts} placeholder="Search syrup or tablet products..." />

            <div className="mt-4 flex flex-wrap gap-2">
              {groups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#e2f6e2] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#33b53a] shadow-sm transition-colors hover:bg-[#f5fcf5]"
                >
                  {group.label}
                  <span className="rounded-full bg-[#effaef] px-1.5 py-0.5 text-[10px] font-bold text-[#33b53a]">
                    {group.items.length}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {groups.map((group) => (
          <section key={group.id} id={group.id} className="mt-8 scroll-mt-24 sm:mt-10">
            <Reveal>
              <h2 className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">{group.label}</h2>
            </Reveal>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((product, index) => (
                <Reveal key={product.name} delay={index * 50}>
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
                        <h3 className="truncate text-base font-bold text-slate-900">{product.name}</h3>
                        <p className="text-sm leading-5 text-slate-600">{product.listingSummary}</p>
                      </div>
                    </div>

                    <span className="mt-4 mx-auto inline-flex h-8 items-center justify-center rounded-md bg-[#34b63b] px-4 text-xs font-semibold text-white transition-all duration-200 group-hover:bg-[#2ba731] group-hover:shadow-md group-active:scale-95">
                      More Info
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
