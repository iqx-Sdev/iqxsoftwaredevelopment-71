
import React from "react";

const VideoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-newtheme-purple mb-4">See How We Work</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Watch our video to learn more about our development process and how we can help transform your business.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/hr-fDS6SY-A"
              title="IQX Software Development Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-newtheme-purple text-2xl font-bold">1</span>
              </div>
              <h3 className="font-medium text-lg mb-2">Understand</h3>
              <p className="text-gray-500">We take time to fully understand your business needs and goals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-newtheme-purple text-2xl font-bold">2</span>
              </div>
              <h3 className="font-medium text-lg mb-2">Design</h3>
              <p className="text-gray-500">Our team creates solutions tailored to your specific requirements</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-newtheme-purple text-2xl font-bold">3</span>
              </div>
              <h3 className="font-medium text-lg mb-2">Deliver</h3>
              <p className="text-gray-500">We implement and continuously improve to ensure your success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
