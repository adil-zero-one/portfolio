// ─── NAV TOGGLE ───────────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
}

function closeNav() {
  if (navToggle && navLinks) {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  }
}

// ─── LANGUAGE TRACKER & ACTIVE STATE ──────────────────────────
let currentLang = 'ca'; // Default portfolio fallback language

// Sync currentLang whenever users toggle languages
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    currentLang = btn.getAttribute('data-lang');
  });
});

// ─── STANDARD DOCUMENT MODAL & DYNAMIC CV ─────────────────────
const modal = document.getElementById("doc-modal");
const frame = document.getElementById("doc-frame");
const closeBtn = document.querySelector(".close-btn");

function openDoc(path) {
  if (frame && modal) {
    frame.src = path;
    modal.style.display = "flex";
  }
}
if (closeBtn) { closeBtn.onclick = () => { if (modal) modal.style.display = "none"; }; }

// Event listener for your specific document card markup
document.addEventListener("DOMContentLoaded", () => {
  const cvCard = document.getElementById("dynamic-cv-card");

  if (cvCard) {
    cvCard.addEventListener("click", () => {
      let resolvedPath = 'docs/Adil_Chainakh_CV_Ca.pdf'; // Default fallback path

      if (currentLang === 'es') {
        resolvedPath = 'docs/Adil_Chainakh_CV_Es.pdf';
      } else if (currentLang === 'en') {
        resolvedPath = 'docs/Adil_Chainakh_CV_En.pdf';
      }

      openDoc(resolvedPath);
    });
  }
});

// ─── CINEMA VIDEO OVERLAY MODAL ─────────────────────────────────
const cinemaModal = document.getElementById('cinema-modal');
const cinemaVideo = document.getElementById('cinema-video');
const closeCinema = document.querySelector('.close-cinema-btn');

function openCinemaModal(videoSrc) {
  if (cinemaModal && cinemaVideo) {
    cinemaVideo.src = videoSrc;
    cinemaModal.style.display = "flex";
    cinemaVideo.play();
  }
}
if (closeCinema) {
  closeCinema.onclick = () => {
    if (cinemaModal && cinemaVideo) {
      cinemaModal.style.display = "none";
      cinemaVideo.pause();
      cinemaVideo.src = "";
    }
  };
}

// ─── TRANSLATIONS CONFIGURATION MATRIX ──────────────────────────
const translations = {
  ca: {
    pageTitle: "Adil Chainakh — Desenvolupador Web",
    navSobre: "Sobre mi",
    navExp: "Experiència",
    navDocs: "Documents",
    navContacte: "Contacte",

    heroTag: "Disponible per a pràctiques · Reus, Tarragona",
    heroRole: "Desenvolupador Web · DAW · Institut Baix Camp",
    heroDesc: "Desenvolupador web en formació amb stack complet: PHP, Laravel, Symfony, Java, JavaScript, SQL. Perfil versàtil que combina codi, disseny i edició audiovisual. Multilingüe · 4 idiomes · Orientat a resultats.",
    heroBtnLinkedin: "LinkedIn",
    heroBtnGithub: "GitHub",
    heroBtnContacte: "Contacte",
    heroCodeComment: "// obert a: pràctiques · junior roles",

    sectionLabelSobre: "Sobre mi",
    sectionTitleSobre: "Qui <span>soc</span>",
    aboutP1: "Sóc <strong>Adil Chainakh</strong>, estudiant de Cicle Formatiu de Grau Superior en Desenvolupament d'Aplicacions Web (DAW) a l'<strong>Institut Baix Camp de Reus</strong>.",
    aboutP2: "Treballo amb <strong>PHP, Laravel i Symfony</strong> per al backend, <strong>HTML, CSS, Bootstrap i JavaScript</strong> per al frontend, i <strong>MySQL i SQL</strong> per a les bases de dades. Gestiono els meus projectes amb <strong>Git i GitHub</strong>.",
    aboutP3: "Abans de dedicar-me al món del codi, vaig gestionar equips en restauració i tancar vendes d'automoció — habilitats que ara aplico al treball en equip i a la comunicació amb clients. Parlo <strong>4 idiomes</strong>: àrab, castellà, anglès i francès.",
    aboutP4: "A banda del desenvolupament, domino eines de <strong>disseny gràfic</strong> (Figma, Photoshop, Canva) i <strong>edició audiovisual</strong> (After Effects, Premiere Pro, CapCut).",
    skillsBackend: "Backend",
    skillsFrontend: "Frontend",
    skillsTools: "Eines",
    skillsDesign: "Disseny & Vídeo",
    skillsLangs: "Idiomes",
    pillArab: "Àrab · Natiu",
    pillCas: "Castellà · Avançat",
    pillEng: "Anglès · Avançat",
    pillFr: "Francès · Intermedi",
    pillCat: "Català · Bàsic",

    sectionLabelExp: "Trajectòria",
    sectionTitleExp: "Experiència <span>&</span> Formació",
    exp1Company: "Institut Baix Camp · Reus",
    exp1Title: "CFGS Desenvolupament d'Aplicacions Web (DAW)",
    exp1Desc: "PHP/Laravel/Symfony · Java · JavaScript · SQL · HTML/CSS/Bootstrap · Git · Docker · Scrum",
    exp2Company: "Desenvolupador Independent",
    exp2Title: "Projectes Contractats & Freelance",
    exp2Desc: "Disseny i construcció de 2 plataformes comercials completes per a clients regionals. Integració d'arquitectures de subscripció i pagament protegit amb Stripe API.",
    exp3Company: "Beach House La Mora",
    exp3Title: "Encarregat de Restaurant",
    exp3Desc: "Gestió i coordinació de l'equip de sala en entorns d'alta demanda. Control de stock, comandes i supervisió d'operacions diàries. Atenció al client i resolució d'incidències.",
    exp4Company: "Quattros",
    exp4Title: "Cambrer",
    exp4Desc: "Servei de sala amb atenció personalitzada al client. Treball en equip en restauració amb ritme elevat.",
    exp5Company: "Navarro Automoción",
    exp5Title: "Assessor Comercial d'Automoció",
    exp5Desc: "Assessorament i tancament de vendes de vehicles. Gestió de documentació, contractes i seguiment postvenda.",

    sectionLabelDocs: "Portfolio & Creations",
    sectionTitleDocs: "Projectes <span>&</span> Documents",
    doc1Title: "Currículum Vitae",
    doc1Desc: "CV professional complet amb el meu perfil, trajectòria i habilitats en el format oficial.",
    projVenueDesc: "PWA de descobriment social en temps real amb xat encriptat E2E i arquitectura de cost zero.",
    projHabboTitle: "Sulake Habbo Bot Radar",
    projHabboDesc: "Script automatitzat de detecció de patrons de comportament de bots en temps real per Habbo.",
    projGymTitle: "Gym Routine App",
    projGymDesc: "Aplicació de gestió de rutines amb Laravel Eloquent ORM en un entorn dockeritzat.",
    projSupplierTitle: "Gestor de Proveïdors",
    projSupplierDesc: "CRUD segur construït en Symfony amb canvi de mode fosc i disseny responsiu.",


    sectionLabelContact: "Contacte",
    sectionTitleContact: "Parlem <span>?</span>",
    contactNote: "Estic obert a <strong style=\"color:var(--text)\">pràctiques professionals</strong>, col·laboracions en projectes web i <strong style=\"color:var(--text)\">oportunitats junior</strong> en l'àmbit del desenvolupament web.<br><br>Tarragona / Reus, Catalunya 🇪🇸",
    footerMiddle: "DAW · Institut Baix Camp · Reus",
    footerRight: "code · design · lead · create",
    sectionLabelMedia: "Motion Graphics & Showreel",
    sectionTitleMedia: "Edició <span>&</span> Producció Audiovisual",
    v1Title: "Animació de bàners After Effects", v2Title: "Anunci d'esmorzar", v3Title: "Entrevista d'anunci de restaurant",
    v4Title: "Explicació de vídeo TrueNas", v5Title: "Construcció d'una escena en AE", v6Title: "Presentació de plats", v7Title: "Animació de mapa"
  },
  es: {
    pageTitle: "Adil Chainakh — Desarrollador Web",
    navSobre: "Sobre mí",
    navExp: "Experiencia",
    navDocs: "Documentos",
    navContacte: "Contacto",

    heroTag: "Disponible para prácticas · Reus, Tarragona",
    heroRole: "Desarrollador Web · DAW · Institut Baix Camp",
    heroDesc: "Desarrollador web en formación con stack completo: PHP, Laravel, Symfony, Java, JavaScript, SQL. Perfil versátil que combina código, diseño y edición audiovisual. Multilingüe · 4 idiomas · Orientado a resultados.",
    heroBtnLinkedin: "LinkedIn",
    heroBtnGithub: "GitHub",
    heroBtnContacte: "Contacto",
    heroCodeComment: "// abierto a: prácticas · puestos junior",

    sectionLabelSobre: "Sobre mí",
    sectionTitleSobre: "Quién <span>soy</span>",
    aboutP1: "Soy <strong>Adil Chainakh</strong>, estudiante de Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (DAW) en el <strong>Institut Baix Camp de Reus</strong>.",
    aboutP2: "Trabajo con <strong>PHP, Laravel y Symfony</strong> para el backend, <strong>HTML, CSS, Bootstrap y JavaScript</strong> para el frontend, y <strong>MySQL y SQL</strong> para las bases de datos. Guardo mis proyectos usando <strong>Git y GitHub</strong>.",
    aboutP3: "Antes de dedicarme al código, gestioné equipos en restauración y cerré ventas de automoción — habilidades que ahora aplico al trabajo en equipo y a la comunicación. Hablo <strong>4 idiomas</strong>: árabe, castellano, inglés y francés.",
    aboutP4: "Además del desarrollo, domino herramientas de <strong>diseño gráfico</strong> (Figma, Photoshop, Canva) y <strong>edición audiovisual</strong> (After Effects, Premiere Pro, CapCut).",
    skillsBackend: "Backend",
    skillsFrontend: "Frontend",
    skillsTools: "Herramientas",
    skillsDesign: "Diseño & Vídeo",
    skillsLangs: "Idiomas",
    pillArab: "Árabe · Nativo",
    pillCas: "Castellano · Avanzado",
    pillEng: "Inglés · Avanzado",
    pillFr: "Francés · Intermedio",
    pillCat: "Catalán · Básico",

    sectionLabelExp: "Trayectoria",
    sectionTitleExp: "Experiencia <span>&</span> Formación",
    exp1Company: "Institut Baix Camp · Reus",
    exp1Title: "CFGS Desarrollo de Aplicaciones Web (DAW)",
    exp1Desc: "PHP/Laravel/Symfony · Java · JavaScript · SQL · HTML/CSS/Bootstrap · Git · Docker · Scrum",
    exp2Company: "Desarrollador Independiente",
    exp2Title: "Proyectos Contractuales & Freelance",
    exp2Desc: "Diseño y construcción de 2 plataformas comerciales completas para clientes regionales. Integración de arquitecturas de suscripción y pago protegido con Stripe API.",
    exp3Company: "Beach House La Mora",
    exp3Title: "Encargado de Restaurante",
    exp3Desc: "Gestión y coordinación del equipo de sala en entornos de alta demanda. Control de stock, pedidos y supervisión de operaciones diarias. Atención al cliente y resolución de incidencias.",
    exp4Company: "Quattros",
    exp4Title: "Camarero",
    exp4Desc: "Servicio de sala con atención personalizada al cliente. Trabajo en equipo en restauración con ritmo elevado.",
    exp5Company: "Navarro Automoción",
    exp5Title: "Asesor Comercial de Automoción",
    exp5Desc: "Asesoramiento y cierre de ventas de vehículos. Gestión de documentación, contratos y seguimiento postventa.",

    sectionLabelDocs: "Portfolio & Creations",
    sectionTitleDocs: "Proyectos <span>&</span> Documentos",
    doc1Title: "Currículum Vitae",
    doc1Desc: "CV profesional completo con mi perfil, trayectoria y habilidades en el formato oficial.",
    projVenueDesc: "PWA de descubrimiento social en tiempo real con chat encriptado E2E y arquitectura de costo cero.",
    projHabboTitle: "Sulake Habbo Radar",
    projHabboDesc: "Script automatizado de detección de patrones de comportamiento de bots en tiempo real para Habbo.",
    projGymTitle: "Gym Routine App",
    projGymDesc: "Aplicación de gestión de rutinas con Laravel Eloquent ORM en un entorno dockerizado.",
    projSupplierTitle: "Gestor de Proveedores",
    projSupplierDesc: "CRUD seguro construido en Symfony con cambio de modo oscuro y diseño responsivo.",

    sectionLabelContact: "Contacto",
    sectionTitleContact: "¿Hablamos <span>?</span>",
    contactNote: "Estoy abierto a <strong style=\"color:var(--text)\">prácticas profesionales</strong>, colaboraciones en proyectos web y <strong style=\"color:var(--text)\">oportunidades junior</strong> en el ámbito del desarrollo web.<br><br>Tarragona / Reus, Catalunya 🇪🇸",
    footerMiddle: "DAW · Institut Baix Camp · Reus",
    footerRight: "code · design · lead · create",
    sectionLabelMedia: "Motion Graphics & Showreel",
    sectionTitleMedia: "Edición <span>&</span> Producción Audiovisual",
    v1Title: "Animación de banner en After Effects", v2Title: "Anuncio de desayuno", v3Title: "Entrevista para anuncio de restaurante",
    v4Title: "Vídeo explicativo de TrueNas", v5Title: "Creación de una escena en After Effects", v6Title: "Presentación de plato", v7Title: "Animación de mapa"
  },
  en: {
    pageTitle: "Adil Chainakh — Web Developer",
    navSobre: "About",
    navExp: "Experience",
    navDocs: "Documents",
    navContacte: "Contact",

    heroTag: "Available for internships · Reus, Tarragona",
    heroRole: "Web Developer · DAW · Institut Baix Camp",
    heroDesc: "Web developer in training with a full stack: PHP, Laravel, Symfony, Java, JavaScript, SQL. Versatile profile combining code, design and video editing. Multilingual · 4 languages · Results-driven.",
    heroBtnLinkedin: "LinkedIn",
    heroBtnGithub: "GitHub",
    heroBtnContacte: "Contact",
    heroCodeComment: "// open to: internships · junior roles",

    sectionLabelSobre: "About me",
    sectionTitleSobre: "Who <span>I am</span>",
    aboutP1: "I'm <strong>Adil Chainakh</strong>, a Higher Vocational student in Web Application Development (DAW) at <strong>Institut Baix Camp in Reus</strong>.",
    aboutP2: "I work with <strong>PHP, Laravel and Symfony</strong> for the backend, <strong>HTML, CSS, Bootstrap and JavaScript</strong> for the frontend, and <strong>MySQL and SQL</strong> for databases. I manage my projects using <strong>Git and GitHub</strong>.",
    aboutP3: "Before entering the coding world, I managed teams in hospitality and closed automotive sales — skills I now apply to teamwork and client communication. I speak <strong>4 languages</strong>: Arabic, Spanish, English and French.",
    aboutP4: "Beyond development, I'm proficient in <strong>graphic design</strong> tools (Figma, Photoshop, Canva) and <strong>video editing</strong> (After Effects, Premiere Pro, CapCut).",
    skillsBackend: "Backend",
    skillsFrontend: "Frontend",
    skillsTools: "Tools",
    skillsDesign: "Design & Video",
    skillsLangs: "Languages",
    pillArab: "Arabic · Native",
    pillCas: "Spanish · Advanced",
    pillEng: "English · Advanced",
    pillFr: "French · Intermediate",
    pillCat: "Catalan · Basic",

    sectionLabelExp: "Career",
    sectionTitleExp: "Experience <span>&</span> Education",
    exp1Company: "Institut Baix Camp · Reus",
    exp1Title: "HND Web Application Development (DAW)",
    exp1Desc: "PHP/Laravel/Symfony · Java · JavaScript · SQL · HTML/CSS/Bootstrap · Git · Docker · Scrum",
    exp2Company: "Independent Developer",
    exp2Title: "Contract Projects & Freelance",
    exp2Desc: "Designed and engineered 2 full-scale e-commerce storefronts for regional clients. Integrated secure membership systems and payment processing via Stripe API pipelines.",
    exp3Company: "Beach House La Mora",
    exp3Title: "Restaurant Manager",
    exp3Desc: "Team management and coordination in high-demand environments. Stock control, orders and daily operations. Customer service and incident resolution.",
    exp4Company: "Quattros",
    exp4Title: "Waiter",
    exp4Desc: "Table service with personalised customer attention. Teamwork in a fast-paced restaurant setting.",
    exp5Company: "Navarro Automoción",
    exp5Title: "Automotive Sales Advisor",
    exp5Desc: "Vehicle sales advisory and deal closing. Documentation, contracts and after-sales follow-up.",

    sectionLabelDocs: "Portfolio & Creations",
    sectionTitleDocs: "Projects <span>&</span> Documents",
    doc1Title: "Curriculum Vitae",
    doc1Desc: "Complete professional CV containing my profile, career path and skill matrix in official layout.",
    projVenueDesc: "Real-time social discovery PWA with E2E encrypted chat and zero-cost infrastructure architecture.",
    projHabboTitle: "Sulake Habbo Radar",
    projHabboDesc: "Automated real-time bot behavior pattern detection script developed for Sulake Habbo Ecosystem.",
    projGymTitle: "Gym Routine App",
    projGymDesc: "Full routine tracking application engineered via Laravel Eloquent ORM within a Docker ecosystem.",
    projSupplierTitle: "Supplier Core Matrix",
    projSupplierDesc: "Secure enterprise CRUD architecture built on Symfony featuring Native Dark Mode and a responsive design.",

    sectionLabelContact: "Contact",
    sectionTitleContact: "Let's talk <span>?</span>",
    contactNote: "I'm open to <strong style=\"color:var(--text)\">professional internships</strong>, web project collaborations and <strong style=\"color:var(--text)\">junior opportunities</strong> in web development.<br><br>Tarragona / Reus, solutions 🇪🇸",
    footerMiddle: "DAW · Institut Baix Camp · Reus",
    footerRight: "code · design · lead · create",
    sectionLabelMedia: "Motion & Video Production",
    sectionTitleMedia: "Motion <span>&</span> Video Production",
    v1Title: "Banner Animation After Effects", v2Title: "Breakfast Commercial", v3Title: "Restaurant Ad Interview",
    v4Title: "TrueNas Video Explanator", v5Title: "Building up a scene in AE", v6Title: "Dish Presentation", v7Title: "Map Animation"
  }
};

let currentAppLanguage = 'ca';

// ─── CORE TRANSLATION ENGINE FUNCTION ─────────────────────────
function applyLang(lang) {
  currentAppLanguage = lang;
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;
  document.title = t.pageTitle;

  const safeText = (selector, text) => {
    const el = document.querySelector(selector);
    if (el && text !== undefined) el.textContent = text;
  };
  const safeHTML = (selector, html) => {
    const el = document.querySelector(selector);
    if (el && html !== undefined) el.innerHTML = html;
  };

  // Nav Links
  safeText('[data-i18n="navSobre"]', t.navSobre);
  safeText('[data-i18n="navExp"]', t.navExp);
  safeText('[data-i18n="navDocs"]', t.navDocs);
  safeText('[data-i18n="navContacte"]', t.navContacte);

  // Hero Blocks
  safeText('[data-i18n="heroTag"]', t.heroTag);
  safeText('[data-i18n="heroRole"]', t.heroRole);
  safeText('[data-i18n="heroDesc"]', t.heroDesc);
  safeText('[data-i18n="heroBtnLinkedin"]', t.heroBtnLinkedin);
  safeText('[data-i18n="heroBtnGithub"]', t.heroBtnGithub);
  safeText('[data-i18n="heroBtnContacte"]', t.heroBtnContacte);
  safeText('[data-i18n="heroCodeComment"]', t.heroCodeComment);

  // About Blocks
  safeText('[data-i18n="sectionLabelSobre"]', t.sectionLabelSobre);
  safeHTML('[data-i18n="sectionTitleSobre"]', t.sectionTitleSobre);
  safeHTML('[data-i18n="aboutP1"]', t.aboutP1);
  safeHTML('[data-i18n="aboutP2"]', t.aboutP2);
  safeHTML('[data-i18n="aboutP3"]', t.aboutP3);
  safeHTML('[data-i18n="aboutP4"]', t.aboutP4);
  safeText('[data-i18n="skillsBackend"]', t.skillsBackend);
  safeText('[data-i18n="skillsFrontend"]', t.skillsFrontend);
  safeText('[data-i18n="skillsTools"]', t.skillsTools);
  safeText('[data-i18n="skillsDesign"]', t.skillsDesign);
  safeText('[data-i18n="skillsLangs"]', t.skillsLangs);
  safeText('[data-i18n="pillArab"]', t.pillArab);
  safeText('[data-i18n="pillCas"]', t.pillCas);
  safeText('[data-i18n="pillEng"]', t.pillEng);
  safeText('[data-i18n="pillFr"]', t.pillFr);
  safeText('[data-i18n="pillCat"]', t.pillCat);

  // Experience Roadmap
  safeText('[data-i18n="sectionLabelExp"]', t.sectionLabelExp);
  safeHTML('[data-i18n="sectionTitleExp"]', t.sectionTitleExp);
  for (let i = 1; i <= 5; i++) {
    safeText(`[data-i18n="exp${i}Company"]`, t[`exp${i}Company`]);
    safeText(`[data-i18n="exp${i}Title"]`, t[`exp${i}Title`]);
    safeText(`[data-i18n="exp${i}Desc"]`, t[`exp${i}Desc`]);
  }

  // Documents & Combined Resource Grid Strings
  safeText('[data-i18n="sectionLabelDocs"]', t.sectionLabelDocs);
  safeHTML('[data-i18n="sectionTitleDocs"]', t.sectionTitleDocs);
  safeText('[data-i18n="doc1Title"]', t.doc1Title);
  safeText('[data-i18n="doc1Desc"]', t.doc1Desc);
  safeText('[data-i18n="projVenueDesc"]', t.projVenueDesc);
  safeText('[data-i18n="projHabboTitle"]', t.projHabboTitle);
  safeText('[data-i18n="projHabboDesc"]', t.projHabboDesc);
  safeText('[data-i18n="projGymTitle"]', t.projGymTitle);
  safeText('[data-i18n="projGymDesc"]', t.projGymDesc);
  safeText('[data-i18n="projSupplierTitle"]', t.projSupplierTitle);
  safeText('[data-i18n="projSupplierDesc"]', t.projSupplierDesc);
  safeText('[data-i18n="doc2Title"]', t.doc2Title);
  safeText('[data-i18n="doc2Desc"]', t.doc2Desc);
  safeText('[data-i18n="doc3Title"]', t.doc3Title);
  safeText('[data-i18n="doc3Desc"]', t.doc3Desc);
  safeText('[data-i18n="doc6Title"]', t.doc6Title);
  safeText('[data-i18n="doc6Desc"]', t.doc6Desc);

  // Video Section Strings
  safeText('[data-i18n="sectionLabelMedia"]', t.sectionLabelMedia);
  safeHTML('[data-i18n="sectionTitleMedia"]', t.sectionTitleMedia);
  for (let v = 1; v <= 7; v++) { safeText(`[data-i18n="v${v}Title"]`, t[`v${v}Title`]); }

  // Contact Footer Block
  safeText('[data-i18n="sectionLabelContact"]', t.sectionLabelContact);
  safeHTML('[data-i18n="sectionTitleContact"]', t.sectionTitleContact);
  safeHTML('[data-i18n="contactNote"]', t.contactNote);
  safeText('[data-i18n="footerMiddle"]', t.footerMiddle);

  // Sync Dynamic Link for localized CV file redirection
  const cvCard = document.getElementById('dynamic-cv-card');
  if (cvCard) {
    cvCard.onclick = () => {
      const targetedPath = (lang === 'en') ? 'docs/Adil_Chainakh_CV_En.pdf' : 'docs/Adil_Chainakh_CV_Es.pdf';
      openDoc(targetedPath);
    };
  }

  // Active state visual flags for selectors
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('lang', lang);
}

// ─── APPLICATION MULTI-IMAGE DATA MATRIX ──────────────────────
const projectDeck = {
  venuepulse: {
    title: {
      ca: "VenuePulse — PWA de descobriment social en temps real",
      es: "VenuePulse: PWA de descubrimiento social en tiempo real",
      en: "VenuePulse — Real-time social discovery PWA",
    },
    stack: "Next.js 15, TypeScript, React, PostgreSQL/PostGIS, Supabase Realtime, Cloudflare R2, Stripe, Vercel Edge",
    screenshots: [
      "VenuePulse/1.png",
      "VenuePulse/2.png",
      "VenuePulse/3.png",
      "VenuePulse/4.png",
      "VenuePulse/5.png",
      "VenuePulse/6.png"
    ],
    desc: {
      ca: "PWA de descobriment social en temps real construïda amb Next.js 15 i Supabase. Disposa de xat encriptat de extrem a extrem mitjançant AES-GCM-256 del costat del client, capa de privadesa amb fluctuació de coordenades GPS, captures efímeres obligatòries per càmera amb eliminació automàtica en 6 hores i processament immediat de pagaments amb Stripe, Apple Pay i Google Pay.",
      es: "PWA de descubrimiento social en tiempo real construida con Next.js 15 y Supabase. Dispone de chat encriptado de extremo a extremo mediante AES-GCM-256 del lado del cliente, capa de privacidad con fluctuación de coordenadas GPS, capturas efímeras obligatorias por cámara con purga automática en 6 horas y procesamiento inmediato de pagos con Stripe, Apple Pay y Google Pay.",
      en: "Real-time social discovery PWA built with Next.js 15, TypeScript, React, PostgreSQL/PostGIS, Supabase Realtime, Cloudflare R2, and Stripe. Features client-side AES-GCM-256 E2E encrypted chat, GPS jitter privacy layer, camera-enforced ephemeral selfies with 6-hour auto-purge, and a Stripe-powered one-tap payment flow supporting Apple Pay and Google Pay. Deployed on Vercel Edge with zero-cost infrastructure architecture."
    },
    repo: "private"
  },
  habbo: {
    title: {
      ca: "Motor de radar de robot Habbo de Sulake",
      ee: "Motor de radar de Habbo Bot de Sulake",
      en: "Sulake Habbo Bot Radar Engine",
    },
    stack: "JavaScript, Node.js, WebSockets, Hex Packet Injection",
    screenshots: ["botRadar/1.png", "botRadar/2.png"],
    desc: {
      ca: "Script automatitzat especialitzat dissenyat per monitoritzar paquets entrants d'interfície de xarxa i interceptar patrons de bots automatitzats. Identifica vectors d'activitat maliciosa en mil·lisegons.",
      es: "Script automatizado especializado diseñado para monitorear paquetes entrantes de interfaz de red e interceptar patrones de bots automatizados. Identifica vectores de actividad maliciosa en milisegundos.",
      en: "Specialized automated script designed to parse inbound network socket packets and isolate automated machine interaction profiles. Targets malicious botting vectors in milliseconds."
    },
    repo: "private"
  },
  gym: {
    title: {
      ca: "Arquitectura del nucli de la rutina del gimnàs",
      ee: "Arquitectura básica de la rutina de gimnasio",
      en: "Gym Routine Core Architecture",
    },
    stack: "PHP, Laravel, Eloquent ORM, Bootstrap, MySQL, Docker",
    screenshots: ["gymApp/1 (7).png", "gymApp/1 (6).png", "gymApp/1 (5).png", "gymApp/1 (4).png", "gymApp/1 (3).png", "gymApp/1 (2).png", "gymApp/1 (1).png",],
    desc: {
      ca: "Estructura MVC neta construïda per controlar taules relacionades complexes mitjançant Eloquent. Permet assignacions ràpides d'exercicis en contenidors aïllats Docker.",
      es: "Estructura MVC limpia construida para controlar tablas relacionadas complejas mediante Eloquent. Permite asignaciones rápidas de ejercicios en contenedores aislados Docker.",
      en: "Clean decoupled MVC architectural template optimized for heavy multi-table operations handling through Eloquent ORM. Powered and deployed within localized Docker micro-environments."
    },
    repo: "https://github.com/adil-zero-one/rutinas-gimnasio"
  },
  suppliers: {
    title: {
      ca: "Framework Principal de Proveïdors",
      es: "Framework Principal de Proveedores",
      en: "Supplier Core Framework"
    },
    stack: "Symfony Framework, Twig, MySQL, Bootstrap, JavaScript Docker",
    screenshots: ["proveedores/1 (2).png", "proveedores/1 (1).png"],
    desc: {
      ca: "Tauler de control segur dissenyat sense autogeneradors de codi. Integra sistemes de disseny BOOTSTRAP completament responsius per a una prova de pràctiques per a l'empresa Viajes Para Ti.",
      es: "Panel de control seguro diseñado sin autogeneradores de código. Integra sistemas de diseño BOOTSTRAP totalmente responsivos para una prueba piloto de prácticas en la empresa Viajes Para Ti.",
      en: "Secure enterprise operational crud control dashboard structured from zero automated assistance blueprints. Integrates full responsive BOOTSTRAP layout systems for a trial test for internship for Viajes Para Ti company"
    },
    repo: "https://github.com/adil-zero-one/proveedores-symfony-viajespti"
  }
};

const projModal = document.getElementById('project-modal');
const sliderViewport = document.getElementById('modal-slider-viewport');
const dotsContainer = document.getElementById('sliderDotsIndicators');
const btnPrev = document.getElementById('slidePrev');
const btnNext = document.getElementById('slideNext');

function openProjectModal(key) {
  const data = projectDeck[key];
  if (!data || !projModal) return;

  // Kept exactly as your working structure
  document.getElementById('modal-project-title').textContent = data.title[currentLang];
  document.getElementById('modal-project-stack').textContent = data.stack;
  document.getElementById('modal-project-desc').textContent = data.desc[currentAppLanguage] || data.desc['ca'];

  const repoButton = document.getElementById('modal-project-codebase');
  if (repoButton) {
    // Target the text container inside the link box so the logo isn't altered
    const repoTextSpan = repoButton.querySelector('.contact-link-text');

    if (data.repo === "private") {
      repoButton.removeAttribute("href");
      repoButton.classList.add("btn-private-repo");

      // Update text dynamically matching your language status
      if (currentLang === "ca") repoTextSpan.textContent = "Repositori Privat";
      else if (currentLang === "es") repoTextSpan.textContent = "Repositorio Privado";
      else repoTextSpan.textContent = "Private Repository";
    } else {
      repoButton.href = data.repo;
      repoButton.classList.remove("btn-private-repo");

      // Restore standard action text dynamically 
      if (currentLang === "ca") repoTextSpan.textContent = "Inspecturar Repositori";
      else if (currentLang === "es") repoTextSpan.textContent = "Inspeccionar Repositorio";
      else repoTextSpan.textContent = "Inspect Repository";
    }
  }

  // Clear slider content
  sliderViewport.innerHTML = "";
  dotsContainer.innerHTML = "";

  // Append Screenshots
  data.screenshots.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Screenshot ${index + 1}`;
    sliderViewport.appendChild(img);

    const dot = document.createElement('div');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.onclick = () => {
      sliderViewport.scrollTo({ left: sliderViewport.clientWidth * index, behavior: 'smooth' });
    };
    dotsContainer.appendChild(dot);
  });

  // Toggle arrow controls depending on screenshot count
  if (data.screenshots.length <= 1) {
    btnPrev.style.display = "none";
    btnNext.style.display = "none";
    dotsContainer.style.display = "none";
  } else {
    btnPrev.style.display = "block";
    btnNext.style.display = "block";
    dotsContainer.style.display = "flex";
  }

  projModal.style.display = "flex";
}

// Track Modal Active Slide Dots
if (sliderViewport) {
  sliderViewport.addEventListener('scroll', () => {
    const index = Math.round(sliderViewport.scrollLeft / sliderViewport.clientWidth);
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  });

  if (btnPrev && btnNext) {
    btnPrev.onclick = () => sliderViewport.scrollBy({ left: -sliderViewport.clientWidth, behavior: 'smooth' });
    btnNext.onclick = () => sliderViewport.scrollBy({ left: sliderViewport.clientWidth, behavior: 'smooth' });
  }
}

const closeProjBtn = document.querySelector(".close-project-btn");
if (closeProjBtn) { closeProjBtn.onclick = () => { if (projModal) projModal.style.display = "none"; }; }

window.addEventListener('click', (e) => {
  if (projModal && e.target === projModal) projModal.style.display = "none";
  if (cinemaModal && e.target === cinemaModal) {
    cinemaModal.style.display = "none";
    cinemaVideo.pause();
    cinemaVideo.src = "";
  }
});

// ─── INITIALIZATION & CAROUSEL INPUT LOGIC ──────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'ca';
  applyLang(saved);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  initDraggableCarousel();
});

// ─── HAND-CRAFTED MOUSE/TOUCH DRAGGABLE CAROUSEL ENGINE ──────
// ─── HAND-CRAFTED MOUSE/TOUCH DRAGGABLE CAROUSEL ENGINE ──────
function initDraggableCarousel() {
  const wrapper = document.querySelector('.slider-wrapper');
  const track = document.getElementById('videoTrack');
  const scrollBar = document.getElementById('carouselScrollBar');
  if (!wrapper || !track || !scrollBar) return;

  let isDragging = false;
  let startX;
  let animationId;
  let autoplaySpeed = 0.4;
  let currentTransform = 0;
  let isHovered = false;

  // Calculate maximum allowed negative transform bound dynamically
  const getMaxScroll = () => -(track.scrollWidth - wrapper.clientWidth);

  // Sync range slider position with current transform percentage
  function updateSliderThumb() {
    const maxScroll = getMaxScroll();
    if (maxScroll < 0) {
      scrollBar.value = (currentTransform / maxScroll) * 100;
    }
  }

  // Continuous Autoplay Loop using translate3d
  function autoPlayLoop() {
    if (!isDragging && !isHovered) {
      currentTransform -= autoplaySpeed;
      const maxScroll = getMaxScroll();

      if (currentTransform <= maxScroll) {
        currentTransform = 0;
      }
      track.style.transform = `translate3d(${currentTransform}px, 0px, 0px)`;
      updateSliderThumb();
    }
    animationId = requestAnimationFrame(autoPlayLoop);
  }
  animationId = requestAnimationFrame(autoPlayLoop);

  // Manual input handling on the range slider bar
  scrollBar.addEventListener('input', () => {
    const maxScroll = getMaxScroll();
    currentTransform = (scrollBar.value / 100) * maxScroll;
    track.style.transform = `translate3d(${currentTransform}px, 0px, 0px)`;
  });

  // Toggle flags on hover to safely pause loop execution
  wrapper.addEventListener('mouseenter', () => isHovered = true);
  wrapper.addEventListener('mouseleave', () => { if (!isDragging) isHovered = false; });
  scrollBar.addEventListener('mouseenter', () => isHovered = true);
  scrollBar.addEventListener('mouseleave', () => isHovered = false);

  // Mouse Input Engine Drivers
  wrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - currentTransform;
    cancelAnimationFrame(animationId);
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    isHovered = false;
    animationId = requestAnimationFrame(autoPlayLoop);
  });

  wrapper.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX;
    const maxScroll = getMaxScroll();

    currentTransform = Math.min(0, Math.max(walk, maxScroll));
    track.style.transform = `translate3d(${currentTransform}px, 0px, 0px)`;
    updateSliderThumb();
  });

  // Mobile Touch Input Engine Drivers
  wrapper.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - currentTransform;
    cancelAnimationFrame(animationId);
  });

  window.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    animationId = requestAnimationFrame(autoPlayLoop);
  });

  wrapper.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = x - startX;
    const maxScroll = getMaxScroll();

    currentTransform = Math.min(0, Math.max(walk, maxScroll));
    track.style.transform = `translate3d(${currentTransform}px, 0px, 0px)`;
    updateSliderThumb();
  });
}

// ─── SCROLL REVEAL (FIRE ONCE ONLY) ───────────────────────────
// ========================================================
// REPARACIÓN COMPLETA DE ANIMACIONES DE ENTRADA (GSAP & OBSERVER CORREGIDO)
// ========================================================

// ─── SCROLL REVEAL (FIRE ONCE ONLY) ───────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.section-label, .section-title, .about-text p, .skills-group, .exp-item, .doc-card, .contact-link, .contact-note').forEach(el => {
    observer.observe(el);
  });
}
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initScrollReveal); } else { initScrollReveal(); }


// ========================================================
// CONFIGURACIÓN DEL CHATBOT TRILINGÜE (INTEGRADO)
// ========================================================
document.addEventListener("DOMContentLoaded", () => {

  // Base de datos de conversación del asistente
  const botDatabase = {
    es: {
      toggleText: "💬 Habla con mi asistente",
      welcome: "¡Hola! Soy el asistente de Adil. ¿Qué te gustaría conocer sobre su perfil técnico?",
      autoWhatsAppMessage: "Hola Adil, he estado viendo tu portfolio y me gustaría ponerme en contacto contigo para hablar de un proyecto.",
      options: [
        { text: "💻 Ver Proyectos de Desarrollo", next: "projects" },
        { text: "📈 Estrategias de Marketing", next: "marketing" },
        { text: "🚀 Hablar con él en WhatsApp", next: "direct_whatsapp" }
      ],
      projects: {
        text: "Adil trabaja con tecnologías como Java, JavaScript y Python, enfocándose en código limpio y automatizaciones. ¿Qué deseas ver ahora?",
        options: [
          { text: "📂 Ir a su repositorio de GitHub", next: "github" },
          { text: "💬 Enviar un WhatsApp directo", next: "direct_whatsapp" }
        ]
      },
      marketing: {
        text: "Combina el desarrollo técnico con el Marketing Digital: optimización de conversiones, analítica de datos e impacto de negocio enfocado al producto.",
        options: [
          { text: "💼 Hablar de un proyecto por WhatsApp", next: "direct_whatsapp" }
        ]
      }
    },
    ca: {
      toggleText: "💬 Parla amb el meu assistent",
      welcome: "Hola! Sóc l'assistent virtual de l'Adil. Què t'agradaria saber sobre el seu perfil tècnic?",
      autoWhatsAppMessage: "Hola Adil, he estat mirant el teu portfolio i m'agradaria posar-me en contacte amb tu per parlar d'un projecte.",
      options: [
        { text: "💻 Veure Projectes de Desenvolupament", next: "projects" },
        { text: "📈 Estratègies de Màrqueting", next: "marketing" },
        { text: "🚀 Parlar amb ell per WhatsApp", next: "direct_whatsapp" }
      ],
      projects: {
        text: "L'Adil domina tecnologies com Java, JavaScript i Python. Desenvolupa codi net i automatitzacions eficients. Què vols comprovar?",
        options: [
          { text: "📂 Anar al seu repositori de GitHub", next: "github" },
          { text: "💬 Enviar un WhatsApp directe", next: "direct_whatsapp" }
        ]
      },
      marketing: {
        text: "Combina el desenvolupament amb el Màrqueting Digital: optimització de conversions, analítica tècnica i impacte de negoci.",
        options: [
          { text: "💼 Parlar d'un projecte per WhatsApp", next: "direct_whatsapp" }
        ]
      }
    },
    en: {
      toggleText: "💬 Talk to my assistant",
      welcome: "Hi! I am Adil's virtual assistant. What would you like to know about his technical skills?",
      autoWhatsAppMessage: "Hi Adil, I was checking out your portfolio and I would like to connect with you regarding a project.",
      options: [
        { text: "💻 View Development Projects", next: "projects" },
        { text: "📈 Marketing Strategies", next: "marketing" },
        { text: "🚀 Chat with him on WhatsApp", next: "direct_whatsapp" }
      ],
      projects: {
        text: "Adil develops with Java, JavaScript, and Python, focusing on clean code and performance automation. What's next?",
        options: [
          { text: "📂 Open his GitHub Profile", next: "github" },
          { text: "💬 Send a direct WhatsApp", next: "direct_whatsapp" }
        ]
      },
      marketing: {
        text: "He blends software development with Digital Marketing: technical data analytics, SEO/SEM performance, and growth strategies.",
        options: [
          { text: "💼 Discuss a project on WhatsApp", next: "direct_whatsapp" }
        ]
      }
    }
  };

  const chatToggle = document.getElementById("chat-toggle");
  const chatBox = document.getElementById("chat-box");
  const chatMessages = document.getElementById("chat-messages");
  const chatOptions = document.getElementById("chat-options");

  let isChatInitialized = false;

  // ACTUALIZACIÓN COMPLETA DEL BOTÓN (ICONO A LA IZQUIERDA)
  function syncAssistantLanguage() {
    // Leemos el idioma activo directamente de tu motor principal (currentAppLanguage)
    const activeLang = typeof currentAppLanguage !== 'undefined' ? currentAppLanguage : 'ca';
    const langData = botDatabase[activeLang] || botDatabase['ca'];

    if (chatToggle) {
      // Icono estrictamente a la izquierda del contenedor de texto
      chatToggle.innerHTML = `<i class="fas fa-comments" style="margin-right: 8px;"></i><span class="toggle-text">${langData.toggleText}</span>`;
    }

    // Si el chat ya está abierto y el usuario cambia de idioma, reiniciamos el flujo visible de forma fluida
    if (chatBox && chatBox.classList.contains("active")) {
      chatMessages.innerHTML = "";
      const data = botDatabase[activeLang] || botDatabase['ca'];
      renderMessage(data.welcome, "bot");
      renderOptions(data.options);
    }
  }

  // Interceptamos la función applyLang de tu portfolio para enterarnos de los cambios de idioma en tiempo real
  const originalApplyLang = window.applyLang;
  if (typeof window.applyLang === 'function') {
    window.applyLang = function (lang) {
      originalApplyLang(lang);
      syncAssistantLanguage();
    };
  } else {
    // Si no está global, nos acoplamos a los botones de selección nativos directamente
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setTimeout(syncAssistantLanguage, 50);
      });
    });
  }

  // Ejecución inicial limpia
  setTimeout(syncAssistantLanguage, 100);

  // Toggle Ventana de Chat (Mantiene animaciones GSAP controladas)
  if (chatToggle && chatBox) {
    chatToggle.addEventListener("click", () => {
      syncAssistantLanguage();

      if (!chatBox.classList.contains("active")) {
        chatBox.classList.add("active");
        if (typeof gsap !== "undefined") {
          gsap.to(chatBox, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
        } else {
          chatBox.style.opacity = "1";
          chatBox.style.transform = "translateY(0)";
        }

        chatMessages.innerHTML = "";
        const activeLang = typeof currentAppLanguage !== 'undefined' ? currentAppLanguage : 'ca';
        const data = botDatabase[activeLang] || botDatabase['ca'];
        renderMessage(data.welcome, "bot");
        renderOptions(data.options);
      } else {
        if (typeof gsap !== "undefined") {
          gsap.to(chatBox, {
            opacity: 0, y: 15, duration: 0.2, ease: "power2.in", onComplete: () => {
              chatBox.classList.remove("active");
            }
          });
        } else {
          chatBox.classList.remove("active");
        }
      }
    });
  }

  function renderMessage(text, sender) {
    if (!chatMessages) return;
    const msg = document.createElement("div");
    msg.className = `message ${sender}`;
    msg.innerText = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function renderOptions(optionsArray) {
    if (!chatOptions) return;
    chatOptions.innerHTML = "";
    optionsArray.forEach(option => {
      const btn = document.createElement("button");
      btn.innerText = option.text;
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        handleRoute(option);
      });
      chatOptions.appendChild(btn);
    });
  }

  function handleRoute(selectedOption) {
    renderMessage(selectedOption.text, "user");
    const activeLang = typeof currentAppLanguage !== 'undefined' ? currentAppLanguage : 'ca';
    const langData = botDatabase[activeLang] || botDatabase['ca'];

    if (selectedOption.next === "direct_whatsapp") {
      executeWhatsAppRedirect(langData.autoWhatsAppMessage);
    } else if (selectedOption.next === "github") {
      window.open("https://github.com/adil-zero-one", "_blank");
    } else if (langData[selectedOption.next]) {
      setTimeout(() => {
        const nextStep = langData[selectedOption.next];
        renderMessage(nextStep.text, "bot");
        renderOptions(nextStep.options);
      }, 400);
    }
  }

  function executeWhatsAppRedirect(cleanMessage) {
    const phone = "34698686436";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(cleanMessage)}`;
    window.open(url, "_blank");
  }

});

