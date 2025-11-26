import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
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
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Calculate Rehab Estimate</h1>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="space-y-6 max-w-4xl">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div className="font-semibold text-muted-foreground">Field</div>
                <div className="font-semibold text-muted-foreground">Value</div>

                <div className="text-sm font-medium">Property Name</div>
                <Input
                  value={formData.propertyName}
                  onChange={(e) => handleInputChange("propertyName", e.target.value)}
                  className="h-9"
                />

                <div className="text-sm font-medium">Sq Footage</div>
                <Input
                  value={formData.sqFootage}
                  onChange={(e) => handleInputChange("sqFootage", e.target.value)}
                  className="h-9"
                />

                <div className="text-sm font-medium">Rehab type</div>
                <Select
                  value={formData.rehabType}
                  onValueChange={(value) => handleInputChange("rehabType", value)}
                >
                  <SelectTrigger className="h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="VACANT ROUGH">VACANT ROUGH</SelectItem>
                    <SelectItem value="VACANT LIGHT">VACANT LIGHT</SelectItem>
                    <SelectItem value="OCCUPIED ROUGH">OCCUPIED ROUGH</SelectItem>
                    <SelectItem value="OCCUPIED LIGHT">OCCUPIED LIGHT</SelectItem>
                  </SelectContent>
                </Select>

                <div className="text-sm font-medium">Rehab value</div>
                <Input
                  value={formData.rehabValue}
                  onChange={(e) => handleInputChange("rehabValue", e.target.value)}
                  className="h-9"
                />

                <div className="text-sm font-medium">Rehab Estimate</div>
                <Input
                  value={formData.rehabEstimate}
                  onChange={(e) => handleInputChange("rehabEstimate", e.target.value)}
                  className="h-9"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <Button 
                onClick={handleSave}
                className="bg-[#4A90E2] text-white hover:bg-[#4A90E2]/90"
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
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CreateRehabEstimate;
