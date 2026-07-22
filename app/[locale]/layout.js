import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import { getDictionary, isLocale, locales } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale);
  return {
    title: {
      default: "Top Industrial",
      template: `%s | Top Industrial`,
    },
    description: dict.hero.body,
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <SiteShell locale={locale} dict={dict}>
      {children}
    </SiteShell>
  );
}
