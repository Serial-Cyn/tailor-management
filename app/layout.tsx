import type { Metadata } from "next";
import { Alan_Sans } from "next/font/google";
import "./globals.css";

const alanSans = Alan_Sans({
  variable: "--font-alan-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Tailor Management System",
  description: "Manage operations of a tailoring business efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alanSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
