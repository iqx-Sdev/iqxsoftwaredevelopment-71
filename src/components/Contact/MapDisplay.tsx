
import React from "react";

interface MapDisplayProps {
  coordinates: string;
  locationName: string;
}

const MapDisplay = ({ coordinates, locationName }: MapDisplayProps) => {
  return (
    <div className="h-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
      <iframe 
        width="100%" 
        height="450" 
        frameBorder="0" 
        style={{ border: 0 }} 
        src={coordinates} 
        allowFullScreen
        title={`Map of ${locationName} office`}
        className="w-full h-full"
      />
    </div>
  );
};

export default MapDisplay;
