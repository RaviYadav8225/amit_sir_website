import React from 'react';

interface CiscoLogoProps {
  size?: number;
}

const CiscoLogo: React.FC<CiscoLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg flex items-center justify-center"
      style={{ width: size, height: size, padding: '18%' }}
    >
      <svg 
        viewBox="0 0 100 50" 
        fill="white"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="10" width="8" height="30" rx="4"/>
        <rect x="20" y="5" width="8" height="40" rx="4"/>
        <rect x="35" y="0" width="8" height="50" rx="4"/>
        <rect x="50" y="5" width="8" height="40" rx="4"/>
        <rect x="65" y="0" width="8" height="50" rx="4"/>
        <rect x="80" y="10" width="8" height="30" rx="4"/>
      </svg>
    </div>
  );
};

export default CiscoLogo;