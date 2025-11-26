import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const CreateProperty = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Property saved successfully!");
  };

  return (
    <Layout>
      <div className="space-y-6 max-w-5xl">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Property Information</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="caseNo">Case No:</Label>
                  <Input id="caseNo" placeholder="e.g., 1255" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parcelId">Parcel ID (APN etc):</Label>
                  <Input id="parcelId" placeholder="e.g., 100002444400" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date:</Label>
                  <Input id="date" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date (For Bid):</Label>
                  <Input id="endDate" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lienAmount">Lien Amount:</Label>
                  <Input id="lienAmount" type="number" placeholder="e.g., 20000" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startingBid">Starting Bid:</Label>
                  <Input id="startingBid" type="number" placeholder="e.g., 25000" required />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Property Details */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="propertyName">Property name:</Label>
                  <Input id="propertyName" placeholder="Property name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="owners">Owners:</Label>
                  <Input id="owners" placeholder="Owner name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="perSqftPrice">Per Sqft Price:</Label>
                  <Input id="perSqftPrice" type="number" placeholder="e.g., 150" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yearBuilt">Year built:</Label>
                  <Input id="yearBuilt" type="number" placeholder="e.g., 2005" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bed">Bed:</Label>
                  <Input id="bed" type="number" placeholder="e.g., 3" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bath">Bath:</Label>
                  <Input id="bath" type="number" placeholder="e.g., 2" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sqFootage">Sq. Footage:</Label>
                  <Input id="sqFootage" type="number" placeholder="e.g., 1500" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address:</Label>
                  <Input id="address" placeholder="Full address" required />
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
                  <Label htmlFor="roughARV">Rough ARV</Label>
                  <Input id="roughARV" type="number" placeholder="Rough ARV" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="finalARV">Final ARV</Label>
                  <Input id="finalARV" type="number" placeholder="Final ARV" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rehabEstimate">Rehab Estimate</Label>
                  <Input id="rehabEstimate" type="number" placeholder="Rehab Estimate" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Additional notes or comments..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="space-y-2">
                    <Label>Photo:</Label>
                    <div className="border-2 border-dashed border-border rounded-md h-32 flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                      <input
                        type="file"
                        id={`photo-${index}`}
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            toast.success(`Photo ${index} uploaded`);
                          }
                        }}
                      />
                      <label
                        htmlFor={`photo-${index}`}
                        className="cursor-pointer text-4xl text-muted-foreground hover:text-primary"
                      >
                        +
                      </label>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor={`countySite-${index}`} className="text-xs">County Sites:</Label>
                      <Input id={`countySite-${index}`} type="url" placeholder="https://..." className="h-8 text-xs" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" className="bg-gradient-to-r from-primary to-secondary">
              Save Property
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={() => window.history.back()}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateProperty;
