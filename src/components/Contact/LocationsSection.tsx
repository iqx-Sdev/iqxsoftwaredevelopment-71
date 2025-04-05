
import React from "react";
import LocationTabs from "./LocationTabs";
import ContactInfo from "./ContactInfo";
import MapDisplay from "./MapDisplay";

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

interface LocationsSectionProps {
  locations: LocationsData;
}

const LocationsSection = ({ locations }: LocationsSectionProps) => {
  const [activeLocation, setActiveLocation] = React.useState("johannesburg");
  const activeLocationData = locations[activeLocation];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-newtheme-purple">Our Offices</h2>
          
          <LocationTabs 
            locations={locations}
            activeLocation={activeLocation}
            setActiveLocation={setActiveLocation}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <MapDisplay 
              coordinates={activeLocationData.coordinates}
              locationName={activeLocationData.name}
            />
            <ContactInfo location={activeLocationData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
