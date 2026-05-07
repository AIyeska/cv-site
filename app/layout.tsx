import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Maria Alyeska Cabalan — Customer Success & AI",
  description:
    "Customer Success Manager som forenkler komplekse IT-miljøer, skaper verdi med AI og driver digital adopsjon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="h-full">
      <body className="min-h-full flex flex-col antialiased" style={{ backgroundColor: "var(--color-background)" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
