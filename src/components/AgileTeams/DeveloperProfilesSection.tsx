
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
    location: "South Africa" // Updated location
  },
  {
    name: "Alex",
    title: "DevOps & Cloud Specialist",
    bio: "Alex is an expert in infrastructure automation, CI/CD pipelines, and cloud-native technologies. His experience spans from startups to Fortune 500 companies, building resilient systems that can handle massive scale while maintaining security and compliance requirements.",
    skills: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "Jenkins", "GitHub Actions", "Python", "Go"],
    experience: "15+ yrs experience",
    location: "South Africa" // Updated location
  },
  {
    name: "Priya",
    title: "AI & Machine Learning Engineer",
    bio: "Priya combines strong software engineering skills with data science expertise. She has implemented machine learning solutions across various domains including recommendation systems, natural language processing, and computer vision. Her focus is on building production-ready AI systems.",
    skills: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "Computer Vision", "MLOps", "SQL", "AWS SageMaker", "Kafka"],
    experience: "8+ yrs experience",
    location: "South Africa" // Updated location
  },
  // Adding 10 more developers with a mix of skills
  {
    name: "Thabo",
    title: "Flutter Developer",
    bio: "Thabo specializes in creating beautiful, responsive mobile applications with Flutter. He has shipped multiple apps to both the App Store and Google Play, and is passionate about creating seamless cross-platform experiences with a single codebase.",
    skills: ["Flutter", "Dart", "Firebase", "RESTful APIs", "GraphQL", "BLoC Pattern", "Provider", "GetX", "CI/CD", "App Store Optimization"],
    experience: "6+ yrs experience",
    location: "South Africa"
  },
  {
    name: "Lerato",
    title: "React Native Specialist",
    bio: "Lerato has extensive experience in mobile app development, specializing in React Native. She has helped numerous startups launch their products and has built apps used by millions of users across Africa.",
    skills: ["React Native", "JavaScript", "TypeScript", "Redux", "MobX", "Jest", "Detox", "Firebase", "OAuth", "Push Notifications"],
    experience: "7+ yrs experience",
    location: "South Africa"
  },
  {
    name: "Johan",
    title: "Java Enterprise Architect",
    bio: "Johan has architected large-scale enterprise systems for banking, insurance, and telecom clients. He specializes in high-throughput, low-latency applications that can handle millions of transactions daily.",
    skills: ["Java", "Spring Boot", "Hibernate", "Microservices", "JUnit", "Maven", "Gradle", "Oracle", "Kafka", "Docker"],
    experience: "14+ yrs experience",
    location: "South Africa"
  },
  {
    name: "Nomsa",
    title: ".NET Team Lead",
    bio: "Nomsa leads development teams using Microsoft technologies to build robust enterprise applications. She has particular expertise in financial services applications and secure transaction processing.",
    skills: [".NET Core", "C#", "ASP.NET", "SQL Server", "Entity Framework", "Azure DevOps", "Blazor", "CQRS", "Microservices", "Identity Server"],
    experience: "11+ yrs experience",
    location: "South Africa"
  },
  {
    name: "Daniel",
    title: "Azure Cloud Solutions Architect",
    bio: "Daniel helps businesses migrate legacy systems to the cloud and architect cloud-native solutions. He has expertise in cost optimization, security compliance, and implementing best practices for Azure deployments.",
    skills: ["Azure", "Cloud Architecture", "IaaS", "PaaS", "Azure Functions", "Cosmos DB", "Application Insights", "Terraform", "PowerShell", "ARM Templates"],
    experience: "10+ yrs experience",
    location: "South Africa"
  },
  {
    name: "Zintle",
    title: "UX/UI Designer",
    bio: "Zintle creates beautiful, intuitive user experiences that balance business goals with user needs. She has expertise in design thinking methodologies and has helped transform digital products for major South African brands.",
    skills: ["Figma", "Adobe XD", "Sketch", "User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility", "User Testing", "Information Architecture"],
    experience: "9+ yrs experience",
    location: "South Africa"
  },
  {
    name: "Trevor",
    title: "AI Research Engineer",
    bio: "Trevor specializes in developing cutting-edge AI solutions across various domains. His research background in machine learning has helped clients implement innovative solutions for complex business problems.",
    skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "Reinforcement Learning", "MLOps"],
    experience: "8+ yrs experience",
    location: "South Africa"
  },
  {
    name: "Ayanda",
    title: "LLM Specialist",
    bio: "Ayanda is at the forefront of implementing large language models for business applications. She specializes in fine-tuning models, developing prompt engineering frameworks, and creating novel applications of generative AI.",
    skills: ["Large Language Models", "GPT", "Prompt Engineering", "Fine-tuning", "Vector Databases", "Semantic Search", "RAG", "LangChain", "Embeddings", "OpenAI API"],
    experience: "5+ yrs experience",
    location: "South Africa"
  },
  {
    name: "Kagiso",
    title: "Data Engineering Lead",
    bio: "Kagiso specializes in building robust data pipelines and data platforms that turn raw information into valuable business insights. His expertise spans both batch and real-time data processing at scale.",
    skills: ["Apache Spark", "Kafka", "Airflow", "dbt", "Snowflake", "BigQuery", "Data Modeling", "ETL/ELT", "SQL", "Python"],
    experience: "10+ yrs experience",
    location: "South Africa"
  },
  {
    name: "Thandiwe",
    title: "AWS Solutions Architect",
    bio: "Thandiwe designs scalable, fault-tolerant systems on AWS. She has helped numerous organizations optimize their cloud infrastructure for performance, cost, and security while meeting compliance requirements.",
    skills: ["AWS", "CloudFormation", "Lambda", "ECS", "DynamoDB", "S3", "API Gateway", "IAM", "CloudWatch", "RDS"],
    experience: "9+ yrs experience",
    location: "South Africa"
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
