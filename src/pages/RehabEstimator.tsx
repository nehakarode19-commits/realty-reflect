import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, ChevronDown } from "lucide-react";

const properties = [
  {
    id: 1,
    propertyName: "Mango Heights",
    propertyAddress: "123 Maple Street, Springfield, USA",
    sqft: "2,000",
    rehabType: "ok",
    rehabRange: "$30",
    roughRehabEstimate: "$1,30,000",
  },
  {
    id: 2,
    propertyName: "Berry Grove",
    propertyAddress: "456 Oak Avenue, Rivertown, USA",
    sqft: "1,500",
    rehabType: "good",
    rehabRange: "$25",
    roughRehabEstimate: "$37,500",
  },
  {
    id: 3,
    propertyName: "Citrus Haven",
    propertyAddress: "789 Pine Lane, Lakeview, USA",
    sqft: "3,000",
    rehabType: "excellent",
    rehabRange: "$35",
    roughRehabEstimate: "$105,000",
  },
  {
    id: 4,
    propertyName: "Tropical Oasis",
    propertyAddress: "321 Birch Boulevard, Hilltop, USA",
    sqft: "2,500",
    rehabType: "very good",
    rehabRange: "$28",
    roughRehabEstimate: "$70,000",
  },
  {
    id: 5,
    propertyName: "Mango Vista",
    propertyAddress: "123 Maple Street, Springfield, USA",
    sqft: "2,000",
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
          <Button className="bg-gradient-to-r from-primary to-secondary">
            Create
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardContent className="pt-6">
            <div className="mb-4">
              <Button variant="outline" className="gap-2">
                <span className="text-sm">Filters</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>PROPERTY NAME</TableHead>
                    <TableHead>PROPERTY ADDRESS</TableHead>
                    <TableHead>SQ FT</TableHead>
                    <TableHead>REHAB TYPE</TableHead>
                    <TableHead>REHAB RANGE</TableHead>
                    <TableHead>ROUGH REHAB ESTIMATE</TableHead>
                    <TableHead className="text-right">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {properties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">{property.propertyName}</TableCell>
                      <TableCell>{property.propertyAddress}</TableCell>
                      <TableCell>{property.sqft}</TableCell>
                      <TableCell>{property.rehabType}</TableCell>
                      <TableCell>{property.rehabRange}</TableCell>
                      <TableCell className="font-semibold">{property.roughRehabEstimate}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="w-4 h-4 text-primary" />
                          </Button>
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
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default RehabEstimator;
