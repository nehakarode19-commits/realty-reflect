import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  TrendingUp, 
  DollarSign, 
  Home, 
  Calendar,
  FileSpreadsheet,
  FileCheck,
  AlertCircle,
  CheckCircle2
} from "lucide-react";
import { toast } from "sonner";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState } from "react";

// Import Summary Data
const importSummaryData = {
  totalImports: 3,
  lastImport: "2025-01-15",
  totalRows: 147,
  successfulRows: 142,
  errorRows: 5,
  mappingUsed: "Standard Property Mapping v2.1"
};

const importDetails = [
  { date: "2025-01-15", fileName: "properties_jan_2025.csv", rows: 52, success: 50, errors: 2, status: "Completed" },
  { date: "2025-01-10", fileName: "q4_properties.xlsx", rows: 45, success: 45, errors: 0, status: "Completed" },
  { date: "2025-01-05", fileName: "properties_import.csv", rows: 50, success: 47, errors: 3, status: "Completed with Errors" }
];

// Monthly Summary Data
const monthlyKPIs = [
  { label: "Total Properties", value: "147", change: "+12%", icon: Home, color: "text-primary" },
  { label: "Total Investment", value: "$8.2M", change: "+8%", icon: DollarSign, color: "text-success" },
  { label: "Avg Max Bid", value: "$55,780", change: "+5%", icon: TrendingUp, color: "text-info" },
  { label: "Active Properties", value: "89", change: "+15%", icon: CheckCircle2, color: "text-warning" }
];

const monthlyChartData = [
  { month: "Jul", properties: 45 },
  { month: "Aug", properties: 58 },
  { month: "Sep", properties: 72 },
  { month: "Oct", properties: 95 },
  { month: "Nov", properties: 118 },
  { month: "Dec", properties: 135 },
  { month: "Jan", properties: 147 }
];

const statusPieData = [
  { name: "Active", value: 89, color: "#10b981" },
  { name: "Pending", value: 42, color: "#f59e0b" },
  { name: "Completed", value: 16, color: "#3b82f6" }
];

// Master Investment Decision Report Data
const midrData = [
  {
    id: 1,
    propertyName: "Oaks Villa",
    caseNo: "1255",
    parcelId: "100002444400",
    lienAmount: 50000,
    minBid: 55000,
    arv: 180000,
    roughARV: 175000,
    finalARV: 180000,
    rehabEstimate: 35000,
    rehabType: "Moderate",
    maxBid: 87500,
    bed: 4,
    bath: 3,
    sqFootage: 2200,
    status: "Active",
    roi: "28%",
    profitPotential: 57500
  },
  {
    id: 2,
    propertyName: "Sunset Villa",
    caseNo: "1256",
    parcelId: "100002444401",
    lienAmount: 54350,
    minBid: 60000,
    arv: 165000,
    roughARV: 160000,
    finalARV: 165000,
    rehabEstimate: 28000,
    rehabType: "Basic",
    maxBid: 75000,
    bed: 3,
    bath: 2,
    sqFootage: 1850,
    status: "Pending",
    roi: "22%",
    profitPotential: 42650
  },
  {
    id: 3,
    propertyName: "Pine Residence",
    caseNo: "1257",
    parcelId: "100002444402",
    lienAmount: 32000,
    minBid: 38000,
    arv: 125000,
    roughARV: 120000,
    finalARV: 125000,
    rehabEstimate: 22000,
    rehabType: "Basic",
    maxBid: 62500,
    bed: 3,
    bath: 2,
    sqFootage: 1600,
    status: "Active",
    roi: "35%",
    profitPotential: 40500
  },
  {
    id: 4,
    propertyName: "Palm Greens",
    caseNo: "1258",
    parcelId: "100002444403",
    lienAmount: 75000,
    minBid: 82000,
    arv: 245000,
    roughARV: 240000,
    finalARV: 245000,
    rehabEstimate: 48000,
    rehabType: "Extensive",
    maxBid: 115000,
    bed: 5,
    bath: 4,
    sqFootage: 3200,
    status: "Active",
    roi: "31%",
    profitPotential: 82000
  },
  {
    id: 5,
    propertyName: "Divine Buds",
    caseNo: "1259",
    parcelId: "100002444404",
    lienAmount: 45000,
    minBid: 50000,
    arv: 155000,
    roughARV: 150000,
    finalARV: 155000,
    rehabEstimate: 30000,
    rehabType: "Moderate",
    maxBid: 72500,
    bed: 4,
    bath: 3,
    sqFootage: 2000,
    status: "Completed",
    roi: "27%",
    profitPotential: 52500
  }
];

const Reports = () => {
  const [selectedMonth, setSelectedMonth] = useState("january");
  const [selectedFormat, setSelectedFormat] = useState("pdf");

  const handleExport = (reportType: string, format: string) => {
    toast.success(`Exporting ${reportType} as ${format.toUpperCase()}...`);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground mt-1">Generate comprehensive investment and property reports</p>
        </div>

        <Tabs defaultValue="import" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="import">
              <FileCheck className="w-4 h-4 mr-2" />
              Import Summary
            </TabsTrigger>
            <TabsTrigger value="monthly">
              <TrendingUp className="w-4 h-4 mr-2" />
              Monthly Summary
            </TabsTrigger>
            <TabsTrigger value="midr">
              <FileSpreadsheet className="w-4 h-4 mr-2" />
              MIDR Report
            </TabsTrigger>
          </TabsList>

          {/* Import Summary Report */}
          <TabsContent value="import" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Import Summary Report</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Overview of all data imports and processing status</p>
                  </div>
                  <div className="flex gap-2">
                    <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csv">CSV</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="pdf">PDF</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button onClick={() => handleExport("Import Summary", selectedFormat)}>
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Total Imports</p>
                        <p className="text-3xl font-bold text-primary mt-1">{importSummaryData.totalImports}</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Total Rows</p>
                        <p className="text-3xl font-bold text-foreground mt-1">{importSummaryData.totalRows}</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Success Rate</p>
                        <p className="text-3xl font-bold text-success mt-1">
                          {Math.round((importSummaryData.successfulRows / importSummaryData.totalRows) * 100)}%
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-success/10 border-success/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Successful Rows</p>
                          <p className="text-2xl font-bold text-success mt-1">{importSummaryData.successfulRows}</p>
                        </div>
                        <CheckCircle2 className="w-8 h-8 text-success" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-destructive/10 border-destructive/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Error Rows</p>
                          <p className="text-2xl font-bold text-destructive mt-1">{importSummaryData.errorRows}</p>
                        </div>
                        <AlertCircle className="w-8 h-8 text-destructive" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-muted/30">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Last Import Date:</span>
                        <span className="text-sm font-medium">{importSummaryData.lastImport}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Mapping Used:</span>
                        <span className="text-sm font-medium">{importSummaryData.mappingUsed}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Import History</h3>
                  <Card>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>File Name</TableHead>
                            <TableHead>Total Rows</TableHead>
                            <TableHead>Success</TableHead>
                            <TableHead>Errors</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {importDetails.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{item.date}</TableCell>
                              <TableCell className="font-medium">{item.fileName}</TableCell>
                              <TableCell>{item.rows}</TableCell>
                              <TableCell className="text-success">{item.success}</TableCell>
                              <TableCell className="text-destructive">{item.errors}</TableCell>
                              <TableCell>
                                <Badge className={item.errors > 0 ? "bg-warning" : "bg-success"}>
                                  {item.status}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Monthly Property Summary */}
          <TabsContent value="monthly" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Monthly Property Summary</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Dashboard report with KPIs and analytics</p>
                  </div>
                  <div className="flex gap-2">
                    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="january">January 2025</SelectItem>
                        <SelectItem value="december">December 2024</SelectItem>
                        <SelectItem value="november">November 2024</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csv">CSV</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="pdf">PDF</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button onClick={() => handleExport("Monthly Summary", selectedFormat)}>
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {monthlyKPIs.map((kpi, index) => {
                    const Icon = kpi.icon;
                    return (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between mb-2">
                            <Icon className={`w-5 h-5 ${kpi.color}`} />
                            <Badge variant="outline" className="text-xs">{kpi.change}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{kpi.label}</p>
                          <p className="text-2xl font-bold mt-1">{kpi.value}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Monthly Property Growth</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={monthlyChartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="properties" fill="hsl(var(--primary))" name="Properties" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Property Status Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={statusPieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {statusPieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="flex justify-center gap-4 mt-4">
                        {statusPieData.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-sm">{item.name}: {item.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Master Investment Decision Report */}
          <TabsContent value="midr" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Master Investment Decision Report (MIDR)</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Consolidated property analysis with ARV, Rehab, and Max Bid calculations</p>
                  </div>
                  <div className="flex gap-2">
                    <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csv">CSV</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="pdf">PDF</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button onClick={() => handleExport("MIDR Report", selectedFormat)}>
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead>Case No</TableHead>
                        <TableHead>Property Name</TableHead>
                        <TableHead>Parcel ID</TableHead>
                        <TableHead>Lien</TableHead>
                        <TableHead>Min Bid</TableHead>
                        <TableHead>Rough ARV</TableHead>
                        <TableHead>Final ARV</TableHead>
                        <TableHead>Rehab Type</TableHead>
                        <TableHead>Rehab Cost</TableHead>
                        <TableHead>Max Bid</TableHead>
                        <TableHead>Bed/Bath</TableHead>
                        <TableHead>Sq Ft</TableHead>
                        <TableHead>ROI</TableHead>
                        <TableHead>Profit</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {midrData.map((property) => (
                        <TableRow key={property.id}>
                          <TableCell className="font-medium">{property.caseNo}</TableCell>
                          <TableCell>{property.propertyName}</TableCell>
                          <TableCell className="font-mono text-xs">{property.parcelId}</TableCell>
                          <TableCell>${property.lienAmount.toLocaleString()}</TableCell>
                          <TableCell>${property.minBid.toLocaleString()}</TableCell>
                          <TableCell>${property.roughARV.toLocaleString()}</TableCell>
                          <TableCell className="font-semibold">${property.finalARV.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{property.rehabType}</Badge>
                          </TableCell>
                          <TableCell>${property.rehabEstimate.toLocaleString()}</TableCell>
                          <TableCell className="font-bold text-primary">${property.maxBid.toLocaleString()}</TableCell>
                          <TableCell>{property.bed}/{property.bath}</TableCell>
                          <TableCell>{property.sqFootage.toLocaleString()}</TableCell>
                          <TableCell className="text-success font-semibold">{property.roi}</TableCell>
                          <TableCell className="text-success">${property.profitPotential.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge className={
                              property.status === "Active" ? "bg-success" : 
                              property.status === "Pending" ? "bg-warning" : 
                              "bg-info"
                            }>
                              {property.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="bg-primary/10">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground">Total Properties</p>
                      <p className="text-2xl font-bold mt-1">{midrData.length}</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-success/10">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground">Avg ROI</p>
                      <p className="text-2xl font-bold text-success mt-1">
                        {Math.round(midrData.reduce((acc, p) => acc + parseInt(p.roi), 0) / midrData.length)}%
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-info/10">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground">Total Profit Potential</p>
                      <p className="text-2xl font-bold text-info mt-1">
                        ${midrData.reduce((acc, p) => acc + p.profitPotential, 0).toLocaleString()}
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-warning/10">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground">Total Investment</p>
                      <p className="text-2xl font-bold text-warning mt-1">
                        ${midrData.reduce((acc, p) => acc + p.maxBid + p.rehabEstimate, 0).toLocaleString()}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Reports;
