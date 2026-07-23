import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { PageIntro } from "@/components/ui/PageIntro";
import {
  getSolutionBySlug,
  industries,
  services,
  solutions,
} from "@/content/slug-maps";
import { buildMetadata, JsonLd, serviceJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return solutions.flatMap((item) =>
    (["en", "es"] as const).map((locale) => ({
      locale,
      slug: item.slug[locale],
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const item = getSolutionBySlug(locale as Locale, slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title[locale as Locale],
    description: item.summary[locale as Locale],
    path: `/${locale}/${locale === "es" ? "soluciones" : "solutions"}/${slug}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es" : "en"}/${locale === "en" ? "soluciones" : "solutions"}/${item.slug[locale === "en" ? "es" : "en"]}`,
  });
}

export default async function SolutionDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const item = getSolutionBySlug(loc, slug);
  if (!item) notFound();

  const t = await getTranslations("solutionsPage");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("common");
  const relatedIndustries = industries.filter((i) => item.relatedIndustries.includes(i.id));
  const relatedServices = services.filter((s) => item.relatedServices.includes(s.id));
  const path = `/${locale}/${locale === "es" ? "soluciones" : "solutions"}/${slug}`;

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: item.title[loc],
          description: item.summary[loc],
          url: `${siteConfig.domain}${path}`,
        })}
      />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: t("title"), href: "/solutions" },
          { label: item.title[loc] },
        ]}
      />
      <PageIntro title={item.title[loc]} description={item.summary[loc]} />
      <div className="container-site space-y-10 pb-20">
        <section>
          <h2 className="text-2xl">{loc === "es" ? "Problema" : "Problem"}</h2>
          <p className="mt-3 text-muted">{item.problem[loc]}</p>
        </section>
        <section>
          <h2 className="text-2xl">{loc === "es" ? "Enfoque técnico" : "Technical approach"}</h2>
          <p className="mt-3 text-muted">{item.approach[loc]}</p>
        </section>
        <section>
          <h2 className="text-2xl">{tn("capabilities")}</h2>
          <ul className="mt-4 space-y-2">
            {item.capabilities[loc].map((cap) => (
              <li key={cap} className="text-muted">
                • {cap}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl">{tc("relatedIndustries")}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {relatedIndustries.map((i) => (
              <li key={i.id}>
                <Link
                  href={{ pathname: "/industries/[slug]", params: { slug: i.slug[loc] } }}
                  className="text-brand hover:underline"
                >
                  {i.title[loc]}
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
