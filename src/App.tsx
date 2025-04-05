
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from 'react';
import NotFound from "./pages/NotFound";

// Lazy load route components with error boundaries
const Index = lazy(() => import('./pages/Index'));
const Shopify = lazy(() => import('./pages/Shopify'));
const PowerApps = lazy(() => import('./pages/PowerApps'));
const AgenticAI = lazy(() => import('./pages/AgenticAI'));
const AgileTeams = lazy(() => import('./pages/AgileTeams'));
const WebApps = lazy(() => import('./pages/WebApps'));
const AIChat = lazy(() => import('./pages/AIChat'));
const Contact = lazy(() => import('./pages/Contact'));

// Create ScrollToTop component to ensure page scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

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

const App = () => {
  // Add error handling for the entire app
  const [error, setError] = useState<Error | null>(null);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-red-50 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
          <p className="text-gray-700 mb-4">{error.message}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-newtheme-purple text-white px-4 py-2 rounded-md hover:bg-newtheme-purple/90"
          >
            Reload Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
