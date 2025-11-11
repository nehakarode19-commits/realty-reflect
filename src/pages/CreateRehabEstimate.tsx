import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CreateRehabEstimate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    propertyName: "",
    sqft: "",
    rehabType: "",
    address: "",
    fromDate: "",
    rehabRange: "",
    roughRehabEstimate: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
          <h1 className="text-3xl font-bold text-foreground">Create Rehab Estimator</h1>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="propertyName">Property Name</Label>
                <Input
                  id="propertyName"
                  placeholder="Property Name"
                  value={formData.propertyName}
                  onChange={(e) => handleInputChange("propertyName", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sqft">SQ FT</Label>
                <Input
                  id="sqft"
                  placeholder="SQ FT"
                  value={formData.sqft}
                  onChange={(e) => handleInputChange("sqft", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rehabType">Rehab Type</Label>
                <Input
                  id="rehabType"
                  placeholder="Rehab Type"
                  value={formData.rehabType}
                  onChange={(e) => handleInputChange("rehabType", e.target.value)}
                />
              </div>

              <div className="space-y-2 md:col-span-3">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="From Date"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                />
              </div>

              <div className="space-y-2 md:col-span-3">
                <Label htmlFor="fromDate">From Date</Label>
                <Input
                  id="fromDate"
                  type="date"
                  value={formData.fromDate}
                  onChange={(e) => handleInputChange("fromDate", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rehabRange">Rehab Range</Label>
                <Input
                  id="rehabRange"
                  placeholder="Rehab Range"
                  value={formData.rehabRange}
                  onChange={(e) => handleInputChange("rehabRange", e.target.value)}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="roughRehabEstimate">Rough Rehab Estimate</Label>
                <Input
                  id="roughRehabEstimate"
                  placeholder="Rough Rehab Estimate"
                  value={formData.roughRehabEstimate}
                  onChange={(e) => handleInputChange("roughRehabEstimate", e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button onClick={handleSave} className="bg-primary text-primary-foreground hover:bg-primary/90">
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CreateRehabEstimate;
