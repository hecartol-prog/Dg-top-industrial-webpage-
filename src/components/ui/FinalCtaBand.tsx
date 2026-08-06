import { MessageSquare } from "lucide-react";
import { CtaGroup } from "./CtaGroup";
import type { AppPathname } from "@/i18n/routing";

type Props = {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  primaryHref?: AppPathname;
  secondaryHref?: AppPathname;
};

export function FinalCtaBand({
  title,
  description,
  primaryLabel,
  secondaryLabel,
  primaryHref = "/consultation",
  secondaryHref = "/rfq",
}: Props) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0d1220] py-16 text-white md:py-20">
      <MessageSquare
        className="pointer-events-none absolute -right-6 bottom-0 h-48 w-48 text-white/[0.04] md:h-64 md:w-64"
        strokeWidth={1}
        aria-hidden
      />
      <div className="container-site relative max-w-3xl text-center">
        <div className="mx-auto mb-6 h-0.5 w-[60px] bg-gradient-to-r from-[#005b96] to-[#b3cde0]" aria-hidden />
        <h2 className="font-display text-[clamp(1.5rem,3.2vw,2rem)] !text-white">{title}</h2>
        <p className="font-subtitle mt-4 !text-white/85">{description}</p>
        <div className="mt-8">
          <CtaGroup
            primaryHref={primaryHref}
            secondaryHref={secondaryHref}
            primaryLabel={primaryLabel}
            secondaryLabel={secondaryLabel}
            align="center"
            tone="dark"
            invertPrimary
          />
        </div>
      </div>
    </section>
  );
}
