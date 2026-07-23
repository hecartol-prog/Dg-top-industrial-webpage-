import { Link } from "@/i18n/navigation";

export function PageIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="container-site max-w-3xl py-14 md:py-20">
      <h1 className="text-4xl md:text-5xl">{title}</h1>
      <p className="mt-5 text-lg text-muted">{description}</p>
    </header>
  );
}

export function RelatedLinks({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  if (!items.length) return null;
  return (
    <div className="mt-12 border-t border-border pt-8">
      <h2 className="text-2xl">{title}</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href as never} className="text-brand hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
