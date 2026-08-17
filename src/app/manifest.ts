import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NBC Pedia",
    short_name: "NBC Pedia",
    description: "Trusted pediatric healthcare solutions for children health and development.",
    // Relative, not the absolute production URL — the manifest spec requires
    // `id`/`start_url` to be same-origin as the document, which breaks in
    // any environment (localhost, staging) that isn't the production domain.
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4CAF50",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      // logo.png (407x106) is a wide wordmark, not a square icon — do not
      // list it here until a real 192x192 / 512x512 square icon exists,
      // otherwise browsers log a "Resource size is not correct" error.
    ],
  };
}
