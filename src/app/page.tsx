import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { SITE_NAME, SITE_URL } from "./products/products-data";

const homeDescription =
  "NBC Pedia trusted pediatric healthcare solutions. Explore our range of pediatric syrups and tablets, designed for safety, precision and easy administration.";

export const metadata: Metadata = {
  // No `title` here on purpose - this lets the root layout's nicer
  // `title.default` ("NBC Pedia | Trusted Pediatric Healthcare") carry
  // through for "/" instead of being overridden to "Home | NBC Pedia".
  description: homeDescription,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "NBC Pedia | Trusted Pediatric Healthcare",
    description: homeDescription,
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/sidebar/side.jpeg", width: 2048, height: 442, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NBC Pedia | Trusted Pediatric Healthcare",
    description: homeDescription,
    images: ["/sidebar/side.jpeg"],
  },
};

export default function Home() {
  return <HomeClient />;
}
