/* ========================================
   I18n Module - Real Internationalization
   ======================================== */

const I18n = (() => {
  const supportedLanguages = new Set(['pt-BR', 'en', 'es']);
  const defaultLanguage = 'pt-BR';
  const fallbackLanguage = 'en';
  const storageKey = 'portfolio-language';

  let translations = {};
  let currentLanguage = defaultLanguage;
  let initialized = false;
  let initPromise;
  let languageSwitcherBound = false;

  const normalizeLanguage = (languageCode) => {
    if (!languageCode) return null;

    const normalized = languageCode.toLowerCase();
    if (normalized === 'pt-br' || normalized === 'pt') return 'pt-BR';
    if (normalized.startsWith('en')) return 'en';
    if (normalized.startsWith('es')) return 'es';

    return null;
  };

  const resolveInitialLanguage = () => {
    const searchParams = new URLSearchParams(globalThis.location.search);
    const urlLanguage = normalizeLanguage(searchParams.get('lang'));
    if (urlLanguage && supportedLanguages.has(urlLanguage)) {
      return urlLanguage;
    }

    return defaultLanguage;
  };

  const getNestedValue = (source, keyPath) => {
    if (!source) return undefined;

    return keyPath.split('.').reduce((current, key) => {
      if (current && Object.hasOwn(current, key)) {
        return current[key];
      }

      return undefined;
    }, source);
  };

  const t = (key, params = {}) => {
    const current = getNestedValue(translations[currentLanguage], key);
    const fallback = getNestedValue(translations[fallbackLanguage], key);
    const defaultValue = getNestedValue(translations[defaultLanguage], key);

    const rawValue = current ?? fallback ?? defaultValue;
    if (typeof rawValue !== 'string') {
      return key;
    }

    return Object.entries(params).reduce((accumulator, [paramKey, paramValue]) => {
      return accumulator.replaceAll(`{${paramKey}}`, String(paramValue));
    }, rawValue);
  };

  const resolveLocalizedValue = (value) => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return value;
    }

    return value[currentLanguage]
      ?? value[fallbackLanguage]
      ?? value[defaultLanguage]
      ?? Object.values(value)[0]
      ?? '';
  };

  const setText = (selector, key) => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.textContent = t(key);
  };

  const setHTML = (selector, key) => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.innerHTML = t(key);
  };

  const setAttribute = (selector, attributeName, key) => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.setAttribute(attributeName, t(key));
  };

  const applyStaticTranslations = () => {
    document.documentElement.lang = t('htmlLang');
    document.title = t('pageTitle');

    setAttribute('#meta-description', 'content', 'metaDescription');
    setAttribute('#meta-og-title', 'content', 'metaOgTitle');
    setAttribute('#meta-og-description', 'content', 'metaOgDescription');
    setAttribute('#meta-og-locale', 'content', 'ogLocale');
    setAttribute('#meta-twitter-title', 'content', 'metaTwitterTitle');
    setAttribute('#meta-twitter-description', 'content', 'metaTwitterDescription');

    setText('#skip-main-link', 'skipToMain');
    setAttribute('#main-nav', 'aria-label', 'navLabel');
    setAttribute('#nav-brand', 'aria-label', 'navBrandAria');
    setAttribute('#nav-toggle', 'aria-label', 'navToggleAria');

    setText('#nav-about', 'navAbout');
    setText('#nav-skills', 'navSkills');
    setText('#nav-education', 'navEducation');
    setText('#nav-projects', 'navProjects');

    setText('#language-switcher-label', 'languageSelectorLabel');

    setAttribute('#navbar-contacts', 'aria-label', 'contactsLabel');
    setAttribute('#footer-contacts', 'aria-label', 'footerContactsLabel');

    setAttribute('#nav-contact-email', 'title', 'email');
    setAttribute('#nav-contact-email', 'aria-label', 'email');
    setAttribute('#nav-contact-linkedin', 'title', 'linkedin');
    setAttribute('#nav-contact-linkedin', 'aria-label', 'linkedin');
    setAttribute('#nav-contact-github', 'title', 'github');
    setAttribute('#nav-contact-github', 'aria-label', 'github');

    setAttribute('#footer-contact-email', 'title', 'email');
    setAttribute('#footer-contact-email', 'aria-label', 'email');
    setAttribute('#footer-contact-linkedin', 'title', 'linkedin');
    setAttribute('#footer-contact-linkedin', 'aria-label', 'linkedin');
    setAttribute('#footer-contact-github', 'title', 'github');
    setAttribute('#footer-contact-github', 'aria-label', 'github');

    setText('#hero-role', 'heroRole');
    setHTML('#hero-description-1', 'heroDescription1');
    setText('#hero-description-2', 'heroDescription2');
    setText('#hero-stack-title', 'heroStackTitle');
    setAttribute('#hero-tech-icons', 'aria-label', 'heroTechAria');

    setText('#cta-projects', 'ctaProjects');
    setText('#cta-contact', 'ctaContact');

    setText('#skills-title', 'skillsTitle');
    setText('#skills-description', 'skillsDescription');
    setAttribute('#skills-container', 'aria-label', 'skillsListAria');

    setText('#education-title', 'educationTitle');
    setText('#education-description', 'educationDescription');
    setText('#education-title-1', 'educationTitle1');
    setText('#education-period-1', 'educationPeriod1');
    setText('#education-description-1', 'educationDescription1');
    setText('#education-title-2', 'educationTitle2');
    setText('#education-period-2', 'educationPeriod2');
    setText('#education-description-2', 'educationDescription2');
    setText('#education-title-3', 'educationTitle3');
    setText('#education-period-3', 'educationPeriod3');
    setText('#education-description-3', 'educationDescription3');

    setText('#projects-title', 'projectsTitle');
    setText('#projects-description', 'projectsDescription');
    setAttribute('#projects-container', 'aria-label', 'projectsListAria');

    setText('#footer-rights-text', 'footerRights');

    const contentLanguage = t('htmlLang');
    ['#hero-role', '#hero-description-1', '#hero-description-2', '#skills-title', '#skills-description', '#education-title', '#education-description', '#projects-title', '#projects-description'].forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute('lang', contentLanguage);
      }
    });

    updateLanguageSwitcherUI();
  };

  const updateLanguageSwitcherUI = () => {
    const selectedInput = document.querySelector(`#language-switcher input[value="${currentLanguage}"]`);
    if (selectedInput) {
      selectedInput.checked = true;
    }
  };

  const updateLanguageInUrl = (languageCode) => {
    const url = new URL(globalThis.location.href);

    if (languageCode === defaultLanguage) {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', languageCode);
    }

    globalThis.history.replaceState({}, '', url);
  };

  const applyLanguage = (languageCode) => {
    currentLanguage = supportedLanguages.has(languageCode) ? languageCode : defaultLanguage;
    localStorage.setItem(storageKey, currentLanguage);

    applyStaticTranslations();

    globalThis.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: currentLanguage },
    }));
  };

  const setLanguage = (languageCode) => {
    const normalized = normalizeLanguage(languageCode) ?? fallbackLanguage;
    applyLanguage(normalized);
    updateLanguageInUrl(normalized);
  };

  const setupLanguageSwitcher = () => {
    if (languageSwitcherBound) return;

    const switcher = document.querySelector('#language-switcher');
    if (!switcher) return;

    switcher.addEventListener('change', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      if (target.name !== 'language-switch') return;

      setLanguage(target.value);
    });

    languageSwitcherBound = true;
  };

  const loadTranslations = async () => {
    const response = await fetch('data/i18n.json');
    if (!response.ok) {
      throw new Error('Failed to load i18n data');
    }

    translations = await response.json();
  };

  const init = async () => {
    if (initialized) return;

    if (!initPromise) {
      initPromise = (async () => {
        try {
          await loadTranslations();
          applyLanguage(resolveInitialLanguage());
          setupLanguageSwitcher();
          initialized = true;
        } catch (error) {
          console.error('Error initializing i18n:', error);
        }
      })();
    }

    await initPromise;
  };

  return {
    init,
    t,
    setLanguage,
    getLanguage: () => currentLanguage,
    resolveLocalizedValue,
    getFallbackLanguage: () => fallbackLanguage,
    getDefaultLanguage: () => defaultLanguage,
  };
})();
