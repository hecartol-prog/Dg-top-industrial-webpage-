"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

const primaryNav = [
  { href: "/about" as const, key: "about" },
  { href: "/industries" as const, key: "industries" },
  { href: "/solutions" as const, key: "solutions" },
  { href: "/services" as const, key: "services" },
  { href: "/capabilities" as const, key: "capabilities" },
  { href: "/case-studies" as const, key: "caseStudies" },
];

const secondaryNav = [
  { href: "/process" as const, key: "process" },
  { href: "/quality" as const, key: "quality" },
  { href: "/contact" as const, key: "contact" },
  { href: "/blog" as const, key: "blog" },
  { href: "/resources" as const, key: "resources" },
  { href: "/privacy" as const, key: "privacy" },
  { href: "/terms" as const, key: "terms" },
];

const allNav = [...primaryNav, ...secondaryNav];

export function SiteHeader() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!moreRef.current?.contains(e.target as Node)) setMoreOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="container-site flex items-center justify-between gap-3 py-2.5 lg:gap-4 lg:py-3">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Top Industrial"
            width={152}
            height={97}
            priority
            className="h-9 w-auto bg-transparent object-contain sm:h-10 md:h-11"
          />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-x-4 xl:flex 2xl:gap-x-5"
          aria-label="Primary"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="nav-link whitespace-nowrap font-ui text-sm tracking-wide text-foreground/75 transition-colors hover:text-brand"
            >
              {t(item.key)}
            </Link>
          ))}

          <div className="relative" ref={moreRef}>
            <button
              type="button"
              className="nav-link whitespace-nowrap font-ui text-sm tracking-wide text-foreground/75 transition-colors hover:text-brand"
              aria-expanded={moreOpen}
              aria-haspopup="true"
              onClick={() => setMoreOpen((v) => !v)}
            >
              {t("more")}
            </button>
            {moreOpen ? (
              <div className="absolute right-0 top-full z-50 mt-2 min-w-[11rem] border border-border bg-white py-2 shadow-sm">
                {secondaryNav.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="block px-4 py-2 font-ui text-sm text-foreground/80 hover:bg-surface hover:text-brand"
                    onClick={() => setMoreOpen(false)}
                  >
                    {item.key === "privacy" || item.key === "terms"
                      ? tf(item.key)
                      : t(item.key)}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 font-ui lg:flex xl:gap-2.5">
          <LanguageSwitcher />
          <Link
            href="/consultation"
            className="btn-interactive border border-brand px-3 py-1.5 text-sm tracking-wide text-brand hover:bg-surface"
          >
            {t("consultationShort")}
          </Link>
          <Link
            href="/rfq"
            className="btn-interactive bg-brand px-3 py-1.5 text-sm tracking-wide text-white hover:bg-brand-dark"
          >
            {t("rfq")}
          </Link>
        </div>

        <button
          type="button"
          className="border border-border px-2.5 py-1.5 font-ui text-sm xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t("close") : t("menu")}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-white xl:hidden">
          <nav className="container-site flex flex-col gap-0.5 py-3 font-ui" aria-label="Mobile">
            {allNav.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="py-2.5 text-sm text-foreground/85"
                onClick={() => setOpen(false)}
              >
                {item.key === "privacy" || item.key === "terms"
                  ? tf(item.key)
                  : t(item.key)}
              </Link>
            ))}
            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border pt-3">
              <LanguageSwitcher />
              <Link
                href="/consultation"
                className="border border-brand px-3 py-2 text-sm text-brand"
                onClick={() => setOpen(false)}
              >
                {t("consultation")}
              </Link>
              <Link
                href="/rfq"
                className="bg-brand px-3 py-2 text-sm text-white"
                onClick={() => setOpen(false)}
              >
                {t("rfq")}
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
