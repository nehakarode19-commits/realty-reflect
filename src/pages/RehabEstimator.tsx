import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, SlidersHorizontal, ChevronDown } from "lucide-react";

const rehabProperties = [
  {
    id: 1,
    propertyName: "Mango Heights",
    propertyAddress: "123 Maple Street, Springfield, USA",
    sqft: 2000,
    rehabType: "ok",
    rehabRange: "$30",
    roughRehabEstimate: "$1,30,000",
  },
  {
    id: 2,
    propertyName: "Berry Grove",
    propertyAddress: "456 Oak Avenue, Rivertown, USA",
    sqft: 1500,
    rehabType: "good",
    rehabRange: "$25",
    roughRehabEstimate: "$37,500",
  },
  {
    id: 3,
    propertyName: "Citrus Haven",
    propertyAddress: "789 Pine Lane, Lakeview, USA",
    sqft: 3000,
    rehabType: "excellent",
    rehabRange: "$35",
    roughRehabEstimate: "$105,000",
  },
  {
    id: 4,
    propertyName: "Tropical Oasis",
    propertyAddress: "321 Birch Boulevard, Hilltop, USA",
    sqft: 2500,
    rehabType: "very good",
    rehabRange: "$28",
    roughRehabEstimate: "$70,000",
  },
  {
    id: 5,
    propertyName: "Mango Vista",
    propertyAddress: "123 Maple Street, Springfield, USA",
    sqft: 2000,
    rehabType: "ok",
    rehabRange: "$30",
    roughRehabEstimate: "$1,30,000",
  },
];

const RehabEstimator = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Rehab Estimator</h1>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Create
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold text-foreground">PROPERTY NAME</TableHead>
                    <TableHead className="font-semibold text-foreground">PROPERTY ADDRESS</TableHead>
                    <TableHead className="font-semibold text-foreground">SQ FT</TableHead>
                    <TableHead className="font-semibold text-foreground">REHAB TYPE</TableHead>
                    <TableHead className="font-semibold text-foreground">REHAB RANGE</TableHead>
                    <TableHead className="font-semibold text-foreground">ROUGH REHAB ESTIMATE</TableHead>
                    <TableHead className="font-semibold text-foreground text-right">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rehabProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">{property.propertyName}</TableCell>
                      <TableCell>{property.propertyAddress}</TableCell>
                      <TableCell>{property.sqft.toLocaleString()}</TableCell>
                      <TableCell>{property.rehabType}</TableCell>
                      <TableCell>{property.rehabRange}</TableCell>
                      <TableCell className="font-semibold">{property.roughRehabEstimate}</TableCell>
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

export default RehabEstimator;
