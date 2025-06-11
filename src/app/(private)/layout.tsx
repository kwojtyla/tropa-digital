import { siteConfig } from "@/config";
import type { Metadata } from "next";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    { name: "Karol Wojtyla", url: "https://www.linkedin.com/in/karolwojtyla/" },
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
  icons: "/favicon.ico",
  generator: "Next.js",
  category: "website",
  metadataBase: new URL(siteConfig.url),
  manifest: "/manifest.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
};

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientLayout menuContent={[siteConfig.menuSections]}>
      {children}
    </ClientLayout>
  );
}
