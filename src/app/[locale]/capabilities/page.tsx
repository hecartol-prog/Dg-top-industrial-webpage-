import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { Link } from "@/i18n/navigation";
import { capabilities, solutions } from "@/content/slug-maps";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "capabilitiesPage" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/${locale === "es" ? "capacidades" : "capabilities"}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es/capacidades" : "en/capabilities"}`,
  });
}

export default async function CapabilitiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("capabilitiesPage");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("common");
  const loc = locale as Locale;

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("title") }]} />
      <PageIntro title={t("title")} description={t("description")} />
      <div className="container-site space-y-12 pb-20">
        {capabilities.map((cluster) => (
          <section key={cluster.id} className="border-t border-border pt-8">
            <h2 className="text-3xl">{cluster.title[loc]}</h2>
            <p className="mt-3 max-w-3xl text-muted">{cluster.description[loc]}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {cluster.items[loc].map((item) => (
                <li key={item} className="text-sm text-muted">
                  • {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {cluster.relatedSolutions.map((id) => {
                const solution = solutions.find((s) => s.id === id);
                if (!solution) return null;
                return (
                  <Link
                    key={id}
                    href={{
                      pathname: "/solutions/[slug]",
                      params: { slug: solution.slug[loc] },
                    }}
                    className="text-sm text-brand hover:underline"
                  >
                    {solution.title[loc]}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
        <p className="text-sm text-muted">
          <Link href="/solutions" className="text-brand hover:underline">
            {tc("relatedSolutions")}
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
