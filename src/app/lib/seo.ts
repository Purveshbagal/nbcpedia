import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "../products/products-data";

/**
 * Builds title/description/canonical + matching Open Graph + Twitter Card
 * metadata for a static page. Without this, a page that only sets
 * `title`/`description` silently inherits the ROOT layout's Open Graph
 * block as-is (wrong og:title, wrong og:url) — this keeps every page's
 * social-share preview in sync with its own title/description/URL.
 */
export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  // Next doesn't deep-merge `openGraph`/`twitter` with the parent layout's —
  // a page that defines its own object replaces the parent's entirely, so
  // the fallback image has to be repeated here or these pages end up with
  // no social-preview image at all.
  const imageUrl = "/sidebar/side.jpeg";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: imageUrl, width: 2048, height: 442, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
