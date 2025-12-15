import React from 'react';

interface IBMLogoProps {
  size?: number;
}

const IBMLogo: React.FC<IBMLogoProps> = ({ size = 60 }) => {
  return (
    <div 
      className="rounded-2xl bg-white shadow-lg flex items-center justify-center p-2"
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 160 64" 
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#1F70C1">
          {/* Bar 1 - Top */}
          <rect x="0" y="0" width="28" height="6" />
          <rect x="36" y="0" width="52" height="6" />
          <rect x="96" y="0" width="64" height="6" />
          
          {/* Bar 2 */}
          <rect x="0" y="8" width="28" height="6" />
          <rect x="36" y="8" width="52" height="6" />
          <rect x="96" y="8" width="64" height="6" />
          
          {/* Bar 3 - I, B, M separated */}
          <rect x="4" y="16" width="20" height="6" />
          <rect x="40" y="16" width="18" height="6" />
          <rect x="62" y="16" width="22" height="6" />
          <rect x="100" y="16" width="18" height="6" />
          <rect x="124" y="16" width="16" height="6" />
          <rect x="144" y="16" width="14" height="6" />
          
          {/* Bar 4 - Middle with B curve */}
          <rect x="4" y="24" width="20" height="6" />
          <rect x="40" y="24" width="44" height="6" />
          <rect x="100" y="24" width="18" height="6" />
          <rect x="120" y="24" width="9" height="6" />
          <rect x="131" y="24" width="9" height="6" />
          <rect x="144" y="24" width="14" height="6" />
          
          {/* Bar 5 - Middle with M peaks */}
          <rect x="4" y="32" width="20" height="6" />
          <rect x="40" y="32" width="18" height="6" />
          <rect x="62" y="32" width="22" height="6" />
          <rect x="100" y="32" width="18" height="6" />
          <rect x="120" y="32" width="9" height="6" />
          <rect x="131" y="32" width="9" height="6" />
          <rect x="144" y="32" width="14" height="6" />
          
          {/* Bar 6 */}
          <rect x="4" y="40" width="20" height="6" />
          <rect x="40" y="40" width="18" height="6" />
          <rect x="62" y="40" width="22" height="6" />
          <rect x="100" y="40" width="18" height="6" />
          <rect x="124" y="40" width="16" height="6" />
          <rect x="144" y="40" width="14" height="6" />
          
          {/* Bar 7 */}
          <rect x="0" y="50" width="28" height="6" />
          <rect x="36" y="50" width="52" height="6" />
          <rect x="96" y="50" width="64" height="6" />
          
          {/* Bar 8 - Bottom */}
          <rect x="0" y="58" width="28" height="6" />
          <rect x="36" y="58" width="52" height="6" />
          <rect x="96" y="58" width="64" height="6" />
        </g>
      </svg>
    </div>
  );
};

export default IBMLogo;