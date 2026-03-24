import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { CustomCursor } from "@/components/animations/custom-cursor";
import { SmoothScrollProvider } from "@/components/animations/smooth-scroll-provider";
import { FloatingChatbot } from "@/components/chatbot/floating-chatbot";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Puneeth Kumar",
  },
  description: siteConfig.description,
  keywords: [
    "Puneeth Kumar",
    "Frontend Engineer",
    "Next.js Portfolio",
    "React Developer",
    "TypeScript",
    "Three.js",
  ],
  authors: [{ name: "Puneeth Kumar" }],
  creator: "Puneeth Kumar",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-surface-900 font-sans text-text-high">
        <ThemeProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <FloatingChatbot />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
