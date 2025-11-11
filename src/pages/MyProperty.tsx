import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, Plus } from "lucide-react";

const myProperties = [
  {
    id: 1,
    caseNo: "1255",
    parcelId: "100002444400",
    owners: "Mack Watt",
    lien: "$20,000",
    minBid: "$25,000",
    arv: "$14,000",
    rehab: "$8,000",
    maxBid: "$4,000",
    status: "$6,000",
  },
  {
    id: 2,
    caseNo: "1256",
    parcelId: "100002444401",
    owners: "Lila Hart",
    lien: "$30,000",
    minBid: "$35,000",
    arv: "$24,000",
    rehab: "$10,000",
    maxBid: "$5,000",
    status: "$8,000",
  },
  {
    id: 3,
    caseNo: "1257",
    parcelId: "100002444402",
    owners: "Jordan Lee",
    lien: "$15,000",
    minBid: "$20,000",
    arv: "$12,000",
    rehab: "$6,500",
    maxBid: "$3,500",
    status: "$4,500",
  },
  {
    id: 4,
    caseNo: "1258",
    parcelId: "100002444403",
    owners: "Avery Kim",
    lien: "$22,000",
    minBid: "$28,000",
    arv: "$18,000",
    rehab: "$9,000",
    maxBid: "$4,500",
    status: "$7,000",
  },
  {
    id: 5,
    caseNo: "1259",
    parcelId: "100002444404",
    owners: "Riley Smith",
    lien: "$18,000",
    minBid: "$23,000",
    arv: "$15,000",
    rehab: "$7,500",
    maxBid: "$3,000",
    status: "$5,500",
  },
];

const MyProperty = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Property</h1>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Property
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold text-foreground">NO</TableHead>
                    <TableHead className="font-semibold text-foreground">CASE NO</TableHead>
                    <TableHead className="font-semibold text-foreground">PARCEL ID</TableHead>
                    <TableHead className="font-semibold text-foreground">OWNERS</TableHead>
                    <TableHead className="font-semibold text-foreground">LIEN</TableHead>
                    <TableHead className="font-semibold text-foreground">MIN BID</TableHead>
                    <TableHead className="font-semibold text-foreground">ARV</TableHead>
                    <TableHead className="font-semibold text-foreground">REHAB</TableHead>
                    <TableHead className="font-semibold text-foreground">MAX BID</TableHead>
                    <TableHead className="font-semibold text-foreground">STATUS</TableHead>
                    <TableHead className="font-semibold text-foreground text-right">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {myProperties.map((property, index) => (
                    <TableRow key={property.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">{property.caseNo}</TableCell>
                      <TableCell>{property.parcelId}</TableCell>
                      <TableCell>{property.owners}</TableCell>
                      <TableCell>{property.lien}</TableCell>
                      <TableCell>{property.minBid}</TableCell>
                      <TableCell>{property.arv}</TableCell>
                      <TableCell>{property.rehab}</TableCell>
                      <TableCell className="font-semibold">{property.maxBid}</TableCell>
                      <TableCell>{property.status}</TableCell>
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

export default MyProperty;
