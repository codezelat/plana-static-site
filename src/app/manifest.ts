import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Plan A Event Management Sri Lanka",
    short_name: "Plan A",
    description:
      "Event management for corporate events, conferences, ceremonies, weddings and activations in Sri Lanka.",
    start_url: "/",
    display: "standalone",
    background_color: "#05080d",
    theme_color: "#05080d",
    icons: [
      {
        src: "/images/plan-a/plan-a-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/plan-a/plan-a-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
