import Link from "next/link";
import { getDictionary, isLocale, locales } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return {
    title: dict.caseStudies.title,
    description: dict.caseStudies.body,
  };
}

export default async function CaseStudiesPage({ params }) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return null;
  }

  const dict = getDictionary(locale);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href={`/${locale}`}>{dict.breadcrumbs.home}</Link>
            <span>/</span>
            <span>{dict.breadcrumbs.caseStudies}</span>
          </nav>
          <h1>{dict.caseStudies.title}</h1>
          <p>{dict.caseStudies.body}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container grid card-grid">
          {dict.caseStudies.items.map((caseStudy) => (
            <article className="card" key={caseStudy.slug}>
              <h3>{caseStudy.title}</h3>
              <p>{caseStudy.summary}</p>
              <p>
                <Link href={`/${locale}/case-studies/${caseStudy.slug}`}>{dict.common.learnMore}</Link>
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
