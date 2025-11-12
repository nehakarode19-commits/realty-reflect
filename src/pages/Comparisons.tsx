import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

const comparisons = [
  {
    id: 1,
    propertyName: "Sunset Villa",
    sqft: 1500,
    bed: 3,
    bath: 2,
    yearBuilt: 2005,
    yearSold: 2024,
    salesPrice: 185000,
    perSqFtPrice: 123,
    notes: "Good condition",
  },
  {
    id: 2,
    propertyName: "Oak Manor",
    sqft: 1600,
    bed: 3,
    bath: 2,
    yearBuilt: 2008,
    yearSold: 2024,
    salesPrice: 195000,
    perSqFtPrice: 122,
    notes: "Recently renovated",
  },
  {
    id: 3,
    propertyName: "Pine Residence",
    sqft: 1450,
    bed: 3,
    bath: 2,
    yearBuilt: 2003,
    yearSold: 2024,
    salesPrice: 178000,
    perSqFtPrice: 123,
    notes: "Needs minor repairs",
  },
];

const Comparisons = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Comparison Property Master</h1>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline"
              className="bg-[#3d3d7a] text-white hover:bg-[#3d3d7a]/90 border-[#3d3d7a]"
            >
              Upload
            </Button>
            <Button 
              className="bg-[#3d3d7a] text-white hover:bg-[#3d3d7a]/90"
            >
              + Add Comparison
            </Button>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Property Name</TableHead>
                    <TableHead className="font-semibold">Sq Ft</TableHead>
                    <TableHead className="font-semibold">Bed</TableHead>
                    <TableHead className="font-semibold">Bath</TableHead>
                    <TableHead className="font-semibold">Year Built</TableHead>
                    <TableHead className="font-semibold">Year Sold</TableHead>
                    <TableHead className="font-semibold">Sales Price</TableHead>
                    <TableHead className="font-semibold">Per Sq ft Price</TableHead>
                    <TableHead className="font-semibold">Notes</TableHead>
                    <TableHead className="font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisons.map((comp) => (
                    <TableRow key={comp.id}>
                      <TableCell className="font-medium">{comp.propertyName}</TableCell>
                      <TableCell>{comp.sqft.toLocaleString()}</TableCell>
                      <TableCell>{comp.bed}</TableCell>
                      <TableCell>{comp.bath}</TableCell>
                      <TableCell>{comp.yearBuilt}</TableCell>
                      <TableCell>{comp.yearSold}</TableCell>
                      <TableCell className="font-semibold">
                        {formatCurrency(comp.salesPrice)}
                      </TableCell>
                      <TableCell>${comp.perSqFtPrice}</TableCell>
                      <TableCell className="max-w-xs truncate">{comp.notes}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Save
              </Button>
              <Button variant="outline">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Comparisons;
