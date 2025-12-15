import React from 'react';

interface AutodeskLogoProps {
  size?: number;
}

const AutodeskLogo: React.FC<AutodeskLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg flex items-center justify-center"
      style={{ width: size, height: size, padding: '20%' }}
    >
      <svg 
        viewBox="0 0 100 100" 
        fill="white"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 90L50 10L90 90H70L50 50L30 90H10Z"/>
      </svg>
    </div>
  );
};

export default AutodeskLogo;
