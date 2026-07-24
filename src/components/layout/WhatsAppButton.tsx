import { IconWhatsApp } from "@/components/ui/Icons";
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
      className="fixed bottom-6 right-4 z-40 hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white shadow-md transition-opacity hover:opacity-90 md:inline-flex"
      aria-label={label}
    >
      <IconWhatsApp className="h-5 w-5" />
      <span>{label}</span>
    </a>
  );
}
