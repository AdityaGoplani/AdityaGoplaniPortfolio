import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya Goplani — Frontend Developer" },
      {
        name: "description",
        content:
          "Portfolio of Aditya Goplani — Frontend Developer specialising in React.js, building responsive, user-centric applications.",
      },
      { property: "og:title", content: "Aditya Goplani — Frontend Developer" },
      {
        property: "og:description",
        content:
          "React.js developer building responsive, scalable web applications. Explore projects, experience, and skills.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
