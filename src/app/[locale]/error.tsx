"use client";

import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function LocaleError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-ui text-sm tracking-wide text-muted">Error</p>
      <h1 className="mt-2 text-3xl">Something went wrong</h1>
      <p className="mt-4 max-w-md text-muted">
        An unexpected error occurred while loading this page.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex bg-brand px-5 py-3 font-ui text-sm text-white hover:bg-brand-dark"
      >
        Try again
      </button>
    </div>
  );
}
