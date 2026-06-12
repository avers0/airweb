import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AiR: Audit It Right — Internal Audit, Risk Advisory, Good Governance",
    template: "%s | AiR — Audit It Right",
  },
  description:
    "Protecting Shareholder Value. Every organisation deserves an independent check on its strategy, operations, and financial matters. That is exactly what we do.",
  metadataBase: new URL("https://www.audititright.com"),
  keywords: [
    "internal audit firm",
    "risk advisory",
    "corporate governance",
    "internal audit India",
    "forensic review",
    "pre-acquisition due diligence",
    "ESG audit",
    "co-sourcing internal audit",
    "IA effectiveness review",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.audititright.com",
    siteName: "AiR — Audit It Right",
    title: "AiR: Audit It Right — Protecting Shareholder Value",
    description:
      "Independent internal audit, risk advisory, and good governance. Partner-led engagements across India, Europe, and globally.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiR: Audit It Right — Protecting Shareholder Value",
    description:
      "Independent internal audit, risk advisory, and good governance. Partner-led engagements across India, Europe, and globally.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1B2A4A",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AiR — Audit It Right",
  url: "https://www.audititright.com",
  email: "hello@audititright.com",
  description:
    "Independent internal audit firm focused on protecting and enhancing long-term shareholder value through internal audit, risk advisory, and good governance.",
  areaServed: ["India", "Europe", "Global"],
  founder: { "@type": "Person", name: "Sumit Chuttar" },
  knowsAbout: [
    "Internal Audit",
    "Risk Advisory",
    "Corporate Governance",
    "Forensic Review",
    "Due Diligence",
    "ESG Assurance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
