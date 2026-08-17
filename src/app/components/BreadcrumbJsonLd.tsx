import { SITE_URL } from "../products/products-data";

export interface BreadcrumbItem {
  name: string;
  /** Path relative to the site root, e.g. "/products/syrup", or "" for the homepage. */
  path: string;
}

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
  );
}
