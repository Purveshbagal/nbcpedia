import type { MetadataRoute } from "next";
import { SITE_URL, allProducts, getProductPath } from "./products/products-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/products/syrup`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/products/tablet`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ];

  // Every product listed in products-data.ts is picked up here automatically —
  // add a new product record and it appears in the sitemap with no further changes.
  const productRoutes: MetadataRoute.Sitemap = allProducts.map((product) => ({
    url: `${SITE_URL}${getProductPath(product)}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...productRoutes];
}
