import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Download, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const myProperties = [
  {
    id: 1,
    date: "01-11-2025",
    propertyName: "Oaks Villa",
    lienAmount: 50000,
    bed: 53,
    bath: 565,
    sqFootage: 555,
    status: "Pending",
  },
  {
    id: 2,
    date: "01-04-2025",
    propertyName: "sunset villa",
    lienAmount: 54350,
    bed: 33,
    bath: 3,
    sqFootage: 32,
    status: "Completed",
  },
  {
    id: 3,
    date: "01-11-2025",
    propertyName: "ks charcoal",
    lienAmount: 50000,
    bed: 2,
    bath: 12,
    sqFootage: 6000,
    status: "Pending",
  },
  {
    id: 4,
    date: "03-05-2025",
    propertyName: "pine residence",
    lienAmount: 2000,
    bed: 9,
    bath: 4,
    sqFootage: 54,
    status: "Completed",
  },
  {
    id: 5,
    date: "15-11-2025",
    propertyName: "divine buds",
    lienAmount: 3500000,
    bed: 1,
    bath: 3,
    sqFootage: 52,
    status: "Completed",
  },
  {
    id: 6,
    date: "28-05-2025",
    propertyName: "palm greens",
    lienAmount: 5000000,
    bed: 5,
    bath: 6,
    sqFootage: 500,
    status: "Pending",
  },
  {
    id: 7,
    date: "01-10-2025",
    propertyName: "Oaks Villa",
    lienAmount: 50000,
    bed: 5,
    bath: 3,
    sqFootage: 500,
    status: "Completed",
  },
];

const MyProperty = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperties, setSelectedProperties] = useState<number[]>([]);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-warning text-warning-foreground";
      case "Completed":
        return "bg-success text-success-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProperties(myProperties.map(p => p.id));
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
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Property</h1>
            <p className="text-muted-foreground mt-1">Manage your property portfolio with detailed tracking</p>
          </div>
          <Button 
            variant="outline"
            className="bg-[#3d3d7a] text-white hover:bg-[#3d3d7a]/90 border-[#3d3d7a]"
            onClick={() => toast.info("Export Excel functionality coming soon")}
          >
            <Download className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
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

        <Card className="shadow-lg">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-12">
                      <Checkbox 
                        checked={selectedProperties.length === myProperties.length}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">Date</TableHead>
                    <TableHead className="font-semibold text-foreground">Property Name</TableHead>
                    <TableHead className="font-semibold text-foreground">Lien Amount</TableHead>
                    <TableHead className="font-semibold text-foreground">Bed</TableHead>
                    <TableHead className="font-semibold text-foreground">Bath</TableHead>
                    <TableHead className="font-semibold text-foreground">Sq. Footage</TableHead>
                    <TableHead className="font-semibold text-foreground">Status</TableHead>
                    <TableHead className="font-semibold text-foreground">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {myProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell>
                        <Checkbox 
                          checked={selectedProperties.includes(property.id)}
                          onCheckedChange={(checked) => handleSelectProperty(property.id, checked as boolean)}
                        />
                      </TableCell>
                      <TableCell>{property.date}</TableCell>
                      <TableCell className="font-medium">{property.propertyName}</TableCell>
                      <TableCell>{property.lienAmount.toLocaleString()}</TableCell>
                      <TableCell>{property.bed}</TableCell>
                      <TableCell>{property.bath}</TableCell>
                      <TableCell>{property.sqFootage}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(property.status)}>
                          {property.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          title="Edit"
                          onClick={() => navigate(`/my-property/edit/${property.id}`)}
                        >
                          <Edit className="w-4 h-4" />
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
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MyProperty;
