type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div className={`mb-8 max-w-3xl md:mb-10 ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="font-subtitle mb-2 text-xs uppercase tracking-[0.18em] text-brand md:mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[clamp(1.5rem,3.2vw,2rem)] leading-snug tracking-[0.02em]">
        {title}
      </h2>
      {description ? (
        <p className="font-subtitle mt-3 text-muted md:mt-4">{description}</p>
      ) : null}
    </div>
  );
}
