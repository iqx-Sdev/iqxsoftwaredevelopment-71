
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const SolutionSection = () => {
  const [isVisible, ref] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="rounded-xl shadow-lg overflow-hidden">
                {isVisible && (
                  <OptimizedImage
                    src="/lovable-uploads/6b99bd87-02b1-4279-9ad8-46ed20ba8d86.png"
                    alt="Healthcare WhatsApp Chatbot Interface" 
                    className="w-full h-auto"
                    placeholderClassName="aspect-[4/3]"
                  />
                )}
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="mb-4 inline-block bg-green-100 px-3 py-1 rounded-full">
                <span className="text-green-700 font-medium">Our Solution</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                Smart, scalable customer engagement. Built for WhatsApp.
              </h2>
              <p className="text-gray-600 mb-6">
                IQX transforms WhatsApp into a powerful, always-on channel for support, sales, and automation. Whether you're using AI chatbots, live agents, or both — you'll launch in minutes, not days, with our low-code platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
