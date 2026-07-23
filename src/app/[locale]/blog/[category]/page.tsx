import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageIntro } from "@/components/ui/PageIntro";
import { blog } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string; category: string }> };

export function generateStaticParams() {
  const pairs = new Set<string>();
  const params: { locale: string; category: string }[] = [];
  for (const article of blog) {
    for (const locale of ["en", "es"] as const) {
      const key = `${locale}:${article.category.slug[locale]}`;
      if (!pairs.has(key)) {
        pairs.add(key);
        params.push({ locale, category: article.category.slug[locale] });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { locale, category } = await params;
  const loc = locale as Locale;
  const article = blog.find((a) => a.category.slug[loc] === category);
  if (!article) return {};
  return buildMetadata({
    title: article.category.title[loc],
    description: article.excerpt[loc],
    path: `/${locale}/blog/${category}`,
    locale: loc,
    alternatePath: `/${locale === "en" ? "es" : "en"}/blog/${article.category.slug[locale === "en" ? "es" : "en"]}`,
  });
}

export default async function BlogCategoryPage({ params }: Props) {
  const { locale, category } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const articles = blog.filter((a) => a.category.slug[loc] === category);
  if (!articles.length) notFound();

  const t = await getTranslations("blogPage");
  const tn = await getTranslations("nav");
  const categoryTitle = articles[0].category.title[loc];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: t("title"), href: "/blog" },
          { label: categoryTitle },
        ]}
      />
      <PageIntro title={categoryTitle} description={t("description")} />
      <div className="container-site grid gap-8 pb-20">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={{
              pathname: "/blog/[category]/[slug]",
              params: {
                category: article.category.slug[loc],
                slug: article.slug[loc],
              },
            }}
            className="border-b border-border pb-5 hover:border-brand"
          >
            <h2 className="text-2xl">{article.title[loc]}</h2>
            <p className="mt-3 text-muted">{article.excerpt[loc]}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
