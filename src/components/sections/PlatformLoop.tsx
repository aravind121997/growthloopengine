import { Card } from '@/components/ui/card';
import {
  MessageCircle,
  Brain,
  Filter,
  Send,
  Handshake,
  TrendingUp,
  Target,
} from 'lucide-react';

interface PlatformStep {
  number: number;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

const steps: PlatformStep[] = [
  {
    number: 1,
    title: 'Capture',
    description: 'Every lead arrives, from any source',
    details: [
      'WhatsApp',
      'Voice Calls',
      'Website Forms',
      'Instagram DMs',
      'Landing Pages',
      'Google Ads',
      'Facebook Ads',
      'Referrals',
    ],
    icon: <MessageCircle className="h-6 w-6" />,
  },
  {
    number: 2,
    title: 'Understand',
    description: 'AI analyzes every interaction in real-time',
    details: [
      'Conversation content',
      'Intent signals',
      'Sentiment analysis',
      'Context & history',
      'Budget hints',
      'Timeline indicators',
      'Behavior patterns',
      'Previous interactions',
    ],
    icon: <Brain className="h-6 w-6" />,
  },
  {
    number: 3,
    title: 'Qualify',
    description: 'AI determines if this is a high-value opportunity',
    details: [
      'Fit assessment',
      'Buying stage detection',
      'Intent scoring',
      'Urgency analysis',
      'Budget qualification',
      'Authority check',
      'Timeline alignment',
      'Lead ranking',
    ],
    icon: <Filter className="h-6 w-6" />,
  },
  {
    number: 4,
    title: 'Engage',
    description: 'AI acts autonomously with perfect context',
    details: [
      'Instant responses',
      'Personalized messages',
      'Auto phone calls',
      'Appointment booking',
      'Question answering',
      'Information collection',
      'Objection handling',
      'Human handoff trigger',
    ],
    icon: <Send className="h-6 w-6" />,
  },
  {
    number: 5,
    title: 'Handoff',
    description: 'High-value leads reach your team with full context',
    details: [
      'Sales team alerted',
      'Full conversation history',
      'Lead score visible',
      'Next best action suggested',
      'Qualified by AI',
      'Ready for demo/call',
      'No repetition needed',
      'Maximum conversion readiness',
    ],
    icon: <Handshake className="h-6 w-6" />,
  },
  {
    number: 6,
    title: 'Learn',
    description: 'AI analyzes every won and lost deal',
    details: [
      'Win/loss analysis',
      'Conversation patterns',
      'Objection tracking',
      'Sales behavior review',
      'Campaign performance',
      'Lead source quality',
      'Conversion factors',
      'Improvement opportunities',
    ],
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    number: 7,
    title: 'Optimize',
    description: 'System improves continuously based on learnings',
    details: [
      'Targeting refinement',
      'Follow-up optimization',
      'Qualification criteria update',
      'Message personalization',
      'Campaign strategy adjustment',
      'AI agent retraining',
      'Workflow improvements',
      'Higher conversion rates',
    ],
    icon: <Target className="h-6 w-6" />,
  },
];

export function PlatformLoop() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-b border-border/60 py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            One AI Revenue Layer Across Every Customer Touchpoint
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A continuous cycle that captures, understands, qualifies, engages, and optimizes
            every lead — automatically.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="relative flex flex-col p-6 border-primary/30 hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/10 group"
            >
              {/* Step Number Circle */}
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm grid place-items-center shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {step.description}
              </p>

              {/* Details */}
              <ul className="space-y-1">
                {step.details.slice(0, 3).map((detail, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {detail}
                  </li>
                ))}
                {step.details.length > 3 && (
                  <li className="text-xs text-primary font-medium pt-1">
                    +{step.details.length - 3} more
                  </li>
                )}
              </ul>

              {/* Arrow to next step */}
              {step.number < steps.length && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="h-0.5 w-8 bg-gradient-to-r from-primary to-transparent" />
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Loop Visualization Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <p className="text-sm font-medium text-foreground">
              This continuous loop means your system gets smarter every day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
