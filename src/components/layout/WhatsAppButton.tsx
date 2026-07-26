import { siteConfig } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.054 9.378L1.054 31.29l6.132-1.962A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.598c-.39 1.1-1.932 2.014-3.17 2.28-.846.18-1.95.324-5.668-1.218-4.762-1.972-7.826-6.826-8.064-7.148-.23-.322-1.93-2.572-1.93-4.904s1.222-3.482 1.656-3.954c.434-.472.948-.59 1.264-.59.316 0 .632.002.908.016.292.016.684-.11 1.07.818.39.948 1.33 3.25 1.448 3.486.118.236.196.512.04.826-.158.316-.236.512-.472.788-.236.276-.498.616-.71.826-.238.236-.486.492-.208.964.278.472 1.236 2.036 2.654 3.298 1.824 1.622 3.36 2.122 3.834 2.358.472.236.748.198 1.022-.12.278-.316 1.186-1.382 1.502-1.856.316-.472.632-.394 1.064-.236.434.158 2.748 1.296 3.22 1.532.472.236.788.354.906.55.118.196.118 1.14-.272 2.24z" />
    </svg>
  );
}

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
      className="fixed bottom-20 right-4 z-40 inline-flex items-center gap-2 bg-[#25D366] px-4 py-2 text-sm text-white shadow-md md:bottom-6"
      aria-label={label}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
