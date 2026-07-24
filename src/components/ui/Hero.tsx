import Image from "next/image";
import { CtaGroup } from "./CtaGroup";

type Props = {
  brand: string;
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  imageAlt: string;
};

export function Hero({
  brand,
  title,
  description,
  primaryLabel,
  secondaryLabel,
  imageAlt,
}: Props) {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#0d1220] text-white">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2340] via-[#0d1220] to-[#080b14]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <span className="hero-accent-line absolute left-[12%] top-[28%] h-px w-24 bg-white/40" />
        <span className="hero-accent-line absolute right-[18%] top-[62%] h-px w-16 bg-white/30 [animation-delay:1.2s]" />
        <span className="hero-accent-dot absolute left-[42%] top-[22%] h-1.5 w-1.5 rounded-full bg-white/50" />
        <span className="hero-accent-dot absolute right-[28%] top-[40%] h-1 w-1 rounded-full bg-white/40 [animation-delay:2s]" />
      </div>

      <div className="container-site relative grid min-h-[88vh] items-center gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-24">
        <div>
          <p className="fade-in mb-4 max-w-3xl font-display text-xl leading-snug tracking-wide !text-white md:text-2xl lg:text-3xl">
            {brand}
          </p>
          <h1 className="fade-in max-w-3xl text-4xl leading-tight !text-white md:text-5xl xl:text-6xl">
            {title}
          </h1>
          <p className="fade-in mt-6 max-w-2xl font-ui text-base !text-white/90 md:text-lg">
            {description}
          </p>
          <div className="fade-in mt-10">
            <CtaGroup
              primaryLabel={primaryLabel}
              secondaryLabel={secondaryLabel}
              tone="dark"
            />
          </div>
        </div>

        <div className="fade-in relative h-[200px] overflow-hidden rounded-lg border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.35)] lg:h-[420px]">
          <Image
            src="/images/hero-facility.png"
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
