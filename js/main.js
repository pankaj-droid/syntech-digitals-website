/* =============================================
   PIXELPULSE DIGITAL — main.js
   Loads content from /content/data.json
   and populates the entire website dynamically
   ============================================= */

const ICONS = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  pen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>`,
  map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
};

async function loadContent() {
  try {
    const response = await fetch('/content/data.json');
    if (!response.ok) throw new Error('Failed to load content');
    return await response.json();
  } catch (e) {
    console.warn('Could not load content.json, using defaults');
    return null;
  }
}

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setAttr(id, attr, val) {
  const el = document.getElementById(id);
  if (el) el.setAttribute(attr, val);
}

function populateSite(data) {
  const s = data.site;
  document.title = `${s.name} | ${s.tagline}`;
  setText('nav-logo-text', s.name);
  setText('footer-name', s.name);
  setText('footer-desc', data.footer.description);
  setText('footer-copyright', `© ${data.footer.copyright}`);
  setAttr('whatsapp-link', 'href', `https://wa.me/${s.whatsapp}`);
}

function populateNav(data) {
  setText('nav-cta-text', data.nav.cta_text);
}

function populateHero(data) {
  const h = data.hero;
  setText('hero-badge', h.badge);
  setText('hero-headline', h.headline);
  setText('hero-accent', ` ${h.headline_accent}`);
  setText('hero-subtext', h.subtext);
  setText('hero-cta-primary', h.cta_primary);
  setText('hero-cta-secondary', h.cta_secondary);
  setAttr('hero-cta-primary', 'href', '#contact');
  setAttr('hero-cta-secondary', 'href', '#portfolio');

  const statsHtml = h.mini_stats.map(s => `
    <div class="hero-mini-stat">
      <div class="num">${s.number}</div>
      <div class="lbl">${s.label}</div>
    </div>
  `).join('');
  setHTML('hero-mini-stats', statsHtml);
}

function populateMarquee(data) {
  const items = data.marquee;
  const doubled = [...items, ...items];
  const html = doubled.map(item => `<span class="marquee-item">${item}</span>`).join('');
  setHTML('marquee-content', html);
}

function populateStats(data) {
  const html = data.stats.map((s, i) => `
    <div class="stat-item fade-in fade-in-delay-${i % 4 + 1}">
      <div class="stat-number" data-target="${s.number}" data-suffix="${s.suffix}">0${s.suffix}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
  setHTML('stats-grid', html);
}

function populateServices(data) {
  const sv = data.services;
  setText('services-badge', sv.badge);
  setText('services-title', sv.title);
  setText('services-subtitle', sv.subtitle);

  const html = sv.items.map((item, i) => `
    <div class="service-card fade-in" style="transition-delay: ${i * 0.08}s">
      <div class="service-icon icon-${item.color}">
        ${ICONS[item.icon] || ICONS.star}
      </div>
      <h3 class="service-title">${item.title}</h3>
      <p class="service-desc">${item.description}</p>
    </div>
  `).join('');
  setHTML('services-grid', html);
}

function populateAbout(data) {
  const a = data.about;
  setText('about-badge', a.badge);
  setText('about-title-main', a.title);
  setText('about-title-accent', a.title_accent);
  setText('about-desc', a.description);
  setText('about-cta', a.cta);
  setText('about-h1', a.highlight_1);
  setText('about-h2', a.highlight_2);
  setText('about-h3', a.highlight_3);

  const featuresHtml = a.features.map(f => `
    <li class="feature-item">
      <span class="feature-check">${ICONS.check}</span>
      ${f}
    </li>
  `).join('');
  setHTML('about-features', featuresHtml);
}

function populateProcess(data) {
  const p = data.process;
  setText('process-title', p.title);
  setText('process-subtitle', p.subtitle);

  const html = p.steps.map((step, i) => `
    <div class="process-step fade-in fade-in-delay-${i + 1}">
      <div class="step-number">${step.number}</div>
      <h3 class="step-title">${step.title}</h3>
      <p class="step-desc">${step.description}</p>
    </div>
  `).join('');
  setHTML('process-grid', html);
}

function populateTestimonials(data) {
  const t = data.testimonials;
  setText('testimonials-badge', t.badge);
  setText('testimonials-title', t.title);
  setText('testimonials-subtitle', t.subtitle);

  const stars = (n) => Array(n).fill('★').join('');
  const html = t.items.map(item => `
    <div class="testimonial-card fade-in">
      <div class="stars">${Array(item.rating).fill('<span class="star">★</span>').join('')}</div>
      <p class="testimonial-text">${item.review}</p>
      <div class="testimonial-author">
        <div class="author-avatar">${item.avatar_initials}</div>
        <div>
          <div class="author-name">${item.name}</div>
          <div class="author-role">${item.role}</div>
        </div>
      </div>
    </div>
  `).join('');
  setHTML('testimonials-grid', html);
}

function populatePricing(data) {
  const p = data.packages;
  setText('pricing-badge', p.badge);
  setText('pricing-title', p.title);
  setText('pricing-subtitle', p.subtitle);

  const html = p.items.map(pkg => `
    <div class="pricing-card${pkg.popular ? ' popular' : ''} fade-in">
      ${pkg.popular ? `<div class="popular-badge">Most Popular</div>` : ''}
      <div class="plan-name">${pkg.name}</div>
      <div class="plan-price">
        <span class="price-currency">${p.currency}</span>
        <span class="price-amount">${pkg.price}</span>
        <span class="price-period">/${pkg.period}</span>
      </div>
      <p class="plan-desc">${pkg.description}</p>
      <ul class="plan-features">
        ${pkg.features.map(f => `
          <li class="plan-feature">
            <span class="feature-dot">${ICONS.check}</span>
            ${f}
          </li>
        `).join('')}
      </ul>
      <a href="#contact" class="btn ${pkg.popular ? 'btn-primary' : 'btn-outline'} btn-full">${pkg.cta}</a>
    </div>
  `).join('');
  setHTML('pricing-grid', html);
}

function populateCTA(data) {
  const c = data.cta_banner;
  setText('cta-title', c.title);
  setText('cta-subtitle', c.subtitle);
  setText('cta-btn-text', c.button_text);
}

function populateContact(data) {
  const c = data.contact;
  setText('contact-badge', c.badge);
  setText('contact-title', c.title);
  setText('contact-subtitle', c.subtitle);

  const items = [
    { icon: 'phone', label: 'Phone', value: data.site.phone, href: `tel:${data.site.phone}` },
    { icon: 'mail', label: 'Email', value: data.site.email, href: `mailto:${data.site.email}` },
    { icon: 'map', label: 'Location', value: data.site.address, href: '#' },
    { icon: 'whatsapp', label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${data.site.whatsapp}` },
  ];

  const itemsHtml = items.map(item => `
    <a href="${item.href}" class="contact-item" target="${item.href.startsWith('http') ? '_blank' : '_self'}" rel="noopener">
      <div class="contact-item-icon">${ICONS[item.icon]}</div>
      <div>
        <div class="contact-item-label">${item.label}</div>
        <div class="contact-item-value">${item.value}</div>
      </div>
    </a>
  `).join('');
  setHTML('contact-items', itemsHtml);

  const select = document.getElementById('service-select');
  if (select && c.services_list) {
    c.services_list.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      select.appendChild(opt);
    });
  }
}

function populateFooter(data) {
  const footerServicesHtml = data.services.items.slice(0, 5).map(s => `
    <li><a href="#services">${s.title}</a></li>
  `).join('');
  setHTML('footer-services', footerServicesHtml);

  const footerContactHtml = `
    <div class="footer-contact-item">${ICONS.phone}<span>${data.site.phone}</span></div>
    <div class="footer-contact-item">${ICONS.mail}<span>${data.site.email}</span></div>
    <div class="footer-contact-item">${ICONS.map}<span>${data.site.address}</span></div>
  `;
  setHTML('footer-contact-items', footerContactHtml);

  setAttr('footer-wa-link', 'href', `https://wa.me/${data.site.whatsapp}`);
}

/* ---- Scroll Animations ---- */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ---- Counter Animation ---- */
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  const update = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target + suffix;
  };
  requestAnimationFrame(update);
}

/* ---- Sticky Header ---- */
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }, { passive: true });
}

/* ---- Mobile Menu ---- */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navCta = document.getElementById('nav-cta');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    if (isOpen) {
      navCta.classList.add('mobile-show');
    } else {
      navCta.classList.remove('mobile-show');
    }
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('active');
      navCta.classList.remove('mobile-show');
      document.body.style.overflow = '';
    });
  });
}

/* ---- Active Nav Highlight ---- */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

/* ---- Contact Form ---- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const formData = new FormData(form);
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        form.style.display = 'none';
        const success = document.getElementById('form-success');
        if (success) success.style.display = 'block';
      } else {
        btn.textContent = 'Send Message';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Send Message';
      btn.disabled = false;
    }
  });
}

/* ---- Smooth Scroll ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ---- Preloader ---- */
function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => preloader.classList.add('hidden'), 400);
  }
}

/* ---- Init ---- */
async function init() {
  const data = await loadContent();

  if (data) {
    populateSite(data);
    populateNav(data);
    populateHero(data);
    populateMarquee(data);
    populateStats(data);
    populateServices(data);
    populateAbout(data);
    populateProcess(data);
    populateTestimonials(data);
    populatePricing(data);
    populateCTA(data);
    populateContact(data);
    populateFooter(data);
  }

  hidePreloader();
  initScrollAnimations();
  initCounters();
  initHeader();
  initMobileMenu();
  initActiveNav();
  initContactForm();
  initSmoothScroll();
}

document.addEventListener('DOMContentLoaded', init);
