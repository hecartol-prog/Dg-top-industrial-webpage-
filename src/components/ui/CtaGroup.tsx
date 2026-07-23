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
  const primaryClass = invertPrimary
    ? "btn-interactive inline-flex items-center justify-center gap-2 bg-white px-6 py-3 font-ui text-sm tracking-wide text-[#0d1220] shadow-sm hover:shadow-md"
    : "btn-interactive inline-flex items-center justify-center gap-2 bg-brand px-6 py-3 font-ui text-sm tracking-wide text-white shadow-sm hover:bg-brand-dark hover:shadow-md";

  const secondaryClass =
    tone === "dark" || invertPrimary
      ? "btn-interactive inline-flex items-center justify-center gap-2 border border-white bg-transparent px-6 py-3 font-ui text-sm tracking-wide text-white hover:bg-white hover:text-[#0d1220]"
      : "btn-interactive inline-flex items-center justify-center gap-2 border border-brand bg-transparent px-6 py-3 font-ui text-sm tracking-wide text-brand hover:bg-brand hover:text-white";

  return (
    <div
      className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`}
    >
      <Link href={primaryHref as never} className={primaryClass}>
        {primaryLabel}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
      <Link href={secondaryHref as never} className={secondaryClass}>
        {secondaryLabel}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}
