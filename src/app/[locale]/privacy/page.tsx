import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacyPage" });
  const firstParagraph = t("body").split("\n\n")[0];
  return buildMetadata({
    title: t("title"),
    description: firstParagraph.slice(0, 155),
    path: `/${locale}/${locale === "es" ? "privacidad" : "privacy"}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es/privacidad" : "en/privacy"}`,
  });
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacyPage");
  const tn = await getTranslations("nav");
  const body = t("body");
  const paragraphs = body.split("\n\n");

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("title") }]} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t("title")}</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {paragraphs.map((p, i) => {
            const headingMatch = p.match(/^(\d+\.\s+)/);
            if (headingMatch) {
              const rest = p.slice(headingMatch[0].length);
              return (
                <div key={i} className="pt-4 first:pt-0">
                  <h2 className="text-base font-semibold text-slate-900 dark:text-white">{headingMatch[0].trim()}</h2>
                  {rest && <p className="mt-2">{rest}</p>}
                </div>
              );
            }
            return <p key={i}>{p}</p>;
          })}
        </div>
      </div>
    </>
  );
}
