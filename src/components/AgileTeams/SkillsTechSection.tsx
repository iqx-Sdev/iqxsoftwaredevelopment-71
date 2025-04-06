
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SkillsTechSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
          What Skills and Tech Can You Hire Through IQX?
        </h2>
        <p className="text-xl font-semibold text-center mb-12 text-gray-700">
          Your Agile Team. Your Stack. Your Terms.
        </p>
        
        <Accordion type="single" collapsible className="max-w-4xl mx-auto">
          <AccordionItem value="frontend">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🖥️</span> Front-End
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              React, Angular, Vue.js, Next.js, Tailwind CSS, HTML5, SASS, Web Components, Flutter Web
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="backend">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🧠</span> Back-End
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Node.js, .NET, Java, Python, PHP, Ruby on Rails, Go, Express.js, NestJS
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="databases">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🗄️</span> Databases
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              PostgreSQL, MySQL, MongoDB, Redis, Firebase, DynamoDB, MSSQL, ElasticSearch
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="cloud">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <span className="text-2xl mr-3">☁️</span> Cloud & DevOps
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              AWS, Azure, Google Cloud, Terraform, Kubernetes, Docker, Jenkins, GitHub Actions, Bitbucket Pipelines, Vercel
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="security">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🔐</span> Security
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              OAuth2, JWT, SSO, OWASP Best Practices, Pen Testing, Secrets Management (Vault, AWS Secrets Manager)
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="api">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🔗</span> API & Integrations
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              GraphQL, REST, Webhooks, Stripe, Twilio, SendGrid, Shopify, Salesforce, Zapier, ERP Systems
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="data">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📊</span> Data & Analytics
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Power BI, Tableau, Superset, BigQuery, Snowflake, ETL pipelines, Python (Pandas, NumPy), R, Apache Kafka
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="cicd">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🚀</span> CI/CD & Automation
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              CI/CD pipelines, Test automation (Selenium, Cypress, Playwright), Infrastructure as Code, Release orchestration
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SkillsTechSection;
