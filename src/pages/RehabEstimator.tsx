import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Download, Search, RefreshCw, Columns, Settings } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

const rehabProperties = [
  {
    id: 1,
    date: "01-04-2025",
    propertyName: "sunset villa",
    lienAmount: 54350,
    bed: 33,
    bath: 3,
    sqFootage: 32,
    status: "Completed",
  },
  {
    id: 2,
    date: "01-11-2025",
    propertyName: "ks charcoal",
    lienAmount: 50000,
    bed: 2,
    bath: 12,
    sqFootage: 6000,
    status: "Completed",
  },
  {
    id: 3,
    date: "03-05-2025",
    propertyName: "pine residence",
    lienAmount: 2000,
    bed: 9,
    bath: 4,
    sqFootage: 54,
    status: "Completed",
  },
  {
    id: 4,
    date: "15-11-2025",
    propertyName: "divine buds",
    lienAmount: 3500000,
    bed: 1,
    bath: 3,
    sqFootage: 52,
    status: "Completed",
  },
  {
    id: 5,
    date: "29-05-2025",
    propertyName: "palm greens",
    lienAmount: 5000000,
    bed: 5,
    bath: 6,
    sqFootage: 500,
    status: "Completed",
  },
  {
    id: 6,
    date: "01-10-2025",
    propertyName: "Oaks Villa",
    lienAmount: 50000,
    bed: 5,
    bath: 3,
    sqFootage: 500,
    status: "Completed",
  },
];

const RehabEstimator = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Rehab Estimator</h1>
          </div>
          <Button 
            className="bg-[#9b95c5] text-white hover:bg-[#9b95c5]/90"
            onClick={() => toast.info("Export Excel functionality coming soon")}
          >
            <Download className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by property name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            className="bg-[#9b95c5] text-white hover:bg-[#9b95c5]/90"
            onClick={() => toast.info("Search functionality coming soon")}
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            {/* Table Controls */}
            <div className="flex items-center justify-end gap-2 mb-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => toast.info("Refresh data")}
              >
                <RefreshCw className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => toast.info("Manage columns")}
              >
                <Columns className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => toast.info("Settings")}
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-12">
                      <Checkbox />
                    </TableHead>
                    <TableHead className="font-semibold">Date</TableHead>
                    <TableHead className="font-semibold">Property Name</TableHead>
                    <TableHead className="font-semibold">Lien Amount</TableHead>
                    <TableHead className="font-semibold">Bed</TableHead>
                    <TableHead className="font-semibold">Bath</TableHead>
                    <TableHead className="font-semibold">Sq. Footage</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rehabProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>{property.date}</TableCell>
                      <TableCell className="font-medium">{property.propertyName}</TableCell>
                      <TableCell>{property.lienAmount.toLocaleString()}</TableCell>
                      <TableCell>{property.bed}</TableCell>
                      <TableCell>{property.bath}</TableCell>
                      <TableCell>{property.sqFootage}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          {property.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => navigate("/create-rehab-estimate")}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                1-6 of 6
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-8 h-8 p-0 bg-[#9b95c5] text-white hover:bg-[#9b95c5]/90"
                  >
                    1
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </Button>
                <div className="flex items-center gap-2 ml-4 text-sm">
                  <span>{itemsPerPage} / page</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default RehabEstimator;
