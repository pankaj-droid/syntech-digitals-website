/* ============================================================
   Shared Header + Footer injected into every page
   ============================================================ */

const SVG = {
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>`,
  phone:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>`,
  mail:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  map:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  fb:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  tw:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  li:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  ig:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
  wa:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`,
  arrowr: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  check:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`,
  x:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
};

function buildHeader(data) {
  const s = data.site;
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    if (page === 'index.html' && (currentPage === '' || currentPage === 'index.html')) return 'active';
    if (page !== 'index.html' && currentPage === page) return 'active';
    return '';
  }

  return `
  <div class="topbar">
    <div class="container">
      <div class="topbar-inner">
        <div class="topbar-contact">
          <a href="tel:${s.phone}">${SVG.phone} ${s.phone}</a>
          <a href="mailto:${s.email}">${SVG.mail} ${s.email}</a>
        </div>
        <div class="topbar-social">
          <a href="${s.social_fb||'#'}" target="_blank" rel="noopener" aria-label="Facebook">${SVG.fb}</a>
          <a href="${s.social_tw||'#'}" target="_blank" rel="noopener" aria-label="Twitter">${SVG.tw}</a>
          <a href="${s.social_li||'#'}" target="_blank" rel="noopener" aria-label="LinkedIn">${SVG.li}</a>
          <a href="${s.social_ig||'#'}" target="_blank" rel="noopener" aria-label="Instagram">${SVG.ig}</a>
        </div>
      </div>
    </div>
  </div>
  <header class="header" id="main-header">
    <div class="container">
      <nav class="nav-inner">
        <a href="index.html" class="logo">
          <div class="logo-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <span class="logo-text" id="logo-name">${s.name.split(' ')[0]} <span>${s.name.split(' ').slice(1).join(' ')}</span></span>
        </a>

        <ul class="nav-menu" id="nav-menu">
          <li class="nav-item"><a href="index.html" class="nav-link ${isActive('index.html')}">Home</a></li>
          <li class="nav-item"><a href="about.html" class="nav-link ${isActive('about.html')}">About Us</a></li>
          <li class="nav-item">
            <a href="services.html" class="nav-link ${isActive('services.html')}">Services ${SVG.chevron}</a>
            <ul class="dropdown">
              <li><a href="services.html#web-dev">${SVG.arrowr} Website Development</a></li>
              <li><a href="services.html#seo">${SVG.arrowr} Search Engine Optimization</a></li>
              <li><a href="services.html#gmb">${SVG.arrowr} Google My Business</a></li>
              <li><a href="services.html#social">${SVG.arrowr} Social Media Marketing</a></li>
              <li><a href="services.html#sms-email">${SVG.arrowr} SMS & Email Marketing</a></li>
              <li><a href="services.html#graphics">${SVG.arrowr} Graphics Designing</a></li>
              <li><a href="services.html#ads">${SVG.arrowr} Advertising Solutions</a></li>
              <li><a href="services.html#ecommerce">${SVG.arrowr} E-Commerce Website</a></li>
              <li><a href="services.html#hosting">${SVG.arrowr} Web Hosting & Domain</a></li>
            </ul>
          </li>
          <li class="nav-item"><a href="portfolio.html" class="nav-link ${isActive('portfolio.html')}">Portfolio</a></li>
          <li class="nav-item">
            <a href="packages.html" class="nav-link ${isActive('packages.html')}">Packages ${SVG.chevron}</a>
            <ul class="dropdown">
              <li><a href="packages.html#seo-starter">${SVG.arrowr} SEO Starter Packages</a></li>
              <li><a href="packages.html#seo-super">${SVG.arrowr} SEO Super Packages</a></li>
              <li><a href="packages.html#website">${SVG.arrowr} Website Packages</a></li>
            </ul>
          </li>
          <li class="nav-item"><a href="contact.html" class="nav-link ${isActive('contact.html')}">Contact Us</a></li>
        </ul>

        <a href="contact.html" class="btn btn-orange btn-sm nav-cta">Get a Quote</a>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  </header>`;
}

function buildFooter(data) {
  const s = data.site;
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-logo">
          <a href="index.html" class="logo" style="color:#fff">
            <div class="logo-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <span class="logo-text">${s.name.split(' ')[0]} <span style="color:var(--orange)">${s.name.split(' ').slice(1).join(' ')}</span></span>
          </a>
          <p class="footer-about">${data.footer.description}</p>
          <div class="footer-social">
            <a href="${s.social_fb||'#'}" target="_blank" aria-label="Facebook">${SVG.fb}</a>
            <a href="${s.social_tw||'#'}" target="_blank" aria-label="Twitter">${SVG.tw}</a>
            <a href="${s.social_li||'#'}" target="_blank" aria-label="LinkedIn">${SVG.li}</a>
            <a href="${s.social_ig||'#'}" target="_blank" aria-label="Instagram">${SVG.ig}</a>
            <a href="https://wa.me/${s.whatsapp}" target="_blank" aria-label="WhatsApp">${SVG.wa}</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="services.html#web-dev">Website Development</a></li>
            <li><a href="services.html#seo">SEO</a></li>
            <li><a href="services.html#social">Social Media Marketing</a></li>
            <li><a href="services.html#ads">Google & Meta Ads</a></li>
            <li><a href="services.html#graphics">Graphics Designing</a></li>
            <li><a href="services.html#ecommerce">E-Commerce</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="packages.html">Packages</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="/admin" target="_blank">Admin Panel</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact Us</h4>
          <div class="footer-contact-item">${SVG.phone}<span>${s.phone}</span></div>
          <div class="footer-contact-item">${SVG.mail}<span>${s.email}</span></div>
          <div class="footer-contact-item">${SVG.map}<span>${s.address}</span></div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${data.footer.copyright}</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </div>
  </footer>
  <a href="https://wa.me/${s.whatsapp}" class="wa-float" target="_blank" rel="noopener" aria-label="WhatsApp">${SVG.wa}</a>`;
}

function initNav() {
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');
  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.done) {
        e.target.dataset.done = '1';
        const target = +e.target.dataset.target;
        const suffix = e.target.dataset.suffix || '';
        const dur = 2000;
        const start = performance.now();
        const run = (now) => {
          const p = Math.min((now - start) / dur, 1);
          e.target.textContent = Math.floor((1 - Math.pow(1-p, 3)) * target) + suffix;
          if (p < 1) requestAnimationFrame(run);
          else e.target.textContent = target + suffix;
        };
        requestAnimationFrame(run);
      }
    });
  }, { threshold: .5 });
  document.querySelectorAll('[data-target]').forEach(el => obs.observe(el));
}

async function injectComponents() {
  const headerEl = document.getElementById('header-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (!headerEl && !footerEl) return;

  try {
    const depth = (window.location.pathname.match(/\//g) || []).length > 1 ? '../' : '';
    const res = await fetch(`${depth}content/site.json`);
    const data = await res.json();

    if (headerEl) headerEl.innerHTML = buildHeader(data);
    if (footerEl) footerEl.innerHTML = buildFooter(data);

    initNav();
    initReveal();
    initCounters();
  } catch(e) {
    console.warn('Could not load components:', e);
  }
}

document.addEventListener('DOMContentLoaded', injectComponents);
