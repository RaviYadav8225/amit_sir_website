import CourseDetailPage from '../../components/CourseDetailPage';

const digitalMarketingData = {
  course: {
    title: "Digital Marketing Comprehensive Course",
    description: "Master the complete digital marketing ecosystem with hands-on training in SEO, SEM, Social Media Marketing, Content Marketing, Email Marketing, and Analytics. Learn to create data-driven marketing strategies for businesses of all sizes.",
    duration: "8 Weeks",
    level: "Beginner to Advanced",
    
    prerequisites: [
      "Basic computer and internet knowledge",
      "Understanding of social media platforms",
      "Basic knowledge of websites and mobile apps",
      "No prior marketing experience required"
    ],

    objectives: [
      "Master all major digital marketing channels and tools",
      "Create comprehensive digital marketing strategies",
      "Understand customer journey and conversion optimization", 
      "Learn Google Ads, Facebook Ads, and other paid advertising",
      "Implement SEO and content marketing best practices",
      "Analyze and optimize marketing campaigns using analytics"
    ],

    modules: [
      {
        title: "Digital Marketing Fundamentals",
        duration: "1 Week",
        topics: [
          "Introduction to Digital Marketing landscape",
          "Digital vs Traditional Marketing comparison",
          "Understanding customer personas and journey",
          "Digital marketing channels overview",
          "Setting up Google Analytics and tracking",
          "Marketing funnel concepts and optimization"
        ]
      },
      {
        title: "Search Engine Optimization (SEO)",
        duration: "1.5 Weeks", 
        topics: [
          "On-page SEO techniques and best practices",
          "Technical SEO and website optimization",
          "Keyword research and competitive analysis",
          "Link building strategies and outreach",
          "Local SEO for businesses",
          "SEO tools: SEMrush, Ahrefs, Google Search Console"
        ]
      },
      {
        title: "Search Engine Marketing (SEM) & PPC",
        duration: "1.5 Weeks",
        topics: [
          "Google Ads campaign creation and management",
          "Keyword bidding strategies and optimization",
          "Ad copywriting and landing page optimization",
          "Display advertising and remarketing",
          "Shopping ads for e-commerce",
          "Bing Ads and alternative PPC platforms"
        ]
      },
      {
        title: "Social Media Marketing",
        duration: "2 Weeks",
        topics: [
          "Facebook and Instagram marketing strategies",
          "LinkedIn marketing for B2B businesses",
          "Twitter, YouTube, and emerging platforms",
          "Social media content creation and scheduling",
          "Influencer marketing and partnerships",
          "Social media advertising and targeting"
        ]
      },
      {
        title: "Content & Email Marketing",
        duration: "1 Week",
        topics: [
          "Content marketing strategy and planning",
          "Blog writing and content optimization",
          "Video marketing and YouTube optimization",
          "Email marketing automation and sequences",
          "Newsletter creation and list building",
          "Content distribution and promotion strategies"
        ]
      },
      {
        title: "Analytics & Campaign Management",
        duration: "1 Week",
        topics: [
          "Google Analytics 4 setup and analysis",
          "Conversion tracking and goal setting",
          "ROI measurement and reporting",
          "A/B testing and optimization",
          "Marketing automation tools",
          "Creating comprehensive marketing reports"
        ]
      }
    ],

    certification: "Google Digital Marketing Certificate + HubSpot Content Marketing Certification",
    price: "₹15,000",
    originalPrice: "₹25,000",
    
    features: [
      "Live projects with real businesses",
      "Google Ads and Facebook Ads credits included",
      "Access to premium marketing tools",
      "Industry-standard certifications preparation",
      "100% job placement assistance",
      "Internship opportunities with partner agencies"
    ],

    instructor: "Amit Singh - Digital Marketing Expert (10+ years experience)",
    nextBatch: "Starting Every Monday",
    mode: ["Online Live", "Offline Classroom", "Self-Paced"]
  }
};

export default function DigitalMarketingPage() {
  return <CourseDetailPage {...digitalMarketingData} />;
}