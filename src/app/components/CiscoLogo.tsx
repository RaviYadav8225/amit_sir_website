import React from 'react';
import Image from 'next/image';

interface CiscoLogoProps {
  size?: number;
}

const CiscoLogo: React.FC<CiscoLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Image 
        src="/homelogo4.png"
        alt="Cisco"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};

export default CiscoLogo;