import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bracklers - Digital Marketing Agency",
  description: "Your one-stop solution for all digital marketing needs.",
  keywords: [
    "Digital Marketing",
    "SEO",
    "Social Media Marketing",
    "Content Marketing",
    "PPC",
    "Branding",
    "bracklers agency",
  ],
  metadataBase: new URL("https://www.bracklers.com"),
  alternates: {
    canonical: "https://www.bracklers.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "bracklers Team", url: "https://www.bracklers.com" }],
  publisher: "bracklers",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  openGraph: {
    title: "bracklers - Digital Marketing Agency",
    description: "Your one-stop solution for all digital marketing needs.",
    url: "https://www.bracklers.com",
    siteName: "bracklers",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="zDwBDmtTsRGAKVlJ1qtHFUiv5_JDUo3DOsEKGLBFLX8"
        />

        {/* Extra SEO fallback tags (for safety) */}
        <meta name="author" content="bracklers Team" />
        <meta name="publisher" content="bracklers" />
        <link rel="canonical" href="https://www.bracklers.com/" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
