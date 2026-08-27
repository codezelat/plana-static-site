import type { MetadataRoute } from "next";
import { services, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = ["", "/services", "/portfolio", "/about", "/contact"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  return [...coreRoutes, ...serviceRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-08-27"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.8,
  }));
}
