import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, Trash2, Plus, Search } from "lucide-react";

const comparisons = [
  {
    id: 1,
    address: "123 Main St, City",
    sqft: 1500,
    bedBath: "3/2",
    yearBuilt: 2005,
    dateSold: "2024-08-15",
    distance: "0.5 mi",
    salesPrice: 185000,
    psf: 123,
    notes: "Good condition",
  },
  {
    id: 2,
    address: "456 Oak Ave, City",
    sqft: 1600,
    bedBath: "3/2",
    yearBuilt: 2008,
    dateSold: "2024-07-20",
    distance: "0.8 mi",
    salesPrice: 195000,
    psf: 122,
    notes: "Recently renovated",
  },
  {
    id: 3,
    address: "789 Pine Dr, City",
    sqft: 1450,
    bedBath: "3/2",
    yearBuilt: 2003,
    dateSold: "2024-09-10",
    distance: "1.2 mi",
    salesPrice: 178000,
    psf: 123,
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
          <div>
            <h1 className="text-3xl font-bold text-foreground">Comparison Property Master</h1>
            <p className="text-muted-foreground mt-1">Analyze comparable properties</p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            <Plus className="w-4 h-4 mr-2" />
            Add Comparison
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by address..."
                  className="pl-10"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Address</TableHead>
                    <TableHead>SQFT</TableHead>
                    <TableHead>Bed/Bath</TableHead>
                    <TableHead>Year Built</TableHead>
                    <TableHead>Date Sold</TableHead>
                    <TableHead>Distance</TableHead>
                    <TableHead>Sales Price</TableHead>
                    <TableHead>PSF</TableHead>
                    <TableHead>Notes</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisons.map((comp) => (
                    <TableRow key={comp.id}>
                      <TableCell className="font-medium">{comp.address}</TableCell>
                      <TableCell>{comp.sqft.toLocaleString()}</TableCell>
                      <TableCell>{comp.bedBath}</TableCell>
                      <TableCell>{comp.yearBuilt}</TableCell>
                      <TableCell>{comp.dateSold}</TableCell>
                      <TableCell>{comp.distance}</TableCell>
                      <TableCell className="font-semibold text-primary">
                        {formatCurrency(comp.salesPrice)}
                      </TableCell>
                      <TableCell>${comp.psf}</TableCell>
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
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Comparisons;
