import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Factory } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { caseStudies } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "caseStudiesPage" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/${locale === "es" ? "casos-de-exito" : "case-studies"}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es/casos-de-exito" : "en/case-studies"}`,
  });
}

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("caseStudiesPage");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("cta");
  const loc = locale as Locale;

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: tn("caseStudies") }]} />
      <PageIntro title={t("title")} description={t("description")} />
      <div className="container-site space-y-6 pb-20">
        {caseStudies.map((item, index) => (
          <ScrollReveal key={item.id} delayMs={index * 70}>
            <Link
              href={{
                pathname: "/case-studies/[slug]",
                params: { slug: item.slug[loc] },
              }}
              className="card-lift group grid gap-5 rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-l-2 hover:border-l-brand md:grid-cols-[220px_1fr] md:p-5"
            >
              <ImagePlaceholder
                label={item.industryLabel[loc]}
                icon={Factory}
                aspect="wide"
                className="shadow-none"
              />
              <div>
                <h2 className="text-2xl transition-colors group-hover:text-brand">
                  {item.title[loc]}
                </h2>
                <p className="mt-3 font-ui text-sm text-muted">{item.challenge[loc]}</p>
                <p className="mt-4 font-ui text-xs uppercase tracking-wider text-brand">
                  {item.scopeType[loc]} · {item.outcome[loc]}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
      <FinalCtaBand
        title={tc("casesTitle")}
        description={tc("casesDesc")}
        primaryLabel={tn("consultation")}
        secondaryLabel={tn("rfq")}
      />
    </>
  );
}
