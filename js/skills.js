/* ========================================
   Skills Module - Dynamic Rendering
   ======================================== */

const Skills = (() => {
  let skillsData = [];
  let languageListenerBound = false;

  const init = async () => {
    await loadSkillsData();
    renderSkills();
    setupLazyLoading();
    setupLanguageListener();
  };

  const loadSkillsData = async () => {
    try {
      const response = await fetch('data/skills.json');
      if (!response.ok) {
        throw new Error('Failed to load skills');
      }
      skillsData = await response.json();
    } catch (error) {
      console.error('Error loading skills:', error);
      skillsData = [];
    }
  };

  const renderSkills = () => {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = '';

    if (skillsData.length === 0) {
      container.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--color-text-secondary);">${I18n.t('skillsEmpty')}</p>`;
      return;
    }

    skillsData.forEach((skill, index) => {
      const skillCard = createSkillCard(skill, index);
      container.appendChild(skillCard);
    });
  };

  const createSkillCard = (skill, index) => {
    const card = document.createElement('li');
    card.className = 'skill-category fade-in-scroll';
    card.style.animationDelay = `${index * 0.1}s`;

    const icon = document.createElement('div');
    icon.className = 'skill-category__icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.appendChild(createSkillIcon(skill.icon));

    const title = document.createElement('h3');
    title.className = 'skill-category__title';
    title.setAttribute('lang', I18n.t('htmlLang'));
    title.textContent = I18n.resolveLocalizedValue(skill.title);

    const description = document.createElement('p');
    description.className = 'skill-category__description';
    description.setAttribute('lang', I18n.t('htmlLang'));
    description.textContent = I18n.resolveLocalizedValue(skill.description);

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(description);

    return card;
  };

  const createSkillIcon = (iconMarkup) => {
    const icon = document.createElement('i');
    icon.setAttribute('aria-hidden', 'true');

    const fallbackClass = 'fas fa-code';
    const classRegex = /class=['"]([^'"]+)['"]/i;
    const classMatch = typeof iconMarkup === 'string'
      ? classRegex.exec(iconMarkup)
      : null;

    icon.className = classMatch?.[1] || fallbackClass;
    return icon;
  };

  const setupLazyLoading = () => {
    AnimationUtils.observeFadeInSelector('#skills-container .fade-in-scroll');
  };

  const setupLanguageListener = () => {
    if (languageListenerBound) return;

    globalThis.addEventListener('languageChanged', () => {
      renderSkills();
      setupLazyLoading();
    });

    languageListenerBound = true;
  };

  return {
    init,
  };
})();
