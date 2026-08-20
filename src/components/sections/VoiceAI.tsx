import { Card } from '@/components/ui/card';
import { Phone, Clock, Globe, FileText, CheckCircle2 } from 'lucide-react';

export function VoiceAI() {
  return (
    <section className="border-b border-border/60 py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            An AI Phone Agent That Sells While You Sleep
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            24/7 voice calling that qualifies leads, books appointments, and routes high-value
            deals to your team — all before your team even wakes up.
          </p>
        </div>

        {/* Conversation Flow */}
        <div className="mb-16 rounded-xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-8">
          <div className="space-y-6">
            {/* Incoming Call */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/20 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Incoming Call
                </h3>
                <p className="text-sm text-muted-foreground italic">
                  "Hi, I'm interested in the property I saw online. Can you tell me more about
                  the 3BHK in Bandra?"
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="h-8 w-0.5 bg-gradient-to-b from-primary/60 to-primary/20" />
            </div>

            {/* AI Processing */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-purple-500/20 text-purple-500">
                  <Globe className="h-6 w-6" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-display font-semibold text-foreground mb-2">
                  AI Detects Intent & Context
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex gap-2">
                    <span className="text-purple-500 font-bold">✓</span>
                    <span className="text-muted-foreground">Location: Bandra detected</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-500 font-bold">✓</span>
                    <span className="text-muted-foreground">Product: 3BHK identified</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-500 font-bold">✓</span>
                    <span className="text-muted-foreground">Intent: High (asking details)</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-500 font-bold">✓</span>
                    <span className="text-muted-foreground">Score: 78/100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="h-8 w-0.5 bg-gradient-to-b from-primary/60 to-primary/20" />
            </div>

            {/* AI Response */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-500/20 text-blue-500">
                  <FileText className="h-6 w-6" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-display font-semibold text-foreground mb-2">
                  AI Responds Intelligently
                </h3>
                <p className="text-sm text-muted-foreground italic">
                  "Great question! The Bandra property features 3 bedrooms, 2 bathrooms, and
                  is available for a site visit this weekend. Would Saturday at 10 AM work for
                  you?"
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="h-8 w-0.5 bg-gradient-to-b from-primary/60 to-primary/20" />
            </div>

            {/* Outcome */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-500/20 text-green-500">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Automatic Actions Triggered
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Appointment booked in CRM</li>
                  <li>✓ Calendar synced</li>
                  <li>✓ Reminder set for Friday</li>
                  <li>✓ Sales team notified</li>
                  <li>✓ Full conversation logged</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card className="p-6">
            <h3 className="font-display font-semibold text-foreground mb-3">
              📞 24/7 Availability
            </h3>
            <p className="text-sm text-muted-foreground">
              Never miss a call. AI answers every inbound call with perfect context about your
              lead.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-display font-semibold text-foreground mb-3">
              🌍 Multilingual
            </h3>
            <p className="text-sm text-muted-foreground">
              Conversations in English, Hindi, Marathi, and more. Speak to your customers in
              their language.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-display font-semibold text-foreground mb-3">
              📅 Appointment Booking
            </h3>
            <p className="text-sm text-muted-foreground">
              AI offers time slots, confirms bookings, and updates your calendar automatically.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-display font-semibold text-foreground mb-3">
              📊 Call Summaries
            </h3>
            <p className="text-sm text-muted-foreground">
              Every call is transcribed, summarized, and analyzed for intent, objections, and
              next steps.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-display font-semibold text-foreground mb-3">
              🔄 Human Transfer
            </h3>
            <p className="text-sm text-muted-foreground">
              When a human touch is needed, AI smoothly transfers the call with full context.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-display font-semibold text-foreground mb-3">
              📈 Outbound Calling
            </h3>
            <p className="text-sm text-muted-foreground">
              Follow up with leads, confirm appointments, and conduct surveys via voice AI.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-foreground font-medium">
            Your voice AI team is ready to work 24/7, handling hundreds of calls with zero
            fatigue and perfect consistency.
          </p>
        </div>
      </div>
    </section>
  );
}
