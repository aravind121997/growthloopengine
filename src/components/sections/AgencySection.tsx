import { Card } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Zap, BarChart3 } from 'lucide-react';

export function AgencySection() {
  return (
    <section id="agency" className="scroll-mt-20 border-b border-border/60 py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Your Agency Can Do More Than Generate Leads
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Become the agency that owns the entire journey from campaign click to customer
            revenue. Transform from a lead supplier into a revenue partner.
          </p>
        </div>

        {/* Before / After */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {/* BEFORE */}
          <Card className="p-8 border-destructive/20 bg-destructive/5">
            <h3 className="font-display font-semibold text-foreground mb-6">
              ❌ Traditional Agency Model
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-wide mb-3">
                  The Flow
                </p>
                <div className="space-y-2 text-sm">
                  <p>You create ads</p>
                  <p>→ Generate leads</p>
                  <p>→ Hand off to client</p>
                  <p>→ Hope they convert</p>
                  <p>→ Client reports mediocre results</p>
                </div>
              </div>
              <div className="border-t border-destructive/20 pt-4">
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-wide mb-3">
                  The Problem
                </p>
                <ul className="space-y-2 text-sm text-destructive">
                  <li>✗ No visibility into what happens after the lead</li>
                  <li>✗ Can't improve campaigns without conversion data</li>
                  <li>✗ Client retention is weak (leads don't convert)</li>
                  <li>✗ Can't prove ROI beyond lead count</li>
                  <li>✗ No differentiation from other agencies</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* AFTER */}
          <Card className="p-8 border-primary/30 bg-primary/5">
            <h3 className="font-display font-semibold text-foreground mb-6">
              ✅ GrowthLoopEngine Agency Model
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-mono text-primary uppercase tracking-wide mb-3">
                  The Flow
                </p>
                <div className="space-y-2 text-sm">
                  <p>You create ads</p>
                  <p>→ AI captures leads instantly</p>
                  <p>→ AI qualifies automatically</p>
                  <p>→ AI nurtures until ready</p>
                  <p>→ Warm handoff to client</p>
                  <p>→ Full attribution & ROI proof</p>
                </div>
              </div>
              <div className="border-t border-primary/20 pt-4">
                <p className="text-sm font-mono text-primary uppercase tracking-wide mb-3">
                  The Advantage
                </p>
                <ul className="space-y-2 text-sm text-primary">
                  <li>✓ Full visibility into lead-to-revenue funnel</li>
                  <li>✓ Data-driven campaign improvements</li>
                  <li>✓ Higher client conversion = higher retention</li>
                  <li>✓ Prove measurable ROI, not just clicks</li>
                  <li>✓ Become a trusted revenue partner, not just ad buyer</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Agency Benefits */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <Card className="p-6 hover:shadow-lg hover:border-primary/50 transition">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">
              Higher Lead Quality
            </h3>
            <p className="text-sm text-muted-foreground">
              AI qualifies leads before they reach your client, so clients only work with
              genuinely interested prospects.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg hover:border-primary/50 transition">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">
              Faster Response
            </h3>
            <p className="text-sm text-muted-foreground">
              Leads are engaged within minutes, not hours. This dramatically improves conversion
              rates — and your ROI proof.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg hover:border-primary/50 transition">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">
              Stronger Reporting
            </h3>
            <p className="text-sm text-muted-foreground">
              Show clients campaign-to-revenue attribution. Prove your ads drive not just clicks,
              but actual customers.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg hover:border-primary/50 transition">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">
              Better Client Retention
            </h3>
            <p className="text-sm text-muted-foreground">
              When clients see higher conversion rates and measurable revenue impact, they stay
              longer and spend more.
            </p>
          </Card>
        </div>

        {/* New Revenue Stream */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-transparent border-primary/30 mb-16">
          <h3 className="font-display text-xl font-semibold text-foreground mb-4">
            💰 New Revenue Stream: AI/Automation Service
          </h3>
          <p className="text-muted-foreground mb-6">
            GrowthLoopEngine becomes a new service line for your agency. You can offer clients:
          </p>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div>
              <p className="font-semibold text-foreground mb-2">AI Lead Qualification</p>
              <p className="text-muted-foreground">Charge monthly per lead or percentage of conversions</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Lead Nurturing Automation</p>
              <p className="text-muted-foreground">Monthly automation service retainer</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Revenue Intelligence</p>
              <p className="text-muted-foreground">Premium analytics and optimization recommendations</p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="font-display text-lg font-semibold text-foreground">
            Ready to transform your agency into a revenue partner?
          </p>
          <Button
            size="lg"
            className="h-auto whitespace-normal rounded-full px-6 py-3 shadow-lg shadow-primary/25 sm:whitespace-nowrap"
            asChild
          >
            <Link to="/#calculator">Calculate My Revenue Impact</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
