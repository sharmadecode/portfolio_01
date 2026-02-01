import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/landing-page/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import { MusicToggleButton } from "@/components/cool-stuff/music-player";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { ModeToggle } from "@/components/cool-stuff/light-dark2.0";
import OnekoCat from "@/components/OnekoCat";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

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
  metadataBase: new URL("https://sharmadecode.vercel.app"),
  title: {
    default: "Aditya Sharma (sharmadecode) | Mobile & ML Portfolio",
    template: "%s | Aditya Sharma",
  },
  description:
    "Aditya Sharma - Mobile Developer & Machine Learning Engineer from GGSIPU (GNIT), Greater Noida. B.Tech CSE student specializing in Android & on-device ML. View my portfolio and projects.",

  keywords: [
    "Aditya Sharma",
    "Aditya Rakesh Sharma",
    "sharmadecode",
    "sharmadecode portfolio",
    "Aditya Sharma portfolio",
    "Aditya Sharma developer",
    "Aditya Sharma GGSIPU",
    "Aditya Sharma GNIT",
    "Android developer",
    "Android developer India",
    "Kotlin Developer",
    "Jetpack Compose",
    "Jetpack Compose developer",
    "Mobile App Developer",
    "Mobile App Developer India",
    "Machine Learning Engineer",
    "ML Engineer India",
    "SIH 2025 finalist",
    "Smart India Hackathon finalist",
    "BharatKrishi app",
    "JalSuraksha app",
    "On-device ML",
    "TensorFlow Lite developer",
    "GGSIPU developer",
    "GGSIPU student portfolio",
    "GNIT Greater Noida",
    "Greater Noida developer",
    "Delhi NCR developer",
    "B.Tech CSE student",
  ],

  authors: [
    { name: "Aditya Sharma", url: "https://sharmadecode.vercel.app" },
    { name: "Aditya", url: "https://sharmadecode.vercel.app" },
  ],
  creator: "Aditya Sharma",
  publisher: "Aditya Sharma",

  generator: "Next.js",
  applicationName: "Aditya Sharma Portfolio",
  referrer: "origin-when-cross-origin",

  category: "technology",
  classification: "Portfolio",

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

  manifest: "/manifest.json",

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

  alternates: {
    canonical: "https://sharmadecode.vercel.app",
    languages: {
      "en-US": "https://sharmadecode.vercel.app",
      en: "https://sharmadecode.vercel.app",
    },

  },

  openGraph: {
    type: "profile",
    title: "Aditya Sharma | Software Dev",
    description:
      "I'm Aditya Sharma, an Android & ML Engineer specializing in Kotlin, Jetpack Compose & Machine Learning. Explore my portfolio.",
    url: "https://sharmadecode.vercel.app",
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

  appLinks: {
    web: {
      url: "https://sharmadecode.vercel.app",
      should_fallback: true,
    },
  },

  other: {
    "linkedin:owner": "aditya-sharma-109718322",
    "pinterest-rich-pin": "true",
    "telegram:channel": "@sharmadecode",
    "msapplication-TileColor": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Aditya Sharma",
    "format-detection": "telephone=no",
    "google-site-verification": "tz6j6P-RKJ8gKkK34Fek_se07VIEbIriv3fg-EAW8OI",
    "revisit-after": "7 days",
    author: "Aditya Sharma",
    copyright: "© 2026 Aditya Sharma. All rights reserved.",
    designer: "Aditya Sharma",
    owner: "Aditya Sharma",
    "geo.region": "IN",
    "geo.placename": "India",
    ICBM: "20.5937, 78.9629",
    "DC.title": "Aditya Sharma - Android & ML Engineer",
    "DC.creator": "Aditya Sharma",
    "DC.subject": "Android Development, Machine Learning, Mobile Apps, Kotlin",
    "DC.description": "Portfolio of Aditya Sharma - Android & ML Engineer",
    "DC.publisher": "Aditya Sharma",
    "DC.contributor": "Aditya Sharma",
    "DC.type": "InteractiveResource",
    "DC.format": "text/html",
    "DC.identifier": "https://sharmadecode.vercel.app",
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://sharmadecode.vercel.app/#person",
    name: "Aditya Sharma",
    givenName: "Aditya",
    familyName: "Sharma",
    alternateName: ["sharmadecode", "Aditya", "Aditya Rakesh Sharma", "Aditya Sharma GGSIPU"],
    url: "https://sharmadecode.vercel.app",
    image: "https://sharmadecode.vercel.app/logo.jpg",
    email: "adityarakeshsharma07@gmail.com",
    jobTitle: "Android Developer & ML Engineer",
    sameAs: [
      "https://github.com/sharmadecode",
      "https://www.linkedin.com/in/aditya-sharma-109718322",
      "https://x.com/sharmadecode",
      "https://leetcode.com/sharmadecode",
    ],
    description:
      "B.Tech Computer Science student at GGSIPU (GNIT), Greater Noida. Specializing in Android development with Kotlin/Jetpack Compose and on-device Machine Learning. SIH 2025 Finalist.",
    knowsAbout: [
      "Android Development",
      "Jetpack Compose",
      "Kotlin",
      "On-device Machine Learning",
      "TensorFlow Lite",
      "Data Structures and Algorithms",
      "Spring Boot",
      "Firebase",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Guru Gobind Singh Indraprastha University",
      alternateName: "GGSIPU",
      sameAs: "https://www.ipu.ac.in/",
    },
    worksFor: {
      "@type": "EducationalOrganization",
      name: "Greater Noida Institute of Technology",
      alternateName: "GNIT",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Greater Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "India",
    },
    nationality: "Indian",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://sharmadecode.vercel.app/#website",
    url: "https://sharmadecode.vercel.app",
    name: "Aditya Sharma - Android & ML Portfolio",
    description:
      "Official portfolio website of Aditya Sharma - Android Developer & ML Engineer",
    publisher: {
      "@id": "https://sharmadecode.vercel.app/#person",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://sharmadecode.vercel.app/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://sharmadecode.vercel.app/#profilepage",
    url: "https://sharmadecode.vercel.app",
    name: "Aditya Sharma - Android & ML Engineer",
    description:
      "Portfolio of Aditya Sharma showcasing Android and Machine Learning projects.",
    mainEntity: {
      "@id": "https://sharmadecode.vercel.app/#person",
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
        item: "https://sharmadecode.vercel.app",
      },
    ],
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://sharmadecode.vercel.app/#portfolio",
    name: "Aditya Sharma's Developer Portfolio",
    creator: {
      "@id": "https://sharmadecode.vercel.app/#person",
    },
    description:
      "A collection of projects by Aditya Sharma",
    url: "https://sharmadecode.vercel.app/projects",
    inLanguage: "en-US",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://sharmadecode.vercel.app/#organization",
    name: "Aditya Sharma",
    url: "https://sharmadecode.vercel.app",
    logo: {
      "@type": "ImageObject",
      url: "https://sharmadecode.vercel.app/cartoon-logo.jpg",
    },
    founder: {
      "@id": "https://sharmadecode.vercel.app/#person",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />

        {/* Prefetch batman image for smooth theme transitions - desktop only */}
        <link rel="prefetch" href="/batman.png" as="image" type="image/png" media="(min-width: 768px)" />

        <link rel="canonical" href="https://sharmadecode.vercel.app" />
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
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Script
          id="ld-profilepage"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema),
          }}
        />

        <Script
          id="ld-breadcrumb"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        <Script
          id="ld-portfolio"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(portfolioSchema),
          }}
        />

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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          <Analytics />
          {children} <Footer />
          <div className="fixed bottom-4 right-4 flex flex-col items-center gap-2 z-50">
            <ModeToggle />
            <MusicToggleButton />
          </div>
          <OnekoCat />
        </ThemeProvider>
      </body>
    </html>
  );
}
