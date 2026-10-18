import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const raleway = localFont({
  src: [
    { path: "./fonts/raleway-light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/raleway-extrabold.ttf", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    type: "website",
    siteName: siteConfig.wordmark,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${raleway.variable}`}>
      <body className="min-h-screen font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
