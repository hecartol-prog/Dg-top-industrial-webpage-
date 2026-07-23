import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

type Props = {
  label: string;
  icon?: LucideIcon;
  aspect?: "video" | "wide" | "square" | "tall";
  className?: string;
  tone?: "light" | "dark";
};

const aspectClass = {
  video: "aspect-video",
  wide: "aspect-[16/10]",
  square: "aspect-square",
  tall: "aspect-[4/5]",
};

export function ImagePlaceholder({
  label,
  icon: Icon = ImageIcon,
  aspect = "wide",
  className = "",
  tone = "light",
}: Props) {
  const surface =
    tone === "dark"
      ? "bg-[#1a2340] text-white/70"
      : "bg-gray-100 text-muted";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-lg border border-border shadow-sm ${aspectClass[aspect]} ${surface} ${className}`}
      role="img"
      aria-label={label}
    >
      <Icon
        className={`absolute h-20 w-20 opacity-15 ${tone === "dark" ? "text-white" : "text-brand"}`}
        strokeWidth={1.25}
        aria-hidden
      />
      <span className="relative z-10 font-ui text-sm tracking-wide">{label}</span>
    </div>
  );
}
