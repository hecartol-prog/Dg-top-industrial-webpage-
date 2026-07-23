import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { blog } from "@/content/blog";
import { services, solutions } from "@/content/slug-maps";
import { articleJsonLd, buildMetadata, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/content/types";

type Props = {
  params: Promise<{ locale: string; category: string; slug: string }>;
};

export function generateStaticParams() {
  return blog.flatMap((article) =>
    (["en", "es"] as const).map((locale) => ({
      locale,
      category: article.category.slug[locale],
      slug: article.slug[locale],
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, category, slug } = await params;
  const loc = locale as Locale;
  const article = blog.find(
    (a) => a.slug[loc] === slug && a.category.slug[loc] === category,
  );
  if (!article) return {};
  return buildMetadata({
    title: article.title[loc],
    description: article.excerpt[loc],
    path: `/${locale}/blog/${category}/${slug}`,
    locale: loc,
    alternatePath: `/${locale === "en" ? "es" : "en"}/blog/${article.category.slug[locale === "en" ? "es" : "en"]}/${article.slug[locale === "en" ? "es" : "en"]}`,
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { locale, category, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const article = blog.find(
    (a) => a.slug[loc] === slug && a.category.slug[loc] === category,
  );
  if (!article) notFound();

  const t = await getTranslations("blogPage");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("common");
  const path = `/${locale}/blog/${category}/${slug}`;
  const paragraphs = article.body[loc].split("\n\n");
  const relatedServices = services.filter((s) =>
    article.relatedServices.includes(s.id),
  );
  const relatedSolutions = solutions.filter((s) =>
    article.relatedSolutions.includes(s.id),
  );

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: article.title[loc],
          description: article.excerpt[loc],
          url: `${siteConfig.domain}${path}`,
          datePublished: article.publishedAt,
          locale: loc,
        })}
      />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: t("title"), href: "/blog" },
          { label: article.title[loc] },
        ]}
      />
      <article className="container-site max-w-3xl py-14 md:py-20">
        <p className="text-xs uppercase tracking-wider text-brand">
          {article.category.title[loc]}
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl">{article.title[loc]}</h1>
        <p className="mt-4 text-sm text-muted">{article.publishedAt}</p>
        <p className="mt-6 text-lg text-muted">{article.excerpt[loc]}</p>
        <div className="mt-10 space-y-5 text-muted">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <aside className="mt-12 border-t border-border pt-8">
          <h2 className="text-2xl">{tc("relatedServices")}</h2>
          <ul className="mt-4 space-y-2">
            {relatedServices.map((s) => (
              <li key={s.id}>
                <Link
                  href={{ pathname: "/services/[slug]", params: { slug: s.slug[loc] } }}
                  className="text-brand hover:underline"
                >
                  {s.title[loc]}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 text-2xl">{tc("relatedSolutions")}</h2>
          <ul className="mt-4 space-y-2">
            {relatedSolutions.map((s) => (
              <li key={s.id}>
                <Link
                  href={{ pathname: "/solutions/[slug]", params: { slug: s.slug[loc] } }}
                  className="text-brand hover:underline"
                >
                  {s.title[loc]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaGroup primaryLabel={tn("consultation")} secondaryLabel={tn("rfq")} />
          </div>
        </aside>
      </article>
    </>
  );
}
