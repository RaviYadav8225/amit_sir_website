import React from 'react';
import Image from 'next/image';

interface TallyLogoProps {
  size?: number;
}

const TallyLogo: React.FC<TallyLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Image 
        src="/homelogo3.png"
        alt="Tally"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};

export default TallyLogo;
