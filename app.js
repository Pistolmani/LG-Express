// LG Express & Logistics AB — bilingual static site
// State: { page: 'home' | 'about' | 'contact', lang: 'sv' | 'en' }

const EMAIL = "info@lgexpresslogistics.se";
const PHONE = "+46 76 288 2939";
const PHONE_TEL = "+46762882939";
const ADDRESS = "Frimurarvägen 44, 127 60 Skärholmen";
const WEB = "www.lgexpresslogistics.se";

const ICONS = {
  truck: '<path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"/><path d="M7.5 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/><path d="M17.5 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/>',
  washer: '<path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M12 8a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/><path d="M7 5.5h.01"/><path d="M10.5 5.5h.01"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  water: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S12.5 5.5 12 3c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1 1 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  people: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="m22 7-10 6L2 7"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><path d="M12 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>',
  globe: '<path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
};

function svg(key, size = 26, stroke = 1.5) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${ICONS[key]}</svg>`;
}

const SERVICES = [
  { key: "truck", num: "01",
    sv: { title: "Transport & leveranser", items: ["Företagsleveranser", "Hemleverans", "Tidsbokade leveranser", "Specialtransporter"] },
    en: { title: "Transport & deliveries", items: ["Business deliveries", "Home delivery", "Scheduled deliveries", "Special transports"] } },
  { key: "washer", num: "02",
    sv: { title: "Installation av vitvaror", items: ["Kök och hushållsprodukter", "Professionell installation", "Bortforsling av gammal produkt", "Rådgivning och genomgång"] },
    en: { title: "Appliance installation", items: ["Kitchen and household appliances", "Professional installation", "Removal of the old unit", "Advice and walkthrough"] } },
  { key: "zap", num: "03",
    sv: { title: "El-arbeten lågspänning", items: ["Installation och inkoppling", "Eluttag, belysning, vitvaror", "Felsökning och utbyte", "Enligt gällande regler"] },
    en: { title: "Low-voltage electrical work", items: ["Installation and connection", "Sockets, lighting, appliances", "Fault finding and replacement", "According to current regulations"] } },
  { key: "water", num: "04",
    sv: { title: "VVS-arbeten", items: ["Installation och anslutning", "Vatten och avlopp", "Diskmaskin, tvättmaskin m.m.", "Service och felsökning"] },
    en: { title: "Plumbing work", items: ["Installation and connection", "Water and drainage", "Dishwasher, washing machine etc.", "Service and fault finding"] } },
  { key: "home", num: "05",
    sv: { title: "Flytt & övriga tjänster", items: ["Flytt och transport", "Bärhjälp", "Montering", "Skräphantering"] },
    en: { title: "Moving & other services", items: ["Moving and transport", "Carrying help", "Assembly", "Waste handling"] } }
];

const COPY = {
  sv: {
    htmlLang: "sv",
    nav: ["Hem", "Om oss", "Kontakt"],
    ctaBook: "Boka tid via e-post",
    ctaServices: "Se tjänster",
    promises: ["Säkra leveranser", "Professionella installationer", "Nöjda kunder"],
    strip: ["Same day solutions", "A stronger tomorrow"],
    heroPre: "MER ÄN",
    heroBig: "LEVERANS",
    heroSub: ["VI SKAPAR", "LÖSNINGAR"],
    heroTagline: ["För företag och privatpersoner", "idag, imorgon och framåt."],
    lineChips: ["Transport", "Installation", "Service"],
    v0: "Därför LG Express",
    v1: "Tryggt samarbete", v2: "Professionell service",
    v3: "Erfaren personal", v4: "Hållbara lösningar",
    eyebrowServices: "Våra tjänster",
    headServices: "Fem områden, ett team.",
    subServices: "Från leverans till färdig installation — vi tar hela kedjan för företag och privatpersoner.",
    eyebrowContact: "Kontakta oss",
    ctaHead: "För nästa uppdrag eller löpande samarbete.",
    ctaSub: "Skicka en förfrågan och boka en tid eller ett samtal. Vi svarar via e-post.",
    eyebrowAbout: "Om oss",
    aboutHead: "Mer än leverans. Vi skapar lösningar.",
    aboutP1: "LG Express & Logistics AB är ett transport- och installationsföretag med bas i Skärholmen, Stockholm. Vi arbetar för både företag och privatpersoner — idag, imorgon och framåt.",
    aboutP2: "Vi tar uppdraget hela vägen: transporten fram, installationen på plats, el- och VVS-anslutningen, och bortforslingen av det gamla. Ett team, ett ansvar, en kontakt.",
    factsLabel: "Fakta",
    facts: [
      { k: "Bas", v: "Skärholmen, Stockholm" },
      { k: "Kunder", v: "Företag och privatpersoner" },
      { k: "Tjänster", v: "Transport, installation, el, VVS, flytt" },
      { k: "Löfte", v: "Same day solutions" }
    ],
    contactHead: "Boka en tid eller ett samtal.",
    contactSub: "Fyll i formuläret eller ring direkt. Alla förfrågningar går till info@lgexpresslogistics.se.",
    formLabel: "Förfrågan",
    fName: "Namn", fEmail: "E-post", fPhone: "Telefon", fDate: "Önskat datum",
    fService: "Tjänst", fMessage: "Meddelande", fSubmit: "Skicka förfrågan",
    fServicePick: "Välj tjänst",
    errName: "Fyll i namn och e-post.",
    errService: "Välj en tjänst.",
    formNote: "Knappen öppnar ditt e-postprogram med förfrågan färdigskriven till info@lgexpresslogistics.se.",
    subjectPrefix: "Förfrågan"
  },
  en: {
    htmlLang: "en",
    nav: ["Home", "About", "Contact"],
    ctaBook: "Book by email",
    ctaServices: "View services",
    promises: ["Secure deliveries", "Professional installations", "Satisfied customers"],
    strip: ["Same day solutions", "A stronger tomorrow"],
    heroPre: "MORE THAN",
    heroBig: "DELIVERY",
    heroSub: ["WE BUILD", "SOLUTIONS"],
    heroTagline: ["For businesses and private customers", "today, tomorrow and onward."],
    lineChips: ["Transport", "Installation", "Service"],
    v0: "Why LG Express",
    v1: "Reliable partnership", v2: "Professional service",
    v3: "Experienced staff", v4: "Sustainable solutions",
    eyebrowServices: "Our services",
    headServices: "Five disciplines, one team.",
    subServices: "From delivery to finished installation — we cover the whole chain for businesses and private customers.",
    eyebrowContact: "Contact us",
    ctaHead: "For your next job or an ongoing partnership.",
    ctaSub: "Send a request and book a time or a call. We reply by email.",
    eyebrowAbout: "About us",
    aboutHead: "More than delivery. We build solutions.",
    aboutP1: "LG Express & Logistics AB is a transport and installation company based in Skärholmen, Stockholm. We work for businesses and private customers alike — today, tomorrow and onward.",
    aboutP2: "We take the job the whole way: the transport there, the installation on site, the electrical and plumbing connection, and the removal of the old unit. One team, one responsibility, one contact.",
    factsLabel: "Facts",
    facts: [
      { k: "Based in", v: "Skärholmen, Stockholm" },
      { k: "Customers", v: "Businesses and private" },
      { k: "Services", v: "Transport, installation, electrical, plumbing, moving" },
      { k: "Promise", v: "Same day solutions" }
    ],
    contactHead: "Book a time or a call.",
    contactSub: "Fill in the form or call directly. Every request goes to info@lgexpresslogistics.se.",
    formLabel: "Request",
    fName: "Name", fEmail: "Email", fPhone: "Phone", fDate: "Preferred date",
    fService: "Service", fMessage: "Message", fSubmit: "Send request",
    fServicePick: "Choose a service",
    errName: "Please fill in name and email.",
    errService: "Please choose a service.",
    formNote: "The button opens your email app with the request pre-written to info@lgexpresslogistics.se.",
    subjectPrefix: "Request"
  }
};

const state = {
  page: (location.hash.replace('#', '') || 'home'),
  lang: (localStorage.getItem('lgx-lang') || 'sv'),
  form: { name: '', email: '', phone: '', date: '', service: '', message: '' },
  error: ''
};

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function renderNav(t) {
  const pages = ['home', 'about', 'contact'];
  const nav = document.getElementById('nav-primary');
  nav.innerHTML = pages.map((p, i) =>
    `<button data-nav="${p}" class="${state.page === p ? 'active' : ''}">${esc(t.nav[i])}</button>`
  ).join('');

  const footNav = document.getElementById('footer-nav');
  footNav.innerHTML = pages.map((p, i) =>
    `<button data-nav="${p}">${esc(t.nav[i])}</button>`
  ).join('');

  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === state.lang);
  });
}

function renderHome(t) {
  const services = SERVICES.map(s => ({
    num: s.num,
    icon: svg(s.key, 26),
    title: s[state.lang].title,
    items: s[state.lang].items
  }));

  return `
  <section class="hero">
    <div class="wrap grid">
      <div class="lead">
        <div class="service-line">
          ${t.lineChips.map((c, i) => `<span>${esc(c)}</span>${i < t.lineChips.length - 1 ? '<span>|</span>' : ''}`).join('')}
        </div>
        <div class="prehead">${esc(t.heroPre)}</div>
        <h1>${esc(t.heroBig)}</h1>
        <div class="subhead">${t.heroSub.map(esc).join('<br>')}</div>
        <hr>
        <p class="tagline">${t.heroTagline.map(esc).join('<br>')}</p>
        <div class="cta">
          <button class="btn-primary" data-nav="contact">${esc(t.ctaBook)}</button>
          <button class="btn-ghost-light" data-scroll="tjanster">${esc(t.ctaServices)}</button>
        </div>
      </div>
      <div class="promises">
        ${t.promises.map(p => `<div>${esc(p)}</div>`).join('')}
      </div>
    </div>
    <div class="strip"><div class="wrap inner">${t.strip.map((s, i) => `<span>${esc(s)}</span>${i < t.strip.length - 1 ? '<span>•</span>' : ''}`).join('')}</div></div>
  </section>

  <section class="values">
    <div class="wrap grid">
      <div class="value">${svg('handshake', 26)}<div class="label">${esc(t.v1)}</div></div>
      <div class="value">${svg('shield', 26)}<div class="label">${esc(t.v2)}</div></div>
      <div class="value">${svg('people', 26)}<div class="label">${esc(t.v3)}</div></div>
      <div class="value">${svg('leaf', 26)}<div class="label">${esc(t.v4)}</div></div>
    </div>
  </section>

  <section class="wrap" id="tjanster">
    <div class="eyebrow">${esc(t.eyebrowServices)}</div>
    <h2 class="section-title">${esc(t.headServices)}</h2>
    <p class="section-sub">${esc(t.subServices)}</p>
  </section>

  <section class="wrap services-grid">
    ${services.map(s => `
      <div class="card">
        <div class="num">${esc(s.num)}</div>
        <div class="icon">${s.icon}</div>
        <h3>${esc(s.title)}</h3>
        <div class="rule"></div>
        <ul>
          ${s.items.map(it => `<li><span class="dash">—</span><span>${esc(it)}</span></li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </section>

  <section class="cta-band">
    <div class="wrap grid">
      <div>
        <div class="eyebrow" style="color: rgba(255,255,255,0.5);">${esc(t.eyebrowContact)}</div>
        <h2>${esc(t.ctaHead)}</h2>
        <p>${esc(t.ctaSub)}</p>
      </div>
      <div class="contact-col">
        <a class="email-link" href="mailto:${EMAIL}">${EMAIL}</a>
        <a class="phone-link" href="tel:${PHONE_TEL}">${PHONE}</a>
        <button class="btn-primary" data-nav="contact" style="margin-top: 10px;">${esc(t.ctaBook)}</button>
      </div>
    </div>
  </section>
  `;
}

function renderAbout(t) {
  return `
  <section class="wrap about-hero">
    <div class="eyebrow">${esc(t.eyebrowAbout)}</div>
    <h1>${esc(t.aboutHead)}</h1>
    <div class="about-grid">
      <div class="about-copy">
        <p>${esc(t.aboutP1)}</p>
        <p>${esc(t.aboutP2)}</p>
      </div>
      <div class="facts">
        <div class="eyebrow">${esc(t.factsLabel)}</div>
        <div class="rows">
          ${t.facts.map(f => `<div class="row"><span class="k">${esc(f.k)}</span><span class="v">${esc(f.v)}</span></div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section class="wrap why">
    <div class="card-dark">
      <div class="head-full">${esc(t.v0)}</div>
      <div class="val">${esc(t.v1)}</div>
      <div class="val">${esc(t.v2)}</div>
      <div class="val">${esc(t.v3)}</div>
      <div class="val">${esc(t.v4)}</div>
    </div>
  </section>
  `;
}

function renderContact(t) {
  const serviceNames = SERVICES.map(s => s[state.lang].title);
  const f = state.form;
  return `
  <section class="wrap contact-hero">
    <div class="eyebrow">${esc(t.eyebrowContact)}</div>
    <h1>${esc(t.contactHead)}</h1>
    <p class="sub">${esc(t.contactSub)}</p>

    <div class="contact-grid">
      <div class="contact-list">
        <a class="contact-item" href="tel:${PHONE_TEL}">
          <span class="ic">${svg('phone', 19, 1.6)}</span>
          <span class="txt">${PHONE}</span>
        </a>
        <a class="contact-item" href="mailto:${EMAIL}">
          <span class="ic">${svg('mail', 19, 1.6)}</span>
          <span class="txt">${EMAIL}</span>
        </a>
        <div class="contact-item">
          <span class="ic">${svg('pin', 19, 1.6)}</span>
          <span class="txt">${ADDRESS}</span>
        </div>
        <a class="contact-item" href="https://${WEB}">
          <span class="ic">${svg('globe', 19, 1.6)}</span>
          <span class="txt">${WEB}</span>
        </a>
      </div>

      <form class="form-card" id="lgx-form" novalidate>
        <div class="eyebrow">${esc(t.formLabel)}</div>
        <div class="form-grid">
          <label>${esc(t.fName)}<input name="name" value="${esc(f.name)}"></label>
          <label>${esc(t.fEmail)}<input name="email" type="email" value="${esc(f.email)}"></label>
          <label>${esc(t.fPhone)}<input name="phone" value="${esc(f.phone)}"></label>
          <label>${esc(t.fDate)}<input name="date" type="date" value="${esc(f.date)}"></label>
          <label class="full">${esc(t.fService)}
            <select name="service">
              <option value="">${esc(t.fServicePick)}</option>
              ${serviceNames.map(n => `<option value="${esc(n)}" ${f.service === n ? 'selected' : ''}>${esc(n)}</option>`).join('')}
            </select>
          </label>
          <label class="full">${esc(t.fMessage)}
            <textarea name="message" rows="4">${esc(f.message)}</textarea>
          </label>
        </div>
        <button type="submit" class="form-submit">${esc(t.fSubmit)}</button>
        ${state.error ? `<p class="form-error">${esc(state.error)}</p>` : ''}
        <p class="form-note">${esc(t.formNote)}</p>
      </form>
    </div>
  </section>
  `;
}

function render() {
  const t = COPY[state.lang];
  document.documentElement.lang = t.htmlLang;
  renderNav(t);

  const main = document.getElementById('main');
  if (state.page === 'about') main.innerHTML = renderAbout(t);
  else if (state.page === 'contact') main.innerHTML = renderContact(t);
  else main.innerHTML = renderHome(t);

  if (state.page === 'contact') wireForm();
}

function wireForm() {
  const form = document.getElementById('lgx-form');
  if (!form) return;
  form.addEventListener('input', e => {
    const n = e.target.name;
    if (n && n in state.form) state.form[n] = e.target.value;
  });
  form.addEventListener('change', e => {
    const n = e.target.name;
    if (n && n in state.form) state.form[n] = e.target.value;
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    submitForm();
  });
}

function submitForm() {
  const t = COPY[state.lang];
  const f = state.form;
  if (!f.name.trim() || !f.email.trim()) {
    state.error = t.errName; render(); return;
  }
  if (!f.service) {
    state.error = t.errService; render(); return;
  }
  state.error = '';
  const subject = `${t.subjectPrefix}: ${f.service || t.fService}${f.name ? ' — ' + f.name : ''}`;
  const body = [
    `${t.fName}: ${f.name}`,
    `${t.fEmail}: ${f.email}`,
    `${t.fPhone}: ${f.phone}`,
    `${t.fService}: ${f.service}`,
    `${t.fDate}: ${f.date}`,
    '',
    `${t.fMessage}:`,
    f.message
  ].join('\n');
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function go(page) {
  state.page = page;
  state.error = '';
  history.replaceState(null, '', '#' + page);
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setLang(lang) {
  if (lang === state.lang) return;
  // remap selected service across languages
  if (state.form.service) {
    const match = SERVICES.find(x => x.sv.title === state.form.service || x.en.title === state.form.service);
    state.form.service = match ? match[lang].title : '';
  }
  state.lang = lang;
  state.error = '';
  localStorage.setItem('lgx-lang', lang);
  render();
}

document.addEventListener('click', e => {
  const navBtn = e.target.closest('[data-nav]');
  if (navBtn) { go(navBtn.dataset.nav); return; }
  const langBtn = e.target.closest('[data-lang]');
  if (langBtn) { setLang(langBtn.dataset.lang); return; }
  const scrollBtn = e.target.closest('[data-scroll]');
  if (scrollBtn) {
    const el = document.getElementById(scrollBtn.dataset.scroll);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
  }
});

window.addEventListener('hashchange', () => {
  const p = location.hash.replace('#', '') || 'home';
  if (['home', 'about', 'contact'].includes(p)) { state.page = p; render(); }
});

render();
