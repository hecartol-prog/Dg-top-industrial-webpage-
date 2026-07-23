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
        <div className="mx-auto mb-6 h-0.5 w-[60px] bg-brand" aria-hidden />
        <h2 className="text-3xl !text-white md:text-4xl">{title}</h2>
        <p className="mt-4 font-ui !text-white/85">{description}</p>
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
