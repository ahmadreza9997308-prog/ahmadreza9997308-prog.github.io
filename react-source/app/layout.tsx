import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "طلای راضی | فروشگاه آنلاین طلا و جواهر",
  description: "فروشگاه اینترنتی طلای راضی؛ زیورآلات نو، خرید شفاف و ارسال امن.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
