import HeroContent from "@/components/landing-page/hero-section/main-text";
import Projects from "@/components/landing-page/projects";
import Script from "next/script";

// Homepage specific JSON-LD
const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://adityasharma.me/#webpage",
  url: "https://adityasharma.me",
  name: "Aditya Sharma - Android Developer & ML Enthusiast Portfolio",
  description:
    "Official portfolio of Aditya Sharma. Final-year CSE student specializing in Android, DSA & Machine Learning. View my projects, skills, and hire me.",
  isPartOf: {
    "@id": "https://adityasharma.me/#website",
  },
  about: {
    "@id": "https://adityasharma.me/#person",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://adityasharma.me/cartoon-logo.jpg",
  },
  datePublished: "2024-01-01",
  dateModified: "2026-01-11",
  inLanguage: "en-US",
  potentialAction: [
    {
      "@type": "ReadAction",
      target: ["https://adityasharma.me"],
    },
  ],
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".hero-description"],
  },
  sameAs: [
    "https://github.com/sharmadecode",
    "https://www.linkedin.com/in/aditya-sharma-109718322",
    "https://x.com/sharmadecode",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Aditya Sharma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aditya Sharma is an Android Developer and Machine Learning Engineer based in India. He specializes in building native Android applications using Kotlin/Jetpack Compose and integrating on-device ML models.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Aditya Sharma offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aditya Sharma offers native Android app development, on-device Machine Learning integration (TensorFlow Lite), and technical writing/research in AI.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Aditya Sharma use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aditya Sharma is proficient in Kotlin, Java, Python, C++, Android SDK (Jetpack Compose), TensorFlow Lite, and PostgreSQL.",
      },
    },
    {
      "@type": "Question",
      name: "How can I hire Aditya Sharma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can hire Aditya Sharma by reaching out via Email, LinkedIn, or GitHub directly from his portfolio.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Aditya Sharma located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aditya Sharma is based in India and works on innovative software solutions.",
      },
    },
  ],
};

const page = () => {
  return (
    <>
      {/* Homepage specific schema */}
      <Script
        id="ld-homepage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
      />

      {/* FAQ Schema for rich snippets */}
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="flex justify-center items-center">
        <HeroContent />
      </div>
    </>
  );
};

export default page;
