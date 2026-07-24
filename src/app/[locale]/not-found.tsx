import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function LocaleNotFound() {
  const tn = await getTranslations("nav");

  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-ui text-sm tracking-wide text-muted">404</p>
      <h1 className="mt-2 text-4xl text-brand">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you requested does not exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex bg-brand px-5 py-3 font-ui text-sm text-white hover:bg-brand-dark"
      >
        {tn("home")}
      </Link>
    </div>
  );
}
