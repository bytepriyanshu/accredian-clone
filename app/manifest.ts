import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Accredian Enterprise",
    short_name: "Accredian Enterprise",
    description:
      "Accredian Enterprise helps organizations upskill their workforce through industry-leading certification programs and strategic learning solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2878ee",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
  };
}
