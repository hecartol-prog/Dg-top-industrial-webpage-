"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitContactForm, type FormState } from "@/lib/actions";

const initial: FormState = { ok: false, message: "" };

const fieldClass =
  "w-full border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand";

export function ContactForm() {
  const t = useTranslations("forms.contact");
  const [state, action, pending] = useActionState(submitContactForm, initial);

  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block text-muted">{t("name")}</span>
          <input name="name" required className={fieldClass} />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-muted">{t("email")}</span>
          <input name="email" type="email" required className={fieldClass} />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1 block text-muted">{t("subject")}</span>
        <input name="subject" className={fieldClass} />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-muted">{t("message")}</span>
        <textarea name="message" required rows={6} className={fieldClass} />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="bg-brand px-6 py-3 text-sm text-white hover:bg-brand-dark disabled:opacity-60"
      >
        {pending ? t("sending") : t("submit")}
      </button>
      {state.message ? (
        <p className={`text-sm ${state.ok ? "text-brand" : "text-red-700"}`} role="status">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
