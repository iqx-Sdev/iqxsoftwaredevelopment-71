
// Define the case study type
export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  industry: string;
  image: string;
  results: {
    label: string;
    value: string;
  }[];
}

// Case studies data
export const caseStudies: CaseStudy[] = [
  {
    id: "kia-south-africa",
    title: "Kia South Africa",
    subtitle: "Transforming Operations Through Seamless Platform Integration",
    summary: "We built an end-to-end integrated digital platform for Kia Retail, streamlining their operations and eliminating data silos through custom API integrations and cloud infrastructure.",
    industry: "Automotive",
    image: "/lovable-uploads/1f706812-3234-486e-923c-a848445c01da.png",
    results: [
      { label: "System Integration", value: "100%" },
      { label: "Lead Conversion", value: "+30%" },
      { label: "Time Savings", value: "15+ hrs/week" }
    ]
  },
  {
    id: "coricraft",
    title: "Coricraft",
    subtitle: "Powering Omni-Channel Retail with a Seamless Cloud-Based Platform",
    summary: "We partnered with Coricraft to build a unified cloud-based e-commerce solution that integrates their online and in-store systems for a seamless customer experience.",
    industry: "Retail",
    image: "/lovable-uploads/48b40d81-286e-4614-92a5-210d94539817.png",
    results: [
      { label: "Revenue Growth", value: "Double-digit" },
      { label: "Inventory Updates", value: "Real-time" },
      { label: "Stock Accuracy", value: "Improved" }
    ]
  },
  {
    id: "investec",
    title: "Investec",
    subtitle: "Scalable Resourcing and Delivery Support Across Business Units",
    summary: "We provided skilled teams across Software Development, Cloud, and Data to help Investec deliver complex projects reliably across multiple business units.",
    industry: "Financial Services",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    results: [
      { label: "Delivery", value: "Consistent" },
      { label: "Team Integration", value: "High-performing" },
      { label: "Execution Velocity", value: "Enhanced" }
    ]
  },
  {
    id: "jp-markets",
    title: "JP Markets",
    subtitle: "Designing a Forex Broker App Grounded in User-Centric Research",
    summary: "We led a comprehensive UI and UX discovery process to create a forex trading app that truly resonates with the target audience in this competitive market.",
    industry: "Finance & Trading",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80",
    results: [
      { label: "Discovery Framework", value: "Complete" },
      { label: "Design Approach", value: "User-centric" },
      { label: "App Foundation", value: "Strong" }
    ]
  },
  {
    id: "motor-happy",
    title: "MotorHappy",
    subtitle: "Redefining Vehicle Financial Services with a Customer-Centric Aggregator Platform",
    summary: "We designed and built a first-of-its-kind aggregator platform for MotorHappy, revolutionizing how customers discover, compare, and purchase vehicle service plans.",
    industry: "Automotive Finance",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=800&q=80",
    results: [
      { label: "Customer Fit", value: "Intelligent" },
      { label: "User Experience", value: "Leading-edge" },
      { label: "Customer Relations", value: "Strengthened" }
    ]
  },
  {
    id: "pepkor-more",
    title: "Pepkor +More",
    subtitle: "Reinventing Customer Loyalty for the Modern Consumer",
    summary: "We developed a unified, cloud-based loyalty platform for Pepkor's retail brands, delivering personalized rewards and a mobile-first experience to drive customer engagement.",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80",
    results: [
      { label: "Loyalty Experience", value: "Modern" },
      { label: "Customer Insights", value: "Data-driven" },
      { label: "Brand Loyalty", value: "Strengthened" }
    ]
  },
  {
    id: "next-calm",
    title: "NextCalm",
    subtitle: "Bringing Clarity and Control to Estate Management",
    summary: "We created a centralized, secure document storage platform that simplifies estate management, allowing individuals to store, organize, and share critical documents with designated representatives.",
    industry: "Estate Management",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    results: [
      { label: "Document Security", value: "Bank-grade" },
      { label: "User Experience", value: "Simplified" },
      { label: "Transition Time", value: "Reduced" }
    ]
  },
  {
    id: "swaziland-building-society",
    title: "Swaziland Building Society",
    subtitle: "Accelerating Digital Banking Innovation with Expert Technical Support",
    summary: "We provided specialized technical expertise to enhance SBS's digital banking capabilities across multiple platforms, ensuring seamless integration with existing systems.",
    industry: "Banking",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    results: [
      { label: "Time-to-Market", value: "Accelerated" },
      { label: "Development Capacity", value: "Enhanced" },
      { label: "Digital Channels", value: "Expanded" }
    ]
  }
];
