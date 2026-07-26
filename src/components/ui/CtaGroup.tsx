"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/routing";

type Props = {
  primaryHref?: AppPathname;
  secondaryHref?: AppPathname;
  primaryLabel: string;
  secondaryLabel: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  invertPrimary?: boolean;
};

export function CtaGroup({
  primaryHref = "/consultation",
  secondaryHref = "/rfq",
  primaryLabel,
  secondaryLabel,
  align = "left",
  tone = "light",
  invertPrimary = false,
}: Props) {
  /*
   tone=light (white bg pages):  primary=btn-dark, secondary=btn-ghost-light
   tone=dark  (dark bg pages):  primary=btn-light, secondary=btn-ghost-dark
   invertPrimary flips:  primary↔secondary
  */

  const isDark = tone === "dark";
  const primaryIsGhost = invertPrimary;

  const primaryClass = primaryIsGhost
    ? isDark
      ? "btn-interactive btn-ghost-dark inline-flex items-center justify-center gap-2 px-6 py-3 font-ui text-sm tracking-wide"
      : "btn-interactive btn-ghost-light inline-flex items-center justify-center gap-2 px-6 py-3 font-ui text-sm tracking-wide"
    : isDark
      ? "btn-interactive btn-light inline-flex items-center justify-center gap-2 px-6 py-3 font-ui text-sm tracking-wide"
      : "btn-interactive btn-dark inline-flex items-center justify-center gap-2 px-6 py-3 font-ui text-sm tracking-wide";

  const secondaryClass = isDark
    ? "btn-interactive btn-ghost-dark inline-flex items-center justify-center gap-2 px-6 py-3 font-ui text-sm tracking-wide"
    : "btn-interactive btn-ghost-light inline-flex items-center justify-center gap-2 px-6 py-3 font-ui text-sm tracking-wide";

  return (
    <div
      className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`}
    >
      <Link href={primaryHref as never} className={primaryClass}>
        <span className="relative z-10">{primaryLabel}</span>
        <ArrowRight className="relative z-10 h-4 w-4" aria-hidden />
      </Link>
      <Link href={secondaryHref as never} className={secondaryClass}>
        <span className="relative z-10">{secondaryLabel}</span>
        <ArrowRight className="relative z-10 h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}
