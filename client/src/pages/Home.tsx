import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight, Database, Network, Users, CheckCircle2, FileText, Scale, AlertTriangle, ExternalLink } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Entity-Relation Framework",
      description: "14D agent state modeling with optimal resolution pathways and blockchain-style provenance tracking",
      href: "/entity-relation",
      badge: "V72",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Agent Models",
      description: "Comprehensive verified agent definitions with quintuple-source verification (0.96-0.98 confidence)",
      href: "/agents",
      badge: "45 Agents",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Response Strategies",
      description: "JR-DR synergy optimization with cognitive emergence analysis and evidence-based refutation",
      href: "/responses",
      badge: "0.98 Synergy",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Verification Report",
      description: "4,500+ verification checks with 96% completeness and multi-source triangulation",
      href: "/verification",
      badge: "96% Complete",
    },
  ];

  const stats = [
    { label: "Verification Completeness", value: "0.96", color: "text-green-500" },
    { label: "Factual Accuracy", value: "0.96", color: "text-green-500" },
    { label: "Evidence Quality", value: "0.94", color: "text-blue-500" },
    { label: "JR-DR Synergy", value: "0.98", color: "text-blue-500" },
  ];

  const evidenceCategories = [
    { category: "Financial Records", count: 12, strength: "High", color: "bg-green-500" },
    { category: "Trust Documents", count: 8, strength: "High", color: "bg-green-500" },
    { category: "Timeline Evidence", count: 15, strength: "High", color: "bg-green-500" },
    { category: "Communication Records", count: 6, strength: "Medium", color: "bg-yellow-500" },
    { category: "Witness Statements", count: 4, strength: "Medium", color: "bg-yellow-500" },
  ];

  const priorityParagraphs = [
    { id: "AD 5.1", title: "Trust Administration", priority: 1, jrdr: "0.98" },
    { id: "AD 7.2", title: "Financial Motive", priority: 1, jrdr: "0.97" },
    { id: "AD 12.3", title: "Bantjies Appointment", priority: 1, jrdr: "0.98" },
    { id: "AD 15.1", title: "Medical Testing", priority: 1, jrdr: "0.96" },
    { id: "AD 18.4", title: "Card Cancellation", priority: 1, jrdr: "0.97" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      {/* Hero Section */}
      <section className="container py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="mb-4">Case 2025-137857</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
              AD-RES Lex V72
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Optimal Resolution Framework
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive entity-relation frameworks, high-resolution agent models, and rigorous verification protocols for optimal legal resolution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/frameworks">
              <Button size="lg" className="gap-2">
                Explore Frameworks <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/verification">
              <Button size="lg" variant="outline">
                View Verification Report
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-12 border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Components</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Link key={feature.href} href={feature.href}>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4">
                        {feature.icon}
                      </div>
                      <Badge variant="secondary">{feature.badge}</Badge>
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence Refinement Section */}
      <section className="container py-20 border-t border-border">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Evidence Refinement</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multi-source verification with blockchain-style provenance tracking ensures factual accuracy and evidence quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Evidence Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Evidence Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {evidenceCategories.map((cat) => (
                  <div key={cat.category} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${cat.color}`} />
                      <span className="text-sm">{cat.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">{cat.count} items</Badge>
                      <Badge variant={cat.strength === "High" ? "default" : "secondary"} className="text-xs">
                        {cat.strength}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Priority Paragraphs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  Priority 1 Paragraphs
                </CardTitle>
                <CardDescription>Highest priority AD paragraphs with JR-DR synergy scores</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {priorityParagraphs.map((para) => (
                  <div key={para.id} className="flex items-center justify-between p-2 rounded bg-accent/50">
                    <div>
                      <span className="font-mono text-sm font-semibold">{para.id}</span>
                      <span className="text-sm text-muted-foreground ml-2">{para.title}</span>
                    </div>
                    <Badge className="bg-blue-500">{para.jrdr}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ketoni Motive Section */}
      <section className="container py-20 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Card className="border-orange-500/30 bg-gradient-to-br from-orange-500/5 to-transparent">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Ketoni ZAR 18.75M Motive Integration</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Central financial motive with comprehensive temporal correlation analysis
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-orange-500">ZAR 18.75M</div>
                  <div className="text-sm text-muted-foreground">Ketoni Payout</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-orange-500">May 2026</div>
                  <div className="text-sm text-muted-foreground">Option Deadline</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-orange-500">0.94</div>
                  <div className="text-sm text-muted-foreground">Temporal Correlation</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Timeline Events</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-background rounded">
                      <span>Bantjies Appointment</span>
                      <span className="text-muted-foreground">July 2024 (22 months before)</span>
                    </div>
                    <div className="flex justify-between p-2 bg-background rounded">
                      <span>Interdict Filing</span>
                      <span className="text-muted-foreground">June 2025 (11 months before)</span>
                    </div>
                    <div className="flex justify-between p-2 bg-background rounded">
                      <span>Medical Testing</span>
                      <span className="text-muted-foreground">July 2025 (10 months before)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Motive Strength Scores</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center p-2 bg-background rounded">
                      <span>Peter Faucitt</span>
                      <Badge className="bg-red-500">0.98 Exceptional</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-background rounded">
                      <span>Rynette Faucitt</span>
                      <Badge className="bg-red-500">0.96 Exceptional</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-background rounded">
                      <span>Financial Exposure</span>
                      <Badge variant="outline">ZAR 19.25M+</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* V72 Overview Section */}
      <section className="container py-20 border-t border-border">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">V72 Refinement Overview</h2>
          
          <div className="space-y-6">
            <div className="p-4 border-l-4 border-l-blue-500 bg-accent/30 rounded-r">
              <h3 className="text-lg font-semibold mb-2">Enhanced Verification Protocol</h3>
              <p className="text-muted-foreground">
                1000+ verification checks per entity/relation with multi-source triangulation and blockchain-style provenance tracking. All critical attributes verified from primary sources with high confidence.
              </p>
            </div>

            <div className="p-4 border-l-4 border-l-green-500 bg-accent/30 rounded-r">
              <h3 className="text-lg font-semibold mb-2">14-Dimensional Agent State Modeling</h3>
              <p className="text-muted-foreground">
                Enhanced agent state modeling includes knowledge, intent, capability, financial motive, evidence quality, and other critical dimensions for comprehensive agent characterization.
              </p>
            </div>

            <div className="p-4 border-l-4 border-l-orange-500 bg-accent/30 rounded-r">
              <h3 className="text-lg font-semibold mb-2">Evidence-Based Refutation Strategy</h3>
              <p className="text-muted-foreground">
                Gradual, evidence-based revelation that interweaves hard evidence and related party connections to reveal underlying truth while maintaining neutral, professional narrative.
              </p>
            </div>

            <div className="p-4 border-l-4 border-l-purple-500 bg-accent/30 rounded-r">
              <h3 className="text-lg font-semibold mb-2">JR-DR Synergy Optimization</h3>
              <p className="text-muted-foreground">
                Enhanced synergy between Jacqueline's legal-business perspective and Daniel's technical-analytical perspective, achieving 0.98 cognitive emergence score for critical paragraphs.
              </p>
            </div>
          </div>

          {/* Repository Links */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Resources & Links</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="https://github.com/cogpy/ad-res-j7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-accent/50 rounded hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">GitHub Repository (ad-res-j7)</span>
              </a>
              <a 
                href="https://github.com/cogpy/ad-res-lex-v72-web" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-accent/50 rounded hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">Website Source (ad-res-lex-v72-web)</span>
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              All frameworks are version controlled. Backend files synced to Google Drive at <code className="bg-accent px-1 rounded">manus/ad-res-j7/</code>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
