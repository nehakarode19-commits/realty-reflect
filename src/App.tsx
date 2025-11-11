import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import CreateProperty from "./pages/CreateProperty";
import Comparisons from "./pages/Comparisons";
import ComparisonCalculation from "./pages/ComparisonCalculation";
import RehabEstimator from "./pages/RehabEstimator";
import MaxBid from "./pages/MaxBid";
import Reports from "./pages/Reports";
import MyProperty from "./pages/MyProperty";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/create-property" element={<CreateProperty />} />
          <Route path="/comparisons" element={<Comparisons />} />
          <Route path="/comparison-calculation" element={<ComparisonCalculation />} />
          <Route path="/rehab-estimator" element={<RehabEstimator />} />
          <Route path="/max-bid" element={<MaxBid />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/my-property" element={<MyProperty />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
