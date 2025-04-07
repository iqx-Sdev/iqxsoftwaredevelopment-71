
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CaseStudyNotFound: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies">
            <Button variant="outline">Return to Case Studies</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudyNotFound;
