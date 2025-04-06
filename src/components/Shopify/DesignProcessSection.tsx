
interface ProcessStep {
  title: string;
  description: string;
}

interface DesignProcessSectionProps {
  processSteps: ProcessStep[];
}

const DesignProcessSection = ({ processSteps }: DesignProcessSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-green-100 px-3 py-1 rounded-full">
              <span className="text-green-700 font-medium">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">Our Design Process</h2>
            <p className="text-gray-600 text-lg">From Concept to Conversion: Our 4-Step Approach</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                  <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-newtheme-purple mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
