import { Link } from "@/i18n/navigation";

export function PageIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="container-site max-w-3xl py-10 md:py-14">
      <h1 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-snug tracking-[0.02em]">
        {title}
      </h1>
      <p className="font-subtitle mt-4 text-muted md:mt-5">{description}</p>
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
      <h2 className="font-display text-[clamp(1.35rem,2.8vw,1.75rem)]">{title}</h2>
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
