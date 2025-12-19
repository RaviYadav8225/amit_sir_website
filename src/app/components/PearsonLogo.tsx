import React from 'react';
import Image from 'next/image';

interface PearsonLogoProps {
  size?: number;
}

const PearsonLogo: React.FC<PearsonLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Image 
        src="/homelogo12.png"
        alt="Pearson VUE"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};

export default PearsonLogo;
