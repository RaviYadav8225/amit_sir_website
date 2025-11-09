"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageTransition() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Smooth slide transition
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-slide-transition" />
    </div>
  );
}
