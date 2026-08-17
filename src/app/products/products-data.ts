import type { Metadata } from "next";

export const SITE_URL = "https://nbcpedia.com";
export const SITE_NAME = "NBC Pedia";

export type ProductRouteCategory = "syrup" | "tablet" | "speciality";

export interface ProductRecord {
  /** URL slug, unique within its route category. */
  slug: string;
  /** Which folder/listing this product lives under. */
  routeCategory: ProductRouteCategory;
  name: string;
  /** Composition + pack size line shown on listing cards. */
  listingSummary: string;
  /** One-line clinical summary shown under the H1 on the detail page — also doubles as the unique SEO description. */
  description: string;
  /** Path under /public. */
  image: string;
}

export const syrupProducts: ProductRecord[] = [
  {
    slug: "pediagesic-p-suspension",
    routeCategory: "syrup",
    name: "Pediagesic-P Suspension",
    listingSummary:
      "Composition: Each 5ml contains Meenamic Acid 50mg + Paracetamol 125mg as suspension. Pack Size: 60ml.",
    description: "Pediatric pain and fever management syrup with balanced analgesic and antipyretic action.",
    image: "/products/syrup/Picsart_26-06-21_19-38-10-020.png",
  },
  {
    slug: "pediamont-lc-kid-syrup",
    routeCategory: "syrup",
    name: "Pediamont LC Kid Syrup",
    listingSummary:
      "Composition: Each 5ml contains Levocetirizine 2.5mg & Montelukast 4mg. Pack Size - 30ml & 60ml.",
    description: "Anti-allergic pediatric syrup for allergic rhinitis support and respiratory symptom management.",
    image: "/products/syrup/Picsart_26-06-21_19-39-53-048.png",
  },
  {
    slug: "tinycold-af-syrup",
    routeCategory: "syrup",
    name: "Tinycold-AF Syrup",
    listingSummary: "Composition: Each 5ml Phenylephrine 5mg + Chlorpheniramine 2mg as Syrup. Pack Size: 60ml.",
    description: "Decongestant and anti-allergic syrup for relief of cough and upper respiratory symptoms.",
    image: "/products/syrup/Picsart_26-06-21_19-40-29-276.png",
  },
  {
    slug: "tinycold-ds-suspension",
    routeCategory: "syrup",
    name: "Tinycold-DS Suspension",
    listingSummary:
      "Composition: Each 5ml contains Phenylephrine 5mg + Chlorpheniramine 2mg + Paracetamol 250mg. Pack Size: 60ml.",
    description: "Triple-action suspension for cold symptoms, nasal congestion, allergy, and fever relief.",
    image: "/products/syrup/Picsart_26-06-21_19-40-53-703.png",
  },
  {
    slug: "tinycold-suspension",
    routeCategory: "syrup",
    name: "Tinycold Suspension",
    listingSummary:
      "Composition: Each 5ml contains Phenylephrine Hydrochloride 2.5mg + Chlorpheniramine maleate 1mg + Paracetamol 125mg. Pack Size: 60ml.",
    description:
      "Multi-action suspension for cough and upper respiratory symptom relief in fever, allergy, and common cold.",
    image: "/products/syrup/Picsart_26-06-21_19-41-18-089.png",
  },
  {
    slug: "totsberry-ls-junior-syrup",
    routeCategory: "syrup",
    name: "Totsberry LS Junior Syrup",
    listingSummary:
      "Composition: Each 5ml contains Ambroxol 15mg, Guaiphenesin 50mg & Levosalbutamol 0.5mg. Pack Size: 60ml.",
    description: "Mucolytic-expectorant bronchodilator syrup for productive cough and bronchospasm symptom relief.",
    image: "/products/syrup/Picsart_26-06-21_19-41-40-034.png",
  },
  {
    slug: "totsberry-pd-syrup",
    routeCategory: "syrup",
    name: "Totsberry PD Syrup",
    listingSummary:
      "Composition: Each 5ml contains Ambroxol 15mg, Guaiphenesin 50mg & Levosalbutamol 0.5mg. Pack Size: 60ml.",
    description: "Mucolytic-expectorant bronchodilator syrup for productive cough and bronchospasm symptom relief.",
    image: "/products/syrup/Picsart_26-06-21_19-42-06-251.png",
  },
  {
    slug: "molrin-suspension",
    routeCategory: "syrup",
    name: "Molrin Suspension",
    listingSummary:
      "Composition: Each 5ml contains Paracetamol 250mg. Pack Size: 60ml. Formulation: Suspension. Flavour: Mango Flavour. Category: Suspension.",
    description: "Pediatric analgesic and antipyretic suspension with paracetamol formulation for fever and pain relief.",
    image: "/products/syrup/Syrup1.png",
  },
  {
    slug: "brupedia-suspension",
    routeCategory: "syrup",
    name: "Brupedia Suspension",
    listingSummary:
      "Composition: Each 5ml contains Ibuprofen 100mg & Paracetamol 62.5mg as suspension. Pack Size: 60ml & 100ml. Formulation: Suspension. Flavour: Orange Flavour. Category: Suspension.",
    description: "Pediatric pain and fever relief suspension combining ibuprofen and paracetamol.",
    image: "/products/syrup/Syrup2.png",
  },
  {
    slug: "totsberry-ls-syrup",
    routeCategory: "syrup",
    name: "Totsberry LS Syrup",
    listingSummary:
      "Composition: Each 5ml contains Ambroxol 30mg, Guaiphenesin 50mg & Levosalbutamol 1mg. Pack Size: 100ml. Formulation: Syrup. Flavour: Mango Flavour. Category: Syrups.",
    description:
      "Mucolytic-expectorant-bronchodilator syrup for productive cough and bronchospasm-associated respiratory conditions.",
    image: "/products/syrup/Syrup3.png",
  },
  {
    slug: "cyprotall",
    routeCategory: "syrup",
    name: "Cyprotall",
    listingSummary:
      "Composition: Syrup - Each 5ml contains Cyproheptadine 2mg, Tricholine Citrate 275mg & Sorbitol as Syrup in 100 & 200ml pack. Drops - Each 1ml contains Cyproheptadine 1.5mg & Tricholine Citrate 55mg in 15ml pack.",
    description: "Appetite stimulant syrup and drops combining cyproheptadine and tricholine citrate for weight gain support.",
    image: "/products/syrup/Picsart_26-08-05_10-55-33-696.png",
  },
];

export const tabletProducts: ProductRecord[] = [
  {
    slug: "pediamont-lc-kid-tablet",
    routeCategory: "tablet",
    name: "Pediamont LC Kid Tablet",
    listingSummary:
      "Composition: Each Dispersible Tablet contains Levocetirizine 2.5mg & Montelukast 4mg. Pack Size: 10 Tablets in Strip.",
    description: "Anti-allergic dispersible tablet for allergic rhinitis support and respiratory symptom management.",
    image: "/products/tablet/1000728849.png",
  },
];

export const specialityProducts: ProductRecord[] = [
  {
    slug: "nazocure-junior-nasal-spray",
    routeCategory: "speciality",
    name: "Nazocure Junior Nasal Spray",
    listingSummary:
      "Composition: Each 1ml solution contains 0.05% w/v of Xylometazoline as Nasal Spray. Pack Size: 10ml.",
    description: "Nasal decongestant spray for temporary relief of blocked nose caused by colds, hay fever or allergic rhinitis.",
    image: "/products/speciality/nazocure-junior-nasal-spray.png",
  },
  {
    slug: "nazocure-saline-nasal-spray",
    routeCategory: "speciality",
    name: "Nazocure Saline Nasal Spray",
    listingSummary:
      "Composition: Each 1ml saline solution contains 0.65% w/v of Sodium Chloride as Nasal spray. Pack Size: 20ml.",
    description: "Saline nasal irrigating spray for relief of nasal congestion, irritation and dryness of the nasal passages.",
    image: "/products/speciality/nazocure-saline-nasal-spray.png",
  },
  {
    slug: "bactomust-ointment",
    routeCategory: "speciality",
    name: "Bactomust Ointment",
    listingSummary: "Composition: Mupirocin 2% w/w. Pack Size: 5gm.",
    description: "Topical antibiotic ointment for impetigo and secondary skin infections.",
    image: "/products/speciality/bactomust-ointment.png",
  },
];

export const allProducts: ProductRecord[] = [...syrupProducts, ...tabletProducts, ...specialityProducts];

export function getProductBySlug(routeCategory: ProductRouteCategory, slug: string): ProductRecord | undefined {
  return allProducts.find((p) => p.routeCategory === routeCategory && p.slug === slug);
}

export function getProductPath(product: Pick<ProductRecord, "routeCategory" | "slug">): string {
  return `/products/${product.routeCategory}/${product.slug}`;
}

export function getProductUrl(product: Pick<ProductRecord, "routeCategory" | "slug">): string {
  return `${SITE_URL}${getProductPath(product)}`;
}

export function getRelatedProducts(current: ProductRecord, limit = 3): ProductRecord[] {
  const sameCategory = allProducts.filter((p) => p.routeCategory === current.routeCategory && p.slug !== current.slug);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const others = allProducts.filter((p) => p.routeCategory !== current.routeCategory);
  return [...sameCategory, ...others].slice(0, limit);
}

const routeCategoryLabel: Record<ProductRouteCategory, string> = {
  syrup: "Syrup Products",
  tablet: "Tablet Products",
  speciality: "Speciality Products",
};

export function getRouteCategoryLabel(routeCategory: ProductRouteCategory): string {
  return routeCategoryLabel[routeCategory];
}

/**
 * One `generateMetadata`/`metadata` implementation shared by every product page —
 * add a product here once and its title, description, canonical, Open Graph and
 * Twitter card all come for free, no per-page metadata code required.
 */
export function buildProductMetadata(product: ProductRecord): Metadata {
  // Just the product name — the root layout's title template ("%s | NBC Pedia")
  // appends the brand suffix automatically, so this can't double up.
  const title = product.name;
  const fullTitle = `${product.name} | ${SITE_NAME}`;
  // Kept close to ~160 chars so Google doesn't truncate the snippet —
  // the per-product description already carries the unique clinical detail.
  const description = `${product.description} View composition, pack size and dosage details.`;
  const url = getProductUrl(product);
  const imageUrl = `${SITE_URL}${product.image}`;

  return {
    title,
    description,
    keywords: [
      product.name,
      `${product.name} NBC Pedia`,
      `${product.name} composition`,
      `${product.name} pack size`,
      product.routeCategory === "syrup"
        ? "pediatric syrup"
        : product.routeCategory === "tablet"
          ? "pediatric tablet"
          : "pediatric speciality product",
      "NBC Pedia",
      "pediatric medicine",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: imageUrl, width: 700, height: 700, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
