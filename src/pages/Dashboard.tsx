import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "June", properties: 2 },
  { month: "July", properties: 4 },
  { month: "August", properties: 5 },
  { month: "September", properties: 6 },
];

const Dashboard = () => {
  const stats = [
    { title: "Total Properties", value: "03", icon: Home, color: "bg-primary" },
    { title: "Completed Properties", value: "01", icon: CheckCircle, color: "bg-success" },
    { title: "Pending Rehab (RE)", value: "01", icon: Clock, color: "bg-warning" },
    { title: "Pending Comp", value: "03", icon: AlertCircle, color: "bg-info" },
  ];

  const quickMetrics = [
    { label: "Properties with comparable", count: 2 },
    { label: "Rehab estimate not completed", count: 1 },
    { label: "Comp analysis pending", count: 3 },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Property Investment Overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-4xl font-bold mt-2 text-foreground">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Metrics */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Quick Metrics - As of 2025-10-29</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickMetrics.map((metric) => (
                <div key={metric.label} className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                  <p className="text-2xl font-bold text-primary">{metric.count}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chart */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Properties vs Months</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="properties" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
