import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContentCard } from "@/components/ui/ContentCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { services } from "@/content/services";
import { serviceIcons } from "@/lib/icons";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

const groups = [
  { id: "engineering", en: "Engineering & Development", es: "Ingeniería y desarrollo" },
  { id: "quality", en: "Quality & Oversight", es: "Calidad y supervisión" },
  { id: "execution", en: "Manufacturing Execution", es: "Ejecución de manufactura" },
  { id: "supply-chain", en: "Supply Chain", es: "Cadena de suministro" },
] as const;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicesPage" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/${locale === "es" ? "servicios" : "services"}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es/servicios" : "en/services"}`,
  });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("servicesPage");
  const tn = await getTranslations("nav");
  const loc = locale as Locale;

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("title") }]} />
      <PageIntro title={t("title")} description={t("description")} />
      <div className="container-site space-y-14 pb-20">
        {groups.map((group) => (
          <section key={group.id}>
            <h2 className="text-2xl">{group[loc]}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {services
                .filter((s) => s.group === group.id)
                .map((item, index) => (
                  <ScrollReveal key={item.id} delayMs={index * 60}>
                    <ContentCard
                      title={item.title[loc]}
                      summary={item.summary[loc]}
                      href="/services/[slug]"
                      params={{ slug: item.slug[loc] }}
                      icon={serviceIcons[item.id]}
                    />
                  </ScrollReveal>
                ))}
            </div>
          </section>
        ))}
        <p className="font-ui text-sm text-muted">
          <Link href="/solutions" className="text-brand hover:underline">
            {tn("solutions")} →
          </Link>
        </p>
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
