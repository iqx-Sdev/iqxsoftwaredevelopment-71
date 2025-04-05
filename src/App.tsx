
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import NotFound from "./pages/NotFound";

// Create a loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-16 h-16 border-4 border-newtheme-purple rounded-full border-t-transparent animate-spin"></div>
  </div>
);

// Lazy load route components
const Index = lazy(() => import('./pages/Index'));
const Shopify = lazy(() => import('./pages/Shopify'));
const PowerApps = lazy(() => import('./pages/PowerApps'));
const AgenticAI = lazy(() => import('./pages/AgenticAI'));
const AgileTeams = lazy(() => import('./pages/AgileTeams'));
const WebApps = lazy(() => import('./pages/WebApps'));
const AIChat = lazy(() => import('./pages/AIChat'));
const Contact = lazy(() => import('./pages/Contact'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (renamed from cacheTime)
      refetchOnWindowFocus: false,
      retry: 1
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shopify" element={<Shopify />} />
            <Route path="/power-apps" element={<PowerApps />} />
            <Route path="/agentic-ai" element={<AgenticAI />} />
            <Route path="/agile-teams" element={<AgileTeams />} />
            <Route path="/web-apps" element={<WebApps />} />
            <Route path="/ai-chat" element={<AIChat />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
