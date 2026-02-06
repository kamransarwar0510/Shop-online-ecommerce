import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SHOPLINE - Seamless Commerce. Accelerated Growth.",
  description:
    "Integrated commerce solutions that empower your business to move quickly and scale without limits. Build, launch and scale your online business with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
