import React from 'react';
import Image from 'next/image';

interface IC3LogoProps {
  size?: number;
}

const IC3Logo: React.FC<IC3LogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Image 
        src="/Certified-Educator-1.png"
        alt="IC3"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};

export default IC3Logo;
