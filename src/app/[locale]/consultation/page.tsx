import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageIntro } from "@/components/ui/PageIntro";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "consultationPage" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/${locale === "es" ? "consulta" : "consultation"}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es/consulta" : "en/consultation"}`,
  });
}

export default async function ConsultationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("consultationPage");
  const tn = await getTranslations("nav");

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("title") }]} />
      <PageIntro title={t("title")} description={t("description")} />
      <div className="container-site max-w-3xl pb-20">
        <ConsultationForm />
        <p className="mt-8 text-sm text-muted">
          <Link href="/rfq" className="text-brand hover:underline">
            {t("rfqLink")}
          </Link>
        </p>
      </div>
    </>
  );
}
