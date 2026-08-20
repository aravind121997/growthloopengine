import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — GrowthLoopEngine" },
      {
        name: "description",
        content: "How GrowthLoopEngine collects, uses, and protects your data.",
      },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Information We Collect
            </h2>
            <p className="mt-2">
              We collect information you provide directly to us — such as contact details and
              business information submitted through our forms and calculators — as well as
              usage data collected automatically when you interact with our site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              How We Use Information
            </h2>
            <p className="mt-2">
              We use the information we collect to operate and improve our product, respond to
              inquiries, and communicate with you about GrowthLoopEngine. We do not sell your
              personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Data Security</h2>
            <p className="mt-2">
              We take reasonable technical and organizational measures to protect the
              information we hold from unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Your Rights</h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your personal data at
              any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Questions about this policy? Reach out to our team through the channels listed on
              our homepage.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
