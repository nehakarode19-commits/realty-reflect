import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";

const comparisonProperties = [
  {
    id: 1,
    no: "1",
    address: "Comp add",
    sqft: "600",
    bedBath: "---",
    yearBuilt: "---",
    dateSold: "MM/YYYY",
    distance: "1km",
    salesPr: "---",
    psf: "---",
    notes: "---",
  },
  {
    id: 2,
    no: "2",
    address: "23 main Street",
    sqft: "450",
    bedBath: "",
    yearBuilt: "",
    dateSold: "MM/YYYY",
    distance: "2km",
    salesPr: "",
    psf: "",
    notes: "",
  },
  {
    id: 3,
    no: "3",
    address: "45 main Street",
    sqft: "300",
    bedBath: "3/2",
    yearBuilt: "1978",
    dateSold: "July 2007",
    distance: "1km",
    salesPr: "$65,000",
    psf: "$106.79",
    notes: "",
  },
  {
    id: 4,
    no: "4",
    address: "12 Oak Avenue",
    sqft: "250",
    bedBath: "2/1",
    yearBuilt: "1985",
    dateSold: "March 2010",
    distance: "2km",
    salesPr: "$75,000",
    psf: "$89.50",
    notes: "",
  },
];

const ComparisonCalculation = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Comparison Calculation</h1>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Main Property Address</p>
                <p className="font-semibold">123 Main Street, Cincinnati, OH, 43102</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">SQ FT</p>
                <p className="font-semibold">1,973</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Bed/Bath</p>
                <p className="font-semibold">2/2</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Year Built</p>
                <p className="font-semibold">1973</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">PSF Price (Calculated)</p>
                <p className="font-semibold text-primary">$90.14</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">ARV (Calculated)</p>
                <p className="font-semibold text-primary">$177,839</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold text-foreground">NO</TableHead>
                    <TableHead className="font-semibold text-foreground">ADDRESS</TableHead>
                    <TableHead className="font-semibold text-foreground">SQFT</TableHead>
                    <TableHead className="font-semibold text-foreground">BED/BATH</TableHead>
                    <TableHead className="font-semibold text-foreground">YEAR BUILT</TableHead>
                    <TableHead className="font-semibold text-foreground">DATE SOLD</TableHead>
                    <TableHead className="font-semibold text-foreground">DISTANCE</TableHead>
                    <TableHead className="font-semibold text-foreground">SALES PR</TableHead>
                    <TableHead className="font-semibold text-foreground">PSF</TableHead>
                    <TableHead className="font-semibold text-foreground">NOTES</TableHead>
                    <TableHead className="font-semibold text-foreground text-right">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell>{property.no}</TableCell>
                      <TableCell className="font-medium">{property.address}</TableCell>
                      <TableCell>{property.sqft}</TableCell>
                      <TableCell>{property.bedBath}</TableCell>
                      <TableCell>{property.yearBuilt}</TableCell>
                      <TableCell>{property.dateSold}</TableCell>
                      <TableCell>{property.distance}</TableCell>
                      <TableCell>{property.salesPr}</TableCell>
                      <TableCell>{property.psf}</TableCell>
                      <TableCell>{property.notes}</TableCell>
                      <TableCell className="text-right">
                        {/* Action buttons can be added here */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Comparable
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Recalculate ARV
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ComparisonCalculation;
