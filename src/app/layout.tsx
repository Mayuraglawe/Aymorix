import type { Metadata } from 'next';
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Aymorix - Enterprise Software & AI Workflows',
  description: 'Aymorix is a deep-tech agency engineering cloud-native, enterprise-grade platforms.',
  icons: {
    icon: '/Aymorix_logo2.png',
    shortcut: '/Aymorix_logo2.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${bricolage.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased text-ink bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
