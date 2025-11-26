import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CreateMaxBid = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
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
    toast({
      title: "Success",
      description: "Max bid calculation saved successfully",
    });
    navigate("/max-bid");
  };

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Calculate Max Bid</h1>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-8">
              {/* Property Information Section */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Property Information</h2>
                
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground">Basic Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="startingBid">Starting Bid</Label>
                    <Input
                      id="startingBid"
                      name="startingBid"
                      value={formData.startingBid}
                      onChange={handleInputChange}
                      placeholder="Enter starting bid"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground">Property Details</h3>
                  <div className="space-y-2">
                    <Label htmlFor="propertyName">Property name</Label>
                    <Input
                      id="propertyName"
                      name="propertyName"
                      value={formData.propertyName}
                      onChange={handleInputChange}
                      placeholder="Enter property name"
                    />
                  </div>
                </div>
              </div>

              {/* Financial Details Section */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Financial Details</h2>
                <div className="space-y-2">
                  <Label htmlFor="finalArv">Final ARV</Label>
                  <Input
                    id="finalArv"
                    name="finalArv"
                    value={formData.finalArv}
                    onChange={handleInputChange}
                    placeholder="Enter final ARV"
                  />
                </div>
              </div>

              {/* Max Bid Calculation Fields Section */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Max Bid Calculation Fields</h2>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="liens">Liens</Label>
                    <Input
                      id="liens"
                      name="liens"
                      value={formData.liens}
                      onChange={handleInputChange}
                      placeholder="Enter liens amount"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cash4keys">Cash4Keys</Label>
                    <Input
                      id="cash4keys"
                      name="cash4keys"
                      value={formData.cash4keys}
                      onChange={handleInputChange}
                      placeholder="Enter cash for keys amount"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tts">TTS</Label>
                    <Input
                      id="tts"
                      name="tts"
                      value={formData.tts}
                      onChange={handleInputChange}
                      placeholder="Enter TTS amount"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxBid">Max Bid</Label>
                    <Input
                      id="maxBid"
                      name="maxBid"
                      value={formData.maxBid}
                      onChange={handleInputChange}
                      placeholder="Enter max bid"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="propertyNotes">Property Notes</Label>
                    <Textarea
                      id="propertyNotes"
                      name="propertyNotes"
                      value={formData.propertyNotes}
                      onChange={handleInputChange}
                      placeholder="Enter property notes"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="titleNotes">Title Notes</Label>
                    <Textarea
                      id="titleNotes"
                      name="titleNotes"
                      value={formData.titleNotes}
                      onChange={handleInputChange}
                      placeholder="Enter title notes"
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleSave}>Save</Button>
                <Button variant="outline" onClick={() => navigate("/max-bid")}>Cancel</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CreateMaxBid;
