import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");
  const locale = await getLocale();

  return (
    <footer className="border-t border-white/10 bg-[#0d1220] font-ui text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logo.png"
            alt="Top Industrial"
            width={120}
            height={76}
            className="h-10 w-auto bg-transparent object-contain"
          />
          <p className="mt-4 text-sm text-white/70">{t("tagline")}</p>
          <div className="mt-5 flex flex-col gap-2 text-sm text-white/80">
            <Link href="/about" className="transition-colors hover:text-white">
              {tn("about")}
            </Link>
            <Link href="/process" className="transition-colors hover:text-white">
              {tn("process")}
            </Link>
            <Link href="/quality" className="transition-colors hover:text-white">
              {tn("quality")}
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-white/50">
            {tn("solutions")}
          </p>
          <div className="flex flex-col gap-2 text-sm text-white/80">
            <Link href="/solutions" className="transition-colors hover:text-white">
              {t("allSolutions")}
            </Link>
            <Link href="/industries" className="transition-colors hover:text-white">
              {t("allIndustries")}
            </Link>
            <Link href="/services" className="transition-colors hover:text-white">
              {t("allServices")}
            </Link>
            <Link href="/capabilities" className="transition-colors hover:text-white">
              {tn("capabilities")}
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-white/50">
            {t("insights")}
          </p>
          <div className="flex flex-col gap-2 text-sm text-white/80">
            <Link href="/blog" className="transition-colors hover:text-white">
              {tn("blog")}
            </Link>
            <Link href="/resources" className="transition-colors hover:text-white">
              {tn("resources")}
            </Link>
            <Link href="/case-studies" className="transition-colors hover:text-white">
              {tn("caseStudies")}
            </Link>
            <Link href="/contact" className="mt-4 transition-colors hover:text-white">
              {t("shortAddress")}
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors hover:text-white"
            >
              {siteConfig.email}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-white/50">
              {tn("contact")}
            </p>
            <p className="text-sm text-white/70">
              {locale === "es"
                ? "Inicie una conversación de ingeniería."
                : "Start an engineering conversation."}
            </p>
          </div>
          <Link
            href="/consultation"
            className="btn-interactive inline-flex items-center justify-center bg-brand px-4 py-4 text-sm text-white hover:bg-brand-dark"
          >
            {tn("consultation")}
          </Link>
          <Link
            href="/rfq"
            className="btn-interactive inline-flex items-center justify-center border border-white/40 px-4 py-3 text-sm text-white hover:bg-white/10"
          >
            {tn("rfq")}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            {locale === "es"
              ? `© ${new Date().getFullYear()} ${siteConfig.legalName} / ${siteConfig.legalNameZh}`
              : `© ${new Date().getFullYear()} ${siteConfig.legalName}`}
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="hover:text-white">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
