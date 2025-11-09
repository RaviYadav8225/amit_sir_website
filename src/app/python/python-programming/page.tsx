"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const pythonProgrammingData = {
  title: "Python Programming with PCEP™ Certification",
  description: "Master Python programming fundamentals and earn the official PCEP™ – Certified Entry-Level Python Programmer certification. Learn from scratch with no prerequisites and build a strong foundation for software development, data analysis, and automation careers.",
  duration: "8-10 Weeks",
  level: "Beginner",
  prerequisites: [
    "Basic computer literacy and enthusiasm to learn",
    "No prior programming experience required",
    "Basic mathematics knowledge",
    "Ability to use a personal computer"
  ],
  objectives: [
    "Master Python syntax, semantics, and runtime environment",
    "Understand universal programming concepts and data types",
    "Work with variables, operators, and control flow mechanisms",
    "Master functions, data collections, and exception handling",
    "Build real-world Python applications and projects",
    "Pass the official PCEP™ certification exam"
  ],
  modules: [
    {
      title: "Python Fundamentals and Setup",
      duration: "1.5 Weeks",
      topics: [
        "Introduction to programming and Python",
        "Python installation and development environment",
        "Compilation vs interpretation concepts",
        "Python keywords, instructions, and indentation",
        "Writing and running your first Python programs",
        "Understanding Python's logic and structure"
      ]
    },
    {
      title: "Data Types and Variables",
      duration: "1.5 Weeks",
      topics: [
        "Literals, variables, and numeral systems",
        "Integer, float, string, and boolean data types",
        "Variable naming conventions and best practices",
        "Type conversion and casting",
        "Input/output operations with input() and print()",
        "Working with user input and formatting output"
      ]
    },
    {
      title: "Operators and Expressions",
      duration: "1.5 Weeks",
      topics: [
        "Arithmetic, comparison, and logical operators",
        "Assignment and augmented assignment operators",
        "Operator precedence and associativity",
        "Building complex expressions",
        "Boolean logic and truth tables",
        "Practical operator applications"
      ]
    },
    {
      title: "Control Flow and Decision Making",
      duration: "2 Weeks",
      topics: [
        "Conditional statements (if, elif, else)",
        "For loops and while loops",
        "Loop control with break and continue",
        "Nested loops and conditional blocks",
        "Range function and iteration patterns",
        "Algorithm design and flowcharts"
      ]
    },
    {
      title: "Data Collections and Structures",
      duration: "2 Weeks",
      topics: [
        "Lists: creation, indexing, and manipulation",
        "Tuples: immutable sequences and use cases",
        "Dictionaries: key-value pairs and methods",
        "Strings: manipulation, formatting, and methods",
        "List comprehensions and advanced techniques",
        "Choosing the right data structure"
      ]
    },
    {
      title: "Functions and Exception Handling",
      duration: "1.5 Weeks",
      topics: [
        "Function definition and calling",
        "Parameters, arguments, and return values",
        "Built-in functions and user-defined functions",
        "Variable scope and the global keyword",
        "Exception handling with try-except blocks",
        "Debugging techniques and best practices",
        "PCEP™ exam preparation and practice tests"
      ]
    }
  ],
  certification: "PCEP™ – Certified Entry-Level Python Programmer",
  price: "16,999",
  originalPrice: "24,999",
  features: [
    "Official Python Institute curriculum",
    "PCEP™ certification exam voucher included",
    "Hands-on programming projects and exercises",
    "Python development environment setup",
    "Real-world application development",
    "Career guidance for software development",
    "Access to Python community and resources",
    "Lifetime access to course materials"
  ],
  instructor: "Python Institute Certified Instructor",
  nextBatch: "22nd November 2025",
  mode: ["Online", "Programming Labs"]
};

export default function PythonProgrammingPage() {
  return <CourseDetailPage course={pythonProgrammingData} />;
}