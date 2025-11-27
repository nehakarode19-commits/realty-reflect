import Layout from "@/components/Layout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, Search, Download, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

const properties = [
  {
    id: 1,
    caseNo: "45",
    parcelId: "123",
    date: "01-11-2025",
    propertyName: "Oaks Villa",
    lienAmount: 50000,
    bed: 53,
    bath: 565,
    sqFootage: 555,
    finalARV: "",
  },
  {
    id: 2,
    caseNo: "1",
    parcelId: "123",
    date: "01-04-2025",
    propertyName: "sunset villa",
    lienAmount: 54350,
    bed: 33,
    bath: 3,
    sqFootage: 32,
    finalARV: "",
  },
  {
    id: 3,
    caseNo: "45",
    parcelId: "123",
    date: "01-11-2025",
    propertyName: "ks charcoal",
    lienAmount: 50000,
    bed: 2,
    bath: 12,
    sqFootage: 6000,
    finalARV: "",
  },
  {
    id: 4,
    caseNo: "5",
    parcelId: "54",
    date: "03-05-2025",
    propertyName: "pine residence",
    lienAmount: 2000,
    bed: 9,
    bath: 4,
    sqFootage: 54,
    finalARV: "27000",
  },
  {
    id: 5,
    caseNo: "87",
    parcelId: "678",
    date: "15-11-2025",
    propertyName: "divine buds",
    lienAmount: 3500000,
    bed: 1,
    bath: 3,
    sqFootage: 52,
    finalARV: "",
  },
  {
    id: 6,
    caseNo: "5656",
    parcelId: "5665",
    date: "29-05-2025",
    propertyName: "palm greens",
    lienAmount: 5000000,
    bed: 5,
    bath: 6,
    sqFootage: 500,
    finalARV: "",
  },
  {
    id: 7,
    caseNo: "45",
    parcelId: "123",
    date: "01-10-2025",
    propertyName: "Oaks Villa",
    lienAmount: 50000,
    bed: 5,
    bath: 3,
    sqFootage: 500,
    finalARV: "1500000",
  },
];

const Properties = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperties, setSelectedProperties] = useState<number[]>([]);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProperties(properties.map(p => p.id));
    } else {
      setSelectedProperties([]);
    }
  };

  const handleSelectProperty = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedProperties([...selectedProperties, id]);
    } else {
      setSelectedProperties(selectedProperties.filter(propId => propId !== id));
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
              className="bg-[#3d3d7a] text-white hover:bg-[#3d3d7a]/90"
              onClick={() => navigate("/create-property")}
            >
              + Add Property
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Input 
              placeholder="Search by property name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
          </div>
          <Button 
            className="bg-[#3d3d7a] text-white hover:bg-[#3d3d7a]/90"
            onClick={() => toast.info(`Searching for: ${searchQuery}`)}
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>

        <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30">
            <h2 className="font-semibold text-foreground">Property Master</h2>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => toast.info("Refresh data")}
              >
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-12">
                    <Checkbox 
                      checked={selectedProperties.length === properties.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead>Case No</TableHead>
                  <TableHead>Parcel ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Property Name</TableHead>
                  <TableHead>Lien Amount</TableHead>
                  <TableHead>Bed</TableHead>
                  <TableHead>Bath</TableHead>
                  <TableHead>Sq. Footage</TableHead>
                  <TableHead>Final ARV</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {properties.map((property, index) => (
                  <TableRow key={property.id}>
                    <TableCell>
                      <Checkbox 
                        checked={selectedProperties.includes(property.id)}
                        onCheckedChange={(checked) => handleSelectProperty(property.id, checked as boolean)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{property.caseNo}</TableCell>
                    <TableCell className="font-mono text-sm">
                      {property.parcelId}
                    </TableCell>
                    <TableCell>{property.date}</TableCell>
                    <TableCell>{property.propertyName}</TableCell>
                    <TableCell>{property.lienAmount.toLocaleString()}</TableCell>
                    <TableCell>{property.bed}</TableCell>
                    <TableCell>{property.bath}</TableCell>
                    <TableCell>{property.sqFootage}</TableCell>
                    <TableCell>{property.finalARV || "-"}</TableCell>
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => toast.info(`Edit property ${property.caseNo}`)}
                      >
                        <Edit className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between px-4 py-3 border-t">
            <div className="text-sm text-muted-foreground">
              1-7 of 7
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">1</Button>
              <span className="text-sm text-muted-foreground">10 / page</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Properties;
