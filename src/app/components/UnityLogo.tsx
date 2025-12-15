import React from 'react';

interface UnityLogoProps {
  size?: number;
}

const UnityLogo: React.FC<UnityLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="rounded-2xl bg-gradient-to-br from-gray-800 to-black shadow-lg flex items-center justify-center"
      style={{ width: size, height: size, padding: '20%' }}
    >
      <svg 
        viewBox="0 0 100 100" 
        fill="white"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 10L80 30V70L50 90L20 70V30L50 10ZM50 25L35 35V65L50 75L65 65V35L50 25Z"/>
      </svg>
    </div>
  );
};

export default UnityLogo;