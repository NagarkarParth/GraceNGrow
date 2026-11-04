import type {MetadataRoute} from "next";
import {siteUrl} from "@/lib/seo";

const pages = ["", "/about", "/services", "/portfolio", "/clients", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: new URL(path || "/", siteUrl).toString(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
