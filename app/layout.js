import "./globals.css";

export const metadata = {
  title: "Top Industrial",
  description: "Bilingual industrial manufacturing programs and engineering-led execution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
