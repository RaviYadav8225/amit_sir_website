"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const pcapData = {
  title: "PCAP™ – Certified Associate Python Programmer",
  description: "Advance your Python skills to the associate level with PCAP™ certification. Master object-oriented programming, advanced Python concepts, modules, packages, and exception handling to become a professional Python developer.",
  duration: "10-12 Weeks",
  level: "Intermediate",
  prerequisites: [
    "PCEP™ certification or equivalent Python knowledge",
    "Solid understanding of Python fundamentals",
    "Experience with basic programming concepts",
    "Familiarity with Python syntax and data types"
  ],
  objectives: [
    "Master object-oriented programming in Python",
    "Work with modules, packages, and PIP",
    "Implement advanced string processing techniques",
    "Understand generators, iterators, and closures",
    "Master exception handling and file processing",
    "Pass the official PCAP™ certification exam"
  ],
  modules: [
    {
      title: "Modules and Packages",
      duration: "2 Weeks",
      topics: [
        "Understanding Python modules and imports",
        "Creating and organizing packages",
        "Working with the Python Package Index (PIP)",
        "Managing dependencies and virtual environments",
        "Module search paths and PYTHONPATH",
        "Best practices for module organization"
      ]
    },
    {
      title: "Exception Handling Mechanisms",
      duration: "1.5 Weeks",
      topics: [
        "Exception hierarchies and built-in exceptions",
        "try, except, else, and finally blocks",
        "Creating custom exception classes",
        "Exception handling best practices",
        "Debugging with exception information",
        "Context managers and with statements"
      ]
    },
    {
      title: "Object-Oriented Programming Fundamentals",
      duration: "3 Weeks",
      topics: [
        "Classes, objects, and instance variables",
        "Methods, constructors, and destructors",
        "Inheritance and method overriding",
        "Encapsulation and data hiding",
        "Polymorphism and duck typing",
        "Class and static methods",
        "Property decorators and descriptors"
      ]
    },
    {
      title: "Advanced String Processing",
      duration: "1.5 Weeks",
      topics: [
        "Character encoding and Unicode handling",
        "Advanced string methods and formatting",
        "Regular expressions with re module",
        "String performance optimization",
        "Text processing and manipulation",
        "Internationalization considerations"
      ]
    },
    {
      title: "Generators, Iterators, and Closures",
      duration: "2 Weeks",
      topics: [
        "Understanding iterators and the iterator protocol",
        "Creating and using generators",
        "Generator expressions and yield statements",
        "Closure concepts and nested functions",
        "Decorator patterns and functools",
        "Memory-efficient programming techniques"
      ]
    },
    {
      title: "File Processing and Standard Library",
      duration: "2 Weeks",
      topics: [
        "File I/O operations and file modes",
        "Working with different file formats",
        "Directory operations and path handling",
        "Standard Library modules (datetime, math, random)",
        "Data serialization (JSON, pickle)",
        "PCAP™ exam preparation and practice tests",
        "Professional development planning"
      ]
    }
  ],
  certification: "PCAP™ – Certified Associate Python Programmer",
  price: "22,999",
  originalPrice: "34,999",
  features: [
    "Official Python Institute PCAP™ curriculum",
    "PCAP™ certification exam voucher (USD 295 value)",
    "Advanced Python programming projects",
    "Object-oriented design patterns",
    "Industry-standard coding practices",
    "Career advancement preparation",
    "Professional developer portfolio",
    "Path to PCPP™ professional certification"
  ],
  instructor: "Python Institute Certified Professional Instructor",
  nextBatch: "28th November 2025",
  mode: ["Online", "Advanced Programming Labs"]
};

export default function PCAPPage() {
  return <CourseDetailPage course={pcapData} />;
}