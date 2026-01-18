import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle, FileCheck, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VerificationReport() {
  const overallMetrics = [
    { label: "Verification Completeness", value: 0.96, target: 0.95, status: "pass" },
    { label: "Factual Accuracy", value: 0.96, target: 0.95, status: "pass" },
    { label: "Evidence Quality", value: 0.94, target: 0.90, status: "pass" },
    { label: "Provenance Quality", value: 0.95, target: 0.90, status: "pass" },
  ];

  const verificationBreakdown = [
    { category: "Entity Verification", checks: 1200, passed: 1152, failed: 48, rate: 0.96 },
    { category: "Relation Verification", checks: 800, passed: 768, failed: 32, rate: 0.96 },
    { category: "Evidence Verification", checks: 1500, passed: 1410, failed: 90, rate: 0.94 },
    { category: "Temporal Verification", checks: 600, passed: 582, failed: 18, rate: 0.97 },
    { category: "Provenance Verification", checks: 400, passed: 380, failed: 20, rate: 0.95 },
  ];

  const criticalFindings = [
    { 
      id: "VF-001", 
      type: "pass", 
      title: "Ketoni ZAR 18.75M Verification",
      description: "Ketoni payout amount verified from primary source documents",
      confidence: 0.98
    },
    { 
      id: "VF-002", 
      type: "pass", 
      title: "Bantjies Appointment Timeline",
      description: "July 2024 appointment date verified from trust records",
      confidence: 0.97
    },
    { 
      id: "VF-003", 
      type: "pass", 
      title: "Trust Administration Records",
      description: "All trust administration claims verified against records",
      confidence: 0.96
    },
    { 
      id: "VF-004", 
      type: "warning", 
      title: "Communication Records",
      description: "Some communication records incomplete - partial verification",
      confidence: 0.72
    },
    { 
      id: "VF-005", 
      type: "pass", 
      title: "Financial Exposure Calculation",
      description: "ZAR 19.25M+ total exposure verified from multiple sources",
      confidence: 0.95
    },
  ];

  const verificationLevels = [
    { level: 5, name: "Quintuple-Source", description: "5+ independent sources with cross-validation", count: 12 },
    { level: 4, name: "Quad-Source", description: "4 independent sources with triangulation", count: 28 },
    { level: 3, name: "Triple-Source", description: "3 independent sources with corroboration", count: 45 },
    { level: 2, name: "Dual-Source", description: "2 independent sources with confirmation", count: 38 },
    { level: 1, name: "Single-Source", description: "1 primary source with documentation", count: 22 },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass": return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "warning": return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "fail": return <XCircle className="w-5 h-5 text-red-500" />;
      default: return null;
    }
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
              <h1 className="text-4xl font-bold">Verification Report V72</h1>
              <Badge className="bg-green-500">96% Complete</Badge>
            </div>
            <p className="text-lg text-muted-foreground">
              4,500+ verification checks with comprehensive accuracy assessment and multi-source triangulation
            </p>
          </div>

          {/* Overall Metrics */}
          <div className="grid md:grid-cols-4 gap-4">
            {overallMetrics.map((metric) => (
              <Card key={metric.label} className={metric.status === "pass" ? "border-green-500/30" : "border-red-500/30"}>
                <CardContent className="pt-6">
                  <div className="text-center">
                    {metric.status === "pass" ? (
                      <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-green-500" />
                    ) : (
                      <XCircle className="w-8 h-8 mx-auto mb-2 text-red-500" />
                    )}
                    <div className="text-3xl font-bold text-green-500">{metric.value.toFixed(2)}</div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">Target: {metric.target}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="breakdown" className="space-y-6">
            <TabsList>
              <TabsTrigger value="breakdown">Verification Breakdown</TabsTrigger>
              <TabsTrigger value="findings">Critical Findings</TabsTrigger>
              <TabsTrigger value="levels">Verification Levels</TabsTrigger>
            </TabsList>

            <TabsContent value="breakdown">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileCheck className="w-5 h-5" />
                    Verification Breakdown by Category
                  </CardTitle>
                  <CardDescription>
                    4,500 total checks across 5 verification categories
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {verificationBreakdown.map((cat) => (
                    <div key={cat.category} className="p-4 bg-accent/50 rounded space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{cat.category}</span>
                        <Badge variant={cat.rate >= 0.95 ? "default" : "secondary"} className={cat.rate >= 0.95 ? "bg-green-500" : ""}>
                          {(cat.rate * 100).toFixed(0)}%
                        </Badge>
                      </div>
                      <Progress value={cat.rate * 100} className="h-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Total: {cat.checks}</span>
                        <span className="text-green-500">Passed: {cat.passed}</span>
                        <span className="text-red-500">Failed: {cat.failed}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="findings" className="space-y-4">
              {criticalFindings.map((finding) => (
                <Card key={finding.id} className={finding.type === "warning" ? "border-yellow-500/30" : ""}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        {getStatusIcon(finding.type)}
                        <div>
                          <CardTitle className="text-lg">{finding.title}</CardTitle>
                          <CardDescription>{finding.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{finding.id}</Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          Confidence: <span className={finding.confidence >= 0.90 ? "text-green-500" : "text-yellow-500"}>
                            {(finding.confidence * 100).toFixed(0)}%
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="levels">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Multi-Source Verification Levels
                  </CardTitle>
                  <CardDescription>
                    Verification confidence based on number of independent sources
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {verificationLevels.map((level) => (
                    <div key={level.level} className="flex items-center gap-4 p-4 bg-accent/50 rounded">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        L{level.level}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{level.name}</p>
                        <p className="text-sm text-muted-foreground">{level.description}</p>
                      </div>
                      <Badge variant="secondary">{level.count} items</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Summary Statistics */}
          <Card className="bg-gradient-to-br from-green-500/5 to-blue-500/5 border-green-500/20">
            <CardHeader>
              <CardTitle>Verification Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">4,500+</div>
                  <p className="text-sm text-muted-foreground">Total Checks</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">4,292</div>
                  <p className="text-sm text-muted-foreground">Passed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">208</div>
                  <p className="text-sm text-muted-foreground">Failed/Incomplete</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">145</div>
                  <p className="text-sm text-muted-foreground">Entities Verified</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Methodology */}
          <Card>
            <CardHeader>
              <CardTitle>Verification Methodology</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border-l-4 border-l-blue-500 bg-accent/30 rounded-r">
                  <h4 className="font-semibold mb-1">Primary Source Verification</h4>
                  <p className="text-sm text-muted-foreground">
                    All critical claims verified against primary source documents including trust deeds, bank statements, and official records
                  </p>
                </div>
                <div className="p-4 border-l-4 border-l-green-500 bg-accent/30 rounded-r">
                  <h4 className="font-semibold mb-1">Multi-Source Triangulation</h4>
                  <p className="text-sm text-muted-foreground">
                    Critical attributes verified from 3-5 independent sources with cross-validation
                  </p>
                </div>
                <div className="p-4 border-l-4 border-l-purple-500 bg-accent/30 rounded-r">
                  <h4 className="font-semibold mb-1">Temporal Consistency</h4>
                  <p className="text-sm text-muted-foreground">
                    Timeline events verified for consistency and correlation with Ketoni deadline
                  </p>
                </div>
                <div className="p-4 border-l-4 border-l-orange-500 bg-accent/30 rounded-r">
                  <h4 className="font-semibold mb-1">Blockchain-Style Provenance</h4>
                  <p className="text-sm text-muted-foreground">
                    Evidence chain tracked with immutable provenance records and quality scoring
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Links */}
          <div className="flex gap-4">
            <Link href="/frameworks">
              <Button variant="outline" className="gap-2">
                View All Frameworks <ArrowLeft className="w-4 h-4 rotate-180" />
              </Button>
            </Link>
            <a href="https://github.com/cogpy/ad-res-j7" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                View Source Files <ArrowLeft className="w-4 h-4 rotate-180" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
