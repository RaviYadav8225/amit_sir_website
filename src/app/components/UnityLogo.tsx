import React from 'react';
import Image from 'next/image';

interface UnityLogoProps {
  size?: number;
}

const UnityLogo: React.FC<UnityLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Image 
        src="/homelogo13.png"
        alt="Unity"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};

export default UnityLogo;