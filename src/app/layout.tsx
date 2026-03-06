import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aymorix - Innovating Software for Tomorrow",
  description:
    "Aymorix is a technology company crafting intelligent software products that transform how institutions operate, learn, and grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
