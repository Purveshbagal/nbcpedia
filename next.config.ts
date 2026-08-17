import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats where the browser supports them — smaller
    // payloads directly improve LCP.
    formats: ["image/avif", "image/webp"],
    // Every distinct `quality={...}` value used anywhere in the app must be
    // listed here in Next.js 16, or that image logs a console warning.
    qualities: [55, 72, 75],
  },
  async headers() {
    return [
      {
        // Product/category photos never change once shipped — let browsers
        // and CDNs cache them for a year instead of revalidating on every
        // visit (Core Web Vitals: fewer repeat-visit network round trips).
        source: "/:all*(png|jpe?g|webp|avif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
