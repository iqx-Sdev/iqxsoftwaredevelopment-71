
import React, { useState } from "react";

interface LocationData {
  name: string;
  address: string[];
  coordinates: string;
  phone: string;
  email: string;
  hours: string;
  mapLink: string;
}

interface LocationsData {
  [key: string]: LocationData;
}

interface LocationTabsProps {
  locations: LocationsData;
  activeLocation: string;
  setActiveLocation: (location: string) => void;
}

const LocationTabs = ({ 
  locations, 
  activeLocation, 
  setActiveLocation 
}: LocationTabsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {Object.entries(locations).map(([key, location]) => (
        <button
          key={key}
          className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-colors ${
            activeLocation === key 
              ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
          }`}
          onClick={() => setActiveLocation(key)}
        >
          {location.name}
        </button>
      ))}
    </div>
  );
};

export default LocationTabs;
