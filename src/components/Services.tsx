
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faProjectDiagram, faRobot, faBolt } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    icon: <FontAwesomeIcon icon={faLightbulb} className="h-12 w-12 text-maverick-navy" />,
    title: "AI Automations",
    description: "Streamline repetitive tasks, improve efficiency, and reduce manual effort allowing teams to focus on what matters most.",
  },
  {
    icon: <FontAwesomeIcon icon={faProjectDiagram} className="h-12 w-12 text-maverick-navy" />,
    title: "AI Workflows",
    description: "Harness the power of artificial intelligence to enhance decision-making and deliver personalized experiences.",
  },
  {
    icon: <FontAwesomeIcon icon={faRobot} className="h-12 w-12 text-maverick-navy" />,
    title: "AI Agents",
    description: "Intelligent, autonomous systems that can reason, plan, and act independently to achieve specific objectives.",
  },
  {
    icon: <FontAwesomeIcon icon={faBolt} className="h-12 w-12 text-maverick-navy" />,
    title: "AI Prototyping",
    description: "Build and validate AI prototypes and proofs of concepts with lower upfront investment at double the speed.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-maverick-navy mb-4">Our AI Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We deliver cutting-edge AI solutions to transform your business operations
            and drive growth with our specialized services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="absolute h-1 w-full bg-gradient-to-r from-maverick-peach to-maverick-teal"></div>
              <CardHeader className="pt-8">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-maverick-navy group-hover:text-maverick-peach transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
