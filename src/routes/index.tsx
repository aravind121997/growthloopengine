import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GrowthLoop — Automate Your Lead Pipeline with AI" },
      {
        name: "description",
        content:
          "From instant capture to multi-channel nurturing, our centralized CRM hub turns fragmented interactions into a seamless conversion machine.",
      },
      { property: "og:title", content: "GrowthLoop — Automate Your Lead Pipeline with AI" },
      {
        property: "og:description",
        content:
          "From instant capture to multi-channel nurturing, our centralized CRM hub turns fragmented interactions into a seamless conversion machine.",
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
        <FlowIntro />
        <FlowSection />
      </main>
      <Footer />
    </div>
  );
}

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
];

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <MSIcon name="all_inclusive" className="text-[20px]" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">GrowthLoop</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#demo"
          className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition hover:bg-primary/90"
        >
          Book a Demo
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.94 0.06 265 / 0.9), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 py-28 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          AI Lead Pipeline
        </span>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Automate Your Lead
          <br />
          Pipeline with{" "}
          <span className="bg-gradient-to-br from-primary to-[oklch(0.65_0.22_285)] bg-clip-text text-transparent">
            AI
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          From instant capture to multi-channel nurturing, our centralized CRM hub turns
          fragmented interactions into a seamless conversion machine.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pipeline"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90"
          >
            Explore Pipeline
            <MSIcon name="arrow_forward" className="text-[18px]" />
          </a>
          <a
            href="#specs"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition hover:bg-accent"
          >
            View Integration Specs
          </a>
        </div>
      </div>
    </section>
  );
}

function FlowIntro() {
  return (
    <section id="pipeline" className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        How Leads Flow to Conversion
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
        Experience the power of our intelligent automation engine, seamlessly routing every
        interaction through a high-performance conversion loop.
      </p>
    </section>
  );
}

const features = [
  {
    icon: "hub",
    title: "AI Capture & Qualification",
    body: "Deploy conversational bots across WhatsApp, Instagram, and Web to instantly greet, qualify, and collect actionable intel from every source.",
    metric: "+45% Capture Rate",
  },
  {
    icon: "database",
    title: "Centralized CRM Hub",
    body: 'A single source of truth aggregating lead profiles, interaction histories, and real-time AI scoring driven by a "Smart Memory" architecture.',
    metric: "Zero Data Loss",
  },
  {
    icon: "timeline",
    title: "Automated Nurturing",
    body: "Behavior-based triggers and multi-channel drip sequences transform cold inquiries into hot, booking-ready leads automatically.",
    metric: "3x Conversion Speed",
  },
] as const;

function FlowSection() {
  return (
    <section className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            Architecture
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Intelligent Flow Management
          </h2>
          <p className="mt-4 text-muted-foreground">
            A seamless architecture for identifying intent, qualifying prospects, and securing
            bookings without human intervention.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  body,
  metric,
}: {
  icon: string;
  title: string;
  body: string;
  metric: string;
}) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
      <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
        <MSIcon name={icon} className="text-[26px]" />
      </div>
      <h3 className="font-display text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
        <MSIcon name="trending_up" className="text-[14px]" />
        {metric}
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                <MSIcon name="all_inclusive" className="text-[20px]" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">GrowthLoop</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Enterprise AI platform for modern lead generation and pipeline automation.
            </p>
          </div>
          <FooterCol
            heading="Product"
            links={["Features", "Integrations", "Pricing"]}
          />
          <FooterCol heading="Company" links={["About Us", "Careers", "Contact"]} />
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2024 GrowthLoop AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#terms" className="hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold tracking-wide text-foreground">
        {heading}
      </h4>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-foreground">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MSIcon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span
      className={`material-symbols-outlined leading-none ${className}`}
      style={{ fontFamily: '"Material Symbols Outlined"' }}
      aria-hidden
    >
      {name}
    </span>
  );
}
