"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    // Pathname may include dynamic segments; next-intl resolves locale swap at runtime.
    router.replace(pathname as never, { locale: next });
  }

  return (
    <div className="flex items-center gap-0.5 font-ui text-sm" role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={`px-1.5 py-1 ${locale === "en" ? "text-brand" : "text-muted hover:text-foreground"}`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <span className="text-border-strong" aria-hidden>
        |
      </span>
      <button
        type="button"
        onClick={() => switchTo("es")}
        className={`px-1.5 py-1 ${locale === "es" ? "text-brand" : "text-muted hover:text-foreground"}`}
        aria-pressed={locale === "es"}
      >
        ES
      </button>
    </div>
  );
}
