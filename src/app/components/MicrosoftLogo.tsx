import React from 'react';

interface MicrosoftLogoProps {
  size?: number;
}

const MicrosoftLogo: React.FC<MicrosoftLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="rounded-2xl bg-white shadow-lg flex items-center justify-center p-2"
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 23 23" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="#F25022" width="10" height="10"/>
        <rect fill="#7FBA00" x="11" width="10" height="10"/>
        <rect fill="#00A4EF" y="11" width="10" height="10"/>
        <rect fill="#FFB900" x="11" y="11" width="10" height="10"/>
      </svg>
    </div>
  );
};

export default MicrosoftLogo;