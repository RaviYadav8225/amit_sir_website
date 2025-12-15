import React from 'react';

interface CompTIALogoProps {
  size?: number;
}

const CompTIALogo: React.FC<CompTIALogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 shadow-lg flex items-center justify-center"
      style={{ width: size, height: size, padding: '20%' }}
    >
      <svg 
        viewBox="0 0 100 100" 
        fill="white"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="40" strokeWidth="8" stroke="white" fill="none"/>
        <path d="M50 20L70 50L50 80L30 50Z" fill="white"/>
      </svg>
    </div>
  );
};

export default CompTIALogo;
