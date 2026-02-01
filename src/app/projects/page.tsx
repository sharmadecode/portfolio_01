import ProjectsTabs from "@/components/smart-one/projects-tab";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Aditya Sharma - Mobile & ML Developer",
  description:
    "Explore Aditya Sharma's portfolio of Android development and Machine Learning projects. View mobile apps built with Kotlin, Jetpack Compose, TensorFlow Lite, and more.",
  keywords: [
    "Aditya Sharma projects",
    "Android projects",
    "Machine Learning projects",
    "Kotlin projects",
    "Jetpack Compose apps",
    "TensorFlow Lite",
    "Mobile app portfolio",
    "On-device ML",
    "sharmadecode projects",
  ],
  alternates: {
    canonical: "https://sharmadecode.vercel.app/projects",
  },
  openGraph: {
    title: "Projects | Aditya Sharma - Mobile & ML Developer",
    description:
      "Explore my portfolio of Android development and Machine Learning projects built with Kotlin, Jetpack Compose, and TensorFlow Lite.",
    url: "https://sharmadecode.vercel.app/projects",
    type: "website",
    images: [
      {
        url: "https://sharmadecode.vercel.app/cartoon-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya Sharma Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Aditya Sharma",
    description: "View my Android development and Machine Learning projects.",
    images: [
      "https://sharmadecode.vercel.app/cartoon-logo.jpg",
    ],
  },
};

const Projects = () => {
  return (
    <div className="flex justify-center pt-5">
      <ProjectsTabs num1={0} num2={undefined} />
    </div>
  );
};

export default Projects;
