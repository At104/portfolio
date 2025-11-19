import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Font Awesome setup
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent Font Awesome icons from flashing large before CSS is loaded
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atul Rao | Portfolio",
  description: "Software Engineering Student at McMaster University passionate about building innovative solutions through cloud computing, machine learning, and robotics.",
  keywords: ["portfolio", "software engineer", "web development", "next.js", "react", "Atul Rao", "McMaster University", "cloud computing", "machine learning"],
  authors: [{ name: "Atul Rao" }],
  creator: "Atul Rao",
  metadataBase: new URL('https://atulrao.me'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atulrao.me",
    title: "Atul Rao | Software Engineering Student",
    description: "Software Engineering Student at McMaster University passionate about building innovative solutions through cloud computing, machine learning, and robotics.",
    siteName: "Atul Rao Portfolio",
    images: [
      {
        url: "/images/headshot.png",
        width: 1200,
        height: 630,
        alt: "Atul Rao - Software Engineering Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atul Rao | Software Engineering Student",
    description: "Software Engineering Student at McMaster University passionate about building innovative solutions.",
    images: ["/images/headshot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for additional performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Viewport optimization for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Theme color for browser chrome */}
        <meta name="theme-color" content="#06b6d4" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
