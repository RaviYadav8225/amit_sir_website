import React from 'react';

interface MetaLogoProps {
  size?: number;
}

const MetaLogo: React.FC<MetaLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg flex items-center justify-center"
      style={{ width: size, height: size, padding: '20%' }}
    >
      <svg 
        viewBox="0 0 36 33" 
        fill="white"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M35 15.5c0-8.008-6.492-14.5-14.5-14.5S6 7.492 6 15.5c0 7.237 5.302 13.227 12.219 14.312V20.188H14.25v-4.688h3.969V12.5c0-3.915 2.332-6.078 5.902-6.078 1.71 0 3.496.305 3.496.305v3.844h-1.969c-1.939 0-2.543 1.204-2.543 2.438v2.991h4.328l-.692 4.688h-3.636v9.624C29.698 28.727 35 22.737 35 15.5z"/>
      </svg>
    </div>
  );
};

export default MetaLogo;