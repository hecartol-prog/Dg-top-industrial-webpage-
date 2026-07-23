import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContentCard } from "@/components/ui/ContentCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { industries } from "@/content/industries";
import { industryIcons } from "@/lib/icons";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "industriesPage" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/${locale === "es" ? "industrias" : "industries"}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es/industrias" : "en/industries"}`,
  });
}

export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("industriesPage");
  const tn = await getTranslations("nav");
  const loc = locale as Locale;

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("title") }]} />
      <PageIntro title={t("title")} description={t("description")} />
      <div className="container-site grid gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((item, index) => (
          <ScrollReveal key={item.id} delayMs={(index % 6) * 60}>
            <ContentCard
              title={item.title[loc]}
              summary={item.summary[loc]}
              href="/industries/[slug]"
              params={{ slug: item.slug[loc] }}
              icon={industryIcons[item.id]}
            />
          </ScrollReveal>
        ))}
      </div>
      <FinalCtaBand
        title={tn("consultation")}
        description={t("description")}
        primaryLabel={tn("consultation")}
        secondaryLabel={tn("rfq")}
      />
    </>
  );
}
