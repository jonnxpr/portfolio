/* ========================================
   Animation Utilities - Shared Scroll Effects
   ======================================== */

const AnimationUtils = (() => {
  const observeFadeInSelector = (selector, options = {}) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInOnScroll 0.6s ease-out forwards';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  };

  return {
    observeFadeInSelector,
  };
})();
