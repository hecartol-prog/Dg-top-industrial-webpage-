import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageIntro } from "@/components/ui/PageIntro";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "termsPage" });
  return buildMetadata({
    title: t("title"),
    description: t("body").slice(0, 155),
    path: `/${locale}/${locale === "es" ? "terminos" : "terms"}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es/terminos" : "en/terms"}`,
  });
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("termsPage");
  const tn = await getTranslations("nav");

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("title") }]} />
      <PageIntro title={t("title")} description={t("body")} />
    </>
  );
}
