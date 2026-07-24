import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactForm } from "@/components/forms/ContactForm";
import { IconWhatsApp } from "@/components/ui/Icons";
import { Link } from "@/i18n/navigation";
import { fullAddress, siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactPage" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/${locale === "es" ? "contacto" : "contact"}`,
    locale: locale as Locale,
    alternatePath: `/${locale === "en" ? "es/contacto" : "en/contact"}`,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");
  const tn = await getTranslations("nav");

  return (
    <>
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("title") }]} />
      <PageIntro title={t("title")} description={t("description")} />
      <div className="container-site grid gap-12 pb-20 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />
        <aside className="space-y-8">
          <div>
            <h2 className="text-2xl">{t("channels")}</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-brand hover:underline">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand hover:underline"
                >
                  <IconWhatsApp className="h-4 w-4 text-[#25D366]" />
                  WhatsApp · +86 180 3825 7063
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl">{t("address")}</h2>
            <p className="mt-4 text-sm text-muted">{fullAddress()}</p>
            <div className="mt-4 aspect-video bg-surface" aria-hidden />
          </div>
          <p className="text-sm text-muted">
            <Link href="/consultation" className="text-brand hover:underline">
              {t("consultationLink")}
            </Link>
          </p>
          <p className="text-sm text-muted">
            <Link href="/rfq" className="text-brand hover:underline">
              {t("rfqLink")}
            </Link>
          </p>
        </aside>
      </div>
    </>
  );
}
