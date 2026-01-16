import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "塔罗占卜 - 神秘解读之旅",
  description: "沉浸式塔罗牌占卜体验，AI 智能解读，探索命运的奥秘",
  openGraph: {
    title: "塔罗占卜",
    description: "神秘的塔罗牌 AI 解读",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSans.variable} font-sans bg-background text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
