import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("common");

  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-ui text-sm uppercase tracking-[0.24em] text-muted">404</p>
      <h1 className="mt-4 text-5xl text-brand md:text-6xl">{t("pageNotFound")}</h1>
      <p className="mt-4 max-w-md font-ui text-sm text-muted">
        {t("pageNotFoundDescription")}
      </p>
      <Link
        href="/"
        className="btn-interactive mt-8 inline-flex bg-brand px-5 py-3 font-ui text-sm text-white hover:bg-brand-dark"
      >
        {t("goHome")}
      </Link>
    </div>
  );
}
