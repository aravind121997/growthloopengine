import { Card } from '@/components/ui/card';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingDown, AlertCircle } from 'lucide-react';

const lossReasons = [
  { name: 'Price Objection', value: 28, color: '#dc2626' },
  { name: 'Slow Response', value: 21, color: '#f97316' },
  { name: 'Wrong Targeting', value: 17, color: '#eab308' },
  { name: 'Competitor', value: 13, color: '#06b6d4' },
  { name: 'Poor Qualification', value: 9, color: '#8b5cf6' },
  { name: 'Location Mismatch', value: 7, color: '#ec4899' },
  { name: 'Other', value: 5, color: '#6b7280' },
];

const improvementRecommendations = [
  {
    issue: '28% Price Objection',
    recommendation: 'Add pricing FAQ to AI agent + offer financing alternatives',
    impact: 'Recover ~5-7% of lost leads',
  },
  {
    issue: '21% Slow Response',
    recommendation: 'Implement Voice AI for after-hours calls + WhatsApp auto-responses',
    impact: 'Recover ~4-5% of lost leads',
  },
  {
    issue: '17% Wrong Targeting',
    recommendation: 'Refine ad targeting criteria based on successful lead profiles',
    impact: 'Improve lead quality by ~8-10%',
  },
  {
    issue: '13% Competitor Chosen',
    recommendation: 'Add competitor comparison to qualification process + differentiation messaging',
    impact: 'Recover ~2-3% of lost leads',
  },
];

export function LostLeadIntelligence() {
  return (
    <section className="border-b border-border/60 py-20 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Your Lost Leads Are Telling You What To Fix
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Don't just report why deals are lost. Use AI to analyze patterns and turn that
            knowledge into action.
          </p>
        </div>

        {/* Analysis Section */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {/* Chart */}
          <Card className="p-6">
            <h3 className="font-display font-semibold text-foreground mb-6">
              Breakdown of 1,000 Lost Leads
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={lossReasons}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {lossReasons.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => `${value}% (${Math.round(value * 10)} leads)`}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Key Insights */}
          <div className="space-y-4">
            <Card className="p-4 bg-destructive/5 border-destructive/20">
              <div className="flex gap-3 items-start">
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">
                    Top Reason for Loss
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    28% of leads cite price concerns. These are often fixable with better
                    qualification or positioning.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-orange-500/5 border-orange-500/20">
              <div className="flex gap-3 items-start">
                <TrendingDown className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">
                    Speed Matters
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    21% lost due to slow response. First response within 2 minutes can reduce
                    this by 80%.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-blue-500/5 border-blue-500/20">
              <div className="flex gap-3 items-start">
                <div className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5 font-bold text-sm grid place-items-center">
                  📊
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">
                    Fixable Problems
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    79% of losses are from issues you can control (response, targeting, qualification).
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-16">
          <h3 className="font-display font-semibold text-foreground mb-6 text-lg">
            AI-Generated Action Plan
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {improvementRecommendations.map((rec, index) => (
              <Card key={index} className="p-6 border-primary/20">
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground text-sm">{rec.issue}</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                      Action
                    </p>
                    <p className="text-sm text-foreground">{rec.recommendation}</p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">
                      Potential Impact
                    </p>
                    <p className="text-sm font-medium text-primary">{rec.impact}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* The Cycle */}
        <div className="rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8">
          <h3 className="font-display font-semibold text-foreground mb-4">
            This Creates a Continuous Improvement Cycle
          </h3>
          <div className="grid gap-4 md:grid-cols-5 text-center text-sm">
            <div>
              <div className="font-display font-bold text-foreground">Lost Deal</div>
              <p className="text-xs text-muted-foreground mt-2">Lead doesn't convert</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-0.5 w-full bg-gradient-to-r from-primary to-transparent" />
            </div>
            <div>
              <div className="font-display font-bold text-foreground">Analysis</div>
              <p className="text-xs text-muted-foreground mt-2">AI finds root cause</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-0.5 w-full bg-gradient-to-r from-primary to-transparent" />
            </div>
            <div>
              <div className="font-display font-bold text-foreground">Action</div>
              <p className="text-xs text-muted-foreground mt-2">You improve process</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-0.5 w-full bg-gradient-to-r from-primary to-transparent" />
            </div>
            <div>
              <div className="font-display font-bold text-foreground">Next Lead</div>
              <p className="text-xs text-muted-foreground mt-2">Better conversion rate</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-foreground font-display font-semibold mb-3">
            Most CRMs report on lost deals. GrowthLoopEngine helps you fix them.
          </p>
          <p className="text-muted-foreground">
            Every lost lead is a data point. Every data point can become a win.
          </p>
        </div>
      </div>
    </section>
  );
}
