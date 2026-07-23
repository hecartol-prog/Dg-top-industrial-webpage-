import { Link } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/routing";

type Item = {
  title: string;
  summary: string;
  href: AppPathname;
  params?: { slug: string };
};

export function ContentGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.title}
          href={
            item.params
              ? ({
                  pathname: item.href,
                  params: item.params,
                } as never)
              : (item.href as never)
          }
          className="group border-b border-border pb-5 transition-colors hover:border-brand"
        >
          <h3 className="text-xl text-foreground group-hover:text-brand">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-muted">{item.summary}</p>
        </Link>
      ))}
    </div>
  );
}
