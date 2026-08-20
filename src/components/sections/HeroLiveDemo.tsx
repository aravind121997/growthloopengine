import { useEffect, useState } from "react";
import { Bot, CheckCircle2, TrendingUp } from "lucide-react";

// Number of steps in the loop, and how long (ms) each step stays on screen
// before advancing to the next one.
const STEP_DURATIONS = [500, 900, 1100, 1300, 1300, 1600] as const;
const LAST_STEP = STEP_DURATIONS.length - 1;
const FADE_MS = 450;

export function HeroLiveDemo() {
  const [step, setStep] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (step < LAST_STEP) {
      const t = setTimeout(() => setStep((s) => s + 1), STEP_DURATIONS[step]);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setFading(true), STEP_DURATIONS[step]);
    return () => clearTimeout(t);
  }, [step]);

  useEffect(() => {
    if (!fading) return;
    const t = setTimeout(() => {
      setFading(false);
      setStep(0);
    }, FADE_MS);
    return () => clearTimeout(t);
  }, [fading]);

  const show = (threshold: number) => step >= threshold;

  return (
    <div className="mx-auto mt-16 max-w-3xl">
      <div className="relative rounded-2xl border border-border/60 bg-gradient-to-b from-card to-background p-6 shadow-xl sm:p-8">
        {/* Live badge */}
        <div className="mb-6 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Live Product Preview
          </span>
          <span className="text-[11px] text-muted-foreground">WhatsApp Lead</span>
        </div>

        <div
          className="min-h-[280px] space-y-3 transition-opacity duration-500 ease-in-out"
          style={{ opacity: fading ? 0 : 1 }}
        >
          {/* Customer message */}
          <div
            className="flex justify-end transition-all duration-500 ease-out"
            style={{
              opacity: show(1) ? 1 : 0,
              transform: show(1) ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-secondary px-4 py-2.5 text-sm text-foreground">
              Hi! Interested in the 3BHK in Bandra — what's the price?
            </div>
          </div>

          {/* Typing indicator */}
          <div
            className="flex justify-start transition-all duration-300 ease-out"
            style={{ opacity: show(2) && !show(3) ? 1 : 0 }}
          >
            <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-primary/10 px-4 py-3">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
            </div>
          </div>

          {/* AI reply */}
          <div
            className="flex justify-start transition-all duration-500 ease-out"
            style={{
              opacity: show(3) ? 1 : 0,
              transform: show(3) ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-primary/10 px-4 py-2.5 text-sm text-foreground">
              <div className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                <Bot className="h-3 w-3" /> AI Agent · responded in 8s
              </div>
              It's ₹1.2Cr, ready to move in. Want me to book a site visit this Saturday?
            </div>
          </div>

          {/* Score panel */}
          <div
            className="pt-2 transition-all duration-500 ease-out"
            style={{
              opacity: show(4) ? 1 : 0,
              transform: show(4) ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <div className="rounded-xl border border-border/60 bg-background/60 p-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5 text-primary" /> Intent Score
                </span>
                <span className="font-display text-sm font-bold text-foreground">92</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-[1200ms] ease-out"
                  style={{ width: show(4) ? "92%" : "0%" }}
                />
              </div>
            </div>
          </div>

          {/* Status chip */}
          <div
            className="flex justify-center pt-1 transition-all duration-500 ease-out"
            style={{
              opacity: show(5) ? 1 : 0,
              transform: show(5) ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              Hot Lead — assigned to sales, CRM updated automatically
            </span>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          Simulated preview — illustrative of a real conversation
        </div>
      </div>
    </div>
  );
}
