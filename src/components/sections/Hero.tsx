import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroLiveDemo } from "@/components/sections/HeroLiveDemo";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {/* Gradient Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.94 0.06 265 / 0.9), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 py-28 text-center">
        {/* Eyebrow Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          AI-First CRM for Revenue Automation
        </span>

        {/* Main Headline */}
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl sm:leading-[1.05] md:text-6xl lg:text-7xl">
          Stop Losing Revenue
          <br />
          Between Lead and{" "}
          <span className="bg-gradient-to-br from-primary to-[oklch(0.65_0.22_285)] bg-clip-text text-transparent">
            Sale
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Capture every enquiry. Qualify instantly. Follow up automatically. Identify buying
          intent. Route high-value opportunities to your team. Learn why deals are lost. And
          continuously improve conversion — from one intelligent CRM.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/#calculator"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90"
          >
            Calculate My Revenue Leakage
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/#how-it-works"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition hover:bg-accent"
          >
            See How It Works
          </Link>
        </div>

        {/* Live animated product preview — shows the capture-to-CRM loop in motion */}
        <HeroLiveDemo />
      </div>
    </section>
  );
}
