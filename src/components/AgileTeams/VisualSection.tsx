
import { Card, CardContent } from "@/components/ui/card";
import { Check, FileText, Users, Clock } from "lucide-react";

const VisualSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Getting Started Is Simple</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-newtheme-purple">
            <CardContent className="p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-newtheme-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Brief Us</h3>
              <p className="text-gray-600">
                Tell us what you need. We'll tap into our vetted talent pool and shortlist the best fits.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-newtheme-purple">
            <CardContent className="p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-newtheme-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Meet the Team</h3>
              <p className="text-gray-600">
                Interview your shortlisted candidates and choose the one that feels right.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-newtheme-purple">
            <CardContent className="p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-newtheme-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Get to Work</h3>
              <p className="text-gray-600">
                We handle the paperwork. Your new team member is up and running in no time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VisualSection;
