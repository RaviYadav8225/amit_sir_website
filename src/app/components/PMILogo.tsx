import React from 'react';
import Image from 'next/image';

interface PMILogoProps {
  size?: number;
}

const PMILogo: React.FC<PMILogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Image 
        src="/Untitled-design.webp"
        alt="PMI"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};

export default PMILogo;
