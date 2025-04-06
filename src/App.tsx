
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import NotFound from "./pages/NotFound";

// Lazy load route components
const Index = lazy(() => import('./pages/Index'));
const Shopify = lazy(() => import('./pages/Shopify'));
const PowerApps = lazy(() => import('./pages/PowerApps'));
const AgenticAI = lazy(() => import('./pages/AgenticAI'));
const AgileTeams = lazy(() => import('./pages/AgileTeams'));
const WebApps = lazy(() => import('./pages/WebApps'));
const AIChat = lazy(() => import('./pages/AIChat'));
const Contact = lazy(() => import('./pages/Contact'));
const BookConsultation = lazy(() => import('./pages/BookConsultation'));

// Create ScrollToTop component to ensure page scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-newtheme-purple font-semibold">Loading...</div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50 px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
        <p className="text-gray-700 mb-4">{error.message}</p>
        <button 
          onClick={resetErrorBoundary} 
          className="bg-newtheme-purple text-white px-4 py-2 rounded-md hover:bg-newtheme-purple/90"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1
    },
  },
});

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shopify" element={<Shopify />} />
            <Route path="/power-apps" element={<PowerApps />} />
            <Route path="/agentic-ai" element={<AgenticAI />} />
            <Route path="/agile-teams" element={<AgileTeams />} />
            <Route path="/web-apps" element={<WebApps />} />
            <Route path="/ai-chat" element={<AIChat />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-consultation" element={<BookConsultation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

const App = () => {
  const [error, setError] = useState<Error | null>(null);

  const handleError = (error: Error) => {
    console.error("Application error:", error);
    setError(error);
  };

  const resetError = () => {
    setError(null);
  };

  if (error) {
    return <ErrorFallback error={error} resetErrorBoundary={resetError} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
