import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/growthloop-logo.jpeg.asset.json";

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
        <Flow3D />
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
        <a href="/" className="flex items-center gap-2" aria-label="GrowthLoop home">
          <img
            src={logoAsset.url}
            alt="GrowthLoop logo"
            className="h-9 w-auto object-contain"
          />
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
            <img
              src={logoAsset.url}
              alt="GrowthLoop logo"
              className="h-10 w-auto object-contain"
            />
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

const flowNodes = [
  {
    icon: "hub",
    label: "Capture",
    sub: "WhatsApp · IG · Web",
    depth: -60,
  },
  {
    icon: "database",
    label: "CRM Core",
    sub: "Smart Memory",
    depth: 40,
  },
  {
    icon: "rocket_launch",
    label: "Convert",
    sub: "Auto Nurture",
    depth: -60,
  },
] as const;

function Flow3D() {
  return (
    <section
      aria-label="3D pipeline flow"
      className="relative overflow-hidden border-y border-border/60 bg-gradient-to-b from-background via-[oklch(0.97_0.04_300)] to-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.7 0.25 300 / 0.35), transparent 55%), radial-gradient(circle at 80% 70%, oklch(0.55 0.28 285 / 0.25), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div
          className="mx-auto"
          style={{ perspective: "1400px", perspectiveOrigin: "50% 40%" }}
        >
          <div
            className="relative mx-auto h-[420px] w-full max-w-4xl"
            style={{
              transform: "rotateX(22deg) rotateZ(-2deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Grid plane */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-[240px] rounded-[40px] border border-primary/20"
              style={{
                transform: "translateZ(-40px)",
                backgroundImage:
                  "linear-gradient(oklch(0.55 0.28 300 / 0.18) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.28 300 / 0.18) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage:
                  "radial-gradient(ellipse at center, black 55%, transparent 85%)",
              }}
            />

            {/* Connecting SVG (flat but in 3D space) */}
            <svg
              aria-hidden
              viewBox="0 0 800 260"
              className="absolute left-1/2 top-[110px] h-[260px] w-[92%] -translate-x-1/2"
              style={{ transform: "translate(-50%, 0) translateZ(20px)" }}
            >
              <defs>
                <linearGradient id="flowLine" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="oklch(0.55 0.28 300)" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="oklch(0.6 0.28 295)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="oklch(0.55 0.28 300)" stopOpacity="0.15" />
                </linearGradient>
                <radialGradient id="packet" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="oklch(0.98 0.05 300)" />
                  <stop offset="60%" stopColor="oklch(0.7 0.28 300)" />
                  <stop offset="100%" stopColor="oklch(0.55 0.28 300 / 0)" />
                </radialGradient>
              </defs>
              <path
                id="flowPath"
                d="M 90 200 C 220 40, 380 40, 400 130 C 420 220, 580 220, 710 60"
                fill="none"
                stroke="url(#flowLine)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {[0, 1.2, 2.4, 3.6].map((delay) => (
                <circle key={delay} r="7" fill="url(#packet)">
                  <animateMotion
                    dur="4.8s"
                    repeatCount="indefinite"
                    begin={`${delay}s`}
                    rotate="auto"
                  >
                    <mpath href="#flowPath" />
                  </animateMotion>
                </circle>
              ))}
            </svg>

            {/* Floating 3D nodes */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              {flowNodes.map((n, i) => (
                <FlowNode key={n.label} node={n} index={i} />
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Live pipeline · leads move in real time
        </p>
      </div>

      <style>{`
        @keyframes gl-float {
          0%, 100% { transform: translateZ(var(--z, 0px)) translateY(0px); }
          50%      { transform: translateZ(var(--z, 0px)) translateY(-14px); }
        }
      `}</style>
    </section>
  );
}

function FlowNode({
  node,
  index,
}: {
  node: (typeof flowNodes)[number];
  index: number;
}) {
  return (
    <div
      className="relative"
      style={{
        transformStyle: "preserve-3d",
        // @ts-expect-error CSS variable
        "--z": `${node.depth}px`,
        animation: `gl-float 5.5s ease-in-out ${index * 0.6}s infinite`,
      }}
    >
      {/* Shadow on the grid plane */}
      <div
        aria-hidden
        className="absolute left-1/2 top-full h-6 w-28 -translate-x-1/2 translate-y-6 rounded-full bg-primary/30 blur-2xl"
      />
      {/* Card */}
      <div
        className="relative w-44 rounded-2xl border border-primary/30 bg-card/90 p-5 shadow-[0_20px_60px_-15px_oklch(0.55_0.28_300/0.5)] backdrop-blur"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.98 0.02 300 / 0.9), oklch(0.92 0.08 300 / 0.4))",
            transform: "translateZ(-1px)",
          }}
        />
        <div className="relative">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.45_0.28_290)] text-primary-foreground shadow-lg shadow-primary/40">
            <MSIcon name={node.icon} className="text-[22px]" />
          </div>
          <div className="mt-4 font-display text-base font-bold tracking-tight">
            {node.label}
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {node.sub}
          </div>
        </div>
      </div>
    </div>
  );
}
