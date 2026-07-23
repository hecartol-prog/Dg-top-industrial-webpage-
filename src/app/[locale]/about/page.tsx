import { getTranslations, setRequestLocale } from "next-intl/server";
import { Factory, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { fullAddress } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return buildMetadata({
    title: t("title"),
    description: t("description").slice(0, 158),
    path: `/${locale}/${locale === "es" ? "nosotros" : "about"}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es/nosotros" : "en/about"}`,
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("cta");
  const values = t.raw("values") as string[];
  const why = t.raw("why") as string[];
  const loc = locale as Locale;

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("title") }]} />
      <PageIntro title={t("title")} description={t("description")} />
      <div className="container-site pb-16">
        <ImagePlaceholder label="Dongguan manufacturing presence" icon={Factory} aspect="wide" />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="text-3xl">{t("storyTitle")}</h2>
            <p className="mt-4 text-muted">{t("story")}</p>
          </section>
          <section>
            <h2 className="text-3xl">{t("yearsTitle")}</h2>
            <p className="mt-4 text-muted">{t("years")}</p>
          </section>
          <section>
            <h2 className="text-3xl">{t("chinaTitle")}</h2>
            <p className="mt-4 text-muted">{t("china")}</p>
            <p className="mt-3 font-ui text-sm text-muted">{fullAddress()}</p>
            {loc === "es" ? (
              <p className="mt-2 font-ui text-sm text-muted">{t("addressEs")}</p>
            ) : null}
            <p className="mt-4 text-muted">{t("chinaExtra")}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ImagePlaceholder
                label={loc === "es" ? "Oficina Dongguan" : "Dongguan Office"}
                icon={MapPin}
                aspect="wide"
              />
              <ImagePlaceholder
                label={loc === "es" ? "Piso de producción" : "Production Floor"}
                icon={Factory}
                aspect="wide"
              />
            </div>
          </section>
          <section>
            <h2 className="text-3xl">{t("internationalTitle")}</h2>
            <p className="mt-4 text-muted">{t("international")}</p>
          </section>
          <section>
            <h2 className="text-3xl">{t("missionTitle")}</h2>
            <p className="mt-4 text-muted">{t("mission")}</p>
          </section>
          <section>
            <h2 className="text-3xl">{t("visionTitle")}</h2>
            <p className="mt-4 text-muted">{t("vision")}</p>
          </section>
        </div>
        <section className="mt-12">
          <h2 className="text-3xl">{t("valuesTitle")}</h2>
          <ul className="mt-4 grid list-none gap-3 sm:grid-cols-2 md:grid-cols-3">
            {values.map((value) => (
              <li key={value} className="border-l-2 border-brand pl-4 text-muted">
                {value}
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl">{t("approachTitle")}</h2>
          <p className="mt-4 max-w-3xl text-muted">{t("approach")}</p>
        </section>
        <section className="mt-12 border-t border-border pt-10">
          <h2 className="text-3xl">{t("teamTitle")}</h2>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
            <div
              className="flex h-24 w-24 shrink-0 items-center justify-center bg-brand text-2xl text-white"
              aria-hidden
            >
              HC
            </div>
            <div>
              <h3 className="text-2xl">{t("teamName")}</h3>
              <p className="mt-1 text-sm uppercase tracking-wider text-brand">
                {t("teamRole")}
              </p>
              <p className="mt-4 max-w-2xl text-muted">{t("teamBio")}</p>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl">{t("certsTitle")}</h2>
          <p className="mt-4 max-w-3xl text-muted">{t("certsBody")}</p>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl">{t("whyTitle")}</h2>
          <ul className="mt-4 list-none space-y-3">
            {why.map((item) => (
              <li key={item} className="border-l-2 border-brand pl-4 text-muted">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <FinalCtaBand
        title={tc("aboutTitle")}
        description={tc("aboutDesc")}
        primaryLabel={tn("consultation")}
        secondaryLabel={tn("contact")}
        primaryHref="/consultation"
        secondaryHref="/contact"
      />
    </>
  );
}
