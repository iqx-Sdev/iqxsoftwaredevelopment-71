
import React, { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
  styles?: React.CSSProperties;
}

const CalendlyEmbed = ({ url, styles }: CalendlyEmbedProps) => {
  useEffect(() => {
    // Load the Calendly script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={url}
      style={{ minWidth: '320px', height: '700px', ...styles }}
    />
  );
};

export default CalendlyEmbed;
