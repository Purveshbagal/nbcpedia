import Image from "next/image";
import Link from "next/link";
import { getProductPath, getRelatedProducts, type ProductRecord } from "../products/products-data";

export default function RelatedProducts({ product }: { product: ProductRecord }) {
  const related = getRelatedProducts(product, 3);
  if (related.length === 0) return null;

  return (
    <section className="mt-6" aria-labelledby="related-products-heading">
      <h2 id="related-products-heading" className="product-detail-heading text-lg font-bold">
        Related Products
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {related.map((item) => (
          <Link
            key={`${item.routeCategory}-${item.slug}`}
            href={getProductPath(item)}
            className="product-detail-info-card group flex items-center gap-3 rounded-2xl p-3 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-[#eefaed] bg-white">
              <Image
                src={item.image}
                alt={`${item.name} – NBC Pedia`}
                width={120}
                height={120}
                className="h-full w-full object-contain p-1"
              />
            </div>
            <span className="product-detail-heading text-sm font-semibold leading-snug">{item.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
