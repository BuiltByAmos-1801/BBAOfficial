import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amos Anand – Software Engineer",
    template: "%s – Amos Anand",
  },
  description: "Software Engineer and Full-Stack Developer portfolio.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Amos Anand – Software Engineer",
    description: "Portfolio, projects, and experience.",
    url: "https://example.com",
    siteName: "Amos Anand",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Amos Anand – Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amos Anand – Software Engineer",
    description: "Portfolio, projects, and experience.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <PageLoader />
          <ScrollProgress />
          <Navbar />
          <main className="pt-16">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
