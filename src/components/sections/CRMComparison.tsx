import { Card } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

interface ComparisonItem {
  feature: string;
  traditional: string;
  aiFirst: string;
}

const comparisonItems: ComparisonItem[] = [
  {
    feature: 'Core Function',
    traditional: 'Stores data about what happened',
    aiFirst: 'Understands what happened and recommends what should happen next',
  },
  {
    feature: 'Data Updates',
    traditional: 'Manual entry + integrations (delayed)',
    aiFirst: 'Automatic capture from every conversation, real-time',
  },
  {
    feature: 'Lead Understanding',
    traditional: 'Shows what happened (transaction history)',
    aiFirst: 'Predicts intent and buying stage from conversation analysis',
  },
  {
    feature: 'Next Action',
    traditional: 'Salesperson decides (based on memory or intuition)',
    aiFirst: 'AI recommends next best action based on lead behavior and history',
  },
  {
    feature: 'Follow-up Execution',
    traditional: 'Depends on human memory and CRM discipline',
    aiFirst: 'Automated, behavior-triggered, multi-channel follow-up',
  },
  {
    feature: 'Deal Intelligence',
    traditional: 'Shows lost opportunities but no insight into why',
    aiFirst: 'Analyzes rejection patterns and recommends improvements',
  },
  {
    feature: 'Reporting',
    traditional: 'Retrospective (what happened yesterday)',
    aiFirst: 'Real-time intelligence (what should happen next)',
  },
  {
    feature: 'AI Involvement',
    traditional: 'None or basic chatbot for lead capture',
    aiFirst: 'End-to-end intelligent automation (capture → qualify → nurture → handoff)',
  },
];

export function CRMComparison() {
  return (
    <section id="compare" className="scroll-mt-20 border-b border-border/60 py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            A Traditional CRM Records the Journey.
            <br />
            An AI-First CRM Helps Move It Forward.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Here's the difference between storing customer data and acting on customer intelligence.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Headers — hidden on mobile since the grid collapses to one column;
                each row gets its own inline label there instead. */}
            <div className="hidden bg-secondary/40 border-b border-r border-border p-6 md:block">
              <h3 className="font-display font-semibold text-foreground">Feature</h3>
            </div>
            <div className="hidden bg-secondary/40 border-b border-r border-border p-6 md:block">
              <h3 className="font-display font-semibold text-foreground">Traditional CRM</h3>
            </div>
            <div className="hidden bg-primary/10 border-b border-border p-6 md:block">
              <h3 className="font-display font-semibold text-primary">GrowthLoopEngine</h3>
            </div>

            {/* Rows */}
            {comparisonItems.map((item, index) => (
              <div
                key={index}
                className={`contents ${index % 2 === 0 ? '' : 'bg-secondary/20'}`}
              >
                <div
                  className={`border-b border-r border-border p-6 ${
                    index % 2 === 0 ? '' : 'bg-secondary/20'
                  }`}
                >
                  <p className="font-semibold text-foreground">{item.feature}</p>
                </div>
                <div
                  className={`border-b border-r border-border p-6 text-sm text-muted-foreground ${
                    index % 2 === 0 ? '' : 'bg-secondary/20'
                  }`}
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground/70 md:hidden">
                    Traditional CRM
                  </p>
                  <p>{item.traditional}</p>
                </div>
                <div
                  className={`border-b border-border p-6 text-sm text-foreground ${
                    index % 2 === 0 ? 'bg-primary/5' : 'bg-primary/10'
                  }`}
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary md:hidden">
                    GrowthLoopEngine
                  </p>
                  <p className="font-medium">{item.aiFirst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/5 to-transparent p-6 text-center">
          <p className="text-muted-foreground mb-2">The bottom line:</p>
          <p className="font-display text-xl font-semibold text-foreground">
            Traditional CRMs are systems of record.
            <br />
            GrowthLoopEngine is a system of action.
          </p>
        </div>
      </div>
    </section>
  );
}
