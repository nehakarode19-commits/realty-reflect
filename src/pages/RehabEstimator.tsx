import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Calculator } from "lucide-react";

const rehabCategories = [
  { id: "roof", label: "Roof Repair/Replace" },
  { id: "hvac", label: "HVAC System" },
  { id: "plumbing", label: "Plumbing" },
  { id: "electrical", label: "Electrical" },
  { id: "kitchen", label: "Kitchen Remodel" },
  { id: "bathroom", label: "Bathroom Remodel" },
  { id: "flooring", label: "Flooring" },
  { id: "paint", label: "Interior/Exterior Paint" },
  { id: "windows", label: "Windows & Doors" },
  { id: "landscaping", label: "Landscaping" },
];

const RehabEstimator = () => {
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Rehab estimate calculated!");
  };

  return (
    <Layout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Rehab Estimator</h1>
          <p className="text-muted-foreground mt-1">Calculate renovation costs for your property</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Estimate Breakdown</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rehabCategories.map((category) => (
                  <div key={category.id} className="space-y-2">
                    <Label htmlFor={category.id}>{category.label}</Label>
                    <Input
                      id={category.id}
                      type="number"
                      placeholder="$0"
                      defaultValue={0}
                    />
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Total Rehab Estimate</span>
                  <span className="text-3xl font-bold text-primary">$42,000</span>
                </div>
                <div className="flex gap-4">
                  <Button type="submit" className="bg-gradient-to-r from-primary to-secondary">
                    Calculate Total
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

export default RehabEstimator;
