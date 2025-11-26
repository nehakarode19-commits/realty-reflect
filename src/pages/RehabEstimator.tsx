import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, SlidersHorizontal, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const rehabProperties = [
  {
    id: 1,
    mainPropertyName: "Mango Heights",
    sqft: 2000,
    rehabType: "Full Renovation",
    rehabRange: "$50-$75",
    roughRehabEstimation: "$100,000-$150,000",
    notes: "Complete interior renovation needed",
  },
  {
    id: 2,
    mainPropertyName: "Berry Grove",
    sqft: 1500,
    rehabType: "Kitchen & Bath",
    rehabRange: "$30-$45",
    roughRehabEstimation: "$45,000-$67,500",
    notes: "Focus on kitchen and bathrooms",
  },
  {
    id: 3,
    mainPropertyName: "Citrus Haven",
    sqft: 3000,
    rehabType: "Cosmetic",
    rehabRange: "$15-$25",
    roughRehabEstimation: "$45,000-$75,000",
    notes: "Paint and flooring updates",
  },
  {
    id: 4,
    mainPropertyName: "Tropical Oasis",
    sqft: 2500,
    rehabType: "Structural",
    rehabRange: "$75-$100",
    roughRehabEstimation: "$187,500-$250,000",
    notes: "Foundation repairs needed",
  },
  {
    id: 5,
    mainPropertyName: "Mango Vista",
    sqft: 2000,
    rehabType: "Full Renovation",
    rehabRange: "$50-$75",
    roughRehabEstimation: "$100,000-$150,000",
    notes: "Major updates required",
  },
];

const RehabEstimator = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Rehab Estimator</h1>
          </div>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => navigate("/create-rehab-estimate")}
          >
            Create
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={() => toast.info("Filters clicked")}
          >
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
                    <TableHead className="font-semibold text-foreground">Main Property Name</TableHead>
                    <TableHead className="font-semibold text-foreground">Sq ft</TableHead>
                    <TableHead className="font-semibold text-foreground">Rehab Type</TableHead>
                    <TableHead className="font-semibold text-foreground">Rehab Range (Per sq ft)</TableHead>
                    <TableHead className="font-semibold text-foreground">Rough rehab estimation</TableHead>
                    <TableHead className="font-semibold text-foreground">Notes</TableHead>
                    <TableHead className="font-semibold text-foreground text-right">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rehabProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">{property.mainPropertyName}</TableCell>
                      <TableCell>{property.sqft.toLocaleString()}</TableCell>
                      <TableCell>{property.rehabType}</TableCell>
                      <TableCell>{property.rehabRange}</TableCell>
                      <TableCell className="font-semibold">{property.roughRehabEstimation}</TableCell>
                      <TableCell>{property.notes}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => toast.info(`Edit ${property.mainPropertyName}`)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => toast.success(`${property.mainPropertyName} deleted`)}
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
      </div>
    </Layout>
  );
};

export default RehabEstimator;
