
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const insights = [
  {
    title: "The Future of Work in South Africa",
    excerpt: "How organizations can adapt to changing workplace dynamics post-pandemic.",
    date: "March 28, 2025",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&h=400&q=80",
    link: "#"
  },
  {
    title: "Digital Transformation Roadmap",
    excerpt: "Key considerations for businesses embarking on digital transformation journeys.",
    date: "March 22, 2025",
    image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?auto=format&fit=crop&w=600&h=400&q=80",
    link: "#"
  },
  {
    title: "Sustainable Business Practices",
    excerpt: "How integrating ESG principles can drive long-term business success.",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1491156855053-9cdff72c79f0?auto=format&fit=crop&w=600&h=400&q=80",
    link: "#"
  }
];

const InsightsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <div className="mb-4 inline-block bg-green-100 px-3 py-1 rounded-full">
                <span className="text-green-700 font-medium">Insights</span>
              </div>
              <h2 className="text-3xl font-bold text-newtheme-purple">Latest Thinking</h2>
            </div>
            <Button variant="link" className="text-newtheme-purple flex items-center">
              View All Insights <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img 
                    src={insight.image} 
                    alt={insight.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-newtheme-purple">
                    {insight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{insight.excerpt}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{insight.date}</span>
                  <a href={insight.link} className="text-pink-500 hover:text-pink-600 flex items-center">
                    Read More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
