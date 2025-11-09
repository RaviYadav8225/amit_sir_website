"use client";
import { useState, useEffect } from "react";
import { useCart } from '../context/CartContext';
import "./course-animations.css";

interface CourseModule {
  title: string;
  topics: string[];
  duration: string;
}

interface CourseDetail {
  title: string;
  description: string;
  duration: string;
  level: string;
  prerequisites: string[];
  objectives: string[];
  modules: CourseModule[];
  certification: string;
  price: string;
  originalPrice?: string;
  features: string[];
  instructor: string;
  nextBatch: string;
  mode: string[];
  code?: string;
  id?: string;
}

interface CourseDetailPageProps {
  course: CourseDetail;
}

export default function CourseDetailPage({ course }: CourseDetailPageProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { addToCart, isInCart } = useCart();

  useEffect(() => {
    // Trigger animations on page load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    const priceNumber = parseInt(course.price.replace(/[^\d]/g, ''));
    const originalPriceNumber = course.originalPrice 
      ? parseInt(course.originalPrice.replace(/[^\d]/g, '')) 
      : priceNumber;
    
    const courseId = course.id || course.title.toLowerCase().replace(/\s+/g, '-');
    
    addToCart({
      id: courseId,
      name: course.title,
      code: course.code || course.certification || 'N/A',
      price: priceNumber,
      originalPrice: originalPriceNumber,
      duration: course.duration,
      level: course.level,
      discount: course.originalPrice 
        ? `${Math.round(((originalPriceNumber - priceNumber) / originalPriceNumber) * 100)}% OFF`
        : '0% OFF'
    });
  };

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle enquiry form submission
    alert("Enquiry submitted successfully!");
    setShowEnquiry(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-gray-900/90 pt-24 pb-16">
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-bounce" />
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-pink-500/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ease-out ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
            }`}>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className={`bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 transform transition-all duration-700 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`} style={{transitionDelay: '300ms'}}>
                  <span className="text-blue-300 font-semibold">⏱️ Duration: </span>
                  <span className="text-white">{course.duration}</span>
                </div>
                <div className={`bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 transform transition-all duration-700 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`} style={{transitionDelay: '400ms'}}>
                  <span className="text-purple-300 font-semibold">📊 Level: </span>
                  <span className="text-white">{course.level}</span>
                </div>
                <div className={`bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 transform transition-all duration-700 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`} style={{transitionDelay: '500ms'}}>
                  <span className="text-green-300 font-semibold">🎯 Mode: </span>
                  <span className="text-white">{course.mode.join(", ")}</span>
                </div>
              </div>
            </div>
            
            {/* Course Card */}
            <div className={`bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl transform transition-all duration-1000 ease-out ${
              isLoaded ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-16 opacity-0 scale-95'
            }`} style={{transitionDelay: '200ms'}}>
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  {course.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through">{course.originalPrice}</span>
                  )}
                  <span className="text-4xl font-bold text-white animate-pulse">₹{course.price}</span>
                </div>
                <p className="text-blue-300">💡 Next Batch: {course.nextBatch}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {course.features.map((feature, index) => (
                  <div key={index} className={`flex items-center gap-3 transform transition-all duration-500 ease-out ${
                    isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`} style={{transitionDelay: `${600 + (index * 100)}ms`}}>
                    <span className="text-green-400 animate-bounce" style={{animationDelay: `${index * 200}ms`}}>✅</span>
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                <button 
                  onClick={handleAddToCart}
                  disabled={isInCart(course.id || course.title.toLowerCase().replace(/\s+/g, '-'))}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform ${
                    isInCart(course.id || course.title.toLowerCase().replace(/\s+/g, '-'))
                      ? 'bg-green-100 text-green-700 border-2 border-green-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105'
                  }`}
                >
                  {isInCart(course.id || course.title.toLowerCase().replace(/\s+/g, '-')) 
                    ? '✅ Already in Cart' 
                    : '🛒 Add to Cart'}
                </button>
                <button 
                  onClick={() => setShowEnquiry(true)}
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  📞 Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className={`bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 overflow-hidden transform transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-white/20">
            {[
              { id: "overview", label: "Overview", icon: "📋" },
              { id: "syllabus", label: "Syllabus", icon: "📚" },
              { id: "objectives", label: "Objectives", icon: "🎯" },
              { id: "instructor", label: "Instructor", icon: "👨‍🏫" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all duration-300 hover:scale-105 transform ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="animate-pulse">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "overview" && (
              <div className={`space-y-8 transform transition-all duration-700 ease-out ${
                activeTab === "overview" ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <div className="transform transition-all duration-500 ease-out hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-4">Course Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{course.description}</p>
                </div>
                
                <div className="transform transition-all duration-700 ease-out">
                  <h4 className="text-xl font-bold text-white mb-4">Prerequisites</h4>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index} className={`flex items-start gap-3 text-gray-300 transform transition-all duration-500 ease-out hover:translate-x-2 hover:text-white`}>
                        <span className="text-blue-400 mt-1 animate-pulse">▶️</span>
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="transform transition-all duration-900 ease-out">
                  <h4 className="text-xl font-bold text-white mb-4">Certification</h4>
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-6 rounded-xl border border-yellow-500/30 hover:scale-105 transition-transform duration-300">
                    <p className="text-yellow-300 font-semibold">🏆 {course.certification}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "syllabus" && (
              <div className={`space-y-6 transform transition-all duration-700 ease-out ${
                activeTab === "syllabus" ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <h3 className="text-2xl font-bold text-white mb-6">Course Syllabus</h3>
                {course.modules.map((module, index) => (
                  <div key={index} className={`bg-white/5 rounded-xl p-6 border border-white/10 transform transition-all duration-500 ease-out hover:scale-105 hover:bg-white/10`}>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-white">
                        Module {index + 1}: {module.title}
                      </h4>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm animate-pulse">
                        {module.duration}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                          <span className="text-purple-400 mt-1 animate-bounce">📌</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "objectives" && (
              <div className={`space-y-6 transform transition-all duration-700 ease-out ${
                activeTab === "objectives" ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <h3 className="text-2xl font-bold text-white mb-6">Learning Objectives</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.objectives.map((objective, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-500/20 to-teal-500/20 p-6 rounded-xl border border-green-500/30 transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-green-400 text-xl animate-pulse">🎯</span>
                        <p className="text-gray-200 leading-relaxed">{objective}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "instructor" && (
              <div className={`space-y-6 transform transition-all duration-700 ease-out ${
                activeTab === "instructor" ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <h3 className="text-2xl font-bold text-white mb-6">Your Instructor</h3>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-8 rounded-xl border border-purple-500/30 transform transition-all duration-500 ease-out hover:scale-105">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl text-white animate-bounce">
                      👨‍🏫
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">{course.instructor}</h4>
                      <p className="text-purple-300">Senior Technical Instructor</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Experienced industry professional with years of hands-on experience in teaching and implementing enterprise solutions. 
                    Certified instructor with proven track record of student success.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 max-w-md w-full border border-white/20 transform animate-slideInUp">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Course Enquiry</h3>
              <button 
                onClick={() => setShowEnquiry(false)}
                className="text-gray-400 hover:text-white transition-colors hover:rotate-90 transform duration-300"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleEnquiry} className="space-y-4">
              <div className="transform transition-all duration-300 hover:scale-105">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:scale-105 transition-all duration-300"
                />
              </div>
              <div className="transform transition-all duration-300 hover:scale-105">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:scale-105 transition-all duration-300"
                />
              </div>
              <div className="transform transition-all duration-300 hover:scale-105">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  required
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:scale-105 transition-all duration-300"
                />
              </div>
              <div className="transform transition-all duration-300 hover:scale-105">
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:scale-105 transition-all duration-300 resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 rounded-xl font-bold hover:from-green-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 transform"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}