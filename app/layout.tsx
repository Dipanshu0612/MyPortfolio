import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistSans.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMono.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dipanshu Mishra - Full Stack Developer",
  description:
    "Full Stack Developer building production-grade web applications with Next.js. Experienced in scaling platforms, optimizing performance, and deploying to cloud infrastructure.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Supabase",
    "Web Development",
    "Portfolio",
    "Dipanshu Mishra",
  ],
  authors: [{ name: "Dipanshu Mishra" }],
  creator: "Dipanshu Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dipanshu-portfolio.vercel.app",
    title: "Dipanshu Mishra - Full Stack Developer",
    description:
      "Full Stack Developer shipping production-grade apps with Next.js, React, and modern web technologies.",
    siteName: "Dipanshu Mishra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipanshu Mishra - Full Stack Developer",
    description:
      "Full Stack Developer shipping production-grade apps with Next.js, React, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className={`${geistSans.className} antialiased`}>
        <head>
          <link rel="icon" href="/images-optimized/favicon.svg" sizes="any" />
        </head>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {children}
          <Toaster richColors position="bottom-right" />
          <div className="noise" />
        </ThemeProvider>
      </body>
    </html>
  );
}
