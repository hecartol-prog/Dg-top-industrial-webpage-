import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { PageIntro } from "@/components/ui/PageIntro";
import {
  getIndustryBySlug,
  industries,
  services,
  solutions,
} from "@/content/slug-maps";
import { breadcrumbJsonLd, buildMetadata, JsonLd, serviceJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return industries.flatMap((item) =>
    (["en", "es"] as const).map((locale) => ({
      locale,
      slug: item.slug[locale],
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const item = getIndustryBySlug(locale as Locale, slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title[locale as Locale],
    description: item.summary[locale as Locale],
    path: `/${locale}/${locale === "es" ? "industrias" : "industries"}/${slug}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es" : "en"}/${locale === "en" ? "industrias" : "industries"}/${item.slug[locale === "en" ? "es" : "en"]}`,
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const item = getIndustryBySlug(loc, slug);
  if (!item) notFound();

  const t = await getTranslations("industriesPage");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("common");

  const relatedSolutions = solutions.filter((s) => item.relatedSolutions.includes(s.id));
  const relatedServices = services.filter((s) => item.relatedServices.includes(s.id));
  const path = `/${locale}/${locale === "es" ? "industrias" : "industries"}/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: `${siteConfig.domain}/${locale}` },
            { name: t("title"), url: `${siteConfig.domain}/${locale}/${locale === "es" ? "industrias" : "industries"}` },
            { name: item.title[loc], url: `${siteConfig.domain}${path}` },
          ]),
          serviceJsonLd({
            name: item.title[loc],
            description: item.summary[loc],
            url: `${siteConfig.domain}${path}`,
          }),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: t("title"), href: "/industries" },
          { label: item.title[loc] },
        ]}
      />
      <PageIntro title={item.title[loc]} description={item.summary[loc]} />
      <div className="container-site space-y-10 pb-20">
        <section>
          <h2 className="text-2xl">{loc === "es" ? "Desafío" : "Challenge"}</h2>
          <p className="mt-3 text-muted">{item.challenge[loc]}</p>
        </section>
        <section>
          <h2 className="text-2xl">{loc === "es" ? "Enfoque" : "Approach"}</h2>
          <p className="mt-3 text-muted">{item.approach[loc]}</p>
        </section>
        <section>
          <h2 className="text-2xl">{loc === "es" ? "Tipos de proyecto" : "Typical project types"}</h2>
          <ul className="mt-4 space-y-2">
            {item.projectTypes[loc].map((type) => (
              <li key={type} className="text-muted">
                • {type}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl">{tc("relatedSolutions")}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {relatedSolutions.map((s) => (
              <li key={s.id}>
                <Link
                  href={{ pathname: "/solutions/[slug]", params: { slug: s.slug[loc] } }}
                  className="text-brand hover:underline"
                >
                  {s.title[loc]}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl">{tc("relatedServices")}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {relatedServices.map((s) => (
              <li key={s.id}>
                <Link
                  href={{ pathname: "/services/[slug]", params: { slug: s.slug[loc] } }}
                  className="text-brand hover:underline"
                >
                  {s.title[loc]}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <CtaGroup primaryLabel={tn("consultation")} secondaryLabel={tn("rfq")} />
      </div>
    </>
  );
}
