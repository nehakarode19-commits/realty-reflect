import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateRehabEstimate = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    propertyName: "sunset villa",
    sqFootage: "32",
    rehabType: "VACANT ROUGH",
    rehabValue: "$65",
    rehabEstimate: "2080",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    toast.success("Rehab estimate saved successfully");
    navigate("/rehab-estimator");
  };

  const handleCancel = () => {
    navigate("/rehab-estimator");
  };

  return (
    <Layout>
      <div className="space-y-6 max-w-5xl">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Calculate Rehab Estimate</h1>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Rehab Estimation Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="propertyName">Property Name:</Label>
                <Input
                  id="propertyName"
                  value={formData.propertyName}
                  onChange={(e) => handleInputChange("propertyName", e.target.value)}
                  placeholder="Property name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sqFootage">Sq Footage:</Label>
                <Input
                  id="sqFootage"
                  type="number"
                  value={formData.sqFootage}
                  onChange={(e) => handleInputChange("sqFootage", e.target.value)}
                  placeholder="e.g., 1500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rehabType">Rehab Type:</Label>
                <Select
                  value={formData.rehabType}
                  onValueChange={(value) => handleInputChange("rehabType", value)}
                >
                  <SelectTrigger id="rehabType">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="VACANT ROUGH">VACANT ROUGH</SelectItem>
                    <SelectItem value="VACANT LIGHT">VACANT LIGHT</SelectItem>
                    <SelectItem value="OCCUPIED ROUGH">OCCUPIED ROUGH</SelectItem>
                    <SelectItem value="OCCUPIED LIGHT">OCCUPIED LIGHT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="rehabValue">Rehab Value:</Label>
                <Input
                  id="rehabValue"
                  value={formData.rehabValue}
                  onChange={(e) => handleInputChange("rehabValue", e.target.value)}
                  placeholder="e.g., $65"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rehabEstimate">Rehab Estimate:</Label>
                <Input
                  id="rehabEstimate"
                  type="number"
                  value={formData.rehabEstimate}
                  onChange={(e) => handleInputChange("rehabEstimate", e.target.value)}
                  placeholder="e.g., 2080"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button 
            onClick={handleSave}
            className="bg-[#4a5273] text-white hover:bg-[#4a5273]/90"
          >
            Save
          </Button>
          <Button 
            variant="outline"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default CreateRehabEstimate;
