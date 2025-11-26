import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const comparisonProperties = [
  {
    id: 1,
    propertyName: "SUNSET2",
    yearBuilt: "2025",
    perSqftPrice: "5884544",
    yearSold: "2024",
    bed: "5A",
    bath: "58",
    sqFootage: "7777",
    farFromProperty: "7757N",
    salesPrice: "560656",
    notes: "970470",
  },
  {
    id: 2,
    propertyName: "Mulligan",
    yearBuilt: "2020",
    perSqftPrice: "9650",
    yearSold: "2025",
    bed: "8",
    bath: "6",
    sqFootage: "9220",
    farFromProperty: "120",
    salesPrice: "03200000",
    notes: "",
  },
  {
    id: 3,
    propertyName: "Orchid Green",
    yearBuilt: "2022",
    perSqftPrice: "92",
    yearSold: "2023",
    bed: "8",
    bath: "9",
    sqFootage: "150",
    farFromProperty: "10",
    salesPrice: "200000",
    notes: "",
  },
];

const ComparisonCalculation = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Property Information</h1>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Property Details Section */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Property Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="propertyName">Property name</Label>
                    <Input id="propertyName" placeholder="Enter property name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="perSqftPrice">Per Sqft Price</Label>
                    <Input id="perSqftPrice" placeholder="Enter price per sqft" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearBuilt">Year built</Label>
                    <Input id="yearBuilt" placeholder="Enter year" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bed">Bed</Label>
                    <Input id="bed" placeholder="Enter beds" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bath">Bath</Label>
                    <Input id="bath" placeholder="Enter baths" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sqFootage">Sq. Footage</Label>
                    <Input id="sqFootage" placeholder="Enter square footage" />
                  </div>
                </div>
              </div>

              {/* Financial Details Section */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Financial Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="roughARV">Rough ARV</Label>
                    <div className="flex gap-2">
                      <Input id="roughARV" placeholder="Enter rough ARV" />
                      <Button 
                        variant="outline" 
                        className="bg-[#3d3d7a] text-white hover:bg-[#3d3d7a]/90 border-[#3d3d7a]"
                        onClick={() => toast.info("Calculate ARV")}
                      >
                        Calculate
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="finalARV">Final ARV</Label>
                    <Input id="finalARV" placeholder="Calculated automatically" disabled />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" placeholder="Enter notes" className="min-h-[100px]" />
                  </div>
                </div>
              </div>

              {/* Calculated Values */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Price per Sq ft:</p>
                  <p className="text-lg font-bold text-foreground">7795.05</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">AVG PPSF:</p>
                  <p className="text-lg font-bold text-foreground">446361.33</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">ARV:</p>
                  <p className="text-lg font-bold text-foreground">1428826.67</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Properties Table */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Comparison Properties (3)</h2>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Property name</TableHead>
                    <TableHead className="font-semibold">Year built</TableHead>
                    <TableHead className="font-semibold">Per Sqft Price</TableHead>
                    <TableHead className="font-semibold">Year sold</TableHead>
                    <TableHead className="font-semibold">Bed</TableHead>
                    <TableHead className="font-semibold">Bath</TableHead>
                    <TableHead className="font-semibold">Sq. Footage</TableHead>
                    <TableHead className="font-semibold">Far from main property</TableHead>
                    <TableHead className="font-semibold">Sales price</TableHead>
                    <TableHead className="font-semibold">Notes</TableHead>
                    <TableHead className="font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">{property.propertyName}</TableCell>
                      <TableCell>{property.yearBuilt}</TableCell>
                      <TableCell>{property.perSqftPrice}</TableCell>
                      <TableCell>{property.yearSold}</TableCell>
                      <TableCell>{property.bed}</TableCell>
                      <TableCell>{property.bath}</TableCell>
                      <TableCell>{property.sqFootage}</TableCell>
                      <TableCell>{property.farFromProperty}</TableCell>
                      <TableCell>{property.salesPrice}</TableCell>
                      <TableCell>{property.notes}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => toast.info(`Edit ${property.propertyName}`)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => toast.info(`Delete ${property.propertyName}`)}
                          >
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button 
            className="bg-[#3d3d7a] text-white hover:bg-[#3d3d7a]/90"
            onClick={() => toast.info("Add comparison property")}
          >
            <Plus className="w-4 h-4 mr-2" />
            Compare Property +
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate("/comparisons")}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ComparisonCalculation;
