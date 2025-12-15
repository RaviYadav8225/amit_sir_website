import React from 'react';

interface QuickBooksLogoProps {
  size?: number;
}

const QuickBooksLogo: React.FC<QuickBooksLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="rounded-2xl bg-gradient-to-r from-green-500 to-green-700 shadow-lg flex items-center justify-center"
      style={{ width: size, height: size, padding: '20%' }}
    >
      <svg 
        viewBox="0 0 100 100" 
        fill="white"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="35" fill="white"/>
        <circle cx="50" cy="50" r="25" fill="#2CA01C"/>
        <path d="M50 25 Q65 50 50 75 Q35 50 50 25" fill="white"/>
      </svg>
    </div>
  );
};

export default QuickBooksLogo;
