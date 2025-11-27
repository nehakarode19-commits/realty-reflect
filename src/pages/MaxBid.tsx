import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Download, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

const maxBidProperties = [
  {
    id: 1,
    date: "01-11-2025",
    propertyName: "Oaks Villa",
    lienAmount: "50000",
    sqFootage: "555",
    status: "Pending",
  },
  {
    id: 2,
    date: "01-04-2025",
    propertyName: "sunset villa",
    lienAmount: "54350",
    sqFootage: "32",
    status: "Pending",
  },
  {
    id: 3,
    date: "01-11-2025",
    propertyName: "ks charcoal",
    lienAmount: "50000",
    sqFootage: "6000",
    status: "Pending",
  },
  {
    id: 4,
    date: "03-05-2025",
    propertyName: "pine residence",
    lienAmount: "2000",
    sqFootage: "54",
    status: "Completed",
  },
  {
    id: 5,
    date: "15-11-2025",
    propertyName: "divine buds",
    lienAmount: "3500000",
    sqFootage: "52",
    status: "Completed",
  },
  {
    id: 6,
    date: "28-05-2025",
    propertyName: "palm greens",
    lienAmount: "5000000",
    sqFootage: "500",
    status: "Pending",
  },
  {
    id: 7,
    date: "01-10-2025",
    propertyName: "Oaks Villa",
    lienAmount: "50000",
    sqFootage: "500",
    status: "Completed",
  },
];

const MaxBid = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProperties = maxBidProperties.filter(property =>
    property.propertyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6 max-w-full">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Max Bid Calculation</h1>
          </div>
          <Button 
            variant="outline"
            className="bg-[#4a5273] text-white hover:bg-[#4a5273]/90 border-[#4a5273]"
            onClick={() => toast.info("Export Excel functionality coming soon")}
          >
            <Download className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
        </div>

        {/* Search Bar */}
        <Card className="shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button 
                className="bg-[#4a5273] text-white hover:bg-[#4a5273]/90"
                onClick={() => toast.info(`Searching for: ${searchQuery}`)}
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Max Bid Records</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Date</TableHead>
                    <TableHead className="font-semibold">Property Name</TableHead>
                    <TableHead className="font-semibold">Lien Amount</TableHead>
                    <TableHead className="font-semibold">Sq. Footage</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProperties.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                        No properties found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredProperties.map((property) => (
                      <TableRow key={property.id}>
                        <TableCell>{property.date}</TableCell>
                        <TableCell className="font-medium">{property.propertyName}</TableCell>
                        <TableCell>{property.lienAmount}</TableCell>
                        <TableCell>{property.sqFootage}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={property.status === "Completed" ? "default" : "secondary"}
                            className={
                              property.status === "Completed" 
                                ? "bg-green-100 text-green-800 hover:bg-green-100" 
                                : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            }
                          >
                            {property.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center justify-end gap-2">
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => navigate("/create-max-bid")}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Pagination Info */}
        <div className="flex items-center justify-end text-sm text-muted-foreground">
          <span>1-{filteredProperties.length} of {maxBidProperties.length}</span>
        </div>
      </div>
    </Layout>
  );
};

export default MaxBid;
