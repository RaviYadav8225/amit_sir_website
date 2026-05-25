"use client";
import { useState, useEffect, memo } from "react";
import Link from "next/link";
import EnrollmentModal from './EnrollmentModal';
import ConsultationModal from './consultation/ConsultationModal';
import { useCart } from '../context/CartContext';

interface Course {
  id: number;
  title: string;
  code: string;
  icon: string;
  badge: string;
  duration: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  features: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  demand: "High" | "Very High" | "Ultra High";
  rating: number;
  students: string;
  color: string;
  bgGradient: string;
  urlPath: string;
}

const demandCourses: Course[] = [
  {
    id: 1,
    title: "RHCSA Linux Admin",
    code: "EX200",
    icon: "�",
    badge: "Red Hat Certified",
    duration: "45 Days",
    price: "₹15,000",
    originalPrice: "₹25,000",
    discount: "40% OFF",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=400&q=80",
    features: ["Linux Fundamentals", "System Administration", "Security Hardening", "Shell Scripting"],
    level: "Beginner",
    demand: "Very High",
    rating: 4.6,
    students: "4.2K+",
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    urlPath: "/certifications/rhcsa"
  },
  {
    id: 2,
    title: "RHCE (ANSIBLE 234)",
    code: "ANSIBLE 234",
    icon: "🔴",
    badge: "Red Hat Certified",
    duration: "35 Days",
    price: "₹15,000",
    originalPrice: "₹25,000",
    discount: "40% OFF",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=400&q=80",
    features: ["Advanced Linux", "Automation Scripts", "System Management", "Enterprise Solutions"],
    level: "Advanced",
    demand: "High",
    rating: 4.7,
    students: "1.8K+",
    color: "from-red-500 to-pink-600",
    bgGradient: "from-red-50 to-pink-50",
    urlPath: "/certifications/rhce"
  },
  {
    id: 3,
    title: "AWS Solutions Architect",
    code: "SAA-C03",
    icon: "☁️",
    badge: "Amazon Certified",
    duration: "40 Days",
    price: "₹18,000",
    originalPrice: "₹27,000",
    discount: "33% OFF",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
    features: ["Cloud Architecture", "AWS Services", "Security Best Practices", "Cost Optimization"],
    level: "Intermediate",
    demand: "Very High",
    rating: 4.8,
    students: "3.5K+",
    color: "from-orange-500 to-yellow-600",
    bgGradient: "from-orange-50 to-yellow-50",
    urlPath: "/aws/cloud-services"
  },
  {
    id: 4,
    title: "CCNA Network Engineering",
    code: "200-301",
    icon: "🌐",
    badge: "Cisco Certified",
    duration: "50 Days",
    price: "₹20,000",
    originalPrice: "₹25,000",
    discount: "40% OFF",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80",
    features: ["Network Fundamentals", "Routing & Switching", "Network Security", "Wireless Technologies"],
    level: "Intermediate",
    demand: "Very High",
    rating: 4.7,
    students: "2.8K+",
    color: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
    urlPath: "/cisco/ccna-training-200-301"
  },
  {
    id: 5,
    title: "Azure Administrator",
    code: "AZ-104",
    icon: "☁️",
    badge: "Microsoft Certified",
    duration: "45 Days",
    price: "₹18,000",
    originalPrice: "₹40,000",
    discount: "38% OFF",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
    features: ["Azure Infrastructure", "Virtual Networks", "Identity Management", "Storage Solutions"],
    level: "Intermediate",
    demand: "Ultra High",
    rating: 4.8,
    students: "2.3K+",
    color: "from-blue-600 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    urlPath: "/microsoft/az-104"
  },
  {
    id: 6,
    title: "Cybersecurity (Basic + Advanced)",
    code: "CS-2024",
    icon: "🔒",
    badge: "Industry Certified",
    duration: "45 Days",
    price: "₹35,000",
    originalPrice: "₹60,000",
    discount: "42% OFF",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80",
    features: ["Network Security", "Ethical Hacking", "Threat Analysis", "Security Tools"],
    level: "Intermediate",
    demand: "Ultra High",
    rating: 4.9,
    students: "1.9K+",
    color: "from-red-500 to-orange-600",
    bgGradient: "from-red-50 to-orange-50",
    urlPath: "/cybersecurity/basic-advanced"
  }
];

const FloatingCourses = memo(function FloatingCourses() {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);
  const [currentFloatingIndex, setCurrentFloatingIndex] = useState(0);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const { addToCart, isInCart } = useCart();

  // Auto-rotate floating effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFloatingIndex((prev) => (prev + 1) % demandCourses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleEnrollClick = (course: Course) => {
    console.log('🎓 ENROLL NOW BUTTON CLICKED - FloatingCourses!');
    console.log('📚 Course:', course.title);
    
    const courseData = {
      name: course.title,
      code: course.code,
      price: course.price,
      originalPrice: course.originalPrice,
      duration: course.duration,
      level: course.level,
      discount: course.discount
    };
    
    setSelectedCourse(courseData);
    setIsEnrollModalOpen(true);
  };

  const handleAddToCart = (course: Course, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const priceNumber = parseInt(course.price.replace(/[^\d]/g, ''));
    const originalPriceNumber = parseInt(course.originalPrice.replace(/[^\d]/g, ''));
    
    addToCart({
      id: course.id.toString(),
      name: course.title,
      code: course.code,
      price: priceNumber,
      originalPrice: originalPriceNumber,
      duration: course.duration,
      level: course.level,
      discount: course.discount
    });
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "Ultra High": return "bg-red-500 animate-pulse";
      case "Very High": return "bg-orange-500";
      case "High": return "bg-yellow-500";
      default: return "bg-green-500";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-700";
      case "Intermediate": return "bg-blue-100 text-blue-700";
      case "Advanced": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-200/30 rounded-full blur-2xl animate-float-slow2" />
        <div className="absolute bottom-20 left-32 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-40 right-10 w-56 h-56 bg-cyan-200/30 rounded-full blur-2xl animate-float-slow2" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className={`bg-blue-600 rounded-full animate-pulse floating-dot floating-dot-${i % 12}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-bounce shadow-lg">
            <span className="animate-pulse">🔥</span>
            <span>MOST DEMANDING COURSES</span>
            <span className="animate-pulse">🔥</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Industry&apos;s Most
            <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
              In-Demand Courses
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master the skills that top companies are actively seeking. Get certified in trending technologies 
            with our expert-led training programs.
          </p>

          {/* Live Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              { label: "Students Enrolled", value: "15,200+", icon: "👥" },
              { label: "Job Placements", value: "89%", icon: "💼" },
              { label: "Average Salary Hike", value: "150%", icon: "📈" },
              { label: "Industry Partners", value: "200+", icon: "🤝" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-black text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demandCourses.map((course, index) => (
            <div
              key={course.id}
              className={`group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-2xl border border-white/50 cursor-pointer ${
                index === currentFloatingIndex ? 'animate-bounce-slow scale-105 shadow-2xl ring-4 ring-blue-500/50' : ''
              }`}
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
              data-delay={index * 0.2}
              data-floating={index === currentFloatingIndex}
            >
              {/* Demand Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className={`${getDemandColor(course.demand)} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}>
                  <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                  {course.demand} Demand
                </div>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12 animate-pulse">
                  {course.discount}
                </div>
              </div>

              {/* Course Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${course.bgGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                {/* Floating Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${course.color} rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-700 ${
                    hoveredCourse === course.id ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                  }`}>
                    <span className="text-3xl text-white">{course.icon}</span>
                  </div>
                </div>

                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                  hoveredCourse === course.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-400'}>⭐</span>
                        ))}
                      </div>
                      <span className="text-sm font-bold">{course.rating}</span>
                      <span className="text-xs text-gray-300">({course.students} students)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Details */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
                        {course.code}
                      </span>
                      <span className={`text-xs font-bold px-2 py-1 rounded-lg ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">{course.badge}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-black text-green-600">{course.price}</span>
                  <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                  <span className="text-sm text-red-500 font-bold">{course.discount}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                  <span className="text-blue-500">⏱️</span>
                  <span className="font-medium">{course.duration} • Live Classes</span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">What You&apos;ll Learn:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {course.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-center gap-1 text-xs text-gray-700">
                        <span className="w-1 h-1 bg-blue-500 rounded-full flex-shrink-0"></span>
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleEnrollClick(course);
                    }}
                    className={`w-full bg-gradient-to-r ${course.color} text-white py-3 px-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm cursor-pointer`}
                  >
                    🎓 Enroll Now
                  </button>
                  <div className="flex gap-2">
                    <button 
                      onClick={(e) => handleAddToCart(course, e)}
                      disabled={isInCart(course.id.toString())}
                      className={`flex-1 ${
                        isInCart(course.id.toString()) 
                          ? 'bg-green-100 text-green-700 border-2 border-green-500' 
                          : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border-2 border-blue-200'
                      } py-2.5 px-3 rounded-xl font-bold transition-all duration-300 text-xs flex items-center justify-center gap-1`}
                    >
                      {isInCart(course.id.toString()) ? '✓ In Cart' : '� Add to Cart'}
                    </button>
                    <Link href={course.urlPath}>
                      <button className="bg-gray-100 text-gray-700 py-2.5 px-4 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 text-xs">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Enrollment Count */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <span className="text-green-500">👥</span>
                      {course.students} enrolled
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐</span>
                      {course.rating} rating
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Particles Effect */}
              {hoveredCourse === course.id && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400/60 rounded-full animate-float-particle"
                      data-particle-index={i}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🎯 Don&apos;t Miss Out on These High-Demand Skills!
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Limited seats available. Join thousands of professionals who transformed their careers with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+91-9522220892"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <span>📞</span>
                Call +91-9522220892
              </a>
              <button 
                onClick={() => setIsConsultationModalOpen(true)}
                className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <span>💬</span>
                Free Career Counseling
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-1deg); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        
        @keyframes float-slow2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(15px) rotate(-1deg); }
          50% { transform: translateY(5px) rotate(0deg); }
          75% { transform: translateY(20px) rotate(1deg); }
        }
        .animate-float-slow2 { animation: float-slow2 8s ease-in-out infinite; }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        
        @keyframes float-particle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { transform: translateY(-30px) scale(1); opacity: 1; }
          100% { transform: translateY(-60px) scale(0); opacity: 0; }
        }
        .animate-float-particle { animation: float-particle 2s ease-in-out infinite; }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
      `}</style>

      {/* Enrollment Modal */}
      <EnrollmentModal 
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseData={selectedCourse}
      />

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </section>
  );
});

FloatingCourses.displayName = 'FloatingCourses';

export default FloatingCourses;