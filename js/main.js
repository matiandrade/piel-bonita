/* ================================================
   PIEL BONITA - JavaScript principal
   Módulos: navegación, hamburguesa, slider,
            animaciones scroll, año copyright
   ================================================ */

'use strict';

/* ------------------------------------------------
   Navegación: sticky + link activo
   ------------------------------------------------ */
function initNavigation() {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.header__nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Clase scrolled al bajar
  const scrollObserver = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle('header--scrolled', !entry.isIntersecting);
    },
    { rootMargin: `-${header.offsetHeight}px 0px 0px 0px` }
  );

  const sentinel = document.querySelector('.hero');
  if (sentinel) scrollObserver.observe(sentinel);

  // Link activo según sección visible
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const href = link.getAttribute('href').replace('#', '');
          link.classList.toggle('active', href === id);
        });
      });
    },
    {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0,
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  // Smooth scroll en anclas (para navegadores que no lo soporten nativamente)
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = header.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}


/* ------------------------------------------------
   Menú hamburguesa (mobile)
   ------------------------------------------------ */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('nav');

  if (!hamburger || !nav) return;

  function toggleMenu(open) {
    hamburger.classList.toggle('is-open', open);
    nav.classList.toggle('nav--open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('is-open');
    toggleMenu(!isOpen);
  });

  // Cerrar al hacer clic en un enlace del menú
  nav.querySelectorAll('.header__nav-link').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger.classList.contains('is-open')) {
      toggleMenu(false);
      hamburger.focus();
    }
  });
}


/* ------------------------------------------------
   Slider de testimonios
   ------------------------------------------------ */
function initTestimonialsSlider() {
  const track    = document.getElementById('testimonials-track');
  const dots     = document.querySelectorAll('.testimonials__dot');
  const prevBtn  = document.getElementById('prev-btn');
  const nextBtn  = document.getElementById('next-btn');

  if (!track || !dots.length) return;

  let current   = 0;
  let autoPlayId;
  const total   = dots.length;
  const DELAY   = 5000;

  function goTo(index) {
    // Wrap circular
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach((dot, i) => {
      const isActive = i === current;
      dot.classList.toggle('testimonials__dot--active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  }

  function nextSlide() { goTo(current + 1); }
  function prevSlide() { goTo(current - 1); }

  // Auto-play
  function startAutoPlay() {
    autoPlayId = setInterval(nextSlide, DELAY);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayId);
  }

  // Controles
  nextBtn?.addEventListener('click', () => { stopAutoPlay(); nextSlide(); startAutoPlay(); });
  prevBtn?.addEventListener('click', () => { stopAutoPlay(); prevSlide(); startAutoPlay(); });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      stopAutoPlay();
      goTo(Number(dot.dataset.index));
      startAutoPlay();
    });
  });

  // Pausar al hover
  const slider = document.getElementById('testimonials-slider');
  slider?.addEventListener('mouseenter', stopAutoPlay);
  slider?.addEventListener('mouseleave', startAutoPlay);

  // Soporte táctil (swipe)
  let touchStartX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 40) return;
    stopAutoPlay();
    if (diff > 0) nextSlide(); else prevSlide();
    startAutoPlay();
  }, { passive: true });

  // Soporte teclado en el slider
  track.setAttribute('tabindex', '0');
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { stopAutoPlay(); nextSlide(); startAutoPlay(); }
    if (e.key === 'ArrowLeft')  { stopAutoPlay(); prevSlide(); startAutoPlay(); }
  });

  startAutoPlay();
}


/* ------------------------------------------------
   Animaciones al scroll (Intersection Observer)
   ------------------------------------------------ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
}


/* ------------------------------------------------
   Año actual en el footer
   ------------------------------------------------ */
function initCopyright() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}


/* ------------------------------------------------
   Inicialización
   ------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHamburger();
  initTestimonialsSlider();
  initScrollAnimations();
  initCopyright();
});
