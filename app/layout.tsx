import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-vercel-domain.vercel.app"),

  title: {
    default: "Accredian Enterprise",
    template: "%s | Accredian Enterprise",
  },

  description:
    "Accredian Enterprise helps organizations upskill their workforce through industry-leading certification programs and strategic learning solutions.",

  keywords: [
    "Accredian",
    "Enterprise",
    "Corporate Learning",
    "Upskilling",
    "Workforce Training",
    "Certification",
    "Learning Programs",
    "Professional Development",
  ],

  authors: [{ name: "Priyanshu Kumar" }],

  creator: "Priyanshu Kumar",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Accredian Enterprise",
    description:
      "Corporate learning and workforce upskilling solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Accredian Enterprise",
  },

  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise",
    description:
      "Corporate learning and workforce upskilling solutions.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "/",
  },

  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
