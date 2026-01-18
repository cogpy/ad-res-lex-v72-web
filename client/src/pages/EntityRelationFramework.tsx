import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { ArrowLeft, Network, GitBranch, Clock, FileCheck, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EntityRelationFramework() {
  const relationTypes = [
    { type: "TRUSTEE_OF", count: 8, description: "Trust administration relationships" },
    { type: "BENEFICIARY_OF", count: 12, description: "Trust beneficiary relationships" },
    { type: "SPOUSE_OF", count: 4, description: "Marital relationships" },
    { type: "PARENT_OF", count: 6, description: "Parent-child relationships" },
    { type: "DIRECTOR_OF", count: 15, description: "Company directorship" },
    { type: "SHAREHOLDER_OF", count: 18, description: "Shareholding relationships" },
    { type: "APPOINTED_BY", count: 5, description: "Appointment relationships" },
    { type: "COORDINATED_WITH", count: 7, description: "Coordination patterns" },
  ];

  const adParagraphMapping = [
    { para: "AD 1-5", category: "Background & Parties", coverage: "100%", priority: 3 },
    { para: "AD 6-10", category: "Trust Administration", coverage: "100%", priority: 1 },
    { para: "AD 11-15", category: "Financial Claims", coverage: "100%", priority: 1 },
    { para: "AD 16-20", category: "Medical Testing", coverage: "100%", priority: 1 },
    { para: "AD 21-30", category: "Bantjies Appointment", coverage: "100%", priority: 2 },
    { para: "AD 31-40", category: "Card Cancellation", coverage: "100%", priority: 2 },
    { para: "AD 41-50", category: "Relief Sought", coverage: "100%", priority: 2 },
  ];

  const provenanceChain = [
    { source: "Primary Documents", verified: 45, total: 48, confidence: 0.94 },
    { source: "Trust Records", verified: 12, total: 12, confidence: 0.98 },
    { source: "Financial Statements", verified: 18, total: 20, confidence: 0.90 },
    { source: "Communication Records", verified: 8, total: 12, confidence: 0.67 },
    { source: "Timeline Evidence", verified: 15, total: 15, confidence: 1.00 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      <div className="container py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center gap-4">
            <Link href="/frameworks">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Frameworks
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold">Entity-Relation Framework V72</h1>
              <Badge>14D Model</Badge>
            </div>
            <p className="text-lg text-muted-foreground">
              Enhanced 14D agent state modeling with optimal resolution pathways and blockchain-style provenance tracking
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="bg-blue-500/5 border-blue-500/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Network className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                  <div className="text-3xl font-bold text-blue-500">45</div>
                  <p className="text-sm text-muted-foreground">Agents Modeled</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-green-500/5 border-green-500/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <GitBranch className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <div className="text-3xl font-bold text-green-500">75</div>
                  <p className="text-sm text-muted-foreground">Relations Mapped</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-purple-500/5 border-purple-500/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <FileCheck className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                  <div className="text-3xl font-bold text-purple-500">1000+</div>
                  <p className="text-sm text-muted-foreground">Verification Checks</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-orange-500/5 border-orange-500/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                  <div className="text-3xl font-bold text-orange-500">50</div>
                  <p className="text-sm text-muted-foreground">AD Paragraphs</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="relations" className="space-y-6">
            <TabsList>
              <TabsTrigger value="relations">Relation Types</TabsTrigger>
              <TabsTrigger value="mapping">AD Paragraph Mapping</TabsTrigger>
              <TabsTrigger value="provenance">Provenance Chain</TabsTrigger>
            </TabsList>

            <TabsContent value="relations">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Link2 className="w-5 h-5" />
                    Relation Type Definitions
                  </CardTitle>
                  <CardDescription>
                    75 relations across 8 primary types with verification metadata
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {relationTypes.map((rel) => (
                      <div key={rel.type} className="flex items-center justify-between p-3 bg-accent/50 rounded">
                        <div className="flex items-center gap-4">
                          <code className="text-sm font-mono bg-background px-2 py-1 rounded">{rel.type}</code>
                          <span className="text-sm text-muted-foreground">{rel.description}</span>
                        </div>
                        <Badge variant="secondary">{rel.count} instances</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mapping">
              <Card>
                <CardHeader>
                  <CardTitle>AD Paragraph Coverage</CardTitle>
                  <CardDescription>
                    Complete mapping of all 50 AD paragraphs with priority classification
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {adParagraphMapping.map((mapping) => (
                      <div key={mapping.para} className="flex items-center justify-between p-3 bg-accent/50 rounded">
                        <div className="flex items-center gap-4">
                          <Badge variant={mapping.priority === 1 ? "default" : "secondary"}>
                            P{mapping.priority}
                          </Badge>
                          <span className="font-mono text-sm">{mapping.para}</span>
                          <span className="text-sm text-muted-foreground">{mapping.category}</span>
                        </div>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                          {mapping.coverage}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="provenance">
              <Card>
                <CardHeader>
                  <CardTitle>Blockchain-Style Provenance Tracking</CardTitle>
                  <CardDescription>
                    Multi-source verification with confidence scoring
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {provenanceChain.map((source) => (
                      <div key={source.source} className="p-4 bg-accent/50 rounded space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{source.source}</span>
                          <Badge 
                            variant={source.confidence >= 0.90 ? "default" : "secondary"}
                            className={source.confidence >= 0.90 ? "bg-green-500" : ""}
                          >
                            {(source.confidence * 100).toFixed(0)}% confidence
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Verified: {source.verified}/{source.total}</span>
                          <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-green-500"
                              style={{ width: `${(source.verified / source.total) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Framework Features */}
          <Card>
            <CardHeader>
              <CardTitle>Framework Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border-l-4 border-l-blue-500 bg-accent/30 rounded-r">
                  <h4 className="font-semibold mb-1">14D Agent State Modeling</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive state tracking across 14 dimensions including knowledge, intent, capability, financial motive, and evidence quality
                  </p>
                </div>
                <div className="p-4 border-l-4 border-l-green-500 bg-accent/30 rounded-r">
                  <h4 className="font-semibold mb-1">Multi-Source Verification</h4>
                  <p className="text-sm text-muted-foreground">
                    1000+ verification checks per entity with quintuple-source verification for critical attributes
                  </p>
                </div>
                <div className="p-4 border-l-4 border-l-purple-500 bg-accent/30 rounded-r">
                  <h4 className="font-semibold mb-1">Temporal Correlation</h4>
                  <p className="text-sm text-muted-foreground">
                    Timeline-aware relation tracking with Ketoni deadline correlation analysis
                  </p>
                </div>
                <div className="p-4 border-l-4 border-l-orange-500 bg-accent/30 rounded-r">
                  <h4 className="font-semibold mb-1">Optimal Resolution Pathways</h4>
                  <p className="text-sm text-muted-foreground">
                    Evidence-based resolution strategies with JR-DR synergy optimization
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Links */}
          <div className="flex gap-4">
            <Link href="/agents">
              <Button variant="outline" className="gap-2">
                View Agent Models <ArrowLeft className="w-4 h-4 rotate-180" />
              </Button>
            </Link>
            <Link href="/responses">
              <Button variant="outline" className="gap-2">
                View Response Strategies <ArrowLeft className="w-4 h-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
