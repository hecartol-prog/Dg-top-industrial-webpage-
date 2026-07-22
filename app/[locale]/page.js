import Link from "next/link";
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
            <Link className="button button-primary" href={href(locale, "consultation")}>
              {dict.common.requestConsultation}
            </Link>
            <Link className="button button-secondary" href={href(locale, "rfq")}>
              {dict.common.rfq}
            </Link>
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
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
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
              <article className="card" key={industry.title}>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <div>
              <h2>{dict.capabilities.title}</h2>
              <p>{dict.capabilities.body}</p>
            </div>
            <Link className="button button-secondary" href={href(locale, "capabilities")}>
              {dict.common.learnMore}
            </Link>
          </div>
          <div className="grid card-grid">
            {dict.capabilities.homeItems.map((capability) => (
              <article className="card" key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid card-grid">
          {dict.metrics.map((metric) => (
            <article className="card" key={metric.label}>
              <h3>{metric.number}</h3>
              <p>{metric.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <div>
              <h2>{dict.whyTopIndustrial.title}</h2>
              <p>{dict.whyTopIndustrial.body}</p>
            </div>
          </div>
          <div className="grid card-grid">
            {dict.whyTopIndustrial.bullets.map((bullet) => (
              <article className="card" key={bullet}>
                <h3>{bullet}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid card-grid">
          {dict.featureBlocks.map((block) => (
            <article className="card" key={block.title}>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <div>
              <h2>{dict.processPreview.title}</h2>
              <p>{dict.processPreview.body}</p>
            </div>
            <Link className="button button-secondary" href={href(locale, "process")}>
              {dict.common.learnMore}
            </Link>
          </div>
          <div className="grid card-grid">
            {dict.processPreview.items.map((step) => (
              <article className="card" key={step.number}>
                <h3>
                  {step.number} {step.title}
                </h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <div>
              <h2>{dict.articles.title}</h2>
            </div>
            <Link className="button button-secondary" href={href(locale, "blog")}>
              {dict.common.learnMore}
            </Link>
          </div>
          <div className="grid card-grid">
            {dict.articles.items.map((article) => (
              <article className="card" key={article.title}>
                <p className="eyebrow">{article.tag}</p>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <h2>{dict.testimonials.title}</h2>
          </div>
          <div className="grid card-grid">
            {dict.testimonials.items.map((testimonial) => (
              <article className="card" key={testimonial.initials}>
                <p>{testimonial.quote}</p>
                <h3>{testimonial.initials}</h3>
                <p>{testimonial.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="page-card">
            <h2>{dict.cta.title}</h2>
            <p>{dict.cta.body}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={href(locale, "consultation")}>
                {dict.common.requestConsultation}
              </Link>
              <Link className="button button-secondary" href={href(locale, "rfq")}>
                {dict.common.rfq}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
