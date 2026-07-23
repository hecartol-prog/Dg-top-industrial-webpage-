import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCtaBand } from "@/components/ui/FinalCtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { process as processSteps } from "@/content/process";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "processPage" });
  return buildMetadata({
    title: t("title"),
    description: t("description").slice(0, 158),
    path: `/${locale}/${locale === "es" ? "proceso" : "process"}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es/proceso" : "en/process"}`,
  });
}

export default async function ProcessPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("processPage");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("cta");
  const loc = locale as Locale;

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("title") }]} />
      <PageIntro title={t("title")} description={t("description")} />
      <div className="container-site relative max-w-4xl pb-20 pl-4 md:pl-0">
        <div
          className="absolute bottom-24 left-[1.65rem] top-2 w-0.5 bg-gray-200 md:left-1/2"
          aria-hidden
        />
        <div className="space-y-14">
          {processSteps.map((step, index) => {
            const reverse = index % 2 === 1;
            return (
              <ScrollReveal key={step.id} delayMs={(index % 3) * 70}>
                <article className="relative md:grid md:grid-cols-2 md:gap-12">
                  <span className="absolute left-0 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand font-ui text-sm text-white md:left-1/2 md:-translate-x-1/2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={`pl-14 md:pl-0 ${
                      reverse
                        ? "md:col-start-2 md:pl-8"
                        : "md:col-start-1 md:pr-8 md:text-right"
                    }`}
                  >
                    <h2 className="text-3xl">{step.title[loc]}</h2>
                    <p className="mt-3 text-muted">{step.objective[loc]}</p>
                    <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4 font-ui text-sm text-muted">
                      <p>
                        <span className="text-brand">Inputs:</span> {step.inputs[loc]}
                      </p>
                      <p className="mt-2">
                        <span className="text-brand">Outputs:</span> {step.outputs[loc]}
                      </p>
                      <p className="mt-2">
                        <span className="text-brand">Buyer role:</span>{" "}
                        {step.buyerRole[loc]}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
      <FinalCtaBand
        title={tc("processTitle")}
        description={tc("processDesc")}
        primaryLabel={tn("consultation")}
        secondaryLabel={tn("rfq")}
      />
    </>
  );
}
