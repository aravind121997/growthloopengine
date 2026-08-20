import { Card } from '@/components/ui/card';
import {
  MessageSquare,
  CheckCircle2,
  Phone,
  Calendar,
  Database,
  TrendingUp,
  RotateCw,
  Zap,
  BarChart3,
} from 'lucide-react';

interface Agent {
  name: string;
  description: string;
  responsibilities: string[];
  icon: React.ReactNode;
}

const agents: Agent[] = [
  {
    name: 'Lead Capture Agent',
    description: 'First responder that engages every lead instantly',
    responsibilities: [
      'Responds within seconds',
      'Greets and identifies lead',
      'Collects key information',
      'Starts qualification process',
    ],
    icon: <MessageSquare className="h-6 w-6" />,
  },
  {
    name: 'Qualification Agent',
    description: 'Determines if a lead is worth human attention',
    responsibilities: [
      'Analyzes lead fit',
      'Assesses buying signals',
      'Evaluates budget & timeline',
      'Assigns initial score',
    ],
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    name: 'Voice AI Agent',
    description: 'Handles inbound and outbound calls with intelligence',
    responsibilities: [
      'Answers calls 24/7',
      'Understands caller intent',
      'Books appointments',
      'Transfers to human when needed',
    ],
    icon: <Phone className="h-6 w-6" />,
  },
  {
    name: 'Follow-up Agent',
    description: 'Never lets a lead go cold',
    responsibilities: [
      'Sends timely messages',
      'Multi-channel follow-up',
      'Adjusts messaging based on response',
      'Escalates when ready',
    ],
    icon: <RotateCw className="h-6 w-6" />,
  },
  {
    name: 'Appointment Agent',
    description: 'Books, confirms, and reschedules with zero friction',
    responsibilities: [
      'Offers available time slots',
      'Syncs with team calendar',
      'Sends reminders',
      'Handles rescheduling',
    ],
    icon: <Calendar className="h-6 w-6" />,
  },
  {
    name: 'CRM Agent',
    description: 'Keeps your database current automatically',
    responsibilities: [
      'Logs all interactions',
      'Updates lead status',
      'Records conversation summaries',
      'Tags for workflows',
    ],
    icon: <Database className="h-6 w-6" />,
  },
  {
    name: 'Lead Intelligence Agent',
    description: 'Continuously scores and prioritizes opportunities',
    responsibilities: [
      'Calculates lead score',
      'Identifies high-intent leads',
      'Flags at-risk deals',
      'Recommends next action',
    ],
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    name: 'Retention Agent',
    description: 'Re-engages abandoned and lost opportunities',
    responsibilities: [
      'Identifies dormant leads',
      'Re-activates lost prospects',
      'Personalized re-engagement',
      'Second-chance conversion',
    ],
    icon: <Zap className="h-6 w-6" />,
  },
  {
    name: 'Revenue Intelligence Agent',
    description: 'Analyzes leakage and recommends improvements',
    responsibilities: [
      'Identifies bottlenecks',
      'Calculates revenue impact',
      'Recommends fixes',
      'Tracks improvement metrics',
    ],
    icon: <BarChart3 className="h-6 w-6" />,
  },
];

export function AIAgents() {
  return (
    <section className="border-b border-border/60 py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            An AI Team Working Behind Every Lead
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            These agents operate from shared customer context. They're not disconnected bots
            — they're an intelligent workforce with a unified mission: convert more leads.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col hover:shadow-lg hover:border-primary/50 transition-all group"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition">
                {agent.icon}
              </div>

              {/* Name */}
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                {agent.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {agent.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2 pt-4 border-t border-border">
                {agent.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{resp}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Key Message */}
        <div className="mt-12 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display font-semibold text-foreground mb-3">
                Shared Intelligence
              </h3>
              <p className="text-sm text-muted-foreground">
                Every agent has access to complete customer context — conversation history,
                previous interactions, objections, preferences, behavior patterns. No
                information is siloed.
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-3">
                Unified Goal
              </h3>
              <p className="text-sm text-muted-foreground">
                All agents work toward one outcome: converting the lead into a customer. They
                collaborate, escalate intelligently, and ensure nothing falls through the
                cracks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
