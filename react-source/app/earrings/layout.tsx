import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خرید گوشواره طلا | طلای راضی",
  description: "مجموعه گوشواره‌های نو و اجرت‌دار طلای راضی با نمایش وزن، نوع قفل و قیمت نهایی.",
};

export default function EarringsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
