
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Developer {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  experience: string;
  location: string;
  avatar?: string;
}

const developers: Developer[] = [
  {
    name: "Shaun",
    title: "Snr Javascript Solutions Architect",
    bio: "Besides Shaun's love for the web and all things mobile, he is also a deeply passionate technologist who takes pride in his ability to solve today's most complex technical challenges. He owned weblog.co.za before Blogger sold to Google, presented Box Office to the Multichoice Exco in 2007, pushed Derivco to embrace mobile before the launch of the iPhone and coined the term \"SEO Hijack\" with the advent of MHub, a one-click mobile site builder.",
    skills: ["ReactJS", "AngularJS", "Typescript", "Ionic", "NodeJS", "Firebase", "NestJs", "MongoDB", "Google Cloud", "Azure", "Alogia", "Cordova", "Phone gap", "Framework 7", "Jest"],
    experience: "20+ yrs experience",
    location: "South Africa"
  },
  {
    name: "Maria",
    title: "Full Stack Developer",
    bio: "Maria has been leading teams in developing enterprise-grade applications for global clients across multiple industries. With expertise in cloud architecture and microservices, she specializes in building scalable, high-performance applications that solve complex business problems.",
    skills: ["React", "Node.js", "AWS", "GraphQL", "Docker", "Kubernetes", "TypeScript", "PostgreSQL", "Redis", "Jest"],
    experience: "12+ yrs experience",
    location: "Canada"
  },
  {
    name: "Alex",
    title: "DevOps & Cloud Specialist",
    bio: "Alex is an expert in infrastructure automation, CI/CD pipelines, and cloud-native technologies. His experience spans from startups to Fortune 500 companies, building resilient systems that can handle massive scale while maintaining security and compliance requirements.",
    skills: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "Jenkins", "GitHub Actions", "Python", "Go"],
    experience: "15+ yrs experience",
    location: "United Kingdom"
  },
  {
    name: "Priya",
    title: "AI & Machine Learning Engineer",
    bio: "Priya combines strong software engineering skills with data science expertise. She has implemented machine learning solutions across various domains including recommendation systems, natural language processing, and computer vision. Her focus is on building production-ready AI systems.",
    skills: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "Computer Vision", "MLOps", "SQL", "AWS SageMaker", "Kafka"],
    experience: "8+ yrs experience",
    location: "Singapore"
  }
];

const DeveloperProfilesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
          Our Expert Development Team
        </h2>
        <p className="text-xl font-semibold text-center mb-12 text-gray-700">
          Meet some of our 300+ talented professionals ready to build your next project
        </p>
        
        <div className="max-w-7xl mx-auto px-4">
          <Carousel
            opts={{
              align: "center",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {developers.map((developer, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-white">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-12 w-12 mr-4">
                          {developer.avatar ? (
                            <AvatarImage src={developer.avatar} alt={developer.name} />
                          ) : (
                            <AvatarFallback className="bg-purple-200 text-purple-700">
                              {developer.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{developer.name}</h3>
                          <p className="text-purple-600">{developer.title}</p>
                        </div>
                      </div>
                      
                      <p className="mb-4 text-gray-700 line-clamp-4 hover:line-clamp-none transition-all duration-200">
                        {developer.bio}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {developer.skills.slice(0, 8).map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                              {skill}
                            </Badge>
                          ))}
                          {developer.skills.length > 8 && (
                            <Badge variant="outline" className="border-purple-300 text-purple-600">
                              +{developer.skills.length - 8} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm text-gray-600">
                        <div>{developer.experience}</div>
                        <div>{developer.location}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0 bg-white shadow-md border-purple-200" />
              <CarouselNext className="right-0 bg-white shadow-md border-purple-200" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfilesSection;
