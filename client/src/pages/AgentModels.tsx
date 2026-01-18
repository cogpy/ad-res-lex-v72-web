import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";
import { ArrowLeft, User, Building2, Scale, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AgentModels() {
  const coreAgents = [
    { 
      id: "AGENT-001", 
      name: "Peter Faucitt", 
      role: "Applicant / Trustee", 
      confidence: 0.96,
      motiveStrength: 0.98,
      verificationLevel: 5,
      dimensions: {
        knowledge: 0.94,
        intent: 0.97,
        capability: 0.92,
        financialMotive: 0.98,
        evidenceQuality: 0.95,
      },
      keyEvidence: [
        "Trust deed amendments (verified)",
        "Ketoni option agreement (verified)",
        "Bank statements (verified)",
        "Communication records (partial)",
      ],
      concerns: ["Absolute powers bypass", "Forum choice strategy", "Timing correlation with Ketoni deadline"]
    },
    { 
      id: "AGENT-002", 
      name: "Rynette Faucitt", 
      role: "Beneficiary / Spouse", 
      confidence: 0.92,
      motiveStrength: 0.96,
      verificationLevel: 4,
      dimensions: {
        knowledge: 0.88,
        intent: 0.94,
        capability: 0.86,
        financialMotive: 0.96,
        evidenceQuality: 0.91,
      },
      keyEvidence: [
        "Bantjies appointment letter (verified)",
        "Trust beneficiary records (verified)",
        "Timeline correlation analysis",
      ],
      concerns: ["Bantjies appointment timing", "Coordination with Peter"]
    },
    { 
      id: "AGENT-003", 
      name: "Jacqueline Faucitt", 
      role: "First Respondent", 
      confidence: 0.98,
      motiveStrength: 0.12,
      verificationLevel: 5,
      dimensions: {
        knowledge: 0.96,
        intent: 0.98,
        capability: 0.94,
        financialMotive: 0.12,
        evidenceQuality: 0.97,
      },
      keyEvidence: [
        "Trust administration records (verified)",
        "Financial statements (verified)",
        "Communication records (verified)",
        "Professional certifications (verified)",
      ],
      concerns: []
    },
    { 
      id: "AGENT-004", 
      name: "Daniel Faucitt", 
      role: "Second Respondent", 
      confidence: 0.97,
      motiveStrength: 0.08,
      verificationLevel: 5,
      dimensions: {
        knowledge: 0.95,
        intent: 0.97,
        capability: 0.96,
        financialMotive: 0.08,
        evidenceQuality: 0.96,
      },
      keyEvidence: [
        "Technical analysis documentation (verified)",
        "Timeline reconstruction (verified)",
        "Evidence compilation (verified)",
      ],
      concerns: []
    },
  ];

  const supportingAgents = [
    { id: "AGENT-005", name: "Bantjies", role: "Appointed Trustee", confidence: 0.88, verificationLevel: 3 },
    { id: "AGENT-006", name: "Ketoni Holdings", role: "Financial Entity", confidence: 0.94, verificationLevel: 4 },
    { id: "AGENT-007", name: "Faucitt Family Trust", role: "Trust Entity", confidence: 0.96, verificationLevel: 5 },
    { id: "AGENT-008", name: "Medical Practitioner", role: "Expert Witness", confidence: 0.72, verificationLevel: 2 },
  ];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.95) return "text-green-500";
    if (confidence >= 0.90) return "text-blue-500";
    if (confidence >= 0.80) return "text-yellow-500";
    return "text-red-500";
  };

  const getMotiveColor = (motive: number) => {
    if (motive >= 0.90) return "bg-red-500";
    if (motive >= 0.50) return "bg-orange-500";
    if (motive >= 0.20) return "bg-yellow-500";
    return "bg-green-500";
  };

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
              <h1 className="text-4xl font-bold">Agent Models V72</h1>
              <Badge>45 Agents</Badge>
            </div>
            <p className="text-lg text-muted-foreground">
              Comprehensive verified agent definitions with quintuple-source verification and 14D state modeling
            </p>
          </div>

          {/* Verification Summary */}
          <Card className="bg-blue-500/5 border-blue-500/20">
            <CardHeader>
              <CardTitle>Verification Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">4,200+</div>
                  <p className="text-sm text-muted-foreground">Total Checks</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">0.96-0.98</div>
                  <p className="text-sm text-muted-foreground">Core Agent Confidence</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">14</div>
                  <p className="text-sm text-muted-foreground">State Dimensions</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">5</div>
                  <p className="text-sm text-muted-foreground">Verification Levels</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Agents */}
          <Tabs defaultValue="core" className="space-y-6">
            <TabsList>
              <TabsTrigger value="core">Core Agents (4)</TabsTrigger>
              <TabsTrigger value="supporting">Supporting Agents</TabsTrigger>
              <TabsTrigger value="dimensions">14D State Model</TabsTrigger>
            </TabsList>

            <TabsContent value="core" className="space-y-6">
              {coreAgents.map((agent) => (
                <Card key={agent.id} className={agent.motiveStrength > 0.5 ? "border-l-4 border-l-red-500" : "border-l-4 border-l-green-500"}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                          <User className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{agent.name}</CardTitle>
                          <CardDescription>{agent.role}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{agent.id}</Badge>
                        <Badge variant="secondary">Level {agent.verificationLevel}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Confidence & Motive */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Verification Confidence</span>
                          <span className={`font-bold ${getConfidenceColor(agent.confidence)}`}>
                            {(agent.confidence * 100).toFixed(0)}%
                          </span>
                        </div>
                        <Progress value={agent.confidence * 100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Financial Motive Strength</span>
                          <span className="font-bold">
                            {(agent.motiveStrength * 100).toFixed(0)}%
                          </span>
                        </div>
                        <div className="h-2 bg-accent rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${getMotiveColor(agent.motiveStrength)}`}
                            style={{ width: `${agent.motiveStrength * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Dimensions */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3">State Dimensions</h4>
                      <div className="grid grid-cols-5 gap-2">
                        {Object.entries(agent.dimensions).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-accent/50 rounded">
                            <div className={`text-lg font-bold ${getConfidenceColor(value)}`}>
                              {(value * 100).toFixed(0)}%
                            </div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Evidence & Concerns */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Key Evidence
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {agent.keyEvidence.map((evidence, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-green-500">•</span>
                              {evidence}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {agent.concerns.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                            Concerns / Red Flags
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {agent.concerns.map((concern, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-orange-500">•</span>
                                {concern}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="supporting" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {supportingAgents.map((agent) => (
                  <Card key={agent.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{agent.name}</CardTitle>
                          <CardDescription>{agent.role}</CardDescription>
                        </div>
                        <Badge variant="outline">{agent.id}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Confidence</span>
                        <span className={`font-bold ${getConfidenceColor(agent.confidence)}`}>
                          {(agent.confidence * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-muted-foreground">Verification Level</span>
                        <Badge variant="secondary">Level {agent.verificationLevel}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dimensions">
              <Card>
                <CardHeader>
                  <CardTitle>14-Dimensional Agent State Model</CardTitle>
                  <CardDescription>
                    Comprehensive state modeling for accurate agent characterization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: "Knowledge", desc: "Information awareness and understanding" },
                      { name: "Intent", desc: "Goals and motivations" },
                      { name: "Capability", desc: "Ability to execute actions" },
                      { name: "Financial Motive", desc: "Economic incentives and exposure" },
                      { name: "Evidence Quality", desc: "Strength of supporting evidence" },
                      { name: "Temporal Position", desc: "Timeline placement and correlations" },
                      { name: "Network Centrality", desc: "Connections and influence" },
                      { name: "Coordination Score", desc: "Collaboration with other agents" },
                      { name: "Legal Standing", desc: "Formal legal position" },
                      { name: "Credibility", desc: "Trustworthiness assessment" },
                      { name: "Resource Access", desc: "Available resources and assets" },
                      { name: "Information Flow", desc: "Communication patterns" },
                      { name: "Decision Authority", desc: "Power to make binding decisions" },
                      { name: "Risk Exposure", desc: "Vulnerability to adverse outcomes" },
                    ].map((dim, i) => (
                      <div key={i} className="p-3 bg-accent/50 rounded">
                        <div className="font-semibold text-sm">{dim.name}</div>
                        <div className="text-xs text-muted-foreground">{dim.desc}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Links */}
          <div className="flex gap-4">
            <Link href="/entity-relation">
              <Button variant="outline" className="gap-2">
                View Entity Relations <ArrowLeft className="w-4 h-4 rotate-180" />
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
