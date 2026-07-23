import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

const sectionKeys = ["inspection", "systems", "supplier", "audits", "monitoring"] as const;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "qualityPage" });
  return buildMetadata({
    title: t("title"),
    description: t("description").slice(0, 158),
    path: `/${locale}/${locale === "es" ? "calidad" : "quality"}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es/calidad" : "en/quality"}`,
  });
}

export default async function QualityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("qualityPage");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("cta");

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("title") }]} />
      <PageIntro title={t("title")} description={t("description")} />
      <div className="container-site grid gap-8 pb-20 md:grid-cols-2">
        {sectionKeys.map((key) => (
          <section key={key} className="border-t border-border pt-6">
            <h2 className="text-2xl">{t(`sections.${key}.title`)}</h2>
            <p className="mt-3 text-muted">{t(`sections.${key}.body`)}</p>
          </section>
        ))}
      </div>
      <FinalCtaBand
        title={tc("qualityTitle")}
        description={tc("qualityDesc")}
        primaryLabel={tn("consultation")}
        secondaryLabel={tn("rfq")}
      />
    </>
  );
}
