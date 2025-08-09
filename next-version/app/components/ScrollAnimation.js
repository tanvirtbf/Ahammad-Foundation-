'use client';
import { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, animation = 'fade-in', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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
  }, [delay]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 transform translate-y-8';
    
    switch (animation) {
      case 'fade-in':
        return 'opacity-100 transform translate-y-0';
      case 'slide-left':
        return 'opacity-100 transform translate-x-0';
      case 'slide-right':
        return 'opacity-100 transform translate-x-0';
      case 'scale-up':
        return 'opacity-100 transform scale-100';
      default:
        return 'opacity-100 transform translate-y-0';
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case 'slide-left':
        return 'opacity-0 transform -translate-x-8';
      case 'slide-right':
        return 'opacity-0 transform translate-x-8';
      case 'scale-up':
        return 'opacity-0 transform scale-95';
      default:
        return 'opacity-0 transform translate-y-8';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? getAnimationClass() : getInitialClass()
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
