
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";

interface ContactInfoProps {
  location: {
    name: string;
    address: string[];
    phone: string;
    email: string;
    hours: string;
    mapLink: string;
  };
}

const ContactInfo = ({ location }: ContactInfoProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col h-full border border-gray-100">
      <h3 className="text-2xl font-bold text-newtheme-purple mb-6">{location.name} Office</h3>

      <div className="flex-grow space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-500">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
            <address className="not-italic text-gray-600">
              {location.address.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </address>
            <a 
              href={location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 text-sm font-medium mt-2 inline-block"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-green-100 p-3 rounded-full text-green-500">
            <FontAwesomeIcon icon={faPhone} size="lg" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
            <a href={`tel:${location.phone}`} className="text-gray-600 hover:text-pink-500">
              {location.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-violet-100 p-3 rounded-full text-violet-500">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
            <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-pink-500">
              {location.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full text-amber-500">
            <FontAwesomeIcon icon={faClock} size="lg" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
            <p className="text-gray-600">Monday - Friday: {location.hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
