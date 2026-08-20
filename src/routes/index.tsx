import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { RevenueCalculator } from "@/components/sections/RevenueCalculator";
import { Problems } from "@/components/sections/Problems";
import { CRMComparison } from "@/components/sections/CRMComparison";
import { PlatformLoop } from "@/components/sections/PlatformLoop";
import { AgencySection } from "@/components/sections/AgencySection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GrowthLoopEngine — Stop Losing Revenue Between Lead and Sale" },
      {
        name: "description",
        content:
          "Capture every enquiry. Qualify instantly. Follow up automatically. Turn every lead into an intelligent customer journey. GrowthLoopEngine is an AI-first CRM that stops revenue leakage.",
      },
      {
        property: "og:title",
        content: "GrowthLoopEngine — Stop Losing Revenue Between Lead and Sale",
      },
      {
        property: "og:description",
        content:
          "Capture every enquiry. Qualify instantly. Follow up automatically. Turn every lead into an intelligent customer journey.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Problems />
        <RevenueCalculator />
        <CRMComparison />
        <PlatformLoop />
        <AgencySection />
      </main>
      <Footer />
    </div>
  );
}
