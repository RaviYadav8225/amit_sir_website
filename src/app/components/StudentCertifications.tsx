"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const StudentCertifications = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const certifications = [
    {
      id: 1,
      studentName: "Atul Soni",
      certification: "Microsoft Certified: Azure Fundamentals",
      issueDate: "June 15, 2024",
      image: "/images/cert-atul-soni.jpg",
      company: "Microsoft",
      color: "from-blue-500 to-cyan-500",
      icon: "☁️"
    },
    {
      id: 2,
      studentName: "Gajendra Singh Tomar",
      certification: "Microsoft Certified: Azure Fundamentals",
      issueDate: "June 28, 2024",
      image: "/images/cert-gajendra.jpg",
      company: "Microsoft",
      color: "from-blue-600 to-indigo-600",
      icon: "☁️"
    },
    {
      id: 3,
      studentName: "Nipun Sheti",
      certification: "Microsoft Certified: Azure Fundamentals",
      issueDate: "July 10, 2024",
      image: "/images/cert-nipun.jpg",
      company: "Microsoft",
      color: "from-cyan-500 to-blue-600",
      icon: "☁️"
    },
    {
      id: 4,
      studentName: "Kamal",
      certification: "AWS Certified Solutions Architect - Associate",
      issueDate: "2024",
      image: "/images/cert-kamal-aws.jpg",
      company: "AWS",
      color: "from-orange-500 to-yellow-500",
      icon: "🚀"
    },
    {
      id: 5,
      studentName: "Ravi",
      certification: "AWS Certified Solutions Architect - Associate",
      issueDate: "2024",
      image: "/images/cert-ravi-aws.jpg",
      company: "AWS",
      color: "from-orange-600 to-red-500",
      icon: "🚀"
    },
    {
      id: 6,
      studentName: "Manish Kumar",
      certification: "AWS Certified Solutions Architect - Associate",
      issueDate: "September 08, 2020",
      image: "/images/cert-manish-aws.jpg",
      company: "AWS",
      color: "from-yellow-500 to-orange-600",
      icon: "🚀"
    },
    {
      id: 7,
      studentName: "Rohit Rajak",
      certification: "Red Hat System Administration I (RH124)",
      issueDate: "December 9, 2023",
      image: "/images/cert-rohit-rajak.jpg",
      company: "Red Hat",
      color: "from-red-600 to-red-700",
      icon: "🎩"
    },
    {
      id: 8,
      studentName: "Ravi Yadav",
      certification: "Red Hat System Administration I (RH124)",
      issueDate: "March 3, 2024",
      image: "/images/cert-ravi-yadav-rh124.jpg",
      company: "Red Hat",
      color: "from-red-500 to-orange-600",
      icon: "🎩"
    },
    {
      id: 9,
      studentName: "Ravi Yadav",
      certification: "Red Hat System Administration II (RH134)",
      issueDate: "Decemberr 8, 2023",
      image: "/images/cert-ravi-yadav-rh134.jpg",
      company: "Red Hat",
      color: "from-red-700 to-red-800",
      icon: "🎩"
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certifications.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlay, certifications.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certifications.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certifications.length) % certifications.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="relative py-10 md:py-16 px-3 md:px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated Background Elements - Smaller on mobile */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-5 md:top-20 md:left-10 w-20 h-20 md:w-32 md:h-32 bg-blue-300/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-20 right-10 md:top-40 md:right-20 w-24 h-24 md:w-40 md:h-40 bg-purple-300/20 rounded-full blur-3xl animate-float-slow2" />
        <div className="absolute bottom-10 left-16 md:bottom-20 md:left-32 w-20 h-20 md:w-36 md:h-36 bg-cyan-300/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-20 md:bottom-40 md:right-40 w-20 h-20 md:w-32 md:h-32 bg-indigo-300/20 rounded-full blur-3xl animate-float-slow2" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="inline-block mb-2 md:mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
              🏆 Success Stories
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2 md:mb-3 px-2">
            Our Students'
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Latest Achievements
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Celebrating our students who earned globally recognized certifications
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-xl md:rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {certifications.map((cert) => (
                  <div key={cert.id} className="min-w-full flex-shrink-0 px-1 md:px-2">
                  <div className="group bg-white rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden mx-auto max-w-2xl">
                    {/* Certificate Image - Mobile Optimized */}
                    <div className="relative h-60 sm:h-72 md:h-80 lg:h-96 overflow-hidden bg-navy-900 flex items-center justify-center">
                      <Image
                        src={cert.image}
                        alt={`${cert.studentName} - ${cert.certification}`}
                        width={1086}
                        height={763}
                        priority={cert.id <= 2}
                        unoptimized
                        className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Company Badge - Mobile friendly */}
                      <div className="absolute top-2 right-2 md:top-3 md:right-3">
                        <div className={`bg-gradient-to-r ${cert.color} text-white px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 md:gap-1.5`}>
                          <span className="text-xs md:text-sm">{cert.icon}</span>
                          <span className="hidden sm:inline">{cert.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content - Mobile Optimized */}
                    <div className="p-4 md:p-5 lg:p-6">
                      {/* Student Name - Responsive */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        <span className="text-base md:text-lg">🎉</span>
                        <span className="truncate">{cert.studentName}</span>
                      </h3>

                      {/* Details - Compact on mobile */}
                      <div className="space-y-2.5 md:space-y-3">
                        <div className="flex items-start gap-2 bg-gray-50 p-2.5 md:p-3 rounded-lg">
                          <span className="text-lg md:text-xl flex-shrink-0">🎓</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-gray-500 mb-0.5 md:mb-1">Certification</p>
                            <p className="text-xs sm:text-sm md:text-base font-bold text-gray-800 leading-tight">
                              {cert.certification}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 bg-gray-50 p-2.5 md:p-3 rounded-lg">
                          <span className="text-lg md:text-xl flex-shrink-0">📅</span>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-500 mb-0.5 md:mb-1">Issue Date</p>
                            <p className="text-xs sm:text-sm md:text-base font-bold text-gray-800">
                              {cert.issueDate}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 bg-gray-50 p-2.5 md:p-3 rounded-lg">
                          <span className="text-lg md:text-xl flex-shrink-0">🏢</span>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-500 mb-0.5 md:mb-1">Issued By</p>
                            <p className={`text-sm sm:text-base md:text-lg font-black bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                              {cert.company}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Badge - Mobile friendly */}
                      <div className="mt-4 md:mt-5 pt-3 md:pt-4 border-t border-gray-200">
                        <div className={`inline-flex items-center gap-1.5 md:gap-2 bg-gradient-to-r ${cert.color} text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg hover:shadow-xl transition-all md:hover:scale-105 active:scale-95`}>
                          <span className="text-sm md:text-base">✨</span>
                          <span>Certified Professional</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Touch-friendly on mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-2 md:-translate-x-3 lg:-translate-x-4 bg-white/95 backdrop-blur-md hover:bg-white p-2 md:p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 md:hover:scale-110 active:scale-95 z-10 group"
            aria-label="Previous certification"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-800 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-2 md:translate-x-3 lg:translate-x-4 bg-white/95 backdrop-blur-md hover:bg-white p-2 md:p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 md:hover:scale-110 active:scale-95 z-10 group"
            aria-label="Next certification"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-800 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators - Mobile Optimized */}
        <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full active:scale-125 ${
                index === currentSlide
                  ? 'w-8 md:w-10 h-2.5 md:h-3 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                  : 'w-2.5 md:w-3 h-2.5 md:h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>

        {/* Student Counter - Mobile friendly */}
        <div className="text-center mt-4 md:mt-6">
          <p className="text-gray-600 text-sm md:text-base font-semibold">
            Showing <span className="text-blue-600 font-black">{currentSlide + 1}</span> of <span className="text-blue-600 font-black">{certifications.length}</span> Certified Students
          </p>
        </div>

        {/* CTA Section - Mobile Optimized */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 md:mb-3">
              Your Success Story Starts Here! 🚀
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-5 md:mb-6 max-w-2xl mx-auto px-2">
              Join our next batch and earn globally recognized certifications!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center px-2">
              <a
                href="/explore-courses"
                className="group bg-white text-gray-900 px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl md:hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base active:scale-95"
              >
                <span className="text-lg md:text-xl group-hover:animate-bounce">🎓</span>
                <span>Explore Courses</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="tel:+91-9522220892"
                className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl md:hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base active:scale-95"
              >
                <span className="text-lg md:text-xl group-hover:animate-bounce">📞</span>
                <span>Call Now</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCertifications;
