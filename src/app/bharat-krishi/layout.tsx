import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "BharatKrishi Demo | Aditya Sharma",
    description:
        "Watch the BharatKrishi demo — Offline On-Device Crop Disease Detection using MobileViT & Transformer models. SIH 2025 Finalist project by Aditya Sharma.",
    openGraph: {
        title: "BharatKrishi Demo | Aditya Sharma",
        description:
            "Offline On-Device Crop Disease Detection using MobileViT & Transformer models. SIH 2025 Finalist.",
        url: "https://sharmadecode.vercel.app/bharat-krishi",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "BharatKrishi Demo | Aditya Sharma",
        description:
            "Offline On-Device Crop Disease Detection using MobileViT & Transformer models. SIH 2025 Finalist.",
    },
    alternates: {
        canonical: "https://sharmadecode.vercel.app/bharat-krishi",
    },
};

export default function BharatKrishiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
