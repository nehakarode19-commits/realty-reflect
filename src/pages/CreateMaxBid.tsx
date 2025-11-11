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
    rehab: "",
    minBid: "",
    arv: "",
    address: "",
    liens: "",
    cash4keys: "",
    tts: "",
    maxBid: "",
    propertyNotes: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Max Bid Calculation</h1>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="rehab">Rehab</Label>
                <Input
                  id="rehab"
                  placeholder="Rehab"
                  value={formData.rehab}
                  onChange={(e) => handleInputChange("rehab", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="minBid">Min Bid</Label>
                <Input
                  id="minBid"
                  placeholder="Min Bid"
                  value={formData.minBid}
                  onChange={(e) => handleInputChange("minBid", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="arv">ARV</Label>
                <Input
                  id="arv"
                  placeholder="ARV"
                  value={formData.arv}
                  onChange={(e) => handleInputChange("arv", e.target.value)}
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

              <div className="space-y-2">
                <Label htmlFor="liens">Liens</Label>
                <Input
                  id="liens"
                  placeholder="Liens"
                  value={formData.liens}
                  onChange={(e) => handleInputChange("liens", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cash4keys">Cash4keys</Label>
                <Input
                  id="cash4keys"
                  placeholder="Cash4keys"
                  value={formData.cash4keys}
                  onChange={(e) => handleInputChange("cash4keys", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tts">TTS</Label>
                <Input
                  id="tts"
                  placeholder="TTS"
                  value={formData.tts}
                  onChange={(e) => handleInputChange("tts", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxBid">MAX BID</Label>
                <Input
                  id="maxBid"
                  placeholder="Max Bid"
                  value={formData.maxBid}
                  onChange={(e) => handleInputChange("maxBid", e.target.value)}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="propertyNotes">Property Notes</Label>
                <Textarea
                  id="propertyNotes"
                  placeholder="Property Notes"
                  value={formData.propertyNotes}
                  onChange={(e) => handleInputChange("propertyNotes", e.target.value)}
                  className="min-h-[80px]"
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

export default CreateMaxBid;
