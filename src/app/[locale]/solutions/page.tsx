import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContentCard } from "@/components/ui/ContentCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { solutions } from "@/content/solutions";
import { solutionIcons } from "@/lib/icons";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "solutionsPage" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/${locale === "es" ? "soluciones" : "solutions"}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es/soluciones" : "en/solutions"}`,
  });
}

export default async function SolutionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("solutionsPage");
  const tn = await getTranslations("nav");
  const loc = locale as Locale;

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("title") }]} />
      <PageIntro title={t("title")} description={t("description")} />
      <div className="container-site grid gap-6 pb-20 sm:grid-cols-2">
        {solutions.map((item, index) => (
          <ScrollReveal key={item.id} delayMs={(index % 4) * 70}>
            <ContentCard
              title={item.title[loc]}
              summary={item.summary[loc]}
              href="/solutions/[slug]"
              params={{ slug: item.slug[loc] }}
              icon={solutionIcons[item.id]}
            />
          </ScrollReveal>
        ))}
      </div>
      <p className="container-site -mt-12 mb-16 font-ui text-sm text-muted">
        <Link href="/industries" className="text-brand hover:underline">
          {tn("industries")} →
        </Link>
      </p>
      <FinalCtaBand
        title={tn("consultation")}
        description={t("description")}
        primaryLabel={tn("consultation")}
        secondaryLabel={tn("rfq")}
      />
    </>
  );
}
