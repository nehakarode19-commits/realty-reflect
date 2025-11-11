import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { DollarSign } from "lucide-react";

const MaxBid = () => {
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Max bid calculated!");
  };

  return (
    <Layout>
      <div className="space-y-6 max-w-3xl">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Max Bid Calculator</h1>
          <p className="text-muted-foreground mt-1">Calculate your maximum bid for properties</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Calculation Parameters</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="arv">After Repair Value (ARV)</Label>
                  <Input
                    id="arv"
                    type="number"
                    placeholder="Enter ARV"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rehab">Rehab Costs</Label>
                  <Input
                    id="rehab"
                    type="number"
                    placeholder="Enter rehab costs"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profit">Desired Profit Margin (%)</Label>
                  <Input
                    id="profit"
                    type="number"
                    placeholder="e.g., 20"
                    defaultValue={20}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="holdingCosts">Holding Costs</Label>
                  <Input
                    id="holdingCosts"
                    type="number"
                    placeholder="Monthly holding costs"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="closingCosts">Closing Costs (%)</Label>
                  <Input
                    id="closingCosts"
                    type="number"
                    placeholder="e.g., 3"
                    defaultValue={3}
                    required
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-border space-y-4">
                <div className="bg-muted p-6 rounded-lg space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">ARV</span>
                    <span className="font-semibold">$185,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">- Rehab Costs</span>
                    <span className="font-semibold">$42,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">- Profit (20%)</span>
                    <span className="font-semibold">$37,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">- Holding Costs</span>
                    <span className="font-semibold">$7,500</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">- Closing Costs (3%)</span>
                    <span className="font-semibold">$5,550</span>
                  </div>
                  <div className="pt-3 border-t border-border flex items-center justify-between">
                    <span className="text-lg font-semibold">Maximum Bid</span>
                    <span className="text-3xl font-bold text-primary">$92,950</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="bg-gradient-to-r from-primary to-secondary">
                    Calculate Max Bid
                  </Button>
                  <Button type="button" variant="outline">
                    Reset
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MaxBid;
