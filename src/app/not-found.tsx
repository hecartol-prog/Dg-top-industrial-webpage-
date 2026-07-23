import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-white px-6 text-foreground">
        <div className="max-w-md text-center">
          <p className="font-ui text-sm tracking-wide text-muted">404</p>
          <h1 className="mt-2 text-3xl">Page not found</h1>
          <p className="mt-3 font-ui text-sm text-muted">
            The page you requested does not exist or has moved.
          </p>
          <Link
            href="/en"
            className="mt-8 inline-flex bg-brand px-5 py-3 font-ui text-sm text-white hover:bg-brand-dark"
          >
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
