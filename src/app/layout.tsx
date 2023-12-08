import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "LIKELION SHOP",
  description: "",
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontSans.variable
        )}
      >
        <Providers>
          <Navbar />
          <main className="grow py-10 bg-slate-50">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
