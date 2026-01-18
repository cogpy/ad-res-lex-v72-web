import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Network, Users, MessageSquare, CheckCircle2, AlertTriangle, ExternalLink } from "lucide-react";

export default function FrameworksOverview() {
  const frameworks = [
    {
      title: "Entity-Relation Framework V72",
      description: "Enhanced 14D agent state modeling with optimal resolution pathways and blockchain-style provenance tracking",
      icon: <Network className="w-6 h-6" />,
      metrics: [
        { label: "Agents", value: "45" },
        { label: "Relations", value: "75" },
        { label: "Verification Checks", value: "1000+" },
        { label: "AD Paragraphs", value: "50" },
      ],
      href: "/entity-relation",
      color: "blue",
    },
    {
      title: "High-Resolution Agent Models V72",
      description: "Comprehensive verified agent definitions with quintuple-source verification and 14D state modeling",
      icon: <Users className="w-6 h-6" />,
      metrics: [
        { label: "Core Agents", value: "4" },
        { label: "Supporting Agents", value: "41" },
        { label: "Verification Confidence", value: "0.96-0.98" },
        { label: "Total Checks", value: "4,200+" },
      ],
      href: "/agents",
      color: "green",
    },
    {
      title: "Jax-Dan Response Strategies V72",
      description: "JR-DR synergy optimization with cognitive emergence analysis and evidence-based refutation",
      icon: <MessageSquare className="w-6 h-6" />,
      metrics: [
        { label: "Priority 1 Paragraphs", value: "5" },
        { label: "JR-DR Synergy", value: "0.98" },
        { label: "Evidence Strength", value: "0.96" },
        { label: "Coverage", value: "100%" },
      ],
      href: "/responses",
      color: "purple",
    },
  ];

  const improvements = [
    { metric: "Verification Completeness", v71: "0.94", v72: "0.96", change: "+2%" },
    { metric: "Evidence Quality", v71: "0.93", v72: "0.94", change: "+1%" },
    { metric: "JR-DR Synergy", v71: "0.97", v72: "0.98", change: "+1%" },
    { metric: "Ketoni Integration", v71: "0.96", v72: "0.97", change: "+1%" },
    { metric: "Verification Checks", v71: "900+", v72: "1000+", change: "+11%" },
  ];

  const ketoniTimeline = [
    { event: "Bantjies Appointment", date: "July 2024", months: "22 months before deadline" },
    { event: "Interdict Filing", date: "June 2025", months: "11 months before deadline" },
    { event: "Medical Testing Demand", date: "July 2025", months: "10 months before deadline" },
    { event: "Ketoni Option Deadline", date: "May 2026", months: "Target date" },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue": return { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-500" };
      case "green": return { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-500" };
      case "purple": return { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-500" };
      default: return { bg: "bg-accent", border: "border-border", text: "text-foreground" };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      <div className="container py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <Badge variant="outline" className="mb-2">Case 2025-137857</Badge>
            <h1 className="text-4xl font-bold">V72 Frameworks Overview</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive lex scheme representations for optimal legal resolution with rigorous multi-source verification
            </p>
          </div>

          {/* Key Improvements Card */}
          <Card className="bg-gradient-to-br from-blue-500/5 to-green-500/5 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Key Enhancements from V71
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-semibold">Metric</th>
                      <th className="text-center py-2 font-semibold">V71</th>
                      <th className="text-center py-2 font-semibold">V72</th>
                      <th className="text-center py-2 font-semibold">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {improvements.map((imp) => (
                      <tr key={imp.metric} className="border-b border-border/50">
                        <td className="py-2">{imp.metric}</td>
                        <td className="text-center py-2 text-muted-foreground">{imp.v71}</td>
                        <td className="text-center py-2 font-semibold text-green-500">{imp.v72}</td>
                        <td className="text-center py-2">
                          <Badge variant="secondary" className="bg-green-500/10 text-green-500">
                            {imp.change}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Frameworks Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Core Frameworks</h2>
            {frameworks.map((framework) => {
              const colors = getColorClasses(framework.color);
              return (
                <Link key={framework.href} href={framework.href}>
                  <Card className={`cursor-pointer hover:shadow-lg transition-all border-l-4 ${colors.border}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center ${colors.text}`}>
                            {framework.icon}
                          </div>
                          <div className="space-y-1">
                            <CardTitle className="text-xl">{framework.title}</CardTitle>
                            <CardDescription className="text-base">{framework.description}</CardDescription>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {framework.metrics.map((metric) => (
                          <div key={metric.label} className="text-center p-3 bg-accent/50 rounded">
                            <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                            <p className="text-xs text-muted-foreground">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Verification Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Overall Quality Metrics</CardTitle>
              <CardDescription>Comprehensive verification across all frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-green-500/5 rounded border border-green-500/20">
                  <div className="text-3xl font-bold text-green-500 mb-2">0.96</div>
                  <p className="text-sm text-muted-foreground">Verification Completeness</p>
                </div>
                <div className="text-center p-4 bg-green-500/5 rounded border border-green-500/20">
                  <div className="text-3xl font-bold text-green-500 mb-2">0.96</div>
                  <p className="text-sm text-muted-foreground">Factual Accuracy</p>
                </div>
                <div className="text-center p-4 bg-blue-500/5 rounded border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-500 mb-2">0.94</div>
                  <p className="text-sm text-muted-foreground">Evidence Quality</p>
                </div>
                <div className="text-center p-4 bg-purple-500/5 rounded border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-500 mb-2">0.95</div>
                  <p className="text-sm text-muted-foreground">Provenance Quality</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verification Levels */}
          <Card>
            <CardHeader>
              <CardTitle>Multi-Source Verification Levels</CardTitle>
              <CardDescription>Confidence-based verification approach for comprehensive accuracy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  { level: 5, name: "Quintuple-Source", desc: "5+ independent sources with cross-validation", usage: "Priority 1 paragraphs, critical claims" },
                  { level: 4, name: "Quad-Source", desc: "4 independent sources with triangulation", usage: "Priority 2 paragraphs, key evidence" },
                  { level: 3, name: "Triple-Source", desc: "3 independent sources with corroboration", usage: "Priority 3 paragraphs, supporting claims" },
                ].map((level) => (
                  <div key={level.level} className="flex items-start gap-4 p-4 bg-accent/50 rounded">
                    <Badge className="mt-1 bg-blue-500">Level {level.level}</Badge>
                    <div>
                      <p className="font-semibold">{level.name}</p>
                      <p className="text-sm text-muted-foreground">{level.desc}</p>
                      <p className="text-xs text-muted-foreground mt-1">Used for: {level.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Ketoni Motive */}
          <Card className="border-orange-500/30 bg-gradient-to-br from-orange-500/5 to-red-500/5">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Ketoni ZAR 18.75M Motive Integration</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Central financial motive with comprehensive temporal correlation analysis
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded">
                  <div className="text-2xl font-bold text-orange-500">ZAR 18.75M</div>
                  <div className="text-sm text-muted-foreground">Ketoni Payout</div>
                </div>
                <div className="text-center p-4 bg-background rounded">
                  <div className="text-2xl font-bold text-orange-500">0.94</div>
                  <div className="text-sm text-muted-foreground">Temporal Correlation</div>
                </div>
                <div className="text-center p-4 bg-background rounded">
                  <div className="text-2xl font-bold text-red-500">0.98</div>
                  <div className="text-sm text-muted-foreground">Peter Motive Strength</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Timeline Correlation</h4>
                <div className="space-y-2">
                  {ketoniTimeline.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-background rounded">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${i === ketoniTimeline.length - 1 ? "bg-red-500" : "bg-orange-500"}`} />
                        <span className="font-medium">{item.event}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold">{item.date}</span>
                        <span className="text-xs text-muted-foreground ml-2">({item.months})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Repository Links */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Resources & Documentation</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="https://github.com/cogpy/ad-res-j7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-accent/50 rounded hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">GitHub: ad-res-j7</span>
              </a>
              <a 
                href="https://github.com/cogpy/ad-res-lex-v72-web" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-accent/50 rounded hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">Website Source</span>
              </a>
              <Link href="/verification">
                <div className="flex items-center gap-2 p-3 bg-accent/50 rounded hover:bg-accent transition-colors cursor-pointer">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm">Verification Report</span>
                </div>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              All frameworks are version controlled. Backend files synced to Google Drive at <code className="bg-accent px-1 rounded">manus/ad-res-j7/</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
