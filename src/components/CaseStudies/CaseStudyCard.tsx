
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CaseStudy } from "./caseStudiesData";

interface CaseStudyCardProps {
  study: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  return (
    <Card className="flex flex-col md:flex-row overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="md:w-2/5 relative">
        <AspectRatio ratio={4/3} className="h-full">
          <OptimizedImage 
            src={study.image} 
            alt={study.title} 
            className="h-full w-full object-cover"
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col md:w-3/5">
        <CardHeader>
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full">
              {study.industry}
            </span>
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold text-newtheme-purple">
            {study.title}
          </CardTitle>
          <CardDescription className="text-lg font-medium text-gray-700 mt-1">
            {study.subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">
            {study.summary}
          </p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {study.results.map((result, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="font-bold text-xl text-newtheme-purple">{result.value}</p>
                <p className="text-sm text-gray-600">{result.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Link to={`/case-studies/${study.id}`}>
            <Button variant="gradient" className="gap-2">
              View Full Case Study
              <ArrowRight size={16} />
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default CaseStudyCard;
