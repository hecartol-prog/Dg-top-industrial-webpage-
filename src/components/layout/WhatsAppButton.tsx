import { siteConfig } from "@/lib/site";

type Props = {
  label: string;
};

export function WhatsAppButton({ label }: Props) {
  const href = `https://wa.me/${siteConfig.whatsapp}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 z-40 hidden items-center gap-2 bg-[#25D366] px-4 py-2 text-sm text-white shadow-md md:inline-flex"
      aria-label={label}
    >
      <span aria-hidden>WA</span>
      <span>{label}</span>
    </a>
  );
}
