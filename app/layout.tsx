import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
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
  themeColor: "#f3f3ed",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-screen font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
