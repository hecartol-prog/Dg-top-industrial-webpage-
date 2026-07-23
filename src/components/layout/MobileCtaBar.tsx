"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

export function MobileCtaBar() {
  const t = useTranslations("nav");

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-white md:hidden">
      <Link href="/consultation" className="py-3 text-center text-xs text-brand">
        {t("consultation")}
      </Link>
      <Link href="/rfq" className="bg-brand py-3 text-center text-xs text-white">
        {t("rfq")}
      </Link>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="py-3 text-center text-xs text-foreground"
      >
        WhatsApp
      </a>
    </div>
  );
}
