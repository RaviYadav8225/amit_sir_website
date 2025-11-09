
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./performance.css";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import { CartProvider } from "./context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LITC INFOTECH - Best IT Training Institute in Indore",
  description: "Leading IT Training Institute in Indore offering RHCSA, AWS, Docker, Kubernetes, Python, CCNA certifications. 100% Placement Assistance.",
  keywords: "IT training Indore, RHCSA, AWS certification, Docker training, Kubernetes, Python course, CCNA, DevOps training",
  openGraph: {
    title: "LITC INFOTECH - Best IT Training Institute in Indore",
    description: "Transform your career with industry-leading IT certifications",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Preload critical resources */}
        <link rel="preload" href="/logo.svg" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <PageTransition />
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
