
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import CartModal from "./CartModal";

export default function Navbar() {
  const [navBg, setNavBg] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setNavBg(scrolled > 20);
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse animate-float-slow" />
        <div className="absolute top-20 right-16 w-6 h-6 bg-purple-400/20 rounded-full animate-bounce animate-float-slow2" />
        <div className="absolute top-32 left-1/4 w-3 h-3 bg-pink-400/25 rounded-full animate-pulse animate-float-slow" />
        <div className="absolute top-16 right-1/3 w-5 h-5 bg-blue-300/20 rounded-full animate-bounce animate-float-slow2" />
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-900/20 via-blue-900/20 to-purple-900/20 z-50 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out shadow-lg"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`w-full fixed top-3 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-700 ease-out max-w-[95%] xl:max-w-[1400px] mx-auto rounded-3xl ${
          navBg
            ? "bg-gradient-to-r from-gray-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-2xl shadow-2xl border border-white/30"
            : "bg-gradient-to-r from-gray-900/80 via-blue-900/80 to-purple-900/80 backdrop-blur-xl shadow-xl border border-white/20"
        }`}
        style={{
          backdropFilter: 'blur(25px) saturate(200%)',
          WebkitBackdropFilter: 'blur(25px) saturate(200%)',
        }}
      >
              <div className="flex items-center justify-between px-6 py-3">
        {/* Enhanced Logo with Floating Particles */}
        <Link href="/" className="flex items-center gap-4 group relative">
          {/* Floating particles around logo */}
          <div className="absolute -inset-10 pointer-events-none">
            <div className="absolute top-2 left-3 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce animate-float-slow" />
            <div className="absolute -bottom-1 right-2 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse animate-float-slow2" />
            <div className="absolute top-4 -right-2 w-1 h-1 bg-pink-400/40 rounded-full animate-bounce animate-float-slow" />
          </div>
          
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse" />
            
            {/* LITC Logo */}
            <div className="relative h-12 w-12 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 drop-shadow-2xl">
              <img 
                src="/litc-logo.svg" 
                alt="LITC INFOTECH" 
                className="w-full h-full object-contain filter brightness-110"
              />
              
              {/* Live indicator */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="font-black text-2xl bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent tracking-tight group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-500 drop-shadow-lg font-inter">
              LITC INFOTECH
            </span>
            <div className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full w-0 group-hover:w-full transition-all duration-500 mt-1 shadow-lg" />
          </div>
        </Link>

        {/* Desktop Nav Links */}
                  {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About Us" />
          
          {/* Courses & Certification Dropdown */}
          <DropdownMenu 
            label="Courses & Certification"
            items={[
              { 
                href: "/courses/aws-cloud", 
                label: "AWS Cloud", 
                icon: "☁️",
                subItems: [
                  { href: "/aws/cloud-services", label: "AWS Cloud Services", icon: "🌐" },
                  { href: "/aws/certified-cloud-practitioner", label: "AWS Certified Cloud Practitioner (CLF-C02)", icon: "📋" },
                  { href: "/aws/certified-solutions-architect-associate", label: "AWS Certified Solutions Architect – Associate (SAA-C03)", icon: "🏗️" },
                  { href: "/aws/certified-sysops-administrator-associate", label: "AWS Certified SysOps Administrator – Associate (SOA-C02)", icon: "⚙️" },
                  { href: "/aws/certified-developer-associate", label: "AWS Certified Developer – Associate (DVA-C02)", icon: "💻" },
                  { href: "/aws/certified-devops-engineer-professional", label: "AWS Certified DevOps Engineer – Professional (DOP-C02)", icon: "🚀" },
                  { href: "/aws/certified-advanced-networking-specialty", label: "AWS Certified Advanced Networking – Specialty (ANS-C01)", icon: "🌐" },
                  { href: "/aws/certified-security-specialty", label: "AWS Certified Security – Specialty (SCS-C02)", icon: "🔒" }
                ]
              },
              { 
                href: "/courses/redhat-linux", 
                label: "RedHat Linux", 
                icon: "🔴",
                subItems: [
                  { href: "/certifications/rhcsa", label: "RHCSA - Red Hat Certified System Administrator (EX200)", icon: "🏅" },
                  { href: "/certifications/rhce", label: "RHCE (Ansible) - RedHat Certified Engineer (EX294)", icon: "⚙️" },
                  { href: "/certifications/openstack", label: "Open Stack Cloud Administration (EX210)", icon: "☁️" },
                  { href: "/certifications/enterprise-virtualization", label: "Red Hat Enterprise Virtualization (EX318)", icon: "💻" },
                  { href: "/certifications/ansible-rh358", label: "Service Management Through Ansible (RH358)", icon: "🔧" },
                  { href: "/certifications/rhel-diagnostics", label: "Red Hat Enterprise Linux Diagnostics and Troubleshooting (RH342)", icon: "🔍" },
                  { href: "/certifications/rh415", label: "Red Hat Security: Linux in Physical, Virtual, and Cloud (RH415)", icon: "🔒" },
                  { href: "/certifications/rhca", label: "RHCA - Red Hat Certified Architect", icon: "🏛️" },
                  { href: "/openshift/certified-specialist-administration-ex280", label: "Red Hat Certified Specialist in OpenShift Administration (EX280)", icon: "🚀" },
                  { href: "/openshift/certified-application-developer-ex288", label: "Red Hat Certified OpenShift Application Developer (EX288)", icon: "🐳" },
                  { href: "/openshift/certified-specialist-automation-integration-ex380", label: "Red Hat Certified Specialist in OpenShift Automation and Integration (EX380)", icon: "⚙️" }
                ]
              },

              { 
                href: "/courses/cisco-ccna", 
                label: "Cisco CCNA", 
                icon: "🌐",
                subItems: [
                  { href: "/cisco/ccst-networking", label: "CCST Networking (100-150)", icon: "🌟" },
                  { href: "/cisco/ccna-training-200-301", label: "CCNA Training (200-301)", icon: "🔧" },
                  { href: "/cisco/ccnp-training-350-401", label: "CCNP Training (350-401)", icon: "⚙️" },
                  { href: "/cisco/vmware-datacenter-virtualization", label: "VMware DataCenter Virtualization Training (VCP-DCV)", icon: "🖥️" }
                ]
              },
              { 
                href: "/courses/python", 
                label: "Python", 
                icon: "🐍",
                subItems: [
                  { href: "/python/python-programming", label: "Python Programming (PCEP/PCAP)", icon: "🐍" },
                  { href: "/python/full-stack-development", label: "Python Full Stack Development (Django/Flask)", icon: "💻" }
                ]
              },
              { 
                href: "/courses/docker", 
                label: "Docker", 
                icon: "🐳",
                subItems: [
                  { href: "/docker/docker-fundamentals", label: "Docker Fundamentals Training (DO101)", icon: "🐳" },
                  { href: "/docker/docker-certified-associate", label: "Docker Certified Associate (DCA)", icon: "🏅" },
                  { href: "/docker/containerization-microservices", label: "Containerization & Microservices (DO180)", icon: "📦" }
                ]
              },
              { 
                href: "/courses/kubernetes", 
                label: "Kubernetes", 
                icon: "⚙️",
                subItems: [
                  { href: "/kubernetes/kubernetes-fundamentals", label: "Kubernetes Fundamentals Training (DO180)", icon: "⚙️" },
                  { href: "/kubernetes/certified-kubernetes-administrator", label: "Certified Kubernetes Administrator (CKA)", icon: "🏅" },
                  { href: "/kubernetes/certified-kubernetes-application-developer", label: "Certified Kubernetes Application Developer (CKAD)", icon: "💻" },
                  { href: "/kubernetes/certified-kubernetes-security-specialist", label: "Certified Kubernetes Security Specialist (CKS)", icon: "🔒" },
                  { href: "/kubernetes/openshift-administration", label: "OpenShift Administration for Kubernetes (DO280)", icon: "🚀" }
                ]
              },
              { 
                href: "/courses/microsoft", 
                label: "Microsoft", 
                icon: "🪟",
                subItems: [
                  { href: "/microsoft/az-900", label: "Microsoft Azure Fundamentals (AZ-900)", icon: "☁️" },
                  { href: "/microsoft/az-104", label: "Microsoft Azure Administrator Associate (AZ-104)", icon: "⚙️" },
                  { href: "/microsoft/az-204", label: "Microsoft Azure Developer Associate (AZ-204)", icon: "💻" },
                  { href: "/microsoft/dp-900", label: "Microsoft Azure Data Fundamentals (DP-900)", icon: "📊" },
                  { href: "/microsoft/dp-203", label: "Microsoft Azure Data Engineer Associate (DP-203)", icon: "🔧" },
                  { href: "/microsoft/ai-900", label: "Microsoft Azure AI Fundamentals (AI-900)", icon: "🤖" },
                  { href: "/microsoft/ai-102", label: "Microsoft Azure AI Engineer Associate (AI-102)", icon: "🧠" },
                  { href: "/microsoft/ms-365", label: "Microsoft 365 Certified: Modern Desktop Administrator Associate (MD-100/101)", icon: "🖥️" },
                  { href: "/microsoft/ms-700", label: "Microsoft Teams Administrator Associate (MS-700)", icon: "👥" }
                ]
              },
              { 
                href: "/courses/devops", 
                label: "DevOps", 
                icon: "🚀",
                subItems: [
                  { href: "/devops/jenkins-certified-engineer", label: "Jenkins Certified Engineer (JCE)", icon: "⚙️" },
                  { href: "/devops/gitlab-certified-associate", label: "GitLab Certified Associate (GCA)", icon: "🦊" },
                  { href: "/devops/ansible-automation", label: "Red Hat Certified Specialist in Ansible Automation (EX407)", icon: "🔧" },
                  { href: "/devops/terraform-associate", label: "HashiCorp Certified: Terraform Associate (003)", icon: "🏗️" },
                  { href: "/devops/aws-devops-engineer", label: "AWS Certified DevOps Engineer Professional (DOP-C02)", icon: "☁️" },
                  { href: "/devops/google-cloud-devops", label: "Google Cloud Professional Cloud DevOps Engineer", icon: "🌐" },
                  { href: "/kubernetes/certified-kubernetes-administrator", label: "Certified Kubernetes Administrator (CKA)", icon: "☸️" },
                  { href: "/docker/docker-certified-associate", label: "Docker Certified Associate (DCA)", icon: "🐳" },
                  { href: "/devops/prometheus-certified-associate", label: "Prometheus Certified Associate (PCA)", icon: "📊" },
                  { href: "/devops/chef-fundamentals", label: "Chef Fundamentals Certification", icon: "👨‍🍳" },
                  { href: "/devops/puppet-certified-professional", label: "Puppet Certified Professional (PCP)", icon: "🎭" }
                ]
              },
              { 
                href: "/courses/cybersecurity", 
                label: "Cybersecurity", 
                icon: "🔒",
                subItems: [
                  { href: "/cisco/ccst-networking", label: "CCST Networking (100-150)", icon: "🌟" },
                  { href: "/cybersecurity/ceh", label: "Certified Ethical Hacker (CEH v12)", icon: "👨‍💻" }
                ]
              },
            ]}
          />
          
          {/* Services Dropdown */}
          <DropdownMenu 
            label="Services"
            items={[
              { href: "/services/web-hosting", label: "Web Hosting", icon: "🌐" },
              { href: "/services/internship", label: "Internship Programs", icon: "🎓" },
              { href: "/services/web-development", label: "Web Development", icon: "💻" },
            ]}
          />
          
          <NavLink href="/gallery" label="Gallery" />
          <NavLink href="/contact" label="Contact Us" />
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Live Classes Indicator */}
          <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full text-xs font-semibold animate-pulse shadow-xl hover:bg-white/20 transition-all duration-300 font-poppins">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
            <span>Live Classes</span>
          </div>

          {/* Cart Icon */}
          <CartModal />

          {/* Notification Bell */}
          <button className="hidden md:flex relative p-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-lg transition-all duration-300 group shadow-xl hover:shadow-2xl hover:scale-110 text-white" aria-label="Notifications">
            <span className="text-lg group-hover:animate-bounce">🔔</span>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce shadow-lg border-2 border-white">
              3
            </div>
          </button>

          {/* Enhanced Contact Button */}
          <a 
            href="tel:+91-9522220892" 
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group relative overflow-hidden backdrop-blur-md border border-white/30 font-poppins"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="text-sm group-hover:scale-110 transition-transform duration-300 relative z-10">📞</span>
            <span className="group-hover:tracking-wide transition-all duration-300 relative z-10">Call Now</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping opacity-75" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
          </a>
          
          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1 group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110"
            aria-label="Toggle mobile menu"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 ease-out ${
        mobileMenuOpen 
          ? 'max-h-screen opacity-100 pb-6' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-8 pt-6 space-y-4 bg-white/10 backdrop-blur-2xl border-t border-white/20 rounded-b-3xl">
          <MobileNavLink href="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
          <MobileNavLink href="/about" label="About Us" onClick={() => setMobileMenuOpen(false)} />
          <MobileNavLink href="/courses" label="Courses" onClick={() => setMobileMenuOpen(false)} />
          <MobileNavLink href="/services" label="Services" onClick={() => setMobileMenuOpen(false)} />
          <MobileNavLink href="/gallery" label="Gallery" onClick={() => setMobileMenuOpen(false)} />
          <MobileNavLink href="/contact" label="Contact Us" onClick={() => setMobileMenuOpen(false)} />
          
          <div className="pt-5 border-t border-white/20">
            <a 
              href="tel:+91-9522220892" 
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-7 py-4 rounded-xl font-bold text-lg shadow-xl w-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group backdrop-blur-md border border-white/30 font-poppins"
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">📞</span>
              <span className="group-hover:tracking-wide transition-all duration-300">Call +91-9522220892</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

// Enhanced Helper Components with Footer-matching Glassmorphism
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href} 
      className="relative px-4 py-2 text-white/90 font-bold text-sm hover:text-white transition-all duration-300 group rounded-lg hover:bg-white/10 hover:backdrop-blur-md hover:scale-105 hover:shadow-lg border border-transparent hover:border-white/20 font-poppins"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 group-hover:w-4/5 transition-all duration-500 rounded-full shadow-lg" />
      <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-blue-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-blue-400/10 rounded-lg transition-all duration-300" />
    </Link>
  );
}

function DropdownMenu({ label, items }: { 
  label: string; 
  items: Array<{ href: string; label: string; icon: string; subItems?: Array<{ href: string; label: string; icon: string }> }> 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setActiveSubmenu(null);
      }}
    >
      <button className="relative px-4 py-2 text-white/90 font-bold text-sm hover:text-white transition-all duration-300 flex items-center gap-1 rounded-lg hover:bg-white/10 hover:backdrop-blur-md hover:scale-105 hover:shadow-lg border border-transparent hover:border-white/20 font-poppins">
        <span className="relative z-10">{label}</span>
        <span className={`text-xs transition-all duration-500 ${isOpen ? 'rotate-180 text-blue-300' : ''}`}>▼</span>
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 group-hover:w-4/5 transition-all duration-500 rounded-full shadow-lg" />
      </button>
      
      <div className={`absolute left-0 top-full mt-2 bg-gradient-to-br from-gray-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-2xl border border-white/30 rounded-xl shadow-2xl min-w-[250px] z-10 transform transition-all duration-500 ${
        isOpen 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible translate-y-3'
      }`}>
        <div className="p-3">
          {items.map((item, index) => (
            <div key={index} className="relative">
              {item.subItems ? (
                <div 
                  className="relative"
                  onMouseEnter={() => setActiveSubmenu(index)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <div className="flex items-center justify-between gap-3 px-3 py-2.5 hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 rounded-lg group/item hover:scale-105 hover:shadow-md border border-transparent hover:border-white/20 text-white/90 hover:text-white cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="text-sm group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300">{item.icon}</span>
                      <span className="font-bold text-sm group-hover/item:text-blue-300 group-hover/item:translate-x-1 transition-all duration-300 font-poppins">{item.label}</span>
                    </div>
                    <span className="text-xs">▶</span>
                  </div>
                  
                  {/* Submenu */}
                  <div className={`absolute left-full top-0 ml-2 bg-gradient-to-br from-gray-800/95 via-blue-800/95 to-purple-800/95 backdrop-blur-2xl border border-white/30 rounded-xl shadow-2xl min-w-[350px] z-20 transform transition-all duration-500 ${
                    activeSubmenu === index
                      ? 'opacity-100 visible translate-x-0' 
                      : 'opacity-0 invisible translate-x-3'
                  }`}>
                    <div className="p-3">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex}
                          href={subItem.href} 
                          className="flex items-center gap-3 px-3 py-2.5 hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 rounded-lg group/subitem hover:scale-105 hover:shadow-md border border-transparent hover:border-white/20 text-white/90 hover:text-white"
                        >
                          <span className="text-sm group-hover/subitem:scale-125 group-hover/subitem:rotate-12 transition-all duration-300">{subItem.icon}</span>
                          <span className="font-bold text-xs group-hover/subitem:text-blue-300 group-hover/subitem:translate-x-1 transition-all duration-300 font-poppins">{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  href={item.href} 
                  className="flex items-center gap-3 px-3 py-2.5 hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 rounded-lg group/item hover:scale-105 hover:shadow-md border border-transparent hover:border-white/20 text-white/90 hover:text-white"
                >
                  <span className="text-sm group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300">{item.icon}</span>
                  <span className="font-bold text-sm group-hover/item:text-blue-300 group-hover/item:translate-x-1 transition-all duration-300 font-poppins">{item.label}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavLink({ href, label, onClick }: { 
  href: string; 
  label: string; 
  onClick: () => void;
}) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block px-6 py-5 text-white/95 font-bold text-lg hover:text-white hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 rounded-xl border border-transparent hover:border-white/20 hover:scale-105 hover:shadow-lg group font-poppins"
    >
      <span className="group-hover:translate-x-2 transition-transform duration-300">{label}</span>
    </Link>
  );
}
