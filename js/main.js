/* ========================================
   Main Module - Initialize App
   ======================================== */

const App = (() => {
  const init = () => {
    Navigation.init();
    Projects.init();
  };

  return {
    init,
  };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', App.init);
} else {
  App.init();
}
