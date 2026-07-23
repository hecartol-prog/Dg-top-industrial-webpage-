import { siteConfig, fullAddress } from "@/lib/site";

type Locale = "en" | "es";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/logo.png`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: "Dongguan",
      addressRegion: "Guangdong",
      postalCode: siteConfig.address.postalCode,
      addressCountry: "CN",
    },
    description: fullAddress(),
    sameAs: [siteConfig.linkedin],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    areaServed: "Worldwide",
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    inLanguage: input.locale,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}/logo.png`,
      },
    },
    mainEntityOfPage: input.url,
  };
}

export function buildMetadata({
  title,
  description,
  path,
  locale,
  alternatePath,
  ogImage = "/og-image.png",
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  alternatePath?: string;
  ogImage?: string;
}) {
  const url = `${siteConfig.domain}${path}`;
  const altLocale = locale === "en" ? "es" : "en";
  const altPath = alternatePath ?? path.replace(`/${locale}`, `/${altLocale}`);
  const summary = description.slice(0, 160);
  const ogImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${siteConfig.domain}${ogImage}`;

  return {
    title,
    description: summary,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.domain}${locale === "en" ? path : altPath}`,
        es: `${siteConfig.domain}${locale === "es" ? path : altPath}`,
        "x-default": `${siteConfig.domain}${path.replace(`/${locale}`, "/en")}`,
      },
    },
    openGraph: {
      title,
      description: summary,
      url,
      siteName: siteConfig.name,
      locale: locale === "en" ? "en_US" : "es_ES",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description: summary,
      images: [ogImageUrl],
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
