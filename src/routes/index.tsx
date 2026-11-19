import { createFileRoute } from "@tanstack/react-router";
import App from "../App.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Ahmad Tahir" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Ahmad Tahir, Software Engineer, No-Code & Low-Code Agentic AI Engineer, and Founder of MATalogics.",
      },
      { property: "og:title", content: "Muhammad Ahmad Tahir — Building Intelligent Systems" },
      {
        property: "og:description",
        content:
          "AI agents, automation systems, and scalable digital products by the Founder of MATalogics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});
