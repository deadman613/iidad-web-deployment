/**
 * Structured Data Component for SEO
 * Provides JSON-LD schema markup for better search engine understanding
 */

export default function StructuredData({ type = "organization" }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Indian Institute of Design and Development",
    "alternateName": "IIDAD",
    "url": "https://iidad.in",
    "logo": "https://iidad.in/logo.png",
    "description": "Indian Institute of Design and Development (IIDAD) is a premier design education institution offering comprehensive programs in product design, communication design, interior design, fashion design, and more.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Admissions",
      "telephone": "+91-XXX-XXX-XXXX",
      "email": "admissions@iidad.in"
    },
    "sameAs": [
      "https://www.facebook.com/iidad",
      "https://www.twitter.com/iidad",
      "https://www.instagram.com/iidad",
      "https://www.linkedin.com/school/iidad",
      "https://www.youtube.com/iidad"
    ],
    "areaServed": "IN",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Design Education Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Product Design",
            "description": "Comprehensive product design education"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Communication Design",
            "description": "Visual and graphic communication design program"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Interior Design",
            "description": "Interior and spatial design education"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Fashion Design",
            "description": "Fashion and textile design program"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IIDAD - Indian Institute of Design and Development",
    "url": "https://iidad.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://iidad.in/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://iidad.in"
      }
    ]
  };

  let schema;
  switch (type) {
    case "organization":
      schema = organizationSchema;
      break;
    case "website":
      schema = websiteSchema;
      break;
    case "breadcrumb":
      schema = breadcrumbSchema;
      break;
    default:
      schema = organizationSchema;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
