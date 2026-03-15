import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aymorix - Innovating Software for Tomorrow",
  description:
    "Aymorix is a technology company crafting intelligent software products that transform how institutions operate, learn, and grow.",
  icons: {
    icon: "/aymorix-logo.svg",
    shortcut: "/aymorix-logo.svg",
  },
  openGraph: {
    type: "website",
    url: "https://aymorix.com",
    title: "Aymorix - Innovating Software for Tomorrow",
    description:
      "Aymorix crafts intelligent software products — starting with Academic Compass, a smart timetable & curriculum management platform for colleges.",
    siteName: "Aymorix",
    images: [
      {
        url: "/aymorix-logo.svg",
        width: 1200,
        height: 630,
        alt: "Aymorix Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aymorix - Innovating Software for Tomorrow",
    description:
      "Intelligent software products that transform how institutions operate and grow.",
    images: ["/aymorix-logo.svg"],
  },
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
