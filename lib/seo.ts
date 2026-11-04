import type {Metadata} from "next";

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gracengrow.in");

const socialImage = "/images/teal-grace-grow-marketing.png";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const pageTitle = `${title} | Grace N Grow Marketing`;

  return {
    title,
    description,
    alternates: {canonical: path},
    openGraph: {
      type: "website",
      url: path,
      siteName: "Grace N Grow Marketing",
      title: pageTitle,
      description,
      images: [{url: socialImage, alt: "Grace N Grow Marketing logo"}],
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description,
      images: [socialImage],
    },
  };
}
