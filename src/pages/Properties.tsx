import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, Trash2, Eye, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const properties = [
  {
    id: 1,
    caseNo: "1255",
    parcelId: "100002444400",
    owners: "Mack Watt",
    lien: 20000,
    minBid: 25000,
    arv: 14000,
    rehab: 8000,
    maxBid: 4000,
    status: "Active",
  },
  {
    id: 2,
    caseNo: "1256",
    parcelId: "100002444401",
    owners: "Lila Hart",
    lien: 30000,
    minBid: 35000,
    arv: 24000,
    rehab: 10000,
    maxBid: 5000,
    status: "Pending",
  },
  {
    id: 3,
    caseNo: "1257",
    parcelId: "100002444402",
    owners: "Jordan Lee",
    lien: 15000,
    minBid: 20000,
    arv: 12000,
    rehab: 6500,
    maxBid: 3500,
    status: "Completed",
  },
  {
    id: 4,
    caseNo: "1258",
    parcelId: "100002444403",
    owners: "Avery Kim",
    lien: 22000,
    minBid: 28000,
    arv: 18000,
    rehab: 9000,
    maxBid: 4500,
    status: "Active",
  },
  {
    id: 5,
    caseNo: "1259",
    parcelId: "100002444404",
    owners: "Riley Smith",
    lien: 18000,
    minBid: 23000,
    arv: 15000,
    rehab: 7500,
    maxBid: 3000,
    status: "Active",
  },
];

const Properties = () => {
  const navigate = useNavigate();
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Property Master</h1>
            <p className="text-muted-foreground mt-1">Manage all your investment properties</p>
          </div>
          <Button 
            className="bg-gradient-to-r from-primary to-secondary"
            onClick={() => navigate("/create-property")}
          >
            Add New Property
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by case no, parcel ID, or owner..."
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
                    <TableHead>Case No</TableHead>
                    <TableHead>Parcel ID</TableHead>
                    <TableHead>Owners</TableHead>
                    <TableHead>Lien</TableHead>
                    <TableHead>Min Bid</TableHead>
                    <TableHead>ARV</TableHead>
                    <TableHead>Rehab</TableHead>
                    <TableHead>Max Bid</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {properties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">{property.caseNo}</TableCell>
                      <TableCell className="font-mono text-sm">
                        {property.parcelId}
                      </TableCell>
                      <TableCell>{property.owners}</TableCell>
                      <TableCell>{formatCurrency(property.lien)}</TableCell>
                      <TableCell>{formatCurrency(property.minBid)}</TableCell>
                      <TableCell>{formatCurrency(property.arv)}</TableCell>
                      <TableCell>{formatCurrency(property.rehab)}</TableCell>
                      <TableCell className="font-semibold text-primary">
                        {formatCurrency(property.maxBid)}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(property.status)}>
                          {property.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="w-4 h-4" />
                          </Button>
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

export default Properties;
