import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "طلای بدون اجرت | طلای راضی",
  description: "موجودی روزانه طلای بدون اجرت راضی با محاسبه شفاف قیمت",
};

export default function NoFeeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
