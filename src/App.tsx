import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Cisco from "./pages/Cisco";
import Microsoft from "./pages/Microsoft";
import AWS from "./pages/AWS";
import CompTIA from "./pages/CompTIA";
import VMware from "./pages/VMware";
import Google from "./pages/Google";
import Oracle from "./pages/Oracle";
import PMI from "./pages/PMI";
import ISACA from "./pages/ISACA";
import Fortinet from "./pages/Fortinet";
import IIA from "./pages/IIA";
import Snowflake from "./pages/Snowflake";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cisco" element={<Cisco />} />
          <Route path="/microsoft" element={<Microsoft />} />
          <Route path="/aws" element={<AWS />} />
          <Route path="/comptia" element={<CompTIA />} />
          <Route path="/vmware" element={<VMware />} />
          <Route path="/google" element={<Google />} />
          <Route path="/oracle" element={<Oracle />} />
          <Route path="/pmi" element={<PMI />} />
          <Route path="/isaca" element={<ISACA />} />
          <Route path="/fortinet" element={<Fortinet />} />
          <Route path="/iia" element={<IIA />} />
          <Route path="/snowflake" element={<Snowflake />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
