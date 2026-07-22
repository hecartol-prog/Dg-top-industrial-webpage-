import { notFound } from "next/navigation";
import Link from "next/link";
import {
  findPageKey,
  getDictionary,
  isLocale,
  localizedSlugs,
  locales,
  topLevelPageKeys,
} from "@/lib/site-data";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    topLevelPageKeys.map((key) => ({
      locale,
      slug: localizedSlugs[locale][key],
    })),
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const pageKey = findPageKey(locale, slug);
  const dict = getDictionary(locale);
  const titleBySlug = {
    [localizedSlugs[locale].about]: dict.about.title,
    [localizedSlugs[locale].industries]: dict.industries.title,
    [localizedSlugs[locale].solutions]: dict.solutions.title,
  };
  const descriptionBySlug = {
    [localizedSlugs[locale].about]: dict.about.body,
    [localizedSlugs[locale].industries]: dict.industries.pageDescriptor,
    [localizedSlugs[locale].solutions]: dict.solutions.pageDescriptor,
  };
  const page = pageKey ? dict.pages[pageKey] : null;

  return {
    title: page?.title ?? titleBySlug[slug] ?? "Top Industrial",
    description: page?.body ?? descriptionBySlug[slug] ?? dict.hero.body,
  };
}

function PageHero({ title, body }) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </section>
  );
}

function AboutPage({ dict }) {
  return (
    <>
      <PageHero title={dict.about.title} body={dict.about.body} />
      <section className="page-content">
        <div className="container">
          <article className="page-card">
            <div className="grid">
              {dict.about.sections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                  {section.extra ? <p>{section.extra}</p> : null}
                  {section.note ? <p>{section.note}</p> : null}
                </section>
              ))}
            </div>

            <div className="address-block">
              <h2>{dict.about.valuesTitle}</h2>
              <div className="grid card-grid">
                {dict.about.values.map((value) => (
                  <div className="card" key={value}>
                    <h3>{value}</h3>
                  </div>
                ))}
              </div>
            </div>

            <h2>{dict.about.leadershipTitle}</h2>
            <div className="leadership">
              <div className="person-card">
                <h3>{dict.about.leaderName}</h3>
                <p>{dict.about.hectorRole}</p>
                <p>{dict.about.leaderBio}</p>
              </div>
            </div>

            <div className="address-block">
              <h2>{dict.about.whyTitle}</h2>
              <div className="grid card-grid">
                {dict.about.whyItems.map((item) => (
                  <div className="card" key={item}>
                    <h3>{item}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="address-block">
              <h2>{dict.about.ctaTitle}</h2>
              <p>{dict.about.ctaDescription}</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

function IndustriesPage({ dict }) {
  return (
    <>
      <PageHero title={dict.industries.title} body={dict.industries.pageDescriptor} />
      <section className="page-content">
        <div className="container grid card-grid">
          {dict.industries.items.map((industry) => (
            <article className="card" key={industry.title}>
              <h3>{industry.title}</h3>
              <p>{industry.full}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function SolutionsPage({ dict }) {
  return (
    <>
      <PageHero title={dict.solutions.title} body={dict.solutions.pageDescriptor} />
      <section className="page-content">
        <div className="container grid card-grid">
          {dict.solutions.items.map((solution) => (
            <article className="card" key={solution.title}>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ServicesPage({ dict }) {
  const page = dict.pages.services;
  return (
    <>
      <PageHero title={page.title} body={page.body} />
      <section className="page-content">
        <div className="container">
          <article className="page-card">
            {dict.services.groups.map((group) => (
              <section className="address-block" key={group.title}>
                <h2>{group.title}</h2>
                <div className="grid card-grid">
                  {group.items.map((item) => (
                    <div className="card" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}

function CapabilitiesPage({ dict }) {
  const page = dict.pages.capabilities;
  return (
    <>
      <PageHero title={page.title} body={page.body} />
      <section className="page-content">
        <div className="container grid card-grid">
          {dict.capabilities.items.map((capability) => (
            <article className="card" key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ProcessPage({ dict }) {
  const page = dict.pages.process;
  return (
    <>
      <PageHero title={page.title} body={page.body} />
      <section className="page-content">
        <div className="container grid">
          {dict.process.map((step, index) => (
            <article className="card" key={step.title}>
              <h3>
                {String(index + 1).padStart(2, "0")} {step.title}
              </h3>
              <p>{step.description}</p>
              <p>
                <strong>{dict.common.inputs}:</strong> {step.inputs}
              </p>
              <p>
                <strong>{dict.common.outputs}:</strong> {step.outputs}
              </p>
              <p>
                <strong>{dict.common.buyerRole}:</strong> {step.role}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function QualityPage({ dict }) {
  const page = dict.pages.quality;
  return (
    <>
      <PageHero title={page.title} body={page.body} />
      <section className="page-content">
        <div className="container grid">
          {dict.quality.map((section) => (
            <article className="card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function FormFields({ fields, submit }) {
  return (
    <form className="grid">
      {fields.map((field) => (
        <label className="grid" key={field.label}>
          <span>{field.label}</span>
          {field.type === "textarea" ? (
            <textarea name={field.name} rows={5} />
          ) : (
            <input name={field.name} type={field.type ?? "text"} />
          )}
        </label>
      ))}
      <button className="button button-primary" type="submit">
        {submit}
      </button>
    </form>
  );
}

function ContactPage({ dict }) {
  const page = dict.pages.contact;
  const form = dict.forms.contact;
  return (
    <>
      <PageHero title={page.title} body={page.body} />
      <section className="page-content">
        <div className="container grid card-grid">
          <article className="card">
            <h3>{form.officeTitle}</h3>
            <p>{form.officeAddress}</p>
            <p>{form.fullAddress}</p>
            <p>{form.email}</p>
          </article>
          <article className="card">
            <FormFields
              submit={form.submit}
              fields={[
                { label: form.name, name: "name" },
                { label: form.emailLabel, name: "email", type: "email" },
                { label: form.subject, name: "subject" },
                { label: form.message, name: "message", type: "textarea" },
              ]}
            />
          </article>
        </div>
      </section>
    </>
  );
}

function ConsultationPage({ dict, locale }) {
  const page = dict.pages.consultation;
  const form = dict.forms.consultation;
  return (
    <>
      <PageHero title={page.title} body={page.body} />
      <section className="page-content">
        <div className="container">
          <article className="page-card">
            <FormFields
              submit={form.submit}
              fields={[
                { label: form.name, name: "name" },
                { label: form.emailLabel, name: "email", type: "email" },
                { label: form.company, name: "company" },
                { label: form.time, name: "time" },
                { label: form.message, name: "message", type: "textarea" },
              ]}
            />
            <p>
              <Link href={`/${locale}/${localizedSlugs[locale].rfq}`}>{form.rfqLink}</Link>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

function RfqPage({ dict }) {
  const page = dict.pages.rfq;
  const form = dict.forms.rfq;
  return (
    <>
      <PageHero title={page.title} body={page.body} />
      <section className="page-content">
        <div className="container">
          <article className="page-card">
            <p>{form.nearshoringOption}</p>
            <FormFields
              submit={form.submit}
              fields={[
                { label: form.name, name: "name" },
                { label: form.emailLabel, name: "email", type: "email" },
                { label: form.company, name: "company" },
                { label: form.projectType, name: "projectType" },
                { label: form.quantity, name: "quantity" },
                { label: form.country, name: "country" },
                { label: form.timeline, name: "timeline" },
                { label: form.description, name: "description", type: "textarea" },
                { label: form.upload, name: "upload", type: "file" },
              ]}
            />
            <p>{form.uploadHint}</p>
            <p>{form.ndaNote}</p>
          </article>
        </div>
      </section>
    </>
  );
}

function BlogPage({ dict }) {
  const page = dict.pages.blog;
  return (
    <>
      <PageHero title={page.title} body={page.body} />
      <section className="page-content">
        <div className="container grid card-grid">
          {dict.articles.items.map((article) => (
            <article className="card" key={article.title}>
              <p className="eyebrow">{article.tag}</p>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ResourcesPage({ dict }) {
  const page = dict.pages.resources;
  return (
    <>
      <PageHero title={page.title} body={page.body} />
      <section className="page-content">
        <div className="container grid card-grid">
          {page.body.split(", ").map((resource) => (
            <article className="card" key={resource}>
              <h3>{resource}</h3>
              <p>{page.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function StandardPage({ page }) {
  return (
    <>
      <PageHero title={page.title} body={page.body} />
      <section className="page-content">
        <div className="container">
          <article className="page-card">
            <h2>{page.title}</h2>
            <p>{page.body}</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default async function LocalizedPage({ params }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const pageKey = findPageKey(locale, slug);
  const dict = getDictionary(locale);

  if (slug === localizedSlugs[locale].about) {
    return <AboutPage dict={dict} />;
  }

  if (slug === localizedSlugs[locale].industries) {
    return <IndustriesPage dict={dict} />;
  }

  if (slug === localizedSlugs[locale].solutions) {
    return <SolutionsPage dict={dict} />;
  }

  if (!pageKey) {
    notFound();
  }

  if (pageKey === "services") {
    return <ServicesPage dict={dict} />;
  }

  if (pageKey === "capabilities") {
    return <CapabilitiesPage dict={dict} />;
  }

  if (pageKey === "process") {
    return <ProcessPage dict={dict} />;
  }

  if (pageKey === "quality") {
    return <QualityPage dict={dict} />;
  }

  if (pageKey === "contact") {
    return <ContactPage dict={dict} />;
  }

  if (pageKey === "consultation") {
    return <ConsultationPage dict={dict} locale={locale} />;
  }

  if (pageKey === "rfq") {
    return <RfqPage dict={dict} />;
  }

  if (pageKey === "blog") {
    return <BlogPage dict={dict} />;
  }

  if (pageKey === "resources") {
    return <ResourcesPage dict={dict} />;
  }

  return <StandardPage page={dict.pages[pageKey]} />;
}
