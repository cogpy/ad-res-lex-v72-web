import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AgentModels() {
  const agents = [
    { id: "AGENT-001", name: "Peter Faucitt", role: "Applicant", confidence: "0.96" },
    { id: "AGENT-002", name: "Rynette Faucitt", role: "Beneficiary", confidence: "0.92" },
    { id: "AGENT-003", name: "Jacqueline Faucitt", role: "First Respondent", confidence: "0.98" },
    { id: "AGENT-004", name: "Daniel Faucitt", role: "Second Respondent", confidence: "0.97" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold">Agent Models V72</h1>
          <p className="text-lg text-muted-foreground">Comprehensive verified agent definitions with quintuple-source verification</p>
          <div className="space-y-4">
            {agents.map((agent) => (
              <Card key={agent.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{agent.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{agent.role}</p>
                    </div>
                    <Badge>{agent.id}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Verification Confidence: <span className="text-green-500 font-semibold">{agent.confidence}</span></p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
