'use client';

import { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronDown, TrendingDown } from 'lucide-react';
import { useState as useStateToggle } from 'react';

const INR_FORMAT = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

interface CalculatorState {
  monthlyLeads: number;
  costPerLead: number;
  currentConversionRate: number;
  averageCustomerValue: number;
  responseTime: string;
  followUpConsistency: number;
  noResponseRate: number;
  scenario: 'conservative' | 'balanced' | 'aggressive';
}

const RESPONSE_TIME_VALUES: Record<string, number> = {
  'under-1': 0.95,
  '1-5': 0.88,
  '5-30': 0.75,
  '30min-2hr': 0.60,
  '2-24hr': 0.40,
  'over-24': 0.20,
};

const SCENARIO_MULTIPLIERS = {
  conservative: 1.15,
  balanced: 1.35,
  aggressive: 1.55,
};

export function RevenueCalculator() {
  const [state, setState] = useState<CalculatorState>({
    monthlyLeads: 1000,
    costPerLead: 250,
    currentConversionRate: 5,
    averageCustomerValue: 50000,
    responseTime: '5-30',
    followUpConsistency: 75,
    noResponseRate: 25,
    scenario: 'balanced',
  });

  const [showFormulas, setShowFormulas] = useState(false);

  // Calculate values
  const calculations = useMemo(() => {
    const monthlySpend = state.monthlyLeads * state.costPerLead;
    const currentCustomers = (state.monthlyLeads * state.currentConversionRate) / 100;
    const currentRevenue = currentCustomers * state.averageCustomerValue;

    const responseTimeFactor = RESPONSE_TIME_VALUES[state.responseTime] || 0.75;
    const followUpFactor = state.followUpConsistency / 100;
    const noResponseFactor = (100 - state.noResponseRate) / 100;

    // Lost opportunities due to current process gaps
    const lostLeads = (state.monthlyLeads * state.noResponseRate) / 100;
    const lostOpportunityValue = lostLeads * state.averageCustomerValue;

    // Potential improvement with AI
    const multiplier = SCENARIO_MULTIPLIERS[state.scenario];
    const improvementFactor =
      (responseTimeFactor * 0.4 + followUpFactor * 0.35 + noResponseFactor * 0.25) *
      (multiplier - 1);

    const potentialLiftedConversion =
      state.currentConversionRate * (1 + improvementFactor);
    const potentialCustomers = (state.monthlyLeads * potentialLiftedConversion) / 100;
    const additionalCustomers = potentialCustomers - currentCustomers;
    const recoveredMonthlyRevenue = additionalCustomers * state.averageCustomerValue;
    const recoveredAnnualRevenue = recoveredMonthlyRevenue * 12;

    return {
      monthlySpend,
      currentCustomers,
      currentRevenue,
      lostOpportunityValue,
      potentialConversionRate: potentialLiftedConversion.toFixed(1),
      recoveredMonthlyRevenue,
      recoveredAnnualRevenue,
    };
  }, [state]);

  const handleInputChange = (
    field: keyof CalculatorState,
    value: string | number
  ) => {
    setState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetCalculator = () => {
    setState({
      monthlyLeads: 1000,
      costPerLead: 250,
      currentConversionRate: 5,
      averageCustomerValue: 50000,
      responseTime: '5-30',
      followUpConsistency: 75,
      noResponseRate: 25,
      scenario: 'balanced',
    });
  };

  return (
    <section id="calculator" className="scroll-mt-20 border-t border-border/60 bg-secondary/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            How Much Revenue Are You Losing Without AI-Driven Lead Management?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Most companies calculate their CPL. Very few calculate the revenue they lose after
            the lead arrives.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left: Inputs */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Your Business</h3>

              {/* Monthly Leads */}
              <div className="space-y-2 mb-6">
                <Label htmlFor="monthlyLeads" className="text-sm font-medium">
                  Monthly Leads
                </Label>
                <Input
                  id="monthlyLeads"
                  type="number"
                  min={10}
                  max={50000}
                  value={state.monthlyLeads}
                  onChange={(e) =>
                    handleInputChange('monthlyLeads', parseInt(e.target.value, 10))
                  }
                  className="text-base"
                />
                <p className="text-xs text-muted-foreground">
                  {state.monthlyLeads.toLocaleString()} leads/month
                </p>
              </div>

              {/* Cost Per Lead */}
              <div className="space-y-2 mb-6">
                <Label htmlFor="costPerLead" className="text-sm font-medium">
                  Avg. Cost Per Lead
                </Label>
                <Input
                  id="costPerLead"
                  type="number"
                  min={10}
                  max={10000}
                  value={state.costPerLead}
                  onChange={(e) =>
                    handleInputChange('costPerLead', parseInt(e.target.value, 10))
                  }
                  className="text-base"
                />
                <p className="text-xs text-muted-foreground">
                  {INR_FORMAT.format(state.costPerLead)}/lead
                </p>
              </div>

              {/* Conversion Rate */}
              <div className="space-y-2 mb-6">
                <Label htmlFor="conversionRate" className="text-sm font-medium">
                  Current Conversion %
                </Label>
                <Input
                  id="conversionRate"
                  type="number"
                  min={0.1}
                  max={100}
                  step={0.1}
                  value={state.currentConversionRate}
                  onChange={(e) =>
                    handleInputChange(
                      'currentConversionRate',
                      parseFloat(e.target.value)
                    )
                  }
                  className="text-base"
                />
                <p className="text-xs text-muted-foreground">
                  {state.currentConversionRate}% of leads convert
                </p>
              </div>

              {/* Average Customer Value */}
              <div className="space-y-2 mb-6">
                <Label htmlFor="customerValue" className="text-sm font-medium">
                  Avg. Customer Value
                </Label>
                <Input
                  id="customerValue"
                  type="number"
                  min={1000}
                  max={10000000}
                  value={state.averageCustomerValue}
                  onChange={(e) =>
                    handleInputChange(
                      'averageCustomerValue',
                      parseInt(e.target.value, 10)
                    )
                  }
                  className="text-base"
                />
                <p className="text-xs text-muted-foreground">
                  {INR_FORMAT.format(state.averageCustomerValue)}/customer
                </p>
              </div>
            </Card>
          </div>

          {/* Middle: Scenarios */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Your Process</h3>

              {/* Response Time */}
              <div className="space-y-2 mb-6">
                <Label htmlFor="responseTime" className="text-sm font-medium">
                  First Response Time
                </Label>
                <Select value={state.responseTime} onValueChange={(value) => handleInputChange('responseTime', value)}>
                  <SelectTrigger id="responseTime">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1">Under 1 minute</SelectItem>
                    <SelectItem value="1-5">1–5 minutes</SelectItem>
                    <SelectItem value="5-30">5–30 minutes</SelectItem>
                    <SelectItem value="30min-2hr">30 min–2 hours</SelectItem>
                    <SelectItem value="2-24hr">2–24 hours</SelectItem>
                    <SelectItem value="over-24">Over 24 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Follow-up Consistency */}
              <div className="space-y-2 mb-6">
                <Label htmlFor="followUp" className="text-sm font-medium">
                  Follow-up Consistency
                </Label>
                <Slider
                  id="followUp"
                  min={0}
                  max={100}
                  step={5}
                  value={[state.followUpConsistency]}
                  onValueChange={(val) =>
                    handleInputChange('followUpConsistency', val[0])
                  }
                  className="mt-2"
                />
                <p className="text-xs text-muted-foreground">
                  {state.followUpConsistency}% of leads get followed up
                </p>
              </div>

              {/* No-Response Rate */}
              <div className="space-y-2 mb-6">
                <Label htmlFor="noResponse" className="text-sm font-medium">
                  Lost Lead Rate %
                </Label>
                <Slider
                  id="noResponse"
                  min={0}
                  max={100}
                  step={5}
                  value={[state.noResponseRate]}
                  onValueChange={(val) =>
                    handleInputChange('noResponseRate', val[0])
                  }
                  className="mt-2"
                />
                <p className="text-xs text-muted-foreground">
                  {state.noResponseRate}% of leads fall through the cracks
                </p>
              </div>

              {/* Scenario Selector */}
              <div className="space-y-2 mb-6">
                <Label className="text-sm font-medium">Recovery Scenario</Label>
                <div className="grid grid-cols-3 gap-2">
                  {(['conservative', 'balanced', 'aggressive'] as const).map(
                    (scenario) => (
                      <button
                        key={scenario}
                        onClick={() =>
                          handleInputChange('scenario', scenario)
                        }
                        className={`py-2 px-3 rounded-lg text-xs font-semibold transition ${
                          state.scenario === scenario
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-foreground hover:bg-accent'
                        }`}
                      >
                        {scenario.charAt(0).toUpperCase() + scenario.slice(1)}
                      </button>
                    )
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-gradient-to-br from-destructive/5 to-background border-destructive/20 sticky top-20">
              <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-destructive" />
                Revenue Opportunity
              </h3>

              <div className="space-y-4">
                {/* Monthly Spend */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Monthly Ad Spend
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {INR_FORMAT.format(calculations.monthlySpend)}
                  </p>
                </div>

                {/* Current Customers */}
                <div className="pt-2 border-t border-border">
                  <p className="text-xs font-medium text-muted-foreground">
                    Current Customers/Month
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {Math.round(calculations.currentCustomers)}
                  </p>
                </div>

                {/* Current Revenue */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Current Monthly Revenue
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {INR_FORMAT.format(calculations.currentRevenue)}
                  </p>
                </div>

                {/* Revenue Leakage (Highlight) */}
                <div className="pt-2 border-t border-destructive/30 mt-4">
                  <p className="text-xs font-medium text-destructive">
                    Estimated Monthly Leakage
                  </p>
                  <p className="text-3xl font-bold text-destructive">
                    {INR_FORMAT.format(
                      calculations.lostOpportunityValue
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    (From leads that fall through)
                  </p>
                </div>

                {/* Potential Recovery */}
                <div className="pt-4 border-t border-border mt-6">
                  <p className="text-xs font-medium text-muted-foreground">
                    Potential Recovery/Month
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    {INR_FORMAT.format(
                      calculations.recoveredMonthlyRevenue
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    ({calculations.potentialConversionRate}% conversion vs{' '}
                    {state.currentConversionRate}% today)
                  </p>
                </div>

                {/* Annual Impact */}
                <div className="pt-2 border-t border-border">
                  <p className="text-xs font-medium text-muted-foreground">
                    Annual Potential Impact
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {INR_FORMAT.format(calculations.recoveredAnnualRevenue)}
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="mt-6 p-3 rounded-lg bg-background/50 border border-border/50">
                  <p className="text-xs text-muted-foreground">
                    ⚠️ Estimated opportunity based on your inputs — not a guarantee. Actual
                    results depend on implementation and market factors.
                  </p>
                </div>

                {/* Formula Toggle */}
                <button
                  onClick={() => setShowFormulas(!showFormulas)}
                  className="w-full mt-4 py-2 px-3 rounded-lg bg-secondary hover:bg-accent transition text-xs font-medium text-foreground flex items-center justify-center gap-2"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition ${
                      showFormulas ? 'rotate-180' : ''
                    }`}
                  />
                  View Calculation Logic
                </button>
              </div>
            </Card>

            {/* Formulas (Expandable) */}
            {showFormulas && (
              <Card className="p-4 mt-4 bg-secondary/30 border-border/50">
                <h4 className="font-semibold text-sm text-foreground mb-3">
                  How We Calculate This
                </h4>
                <div className="space-y-2 text-xs font-mono text-muted-foreground">
                  <p>
                    <span className="text-foreground">Monthly Spend</span> = Leads × CPL
                  </p>
                  <p>
                    <span className="text-foreground">Revenue Leakage</span> = Lost Leads ×
                    Avg Customer Value
                  </p>
                  <p>
                    <span className="text-foreground">New Conversion</span> = Current % +
                    (Response + Follow-up + Retention Impact)
                  </p>
                  <p>
                    <span className="text-foreground">Recovery</span> = Additional Customers ×
                    Avg Customer Value
                  </p>
                </div>
              </Card>
            )}

            {/* Reset Button */}
            <Button
              variant="outline"
              onClick={resetCalculator}
              className="w-full mt-4"
            >
              Reset to Defaults
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="h-auto max-w-full whitespace-normal rounded-full px-6 py-3 shadow-lg shadow-primary/25 sm:whitespace-nowrap"
          >
            See How GrowthLoopEngine Recovers This Revenue
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Or send me my custom revenue leakage report
          </p>
        </div>
      </div>
    </section>
  );
}
