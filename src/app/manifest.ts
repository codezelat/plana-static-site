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
        src: "/images/plan-a/plan-a-icon.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
