import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";

const comparisons = [
  {
    no: 1,
    address: "Comp add",
    sqft: 600,
    bedBath: "-----",
    yearBuilt: "----",
    dateSold: "MM/YYYY",
    distance: "1km",
    salesPrice: "---",
    psf: "---",
    notes: "-----",
  },
  {
    no: 2,
    address: "23 main Street",
    sqft: 450,
    bedBath: "-----",
    yearBuilt: "----",
    dateSold: "MM/YYYY",
    distance: "2km",
    salesPrice: "---",
    psf: "---",
    notes: "-----",
  },
  {
    no: 3,
    address: "45 main Street",
    sqft: 300,
    bedBath: "3/2",
    yearBuilt: "1978",
    dateSold: "July 2007",
    distance: "1km",
    salesPrice: "65000",
    psf: "$106.79",
    notes: "-----",
  },
  {
    no: 4,
    address: "12 Oak Avenue",
    sqft: 250,
    bedBath: "2/1",
    yearBuilt: "1985",
    dateSold: "March 2010",
    distance: "2km",
    salesPrice: "75000",
    psf: "$89.50",
    notes: "-----",
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
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Main Property Address</Label>
                  <Input 
                    defaultValue="123 Main Street cmnnati, OH, 43102" 
                    className="border-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Bed/ Bath</Label>
                  <Input 
                    defaultValue="2/2" 
                    className="border-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">PSF Price (Calculated)</Label>
                  <Input 
                    defaultValue="$90.14" 
                    className="border-muted"
                    readOnly
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-muted-foreground">SQ FT</Label>
                  <Input 
                    defaultValue="1973" 
                    className="border-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Year Built</Label>
                  <Input 
                    defaultValue="1973" 
                    className="border-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">ARV (Calculated)</Label>
                  <Input 
                    defaultValue="$177,839" 
                    className="border-muted"
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>NO</TableHead>
                    <TableHead>ADDRESS</TableHead>
                    <TableHead>SQFT</TableHead>
                    <TableHead>BED/BATH</TableHead>
                    <TableHead>YEAR BUILT</TableHead>
                    <TableHead>DATE SOLD</TableHead>
                    <TableHead>DISTANCE</TableHead>
                    <TableHead>SALES PR</TableHead>
                    <TableHead>PSF</TableHead>
                    <TableHead>NOTES</TableHead>
                    <TableHead className="text-right">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisons.map((comp) => (
                    <TableRow key={comp.no}>
                      <TableCell>{comp.no}</TableCell>
                      <TableCell className="font-medium">{comp.address}</TableCell>
                      <TableCell>{comp.sqft}</TableCell>
                      <TableCell>{comp.bedBath}</TableCell>
                      <TableCell>{comp.yearBuilt}</TableCell>
                      <TableCell>{comp.dateSold}</TableCell>
                      <TableCell>{comp.distance}</TableCell>
                      <TableCell>{comp.salesPrice}</TableCell>
                      <TableCell>{comp.psf}</TableCell>
                      <TableCell>{comp.notes}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Trash2 className="w-4 h-4 text-primary" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-primary to-secondary">
                + Add Comparable
              </Button>
              <Button className="bg-gradient-to-r from-primary to-secondary">
                Recalculate ARV
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ComparisonCalculation;
