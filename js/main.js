/* ========================================
   Main Module - Initialize App
   ======================================== */

const App = (() => {
  const init = () => {
    // Definir ano dinâmico do copyright
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }

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
