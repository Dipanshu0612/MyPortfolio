import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dipanshu Mishra - Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in MERN stack, Next.js, and modern web technologies. Explore my projects and get in touch!",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "TypeScript",
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
      "Full Stack Developer specializing in MERN stack, Next.js, and modern web technologies.",
    siteName: "Dipanshu Mishra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipanshu Mishra - Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, Next.js, and modern web technologies.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
