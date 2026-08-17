import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrganizationJsonLd from "./components/OrganizationJsonLd";
import WhatsAppButton from "./components/WhatsAppButton";
import { SITE_NAME, SITE_URL } from "./products/products-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = "NBC Pedia | Trusted Pediatric Healthcare";
const defaultDescription =
  "Trusted pediatric healthcare solutions for children health and development. Explore NBC Pedia's range of pediatric syrups and tablets.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  keywords: ["NBC Pedia", "pediatric medicine", "pediatric syrup", "pediatric tablet", "children healthcare"],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
    images: [{ url: "/sidebar/side.jpeg", width: 2048, height: 442, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4CAF50",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="page-shell flex flex-col">
        <OrganizationJsonLd />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
