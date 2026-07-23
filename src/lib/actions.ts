"use server";

export type FormState = {
  ok: boolean;
  message: string;
};

export async function submitContactForm(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return {
      ok: false,
      message: "Please complete all required fields.",
    };
  }

  console.info("[contact]", {
    name,
    email,
    subject,
    message,
  });

  return {
    ok: true,
    message: "Thank you. Our team will review your inquiry and respond shortly.",
  };
}

export async function submitConsultationForm(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const meetingTime = String(formData.get("meetingTime") || "").trim();

  if (!name || !email || !company || !message) {
    return {
      ok: false,
      message: "Please complete all required fields.",
    };
  }

  console.info("[consultation]", {
    name,
    email,
    company,
    meetingTime,
    message,
  });

  return {
    ok: true,
    message:
      "Thank you. We will follow up to schedule an engineering discussion.",
  };
}

export async function submitRfqForm(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const description = String(formData.get("description") || "").trim();

  if (!name || !email || !company || !description) {
    return {
      ok: false,
      message: "Please complete all required fields.",
    };
  }

  console.info("[rfq]", {
    name,
    email,
    company,
    projectType: formData.get("projectType"),
    quantity: formData.get("quantity"),
    country: formData.get("country"),
    timeline: formData.get("timeline"),
    description,
    files: formData.getAll("files").length,
  });

  return {
    ok: true,
    message:
      "RFQ received. An engineering review will begin and we will contact you with next steps.",
  };
}
