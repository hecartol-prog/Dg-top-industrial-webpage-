import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { PageIntro } from "@/components/ui/PageIntro";
import { getServiceBySlug, services } from "@/content/slug-maps";
import { buildMetadata, JsonLd, serviceJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return services.flatMap((item) =>
    (["en", "es"] as const).map((locale) => ({
      locale,
      slug: item.slug[locale],
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const item = getServiceBySlug(locale as Locale, slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title[locale as Locale],
    description: item.summary[locale as Locale],
    path: `/${locale}/${locale === "es" ? "servicios" : "services"}/${slug}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es" : "en"}/${locale === "en" ? "servicios" : "services"}/${item.slug[locale === "en" ? "es" : "en"]}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const item = getServiceBySlug(loc, slug);
  if (!item) notFound();

  const t = await getTranslations("servicesPage");
  const tn = await getTranslations("nav");
  const related = services.filter((s) => s.group === item.group && s.id !== item.id).slice(0, 4);
  const path = `/${locale}/${locale === "es" ? "servicios" : "services"}/${slug}`;

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: item.title[loc],
          description: item.summary[loc],
          url: `${siteConfig.domain}${path}`,
        })}
      />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: t("title"), href: "/services" },
          { label: item.title[loc] },
        ]}
      />
      <PageIntro title={item.title[loc]} description={item.summary[loc]} />
      <div className="container-site space-y-10 pb-20">
        <section>
          <h2 className="text-2xl">{loc === "es" ? "Qué es" : "What it is"}</h2>
          <p className="mt-3 text-muted">{item.description[loc]}</p>
        </section>
        <section>
          <h2 className="text-2xl">{loc === "es" ? "Cuándo se necesita" : "When you need it"}</h2>
          <p className="mt-3 text-muted">{item.whenNeeded[loc]}</p>
        </section>
        <section>
          <h2 className="text-2xl">{loc === "es" ? "Cómo lo ejecutamos" : "How we execute"}</h2>
          <p className="mt-3 text-muted">{item.howWeExecute[loc]}</p>
        </section>
        <section>
          <h2 className="text-2xl">{loc === "es" ? "Entregables" : "Deliverables"}</h2>
          <ul className="mt-4 space-y-2">
            {item.deliverables[loc].map((d) => (
              <li key={d} className="text-muted">
                • {d}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl">{loc === "es" ? "Servicios relacionados" : "Related services"}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {related.map((s) => (
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
        </section>
        <CtaGroup primaryLabel={tn("consultation")} secondaryLabel={tn("rfq")} />
      </div>
    </>
  );
}
