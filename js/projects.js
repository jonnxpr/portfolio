/* ========================================
   Projects Module - Dynamic Rendering
   ======================================== */

const Projects = (() => {
  let projectsData = [];

  const init = async () => {
    await loadProjectsData();
    renderProjects();
    setupLazyLoading();
  };

  const loadProjectsData = async () => {
    try {
      const response = await fetch('data/projects.json');
      if (!response.ok) {
        throw new Error('Failed to load projects');
      }
      projectsData = await response.json();
    } catch (error) {
      console.error('Error loading projects:', error);
      projectsData = [];
    }
  };

  const renderProjects = () => {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = '';

    if (projectsData.length === 0) {
      container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--color-text-secondary);">Projetos em desenvolvimento...</p>';
      return;
    }

    projectsData.forEach((project, index) => {
      const projectCard = createProjectCard(project, index);
      container.appendChild(projectCard);
    });
  };

  const createProjectCard = (project, index) => {
    const card = document.createElement('li');
    card.className = 'project-card fade-in-scroll';
    card.style.animationDelay = `${index * 0.1}s`;

    // Badge de projeto atual
    if (project.current) {
      const currentBadge = document.createElement('div');
      currentBadge.className = 'project-card__current-badge';
      currentBadge.setAttribute('aria-label', 'Projeto atual: Empresa onde estou trabalhando atualmente');
      currentBadge.innerHTML = '<i class="fas fa-star" aria-hidden="true"></i> Projeto Atual';
      card.appendChild(currentBadge);
    }

    const image = document.createElement('div');
    image.className = 'project-card__image';
    image.setAttribute('aria-hidden', 'true');
    image.appendChild(createProjectIcon(project.icon));

    const content = document.createElement('div');
    content.className = 'project-card__content';

    const title = document.createElement('h3');
    title.className = 'project-card__title';
    title.textContent = project.title;

    const description = document.createElement('p');
    description.className = 'project-card__description';
    description.textContent = project.description;

    const techContainer = document.createElement('div');
    techContainer.className = 'project-card__technologies';
    techContainer.setAttribute('aria-label', 'Tecnologias utilizadas');

    project.technologies.forEach((tech) => {
      const badge = document.createElement('span');
      badge.className = 'tech-badge';
      badge.textContent = tech;
      badge.setAttribute('role', 'doc-biblioentry');
      techContainer.appendChild(badge);
    });

    const linksContainer = document.createElement('div');
    linksContainer.className = 'project-card__links';
    linksContainer.setAttribute('role', 'navigation');
    linksContainer.setAttribute('aria-label', 'Links do projeto');

    // Renderizar links personalizados dinamicamente
    if (project.links) {
      Object.entries(project.links).forEach(([linkName, linkUrl]) => {
        const link = document.createElement('a');
        link.href = linkUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'project-link';
        
        // Definir ícone com base no nome do link
        let iconClass = 'fas fa-external-link-alt'; // Default
        if (linkName.toLowerCase() === 'github') {
          iconClass = 'fab fa-github';
        }
        
        link.setAttribute('aria-label', `Abrir ${linkName} em nova aba`);

        const icon = document.createElement('i');
        icon.className = iconClass;
        icon.setAttribute('aria-hidden', 'true');

        link.appendChild(icon);
        link.appendChild(document.createTextNode(` ${linkName}`));
        linksContainer.appendChild(link);
      });
    }

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(techContainer);
    content.appendChild(linksContainer);

    card.appendChild(image);
    card.appendChild(content);

    return card;
  };

  const createProjectIcon = (iconMarkup) => {
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
    AnimationUtils.observeFadeInSelector('#projects-container .fade-in-scroll');
  };

  return {
    init,
  };
})();
