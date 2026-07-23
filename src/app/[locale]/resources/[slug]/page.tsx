import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { PageIntro } from "@/components/ui/PageIntro";
import { getResourceBySlug, resources } from "@/content/slug-maps";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return resources.flatMap((item) =>
    (["en", "es"] as const).map((locale) => ({
      locale,
      slug: item.slug[locale],
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const item = getResourceBySlug(locale as Locale, slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title[locale as Locale],
    description: item.description[locale as Locale],
    path: `/${locale}/${locale === "es" ? "recursos" : "resources"}/${slug}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es" : "en"}/${locale === "en" ? "recursos" : "resources"}/${item.slug[locale === "en" ? "es" : "en"]}`,
  });
}

export default async function ResourceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const item = getResourceBySlug(loc, slug);
  if (!item) notFound();

  const t = await getTranslations("resourcesPage");
  const tn = await getTranslations("nav");

  return (
    <>
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: t("title"), href: "/resources" },
          { label: item.title[loc] },
        ]}
      />
      <PageIntro title={item.title[loc]} description={item.description[loc]} />
      <div className="container-site max-w-3xl space-y-8 pb-20">
        <ul className="space-y-3">
          {item.contents[loc].map((line) => (
            <li key={line} className="border-l-2 border-brand pl-4 text-muted">
              {line}
            </li>
          ))}
        </ul>
        <CtaGroup primaryLabel={tn("consultation")} secondaryLabel={tn("rfq")} />
      </div>
    </>
  );
}
