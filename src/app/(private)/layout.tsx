import Sidebar from "@/components/menu";
import { siteConfig } from "@/config";
import { Providers } from "@/providers";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar content={[siteConfig.menuSections]} />
      <Providers>{children}</Providers>
    </>
  );
}
