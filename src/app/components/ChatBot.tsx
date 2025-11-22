"use client";
import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface FAQ {
  question: string;
  answer: string;
  keywords: string[];
}

interface StudentInfo {
  name: string;
  email: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);
  const [collectingInfo, setCollectingInfo] = useState<'name' | 'email' | 'done'>('name');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Advanced course data with detailed analysis
  const courseDatabase = {
    "RHCSA Certification": { fee: 15000, duration: 45, demand: "Very High", salary: "₹6-12 LPA", difficulty: "Medium", placement: 95 },
    "AWS Solutions Architect": { fee: 18000, duration: 40, demand: "Extremely High", salary: "₹8-20 LPA", difficulty: "Medium-Hard", placement: 98 },
    "Docker & Kubernetes": { fee: 20000, duration: 30, demand: "Very High", salary: "₹7-15 LPA", difficulty: "Medium", placement: 92 },
    "Python Full Stack": { fee: 25000, duration: 60, demand: "Extremely High", salary: "₹5-18 LPA", difficulty: "Medium", placement: 96 },
    "CCNA Networking": { fee: 15000, duration: 50, demand: "High", salary: "₹4-10 LPA", difficulty: "Medium", placement: 88 },
    "DevOps with Azure": { fee: 40000, duration: 60, demand: "Very High", salary: "₹8-16 LPA", difficulty: "Medium-Hard", placement: 94 },
    "RHCE Certification": { fee: 15000, duration: 35, demand: "Very High", salary: "₹8-15 LPA", difficulty: "Medium-Hard", placement: 92 },
    "Terraform": { fee: 15000, duration: 25, demand: "Very High", salary: "₹10-18 LPA", difficulty: "Medium", placement: 90 },
    "DevOps AWS + AI": { fee: 60000, duration: 50, demand: "Ultra High", salary: "₹12-25 LPA", difficulty: "Hard", placement: 96 }
  };

  const faqs: FAQ[] = [
    {
      question: "What courses do you offer?",
      answer: "We offer comprehensive IT training courses including:\n• RHCSA/RHCE (Red Hat Linux)\n• AWS Cloud Computing\n• Docker & Kubernetes\n• Python Full Stack Development\n• CCNA Networking\n• DevOps with Azure (AZ-400)\n• Terraform Infrastructure as Code\n• DevOps with AWS + AI\n• Digital Marketing\n• C/C++, Java, PHP\n• Hardware & Networking",
      keywords: ["courses", "training", "what do you offer", "programs", "subjects", "learn"]
    },
    {
      question: "What are your course fees?",
      answer: "Our course fees vary by program:\n• RHCSA Certification: ₹15,000 (45 days)\n• RHCE Certification: ₹15,000 (35 days)\n• AWS Solutions Architect: ₹18,000 (40 days)\n• Docker & Kubernetes: ₹20,000 (30 days)\n• Python Full Stack: ₹25,000 (60 days)\n• CCNA Networking: ₹15,000 (50 days)\n• Terraform: ₹15,000 (25 days)\n• DevOps with Azure: ₹40,000 (60 days)\n• DevOps AWS + AI: ₹60,000 (50 days)\n\nWe also offer flexible payment options and student discounts!",
      keywords: ["fees", "cost", "price", "payment", "money", "charges", "expensive"]
    },
    {
      question: "Where are you located?",
      answer: "📍 LITC Infotech is located at:\nGround Floor, Metro Tower\nNear Mangal City, Behind Tinku Cafe\nIndore, MP, India - 452001\n\n📞 Contact: +91-9522220892\n✉️ Email: info@litcindore.com",
      keywords: ["location", "address", "where", "contact", "phone", "email", "indore"]
    },
    {
      question: "Do you provide job placement?",
      answer: "Yes! We provide 100% placement assistance including:\n• Resume building and optimization\n• Interview preparation sessions\n• Direct company tie-ups\n• Job referrals and recommendations\n• Career counseling and guidance\n• Industry networking opportunities\n\nOur students work at top companies like TCS, Infosys, Wipro, and many more!",
      keywords: ["placement", "job", "career", "employment", "hiring", "work"]
    },
    {
      question: "What are the class timings?",
      answer: "We offer flexible timing options:\n\n🕘 Weekend Batches:\n• Saturday-Sunday: 9:00 AM - 11:00 AM\n• Saturday-Sunday: 8:00 PM - 10:00 PM\n\n🕘 Weekday Batches:\n• Monday-Friday: 8:30 AM - 10:30 AM\n• Monday-Friday: 6:00 PM - 8:00 PM\n\nSpecial timings available for working professionals!",
      keywords: ["timing", "schedule", "class", "time", "when", "hours", "weekend", "weekday"]
    },
    {
      question: "Do you provide online classes?",
      answer: "Yes! We offer both online and offline training modes:\n\n💻 Online Features:\n• Live interactive sessions\n• Recorded lectures for revision\n• Virtual labs and hands-on practice\n• One-on-one doubt clearing\n• Digital study materials\n\n🏢 Offline Features:\n• Physical classroom training\n• Direct interaction with instructors\n• Lab facilities with latest equipment\n• Group discussions and activities",
      keywords: ["online", "offline", "virtual", "remote", "classroom", "mode"]
    },
    {
      question: "What certifications will I get?",
      answer: "You'll receive multiple certifications:\n\n🏆 Industry Certifications:\n• Red Hat Certified (RHCSA/RHCE)\n• AWS Certified Solutions Architect\n• Cisco CCNA\n• Docker Certified Associate\n• Python Institute Certifications\n\n🎓 LITC Certifications:\n• Course completion certificates\n• Project completion certificates\n• Skill assessment certificates\n\nAll certifications are globally recognized!",
      keywords: ["certificate", "certification", "degree", "qualification", "credential"]
    },
    {
      question: "Who are your instructors?",
      answer: "Our expert faculty includes:\n\n👨‍🏫 Ram Sir - Lead Instructor:\n• 15+ years industry experience\n• Red Hat Certified Architect\n• AWS Solutions Architect\n• Docker & Kubernetes Expert\n\n👩‍🏫 Expert Faculty Team:\n• Industry professionals\n• Multiple certifications\n• Real-world project experience\n• Dedicated to student success\n\nAll instructors are certified and experienced professionals!",
      keywords: ["instructor", "teacher", "faculty", "trainer", "staff", "ram sir"]
    },
    {
      question: "How to enroll or register?",
      answer: "Easy enrollment process:\n\n📞 Call us: +91-9522220892\n💬 WhatsApp: +91-9522220892\n✉️ Email: info@litcindore.com\n🏢 Visit: Metro Tower, Indore\n\n📋 Required Documents:\n• Educational certificates\n• ID proof (Aadhar/PAN)\n• Passport size photos\n• Fee payment receipt\n\nWe'll guide you through the entire process!",
      keywords: ["enroll", "register", "admission", "join", "apply", "signup"]
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes! Comprehensive study materials included:\n\n📚 What you get:\n• Detailed course handbooks\n• Video tutorials and recordings\n• Lab practice guides\n• Exam preparation materials\n• Industry case studies\n• Project templates\n\n💻 Digital Resources:\n• Online portal access\n• Practice tests and quizzes\n• Code repositories\n• Reference documentation\n\nAll materials are regularly updated!",
      keywords: ["study material", "books", "notes", "resources", "handouts", "materials"]
    }
  ];

  const welcomeMessage: Message = {
    id: '1',
    text: "👋 Hey there! Welcome to LITC INFOTECH!\n\n🤖 I'm LITC Siri - your smart career advisor!\n\nBefore we start exploring amazing career opportunities, I'd love to know you better! 😊\n\n� **Please tell me your name:**",
    isBot: true,
    timestamp: new Date()
  };

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([welcomeMessage]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Advanced AI conversation engine
  const findBestMatch = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Advanced conversation patterns
    const conversationPatterns = [
      // Best course analysis
      {
        patterns: ["best course", "which course", "recommend course", "top course", "popular course", "good course"],
        response: () => {
          const bestCourses = Object.entries(courseDatabase)
            .sort((a, b) => b[1].placement - a[1].placement)
            .slice(0, 3);
          
          return `🎯 Based on our placement data and industry demand, here are the TOP 3 courses I recommend:\n\n` +
            bestCourses.map((course, i) => 
              `${i + 1}. **${course[0]}** 🏆\n` +
              `   💰 Fee: ₹${course[1].fee.toLocaleString()}\n` +
              `   📅 Duration: ${course[1].duration} days\n` +
              `   📈 Market Demand: ${course[1].demand}\n` +
              `   💼 Expected Salary: ${course[1].salary}\n` +
              `   🎯 Placement Rate: ${course[1].placement}%\n`
            ).join('\n') +
            `\n💡 **My Analysis**: AWS Solutions Architect has the highest placement rate and salary potential, perfect for cloud career!\n\nWhich one interests you most? I can provide detailed information! 😊`;
        }
      },
      
      // Salary comparison
      {
        patterns: ["salary", "package", "pay", "earning", "income", "money"],
        response: () => {
          const salaryRanking = Object.entries(courseDatabase)
            .sort((a, b) => parseInt(b[1].salary.split('-')[1]) - parseInt(a[1].salary.split('-')[1]));
          
          return `💰 **Salary Analysis Based on Market Research:**\n\n` +
            salaryRanking.map((course, i) => 
              `${i + 1}. ${course[0]}: ${course[1].salary}\n`
            ).join('') +
            `\n🔥 **Hot Tip**: Cloud technologies (AWS, DevOps) offer the highest salaries!\n` +
            `📊 **Average Growth**: 15-25% salary hike after certification\n\n` +
            `Which salary range are you targeting? I can suggest the perfect course! 🎯`;
        }
      },
      
      // Budget-based recommendations
      {
        patterns: ["cheap", "affordable", "budget", "low cost", "minimum fee", "less money"],
        response: () => {
          const budgetCourses = Object.entries(courseDatabase)
            .sort((a, b) => a[1].fee - b[1].fee)
            .slice(0, 3);
          
          return `💵 **Budget-Friendly Options (Best Value for Money):**\n\n` +
            budgetCourses.map((course, i) => 
              `${i + 1}. **${course[0]}**\n` +
              `   💰 Fee: ₹${course[1].fee.toLocaleString()} (${course[1].duration} days)\n` +
              `   💼 Expected Salary: ${course[1].salary}\n` +
              `   📊 ROI: ${Math.round((parseInt(course[1].salary.split('-')[0]) * 100000) / course[1].fee)}x return\n`
            ).join('\n') +
            `\n🎯 **Smart Choice**: Docker & Kubernetes offers excellent ROI at just ₹20,000!\n` +
            `💡 **Pro Tip**: We offer EMI options and student discounts too!\n\nInterested in any of these? 😊`;
        }
      },
      
      // Duration-based queries
      {
        patterns: ["quick", "fast", "short", "less time", "duration", "how long"],
        response: () => {
          const quickCourses = Object.entries(courseDatabase)
            .sort((a, b) => a[1].duration - b[1].duration)
            .slice(0, 3);
          
          return `⚡ **Quick Certification Courses (Fast Track to Success):**\n\n` +
            quickCourses.map((course, i) => 
              `${i + 1}. **${course[0]}**\n` +
              `   ⏱️ Duration: ${course[1].duration} days\n` +
              `   💰 Fee: ₹${course[1].fee.toLocaleString()}\n` +
              `   🎯 Placement Rate: ${course[1].placement}%\n`
            ).join('\n') +
            `\n🚀 **Fast Track Special**: Docker & Kubernetes - Get certified in just 30 days!\n` +
            `📅 **Flexible Timing**: Weekend batches available for working professionals\n\nReady to start quickly? 😊`;
        }
      },
      
      // Difficulty level queries
      {
        patterns: ["easy", "difficult", "hard", "beginner", "advanced", "level"],
        response: () => {
          return `📚 **Course Difficulty Levels & My Recommendations:**\n\n` +
            `**🟢 Beginner-Friendly:**\n` +
            `• Python Full Stack - Perfect for coding beginners\n` +
            `• RHCSA Certification - Great Linux starting point\n\n` +
            `**🟡 Intermediate Level:**\n` +
            `• Docker & Kubernetes - Some tech background helpful\n` +
            `• CCNA Networking - Basic networking knowledge plus\n\n` +
            `**🔴 Advanced Level:**\n` +
            `• AWS Solutions Architect - Cloud experience preferred\n` +
            `• DevOps with Ansible - Multiple tech stack knowledge\n\n` +
            `💡 **My Suggestion**: Start with your current skill level, we provide complete support!\n` +
            `👨‍🏫 **Instructor Support**: Ram Sir personally guides every student\n\nWhat's your current experience level? 😊`;
        }
      },
      
      // Job market analysis
      {
        patterns: ["job", "placement", "hiring", "market", "demand", "opportunities"],
        response: () => {
          const demandRanking = Object.entries(courseDatabase)
            .sort((a, b) => b[1].placement - a[1].placement);
          
          return `📈 **Live Job Market Analysis (Updated This Month):**\n\n` +
            demandRanking.map((course, i) => 
              `${i + 1}. **${course[0]}**\n` +
              `   🎯 Placement Rate: ${course[1].placement}%\n` +
              `   📊 Market Demand: ${course[1].demand}\n` +
              `   💼 Avg. Salary: ${course[1].salary}\n`
            ).join('\n') +
            `\n🔥 **Hot Jobs Right Now:**\n` +
            `• Cloud Engineers (AWS) - 500+ openings\n` +
            `• DevOps Engineers - 300+ openings\n` +
            `• Python Developers - 800+ openings\n\n` +
            `💼 **Our Placement Partners**: TCS, Infosys, Wipro, Accenture, and 50+ more!\n` +
            `🎯 **Success Rate**: 96% students get placed within 3 months\n\nReady to join the success story? 😊`;
        }
      }
    ];
    
    // Check advanced patterns first
    for (const pattern of conversationPatterns) {
      for (const p of pattern.patterns) {
        if (input.includes(p)) {
          return pattern.response();
        }
      }
    }
    
    // Original FAQ matching (enhanced)
    let bestMatch: FAQ | null = null;
    let highestScore = 0;

    for (const faq of faqs) {
      let score = 0;
      
      // Enhanced scoring system
      if (input.includes(faq.question.toLowerCase())) {
        score += 15;
      }
      
      for (const keyword of faq.keywords) {
        if (input.includes(keyword.toLowerCase())) {
          score += 3;
        }
      }
      
      // Better partial matching
      const questionWords = faq.question.toLowerCase().split(' ');
      const inputWords = input.split(' ');
      
      for (const qWord of questionWords) {
        for (const iWord of inputWords) {
          if (qWord.includes(iWord) && iWord.length > 2) {
            score += 2;
          }
        }
      }
      
      if (score > highestScore) {
        highestScore = score;
        bestMatch = faq;
      }
    }

    if (bestMatch && highestScore > 2) {
      return bestMatch.answer;
    }

    // Enhanced greeting responses
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! 👋 I'm LITC Siri, your smart career advisor!\n\n🎯 I can help you with:\n• Finding the BEST course for your goals\n• Salary and placement analysis\n• Budget-friendly recommendations\n• Quick certification paths\n\nWhat's your career goal? Let's find the perfect course! 😊";
    }
    
    if (input.includes('thank') || input.includes('thanks')) {
      return "You're absolutely welcome! 😊\n\n🌟 Remember: Your success is our mission!\n📞 Need immediate help? Call +91-9522220892\n\nAny other questions about your tech career journey? I'm here to guide you! 🚀";
    }
    
    if (input.includes('bye') || input.includes('goodbye')) {
      return "Goodbye! 👋\n\n🎯 Before you go:\n• Book a FREE consultation: +91-9522220892\n• Visit us: Metro Tower, Indore\n• Follow up: info@litcindore.com\n\n🌟 Your tech career transformation awaits! See you soon! ✨";
    }

    // Intelligent fallback with contextual help
    return `🤔 I want to give you the PERFECT answer! Let me help you better:\n\n💡 **Try asking me:**\n• "Which is the best course for me?"\n• "What salary can I expect?"\n• "Show me budget-friendly courses"\n• "Which course has best placements?"\n• "I want quick certification"\n\n🎯 **Or tell me about:**\n• Your career goals\n• Your budget range\n• Your experience level\n• Timeline preferences\n\n💬 I'm designed to understand natural conversation - just ask me anything! 😊\n\n📞 **Urgent help?** Call +91-9522220892 right now!`;
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);

    // Handle info collection phase
    if (collectingInfo === 'name') {
      setTimeout(() => {
        setStudentInfo({ name: currentInput, email: '' });
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: `Nice to meet you, ${currentInput}! 😊\n\n📧 **Now, please share your email address:**\n\n(We'll use this to send you course details and updates)`,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setCollectingInfo('email');
        setIsTyping(false);
      }, 800);
      return;
    }

    if (collectingInfo === 'email') {
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(currentInput)) {
        setTimeout(() => {
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: `Oops! 😅 That doesn't look like a valid email address.\n\n📧 **Please enter a valid email** (e.g., name@example.com):`,
            isBot: true,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
          setIsTyping(false);
        }, 800);
        return;
      }

      // Send enquiry email to admin
      const sendEnquiryEmail = async () => {
        try {
          const response = await fetch('/api/chatbot-enquiry', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: studentInfo?.name,
              email: currentInput
            })
          });

          const result = await response.json();
          console.log('📧 Enquiry Email Result:', result);
        } catch (error) {
          console.error('❌ Failed to send enquiry email:', error);
        }
      };

      setTimeout(async () => {
        setStudentInfo(prev => prev ? { ...prev, email: currentInput } : { name: '', email: currentInput });
        
        // Send enquiry email in background
        sendEnquiryEmail();
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: `Perfect! ✅ Thank you, ${studentInfo?.name}!\n\n🎉 **Your details are saved:**\n📛 Name: ${studentInfo?.name}\n📧 Email: ${currentInput}\n\n✉️ **Our team has been notified and will contact you soon!**\n\n━━━━━━━━━━━━━━━━━━━━\n\n🧠 Now I'm ready to help you! I can:\n• Analyze courses and recommend the BEST one for YOU\n• Compare salaries, placements, and career growth\n• Find budget-friendly options that fit your needs\n• Suggest quick certification paths\n• Give real-time job market insights\n\n💬 **Talk to me naturally!** Ask things like:\n"Which course is best for me?", "What salary can I expect?", "Show me affordable courses"\n\n🚀 Ready to find your perfect tech career path? Let's chat! 😊`,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setCollectingInfo('done');
        setIsTyping(false);
      }, 1000);
      return;
    }

    // Normal conversation after info collection
    setTimeout(() => {
      const botResponse = findBestMatch(currentInput);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "Which is the best course for me?",
    "Show me high salary courses",
    "What are budget-friendly options?",
    "Quick certification courses?",
    "Job placement success rate?"
  ];

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl">🤖</span>
            <span className="font-semibold text-xs md:text-sm hidden sm:block">LITC Siri</span>
          </div>
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
            1
          </div>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-2 md:right-6 w-[calc(100vw-16px)] md:w-96 h-[70vh] md:h-[600px] max-h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold text-white">LITC Siri</h3>
                <p className="text-white/80 text-xs">AI Assistant • Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors text-xl"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-white text-gray-800 shadow-md'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isBot ? 'text-gray-500' : 'text-white/70'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions (show only after info collection) */}
          {messages.length <= 1 && collectingInfo === 'done' && (
            <div className="p-3 border-t bg-white">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(question)}
                    className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={
                  collectingInfo === 'name' 
                    ? "Type your name here..." 
                    : collectingInfo === 'email'
                    ? "Type your email here..."
                    : "Ask me anything about LITC Infotech..."
                }
                className="flex-1 p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 placeholder-gray-500 bg-white"
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-lg">📤</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;