
import { ArrowRight, Users2, Briefcase, LineChart, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-br from-newtheme-purple to-newtheme-darkgray text-white font-aptos">
      {/* Wave pattern background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/lovable-uploads/17da4675-01fe-498e-a39e-74c35ddb035f.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-md text-sm font-medium">ELITE TEAMS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Scale Your Tech Team Without the Headaches
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"></span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl">
              IQX makes it easy to grow your development capacity. We lease top-tier tech talent to your business, while handling everything from onboarding and contracts to roadmaps and team management so you can stay focused on delivery.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Users2 className="h-5 w-5 text-blue-300" />
                <span className="text-sm">Full-Stack Teams</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Briefcase className="h-5 w-5 text-blue-300" />
                <span className="text-sm">Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                <LineChart className="h-5 w-5 text-blue-300" />
                <span className="text-sm">Rapid Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-blue-300" />
                <span className="text-sm">Quality Assurance</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-6 py-3 rounded-lg text-lg">
                Talk to Our Agile Team Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative animate-float">
            <div className="relative h-[450px] w-full">
              <div className="absolute inset-0 bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute -bottom-12 -right-12 h-64 w-64 bg-purple-400 rounded-full opacity-10"></div>
                <div className="absolute top-8 -left-8 h-32 w-32 bg-blue-400 rounded-full opacity-10"></div>
                
                <div className="relative p-8 h-full grid grid-cols-2 grid-rows-2 gap-4">
                  {/* Agile Team Visualization */}
                  <div className="bg-white/5 rounded-xl p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">Sprint Board</span>
                      <span className="text-xs bg-blue-500/20 px-2 py-1 rounded">Week 2</span>
                    </div>
                    <div className="flex-1 grid grid-cols-3 gap-2">
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="h-2 w-12 bg-white/30 rounded mb-2"></div>
                        <div className="h-2 w-8 bg-white/20 rounded"></div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="h-2 w-10 bg-white/30 rounded mb-2"></div>
                        <div className="h-2 w-14 bg-white/20 rounded"></div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="h-2 w-8 bg-white/30 rounded mb-2"></div>
                        <div className="h-2 w-12 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">DevOps</span>
                      <span className="text-xs bg-green-500/20 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-white/10 rounded">
                        <div className="h-full w-3/4 bg-gradient-to-r from-green-400 to-blue-400 rounded"></div>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded">
                        <div className="h-full w-1/2 bg-gradient-to-r from-green-400 to-blue-400 rounded"></div>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded">
                        <div className="h-full w-4/5 bg-gradient-to-r from-green-400 to-blue-400 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold">Team</span>
                      <span className="text-xs bg-purple-500/20 px-2 py-1 rounded">8 Members</span>
                    </div>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br from-purple-${i*100} to-blue-${i*100} flex items-center justify-center text-xs border border-white/20`}>
                          {i}
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs border border-white/20">
                        +3
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold">Metrics</span>
                      <span className="text-xs bg-blue-500/20 px-2 py-1 rounded">Q3</span>
                    </div>
                    <div className="h-24 flex items-end justify-around">
                      {[40, 65, 45, 80, 55].map((h, i) => (
                        <div key={i} className="w-4 bg-gradient-to-t from-blue-400 to-purple-400 rounded-t" style={{height: `${h}%`}}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
