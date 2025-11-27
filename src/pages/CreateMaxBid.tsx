import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateMaxBid = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    startingBid: "",
    propertyName: "",
    finalArv: "",
    liens: "",
    cash4keys: "",
    tts: "",
    maxBid: "",
    propertyNotes: "",
    titleNotes: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    toast.success("Max bid calculation saved successfully");
    navigate("/max-bid");
  };

  return (
    <Layout>
      <div className="space-y-6 max-w-5xl">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Calculate Max Bid</h1>
        </div>

        {/* Property Information */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Property Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startingBid">Starting Bid:</Label>
                  <Input
                    id="startingBid"
                    name="startingBid"
                    type="number"
                    value={formData.startingBid}
                    onChange={handleInputChange}
                    placeholder="e.g., 25000"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-4 pt-4">
              <h3 className="text-sm font-semibold">Property Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="propertyName">Property name:</Label>
                  <Input
                    id="propertyName"
                    name="propertyName"
                    value={formData.propertyName}
                    onChange={handleInputChange}
                    placeholder="Property name"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Details */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Financial Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="finalArv">Final ARV</Label>
                <Input
                  id="finalArv"
                  name="finalArv"
                  type="number"
                  value={formData.finalArv}
                  onChange={handleInputChange}
                  placeholder="Final ARV"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Max Bid Calculation Fields */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Max Bid Calculation Fields</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="liens">Liens</Label>
                <Input
                  id="liens"
                  name="liens"
                  type="number"
                  value={formData.liens}
                  onChange={handleInputChange}
                  placeholder="e.g., 5000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cash4keys">Cash4Keys</Label>
                <Input
                  id="cash4keys"
                  name="cash4keys"
                  type="number"
                  value={formData.cash4keys}
                  onChange={handleInputChange}
                  placeholder="e.g., 3000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tts">TTS</Label>
                <Input
                  id="tts"
                  name="tts"
                  type="number"
                  value={formData.tts}
                  onChange={handleInputChange}
                  placeholder="e.g., 2000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxBid">Max Bid</Label>
                <Input
                  id="maxBid"
                  name="maxBid"
                  type="number"
                  value={formData.maxBid}
                  onChange={handleInputChange}
                  placeholder="e.g., 50000"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="propertyNotes">Property Notes</Label>
                <Textarea
                  id="propertyNotes"
                  name="propertyNotes"
                  value={formData.propertyNotes}
                  onChange={handleInputChange}
                  placeholder="Additional property notes..."
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="titleNotes">Title Notes</Label>
                <Textarea
                  id="titleNotes"
                  name="titleNotes"
                  value={formData.titleNotes}
                  onChange={handleInputChange}
                  placeholder="Additional title notes..."
                  rows={4}
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
            onClick={() => navigate("/max-bid")}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default CreateMaxBid;
