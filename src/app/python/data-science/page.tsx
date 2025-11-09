"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const dataScienceData = {
  title: "Data Science with Python – Complete Bootcamp",
  description: "Master data science and analytics with Python's powerful ecosystem. Learn NumPy, Pandas, Matplotlib, Seaborn, and machine learning with scikit-learn to become a professional data scientist and analyst.",
  duration: "12-14 Weeks",
  level: "Intermediate to Advanced",
  prerequisites: [
    "Solid Python programming knowledge (PCAP level recommended)",
    "Basic statistics and mathematics understanding",
    "Familiarity with data concepts and spreadsheets",
    "Understanding of programming logic and data structures"
  ],
  objectives: [
    "Master data manipulation with Pandas and NumPy",
    "Create compelling data visualizations",
    "Perform statistical analysis and hypothesis testing",
    "Build and evaluate machine learning models",
    "Work with real-world datasets and projects",
    "Develop end-to-end data science workflows"
  ],
  modules: [
    {
      title: "Python for Data Science Foundations",
      duration: "2 Weeks",
      topics: [
        "Setting up data science environment (Anaconda, Jupyter)",
        "Python libraries overview for data science",
        "Working with different data formats (CSV, JSON, XML)",
        "Data science workflow and best practices",
        "Version control for data science projects",
        "Introduction to mathematical computing"
      ]
    },
    {
      title: "NumPy for Numerical Computing",
      duration: "2 Weeks",
      topics: [
        "NumPy arrays and data types",
        "Array operations and broadcasting",
        "Mathematical functions and linear algebra",
        "Array indexing, slicing, and reshaping",
        "Random number generation and statistics",
        "Performance optimization techniques"
      ]
    },
    {
      title: "Data Manipulation with Pandas",
      duration: "3 Weeks",
      topics: [
        "DataFrames and Series fundamentals",
        "Data loading, saving, and format conversion",
        "Data cleaning and preprocessing techniques",
        "Handling missing data and outliers",
        "Grouping, aggregation, and pivot tables",
        "Merging, joining, and concatenating data",
        "Time series analysis and date handling"
      ]
    },
    {
      title: "Data Visualization and Storytelling",
      duration: "2.5 Weeks",
      topics: [
        "Matplotlib fundamentals and customization",
        "Statistical visualizations with Seaborn",
        "Interactive plots with Plotly",
        "Dashboard creation with Dash",
        "Data storytelling principles",
        "Creating publication-ready charts",
        "Geographic data visualization"
      ]
    },
    {
      title: "Statistical Analysis and Testing",
      duration: "2 Weeks",
      topics: [
        "Descriptive statistics and data distribution",
        "Probability theory and hypothesis testing",
        "A/B testing and experimental design",
        "Correlation and regression analysis",
        "Statistical significance and p-values",
        "Confidence intervals and effect sizes"
      ]
    },
    {
      title: "Machine Learning with Scikit-learn",
      duration: "2.5 Weeks",
      topics: [
        "Introduction to machine learning concepts",
        "Supervised learning (classification and regression)",
        "Unsupervised learning (clustering and dimensionality reduction)",
        "Model evaluation and cross-validation",
        "Feature engineering and selection",
        "Hyperparameter tuning and model optimization",
        "Ensemble methods and advanced algorithms"
      ]
    },
    {
      title: "Real-world Projects and Deployment",
      duration: "2 Weeks",
      topics: [
        "End-to-end data science project workflow",
        "Web scraping and API integration",
        "Working with databases and SQL",
        "Model deployment and productionization",
        "Creating data science reports and presentations",
        "Portfolio development and career guidance"
      ]
    }
  ],
  certification: "Professional Data Science with Python Certificate",
  price: "34,999",
  originalPrice: "52,999",
  features: [
    "Complete data science toolkit mastery",
    "Real-world dataset projects and case studies",
    "Industry-standard tools and libraries",
    "Statistical analysis and machine learning",
    "Data visualization and storytelling",
    "Career transition support to data science",
    "Portfolio of 8+ data science projects",
    "Interview preparation for data scientist roles"
  ],
  instructor: "Senior Data Scientist with 12+ years industry experience",
  nextBatch: "1st December 2025",
  mode: ["Online", "Project-based Labs"]
};

export default function DataSciencePage() {
  return <CourseDetailPage course={dataScienceData} />;
}