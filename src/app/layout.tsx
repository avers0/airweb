import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AiR: Audit It Right - Internal Audit, Risk Advisory, Good Governance",
  description: "Protecting Shareholder Value. Every organisation deserves an independent check on its strategy, operations, and financial matters. That is exactly what we do.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
