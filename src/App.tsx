
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shopify from "./pages/Shopify";
import PowerApps from "./pages/PowerApps";
import AgenticAI from "./pages/AgenticAI";
import AgileTeams from "./pages/AgileTeams";
import WebApps from "./pages/WebApps";
import AIChat from "./pages/AIChat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shopify" element={<Shopify />} />
          <Route path="/power-apps" element={<PowerApps />} />
          <Route path="/agentic-ai" element={<AgenticAI />} />
          <Route path="/agile-teams" element={<AgileTeams />} />
          <Route path="/web-apps" element={<WebApps />} />
          <Route path="/ai-chat" element={<AIChat />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
