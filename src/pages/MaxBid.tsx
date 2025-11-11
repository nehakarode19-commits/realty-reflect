import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MaxBid = () => {
  return (
    <Layout>
      <div className="space-y-6 max-w-5xl">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Max Bid Calculation</h1>
        </div>

        <Card className="shadow-lg">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Rehab</Label>
                  <Input placeholder="Rehab" className="border-muted" />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Min Bid</Label>
                  <Input placeholder="Min Bid" className="border-muted" />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">ARV</Label>
                  <Input placeholder="ARV" className="border-muted" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-muted-foreground">Address</Label>
                <Input placeholder="From Date" className="border-muted" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Liens</Label>
                  <Input placeholder="Liens" className="border-muted" />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Cash4keys</Label>
                  <Input placeholder="Cash4keys" className="border-muted" />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">TTS</Label>
                  <Input placeholder="TTS" className="border-muted" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-muted-foreground">MAX BID</Label>
                  <Input placeholder="Max Bid" className="border-muted" />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Property Notes</Label>
                  <Input placeholder="Property Notes" className="border-muted" />
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-primary to-secondary px-8">
                  Save
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MaxBid;
