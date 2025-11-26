import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, SlidersHorizontal, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const maxBidProperties = [
  {
    id: 1,
    mainProperty: "Sunset Villa",
    minBid: "$43,000",
    arv: "$250,000",
    rehabAmount: "$30,000",
    rehabCondition: "Good",
    liens: "$1,500",
    cash4keys: "$2,000",
    tts: "$2,800",
    maxBid: "$180,000",
    propertyNotes: "Well-maintained property",
    titleNotes: "Clear title",
  },
  {
    id: 2,
    mainProperty: "Oak Manor",
    minBid: "$30,000",
    arv: "$320,000",
    rehabAmount: "$45,000",
    rehabCondition: "Fair",
    liens: "$1,800",
    cash4keys: "$2,200",
    tts: "$3,000",
    maxBid: "$240,000",
    propertyNotes: "Needs kitchen update",
    titleNotes: "Minor lien to clear",
  },
  {
    id: 3,
    mainProperty: "Pine Residence",
    minBid: "$50,000",
    arv: "$280,000",
    rehabAmount: "$25,000",
    rehabCondition: "Excellent",
    liens: "$0",
    cash4keys: "$2,000",
    tts: "$2,500",
    maxBid: "$210,000",
    propertyNotes: "Move-in ready",
    titleNotes: "Clean title",
  },
  {
    id: 4,
    mainProperty: "Maple Court",
    minBid: "$27,000",
    arv: "$190,000",
    rehabAmount: "$35,000",
    rehabCondition: "Poor",
    liens: "$2,500",
    cash4keys: "$1,600",
    tts: "$2,100",
    maxBid: "$130,000",
    propertyNotes: "Structural issues",
    titleNotes: "Tax liens present",
  },
  {
    id: 5,
    mainProperty: "Cedar Place",
    minBid: "$40,000",
    arv: "$300,000",
    rehabAmount: "$40,000",
    rehabCondition: "Good",
    liens: "$1,000",
    cash4keys: "$1,900",
    tts: "$2,300",
    maxBid: "$220,000",
    propertyNotes: "Prime location",
    titleNotes: "Clear after payoff",
  },
];

const MaxBid = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Max Bid Calculation</h1>
          </div>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => navigate("/create-max-bid")}
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
                    <TableHead className="font-semibold text-foreground">Main Property</TableHead>
                    <TableHead className="font-semibold text-foreground">Min Bid</TableHead>
                    <TableHead className="font-semibold text-foreground">ARV</TableHead>
                    <TableHead className="font-semibold text-foreground">Rehab Amount</TableHead>
                    <TableHead className="font-semibold text-foreground">Rehab Condition</TableHead>
                    <TableHead className="font-semibold text-foreground">Liens</TableHead>
                    <TableHead className="font-semibold text-foreground">Cash4keys</TableHead>
                    <TableHead className="font-semibold text-foreground">TTS</TableHead>
                    <TableHead className="font-semibold text-foreground">MAX BID</TableHead>
                    <TableHead className="font-semibold text-foreground">Property Notes</TableHead>
                    <TableHead className="font-semibold text-foreground">Title Notes</TableHead>
                    <TableHead className="font-semibold text-foreground text-right">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {maxBidProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">{property.mainProperty}</TableCell>
                      <TableCell>{property.minBid}</TableCell>
                      <TableCell>{property.arv}</TableCell>
                      <TableCell>{property.rehabAmount}</TableCell>
                      <TableCell>{property.rehabCondition}</TableCell>
                      <TableCell>{property.liens}</TableCell>
                      <TableCell>{property.cash4keys}</TableCell>
                      <TableCell>{property.tts}</TableCell>
                      <TableCell className="font-semibold">{property.maxBid}</TableCell>
                      <TableCell>{property.propertyNotes}</TableCell>
                      <TableCell>{property.titleNotes}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => toast.info(`Edit ${property.mainProperty}`)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => toast.success(`${property.mainProperty} deleted`)}
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

export default MaxBid;
