import { Card } from '@/components/ui/card';

interface ChannelStep {
  step: number;
  channel: string;
  action: string;
  icon: string;
}

const channelJourney: ChannelStep[] = [
  {
    step: 1,
    channel: 'Google Ad',
    action: 'Lead sees your ad',
    icon: '🔍',
  },
  {
    step: 2,
    channel: 'Website',
    action: 'Clicks through and explores',
    icon: '🌐',
  },
  {
    step: 3,
    channel: 'WhatsApp',
    action: 'Starts conversation via WhatsApp',
    icon: '💬',
  },
  {
    step: 4,
    channel: 'Voice Call',
    action: 'Decides to call for more info',
    icon: '☎️',
  },
  {
    step: 5,
    channel: 'Salesperson',
    action: 'Warm handoff to your team',
    icon: '👤',
  },
  {
    step: 6,
    channel: 'Appointment',
    action: 'Scheduled demo/inspection',
    icon: '📅',
  },
  {
    step: 7,
    channel: 'Post-Sale',
    action: 'Follow-up and onboarding',
    icon: '✅',
  },
];

export function Omnichannel() {
  return (
    <section className="border-b border-border/60 py-20 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The Conversation Follows the Customer, Not the Channel
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A single customer journey across WhatsApp, voice, web, Instagram, email — with
            complete context at every step.
          </p>
        </div>

        {/* Journey Visualization */}
        <div className="mb-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-7">
            {channelJourney.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Step Card */}
                <div className="relative w-full mb-8">
                  <Card className="p-6 text-center bg-gradient-to-br from-card to-background">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                      Step {item.step}
                    </p>
                    <p className="font-display text-sm font-bold text-foreground mb-1">
                      {item.channel}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.action}</p>
                  </Card>
                </div>

                {/* Arrow to next step */}
                {index < channelJourney.length - 1 && (
                  <div className="hidden md:flex flex-col items-center h-12 -mt-4 mb-4">
                    <div className="h-full w-0.5 bg-gradient-to-b from-primary/60 to-primary/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Context Preservation */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card className="p-6 bg-background">
            <h3 className="font-display font-semibold text-foreground mb-3">
              🧠 Complete Context
            </h3>
            <p className="text-sm text-muted-foreground">
              Every agent and salesperson sees the full conversation history, previous
              interactions, preferences, and objections — regardless of which channel the
              customer switches to.
            </p>
          </Card>

          <Card className="p-6 bg-background">
            <h3 className="font-display font-semibold text-foreground mb-3">
              ⚡ Instant Handoff
            </h3>
            <p className="text-sm text-muted-foreground">
              When a customer switches channels, the conversation context automatically
              follows. Your WhatsApp agent knows what was discussed on the call. Your
              salesperson knows the entire journey.
            </p>
          </Card>

          <Card className="p-6 bg-background">
            <h3 className="font-display font-semibold text-foreground mb-3">
              🎯 Zero Repetition
            </h3>
            <p className="text-sm text-muted-foreground">
              Customers never repeat themselves. No more "I already told you this." Every
              interaction builds on the last, reducing friction and increasing satisfaction.
            </p>
          </Card>
        </div>

        {/* Example Scenario */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            Real-World Example
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex gap-4">
              <div className="font-mono text-xs font-bold text-primary flex-shrink-0 pt-1">
                Mon
              </div>
              <div className="flex-grow">
                <p className="text-foreground font-medium">Customer fills form on your website</p>
                <p className="text-muted-foreground mt-1">
                  Mentions interest in 3BHK, budget ₹1Cr, available for site visit Saturday
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="font-mono text-xs font-bold text-primary flex-shrink-0 pt-1">
                Mon
              </div>
              <div className="flex-grow">
                <p className="text-foreground font-medium">AI WhatsApp agent responds instantly</p>
                <p className="text-muted-foreground mt-1">
                  Confirms details, mentions Saturday availability, books tentative visit
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="font-mono text-xs font-bold text-primary flex-shrink-0 pt-1">
                Tue
              </div>
              <div className="flex-grow">
                <p className="text-foreground font-medium">Customer calls your team</p>
                <p className="text-muted-foreground mt-1">
                  Your sales rep can see: form info, WhatsApp conversation, stated preferences.
                  No repetition needed. Has all context to close.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="font-mono text-xs font-bold text-primary flex-shrink-0 pt-1">
                Thu
              </div>
              <div className="flex-grow">
                <p className="text-foreground font-medium">Automatic reminder sent</p>
                <p className="text-muted-foreground mt-1">
                  Via customer's preferred channel (WhatsApp), mentioning their specific
                  requirements and Saturday appointment
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="font-mono text-xs font-bold text-primary flex-shrink-0 pt-1">
                Sat
              </div>
              <div className="flex-grow">
                <p className="text-foreground font-medium">Site visit happens</p>
                <p className="text-muted-foreground mt-1">
                  CRM automatically updated post-visit. Follow-up scheduled. Next steps
                  triggered.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Key Message */}
        <div className="mt-12 text-center">
          <p className="font-display text-xl font-semibold text-foreground mb-3">
            One conversation. One customer record. Infinite channels.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This is what true omnichannel experience means. Not multiple disconnected
            conversations, but one intelligent customer journey.
          </p>
        </div>
      </div>
    </section>
  );
}
