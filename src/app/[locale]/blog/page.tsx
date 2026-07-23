import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { blog } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blogPage" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/blog`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es" : "en"}/blog`,
  });
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blogPage");
  const tn = await getTranslations("nav");
  const loc = locale as Locale;

  const categories = Array.from(
    new Map(blog.map((a) => [a.category.slug[loc], a.category])).values(),
  );

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("title") }]} />
      <PageIntro title={t("title")} description={t("description")} />
      <div className="container-site pb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug[loc]}
              href={{ pathname: "/blog/[category]", params: { category: cat.slug[loc] } }}
              className="border border-border px-3 py-1 text-sm hover:border-brand"
            >
              {cat.title[loc]}
            </Link>
          ))}
        </div>
      </div>
      <div className="container-site grid gap-8 pb-20 md:grid-cols-2">
        {blog.map((article) => (
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
            <p className="text-xs uppercase tracking-wider text-brand">
              {article.category.title[loc]}
            </p>
            <h2 className="mt-2 text-2xl">{article.title[loc]}</h2>
            <p className="mt-3 text-sm text-muted">{article.excerpt[loc]}</p>
          </Link>
        ))}
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
