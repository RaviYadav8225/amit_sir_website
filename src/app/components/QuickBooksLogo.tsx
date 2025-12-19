import React from 'react';
import Image from 'next/image';

interface QuickBooksLogoProps {
  size?: number;
}

const QuickBooksLogo: React.FC<QuickBooksLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Image 
        src="/homelogo9.png"
        alt="QuickBooks"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};

export default QuickBooksLogo;
