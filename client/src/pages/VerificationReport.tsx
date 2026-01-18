import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VerificationReport() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold">Verification Report V72</h1>
          <p className="text-lg text-muted-foreground">4,500+ verification checks with comprehensive accuracy assessment</p>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader><CardTitle className="text-lg">Verification Completeness</CardTitle></CardHeader>
              <CardContent><p className="text-3xl font-bold text-green-500">0.96</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Factual Accuracy</CardTitle></CardHeader>
              <CardContent><p className="text-3xl font-bold text-green-500">0.96</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Evidence Quality</CardTitle></CardHeader>
              <CardContent><p className="text-3xl font-bold text-green-500">0.94</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg">Provenance Quality</CardTitle></CardHeader>
              <CardContent><p className="text-3xl font-bold text-green-500">0.95</p></CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
