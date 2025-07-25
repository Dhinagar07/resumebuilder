import { useState, useEffect } from 'react';

const useScrollHandler = (threshold = 0.5) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollThreshold = window.innerHeight * threshold;
      setShowContent(window.scrollY > scrollThreshold);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [threshold]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return { showContent, scrollToContent };
};

export default useScrollHandler;