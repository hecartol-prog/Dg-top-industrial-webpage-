import Link from "next/link";
import { Image } from "lucide-react";
import { getDictionary, isLocale, locales } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getDictionary(locale).caseStudies.items.map((caseStudy) => ({
      locale,
      caseSlug: caseStudy.slug,
    })),
  );
}

export async function generateMetadata({ params }) {
  const { locale, caseSlug } = await params;
  const dict = getDictionary(locale);
  const caseStudy = dict.caseStudies.items.find((item) => item.slug === caseSlug);

  return {
    title: caseStudy?.title ?? dict.caseStudies.title,
    description: caseStudy?.summary ?? dict.caseStudies.body,
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { locale, caseSlug } = await params;
  if (!isLocale(locale)) {
    return null;
  }

  const dict = getDictionary(locale);
  const caseStudy = dict.caseStudies.items.find((item) => item.slug === caseSlug);

  if (!caseStudy) {
    return null;
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href={`/${locale}`}>{dict.breadcrumbs.home}</Link>
            <span>/</span>
            <Link href={`/${locale}/case-studies`}>{dict.breadcrumbs.caseStudies}</Link>
            <span>/</span>
            <span>{caseStudy.title}</span>
          </nav>
          <p className="eyebrow">{dict.caseStudies.detailLabel}</p>
          <h1>{caseStudy.title}</h1>
          <p>{caseStudy.summary}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div
            className="case-hero-placeholder"
            title={dict.common.caseStudyImagePlaceholder}
            aria-label={dict.common.caseStudyImagePlaceholder}
          >
            <Image size={48} strokeWidth={1.5} aria-hidden="true" />
            <span>{caseStudy.title}</span>
            <span className="sr-only">{dict.common.caseStudyImagePlaceholder}</span>
          </div>
        </div>
      </section>
    </>
  );
}
