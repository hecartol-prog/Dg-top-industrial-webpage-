import { Link } from "@/i18n/navigation";
import type { LucideIcon } from "lucide-react";
import type { AppPathname } from "@/i18n/routing";

type Props = {
  title: string;
  summary: string;
  href: AppPathname;
  params?: { slug: string };
  icon?: LucideIcon;
  delayMs?: number;
};

export function ContentCard({
  title,
  summary,
  href,
  params,
  icon: Icon,
}: Props) {
  return (
    <Link
      href={
        params
          ? ({ pathname: href, params } as never)
          : (href as never)
      }
      className="card-lift group block rounded-lg border border-gray-200 border-l-2 border-l-transparent bg-white p-5 hover:border-l-brand"
    >
      {Icon ? (
        <Icon className="mb-3 h-6 w-6 text-brand" strokeWidth={1.5} aria-hidden />
      ) : null}
      <h3 className="text-xl transition-colors group-hover:text-brand">{title}</h3>
      <p className="mt-2 font-ui text-sm text-muted">{summary}</p>
    </Link>
  );
}
