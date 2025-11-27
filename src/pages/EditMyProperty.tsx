import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const EditMyProperty = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    propertyName: "Oaks Villa",
    yearBuilt: "3545",
    perSqftPrice: "15313",
    bed: "53",
    bath: "565",
    sqFootage: "555",
    address: "Universidad Autónoma de Nuevo León, Villa Universidad, 66420 San Nicolás de los Garza, N.L., Mexico",
    roughARV: "",
    finalARV: "",
    notes: "",
    maxBid: "",
    rehabEstimate: "",
    rehabType: "",
    rehabValue: "",
    remarks: "",
    additionalNotes: "",
  });

  const handleSave = () => {
    toast.success("Property updated successfully");
    navigate("/my-property");
  };

  const handleCancel = () => {
    setFormData({
      propertyName: "",
      yearBuilt: "",
      perSqftPrice: "",
      bed: "",
      bath: "",
      sqFootage: "",
      address: "",
      roughARV: "",
      finalARV: "",
      notes: "",
      maxBid: "",
      rehabEstimate: "",
      rehabType: "",
      rehabValue: "",
      remarks: "",
      additionalNotes: "",
    });
    toast.info("Form cleared");
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Edit Property</h1>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="border-b bg-muted/30">
            <div className="grid grid-cols-2 gap-4">
              <CardTitle className="text-sm font-semibold text-muted-foreground">Field</CardTitle>
              <CardTitle className="text-sm font-semibold text-muted-foreground">Value</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>Property Name</Label>
                <Input
                  value={formData.propertyName}
                  onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>Year Built</Label>
                <Input
                  type="number"
                  value={formData.yearBuilt}
                  onChange={(e) => setFormData({ ...formData, yearBuilt: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>Per Sqft Price</Label>
                <Input
                  type="number"
                  value={formData.perSqftPrice}
                  onChange={(e) => setFormData({ ...formData, perSqftPrice: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>Bed</Label>
                <Input
                  type="number"
                  value={formData.bed}
                  onChange={(e) => setFormData({ ...formData, bed: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>Bath</Label>
                <Input
                  type="number"
                  value={formData.bath}
                  onChange={(e) => setFormData({ ...formData, bath: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>Sq Footage</Label>
                <Input
                  type="number"
                  value={formData.sqFootage}
                  onChange={(e) => setFormData({ ...formData, sqFootage: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>Address</Label>
                <Input
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>Rough ARV</Label>
                <Input
                  placeholder="--"
                  value={formData.roughARV}
                  onChange={(e) => setFormData({ ...formData, roughARV: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>Final ARV</Label>
                <Input
                  placeholder="--"
                  value={formData.finalARV}
                  onChange={(e) => setFormData({ ...formData, finalARV: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>Notes</Label>
                <Input
                  placeholder="--"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>Max Bid</Label>
                <Input
                  placeholder="--"
                  value={formData.maxBid}
                  onChange={(e) => setFormData({ ...formData, maxBid: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>Rehab Estimate</Label>
                <Input
                  placeholder="--"
                  value={formData.rehabEstimate}
                  onChange={(e) => setFormData({ ...formData, rehabEstimate: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>Rehab type</Label>
                <Select
                  value={formData.rehabType}
                  onValueChange={(value) => setFormData({ ...formData, rehabType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select rehab type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Rehab</SelectItem>
                    <SelectItem value="moderate">Moderate Rehab</SelectItem>
                    <SelectItem value="extensive">Extensive Rehab</SelectItem>
                    <SelectItem value="luxury">Luxury Rehab</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>Rehab value</Label>
                <Select
                  value={formData.rehabValue}
                  onValueChange={(value) => setFormData({ ...formData, rehabValue: value })}
                  disabled={!formData.rehabType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select rehab type to see value" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low Range</SelectItem>
                    <SelectItem value="medium">Medium Range</SelectItem>
                    <SelectItem value="high">High Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>File Upload 1</Label>
                <Button variant="outline" className="justify-start">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload File
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>File Upload 2</Label>
                <Button variant="outline" className="justify-start">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload File
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <Label>File Upload 3</Label>
                <Button variant="outline" className="justify-start">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload File
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 items-start">
                <Label className="pt-2">Remarks</Label>
                <Textarea
                  placeholder="Add remarks..."
                  value={formData.remarks}
                  onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-start">
                <Label className="pt-2">Notes</Label>
                <Textarea
                  placeholder="Add notes..."
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center gap-3">
          <Button
            className="bg-[#3d3d7a] text-white hover:bg-[#3d3d7a]/90"
            onClick={handleSave}
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

export default EditMyProperty;
