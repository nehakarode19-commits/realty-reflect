import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, SlidersHorizontal, ChevronDown } from "lucide-react";

const maxBidProperties = [
  {
    id: 1,
    propertyAddress: "123 Maple Street, Springfield, USA",
    minBid: "$43",
    arv: "--",
    rehab: "--",
    liens: "$1,500",
    cash4keys: "$2,000",
    tts: "--",
    maxBid: "$3,500",
  },
  {
    id: 2,
    propertyAddress: "456 Oak Avenue, Shelbyville, USA",
    minBid: "$30",
    arv: "--",
    rehab: "--",
    liens: "$1,800",
    cash4keys: "$2,200",
    tts: "--",
    maxBid: "$3,800",
  },
  {
    id: 3,
    propertyAddress: "789 Pine Road, Capital City, USA",
    minBid: "$50",
    arv: "--",
    rehab: "--",
    liens: "--",
    cash4keys: "$2,000",
    tts: "$2,500",
    maxBid: "$4,000",
  },
  {
    id: 4,
    propertyAddress: "321 Birch Blvd, Metropolis, USA",
    minBid: "$27",
    arv: "--",
    rehab: "--",
    liens: "--",
    cash4keys: "$1,600",
    tts: "$2,100",
    maxBid: "$3,600",
  },
  {
    id: 5,
    propertyAddress: "654 Cedar Lane, Gotham, USA",
    minBid: "$40",
    arv: "--",
    rehab: "--",
    liens: "--",
    cash4keys: "$1,900",
    tts: "$2,300",
    maxBid: "$3,900",
  },
];

const MaxBid = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Max Bid Calculation</h1>
          </div>
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
                    <TableHead className="font-semibold text-foreground">PROPERTY ADDRESS</TableHead>
                    <TableHead className="font-semibold text-foreground">MIN BID</TableHead>
                    <TableHead className="font-semibold text-foreground">ARV</TableHead>
                    <TableHead className="font-semibold text-foreground">REHAB</TableHead>
                    <TableHead className="font-semibold text-foreground">LIENS</TableHead>
                    <TableHead className="font-semibold text-foreground">CASH4KEYS</TableHead>
                    <TableHead className="font-semibold text-foreground">TTS</TableHead>
                    <TableHead className="font-semibold text-foreground">MAX BID</TableHead>
                    <TableHead className="font-semibold text-foreground text-right">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {maxBidProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">{property.propertyAddress}</TableCell>
                      <TableCell>{property.minBid}</TableCell>
                      <TableCell>{property.arv}</TableCell>
                      <TableCell>{property.rehab}</TableCell>
                      <TableCell>{property.liens}</TableCell>
                      <TableCell>{property.cash4keys}</TableCell>
                      <TableCell>{property.tts}</TableCell>
                      <TableCell className="font-semibold">{property.maxBid}</TableCell>
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

export default MaxBid;
