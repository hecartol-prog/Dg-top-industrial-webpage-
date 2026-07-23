"use client";

import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("common");

  return (
    <div
      className="container-site flex min-h-[50vh] items-center justify-center"
      aria-live="polite"
      aria-label={t("loading")}
    >
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-brand" />
    </div>
  );
}
