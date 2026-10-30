import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/src/widgets";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lidforce",
  description: "Marketing agency",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
