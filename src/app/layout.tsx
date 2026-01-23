import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/landing-page/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import { MusicToggleButton } from "@/components/cool-stuff/music-player";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Analytics } from "@vercel/analytics/next";
import { ModeToggle } from "@/components/cool-stuff/light-dark2.0";
import { CalendarCheckIcon } from "@/components/ui/calendar-check";
import OnekoCat from "@/components/OnekoCat";
import Link from "next/link";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// Separate viewport export for Next.js 14+
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  // Core metadata
  metadataBase: new URL("https://adityasharma.me"),
  title: {
    default: "Aditya Sharma (sharmadecode) | Mobile & ML Portfolio",
    template: "%s | Aditya Sharma",
  },
  description:
    "Aditya Sharma - Mobile Developer & Machine Learning Engineer. View my portfolio and projects.",

  // Comprehensive keywords targeting "Aditya" searches
  keywords: [
    "Aditya Sharma",
    "Aditya Rakesh Sharma",
    "sharmadecode",
    "sharmadecode portfolio",
    "Aditya Sharma portfolio",
    "Android developer",
    "Kotlin Developer",
    "Jetpack Compose",
    "Mobile App Developer",
    "Machine Learning Engineer",
    "SIH 2025 finalist",
    "BharatKrishi app",
    "JalSuraksha app",
    "On-device ML",
  ],

  // Authors and creators
  authors: [
    { name: "Aditya Sharma", url: "https://adityasharma.me" },
    { name: "Aditya", url: "https://adityasharma.me" },
  ],
  creator: "Aditya Sharma",
  publisher: "Aditya Sharma",

  // Generator and application info
  generator: "Next.js",
  applicationName: "Aditya Sharma Portfolio",
  referrer: "origin-when-cross-origin",

  // Category
  category: "technology",
  classification: "Portfolio",

  // Icons configuration
  icons: {
    icon: [
      { url: "/cartoon-logo.jpg", type: "image/jpeg" },
    ],
    shortcut: "/cartoon-logo.jpg",
    apple: [
      { url: "/cartoon-logo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
    other: [{ rel: "mask-icon", url: "/cartoon-logo.jpg", color: "#000000" }],
  },

  // Manifest
  manifest: "/manifest.json",

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },



  // Alternates and canonical
  alternates: {
    canonical: "https://adityasharma.me",
    languages: {
      "en-US": "https://adityasharma.me",
      en: "https://adityasharma.me",
    },
    types: {
      "application/rss+xml": "https://adityasharma.me/rss.xml",
      "application/atom+xml": "https://adityasharma.me/atom.xml",
    },
  },

  // Enhanced Open Graph
  openGraph: {
    type: "profile",
    title: "Aditya Sharma | Software Dev",
    description:
      "I'm Aditya Sharma, an Android & ML Engineer specializing in Kotlin, Jetpack Compose & Machine Learning. Explore my portfolio.",
    url: "https://adityasharma.me",
    siteName: "Aditya Sharma - Developer Portfolio",
    locale: "en_US",
    alternateLocale: ["en_GB"],
    countryName: "India",
    firstName: "Aditya",
    lastName: "Sharma",
    username: "sharmadecode",
    gender: "male",
    images: [
      {
        url: "/cartoon-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya Sharma - Android & ML Portfolio",
        type: "image/png",
        secureUrl:
          "/cartoon-logo.jpg",
      },
      {
        url: "/cartoon-logo.jpg",
        width: 600,
        height: 315,
        alt: "Aditya Sharma Portfolio",
      },
    ],
  },

  // Enhanced Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@sharmadecode",
    creator: "@sharmadecode",
    title: "Aditya Sharma | Software Dev",
    description:
      "Explore my portfolio - Android & ML Engineer specializing in Kotlin, Jetpack Compose, and Machine Learning. View projects & hire me for your next project.",
    images: {
      url: "/cartoon-logo.jpg",
      alt: "Aditya Sharma Portfolio Preview",
    },
  },

  // App Links for mobile
  appLinks: {
    web: {
      url: "https://adityasharma.me",
      should_fallback: true,
    },
  },

  // Other metadata
  other: {
    // LinkedIn specific
    "linkedin:owner": "aditya-sharma-109718322",

    // Pinterest
    "pinterest-rich-pin": "true",

    // Telegram
    "telegram:channel": "@sharmadecode",

    // Microsoft
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",

    // Apple
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Aditya Sharma",

    // Format detection
    "format-detection": "telephone=no",

    // Google
    "google-site-verification": "tz6j6P-RKJ8gKkK34Fek_se07VIEbIriv3fg-EAW8OI",

    // Revisit
    "revisit-after": "7 days",

    // Author info
    author: "Aditya Sharma",
    copyright: "© 2026 Aditya Sharma. All rights reserved.",
    designer: "Aditya Sharma",
    owner: "Aditya Sharma",

    // Geo targeting
    "geo.region": "IN",
    "geo.placename": "India",
    ICBM: "20.5937, 78.9629",

    // Dublin Core
    "DC.title": "Aditya Sharma - Android & ML Engineer",
    "DC.creator": "Aditya Sharma",
    "DC.subject": "Android Development, Machine Learning, Mobile Apps, Kotlin",
    "DC.description": "Portfolio of Aditya Sharma - Android & ML Engineer",
    "DC.publisher": "Aditya Sharma",
    "DC.contributor": "Aditya Sharma",
    "DC.type": "InteractiveResource",
    "DC.format": "text/html",
    "DC.identifier": "https://adityasharma.me",
    "DC.language": "en",
    "DC.coverage": "Worldwide",
    "DC.rights": "© 2026 Aditya Sharma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Comprehensive structured data for maximum SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aditya Sharma",
    alternateName: ["sharmadecode", "Aditya", "Aditya Rakesh Sharma"],
    url: "https://adityasharma.me",
    sameAs: [
      "https://github.com/sharmadecode",
      "https://www.linkedin.com/in/aditya-sharma-109718322",
      "https://x.com/sharmadecode",
    ],
    description:
      "Final-year Computer Science student focused on Android development and on-device machine learning.",
    knowsAbout: [
      "Android Development",
      "Jetpack Compose",
      "Kotlin",
      "On-device Machine Learning",
      "TensorFlow Lite",
      "Data Structures and Algorithms",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://adityasharma.me/#website",
    url: "https://adityasharma.me",
    name: "Aditya Sharma - Android & ML Portfolio",
    description:
      "Official portfolio website of Aditya Sharma - Android Developer & ML Engineer",
    publisher: {
      "@id": "https://adityasharma.me/#person",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://adityasharma.me/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://adityasharma.me/#profilepage",
    url: "https://adityasharma.me",
    name: "Aditya Sharma - Android & ML Engineer",
    description:
      "Portfolio of Aditya Sharma showcasing Android and Machine Learning projects.",
    mainEntity: {
      "@id": "https://adityasharma.me/#person",
    },
    datePublished: "2024-01-01",
    dateModified: "2026-01-11",
    inLanguage: "en-US",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://adityasharma.me",
      },
    ],
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://adityasharma.me/#portfolio",
    name: "Aditya Sharma's Developer Portfolio",
    creator: {
      "@id": "https://adityasharma.me/#person",
    },
    description:
      "A collection of projects by Aditya Sharma",
    url: "https://adityasharma.me/projects",
    inLanguage: "en-US",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://adityasharma.me/#organization",
    name: "Aditya Sharma",
    url: "https://adityasharma.me",
    logo: {
      "@type": "ImageObject",
      url: "https://adityasharma.me/cartoon-logo.jpg",
    },
    founder: {
      "@id": "https://adityasharma.me/#person",
    },
    sameAs: [
      "https://github.com/sharmadecode",
      "https://www.linkedin.com/in/aditya-sharma-109718322",
      "https://x.com/sharmadecode",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch */}

        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />

        {/* OpenSearch */}
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title="Aditya Sharma"
          href="/opensearch.xml"
        />

        {/* RSS/Atom Feeds */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Aditya Sharma RSS Feed"
          href="/rss.xml"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Aditya Sharma Atom Feed"
          href="/atom.xml"
        />

        {/* Humans.txt */}
        <link rel="author" href="/humans.txt" />

        {/* Canonical */}
        <link rel="canonical" href="https://adityasharma.me" />

        {/* Prefetch important pages */}
        <link rel="prefetch" href="/designs" />
        <style dangerouslySetInnerHTML={{
          __html: `
          nextjs-portal,
          #next-build-activity-indicator,
          [data-nextjs-toast],
          [data-nextjs-dev-tools-button],
          .nextjs-toast-errors-parent,
          div[class*="nextjs-portal"],
          div[aria-label="Next.js Dev Tools"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
            width: 0 !important;
            height: 0 !important;
            z-index: -9999 !important;
          }
        `}} />
      </head>
      <body className={`${montserrat.className} antialiased `} suppressHydrationWarning>
        {/* Person Schema */}
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {/* Website Schema */}
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* ProfilePage Schema */}
        <Script
          id="ld-profilepage"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema),
          }}
        />

        {/* Breadcrumb Schema */}
        <Script
          id="ld-breadcrumb"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        {/* Portfolio Schema */}
        <Script
          id="ld-portfolio"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(portfolioSchema),
          }}
        />

        {/* Organization Schema */}
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          <Analytics />
          {children} <Footer />
          <div className=" fixed bottom-4 right-4  flex flex-col items-center gap-2 z-50 ">
            <ModeToggle />
            <MusicToggleButton />
          </div>
          <OnekoCat />
        </ThemeProvider>
      </body>
    </html>
  );
}
