import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const crimson = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={`${playfair.variable} ${crimson.variable} ${outfit.variable} font-sans bg-background text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
