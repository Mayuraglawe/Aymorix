import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aymorix.com'),
  title: 'Aymorix - Enterprise Software & AI Workflows',
  description: 'Aymorix is a deep-tech agency engineering cloud-native, enterprise-grade platforms.',
  alternates: {
    canonical: '/',
  },
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
  const cssRecoveryScript = `
    (function () {
      function recoverStyles() {
        try {
          var brand = getComputedStyle(document.documentElement).getPropertyValue('--color-brand').trim();
          if (brand) return;

          var links = Array.prototype.slice
            .call(document.querySelectorAll('link[rel="stylesheet"]'))
            .filter(function (link) {
              return link.href && link.href.indexOf('/_next/static/css/') !== -1;
            });

          if (!links.length) return;

          var stamp = Date.now().toString();
          links.forEach(function (link) {
            try {
              var url = new URL(link.href, window.location.origin);
              url.searchParams.set('v', stamp);
              var fresh = link.cloneNode(true);
              fresh.href = url.toString();
              if (link.parentNode) {
                link.parentNode.replaceChild(fresh, link);
              }
            } catch (_) {}
          });
        } catch (_) {}
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', recoverStyles, { once: true });
      } else {
        recoverStyles();
      }

      window.setTimeout(recoverStyles, 900);
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning className={`${bricolage.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased text-ink bg-white" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: cssRecoveryScript }} />
        {children}
      </body>
    </html>
  );
}
