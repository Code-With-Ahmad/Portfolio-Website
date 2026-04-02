document.addEventListener('DOMContentLoaded', () => {
  try {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  } catch (e) {
    console.warn('Lucide icons failed to load:', e);
  }

  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== Theme Toggle =====
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    html.classList.remove('dark');
  } else {
    html.classList.add('dark');
  }

  function toggleTheme() {
    document.body.classList.add('theme-switching');

    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');

    setTimeout(() => {
      document.body.classList.remove('theme-switching');
    }, 700);
  }

  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-mobile')?.addEventListener('click', toggleTheme);

  // ===== Render Personal Info (Hero + Brand) =====
  const heroName = document.getElementById('hero-name');
  const heroRole = document.getElementById('hero-role');
  const heroDesc = document.getElementById('hero-description');
  const heroImage = document.getElementById('hero-image');
  const heroTopTalLink = document.getElementById('hero-toptal-link');

  if (heroName) heroName.textContent = PERSONAL_INFO.name;
  if (heroRole) heroRole.textContent = PERSONAL_INFO.role;
  if (heroDesc) heroDesc.textContent = PERSONAL_INFO.heroDescription;
  if (heroImage) {
    const heroImageContainer = heroImage.parentElement;
    const heroFallbackLetter = (PERSONAL_INFO.name || 'A').charAt(0).toUpperCase();

    const showHeroFallback = () => {
      if (!heroImageContainer || heroImageContainer.querySelector('.hero-image-fallback')) return;
      heroImage.remove();
      heroImageContainer.innerHTML = `
        <div class="hero-image-fallback w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl font-bold text-white">${heroFallbackLetter}</div>
      `;
    };

    heroImage.onerror = showHeroFallback;
    heroImage.onload = () => {
      heroImage.classList.remove('hidden');
    };

    heroImage.src = PERSONAL_INFO.profileImage;
    heroImage.alt = `${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`;
  }

  if (heroTopTalLink) {
    const topTalLink = typeof PERSONAL_INFO.topTalLink === 'string'
      ? PERSONAL_INFO.topTalLink.trim()
      : '';

    if (topTalLink) {
      heroTopTalLink.href = topTalLink;
      heroTopTalLink.classList.remove('hidden');
    } else {
      heroTopTalLink.removeAttribute('href');
      heroTopTalLink.classList.add('hidden');
    }
  }

  const cvButtons = [
    document.getElementById('download-cv-btn'),
    document.getElementById('download-cv-btn-mobile'),
  ];
  cvButtons.forEach(btn => {
    if (!btn || !PERSONAL_INFO.cvPath) return;
    btn.href = PERSONAL_INFO.cvPath;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.removeAttribute('download');
  });

  document.querySelectorAll('.brand-name').forEach(el => {
    el.textContent = PERSONAL_INFO.name;
  });

  // ===== Render About Section (experience text + stat cards) =====
  const aboutExp = document.getElementById('about-experience');
  if (aboutExp) aboutExp.textContent = `${PERSONAL_INFO.experience} years of professional experience`;

  const aboutStats = document.getElementById('about-stats');
  if (aboutStats) {
    aboutStats.innerHTML = ABOUT_STATS.map(stat => `
      <div class="stat-card">
        <div class="text-3xl font-bold text-primary mb-1">${stat.value}</div>
        <div class="text-gray-500 dark:text-gray-400 text-sm">${stat.label}</div>
      </div>
    `).join('');
  }

  // ===== Render Social Links =====
  const mainSocials = ['github', 'linkedin', 'twitter', 'email'];

  function renderSocialLinks(containerId, linkClass, iconSize) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = mainSocials.map(key => {
      const s = SOCIAL_LINKS[key];
      const isExternal = !s.url.startsWith('mailto:');
      return `<a href="${s.url}"${isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''} class="${linkClass}" aria-label="${s.label}"><i data-lucide="${s.icon}" class="${iconSize}"></i></a>`;
    }).join('');
  }

  renderSocialLinks('hero-socials', 'social-icon', 'w-5 h-5');
  renderSocialLinks('footer-socials', 'text-gray-500 hover:text-primary transition-colors', 'w-4 h-4');

  const whatsappFloat = document.getElementById('whatsapp-float');
  if (whatsappFloat) whatsappFloat.href = SOCIAL_LINKS.whatsapp.url;

  // ===== Render Skills =====
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    skillsGrid.innerHTML = SKILLS.map(skill => `
      <div class="skill-card group">
        <div class="flex items-center gap-4 mb-5">
          <div class="w-12 h-12 rounded-xl bg-${skill.color}/10 flex items-center justify-center text-${skill.color} group-hover:bg-${skill.color} group-hover:text-white transition-all duration-300">
            <i data-lucide="${skill.icon}" class="w-6 h-6"></i>
          </div>
          <div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">${skill.title}</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">${skill.subtitle}</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-2">
          ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // ===== Render Projects =====
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer) {
    const techTag = (t) =>
      `<span class="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400">${t}</span>`;

    projectsContainer.innerHTML = PROJECTS.map(proj => {
      const tagsHTML = proj.tags.map((tag, i) => {
        const c = proj.tagColors[i] || 'primary';
        return `<span class="px-3 py-1 text-xs font-medium rounded-full bg-${c}/10 text-${c}">${tag}</span>`;
      }).join('');

      const techHTML = `
        <div class="flex flex-wrap gap-2 mt-5 pt-5 border-t border-gray-100 dark:border-white/5">
          ${proj.techStack.map(techTag).join('')}
        </div>`;

      if (proj.featured && proj.modules) {
        const modulesHTML = proj.modules.map(mod => `
          <div class="p-5 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-${mod.color}/20 transition-all duration-300">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-lg bg-${mod.color}/10 flex items-center justify-center">
                <i data-lucide="${mod.icon}" class="w-4 h-4 text-${mod.color}"></i>
              </div>
              <div>
                <h4 class="text-gray-900 dark:text-white font-semibold">${mod.name}</h4>
                <p class="text-gray-500 text-xs">${mod.subtitle}</p>
              </div>
            </div>
            <ul class="space-y-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
              ${mod.points.map(pt => `
                <li class="flex items-start gap-2">
                  <i data-lucide="check-circle-2" class="w-4 h-4 mt-0.5 text-${mod.color} flex-shrink-0"></i>
                  ${pt}
                </li>`).join('')}
            </ul>
            ${mod.link ? `<a href="${mod.link}" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs font-medium text-${mod.color} hover:text-primary transition-colors">
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              ${mod.linkText}
            </a>` : ''}
          </div>`).join('');

        return `
          <div class="project-card group mb-6 lg:mb-8">
            <div class="flex items-start justify-between mb-5">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <i data-lucide="${proj.icon}" class="w-6 h-6"></i>
              </div>
              <div class="flex gap-2">${tagsHTML}</div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">${proj.title}</h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm mb-5 leading-relaxed">${proj.description}</p>
            <div class="grid md:grid-cols-2 gap-5">${modulesHTML}</div>
            ${techHTML}
          </div>`;
      }

      return `
        <div class="project-card group">
          <div class="flex items-start justify-between mb-4">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <i data-lucide="${proj.icon}" class="w-6 h-6"></i>
            </div>
            <div class="flex gap-2">${tagsHTML}</div>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">${proj.title}</h3>
          <ul class="space-y-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            ${(proj.points || []).map(pt => `
              <li class="flex items-start gap-2">
                <i data-lucide="check-circle-2" class="w-4 h-4 mt-0.5 text-primary flex-shrink-0"></i>
                ${pt}
              </li>`).join('')}
          </ul>
          ${techHTML}
        </div>`;
    }).join('');
  }

  // ===== Render Experience =====
  const expTimeline = document.getElementById('experience-timeline');
  if (expTimeline) {
    expTimeline.innerHTML = EXPERIENCE.map(exp => `
      <div class="relative pl-8 border-l-2 border-${exp.color}/30">
        <div class="absolute w-4 h-4 bg-${exp.color} rounded-full -left-[9px] top-0 ring-4 ring-gray-100 dark:ring-dark-light/50"></div>
        <div class="bg-white dark:bg-dark-card/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/5 hover:border-${exp.color}/20 transition-all duration-300">
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span class="px-3 py-1 text-xs font-semibold rounded-full bg-${exp.color}/10 text-${exp.color}">${exp.badge}</span>
            <span class="text-gray-500 text-sm">${exp.period}</span>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">${exp.title}</h3>
          <p class="text-${exp.color} font-medium mb-1 flex items-center gap-2">
            <i data-lucide="${exp.icon}" class="w-4 h-4"></i>
            ${exp.company}
          </p>
          <p class="text-gray-500 text-xs mb-4 flex items-center gap-1.5">
            <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
            ${exp.location}
          </p>
          <ul class="space-y-2 text-gray-500 dark:text-gray-400 text-sm">
            ${exp.points.map(pt => `
              <li class="flex items-start gap-2">
                <i data-lucide="chevron-right" class="w-4 h-4 mt-0.5 text-${exp.color} flex-shrink-0"></i>
                ${pt}
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  // ===== Render Education =====
  const eduTimeline = document.getElementById('education-timeline');
  if (eduTimeline) {
    eduTimeline.innerHTML = EDUCATION.map(edu => {
      const isGray = edu.color === 'gray';
      const dotColor = isGray ? 'bg-gray-500' : `bg-${edu.color}`;
      const borderColor = isGray ? 'border-gray-600/30' : `border-${edu.color}/30`;
      const hoverBorder = isGray ? 'hover:border-gray-500/20' : `hover:border-${edu.color}/20`;
      const badgeClass = isGray
        ? 'bg-gray-200 dark:bg-gray-500/10 text-gray-600 dark:text-gray-400'
        : `bg-${edu.color}/10 text-${edu.color}`;
      const textColor = isGray ? 'text-gray-500 dark:text-gray-400' : `text-${edu.color}`;

      let extraHTML = '';
      if (edu.cgpa) {
        extraHTML = `
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-${edu.color}/5 border border-${edu.color}/10">
              <i data-lucide="award" class="w-5 h-5 text-${edu.color}"></i>
              <div>
                <div class="text-xs text-gray-500 uppercase tracking-wider">CGPA</div>
                <div class="text-lg font-bold text-gray-900 dark:text-white">${edu.cgpa}</div>
              </div>
            </div>
          </div>`;
      }
      if (edu.location) {
        extraHTML = `
          <p class="text-gray-500 text-xs flex items-center gap-1.5">
            <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
            ${edu.location}
          </p>`;
      }

      return `
        <div class="relative pl-8 border-l-2 ${borderColor}">
          <div class="absolute w-4 h-4 ${dotColor} rounded-full -left-[9px] top-0 ring-4 ring-white dark:ring-dark/50"></div>
          <div class="bg-white dark:bg-dark-card/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/5 ${hoverBorder} transition-all duration-300">
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span${edu.badgeId ? ` id="${edu.badgeId}"` : ''} class="px-3 py-1 text-xs font-semibold rounded-full ${badgeClass}">${edu.badgeText}</span>
              <span class="text-gray-500 text-sm">${edu.period}</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">${edu.institution}</h3>
            <p class="${textColor} font-medium mb-${edu.cgpa ? '4' : '1'} flex items-center gap-2">
              <i data-lucide="${edu.icon}" class="w-4 h-4"></i>
              ${edu.degree}
            </p>
            ${extraHTML}
          </div>
        </div>`;
    }).join('');
  }

  // ===== Graduation Status =====
  const gradStatus = document.getElementById('grad-status');
  if (gradStatus) {
    const graduated = new Date() >= new Date(2026, 8);
    gradStatus.textContent = graduated ? 'Graduated' : 'Graduating 2026';
    if (graduated) {
      gradStatus.classList.remove('bg-accent/10', 'text-accent');
      gradStatus.classList.add('bg-green-500/10', 'text-green-400');
    }
  }

  // ===== Render Contact Cards =====
  const contactCards = document.getElementById('contact-cards');
  if (contactCards) {
    const phone = SOCIAL_LINKS.phone;
    const email = SOCIAL_LINKS.email;

    const cardIcon = (icon) => `
      <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <i data-lucide="${icon}" class="w-5 h-5"></i>
      </div>`;

    contactCards.innerHTML = `
      <a href="${phone.url}" class="contact-card group">
        ${cardIcon('phone')}
        <div>
          <h4 class="text-gray-900 dark:text-white font-medium">${phone.label}</h4>
          <p class="text-gray-500 dark:text-gray-400 text-sm">${phone.display}</p>
        </div>
      </a>
      <div class="contact-card group">
        ${cardIcon('map-pin')}
        <div>
          <h4 class="text-gray-900 dark:text-white font-medium">Location</h4>
          <p class="text-gray-500 dark:text-gray-400 text-sm">${PERSONAL_INFO.location}</p>
        </div>
      </div>
      <a href="${email.url}" class="contact-card group">
        ${cardIcon('mail')}
        <div>
          <h4 class="text-gray-900 dark:text-white font-medium">${email.label}</h4>
          <p class="text-gray-500 dark:text-gray-400 text-sm">${email.address}</p>
        </div>
      </a>
      <div id="contact-socials" class="flex items-center gap-4 pt-4"></div>
    `;

    renderSocialLinks('contact-socials', 'social-icon-lg', 'w-5 h-5');
  }

  // ===== Contact Description =====
  const contactDesc = document.getElementById('contact-description');
  if (contactDesc) contactDesc.textContent = CONTACT_INFO.description;

  // ===== Contact Form =====
  const contactForm = document.getElementById('contact-form');
  const formRedirect = document.getElementById('form-redirect');

  if (contactForm) {
    contactForm.action = `https://formsubmit.co/${SOCIAL_LINKS.email.address}`;

    const subjectInput = contactForm.querySelector('input[name="_subject"]');
    if (subjectInput) subjectInput.value = CONTACT_INFO.formSubject;

    if (formRedirect) {
      formRedirect.value = window.location.href.split('#')[0] + '#contact';
    }

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalHTML = btn.innerHTML;
      btn.innerHTML = '<span class="inline-flex items-center gap-2"><svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>Sending...</span>';
      btn.disabled = true;

      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      })
        .catch(() => null)
        .finally(() => {
          btn.innerHTML = '<span class="inline-flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Message Sent!</span>';
          btn.classList.remove('bg-primary', 'hover:bg-primary-dark');
          btn.classList.add('bg-green-600');
          contactForm.reset();

          setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.disabled = false;
            btn.classList.remove('bg-green-600');
            btn.classList.add('bg-primary', 'hover:bg-primary-dark');
            if (typeof lucide !== 'undefined') lucide.createIcons();
          }, 3000);
        });
    });
  }

  // ===== Re-init Lucide after all dynamic renders =====
  try {
    if (typeof lucide !== 'undefined') lucide.createIcons();
  } catch (e) {
    console.warn('Lucide re-init failed:', e);
  }

  // ===== Sticky Navbar =====
  const handleScroll = () => {
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
    updateActiveNav();
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ===== Mobile Menu Toggle =====
  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('hidden', !menuOpen);
    menuIconOpen.classList.toggle('hidden', menuOpen);
    menuIconClose.classList.toggle('hidden', !menuOpen);
  });

  const closeMobileMenu = () => {
    menuOpen = false;
    mobileMenu.classList.add('hidden');
    menuIconOpen.classList.remove('hidden');
    menuIconClose.classList.add('hidden');
  };

  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // ===== Active Nav Highlighting =====
  function updateActiveNav() {
    const scrollY = window.scrollY + 100;
    let currentId = '';

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }

  // ===== Scroll Reveal =====
  const revealElements = document.querySelectorAll('.section-reveal');

  revealElements.forEach(el => el.classList.add('hidden-for-reveal'));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden-for-reveal');
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  // ===== Skill Tag Stagger Animation =====
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const tags = entry.target.querySelectorAll('.skill-tag');
          tags.forEach((tag, index) => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(10px)';
            setTimeout(() => {
              tag.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              tag.style.opacity = '1';
              tag.style.transform = 'translateY(0)';
            }, index * 50);
          });
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('#skills .section-reveal').forEach(el => skillObserver.observe(el));

  // ===== Smooth hover effect for project cards =====
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });
});
