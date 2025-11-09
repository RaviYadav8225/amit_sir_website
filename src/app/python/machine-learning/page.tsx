"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const machineLearningData = {
  title: "Machine Learning with Python – Advanced AI Development",
  description: "Master machine learning and artificial intelligence with Python. Learn deep learning, neural networks, natural language processing, and computer vision to build intelligent applications and AI solutions.",
  duration: "14-16 Weeks",
  level: "Advanced",
  prerequisites: [
    "Strong Python programming skills (PCAP level required)",
    "Data science fundamentals with NumPy and Pandas",
    "Statistics and linear algebra knowledge",
    "Experience with scikit-learn basics"
  ],
  objectives: [
    "Master advanced machine learning algorithms",
    "Build deep learning models with TensorFlow/PyTorch",
    "Implement natural language processing solutions",
    "Develop computer vision applications",
    "Deploy ML models to production environments",
    "Create intelligent AI-powered applications"
  ],
  modules: [
    {
      title: "Advanced Machine Learning Foundations",
      duration: "2.5 Weeks",
      topics: [
        "Mathematical foundations for ML (linear algebra, calculus)",
        "Advanced scikit-learn techniques",
        "Feature engineering and selection strategies",
        "Model evaluation metrics and validation techniques",
        "Bias-variance tradeoff and overfitting prevention",
        "Ensemble methods and model stacking"
      ]
    },
    {
      title: "Deep Learning with TensorFlow/Keras",
      duration: "3.5 Weeks",
      topics: [
        "Neural network fundamentals and architectures",
        "Building and training deep neural networks",
        "Convolutional Neural Networks (CNNs)",
        "Recurrent Neural Networks (RNNs and LSTMs)",
        "Transfer learning and pre-trained models",
        "Regularization techniques and optimization",
        "TensorBoard for model monitoring"
      ]
    },
    {
      title: "Natural Language Processing (NLP)",
      duration: "3 Weeks",
      topics: [
        "Text preprocessing and tokenization",
        "Word embeddings (Word2Vec, GloVe)",
        "Sentiment analysis and text classification",
        "Named Entity Recognition (NER)",
        "Language models and transformers",
        "BERT and advanced transformer architectures",
        "Chatbot development with NLP"
      ]
    },
    {
      title: "Computer Vision and Image Processing",
      duration: "2.5 Weeks",
      topics: [
        "Image preprocessing with OpenCV",
        "CNN architectures for image classification",
        "Object detection and localization",
        "Semantic segmentation techniques",
        "Generative Adversarial Networks (GANs)",
        "Style transfer and image generation",
        "Real-time computer vision applications"
      ]
    },
    {
      title: "Advanced AI and Specialized Topics",
      duration: "2 Weeks",
      topics: [
        "Reinforcement learning fundamentals",
        "Time series forecasting with deep learning",
        "Recommendation systems and collaborative filtering",
        "Anomaly detection and unsupervised learning",
        "Explainable AI and model interpretability",
        "AutoML and neural architecture search"
      ]
    },
    {
      title: "MLOps and Production Deployment",
      duration: "2.5 Weeks",
      topics: [
        "ML model deployment strategies",
        "Docker containerization for ML models",
        "API development with Flask/FastAPI",
        "Cloud deployment (AWS, GCP, Azure)",
        "Model monitoring and maintenance",
        "CI/CD pipelines for machine learning",
        "A/B testing for ML models",
        "Scalable ML infrastructure"
      ]
    }
  ],
  certification: "Advanced Machine Learning Engineer Certificate",
  price: "44,999",
  originalPrice: "67,999",
  features: [
    "Advanced AI and ML algorithm mastery",
    "Deep learning with industry-standard frameworks",
    "NLP and computer vision specializations",
    "Production ML deployment experience",
    "Real-world AI project portfolio",
    "MLOps and scalable system design",
    "Career guidance for ML engineer roles",
    "Access to GPU-powered cloud environments"
  ],
  instructor: "Senior ML Engineer/AI Researcher with 15+ years experience",
  nextBatch: "5th December 2025",
  mode: ["Online", "Advanced AI Labs"]
};

export default function MachineLearningPage() {
  return <CourseDetailPage course={machineLearningData} />;
}