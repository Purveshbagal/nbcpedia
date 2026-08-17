import type { Metadata } from "next";
import BreadcrumbJsonLd from "../components/BreadcrumbJsonLd";
import { buildPageMetadata } from "../lib/seo";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with NBC Pedia for questions about our pediatric syrup and tablet range, or to place an inquiry.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "" }, { name: "Contact Us", path: "/contact" }]} />
      <ContactPageClient />
    </>
  );
}
