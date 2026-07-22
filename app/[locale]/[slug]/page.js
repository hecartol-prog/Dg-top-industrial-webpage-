import { notFound } from "next/navigation";
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
            <h2>{dict.about.leadershipTitle}</h2>
            <div className="leadership">
              <div className="person-card">
                <h3>Héctor</h3>
                <p>{dict.about.hectorRole}</p>
              </div>
            </div>

            <div className="address-block">
              <h2>{dict.about.addressTitle}</h2>
              <p>{dict.about.addressEnglish}</p>
              {dict.about.addressSpanish ? <p>{dict.about.addressSpanish}</p> : null}
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
            <article className="card" key={industry}>
              <h3>{industry}</h3>
              <p>{dict.industries.pageDescriptor}</p>
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
        <div className="container">
          <article className="page-card">
            <h2>{dict.solutions.title}</h2>
            <p>{dict.solutions.pageDescriptor}</p>
          </article>
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

  return <StandardPage page={dict.pages[pageKey]} />;
}
