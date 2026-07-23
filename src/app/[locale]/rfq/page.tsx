import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageIntro } from "@/components/ui/PageIntro";
import { RfqForm } from "@/components/forms/RfqForm";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "rfqPage" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/${locale === "es" ? "cotizacion" : "rfq"}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es/cotizacion" : "en/rfq"}`,
  });
}

export default async function RfqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("rfqPage");
  const tn = await getTranslations("nav");

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("title") }]} />
      <PageIntro title={t("title")} description={t("description")} />
      <div className="container-site max-w-4xl pb-20">
        <RfqForm />
      </div>
    </>
  );
}
