
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.tsx';
import './index.css';

// Error fallback for the entire application
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50 px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Application Error</h1>
        <p className="text-gray-700 mb-4">{error.message}</p>
        <button 
          onClick={resetErrorBoundary} 
          className="bg-newtheme-purple text-white px-4 py-2 rounded-md hover:bg-newtheme-purple/90"
        >
          Reload Application
        </button>
      </div>
    </div>
  );
};

// Use a more efficient rendering approach with concurrent mode
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

// Log any errors that occur during rendering
const logError = (error: Error, info: { componentStack: string }) => {
  console.error("Caught an error:", error, info);
};

root.render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
