import { DefaultSeoProps } from "next-seo";

export const SEO_CONFIG: DefaultSeoProps = {
  title: "Aditya Sharma | Mobile & ML Developer",
  titleTemplate: "%s | Aditya Sharma",
  defaultTitle: "Aditya Sharma | Mobile & ML Developer",
  description:
    "Aditya Sharma - Mobile Developer & Machine Learning Engineer specializing in native Android apps (Kotlin/Compose) and on-device ML. View my portfolio and projects.",
  canonical: "https://adityasharma.me",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityasharma.me",
    title: "Aditya Sharma | Mobile & ML Developer",
    description:
      "Aditya Sharma - Mobile Developer & Machine Learning Engineer specializing in native Android apps (Kotlin/Compose) and on-device ML.",
    siteName: "Aditya Sharma - Mobile & ML Portfolio",
    images: [
      {
        url: "/cartoon-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya Sharma Portfolio Open Graph Image",
      },
    ],
    profile: {
      firstName: "Aditya",
      lastName: "Sharma",
      username: "sharmadecode",
      gender: "male",
    },
  },

  twitter: {
    handle: "@sharmadecode",
    site: "@sharmadecode",
    cardType: "summary_large_image",
  },

  additionalLinkTags: [
    {
      rel: "icon",
      href: "/cartoon-logo.jpg",
    },
    {
      rel: "apple-touch-icon",
      href: "/cartoon-logo.jpg",
      sizes: "76x76",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],

  additionalMetaTags: [
    {
      name: "viewport",
      content:
        "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
    {
      name: "application-name",
      content: "Aditya Sharma Portfolio",
    },
    {
      name: "keywords",
      content: [
        "Aditya Sharma",
        "Aditya Rakesh Sharma",
        "sharmadecode",
        "Aditya Sharma portfolio",
        "Mobile Developer",
        "Android Developer",
        "Machine Learning Engineer",
        "Kotlin Developer",
        "Jetpack Compose",
        "On-device ML",
        "TensorFlow Lite",
        "Mobile App Developer",
        "Software Engineer",
        "Computer Science Student",
        "Native Android",
      ].join(", "),
    },
    {
      name: "author",
      content: "Aditya Sharma",
    },
    {
      name: "google-site-verification",
      content: "tz6j6P-RKJ8gKkK34Fek_se07VIEbIriv3fg-EAW8OI",
    },
  ],
};

export const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aditya Sharma",
  alternateName: "Aditya Rakesh Sharma",
  url: "https://adityasharma.me",
  sameAs: [
    "https://github.com/sharmadecode",
    "https://www.linkedin.com/in/aditya-sharma-109718322",
    "https://twitter.com/sharmadecode",
  ],
  jobTitle: "Mobile Developer & ML Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  image: "https://adityasharma.me/cartoon-logo.jpg",
  description:
    "Aditya Sharma is an Android Developer & Machine Learning Engineer specializing in Kotlin, Jetpack Compose, and TensorFlow Lite.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  email: "mailto:adityarakeshsharma07@gmail.com",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/sharmadecode",
  linkedin: "https://www.linkedin.com/in/aditya-sharma-109718322",
  twitter: "https://twitter.com/sharmadecode",
  email: "mailto:adityarakeshsharma07@gmail.com",
  leetcode: "https://leetcode.com/sharmadecode",
};
