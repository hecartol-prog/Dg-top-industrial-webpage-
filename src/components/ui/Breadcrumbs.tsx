import { Link } from "@/i18n/navigation";

type Crumb = {
  label: string;
  href?: "/" | "/about" | "/industries" | "/solutions" | "/services" | "/capabilities" | "/case-studies" | "/process" | "/quality" | "/blog" | "/resources" | "/contact" | "/consultation" | "/rfq";
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-surface">
      <ol className="container-site flex flex-wrap items-center gap-2 py-3 text-sm text-muted">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="hover:text-brand">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
