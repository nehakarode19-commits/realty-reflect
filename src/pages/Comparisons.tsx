import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Columns, Settings, Edit, Download, Search } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const comparisons = [
  {
    id: 1,
    propertyName: "sunset villa",
    bed: 33,
    bath: 3,
    sqFootage: 32,
    finalARV: null,
    status: "Completed",
  },
  {
    id: 2,
    propertyName: "ks charcoal",
    bed: 2,
    bath: 12,
    sqFootage: 6000,
    finalARV: null,
    status: "Pending",
  },
  {
    id: 3,
    propertyName: "pine residence",
    bed: 9,
    bath: 4,
    sqFootage: 54,
    finalARV: 27000,
    status: "Completed",
  },
  {
    id: 4,
    propertyName: "divine buds",
    bed: 1,
    bath: 3,
    sqFootage: 52,
    finalARV: null,
    status: "Pending",
  },
  {
    id: 5,
    propertyName: "palm greens",
    bed: 5,
    bath: 6,
    sqFootage: 500,
    finalARV: null,
    status: "Pending",
  },
  {
    id: 6,
    propertyName: "Oaks Villa",
    bed: 5,
    bath: 3,
    sqFootage: 500,
    finalARV: 1500000,
    status: "Completed",
  },
];

const Comparisons = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const formatCurrency = (value: number | null) => {
    if (!value) return "-";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Comparison Property Master</h1>
          <Button 
            className="bg-[#9b95c5] text-white hover:bg-[#9b95c5]/90"
            onClick={() => toast.info("Export Excel functionality coming soon")}
          >
            <Download className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
        </div>

        <div className="flex items-center gap-3">
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
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Comparison</h2>
                <div className="flex items-center gap-2">
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
                    onClick={() => toast.info("Column settings")}
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
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-12">
                      <Checkbox />
                    </TableHead>
                    <TableHead className="font-semibold">Property Name</TableHead>
                    <TableHead className="font-semibold">Bed</TableHead>
                    <TableHead className="font-semibold">Bath</TableHead>
                    <TableHead className="font-semibold">Sq. Footage</TableHead>
                    <TableHead className="font-semibold">Final ARV</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisons.map((comp) => (
                    <TableRow key={comp.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell className="font-medium">{comp.propertyName}</TableCell>
                      <TableCell>{comp.bed}</TableCell>
                      <TableCell>{comp.bath}</TableCell>
                      <TableCell>{comp.sqFootage}</TableCell>
                      <TableCell className="font-semibold">
                        {formatCurrency(comp.finalARV)}
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={comp.status === "Completed" ? "default" : "secondary"}
                          className={comp.status === "Completed" 
                            ? "bg-green-100 text-green-800 hover:bg-green-100" 
                            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                          }
                        >
                          {comp.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => toast.info(`Edit ${comp.propertyName}`)}
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

            <div className="mt-6 flex justify-between items-center text-sm text-muted-foreground">
              <div>1-6 of 6</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-8 h-8 p-0"
                    disabled
                  >
                    1
                  </Button>
                </div>
                <div>10 / page</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Comparisons;
