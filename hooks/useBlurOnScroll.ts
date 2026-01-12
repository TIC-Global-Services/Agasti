import { useEffect, useRef, useState } from "react";

export const useBlurOnScroll = <T extends HTMLElement = HTMLElement>(threshold: number = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: "50px 0px 50px 0px"
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  // No blur effect on mobile, blur effect on desktop
  const blurClass = isMobile 
    ? '' // No animation classes on mobile
    : (isVisible 
        ? 'filter-none opacity-100' 
        : 'filter blur-sm opacity-70');

  return { elementRef, blurClass, isVisible };
};