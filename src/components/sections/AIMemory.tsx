import { Card } from '@/components/ui/card';
import { Brain, MessageCircle, Lightbulb } from 'lucide-react';

export function AIMemory() {
  return (
    <section className="border-b border-border/60 py-20 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Your CRM Finally Remembers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every conversation makes the next conversation smarter. Your AI remembers what
            customers said, what they need, and what they've objected to.
          </p>
        </div>

        {/* The Story */}
        <div className="mb-16 space-y-8">
          {/* Monday */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex gap-6 items-start mb-6">
              <div className="flex-shrink-0">
                <div className="text-sm font-bold text-primary bg-primary/10 rounded-lg px-3 py-1">
                  Monday
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-display font-semibold text-foreground mb-3">
                  First Conversation
                </h3>
                <div className="rounded-lg bg-secondary p-4 mb-4">
                  <p className="text-sm italic text-muted-foreground">
                    Customer: "I'm looking for a 3BHK in Mumbai. My budget is around ₹1 crore.
                    We need 2 parking spaces and good natural light."
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <Brain className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <span className="font-medium">AI Captures:</span> 3BHK, ₹1Cr budget, 2
                      parking, good lighting preference
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wednesday */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex gap-6 items-start mb-6">
              <div className="flex-shrink-0">
                <div className="text-sm font-bold text-purple-500 bg-purple-500/10 rounded-lg px-3 py-1">
                  Wednesday
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-display font-semibold text-foreground mb-3">
                  Follow-up Conversation
                </h3>
                <div className="rounded-lg bg-secondary p-4 mb-4">
                  <p className="text-sm italic text-muted-foreground">
                    Customer: "Hey, I'm checking back in. Can you tell me about your new
                    listings? Also, I prefer something away from too much traffic noise."
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <Brain className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <span className="font-medium">AI Remembers from Monday:</span> 3BHK,
                      ₹1Cr, 2 parking, good light
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Brain className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <span className="font-medium">Adds to Profile:</span> Prefers quiet
                      location
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thursday */}
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="text-sm font-bold text-primary bg-primary/20 rounded-lg px-3 py-1">
                  Thursday
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-display font-semibold text-foreground mb-3">
                  AI Recommends Next Best Action
                </h3>
                <div className="rounded-lg bg-background/50 border border-primary/20 p-4 mb-4">
                  <p className="text-sm text-foreground font-medium">
                    "Priya has shown high intent. She's specific about requirements. Ready for
                    a sales call."
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <Lightbulb className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <span className="font-medium">Recommendation:</span> Offer 3 properties in
                      quiet areas with 2+ parking
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Lightbulb className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <span className="font-medium">Best Action:</span> Schedule site visits
                      for this weekend
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Lightbulb className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <span className="font-medium">Message:</span> Personalized using her
                      preferences
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card className="p-6">
            <h3 className="font-display font-semibold text-foreground mb-3">
              🗣️ Conversational Intelligence
            </h3>
            <p className="text-sm text-muted-foreground">
              Every word, tone, and sentiment is analyzed. Budget mentions, timelines, preferences, objections — all captured automatically.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-display font-semibold text-foreground mb-3">
              🧠 Unified Memory
            </h3>
            <p className="text-sm text-muted-foreground">
              Information from WhatsApp, calls, web, and email is merged into one unified
              customer profile — no silos, no duplicates.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-display font-semibold text-foreground mb-3">
              🎯 Continuous Learning
            </h3>
            <p className="text-sm text-muted-foreground">
              The system improves over time. The more interactions, the smarter the recommendations. Better matches. Higher conversions.
            </p>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8 text-center">
          <p className="text-lg text-foreground font-display font-semibold mb-2">
            This is the opposite of traditional CRMs
          </p>
          <p className="text-muted-foreground">
            Most CRMs forget. Most sales teams have to manually remember what customers said. Not with GrowthLoopEngine. Your AI never forgets. Every conversation makes the system smarter.
          </p>
        </div>
      </div>
    </section>
  );
}
