import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";
import { ArrowLeft, Scale, Users, FileText, Zap, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResponseStrategies() {
  const priorityParagraphs = [
    { 
      id: "AD 5.1", 
      title: "Trust Administration Claims", 
      priority: 1,
      jrScore: 0.97,
      drScore: 0.98,
      synergy: 0.98,
      jrFocus: "Fiduciary duty compliance, trust law precedents",
      drFocus: "Timeline analysis, financial record verification",
      evidence: ["Trust deed", "Bank statements", "Administration records"],
      status: "Complete"
    },
    { 
      id: "AD 7.2", 
      title: "Financial Motive Analysis", 
      priority: 1,
      jrScore: 0.96,
      drScore: 0.97,
      synergy: 0.97,
      jrFocus: "Legal implications of financial exposure",
      drFocus: "Ketoni payout correlation, temporal analysis",
      evidence: ["Ketoni agreement", "Trust financials", "Timeline"],
      status: "Complete"
    },
    { 
      id: "AD 12.3", 
      title: "Bantjies Appointment", 
      priority: 1,
      jrScore: 0.98,
      drScore: 0.97,
      synergy: 0.98,
      jrFocus: "Appointment validity, procedural compliance",
      drFocus: "Timing correlation with Ketoni deadline",
      evidence: ["Appointment letter", "Trust resolution", "Timeline"],
      status: "Complete"
    },
    { 
      id: "AD 15.1", 
      title: "Medical Testing Demands", 
      priority: 1,
      jrScore: 0.95,
      drScore: 0.96,
      synergy: 0.96,
      jrFocus: "Legal basis analysis, rights implications",
      drFocus: "Strategic timing analysis, motive correlation",
      evidence: ["Medical demands", "Legal correspondence"],
      status: "Complete"
    },
    { 
      id: "AD 18.4", 
      title: "Card Cancellation", 
      priority: 1,
      jrScore: 0.97,
      drScore: 0.98,
      synergy: 0.97,
      jrFocus: "Fiduciary breach analysis",
      drFocus: "Timeline reconstruction, impact quantification",
      evidence: ["Bank records", "Communication logs"],
      status: "Complete"
    },
  ];

  const responseProtocol = [
    { step: 1, name: "Claim Extraction", description: "Extract core assertion from AD paragraph" },
    { step: 2, name: "JR Analysis", description: "Legal-business perspective with trust law focus" },
    { step: 3, name: "DR Analysis", description: "Technical-analytical perspective with quantitative focus" },
    { step: 4, name: "Evidence Mapping", description: "Link supporting evidence to claims" },
    { step: 5, name: "Synergy Optimization", description: "Merge JR-DR perspectives for maximum impact" },
    { step: 6, name: "Verification", description: "Multi-source verification of all claims" },
  ];

  const colorCoding = [
    { type: "AD Paragraph", colors: ["Green (neutral)", "Yellow (moderate)", "Red (serious allegation)"] },
    { type: "Response", colors: ["Light blue (weak evidence)", "Medium blue (moderate)", "Dark blue (strong evidence)"] },
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
              <h1 className="text-4xl font-bold">Response Strategies V72</h1>
              <Badge className="bg-blue-500">0.98 Synergy</Badge>
            </div>
            <p className="text-lg text-muted-foreground">
              JR-DR synergy optimization with cognitive emergence analysis and evidence-based refutation
            </p>
          </div>

          {/* JR-DR Overview */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Scale className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <CardTitle>Jacqueline Response (JR)</CardTitle>
                    <CardDescription>Legal-Business Perspective</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <p className="text-muted-foreground">Focus areas:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Trust law and fiduciary duties
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Legal precedents and case law
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Business administration context
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Professional compliance
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle>Daniel Response (DR)</CardTitle>
                    <CardDescription>Technical-Analytical Perspective</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <p className="text-muted-foreground">Focus areas:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Timeline reconstruction and correlation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Quantitative analysis and metrics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Evidence verification and provenance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Pattern detection and inference
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="priority" className="space-y-6">
            <TabsList>
              <TabsTrigger value="priority">Priority Paragraphs</TabsTrigger>
              <TabsTrigger value="protocol">Response Protocol</TabsTrigger>
              <TabsTrigger value="coloring">Color Coding System</TabsTrigger>
            </TabsList>

            <TabsContent value="priority" className="space-y-4">
              {priorityParagraphs.map((para) => (
                <Card key={para.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Badge variant="destructive">P{para.priority}</Badge>
                        <div>
                          <CardTitle className="text-lg">{para.id}: {para.title}</CardTitle>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500">
                        {para.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Scores */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-muted-foreground">JR Score</span>
                          <span className="text-sm font-semibold text-purple-500">{para.jrScore}</span>
                        </div>
                        <Progress value={para.jrScore * 100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-muted-foreground">DR Score</span>
                          <span className="text-sm font-semibold text-blue-500">{para.drScore}</span>
                        </div>
                        <Progress value={para.drScore * 100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-muted-foreground">Synergy</span>
                          <span className="text-sm font-semibold text-green-500">{para.synergy}</span>
                        </div>
                        <Progress value={para.synergy * 100} className="h-2" />
                      </div>
                    </div>

                    {/* Focus Areas */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-purple-500/5 rounded border border-purple-500/20">
                        <p className="text-xs font-semibold text-purple-500 mb-1">JR Focus</p>
                        <p className="text-sm text-muted-foreground">{para.jrFocus}</p>
                      </div>
                      <div className="p-3 bg-blue-500/5 rounded border border-blue-500/20">
                        <p className="text-xs font-semibold text-blue-500 mb-1">DR Focus</p>
                        <p className="text-sm text-muted-foreground">{para.drFocus}</p>
                      </div>
                    </div>

                    {/* Evidence */}
                    <div>
                      <p className="text-xs font-semibold mb-2">Supporting Evidence</p>
                      <div className="flex flex-wrap gap-2">
                        {para.evidence.map((ev, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            <FileText className="w-3 h-3 mr-1" />
                            {ev}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="protocol">
              <Card>
                <CardHeader>
                  <CardTitle>Response Generation Protocol</CardTitle>
                  <CardDescription>
                    Systematic approach to generating JR-DR synergized responses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {responseProtocol.map((step) => (
                      <div key={step.step} className="flex items-start gap-4 p-4 bg-accent/50 rounded">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <p className="font-semibold">{step.name}</p>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="coloring">
              <Card>
                <CardHeader>
                  <CardTitle>Color Coding System</CardTitle>
                  <CardDescription>
                    Visual indicators for paragraph severity and evidence strength
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {colorCoding.map((coding) => (
                    <div key={coding.type} className="space-y-3">
                      <h4 className="font-semibold">{coding.type}</h4>
                      <div className="flex flex-wrap gap-3">
                        {coding.colors.map((color, i) => {
                          const bgColor = color.includes("Green") ? "bg-green-500" :
                                         color.includes("Yellow") ? "bg-yellow-500" :
                                         color.includes("Red") ? "bg-red-500" :
                                         color.includes("Light blue") ? "bg-blue-300" :
                                         color.includes("Medium blue") ? "bg-blue-500" :
                                         "bg-blue-700";
                          return (
                            <div key={i} className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded ${bgColor}`} />
                              <span className="text-sm text-muted-foreground">{color}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  <div className="p-4 bg-accent/50 rounded mt-4">
                    <h4 className="font-semibold mb-2">Indexing Protocol</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><code className="bg-background px-1 rounded">AD X.Y</code> → Original paragraph reference</p>
                      <p><code className="bg-background px-1 rounded">JR X.Y.1</code> → Jacqueline's response point 1</p>
                      <p><code className="bg-background px-1 rounded">DR X.Y.1</code> → Daniel's response point 1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Cognitive Emergence */}
          <Card className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Cognitive Emergence Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The JR-DR synergy creates emergent insights that neither perspective could achieve alone. 
                By combining Jacqueline's legal-business expertise with Daniel's technical-analytical rigor, 
                the response strategy achieves:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded">
                  <div className="text-2xl font-bold text-purple-500">0.98</div>
                  <p className="text-sm text-muted-foreground">Synergy Score</p>
                </div>
                <div className="text-center p-4 bg-background rounded">
                  <div className="text-2xl font-bold text-blue-500">+15%</div>
                  <p className="text-sm text-muted-foreground">Evidence Coverage</p>
                </div>
                <div className="text-center p-4 bg-background rounded">
                  <div className="text-2xl font-bold text-green-500">+22%</div>
                  <p className="text-sm text-muted-foreground">Argument Strength</p>
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
            <Link href="/verification">
              <Button variant="outline" className="gap-2">
                View Verification Report <ArrowLeft className="w-4 h-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
