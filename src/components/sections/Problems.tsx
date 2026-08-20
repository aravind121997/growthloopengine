import { AlertCircle, Clock, Users, MessageSquare, Database, BarChart3 } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ProblemItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  consequence: string;
}

const problems: ProblemItem[] = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Leads Arrive After Hours',
    description: 'Prospects fill out forms, send messages, or call when your team is offline.',
    consequence: 'No one responds. The lead goes cold.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Manual Lead Assignment',
    description: 'Someone has to manually route leads to the right person, check their availability, and follow up.',
    consequence: 'Minutes become hours. Your competitor responds first.',
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'Salespeople Call Without Context',
    description: "Leads have to repeat their requirements because there's no conversation history visible to your team.",
    consequence: 'Bad customer experience. Higher objection rates. Lost trust.',
  },
  {
    icon: <AlertCircle className="h-6 w-6" />,
    title: 'Follow-ups Depend on Memory',
    description: 'Which leads need a follow-up? When? What message did we send last time? Who was supposed to call them?',
    consequence: 'Interested buyers disappear because nobody remembered to follow up.',
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Your CRM Becomes Stale',
    description: 'By the time data reaches your CRM, the information is already outdated. Events from yesterday appear in reports today.',
    consequence: "Management makes decisions based on yesterday's reality, not today's opportunities.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Lost Leads Disappear',
    description: 'A lead stops responding. A deal falls through. Nobody analyzes why. The same mistake happens again next month.',
    consequence: 'You never improve. You keep wasting money on the same leaks.',
  },
];

export function Problems() {
  return (
    <section className="border-b border-border/60 bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Your Leads Are Not the Problem.
            <br />
            What Happens After They Arrive Is.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Most businesses leak revenue at every stage between lead arrival and conversion.
            Here are the six most expensive leaks.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col group hover:shadow-lg transition-all hover:border-primary/50"
            >
              {/* Icon Container */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive group-hover:bg-destructive/20 transition">
                {problem.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {problem.description}
              </p>

              {/* Consequence (Highlighted) */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs font-semibold text-destructive uppercase tracking-wide">
                  The Result:
                </p>
                <p className="text-sm text-foreground font-medium mt-2">
                  {problem.consequence}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Revenue Leakage Visualization */}
        <div className="mt-16 rounded-2xl border border-border/60 bg-gradient-to-b from-card to-background p-8">
          <h3 className="font-display text-xl font-semibold text-foreground mb-8 text-center">
            How Revenue Leaks Through Your Pipeline
          </h3>

          <div className="space-y-4">
            {/* Pipeline Flow */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
              {[
                { stage: 'Leads Generated', count: 1000, revenue: '₹25L' },
                { stage: 'No Response', loss: '25%', revenue: '₹6.25L' },
                { stage: 'Slow Follow-up', loss: '21%', revenue: '₹5.25L' },
                { stage: 'Wrong Fit', loss: '17%', revenue: '₹4.25L' },
                { stage: 'Converted', count: '42', revenue: '₹2.1Cr' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="relative">
                    {item.loss ? (
                      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-center">
                        <p className="font-mono text-xs font-bold text-destructive">
                          {item.loss} LOST
                        </p>
                        <p className="text-sm font-semibold text-foreground mt-2">
                          {item.stage}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.revenue}
                        </p>
                      </div>
                    ) : (
                      <div className="rounded-lg border border-border bg-card p-4 text-center">
                        <p className="font-mono text-xs font-bold text-primary">
                          {item.count}
                        </p>
                        <p className="text-sm font-semibold text-foreground mt-2">
                          {item.stage}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.revenue}
                        </p>
                      </div>
                    )}
                  </div>
                  {i < 4 && (
                    <div className="hidden md:flex justify-center mt-3">
                      <div className="h-0.5 w-4 bg-gradient-to-r from-destructive to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-8 rounded-xl bg-gradient-to-r from-destructive/10 to-orange-500/10 border border-destructive/20 p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Without intelligent automation, you're losing:
              </p>
              <p className="font-display text-3xl font-bold text-destructive">
                ₹21.75 Lakhs Every Month
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                (Based on 1,000 leads/month at ₹50K average customer value)
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <p className="text-foreground font-medium mb-4">
            Every leak has a fix. Discover yours in the revenue leakage calculator above.
          </p>
        </div>
      </div>
    </section>
  );
}
