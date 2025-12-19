import React from 'react';
import Image from 'next/image';

interface IBMLogoProps {
  size?: number;
}

const IBMLogo: React.FC<IBMLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Image 
        src="/homelogo1.png"
        alt="IBM"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};

export default IBMLogo;