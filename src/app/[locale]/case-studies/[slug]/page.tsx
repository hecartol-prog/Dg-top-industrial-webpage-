import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Building2, CheckCircle2, Layers } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { PageIntro } from "@/components/ui/PageIntro";
import {
  getCaseStudyBySlug,
  caseStudies,
  services,
  solutions,
} from "@/content/slug-maps";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return caseStudies.flatMap((item) =>
    (["en", "es"] as const).map((locale) => ({
      locale,
      slug: item.slug[locale],
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const item = getCaseStudyBySlug(locale as Locale, slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title[locale as Locale],
    description: item.challenge[locale as Locale].slice(0, 158),
    path: `/${locale}/${locale === "es" ? "casos-de-exito" : "case-studies"}/${slug}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es" : "en"}/${locale === "en" ? "casos-de-exito" : "case-studies"}/${item.slug[locale === "en" ? "es" : "en"]}`,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const item = getCaseStudyBySlug(loc, slug);
  if (!item) notFound();

  const t = await getTranslations("caseStudiesPage");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("common");
  const tcta = await getTranslations("cta");
  const relatedSolutions = solutions.filter((s) => item.relatedSolutions.includes(s.id));
  const relatedServices = services.filter((s) => item.relatedServices.includes(s.id));

  return (
    <>
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: t("title"), href: "/case-studies" },
          { label: item.title[loc] },
        ]}
      />
      <PageIntro title={item.title[loc]} description={item.challenge[loc]} />
      <div className="container-site space-y-10 pb-20">
        <div className="relative h-64 overflow-hidden rounded-lg border border-border bg-surface shadow-sm md:h-96">
          <Image
            src={`/images/case-studies/${item.id}.png`}
            alt={item.title[loc]}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 72rem"
            priority
          />
        </div>

        <div className="grid gap-4 border-b border-border bg-gray-50 p-5 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <Building2 className="mt-0.5 h-5 w-5 text-brand" aria-hidden />
            <div>
              <p className="font-ui text-xs uppercase tracking-wider text-muted">
                {loc === "es" ? "Industria" : "Industry"}
              </p>
              <p className="mt-1 font-ui text-sm text-foreground">
                {item.industryLabel[loc]}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Layers className="mt-0.5 h-5 w-5 text-brand" aria-hidden />
            <div>
              <p className="font-ui text-xs uppercase tracking-wider text-muted">
                {loc === "es" ? "Tipo de alcance" : "Scope type"}
              </p>
              <p className="mt-1 font-ui text-sm text-foreground">{item.scopeType[loc]}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand" aria-hidden />
            <div>
              <p className="font-ui text-xs uppercase tracking-wider text-muted">
                {loc === "es" ? "Resultado" : "Outcome"}
              </p>
              <p className="mt-1 font-ui text-sm text-foreground">{item.outcome[loc]}</p>
            </div>
          </div>
        </div>

        {[
          [loc === "es" ? "Alcance" : "Scope", item.scope[loc]],
          [loc === "es" ? "Enfoque" : "Approach", item.approach[loc]],
          [loc === "es" ? "Ejecución" : "Execution", item.execution[loc]],
          [loc === "es" ? "Resultado" : "Result", item.result[loc]],
        ].map(([heading, body]) => (
          <section key={heading as string}>
            <h2 className="text-2xl">{heading}</h2>
            <p className="mt-3 text-muted">{body}</p>
          </section>
        ))}

        <section>
          <h2 className="text-2xl">{tc("relatedSolutions")}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {relatedSolutions.map((s) => (
              <Link
                key={s.id}
                href={{ pathname: "/solutions/[slug]", params: { slug: s.slug[loc] } }}
                className="card-lift rounded-lg border border-gray-200 p-4 hover:border-l-2 hover:border-l-brand"
              >
                <h3 className="text-lg text-brand">{s.title[loc]}</h3>
                <p className="mt-2 font-ui text-sm text-muted">{s.summary[loc]}</p>
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl">{tc("relatedServices")}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {relatedServices.map((s) => (
              <Link
                key={s.id}
                href={{ pathname: "/services/[slug]", params: { slug: s.slug[loc] } }}
                className="card-lift rounded-lg border border-gray-200 p-4 hover:border-l-2 hover:border-l-brand"
              >
                <h3 className="text-lg text-brand">{s.title[loc]}</h3>
                <p className="mt-2 font-ui text-sm text-muted">{s.summary[loc]}</p>
              </Link>
            ))}
          </div>
        </section>
        <div className="border-t border-border pt-8">
          <h2 className="mb-4 text-2xl">{tcta("casesTitle")}</h2>
          <p className="mb-6 text-muted">{tcta("casesDesc")}</p>
          <CtaGroup primaryLabel={tn("consultation")} secondaryLabel={tn("rfq")} />
        </div>
      </div>
    </>
  );
}
