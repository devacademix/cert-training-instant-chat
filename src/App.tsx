import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AllCourses from "./pages/AllCourses";
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
import ECCouncil from "./pages/ECCouncil";
import ITIL from "./pages/ITIL";
import Prince2 from "./pages/Prince2";
import Juniper from "./pages/Juniper";
import Salesforce from "./pages/Salesforce";
import ServiceNow from "./pages/ServiceNow";
import Scrum from "./pages/Scrum";
import SixSigma from "./pages/SixSigma";
import IBM from "./pages/IBM";
import SAP from "./pages/SAP";
import Splunk from "./pages/Splunk";
import PaloAlto from "./pages/PaloAlto";
import Kubernetes from "./pages/Kubernetes";
import TOGAF from "./pages/TOGAF";
import DevOps from "./pages/DevOps";
import ISTQB from "./pages/ISTQB";
import IIBA from "./pages/IIBA";
import CEH from "./pages/subcourses/CEH";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/all-courses" element={<AllCourses />} />
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
          <Route path="/ec-council" element={<ECCouncil />} />
          <Route path="/itil" element={<ITIL />} />
          <Route path="/prince2" element={<Prince2 />} />
          <Route path="/juniper" element={<Juniper />} />
          <Route path="/salesforce" element={<Salesforce />} />
          <Route path="/servicenow" element={<ServiceNow />} />
          <Route path="/scrum" element={<Scrum />} />
          <Route path="/six-sigma" element={<SixSigma />} />
          <Route path="/ibm" element={<IBM />} />
          <Route path="/sap" element={<SAP />} />
          <Route path="/splunk" element={<Splunk />} />
          <Route path="/palo-alto" element={<PaloAlto />} />
          <Route path="/kubernetes" element={<Kubernetes />} />
          <Route path="/togaf" element={<TOGAF />} />
          <Route path="/devops" element={<DevOps />} />
          <Route path="/istqb" element={<ISTQB />} />
          <Route path="/iiba" element={<IIBA />} />
          <Route path="/ec-council/ceh-certified-ethical-hacker" element={<CEH />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
