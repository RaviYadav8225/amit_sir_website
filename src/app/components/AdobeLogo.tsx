import React from 'react';
import Image from 'next/image';

interface AdobeLogoProps {
  size?: number;
}

const AdobeLogo: React.FC<AdobeLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="flex items-center justify-center"
      style={{ height: size }}
    >
      <Image
        src="/images/adobe-logo.png"
        alt="Adobe Logo"
        width={size * 2.5}
        height={size}
        className="object-contain"
      />
    </div>
  );
};

export default AdobeLogo;