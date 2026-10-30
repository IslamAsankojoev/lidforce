import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/src/widgets";
import { MotionProvider } from "@/src/shared";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Lidforce — маркетинговое агентство", template: "%s — Lidforce" },
  description: "Маркетинговое агентство LidForce: таргет, SMM, продакшн, брендинг и сайты для бизнеса.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} antialiased bg-bg-surface`}
      >
        <MotionProvider>
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
