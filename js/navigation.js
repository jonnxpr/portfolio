/* ========================================
   Navigation Module - Smooth Scroll & Menu
   ======================================== */

const Navigation = (() => {
  const init = () => {
    setupSmoothScroll();
    setupMenuAutoClose();
  };

  const setupSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  };

  const setupMenuAutoClose = () => {
    const navbarToggler = document.querySelector('.navbar__toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar__link');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      });
    });
  };

  return {
    init,
  };
})();
