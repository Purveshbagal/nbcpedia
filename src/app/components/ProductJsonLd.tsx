import { SITE_NAME, SITE_URL, getProductUrl, getRouteCategoryLabel, type ProductRecord } from "../products/products-data";

export default function ProductJsonLd({ product }: { product: ProductRecord }) {
  const url = getProductUrl(product);
  const imageUrl = `${SITE_URL}${product.image}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: imageUrl,
    url,
    category: getRouteCategoryLabel(product.routeCategory),
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    manufacturer: {
      "@type": "Organization",
      name: "Indo NBC Laboratories Pvt. Ltd.",
      url: SITE_URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      {
        "@type": "ListItem",
        position: 3,
        name: getRouteCategoryLabel(product.routeCategory),
        item: `${SITE_URL}/products/${product.routeCategory}`,
      },
      { "@type": "ListItem", position: 4, name: product.name, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
