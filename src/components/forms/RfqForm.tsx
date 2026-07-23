"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitRfqForm, type FormState } from "@/lib/actions";

const initial: FormState = { ok: false, message: "" };

const fieldClass =
  "w-full border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand";

export function RfqForm() {
  const t = useTranslations("forms.rfq");
  const [state, action, pending] = useActionState(submitRfqForm, initial);

  return (
    <form action={action} className="space-y-4" encType="multipart/form-data">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block text-muted">{t("name")}</span>
          <input name="name" required className={fieldClass} />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-muted">{t("email")}</span>
          <input name="email" type="email" required className={fieldClass} />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-muted">{t("company")}</span>
          <input name="company" required className={fieldClass} />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-muted">{t("projectType")}</span>
          <select name="projectType" className={fieldClass} defaultValue="">
            <option value="" disabled>
              {t("select")}
            </option>
            <option value="molds">Plastic Injection Molds</option>
            <option value="parts">Plastic Parts</option>
            <option value="metal">Metal Components</option>
            <option value="equipment">Industrial Equipment</option>
            <option value="renewable">Renewable Energy Equipment</option>
            <option value="water">Water Treatment Systems</option>
            <option value="automation">Factory Automation</option>
            <option value="oem">OEM / ODM</option>
            <option value="transfer">Manufacturing Transfer</option>
            <option value="nearshoring">{t("nearshoring")}</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-muted">{t("quantity")}</span>
          <input name="quantity" className={fieldClass} />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-muted">{t("country")}</span>
          <input name="country" className={fieldClass} />
        </label>
        <label className="block text-sm md:col-span-2">
          <span className="mb-1 block text-muted">{t("timeline")}</span>
          <input name="timeline" className={fieldClass} />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1 block text-muted">{t("description")}</span>
        <textarea name="description" required rows={7} className={fieldClass} />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-muted">{t("files")}</span>
        <input
          name="files"
          type="file"
          multiple
          accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.xls,.xlsx,.csv,.doc,.docx,.png,.jpg,.jpeg.zip"
          className={fieldClass}
        />
        <span className="mt-1 block text-xs text-muted">{t("filesHint")}</span>
      </label>
      <p className="text-xs text-muted">{t("nda")}</p>
      <button
        type="submit"
        disabled={pending}
        className="bg-brand px-6 py-3 text-sm text-white hover:bg-brand-dark disabled:opacity-60"
      >
        {pending ? t("sending") : t("submit")}
      </button>
      {state.message ? (
        <p
          className={`text-sm ${state.ok ? "text-brand" : "text-red-700"}`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
