import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "塔罗占卜 - 在线塔罗牌解读",
  description: "简洁优雅的在线塔罗牌占卜，支持多种牌阵，AI 智能解读",
  openGraph: {
    title: "塔罗占卜",
    description: "在线塔罗牌 AI 解读",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
