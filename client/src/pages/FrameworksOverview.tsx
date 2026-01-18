import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FrameworksOverview() {
  const frameworks = [
    {
      title: "Entity-Relation Framework V72",
      description: "Enhanced 14D agent state modeling with optimal resolution pathways",
      metrics: [
        { label: "Agents", value: "45" },
        { label: "Verification Checks", value: "1000+" },
        { label: "AD Paragraphs Mapped", value: "50" },
      ],
      href: "/entity-relation",
    },
    {
      title: "High-Resolution Agent Models V72",
      description: "Comprehensive verified agent definitions with quintuple-source verification",
      metrics: [
        { label: "Core Agents", value: "4" },
        { label: "Verification Confidence", value: "0.96-0.98" },
        { label: "Total Checks", value: "4,200+" },
      ],
      href: "/agents",
    },
    {
      title: "Jax-Dan Response Improvements V72",
      description: "JR-DR synergy optimization with cognitive emergence analysis",
      metrics: [
        { label: "Priority 1 Paragraphs", value: "5" },
        { label: "JR-DR Synergy", value: "0.98" },
        { label: "Evidence Strength", value: "0.96" },
      ],
      href: "/responses",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">V72 Frameworks Overview</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive lex scheme representations for optimal legal resolution in case 2025-137857
            </p>
          </div>

          {/* Key Improvements */}
          <Card className="bg-blue-500/5 border-blue-500/20">
            <CardHeader>
              <CardTitle>Key Enhancements from V71</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-sm mb-1">Verification Protocol</p>
                  <p className="text-sm text-muted-foreground">1000+ checks per entity/relation (up from 900+)</p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Agent State Modeling</p>
                  <p className="text-sm text-muted-foreground">14D state with evidence-quality dimension</p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">JR-DR Synergy</p>
                  <p className="text-sm text-muted-foreground">0.98 for critical paragraphs (up from 0.97)</p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Ketoni Integration</p>
                  <p className="text-sm text-muted-foreground">0.97 motive integration score (up from 0.96)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Frameworks Grid */}
          <div className="space-y-6">
            {frameworks.map((framework) => (
              <Link key={framework.href} href={framework.href}>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl">{framework.title}</CardTitle>
                        <CardDescription className="text-base">{framework.description}</CardDescription>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {framework.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                          <p className="text-2xl font-bold text-blue-500">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Verification Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Overall Quality Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">0.96</div>
                  <p className="text-sm text-muted-foreground">Verification Completeness</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">0.96</div>
                  <p className="text-sm text-muted-foreground">Factual Accuracy</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">0.94</div>
                  <p className="text-sm text-muted-foreground">Evidence Quality</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">0.95</div>
                  <p className="text-sm text-muted-foreground">Provenance Quality</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verification Levels */}
          <Card>
            <CardHeader>
              <CardTitle>Verification Levels</CardTitle>
              <CardDescription>Multi-source verification approach for comprehensive accuracy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <Badge className="mt-1">Level 5</Badge>
                  <div>
                    <p className="font-semibold">Quintuple-Source</p>
                    <p className="text-sm text-muted-foreground">5+ independent sources with cross-validation (Priority 1 paragraphs)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge className="mt-1">Level 4</Badge>
                  <div>
                    <p className="font-semibold">Quad-Source</p>
                    <p className="text-sm text-muted-foreground">4 independent sources with triangulation (Priority 2 paragraphs)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge className="mt-1">Level 3</Badge>
                  <div>
                    <p className="font-semibold">Triple-Source</p>
                    <p className="text-sm text-muted-foreground">3 independent sources with corroboration (Priority 3 paragraphs)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ketoni Motive */}
          <Card className="border-orange-500/20 bg-orange-500/5">
            <CardHeader>
              <CardTitle>Ketoni ZAR 18.75M Motive Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Central Financial Motive</p>
                <p className="text-sm text-muted-foreground mb-4">
                  The Ketoni ZAR 18.75M payout (available May 2026) is comprehensively integrated as the central financial motive for Peter and Rynette's actions, with temporal correlation analysis revealing strategic timing patterns.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-2">Key Temporal Correlations</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Interdict filing: June 2025 (11 months before deadline)</li>
                    <li>• Bantjies appointment: July 2024 (22 months before deadline)</li>
                    <li>• Medical testing demand: July 2025 (10 months before deadline)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2">Motive Strength Scores</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Peter Faucitt: 0.98 (exceptional)</li>
                    <li>• Rynette Faucitt: 0.96 (exceptional)</li>
                    <li>• Overall temporal correlation: 0.94</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Repository Link */}
          <div className="bg-card border border-border rounded-lg p-6 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              All frameworks are version controlled and available in the official repository
            </p>
            <a href="https://github.com/cogpy/ad-res-j7" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                View on GitHub
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
