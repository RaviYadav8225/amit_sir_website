"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const fullStackData = {
  title: "Python Full Stack Development with Django & React",
  description: "Become a complete full-stack developer with Python, Django, React, and modern web technologies. Learn to build scalable web applications from database design to responsive front-end interfaces with industry best practices.",
  duration: "14-16 Weeks",
  level: "Intermediate to Advanced",
  prerequisites: [
    "Basic Python programming knowledge (PCEP level recommended)",
    "Understanding of HTML, CSS, and JavaScript basics",
    "Familiarity with databases and SQL concepts",
    "Experience with command-line interface"
  ],
  objectives: [
    "Master Django framework for backend development",
    "Build responsive front-end applications with React",
    "Design and implement RESTful APIs",
    "Work with databases using Django ORM",
    "Deploy applications to cloud platforms",
    "Implement authentication, security, and testing"
  ],
  modules: [
    {
      title: "Advanced Python and Backend Fundamentals",
      duration: "2.5 Weeks",
      topics: [
        "Advanced Python concepts and OOP",
        "Virtual environments and package management",
        "Working with databases and SQL",
        "HTTP protocols and web fundamentals",
        "MVC architecture patterns",
        "Version control with Git and GitHub"
      ]
    },
    {
      title: "Django Framework Mastery",
      duration: "3.5 Weeks",
      topics: [
        "Django project structure and settings",
        "Models, views, and templates (MVT pattern)",
        "Django ORM and database migrations",
        "URL routing and middleware",
        "Forms, validation, and user input handling",
        "Django admin interface customization",
        "User authentication and authorization"
      ]
    },
    {
      title: "REST API Development",
      duration: "2.5 Weeks",
      topics: [
        "RESTful API design principles",
        "Django REST Framework (DRF)",
        "Serializers and viewsets",
        "Authentication and permissions",
        "API testing with Postman",
        "Documentation with Swagger/OpenAPI",
        "Error handling and status codes"
      ]
    },
    {
      title: "Frontend Development with React",
      duration: "3 Weeks",
      topics: [
        "React fundamentals and JSX",
        "Components, props, and state management",
        "React hooks and lifecycle methods",
        "Routing with React Router",
        "State management with Redux/Context API",
        "API integration and HTTP requests",
        "Responsive design with Bootstrap/Material-UI"
      ]
    },
    {
      title: "Database Design and Advanced Topics",
      duration: "2 Weeks",
      topics: [
        "Database design and normalization",
        "PostgreSQL and advanced queries",
        "Database optimization and indexing",
        "Caching strategies with Redis",
        "Background tasks with Celery",
        "File uploads and media handling",
        "Third-party API integrations"
      ]
    },
    {
      title: "Testing, Security, and Deployment",
      duration: "2.5 Weeks",
      topics: [
        "Unit testing and integration testing",
        "Test-driven development (TDD)",
        "Security best practices and OWASP",
        "Environment configuration and secrets",
        "Docker containerization",
        "Cloud deployment (AWS/Heroku/DigitalOcean)",
        "CI/CD pipelines and DevOps basics",
        "Performance monitoring and optimization"
      ]
    }
  ],
  certification: "Python Full Stack Developer Certificate",
  price: "25,000",
  originalPrice: "45,000",
  features: [
    "Complete full-stack curriculum",
    "Real-world project portfolio (5+ projects)",
    "Industry-standard tools and frameworks",
    "Live coding sessions and code reviews",
    "Career guidance and interview preparation",
    "Job placement assistance",
    "Access to developer community",
    "Cloud deployment experience"
  ],
  instructor: "Senior Full Stack Developer (10+ years industry experience)",
  nextBatch: "25th November 2025",
  mode: ["Online", "Project-based Learning"]
};

export default function FullStackPage() {
  return <CourseDetailPage course={fullStackData} />;
}