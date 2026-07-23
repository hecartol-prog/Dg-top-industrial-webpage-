type Props = {
  title?: string;
  aspect?: "video" | "square" | "wide";
  className?: string;
};

export function PlaceholderImage({
  title = "Industrial capability",
  aspect = "wide",
  className = "",
}: Props) {
  const ratio =
    aspect === "square" ? "aspect-square" : aspect === "video" ? "aspect-video" : "aspect-[21/9]";

  return (
    <div
      className={`${ratio} flex items-end bg-gradient-to-br from-[#1a2340] via-brand to-[#6b7280] p-6 text-white ${className}`}
      role="img"
      aria-label={title}
    >
      <span className="text-sm tracking-wide text-white/90">{title}</span>
    </div>
  );
}
