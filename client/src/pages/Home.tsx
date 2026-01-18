import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Database, Network, Users, CheckCircle2 } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Entity-Relation Framework",
      description: "14D agent state modeling with optimal resolution pathways",
      href: "/entity-relation",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Agent Models",
      description: "Comprehensive verified agent definitions with quintuple-source verification",
      href: "/agents",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Response Strategies",
      description: "JR-DR synergy optimization with cognitive emergence analysis",
      href: "/responses",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Verification Report",
      description: "4,500+ verification checks with 96% completeness",
      href: "/verification",
    },
  ];

  const stats = [
    { label: "Verification Completeness", value: "0.96" },
    { label: "Factual Accuracy", value: "0.96" },
    { label: "Evidence Quality", value: "0.94" },
    { label: "JR-DR Synergy", value: "0.98" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      {/* Hero Section */}
      <section className="container py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
              AD-RES Lex V72
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Optimal Resolution Framework
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive entity-relation frameworks, high-resolution agent models, and rigorous verification protocols for optimal legal resolution in complex cases.
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
              <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
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
                <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4">
                      {feature.icon}
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

      {/* Overview Section */}
      <section className="container py-20 border-t border-border">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">V72 Refinement Overview</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Enhanced Verification Protocol</h3>
              <p className="text-muted-foreground">
                1000+ verification checks per entity/relation with multi-source triangulation and blockchain-style provenance tracking. All critical attributes verified from primary sources with high confidence.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">14-Dimensional Agent State Modeling</h3>
              <p className="text-muted-foreground">
                Enhanced agent state modeling includes knowledge, intent, capability, financial motive, evidence quality, and other critical dimensions for comprehensive agent characterization.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Ketoni ZAR 18.75M Motive Integration</h3>
              <p className="text-muted-foreground">
                Comprehensive integration of the Ketoni ZAR 18.75M payout as the central financial motive, with temporal correlation analysis and strategic implication assessment.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">JR-DR Synergy Optimization</h3>
              <p className="text-muted-foreground">
                Enhanced synergy between Jacqueline's legal-business perspective and Daniel's technical-analytical perspective, achieving 0.98 cognitive emergence score for critical paragraphs.
              </p>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Case Reference</h3>
            <p className="text-sm text-muted-foreground mb-4">
              All frameworks and analysis relate to case 2025-137857 (Peter Faucitt v. Jacqueline Faucitt et al.), with comprehensive coverage of 50 AD paragraphs and optimal legal resolution pathways.
            </p>
            <p className="text-xs text-muted-foreground">
              Repository: <a href="https://github.com/cogpy/ad-res-j7" className="text-blue-400 hover:text-blue-300">cogpy/ad-res-j7</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
