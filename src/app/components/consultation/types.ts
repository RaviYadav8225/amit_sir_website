// Types for consultation form
export interface ConsultationFormData {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  location: string;
  
  // Professional Background
  currentRole: string;
  experience: 'Fresher' | '1-3 years' | '3-5 years' | '5+ years';
  industry: string;
  currentSkills: string[];
  
  // Learning Goals
  careerGoals: string;
  interestedCourses: string[];
  targetCertifications: string[];
  timelineToStart: 'Immediate' | '1-2 months' | '3-6 months' | 'Planning ahead';
  learningMode: 'Online' | 'Offline' | 'Hybrid';
  
  // Consultation Preferences
  preferredTimeSlots: string[];
  budget: string;
  specificQuestions: string;
  
  // Selected slot
  consultationDate?: string;
  consultationTime?: string;
}

export interface CourseOption {
  id: string;
  name: string;
  category: string;
  level: string;
  duration: string;
  popular?: boolean;
}

export interface TimeSlot {
  date: string;
  time: string;
  available: boolean;
  instructor?: string;
}

export const INDUSTRIES = [
  'Information Technology',
  'Banking & Finance',
  'Healthcare',
  'Education',
  'E-commerce',
  'Manufacturing',
  'Government',
  'Consulting',
  'Telecommunications',
  'Other'
];

export const POPULAR_COURSES = [
  { id: 'aws-saa', name: 'AWS Solutions Architect Associate', category: 'AWS Cloud', level: 'Intermediate', duration: '10-12 Weeks', popular: true },
  { id: 'rhcsa', name: 'RHCSA - Red Hat System Administrator', category: 'RedHat Linux', level: 'Intermediate', duration: '8-10 Weeks', popular: true },
  { id: 'ccna', name: 'CCNA Training 200-301', category: 'Cisco', level: 'Intermediate', duration: '10-12 Weeks', popular: true },
  { id: 'ceh', name: 'Certified Ethical Hacker (CEH)', category: 'Cybersecurity', level: 'Intermediate', duration: '10-12 Weeks', popular: true },
  { id: 'docker', name: 'Docker Certified Associate', category: 'Docker', level: 'Intermediate', duration: '6-8 Weeks' },
  { id: 'kubernetes', name: 'Kubernetes Administrator (CKA)', category: 'Kubernetes', level: 'Advanced', duration: '10-12 Weeks' },
  { id: 'jenkins', name: 'Jenkins Certified Engineer', category: 'DevOps', level: 'Intermediate', duration: '8-10 Weeks' },
  { id: 'terraform', name: 'Terraform Associate', category: 'DevOps', level: 'Intermediate', duration: '8-10 Weeks' },
  { id: 'azure', name: 'Azure Administrator', category: 'Microsoft', level: 'Intermediate', duration: '10-12 Weeks' },
  { id: 'python', name: 'Python Full Stack Development', category: 'Python', level: 'Intermediate', duration: '12-14 Weeks' }
];

export const BUDGET_RANGES = [
  'Under ₹15,000',
  '₹15,000 - ₹25,000',
  '₹25,000 - ₹35,000',
  '₹35,000 - ₹50,000',
  'Above ₹50,000',
  'Need guidance on pricing'
];

export const TIME_SLOTS = [
  'Morning (9 AM - 12 PM)',
  'Afternoon (12 PM - 4 PM)',
  'Evening (4 PM - 7 PM)',
  'Night (7 PM - 9 PM)',
  'Weekend mornings',
  'Weekend evenings'
];