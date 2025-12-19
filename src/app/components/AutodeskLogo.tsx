import React from 'react';
import Image from 'next/image';

interface AutodeskLogoProps {
  size?: number;
}

const AutodeskLogo: React.FC<AutodeskLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Image 
        src="/autodesk-logo.png"
        alt="Autodesk"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};

export default AutodeskLogo;
