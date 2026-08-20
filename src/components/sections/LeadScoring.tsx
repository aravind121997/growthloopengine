import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';

interface LeadExample {
  name: string;
  score: number;
  signals: string[];
  recommendation: string;
  status: 'hot' | 'warm' | 'cold';
}

const leadExamples: LeadExample[] = [
  {
    name: 'Priya Sharma',
    score: 92,
    signals: [
      'Viewed pricing page 3 times',
      'Replied to WhatsApp message within 2 min',
      'Asked about availability',
      'Requested a demo call',
      'Opened brochure + property details',
      'Visited website twice this week',
    ],
    recommendation: 'HOT — Sales intervention recommended NOW',
    status: 'hot',
  },
  {
    name: 'Rahul Verma',
    score: 58,
    signals: [
      'Submitted form yesterday',
      'Opened 1 email',
      'Has not replied to messages',
      'Viewed property once',
      'No follow-up interaction',
    ],
    recommendation: 'WARM — Continue automated nurture. Monitor closely.',
    status: 'warm',
  },
  {
    name: 'Amit Gupta',
    score: 31,
    signals: [
      'Clicked ad 2 weeks ago',
      'Visited website once',
      'Did not fill form',
      'No email opens',
      'No message replies',
      'Low engagement pattern',
    ],
    recommendation: 'COLD — Continue nurture. No human intervention needed yet.',
    status: 'cold',
  },
];

const statusColors = {
  hot: 'bg-destructive/20 text-destructive border-destructive/30',
  warm: 'bg-orange-500/20 text-orange-600 border-orange-500/30',
  cold: 'bg-blue-500/20 text-blue-600 border-blue-500/30',
};

const statusLabels = {
  hot: 'HOT LEAD',
  warm: 'WARM LEAD',
  cold: 'NURTURE',
};

export function LeadScoring() {
  return (
    <section className="border-b border-border/60 py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Real-Time Lead Scoring That Gets Smarter Every Day
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Not all leads are equal. AI assigns a score (0–100) based on behavior, engagement,
            and intent signals. Your team focuses on the ones most likely to convert.
          </p>
        </div>

        {/* Lead Examples */}
        <div className="space-y-6 mb-16">
          {leadExamples.map((lead, index) => (
            <Card
              key={index}
              className={`p-8 border-2 ${
                lead.status === 'hot'
                  ? 'border-destructive/50 bg-destructive/5'
                  : lead.status === 'warm'
                  ? 'border-orange-500/30 bg-orange-500/5'
                  : 'border-blue-500/20 bg-blue-500/5'
              }`}
            >
              <div className="grid gap-6 md:grid-cols-3">
                {/* Left: Name & Score */}
                <div className="md:col-span-1">
                  <h3 className="font-display font-semibold text-foreground text-lg mb-4">
                    {lead.name}
                  </h3>
                  <div className="space-y-3">
                    {/* Score Gauge */}
                    <div>
                      <div className="flex items-end justify-between mb-2">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                          Intent Score
                        </span>
                        <span className="font-display text-3xl font-bold text-foreground">
                          {lead.score}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            lead.score >= 75
                              ? 'bg-destructive'
                              : lead.score >= 40
                              ? 'bg-orange-500'
                              : 'bg-blue-500'
                          }`}
                          style={{ width: `${lead.score}%` }}
                        />
                      </div>
                    </div>
                    {/* Status Badge */}
                    <Badge
                      className={`${statusColors[lead.status]} border text-xs font-bold`}
                    >
                      {statusLabels[lead.status]}
                    </Badge>
                  </div>
                </div>

                {/* Middle: Signals */}
                <div className="md:col-span-1">
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">
                    Engagement Signals
                  </h4>
                  <ul className="space-y-2">
                    {lead.signals.map((signal, i) => (
                      <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                        <span className="text-primary font-bold">✓</span>
                        <span>{signal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Recommendation */}
                <div className="md:col-span-1">
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">
                    Recommended Action
                  </h4>
                  <div
                    className={`rounded-lg p-4 ${
                      lead.status === 'hot'
                        ? 'bg-destructive/10 border border-destructive/30'
                        : lead.status === 'warm'
                        ? 'bg-orange-500/10 border border-orange-500/30'
                        : 'bg-blue-500/10 border border-blue-500/30'
                    }`}
                  >
                    <p className="text-sm font-medium text-foreground">
                      {lead.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Why It Matters */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              No More Wasted Effort
            </h3>
            <p className="text-sm text-muted-foreground">
              Your salespeople stop chasing dead leads. They focus on the ones most likely to
              close. This means higher productivity, shorter sales cycles, and more revenue.
            </p>
          </Card>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="font-display font-semibold text-foreground mb-3">
              🎯 Continuous Refinement
            </h3>
            <p className="text-sm text-muted-foreground">
              As deals close or get lost, the scoring model learns. It gets better at predicting
              which leads will actually convert. Your scoring becomes a competitive advantage.
            </p>
          </Card>
        </div>

        {/* Scoring Factors */}
        <div className="rounded-xl border border-border bg-card p-8">
          <h3 className="font-display font-semibold text-foreground mb-6 text-lg">
            How AI Calculates the Score
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                factor: 'Behavioral Signals',
                items: [
                  'Page visits',
                  'Time spent',
                  'Features viewed',
                  'Click patterns',
                  'Form submissions',
                ],
              },
              {
                factor: 'Engagement Level',
                items: [
                  'Message responses',
                  'Email opens',
                  'Call attendance',
                  'Demo interest',
                  'Question specificity',
                ],
              },
              {
                factor: 'Intent Indicators',
                items: [
                  'Budget mentions',
                  'Timeline clarity',
                  'Competitor comparison',
                  'Objection handling',
                  'Purchase readiness',
                ],
              },
            ].map((category, i) => (
              <div key={i}>
                <h4 className="font-semibold text-foreground text-sm mb-3">
                  {category.factor}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
