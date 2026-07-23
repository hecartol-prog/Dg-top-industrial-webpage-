export function IconGear({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M19.4 13.5a7.7 7.7 0 0 0 .05-1.5l1.7-1.3-1.6-2.8-2 .5a7.6 7.6 0 0 0-1.3-.75l-.3-2.05h-3.2l-.3 2.05c-.45.2-.88.45-1.28.75l-2-.5-1.6 2.8 1.7 1.3a7.7 7.7 0 0 0 0 1.5l-1.7 1.3 1.6 2.8 2-.5c.4.3.83.55 1.28.75l.3 2.05h3.2l.3-2.05c.45-.2.88-.45 1.3-.75l2 .5 1.6-2.8-1.7-1.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconShield({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3 5 6v5c0 4.5 2.9 7.7 7 9 4.1-1.3 7-4.5 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconNetwork({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="6" cy="7" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="7" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="17" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8.5 10.5 15M16 8.5 13.5 15M8.3 7h7.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconClipboard({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 4h6v2H9V4Zm-2 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8 12h8M8 16h6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
