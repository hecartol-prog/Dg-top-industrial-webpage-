import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { resources } from "@/content/resources";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "resourcesPage" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/${locale === "es" ? "recursos" : "resources"}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es/recursos" : "en/resources"}`,
  });
}

export default async function ResourcesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("resourcesPage");
  const tn = await getTranslations("nav");
  const loc = locale as Locale;

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("title") }]} />
      <PageIntro title={t("title")} description={t("description")} />
      <div className="container-site grid gap-8 pb-20 md:grid-cols-2">
        {resources.map((item) => (
          <Link
            key={item.id}
            href={{ pathname: "/resources/[slug]", params: { slug: item.slug[loc] } }}
            className="border border-border p-6 hover:border-brand"
          >
            <h2 className="text-2xl">{item.title[loc]}</h2>
            <p className="mt-3 text-sm text-muted">{item.description[loc]}</p>
          </Link>
        ))}
      </div>
      <FinalCtaBand
        title={tn("rfq")}
        description={t("description")}
        primaryLabel={tn("consultation")}
        secondaryLabel={tn("rfq")}
      />
    </>
  );
}
