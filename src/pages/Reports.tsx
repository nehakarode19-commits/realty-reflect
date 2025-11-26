import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, TrendingUp, DollarSign, Home, Calendar } from "lucide-react";
import { toast } from "sonner";

const reports = [
  {
    id: 1,
    title: "Monthly Investment Summary",
    description: "Overview of all properties and financial metrics for the current month",
    icon: Calendar,
    color: "bg-primary",
  },
  {
    id: 2,
    title: "Property Performance Report",
    description: "Detailed analysis of individual property performance and ROI",
    icon: TrendingUp,
    color: "bg-success",
  },
  {
    id: 3,
    title: "Financial Analysis Report",
    description: "Comprehensive financial breakdown including costs, revenue, and profits",
    icon: DollarSign,
    color: "bg-info",
  },
  {
    id: 4,
    title: "Portfolio Overview",
    description: "Complete portfolio summary with asset allocation and diversification",
    icon: Home,
    color: "bg-secondary",
  },
];

const Reports = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground mt-1">Generate and download investment reports</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report) => {
            const Icon = report.icon;
            return (
              <Card key={report.id} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`${report.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{report.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-2">
                        {report.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-primary to-secondary"
                      onClick={() => toast.success(`Generating ${report.title}...`)}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => toast.success(`Downloading ${report.title}...`)}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Reports */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "October 2024 Summary.pdf", date: "2024-10-29", size: "2.4 MB" },
                { name: "Q3 Performance Report.pdf", date: "2024-09-30", size: "3.1 MB" },
                { name: "Property Analysis September.pdf", date: "2024-09-15", size: "1.8 MB" },
              ].map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {file.date} • {file.size}
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => toast.success(`Downloading ${file.name}...`)}
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Reports;
