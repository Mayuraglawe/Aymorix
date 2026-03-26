// This file adds JSON-LD structured data to the home page using the Next.js App Router head.tsx convention.
// It will only affect the home page and will not cause hydration errors.

export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Aymorix",
            "url": "https://aymorix.com/",
            "logo": "/Aymorix_logo2.png",
            "description": "Aymorix is a deep-tech agency engineering cloud-native, enterprise-grade platforms."
          })
        }}
      />
    </>
  );
}
