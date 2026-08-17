"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { getProductPath, type ProductRecord } from "./products-data";

interface ProductSearchProps {
  products: ProductRecord[];
  placeholder?: string;
}

export default function ProductSearch({
  products,
  placeholder = "Search any product name...",
}: ProductSearchProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];

    return products.filter((product) => {
      const haystacks = [product.name, product.slug, product.listingSummary, product.routeCategory];
      return haystacks.some((value) => value.toLowerCase().includes(normalizedQuery));
    });
  }, [products, query]);

  return (
    <div className="mt-5 rounded-2xl border border-[#e9f8e9] bg-white/95 p-3 shadow-sm sm:mt-6 sm:p-4">
      <label htmlFor="product-search" className="text-xs font-bold uppercase tracking-[0.18em] text-[#33b63a]">
        Product Search
      </label>
      <div className="mt-2">
        <input
          id="product-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-[#d9f2da] bg-[#fbfffb] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#33b63a] focus:ring-2 focus:ring-[#b8ecbb]"
        />
      </div>

      {query.trim() ? (
        <div className="mt-3 rounded-xl bg-[#f8fdf8] p-2 sm:p-3">
          {results.length ? (
            <div className="flex flex-col gap-2">
              {results.map((product) => (
                <Link
                  key={`${product.routeCategory}-${product.slug}`}
                  href={getProductPath(product)}
                  className="rounded-xl border border-[#e6f6e6] bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-[#bce9bf] hover:bg-[#f5fcf5] hover:text-[#2aa830]"
                >
                  <span className="block font-semibold text-slate-900">{product.name}</span>
                  <span className="block text-xs text-slate-500">
                    Direct link: {getProductPath(product)}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">No product found for &quot;{query}&quot;.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
