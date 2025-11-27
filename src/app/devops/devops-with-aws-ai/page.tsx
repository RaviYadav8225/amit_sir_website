"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

export default function DevOpsWithAWSAI() {
  const courseData = {
    title: "DevOps with AWS and AI",
    code: "DEVOPS-AWS-AI-004",
    duration: "5 Months",
    level: "Advanced",
    description: "Master the fusion of DevOps, AWS Cloud, and Artificial Intelligence. Learn to build, deploy, and manage AI/ML applications using AWS DevOps services, SageMaker, and MLOps best practices. The future of DevOps is AI-powered!",
    features: [
      "Complete DevOps on AWS with AI/ML integration",
      "AWS SageMaker for ML model deployment",
      "MLOps - Machine Learning Operations",
      "AI-powered DevOps automation",
      "CI/CD pipelines for ML models",
      "AWS AI services - Rekognition, Comprehend, Translate, etc.",
      "Infrastructure as Code for ML workflows",
      "Model monitoring and drift detection",
      "Serverless AI with Lambda and SageMaker",
      "LLM deployment and fine-tuning on AWS",
      "Real-world AI/ML DevOps projects",
      "Job placement in AI/ML engineering roles"
    ],
    objectives: [
      "Master AWS DevOps services and AI/ML integration",
      "Build MLOps pipelines with SageMaker",
      "Deploy and manage ML models on AWS",
      "Implement CI/CD for AI/ML applications",
      "Use AWS AI services in production",
      "Monitor and optimize ML model performance",
      "Deploy LLMs and implement RAG architecture",
      "Apply AI-powered DevOps automation"
    ],
    modules: [
      {
        title: "Module 1: DevOps, AWS & AI Fundamentals",
        duration: "1 Week",
        topics: [
          "DevOps for AI/ML Workflows",
          "AWS AI/ML Services Overview",
          "MLOps Lifecycle and Principles"
        ]
      },
      {
        title: "Module 2: AWS DevOps Services",
        duration: "1 Week",
        topics: [
          "CodePipeline, CodeBuild, CodeDeploy",
          "Infrastructure as Code with CloudFormation/Terraform",
          "Container Services - ECS, EKS"
        ]
      },
      {
        title: "Module 3: Machine Learning Fundamentals",
        duration: "1 Week",
        topics: [
          "ML Basics and Python Libraries",
          "Data Preprocessing and Feature Engineering",
          "Model Training and Evaluation"
        ]
      },
      {
        title: "Module 4: AWS SageMaker",
        duration: "1.5 Weeks",
        topics: [
          "SageMaker Studio and Notebooks",
          "Model Training and Hyperparameter Tuning",
          "Model Deployment and Endpoints"
        ]
      },
      {
        title: "Module 5: MLOps - ML Pipeline Automation",
        duration: "1 Week",
        topics: [
          "SageMaker Pipelines and Automation",
          "Model Versioning and CI/CD for ML",
          "A/B Testing and Model Monitoring"
        ]
      },
      {
        title: "Module 6: AWS AI Services",
        duration: "1 Week",
        topics: [
          "Rekognition, Comprehend, Translate",
          "Lex, Polly, Transcribe",
          "Personalize and AI Integration"
        ]
      },
      {
        title: "Module 7: Deep Learning & LLMs",
        duration: "1.5 Weeks",
        topics: [
          "TensorFlow and PyTorch on AWS",
          "Amazon Bedrock and LLM Fine-tuning",
          "RAG Architecture and Vector Databases"
        ]
      },
      {
        title: "Module 8: Data Engineering for ML",
        duration: "1 Week",
        topics: [
          "AWS Data Services - S3, Glue, Athena",
          "ETL Pipelines and Feature Store",
          "Real-time Processing with Kinesis"
        ]
      },
      {
        title: "Module 9: AI-Powered DevOps",
        duration: "1 Week",
        topics: [
          "Anomaly Detection and Predictive Analytics",
          "AI-driven Auto Scaling",
          "Intelligent Monitoring and Alerting"
        ]
      },
      {
        title: "Module 10: Security & Advanced MLOps",
        duration: "1 Week",
        topics: [
          "ML Security and Data Privacy",
          "Multi-model Endpoints and AutoML",
          "Cost Optimization for ML Workloads"
        ]
      },
      {
        title: "Module 11: Real-World AI/ML Projects",
        duration: "1.5 Weeks",
        topics: [
          "End-to-End ML Pipeline Implementation",
          "NLP Application with LLM",
          "Production ML System - Capstone Project"
        ]
      },
      {
        title: "Module 12: Certification Preparation",
        duration: "3 Days",
        topics: [
          "AWS Machine Learning Specialty Exam",
          "MLOps Interview Preparation",
          "Building AI/ML Portfolio"
        ]
      }
    ],
    prerequisites: [
      "Strong understanding of DevOps concepts and practices",
      "AWS Cloud fundamentals or AWS Solutions Architect Associate",
      "Python programming proficiency",
      "Basic understanding of Machine Learning concepts",
      "Linux command line experience",
      "Networking and security fundamentals"
    ],
    audience: [
      "DevOps Engineers transitioning to ML/AI roles",
      "Data Scientists wanting to learn MLOps",
      "Cloud Engineers specializing in AI/ML",
      "Software Engineers building AI-powered applications",
      "ML Engineers looking to master AWS",
      "IT professionals interested in AI/ML automation"
    ],
    careerPaths: [
      "MLOps Engineer",
      "AI/ML DevOps Specialist",
      "Machine Learning Engineer - AWS",
      "AWS AI/ML Solutions Architect",
      "Data Engineering and MLOps Lead",
      "AI Platform Engineer"
    ],
    certification: "AWS Certified Machine Learning Specialty + DevOps Professional",
    price: "60,000",
    originalPrice: "85,000",
    instructor: "AWS ML Specialist & DevOps Professional with AI/ML expertise",
    nextBatch: "Starting Soon",
    mode: ["Online", "Live Classes", "AWS ML Labs"]
  };

  return <CourseDetailPage course={courseData} />;
}
