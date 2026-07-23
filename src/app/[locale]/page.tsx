import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Quote } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { ContentCard } from "@/components/ui/ContentCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  IconClipboard,
  IconGear,
  IconNetwork,
  IconShield,
} from "@/components/ui/Icons";
import { industries, solutions, services, blog, process } from "@/content/slug-maps";
import { industryIcons, serviceIcons, solutionIcons } from "@/lib/icons";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return buildMetadata({
    title:
      locale === "es"
        ? "Top Industrial | Socio de Soluciones Industriales — Manufactura liderada por ingeniería desde China"
        : "Top Industrial | Industrial Solutions Partner — Engineering-Led Manufacturing from China",
    description: t("heroDescription").slice(0, 158),
    path: `/${locale}`,
    locale: locale as Locale,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tn = await getTranslations("nav");
  const tt = await getTranslations("testimonials");
  const loc = locale as Locale;

  const featuredIndustries = [
    ...industries.filter((i) => i.id === "water-treatment"),
    ...industries.filter((i) => i.id !== "water-treatment"),
  ].slice(0, 8);
  const featuredServices = services.filter((s) =>
    [
      "engineering",
      "supplier-qualification",
      "project-management",
      "quality-control",
      "nearshoring-support",
      "manufacturing-transfer",
    ].includes(s.id),
  );
  const processPreview = process.slice(0, 5);
  const latestArticles = blog.slice(0, 3);

  return (
    <>
      <Hero
        brand={t("heroBrand")}
        title={t("heroTitle")}
        description={t("heroDescription")}
        primaryLabel={tn("consultation")}
        secondaryLabel={tn("rfq")}
        imageAlt={t("heroImageAlt")}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeader title={t("industriesTitle")} description={t("industriesDesc")} />
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredIndustries.map((item, index) => (
              <ScrollReveal key={item.id} delayMs={index * 80}>
                <ContentCard
                  title={item.title[loc]}
                  summary={item.summary[loc]}
                  href="/industries/[slug]"
                  params={{ slug: item.slug[loc] }}
                  icon={industryIcons[item.id]}
                />
              </ScrollReveal>
            ))}
          </div>
          <Link
            href="/industries"
            className="mt-8 inline-block font-ui text-sm text-brand hover:underline"
          >
            {tn("industries")} →
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeader title={t("capabilitiesTitle")} description={t("capabilitiesDesc")} />
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.slice(0, 4).map((item, index) => (
              <ScrollReveal key={item.id} delayMs={index * 80}>
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
          <Link
            href="/capabilities"
            className="mt-8 inline-block font-ui text-sm text-brand hover:underline"
          >
            {tn("capabilities")} →
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeader title={t("servicesTitle")} description={t("servicesDesc")} />
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredServices.map((item, index) => (
              <ScrollReveal key={item.id} delayMs={index * 80}>
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
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-16">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeader title={t("metricsTitle")} />
          </ScrollReveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [t("metrics.years"), t("metrics.yearsLabel")],
              [t("metrics.projects"), t("metrics.projectsLabel")],
              [t("metrics.sectors"), t("metrics.sectorsLabel")],
              [t("metrics.partners"), t("metrics.partnersLabel")],
            ].map(([value, label]) => (
              <div key={label} className="border-l-2 border-brand pl-4">
                <p className="font-ui text-5xl font-semibold tracking-tight text-brand md:text-6xl">
                  {value}
                </p>
                <p className="mt-2 font-ui text-xs uppercase tracking-wider text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeader title={t("whyTitle")} description={t("whyDesc")} />
            <ul className="space-y-3 text-muted">
              <li className="flex gap-3">
                <IconGear className="mt-0.5 h-5 w-5 text-brand" />
                {t("whyItems.one")}
              </li>
              <li className="flex gap-3">
                <IconNetwork className="mt-0.5 h-5 w-5 text-brand" />
                {t("whyItems.two")}
              </li>
              <li className="flex gap-3">
                <IconClipboard className="mt-0.5 h-5 w-5 text-brand" />
                {t("whyItems.three")}
              </li>
              <li className="flex gap-3">
                <IconShield className="mt-0.5 h-5 w-5 text-brand" />
                {t("whyItems.four")}
              </li>
            </ul>
          </ScrollReveal>
          <ScrollReveal delayMs={120}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl">{t("networkTitle")}</h3>
                <p className="mt-3 text-muted">{t("networkDesc")}</p>
              </div>
              <div>
                <h3 className="text-2xl">{t("engineeringTitle")}</h3>
                <p className="mt-3 text-muted">{t("engineeringDesc")}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeader title={t("processTitle")} description={t("processDesc")} />
          </ScrollReveal>
          <ol className="grid gap-6 md:grid-cols-5">
            {processPreview.map((step, index) => (
              <ScrollReveal key={step.id} delayMs={index * 70}>
                <li>
                  <p className="font-ui text-xs uppercase tracking-[0.2em] text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg">{step.title[loc]}</h3>
                  <p className="mt-2 font-ui text-sm text-muted">{step.objective[loc]}</p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
          <Link
            href="/process"
            className="mt-8 inline-block font-ui text-sm text-brand hover:underline"
          >
            {tn("process")} →
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeader title={t("articlesTitle")} />
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {latestArticles.map((article, index) => (
              <ScrollReveal key={article.id} delayMs={index * 80}>
                <Link
                  href={{
                    pathname: "/blog/[category]/[slug]",
                    params: {
                      category: article.category.slug[loc],
                      slug: article.slug[loc],
                    },
                  }}
                  className="card-lift group block rounded-lg border border-gray-200 p-5 hover:border-l-2 hover:border-l-brand"
                >
                  <p className="font-ui text-xs uppercase tracking-wider text-brand">
                    {article.category.title[loc]}
                  </p>
                  <h3 className="mt-2 text-xl transition-colors group-hover:text-brand">
                    {article.title[loc]}
                  </h3>
                  <p className="mt-2 font-ui text-sm text-muted">{article.excerpt[loc]}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeader title={t("testimonialsTitle")} />
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {(["one", "two", "three"] as const).map((key, index) => {
              const role = tt(`${key}.role`);
              const initials = role
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((w) => w[0])
                .join("")
                .toUpperCase();
              return (
                <ScrollReveal key={key} delayMs={index * 90}>
                  <blockquote className="relative overflow-hidden rounded-lg border border-gray-200 border-t-[3px] border-t-brand bg-white p-6">
                    <Quote
                      className="absolute left-4 top-4 h-10 w-10 text-gray-100"
                      aria-hidden
                    />
                    <p className="relative text-lg italic text-foreground md:text-xl">
                      “{tt(`${key}.quote`)}”
                    </p>
                    <footer className="relative mt-6 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 font-ui text-xs text-brand">
                        {initials}
                      </span>
                      <span className="font-ui text-sm text-muted">{role}</span>
                    </footer>
                  </blockquote>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCtaBand
        title={t("finalTitle")}
        description={t("finalDesc")}
        primaryLabel={tn("consultation")}
        secondaryLabel={tn("rfq")}
      />
    </>
  );
}
