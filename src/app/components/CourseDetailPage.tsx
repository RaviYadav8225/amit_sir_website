"use client";
import { useState, useEffect, memo } from "react";
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
  pdfUrl?: string;
  pdfName?: string;
}

interface CourseDetailPageProps {
  course: CourseDetail;
}

// Memoized component for better performance
const CourseDetailPage = memo(function CourseDetailPage({ course }: CourseDetailPageProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [enquiryLoading, setEnquiryLoading] = useState(false);
  const [enquiryMessage, setEnquiryMessage] = useState("");
  const { addToCart, isInCart } = useCart();

  useEffect(() => {
    // Instant load - remove delay
    setIsLoaded(true);
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

  const handleEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnquiryLoading(true);
    setEnquiryMessage("");
    
    const formData = new FormData(e.target as HTMLFormElement);
    const enquiryData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      course: course.title,
      courseDuration: course.duration,
      coursePrice: course.price
    };

    try {
      const response = await fetch('/api/course-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enquiryData),
      });

      const result = await response.json();

      if (response.ok) {
        setEnquiryMessage("✅ Enquiry submitted successfully! We'll contact you soon.");
        setTimeout(() => {
          setShowEnquiry(false);
          setEnquiryMessage("");
        }, 3000);
      } else {
        setEnquiryMessage("❌ " + (result.error || "Failed to submit enquiry. Please try again."));
      }
    } catch (error) {
      console.error('Enquiry submission error:', error);
      setEnquiryMessage("❌ Network error. Please check your connection and try again.");
    } finally {
      setEnquiryLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-x-hidden">
      {/* Hero Section - Mobile Optimized */}
      <div className="relative bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-gray-900/90 pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Floating Animation Elements - Smaller on mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-5 md:top-20 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-20 right-10 md:top-40 md:right-20 w-20 h-20 md:w-32 md:h-32 bg-purple-500/20 rounded-full blur-2xl animate-bounce" />
          <div className="absolute bottom-10 left-1/3 md:bottom-20 w-12 h-12 md:w-16 md:h-16 bg-pink-500/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Content Section - Mobile Optimized */}
            <div className={`transform transition-all duration-1000 ease-out ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
            }`}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed">
                {course.description}
              </p>
              
              {/* Info Cards - Mobile Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                <div className={`bg-white/10 backdrop-blur-md px-3 py-2.5 md:px-4 md:py-2 rounded-lg border border-white/20 transform transition-all duration-700 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`} style={{transitionDelay: '300ms'}}>
                  <span className="text-blue-300 font-semibold text-sm md:text-base">⏱️ Duration: </span>
                  <span className="text-white text-sm md:text-base">{course.duration}</span>
                </div>
                <div className={`bg-white/10 backdrop-blur-md px-3 py-2.5 md:px-4 md:py-2 rounded-lg border border-white/20 transform transition-all duration-700 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`} style={{transitionDelay: '400ms'}}>
                  <span className="text-purple-300 font-semibold text-sm md:text-base">📊 Level: </span>
                  <span className="text-white text-sm md:text-base">{course.level}</span>
                </div>
                <div className={`bg-white/10 backdrop-blur-md px-3 py-2.5 md:px-4 md:py-2 rounded-lg border border-white/20 transform transition-all duration-700 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`} style={{transitionDelay: '500ms'}}>
                  <span className="text-green-300 font-semibold text-sm md:text-base">🎯 Mode: </span>
                  <span className="text-white text-sm md:text-base">{course.mode.join(", ")}</span>
                </div>
              </div>
            </div>
            
            {/* Course Card - Mobile Optimized */}
            <div className={`bg-white/10 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/20 shadow-2xl transform transition-all duration-1000 ease-out ${
              isLoaded ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-16 opacity-0 scale-95'
            }`} style={{transitionDelay: '200ms'}}>
              <div className="text-center mb-5 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">🎓 Course Highlights</h3>
                <p className="text-blue-300 text-sm md:text-base">Transform Your Career with Industry-Leading Training</p>
              </div>
              
              {/* Features - Compact on mobile */}
              <div className="space-y-2.5 md:space-y-4 mb-6 md:mb-8">
                {course.features.map((feature, index) => (
                  <div key={index} className={`flex items-center gap-2.5 md:gap-3 transform transition-all duration-500 ease-out ${
                    isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`} style={{transitionDelay: `${600 + (index * 100)}ms`}}>
                    <span className="text-green-400 text-sm md:text-base animate-bounce" style={{animationDelay: `${index * 200}ms`}}>✅</span>
                    <span className="text-gray-200 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Buttons - Touch friendly */}
              <div className="space-y-3">
                <button 
                  onClick={handleAddToCart}
                  disabled={isInCart(course.id || course.title.toLowerCase().replace(/\s+/g, '-'))}
                  className={`w-full py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform active:scale-95 ${
                    isInCart(course.id || course.title.toLowerCase().replace(/\s+/g, '-'))
                      ? 'bg-green-100 text-green-700 border-2 border-green-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 md:hover:scale-105'
                  }`}
                >
                  {isInCart(course.id || course.title.toLowerCase().replace(/\s+/g, '-')) 
                    ? '✅ Already in Cart' 
                    : '🛒 Add to Cart'}
                </button>
                <button 
                  onClick={() => setShowEnquiry(true)}
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl md:hover:scale-105 transform active:scale-95"
                >
                  📞 Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs - Mobile Optimized */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className={`bg-white/10 backdrop-blur-2xl rounded-2xl md:rounded-3xl border border-white/20 overflow-hidden transform transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          {/* Tab Navigation - Scrollable on mobile */}
          <div className="flex overflow-x-auto border-b border-white/20 scrollbar-hide">
            {[
              { id: "overview", label: "Overview", icon: "📋" },
              { id: "syllabus", label: "Syllabus", icon: "📚" },
              { id: "objectives", label: "Objectives", icon: "🎯" },
              { id: "instructor", label: "Instructor", icon: "👨‍🏫" },
              { id: "material", label: "Course Material", icon: "📄" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-3 md:py-4 font-semibold text-sm md:text-base transition-all duration-300 md:hover:scale-105 transform whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="animate-pulse text-base md:text-lg">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content - Mobile padding */}
          <div className="p-4 sm:p-6 md:p-8">
            {activeTab === "overview" && (
              <div className={`space-y-6 md:space-y-8 transform transition-all duration-700 ease-out ${
                activeTab === "overview" ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <div className="transform transition-all duration-500 ease-out md:hover:scale-105">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Course Overview</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{course.description}</p>
                </div>
                
                <div className="transform transition-all duration-700 ease-out">
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Prerequisites</h4>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index} className={`flex items-start gap-2.5 md:gap-3 text-gray-300 text-sm md:text-base transform transition-all duration-500 ease-out md:hover:translate-x-2 md:hover:text-white`}>
                        <span className="text-blue-400 mt-0.5 md:mt-1 animate-pulse">▶️</span>
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="transform transition-all duration-900 ease-out">
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Certification</h4>
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 md:p-6 rounded-xl border border-yellow-500/30 md:hover:scale-105 transition-transform duration-300">
                    <p className="text-yellow-300 font-semibold text-sm md:text-base">🏆 {course.certification}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "syllabus" && (
              <div className={`space-y-4 md:space-y-6 transform transition-all duration-700 ease-out ${
                activeTab === "syllabus" ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Course Syllabus</h3>
                {course.modules.map((module, index) => (
                  <div key={index} className={`bg-white/5 rounded-xl p-4 md:p-6 border border-white/10 transform transition-all duration-500 ease-out md:hover:scale-105 md:hover:bg-white/10`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 md:mb-4">
                      <h4 className="text-base md:text-lg font-bold text-white">
                        Module {index + 1}: {module.title}
                      </h4>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs md:text-sm animate-pulse w-fit">
                        {module.duration}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2 md:gap-3 text-gray-300 text-sm md:text-base hover:text-white transition-colors duration-300">
                          <span className="text-purple-400 mt-0.5 md:mt-1 animate-bounce text-sm">📌</span>
                          <span className="flex-1">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "objectives" && (
              <div className={`space-y-4 md:space-y-6 transform transition-all duration-700 ease-out ${
                activeTab === "objectives" ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Learning Objectives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {course.objectives.map((objective, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-500/20 to-teal-500/20 p-4 md:p-6 rounded-xl border border-green-500/30 transform transition-all duration-500 ease-out md:hover:scale-105 md:hover:shadow-lg">
                      <div className="flex items-start gap-2.5 md:gap-3">
                        <span className="text-green-400 text-lg md:text-xl animate-pulse">🎯</span>
                        <p className="text-gray-200 leading-relaxed text-sm md:text-base">{objective}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "instructor" && (
              <div className={`space-y-4 md:space-y-6 transform transition-all duration-700 ease-out ${
                activeTab === "instructor" ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Your Instructor</h3>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-5 md:p-8 rounded-xl border border-purple-500/30 transform transition-all duration-500 ease-out md:hover:scale-105">
                  <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl md:text-3xl text-white animate-bounce flex-shrink-0">
                      👨‍🏫
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white">{course.instructor}</h4>
                      <p className="text-purple-300 text-sm md:text-base">Senior Technical Instructor</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Experienced industry professional with years of hands-on experience in teaching and implementing enterprise solutions. 
                    Certified instructor with proven track record of student success.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "material" && (
              <div className={`space-y-4 md:space-y-6 transform transition-all duration-700 ease-out ${
                activeTab === "material" ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Course Material</h3>
                
                {course.pdfUrl ? (
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-8 md:p-12 rounded-xl border border-blue-500/30 transform transition-all duration-500 ease-out md:hover:scale-105">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl md:text-5xl text-white mb-6 animate-bounce">
                        📄
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {course.pdfName || "Course Syllabus"}
                      </h4>
                      <p className="text-blue-300 text-base md:text-lg mb-6 max-w-2xl">
                        Download the complete course syllabus with detailed modules, learning objectives, and curriculum breakdown.
                      </p>
                      <a
                        href={course.pdfUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3"
                      >
                        <span className="text-2xl">📥</span>
                        <span>Download PDF</span>
                      </a>
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <p className="text-blue-300 text-sm font-semibold mb-1">Format</p>
                          <p className="text-white">PDF Document</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg">
                          <p className="text-blue-300 text-sm font-semibold mb-1">Type</p>
                          <p className="text-white">Course Syllabus</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg">
                          <p className="text-blue-300 text-sm font-semibold mb-1">Access</p>
                          <p className="text-white">Free Download</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/10 p-8 md:p-12 rounded-xl border border-white/20 text-center">
                    <div className="text-6xl mb-4">📚</div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-3">Course Material Coming Soon</h4>
                    <p className="text-gray-300 text-base">
                      We're preparing comprehensive course materials for you. Check back soon!
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enquiry Modal - Mobile Optimized */}
      {showEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl md:rounded-3xl p-5 md:p-8 max-w-md w-full border border-white/20 transform animate-slideInUp max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5 md:mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white">Course Enquiry</h3>
              <button 
                onClick={() => setShowEnquiry(false)}
                className="text-gray-400 hover:text-white transition-colors md:hover:rotate-90 transform duration-300 text-2xl md:text-3xl w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleEnquiry} className="space-y-3.5 md:space-y-4">
              <div className="transform transition-all duration-300 md:hover:scale-105">
                <input 
                  type="text"
                  name="name"
                  placeholder="Your Name" 
                  required
                  disabled={enquiryLoading}
                  className="w-full p-3.5 md:p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 md:focus:scale-105 transition-all duration-300 disabled:opacity-50 text-sm md:text-base"
                />
              </div>
              <div className="transform transition-all duration-300 md:hover:scale-105">
                <input 
                  type="email"
                  name="email"
                  placeholder="Email Address" 
                  required
                  disabled={enquiryLoading}
                  className="w-full p-3.5 md:p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 md:focus:scale-105 transition-all duration-300 disabled:opacity-50 text-sm md:text-base"
                />
              </div>
              <div className="transform transition-all duration-300 md:hover:scale-105">
                <input 
                  type="tel"
                  name="phone"
                  placeholder="Phone Number" 
                  required
                  disabled={enquiryLoading}
                  className="w-full p-3.5 md:p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 md:focus:scale-105 transition-all duration-300 disabled:opacity-50 text-sm md:text-base"
                />
              </div>
              <div className="transform transition-all duration-300 md:hover:scale-105">
                <textarea
                  name="message"
                  placeholder="Your Message (Optional)" 
                  rows={4}
                  disabled={enquiryLoading}
                  className="w-full p-3.5 md:p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 md:focus:scale-105 transition-all duration-300 resize-none disabled:opacity-50 text-sm md:text-base"
                />
              </div>
              
              {enquiryMessage && (
                <div className={`p-3.5 md:p-4 rounded-xl text-center font-semibold text-sm md:text-base ${
                  enquiryMessage.startsWith('✅') 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {enquiryMessage}
                </div>
              )}
              
              <button 
                type="submit"
                disabled={enquiryLoading}
                className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 md:hover:scale-105 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {enquiryLoading ? '⏳ Sending...' : '📧 Send Enquiry'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
});

export default CourseDetailPage;