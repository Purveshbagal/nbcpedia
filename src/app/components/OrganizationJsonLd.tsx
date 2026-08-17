import { SITE_NAME, SITE_URL } from "../products/products-data";
import { siteContact } from "../site-content";

export default function OrganizationJsonLd() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: siteContact.company,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: "Trusted pediatric healthcare solutions for children health and development.",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContact.address,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteContact.phone,
      email: siteContact.email,
      contactType: "customer service",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}
