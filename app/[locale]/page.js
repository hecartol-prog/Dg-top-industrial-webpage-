import Link from "next/link";
import { PartnerPlaceholder } from "@/components/SiteShell";
import { getDictionary, href, isLocale, locales } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return {
    title: dict.hero.title,
    description: dict.hero.body,
  };
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return null;
  }
  const dict = getDictionary(locale);

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">{dict.hero.eyebrow}</p>
          <h1>{dict.hero.title}</h1>
          <p>{dict.hero.body}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href={href(locale, "contact")}>
              {dict.common.requestConsultation}
            </Link>
            <Link className="button button-secondary" href={`${href(locale, "contact")}#rfq`}>
              {dict.common.rfq}
            </Link>
          </div>
        </div>
      </section>

      <section className="partner-band">
        <div className="container">
          <h2>{dict.trust.title}</h2>
          <div className="partner-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <PartnerPlaceholder label={dict.common.partnerPlaceholder} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <div>
              <h2>{dict.services.title}</h2>
              <p>{dict.services.body}</p>
            </div>
            <Link className="button button-secondary" href={href(locale, "services")}>
              {dict.common.learnMore}
            </Link>
          </div>
          <div className="grid card-grid">
            {dict.services.items.map((service) => (
              <article className="card" key={service}>
                <h3>{service}</h3>
                <p>{dict.services.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <div>
              <h2>{dict.industries.title}</h2>
              <p>{dict.industries.homeBody}</p>
            </div>
            <Link className="button button-secondary" href={href(locale, "industries")}>
              {dict.common.viewAllIndustries}
            </Link>
          </div>
          <div className="grid card-grid">
            {dict.industries.items.map((industry) => (
              <article className="card" key={industry}>
                <h3>{industry}</h3>
                <p>{dict.industries.pageDescriptor}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
