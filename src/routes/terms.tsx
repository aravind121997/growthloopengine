import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — GrowthLoopEngine" },
      {
        name: "description",
        content: "The terms that govern your use of GrowthLoopEngine.",
      },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Acceptance of Terms
            </h2>
            <p className="mt-2">
              By accessing or using GrowthLoopEngine, you agree to be bound by these terms. If
              you do not agree, please do not use the site or product.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Use of Service</h2>
            <p className="mt-2">
              GrowthLoopEngine is provided for evaluating and using our lead management and
              revenue automation platform. You agree not to misuse the service or attempt to
              disrupt its normal operation.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Calculator & Estimates
            </h2>
            <p className="mt-2">
              Figures produced by our revenue leakage calculator are illustrative estimates
              based on the inputs you provide. They are not a guarantee of results.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Changes to These Terms
            </h2>
            <p className="mt-2">
              We may update these terms from time to time. Continued use of the site after
              changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Questions about these terms? Reach out to our team through the channels listed on
              our homepage.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
