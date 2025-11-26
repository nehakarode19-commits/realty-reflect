import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, FileText, Paperclip, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const myProperties = [
  {
    id: 1,
    caseNo: "1255",
    parcelId: "100002444400",
    owners: "Mack Watt",
    address: "123 Main St, Springfield, USA",
    lien: "$20,000",
    minBid: "$25,000",
    arv: "$14,000",
    rehab: "$8,000",
    maxBid: "$4,000",
    status: "Active",
    documents: 3,
    notes: "Property in good condition, needs minor repairs",
  },
  {
    id: 2,
    caseNo: "1256",
    parcelId: "100002444401",
    owners: "Lila Hart",
    address: "456 Oak Ave, Riverside, USA",
    lien: "$30,000",
    minBid: "$35,000",
    arv: "$24,000",
    rehab: "$10,000",
    maxBid: "$5,000",
    status: "Pending",
    documents: 5,
    notes: "Awaiting inspection report",
  },
  {
    id: 3,
    caseNo: "1257",
    parcelId: "100002444402",
    owners: "Jordan Lee",
    address: "789 Pine Dr, Lakeview, USA",
    lien: "$15,000",
    minBid: "$20,000",
    arv: "$12,000",
    rehab: "$6,500",
    maxBid: "$3,500",
    status: "Completed",
    documents: 8,
    notes: "All documents received and verified",
  },
  {
    id: 4,
    caseNo: "1258",
    parcelId: "100002444403",
    owners: "Avery Kim",
    address: "321 Birch Blvd, Metropolis, USA",
    lien: "$22,000",
    minBid: "$28,000",
    arv: "$18,000",
    rehab: "$9,000",
    maxBid: "$4,500",
    status: "Active",
    documents: 2,
    notes: "Structural assessment pending",
  },
  {
    id: 5,
    caseNo: "1259",
    parcelId: "100002444404",
    owners: "Riley Smith",
    address: "654 Cedar Ln, Gotham, USA",
    lien: "$18,000",
    minBid: "$23,000",
    arv: "$15,000",
    rehab: "$7,500",
    maxBid: "$3,000",
    status: "Active",
    documents: 4,
    notes: "Title search in progress",
  },
];

const MyProperty = () => {
  const navigate = useNavigate();
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success text-success-foreground";
      case "Pending":
        return "bg-warning text-warning-foreground";
      case "Completed":
        return "bg-info text-info-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Property</h1>
          <p className="text-muted-foreground mt-1">Manage your property portfolio with detailed tracking</p>
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
                    <TableHead className="font-semibold text-foreground">ADDRESS</TableHead>
                    <TableHead className="font-semibold text-foreground">LIEN</TableHead>
                    <TableHead className="font-semibold text-foreground">MIN BID</TableHead>
                    <TableHead className="font-semibold text-foreground">ARV</TableHead>
                    <TableHead className="font-semibold text-foreground">REHAB</TableHead>
                    <TableHead className="font-semibold text-foreground">MAX BID</TableHead>
                    <TableHead className="font-semibold text-foreground">STATUS</TableHead>
                    <TableHead className="font-semibold text-foreground">DOCS</TableHead>
                    <TableHead className="font-semibold text-foreground">NOTES</TableHead>
                    <TableHead className="font-semibold text-foreground text-right">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {myProperties.map((property, index) => (
                    <TableRow key={property.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">{property.caseNo}</TableCell>
                      <TableCell className="font-mono text-sm">{property.parcelId}</TableCell>
                      <TableCell>{property.owners}</TableCell>
                      <TableCell className="max-w-xs truncate">{property.address}</TableCell>
                      <TableCell>{property.lien}</TableCell>
                      <TableCell>{property.minBid}</TableCell>
                      <TableCell>{property.arv}</TableCell>
                      <TableCell>{property.rehab}</TableCell>
                      <TableCell className="font-semibold">{property.maxBid}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(property.status)}>
                          {property.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="gap-2"
                          onClick={() => toast.info(`View ${property.documents} documents`)}
                        >
                          <Paperclip className="w-4 h-4" />
                          {property.documents}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="gap-2"
                          onClick={() => toast.info(`Notes: ${property.notes}`)}
                        >
                          <FileText className="w-4 h-4" />
                          View
                        </Button>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            title="View Details"
                            onClick={() => toast.info(`View details for ${property.caseNo}`)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            title="Edit"
                            onClick={() => toast.info(`Edit property ${property.caseNo}`)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            title="Delete"
                            onClick={() => toast.success(`Property ${property.caseNo} deleted`)}
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

export default MyProperty;
