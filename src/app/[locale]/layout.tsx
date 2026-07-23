import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Marcellus, Marcellus_SC, Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd, organizationJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "../globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const marcellusSc = Marcellus_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus-sc",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    metadataBase: new URL(siteConfig.domain),
    title: {
      default: `${siteConfig.name} | Industrial Solutions Partner`,
      template: `%s | ${siteConfig.name}`,
    },
    description:
      locale === "es"
        ? "Socio de soluciones industriales para proyectos de manufactura en China y Asia."
        : "Industrial Solutions Partner for manufacturing projects across China and Asia.",
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${marcellus.variable} ${marcellusSc.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background pb-16 font-body text-foreground antialiased md:pb-0">
        <NextIntlClientProvider messages={messages}>
          <JsonLd data={organizationJsonLd()} />
          <SiteHeader />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-brand"
          >
            Skip to content
          </a>
          <main id="main-content">{children}</main>
          <SiteFooter />
          <MobileCtaBar />
          <WhatsAppButton label={locale === "es" ? "WhatsApp" : "WhatsApp"} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
