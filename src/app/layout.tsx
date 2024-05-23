import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pic Sample | Download Sample images",
  description: "Download sample images for your next project free of cost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="md:text-[16px] text-[12px]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
