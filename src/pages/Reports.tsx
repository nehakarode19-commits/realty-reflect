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
      <div className="space-y-8 pb-8">
        {/* Modern Header */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0ea5b9] via-[#17a2b8] to-[#20b5c9] p-8 text-white shadow-xl">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-2">Reports Dashboard</h1>
            <p className="text-white/90 text-lg">Comprehensive analytics and insights for your investment portfolio</p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />
        </div>

        <Tabs defaultValue="import" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted/50 backdrop-blur-sm rounded-xl">
            <TabsTrigger 
              value="import" 
              className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0ea5b9] data-[state=active]:to-[#17a2b8] data-[state=active]:text-white py-3"
            >
              <FileCheck className="w-4 h-4 mr-2" />
              <span className="font-semibold">Import Summary</span>
            </TabsTrigger>
            <TabsTrigger 
              value="monthly"
              className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0ea5b9] data-[state=active]:to-[#17a2b8] data-[state=active]:text-white py-3"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              <span className="font-semibold">Monthly Summary</span>
            </TabsTrigger>
            <TabsTrigger 
              value="midr"
              className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0ea5b9] data-[state=active]:to-[#17a2b8] data-[state=active]:text-white py-3"
            >
              <FileSpreadsheet className="w-4 h-4 mr-2" />
              <span className="font-semibold">MIDR Report</span>
            </TabsTrigger>
          </TabsList>

          {/* Import Summary Report */}
          <TabsContent value="import" className="space-y-6 animate-fade-in">
            <Card className="shadow-2xl border-none overflow-hidden">
              <div className="bg-gradient-to-r from-[#0ea5b9]/10 to-[#17a2b8]/10 px-6 py-5 border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <FileCheck className="w-6 h-6 text-[#17a2b8]" />
                      Import Summary Report
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">Overview of all data imports and processing status</p>
                  </div>
                  <div className="flex gap-3">
                    <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                      <SelectTrigger className="w-36 border-2 hover:border-[#17a2b8] transition-colors">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csv">📊 CSV</SelectItem>
                        <SelectItem value="excel">📈 Excel</SelectItem>
                        <SelectItem value="pdf">📄 PDF</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button 
                      onClick={() => handleExport("Import Summary", selectedFormat)}
                      className="bg-gradient-to-r from-[#0ea5b9] to-[#17a2b8] hover:from-[#17a2b8] hover:to-[#20b5c9] shadow-lg hover:shadow-xl transition-all"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export Report
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-slate-200/30 rounded-full -mr-10 -mt-10" />
                    <div className="relative">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Total Imports</p>
                      <p className="text-4xl font-bold text-[#17a2b8] mt-2">{importSummaryData.totalImports}</p>
                      <div className="mt-2 flex items-center gap-1 text-xs text-[#17a2b8]">
                        <TrendingUp className="w-3 h-3" />
                        <span>Active</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-slate-200/30 rounded-full -mr-10 -mt-10" />
                    <div className="relative">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Total Rows</p>
                      <p className="text-4xl font-bold text-[#0ea5b9] mt-2">{importSummaryData.totalRows}</p>
                      <div className="mt-2 flex items-center gap-1 text-xs text-[#0ea5b9]">
                        <FileSpreadsheet className="w-3 h-3" />
                        <span>Processed</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-slate-200/30 rounded-full -mr-10 -mt-10" />
                    <div className="relative">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Success Rate</p>
                      <p className="text-4xl font-bold text-slate-700 mt-2">
                        {Math.round((importSummaryData.successfulRows / importSummaryData.totalRows) * 100)}%
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-xs text-slate-700">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Excellent</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 border border-slate-200 shadow-md">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Successful Rows</p>
                        <p className="text-3xl font-bold text-slate-800 mt-2">{importSummaryData.successfulRows}</p>
                        <p className="text-xs text-slate-600 mt-1">of {importSummaryData.totalRows} total</p>
                      </div>
                      <div className="bg-slate-200/50 p-3 rounded-xl">
                        <CheckCircle2 className="w-8 h-8 text-slate-700" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 border border-slate-200 shadow-md">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Error Rows</p>
                        <p className="text-3xl font-bold text-slate-800 mt-2">{importSummaryData.errorRows}</p>
                        <p className="text-xs text-slate-600 mt-1">requires attention</p>
                      </div>
                      <div className="bg-slate-200/50 p-3 rounded-xl">
                        <AlertCircle className="w-8 h-8 text-slate-700" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-muted/30 p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#17a2b8]" />
                    Import Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium text-muted-foreground">Last Import Date</span>
                      <span className="text-sm font-semibold text-foreground">{importSummaryData.lastImport}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm font-medium text-muted-foreground">Mapping Used</span>
                      <Badge variant="outline" className="font-semibold">{importSummaryData.mappingUsed}</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#17a2b8]" />
                    Import History
                  </h3>
                  <div className="rounded-xl border border-border overflow-hidden bg-card shadow-md">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="font-bold">Date</TableHead>
                          <TableHead className="font-bold">File Name</TableHead>
                          <TableHead className="font-bold">Total Rows</TableHead>
                          <TableHead className="font-bold">Success</TableHead>
                          <TableHead className="font-bold">Errors</TableHead>
                          <TableHead className="font-bold">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {importDetails.map((item, index) => (
                          <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                            <TableCell className="font-medium">{item.date}</TableCell>
                            <TableCell className="font-semibold text-[#17a2b8]">{item.fileName}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="font-semibold">{item.rows}</Badge>
                            </TableCell>
                            <TableCell>
                              <span className="inline-flex items-center gap-1 text-slate-700 font-semibold">
                                <CheckCircle2 className="w-4 h-4" />
                                {item.success}
                              </span>
                            </TableCell>
                            <TableCell>
                              <span className="inline-flex items-center gap-1 text-slate-600 font-semibold">
                                <AlertCircle className="w-4 h-4" />
                                {item.errors}
                              </span>
                            </TableCell>
                            <TableCell>
                              <Badge className={item.errors > 0 ? "bg-slate-500 hover:bg-slate-600" : "bg-slate-700 hover:bg-slate-800"}>
                                {item.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Monthly Property Summary */}
          <TabsContent value="monthly" className="space-y-6 animate-fade-in">
            <Card className="shadow-2xl border-none overflow-hidden">
              <div className="bg-gradient-to-r from-[#0ea5b9]/10 to-[#17a2b8]/10 px-6 py-5 border-b">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-[#17a2b8]" />
                      Monthly Property Summary
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">Dashboard report with KPIs and analytics</p>
                  </div>
                  <div className="flex gap-3">
                    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                      <SelectTrigger className="w-44 border-2 hover:border-[#17a2b8] transition-colors">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="january">📅 January 2025</SelectItem>
                        <SelectItem value="december">📅 December 2024</SelectItem>
                        <SelectItem value="november">📅 November 2024</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                      <SelectTrigger className="w-36 border-2 hover:border-[#17a2b8] transition-colors">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csv">📊 CSV</SelectItem>
                        <SelectItem value="excel">📈 Excel</SelectItem>
                        <SelectItem value="pdf">📄 PDF</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button 
                      onClick={() => handleExport("Monthly Summary", selectedFormat)}
                      className="bg-gradient-to-r from-[#0ea5b9] to-[#17a2b8] hover:from-[#17a2b8] hover:to-[#20b5c9] shadow-lg hover:shadow-xl transition-all"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export Report
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {monthlyKPIs.map((kpi, index) => {
                    const Icon = kpi.icon;
                    return (
                      <div 
                        key={index}
                        className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 border border-slate-200 hover:shadow-md transition-all group"
                      >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-slate-200/30 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform" />
                        <div className="relative">
                          <div className="flex items-start justify-between mb-3">
                            <Icon className="w-8 h-8 text-[#17a2b8]" />
                            <Badge variant="outline" className="text-xs font-bold bg-white border-slate-300">
                              {kpi.change}
                            </Badge>
                          </div>
                          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{kpi.label}</p>
                          <p className="text-3xl font-bold mt-2 text-foreground">{kpi.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="rounded-xl border border-border overflow-hidden bg-card shadow-md">
                    <div className="bg-muted/30 px-6 py-4 border-b">
                      <h3 className="text-lg font-bold flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-[#17a2b8]" />
                        Monthly Property Growth
                      </h3>
                    </div>
                    <div className="p-6">
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={monthlyChartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px', fontWeight: 600 }} />
                          <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px', fontWeight: 600 }} />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'hsl(var(--card))', 
                              border: '1px solid hsl(var(--border))', 
                              borderRadius: '8px',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                          />
                          <Legend wrapperStyle={{ fontSize: '14px', fontWeight: 600 }} />
                          <Bar dataKey="properties" fill="#17a2b8" name="Properties" radius={[6, 6, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border overflow-hidden bg-card shadow-md">
                    <div className="bg-muted/30 px-6 py-4 border-b">
                      <h3 className="text-lg font-bold flex items-center gap-2">
                        <Home className="w-5 h-5 text-[#17a2b8]" />
                        Property Status Distribution
                      </h3>
                    </div>
                    <div className="p-6">
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={statusPieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={90}
                            fill="#8884d8"
                            dataKey="value"
                            strokeWidth={2}
                            stroke="hsl(var(--card))"
                          >
                            {statusPieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="flex justify-center gap-6 mt-6">
                        {statusPieData.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: item.color }} 
                            />
                            <span className="text-sm font-semibold">{item.name}: {item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Master Investment Decision Report */}
          <TabsContent value="midr" className="space-y-6 animate-fade-in">
            <Card className="shadow-2xl border-none overflow-hidden">
              <div className="bg-gradient-to-r from-[#0ea5b9]/10 to-[#17a2b8]/10 px-6 py-5 border-b">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <FileSpreadsheet className="w-6 h-6 text-[#17a2b8]" />
                      Master Investment Decision Report (MIDR)
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">Consolidated property analysis with ARV, Rehab, and Max Bid calculations</p>
                  </div>
                  <div className="flex gap-3">
                    <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                      <SelectTrigger className="w-36 border-2 hover:border-[#17a2b8] transition-colors">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csv">📊 CSV</SelectItem>
                        <SelectItem value="excel">📈 Excel</SelectItem>
                        <SelectItem value="pdf">📄 PDF</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button 
                      onClick={() => handleExport("MIDR Report", selectedFormat)}
                      className="bg-gradient-to-r from-[#0ea5b9] to-[#17a2b8] hover:from-[#17a2b8] hover:to-[#20b5c9] shadow-lg hover:shadow-xl transition-all"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export Report
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-8">
                <div className="rounded-xl border border-border overflow-hidden bg-card shadow-md">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-[#17a2b8] hover:bg-[#0ea5b9]">
                          <TableHead className="text-white font-bold">Case No</TableHead>
                          <TableHead className="text-white font-bold">Property Name</TableHead>
                          <TableHead className="text-white font-bold">Parcel ID</TableHead>
                          <TableHead className="text-white font-bold">Lien</TableHead>
                          <TableHead className="text-white font-bold">Min Bid</TableHead>
                          <TableHead className="text-white font-bold">Rough ARV</TableHead>
                          <TableHead className="text-white font-bold">Final ARV</TableHead>
                          <TableHead className="text-white font-bold">Rehab Type</TableHead>
                          <TableHead className="text-white font-bold">Rehab Cost</TableHead>
                          <TableHead className="text-white font-bold">Max Bid</TableHead>
                          <TableHead className="text-white font-bold">Bed/Bath</TableHead>
                          <TableHead className="text-white font-bold">Sq Ft</TableHead>
                          <TableHead className="text-white font-bold">ROI</TableHead>
                          <TableHead className="text-white font-bold">Profit</TableHead>
                          <TableHead className="text-white font-bold">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {midrData.map((property, index) => (
                          <TableRow key={property.id} className={index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}>
                            <TableCell className="font-bold text-[#17a2b8]">{property.caseNo}</TableCell>
                            <TableCell className="font-semibold">{property.propertyName}</TableCell>
                            <TableCell className="font-mono text-xs bg-muted rounded px-2 py-1">{property.parcelId}</TableCell>
                            <TableCell className="font-semibold">${property.lienAmount.toLocaleString()}</TableCell>
                            <TableCell className="font-semibold">${property.minBid.toLocaleString()}</TableCell>
                            <TableCell className="text-slate-700 font-semibold">${property.roughARV.toLocaleString()}</TableCell>
                            <TableCell className="text-slate-800 font-bold text-base">${property.finalARV.toLocaleString()}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="font-semibold">
                                {property.rehabType}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-semibold text-slate-700">${property.rehabEstimate.toLocaleString()}</TableCell>
                            <TableCell className="font-bold text-lg text-[#17a2b8]">${property.maxBid.toLocaleString()}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="font-semibold">{property.bed}/{property.bath}</Badge>
                            </TableCell>
                            <TableCell className="font-semibold">{property.sqFootage.toLocaleString()}</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center gap-1 text-slate-700 font-bold">
                                <TrendingUp className="w-4 h-4" />
                                {property.roi}
                              </span>
                            </TableCell>
                            <TableCell className="font-bold text-slate-700">${property.profitPotential.toLocaleString()}</TableCell>
                            <TableCell>
                              <Badge className={
                                property.status === "Active" ? "bg-slate-700 hover:bg-slate-800" : 
                                property.status === "Pending" ? "bg-slate-500 hover:bg-slate-600" : 
                                "bg-slate-600 hover:bg-slate-700"
                              }>
                                {property.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 border border-slate-200 shadow-md hover:shadow-lg transition-all group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-slate-200/30 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
                    <div className="relative">
                      <DollarSign className="w-8 h-8 text-[#17a2b8] mb-3" />
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Total Properties</p>
                      <p className="text-4xl font-bold text-foreground mt-2">{midrData.length}</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 border border-slate-200 shadow-md hover:shadow-lg transition-all group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-slate-200/30 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
                    <div className="relative">
                      <TrendingUp className="w-8 h-8 text-[#0ea5b9] mb-3" />
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Average ROI</p>
                      <p className="text-4xl font-bold text-foreground mt-2">
                        {Math.round(midrData.reduce((acc, p) => acc + parseInt(p.roi), 0) / midrData.length)}%
                      </p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 border border-slate-200 shadow-md hover:shadow-lg transition-all group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-slate-200/30 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
                    <div className="relative">
                      <DollarSign className="w-8 h-8 text-slate-700 mb-3" />
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Total Profit Potential</p>
                      <p className="text-4xl font-bold text-foreground mt-2">
                        ${(midrData.reduce((acc, p) => acc + p.profitPotential, 0) / 1000).toFixed(0)}K
                      </p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 border border-slate-200 shadow-md hover:shadow-lg transition-all group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-slate-200/30 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
                    <div className="relative">
                      <Home className="w-8 h-8 text-slate-600 mb-3" />
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Total Investment</p>
                      <p className="text-4xl font-bold text-foreground mt-2">
                        ${(midrData.reduce((acc, p) => acc + p.maxBid + p.rehabEstimate, 0) / 1000).toFixed(0)}K
                      </p>
                    </div>
                  </div>
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
