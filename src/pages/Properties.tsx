import Layout from "@/components/Layout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Search, Download, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
          <h1 className="text-3xl font-bold text-foreground">Property Master</h1>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline"
              className="bg-[#3d3d7a] text-white hover:bg-[#3d3d7a]/90 border-[#3d3d7a]"
              onClick={() => toast.info("Export Excel functionality coming soon")}
            >
              <Download className="w-4 h-4 mr-2" />
              Export Excel
            </Button>
            <Button 
              variant="outline"
              className="bg-[#3d3d7a] text-white hover:bg-[#3d3d7a]/90 border-[#3d3d7a]"
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.csv,.xlsx,.xls';
                input.onchange = (e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) {
                    toast.success(`File "${file.name}" uploaded successfully. Processing property data...`);
                  }
                };
                input.click();
              }}
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
            <Button 
              className="bg-[#3d3d7a] text-white hover:bg-[#3d3d7a]/90"
              onClick={() => navigate("/create-property")}
            >
              + Add Property
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="outline" className="flex items-center gap-2 px-3 py-2 text-sm bg-background">
            SQ FT
            <button className="ml-1" onClick={() => toast.info("SQ FT search")}>
              <Search className="w-4 h-4" />
            </button>
          </Badge>
          <Badge variant="outline" className="flex items-center gap-2 px-3 py-2 text-sm bg-background">
            City
            <button className="ml-1" onClick={() => toast.info("City search")}>
              <Search className="w-4 h-4" />
            </button>
          </Badge>
          <Badge variant="outline" className="flex items-center gap-2 px-3 py-2 text-sm bg-background">
            Min Bid
            <button className="ml-1" onClick={() => toast.info("Min Bid search")}>
              <Search className="w-4 h-4" />
            </button>
          </Badge>
        </div>

        <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>NO.</TableHead>
                  <TableHead>CASE NO</TableHead>
                  <TableHead>PARCEL ID</TableHead>
                  <TableHead>OWNERS</TableHead>
                  <TableHead>LIEN</TableHead>
                  <TableHead>MIN BID</TableHead>
                  <TableHead>ARV</TableHead>
                  <TableHead>REHAB</TableHead>
                  <TableHead>MAX BID</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead>ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {properties.map((property, index) => (
                  <TableRow key={property.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="font-medium">{property.caseNo}</TableCell>
                    <TableCell className="font-mono text-sm">
                      {property.parcelId}
                    </TableCell>
                    <TableCell>{property.owners}</TableCell>
                    <TableCell>{property.lien.toLocaleString()}</TableCell>
                    <TableCell>{property.minBid.toLocaleString()}</TableCell>
                    <TableCell>{property.arv.toLocaleString()}</TableCell>
                    <TableCell>{property.rehab.toLocaleString()}</TableCell>
                    <TableCell>{property.maxBid.toLocaleString()}</TableCell>
                    <TableCell>{property.maxBid.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => toast.info(`Edit property ${property.caseNo}`)}
                        >
                          <Edit className="w-4 h-4 text-muted-foreground" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => toast.success(`Property ${property.caseNo} deleted`)}
                        >
                          <Trash2 className="w-4 h-4 text-muted-foreground" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Properties;
