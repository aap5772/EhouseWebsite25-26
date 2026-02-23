/* =========================================================
   Engineering House — Shared Components
   Injects NavBar + Footer into every page
   ========================================================= */

const NAV_HTML = `
<nav class="navbar" id="main-nav">
  <a href="index.html" class="navbar__logo" aria-label="Engineering House Home">
    <span class="navbar__logo-stack" aria-hidden="true">
      <img
        src="images/LogoOutside.png"
        alt=""
        class="navbar__logo-layer navbar__logo-layer--outer"
        id="nav-logo-outer"
      >
      <img
        src="images/LogoInside.png"
        alt=""
        class="navbar__logo-layer navbar__logo-layer--inner"
      >
    </span>
  </a>

  <div class="navbar__links" id="nav-links">
    <div class="nav-item">
      <a href="index.html" id="nav-home">Home</a>
    </div>

    <div class="nav-item" id="nav-info-item">
      <button class="nav-dropdown-btn" aria-expanded="false" aria-haspopup="true">
        Information
        <svg class="nav-chevron" viewBox="0 0 16 9" aria-hidden="true">
          <polyline points="1 1 8 8 15 1"/>
        </svg>
      </button>
      <div class="nav-dropdown" role="menu">
        <a href="Membership.html" role="menuitem">Membership</a>
        <a href="Leadership.html" role="menuitem">Leadership</a>
        <a href="FAQ.html" role="menuitem">FAQ</a>
        <a href="VirtualTour.html" role="menuitem">Virtual Tour</a>
        <a href="PublicRelations.html" role="menuitem">Public Relations</a>
      </div>
    </div>

    <div class="nav-item" id="nav-events-item">
      <button class="nav-dropdown-btn" aria-expanded="false" aria-haspopup="true">
        Events
        <svg class="nav-chevron" viewBox="0 0 16 9" aria-hidden="true">
          <polyline points="1 1 8 8 15 1"/>
        </svg>
      </button>
      <div class="nav-dropdown" role="menu">
        <a href="Calendar.html" role="menuitem">Calendar</a>
        <a href="Jankathon.html" role="menuitem">Jankathon</a>
        <a href="Projects.html" role="menuitem">Projects</a>
      </div>
    </div>

    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
      <svg id="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
        <!-- Filled by JS -->
      </svg>
    </button>
  </div>

  <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="mobile-menu" id="mobile-menu" aria-hidden="true">
  <span class="mobile-section-label">Navigate</span>
  <a href="index.html">Home</a>

  <span class="mobile-section-label">Information</span>
  <a href="Membership.html">Membership</a>
  <a href="Leadership.html">Leadership</a>
  <a href="FAQ.html">FAQ</a>
  <a href="VirtualTour.html">Virtual Tour</a>
  <a href="PublicRelations.html">Public Relations</a>

  <span class="mobile-section-label">Events</span>
  <a href="Calendar.html">Calendar</a>
  <a href="Jankathon.html">Jankathon</a>
  <a href="Projects.html">Projects</a>
</div>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer__social">
    <a href="https://github.com/Engineering-House" target="_blank" rel="noopener" aria-label="GitHub">
      <svg viewBox="0 0 33 36" aria-hidden="true">
        <path d="M16.25 0c-8.98 0-16.25 7.44-16.25 16.63 0 7.35 4.66 13.58 11.12 15.79 0.81 0.15 1.12-0.35 1.12-0.78 0-0.38-0.02-1.68-0.02-3.06-4.1 0.69-5.15-1.11-5.48-2.06-0.18-0.48-0.97-1.94-1.66-2.33-0.57-0.31-1.37-1-0.02-1.02 1.28-0.02 2.19 1.19 2.5 1.69 1.46 2.41 3.8 1.69 4.74 1.26 0.14-1.07 0.57-1.8 1.04-2.21-3.62-0.42-7.41-1.84-7.41-8.19 0-1.8 0.63-3.28 1.67-4.43-0.16-0.41-0.74-2.09 0.16-4.38 0 0 1.36-0.44 4.48 1.71 1.3-0.37 2.69-0.55 4.07-0.55 1.38 0 2.77 0.18 4.07 0.55 3.12-2.17 4.48-1.71 4.48-1.71 0.9 2.29 0.32 3.97 0.16 4.38 1.04 1.15 1.67 2.61 1.67 4.43 0 6.37-3.81 7.77-7.43 8.19 0.58 0.5 1.09 1.47 1.09 2.96 0 2.12-0.02 3.83-0.02 4.77 0 0.43 0.31 0.95 1.11 0.78 6.42-2.21 11.06-8.46 11.06-15.79 0-9.19-7.27-16.63-16.25-16.63z" fill="none" stroke-width="0" fill-rule="evenodd"/>
      </svg>
      <!-- GitHub SVG via Lucide-style -->
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    </a>
    <a href="https://instagram.com/engineeringhouse_rit" target="_blank" rel="noopener" aria-label="Instagram">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    </a>
    <a href="mailto:ehouserecruitment@gmail.com" aria-label="Email">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    </a>
  </div>
  <p class="footer__copy">Engineering House 2026</p>
</footer>
`;

/* --- Sun / Moon icon paths --- */
const SUN_SVG = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
const MOON_SVG = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;

/* --- Init --- */
document.addEventListener('DOMContentLoaded', () => {
  // Inject nav + footer
  const navEl = document.getElementById('nav-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;
  if (footEl) footEl.outerHTML = FOOTER_HTML;

  // Dark mode
  const saved = localStorage.getItem('theme') || 'light';
  applyTheme(saved);

  // Wait one tick so injected DOM is available
  requestAnimationFrame(() => {
    initNav();
    setActiveLink();
  });
});

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.innerHTML = theme === 'dark' ? SUN_SVG : MOON_SVG;
    icon.setAttribute('viewBox', '0 0 24 24');
  }
}

function initNav() {
  // Theme toggle
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  initLogoSpin();

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
      mobileMenu.setAttribute('aria-hidden', !open);
    });
  }

  // Desktop dropdowns
  document.querySelectorAll('.nav-item').forEach(item => {
    const btn = item.querySelector('.nav-dropdown-btn');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.nav-item.open').forEach(o => {
        o.classList.remove('open');
        o.querySelector('.nav-dropdown-btn')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-item.open').forEach(o => {
      o.classList.remove('open');
      o.querySelector('.nav-dropdown-btn')?.setAttribute('aria-expanded', 'false');
    });
  });

  // FAQ accordion (present on FAQ page)
  document.querySelectorAll('.faq-card').forEach(card => {
    const btn = card.querySelector('.faq-card__question');
    if (!btn) return;
    btn.addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });
}

function initLogoSpin() {
  const logo = document.querySelector('.navbar__logo');
  const outer = document.getElementById('nav-logo-outer');
  if (!logo || !outer) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let angle = 0;
  let velocity = 0;
  let rafId = null;
  let lastTime = 0;

  function tick(now) {
    if (!lastTime) lastTime = now;
    const dt = now - lastTime;
    lastTime = now;

    const stepScale = dt / 3;
    angle = (angle + (velocity * stepScale)) % 360;
    velocity -= 0.0075 * stepScale;

    if (velocity <= 0) {
      velocity = 0;
      rafId = null;
      lastTime = 0;
      return;
    }

    outer.style.transform = `rotate(${angle}deg)`;
    rafId = requestAnimationFrame(tick);
  }

  function boostSpin() {
    velocity += 1.5 / (velocity + 1);
    if (rafId !== null) return;
    rafId = requestAnimationFrame(tick);
  }

  logo.addEventListener('mouseenter', boostSpin);
  logo.addEventListener('focus', boostSpin);
}

function setActiveLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar a, .nav-dropdown a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}
