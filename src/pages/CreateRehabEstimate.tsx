import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CreateRehabEstimate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [estimates, setEstimates] = useState({
    roofRepair: 0,
    hvacSystem: 0,
    plumbing: 0,
    electrical: 0,
    kitchenRemodel: 0,
    bathroomRemodel: 0,
    flooring: 0,
    paintInteriorExterior: 0,
    windowsDoors: 0,
    landscaping: 0,
  });

  const [totalEstimate, setTotalEstimate] = useState(0);

  const handleInputChange = (field: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    setEstimates(prev => ({ ...prev, [field]: numValue }));
  };

  const calculateTotal = () => {
    const total = Object.values(estimates).reduce((sum, val) => sum + val, 0);
    setTotalEstimate(total);
  };

  const resetForm = () => {
    setEstimates({
      roofRepair: 0,
      hvacSystem: 0,
      plumbing: 0,
      electrical: 0,
      kitchenRemodel: 0,
      bathroomRemodel: 0,
      flooring: 0,
      paintInteriorExterior: 0,
      windowsDoors: 0,
      landscaping: 0,
    });
    setTotalEstimate(0);
  };

  const handleSave = () => {
    toast({
      title: "Success",
      description: "Rehab estimate saved successfully",
    });
    navigate("/rehab-estimator");
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Rehab Estimator</h1>
          <p className="text-muted-foreground mt-2">Calculate renovation costs for your property</p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Estimate Breakdown</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="roofRepair">Roof Repair/Replace</Label>
                <Input
                  id="roofRepair"
                  type="number"
                  value={estimates.roofRepair || ""}
                  onChange={(e) => handleInputChange("roofRepair", e.target.value)}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hvacSystem">HVAC System</Label>
                <Input
                  id="hvacSystem"
                  type="number"
                  value={estimates.hvacSystem || ""}
                  onChange={(e) => handleInputChange("hvacSystem", e.target.value)}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="plumbing">Plumbing</Label>
                <Input
                  id="plumbing"
                  type="number"
                  value={estimates.plumbing || ""}
                  onChange={(e) => handleInputChange("plumbing", e.target.value)}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="electrical">Electrical</Label>
                <Input
                  id="electrical"
                  type="number"
                  value={estimates.electrical || ""}
                  onChange={(e) => handleInputChange("electrical", e.target.value)}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="kitchenRemodel">Kitchen Remodel</Label>
                <Input
                  id="kitchenRemodel"
                  type="number"
                  value={estimates.kitchenRemodel || ""}
                  onChange={(e) => handleInputChange("kitchenRemodel", e.target.value)}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bathroomRemodel">Bathroom Remodel</Label>
                <Input
                  id="bathroomRemodel"
                  type="number"
                  value={estimates.bathroomRemodel || ""}
                  onChange={(e) => handleInputChange("bathroomRemodel", e.target.value)}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="flooring">Flooring</Label>
                <Input
                  id="flooring"
                  type="number"
                  value={estimates.flooring || ""}
                  onChange={(e) => handleInputChange("flooring", e.target.value)}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paintInteriorExterior">Interior/Exterior Paint</Label>
                <Input
                  id="paintInteriorExterior"
                  type="number"
                  value={estimates.paintInteriorExterior || ""}
                  onChange={(e) => handleInputChange("paintInteriorExterior", e.target.value)}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="windowsDoors">Windows & Doors</Label>
                <Input
                  id="windowsDoors"
                  type="number"
                  value={estimates.windowsDoors || ""}
                  onChange={(e) => handleInputChange("windowsDoors", e.target.value)}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="landscaping">Landscaping</Label>
                <Input
                  id="landscaping"
                  type="number"
                  value={estimates.landscaping || ""}
                  onChange={(e) => handleInputChange("landscaping", e.target.value)}
                  placeholder="0"
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Total Rehab Estimate</h3>
                <p className="text-3xl font-bold text-primary">
                  ${totalEstimate.toLocaleString()}
                </p>
              </div>

              <div className="flex gap-4">
                <Button onClick={calculateTotal} className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Calculate Total
                </Button>
                <Button variant="outline" onClick={resetForm}>
                  Reset
                </Button>
                <Button onClick={handleSave} className="ml-auto">
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

export default CreateRehabEstimate;
