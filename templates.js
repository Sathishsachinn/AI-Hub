// ═══════════════════════════════════════════
//  TEMPLATES DATA
// ═══════════════════════════════════════════
const tools = [
  // UI Components
  { name: "Motion", desc: "Build stunning animated interfaces. Pre-built UI templates.", url: "https://motion.site.ai/", category: "ui", pricing: "freemium", tags: ["ui", "animation", "motion"], isNew: true, isTrending: true },
  { name: "v0 by Vercel", desc: "Generate React UI components using AI.", url: "https://v0.dev/", category: "ui", pricing: "freemium", tags: ["react", "ui-gen", "vercel"], isNew: false, isTrending: true },
  { name: "UIzard", desc: "AI-powered UI design tool for prototyping in minutes.", url: "https://uizard.io/", category: "ui", pricing: "freemium", tags: ["design", "prototype"], isNew: false, isTrending: false },
  { name: "Tailwind UI", desc: "Beautifully designed, expertly crafted components.", url: "https://tailwindui.com/", category: "ui", pricing: "paid", tags: ["tailwind", "css"], isNew: false, isTrending: true },

  // Frontend Templates
  { name: "Lovable", desc: "Prompt to full stack web app instantly.", url: "https://lovable.dev/", category: "frontend", pricing: "freemium", tags: ["fullstack", "react", "app-builder"], isNew: true, isTrending: true },
  { name: "Vercel Templates", desc: "Jumpstart your app development with pre-built solutions.", url: "https://vercel.com/templates", category: "frontend", pricing: "free", tags: ["nextjs", "react"], isNew: false, isTrending: true },
  { name: "Create React App", desc: "Set up a modern web app by running one command.", url: "https://create-react-app.dev/", category: "frontend", pricing: "free", tags: ["react", "boilerplate"], isNew: false, isTrending: false },
  { name: "Bolt.new", desc: "In-browser web development powered by AI.", url: "https://bolt.new/", category: "frontend", pricing: "freemium", tags: ["web-builder", "ai-assist"], isNew: true, isTrending: true },

  // Backend Boilerplates
  { name: "Supabase", desc: "Open source Firebase alternative with auto-generated APIs.", url: "https://supabase.com/", category: "backend", pricing: "freemium", tags: ["backend", "postgres", "auth"], isNew: false, isTrending: true },
  { name: "Appwrite", desc: "Secure open-source backend server for Web, Mobile & Flutter.", url: "https://appwrite.io/", category: "backend", pricing: "free", tags: ["backend", "open-source"], isNew: false, isTrending: false },
  { name: "NestJS Boilerplate", desc: "A progressive Node.js framework for building efficient server-side apps.", url: "https://nestjs.com/", category: "backend", pricing: "free", tags: ["nodejs", "typescript"], isNew: false, isTrending: false },
  
  // Database Schemas
  { name: "Prisma", desc: "Next-generation Node.js and TypeScript ORM.", url: "https://www.prisma.io/", category: "database", pricing: "free", tags: ["orm", "database"], isNew: false, isTrending: true },
  { name: "PlanetScale", desc: "The world's most advanced serverless MySQL platform.", url: "https://planetscale.com/", category: "database", pricing: "freemium", tags: ["mysql", "serverless"], isNew: false, isTrending: false },
  { name: "Neon", desc: "Serverless Postgres built for developers.", url: "https://neon.tech/", category: "database", pricing: "freemium", tags: ["postgres", "serverless"], isNew: false, isTrending: true },

  // Automation
  { name: "n8n", desc: "Fair-code workflow automation tool.", url: "https://n8n.io/", category: "automation", pricing: "freemium", tags: ["workflow", "automation"], isNew: false, isTrending: true },
  { name: "Make", desc: "Design, build, and automate anything.", url: "https://www.make.com/en", category: "automation", pricing: "freemium", tags: ["no-code", "automation"], isNew: false, isTrending: false },
  { name: "Axiom browser automation", desc: "Browser automation without code.", url: "https://axiom.ai/", category: "automation", pricing: "freemium", tags: ["browser", "bot"], isNew: false, isTrending: false },

  // Misc
  { name: "Framer", desc: "Design and ship your dream site. Zero code, maximum speed.", url: "https://www.framer.com/", category: "misc", pricing: "freemium", tags: ["website", "design"], isNew: false, isTrending: true },
  { name: "Webflow", desc: "Create, collaborate, and scale beautiful websites.", url: "https://webflow.com/", category: "misc", pricing: "freemium", tags: ["website", "cms"], isNew: false, isTrending: false },

  // AI UI Generation
  { name: "Galileo AI", desc: "High-fidelity UI designs from text prompts.", url: "https://www.usegalileo.ai", category: "ui", pricing: "freemium", tags: ["design", "ui-gen"], isNew: false, isTrending: true },
  { name: "Subframe", desc: "Clean, production-ready AI UI components and systems.", url: "https://www.subframe.com", category: "ui", pricing: "freemium", tags: ["components", "system"], isNew: false, isTrending: false },
  { name: "Magic Patterns", desc: "AI design system and component generator.", url: "https://magicpatterns.com", category: "ui", pricing: "freemium", tags: ["design-system", "components"], isNew: false, isTrending: false },
  { name: "Komposo", desc: "Text or image to maintainable, framework-flexible UI code.", url: "https://www.komposo.ai", category: "ui", pricing: "freemium", tags: ["ui-code", "frameworks"], isNew: true, isTrending: false },
  { name: "Dyad", desc: "Open-source/local v0-style UI generator.", url: "https://dyad.sh", category: "ui", pricing: "free", tags: ["open-source", "ui-gen"], isNew: true, isTrending: false },
  { name: "Figma Make", desc: "Prompt to responsive interactive websites inside Figma.", url: "https://www.figma.com/solutions/ai-website-builder", category: "ui", pricing: "freemium", tags: ["figma", "design"], isNew: false, isTrending: true },
  { name: "Canva AI Code", desc: "Text prompts to interactive website elements/widgets.", url: "https://www.canva.com/ai-code-generator", category: "ui", pricing: "freemium", tags: ["canva", "widgets"], isNew: false, isTrending: false },
  { name: "Locofy", desc: "Figma/Sketch designs to production frontend code.", url: "https://www.locofy.ai", category: "ui", pricing: "free", tags: ["figma-to-code", "react"], isNew: false, isTrending: true },
  { name: "Relume", desc: "AI sitemaps, wireframes, and component library.", url: "https://www.relume.io", category: "ui", pricing: "freemium", tags: ["webflow", "wireframes"], isNew: false, isTrending: true },
  { name: "Flowstep", desc: "Conversational prompts to complete product UI experiences.", url: "https://flowstep.ai", category: "ui", pricing: "freemium", tags: ["ui-gen", "conversation"], isNew: false, isTrending: false },
  { name: "Google Stitch", desc: "Text/sketches to high-fidelity UI and code (experimental).", url: "https://labs.google", category: "ui", pricing: "free", tags: ["experimental", "google"], isNew: true, isTrending: false },
  { name: "ProtoPie", desc: "Advanced interactive prototypes with AI support.", url: "https://www.protopie.io", category: "ui", pricing: "freemium", tags: ["prototype", "interaction"], isNew: false, isTrending: false },
  { name: "Moonchild AI", desc: "Intent-based UI and logic orchestration for prototypes.", url: "https://moonchild.ai", category: "ui", pricing: "freemium", tags: ["ui", "logic"], isNew: true, isTrending: false },
  { name: "Banani", desc: "Prompt/image to high-fidelity designs or HTML/CSS exports.", url: "https://www.banani.co", category: "ui", pricing: "freemium", tags: ["html", "css"], isNew: false, isTrending: false },
  { name: "Motiff", desc: "AI UI generator for production-ready interfaces.", url: "https://www.motiff.com", category: "ui", pricing: "freemium", tags: ["ui-gen", "figma"], isNew: false, isTrending: false },
  { name: "Kombai", desc: "Design-to-code with high-fidelity Figma conversions.", url: "https://kombai.com", category: "ui", pricing: "freemium", tags: ["figma-to-code"], isNew: false, isTrending: false },
  { name: "AIDesigner", desc: "Premium UI generation with strong visual quality.", url: "https://www.aidesigner.ai", category: "ui", pricing: "freemium", tags: ["ui-gen"], isNew: false, isTrending: false },
  { name: "Supafine", desc: "AI-powered React UI component builder.", url: "https://supafine.ai", category: "ui", pricing: "freemium", tags: ["react", "components"], isNew: true, isTrending: false },
  { name: "Fine", desc: "Clean UI generation with focus on speed and simplicity.", url: "https://fine.dev", category: "ui", pricing: "freemium", tags: ["ui-gen"], isNew: false, isTrending: false },
  { name: "Morph", desc: "Innovative UI component tool for modern stacks.", url: "https://morph.dev", category: "ui", pricing: "freemium", tags: ["components", "modern"], isNew: false, isTrending: false },
  { name: "Anima", desc: "Design-to-production code (Figma to React/HTML).", url: "https://www.animaapp.com", category: "ui", pricing: "freemium", tags: ["figma-to-code", "react"], isNew: false, isTrending: true },
  { name: "Unicorn Studio", desc: "AI for adding 3D effects and interactive elements.", url: "https://unicorn.studio", category: "ui", pricing: "freemium", tags: ["3d", "interactive"], isNew: false, isTrending: false },
  { name: "Aura Build", desc: "New AI design tool for modern web prototypes.", url: "https://aurabuild.com", category: "ui", pricing: "freemium", tags: ["ui-gen", "modern"], isNew: true, isTrending: false },
  { name: "CopilotKit", desc: "Framework for building AI-powered user interfaces.", url: "https://copilotkit.ai", category: "ui", pricing: "freemium", tags: ["framework", "components"], isNew: false, isTrending: false },

  // AI Frontend / App Builders
  { name: "Base44", desc: "Fast prompt-to-app for internal tools and MVPs.", url: "https://base44.com", category: "frontend", pricing: "paid", tags: ["mvp", "internal-tools"], isNew: false, isTrending: false },
  { name: "Emergent", desc: "Full-stack product development from prompts.", url: "https://emergent.sh", category: "frontend", pricing: "paid", tags: ["product-dev", "fullstack"], isNew: false, isTrending: false },
  { name: "NxCode", desc: "Dual-agent system for building web apps & MVPs.", url: "https://www.nxcode.io", category: "frontend", pricing: "paid", tags: ["agents", "mvp"], isNew: false, isTrending: false },
  { name: "Builder.io", desc: "Visual AI-powered development and CMS.", url: "https://www.builder.io", category: "frontend", pricing: "freemium", tags: ["visual-builder", "cms"], isNew: false, isTrending: true },
  { name: "Softr", desc: "No-code apps on Airtable with AI features.", url: "https://softr.io", category: "frontend", pricing: "freemium", tags: ["no-code", "airtable"], isNew: false, isTrending: false },
  { name: "Bubble", desc: "Visual web app builder with AI assistance.", url: "https://bubble.io", category: "frontend", pricing: "freemium", tags: ["no-code", "visual"], isNew: false, isTrending: true },
  { name: "PlayCode", desc: "AI web design and coding playground.", url: "https://playcode.io", category: "frontend", pricing: "free", tags: ["playground", "sandbox"], isNew: false, isTrending: false },
  { name: "LUMI.new", desc: "AI app builder focused on quick SaaS and web apps.", url: "https://lumi.new", category: "frontend", pricing: "freemium", tags: ["saas", "app-builder"], isNew: true, isTrending: false },
  { name: "Reflex.build", desc: "Python-based AI app builder for cross-functional teams.", url: "https://reflex.dev", category: "frontend", pricing: "freemium", tags: ["python", "app-builder"], isNew: false, isTrending: false },
  { name: "Rork", desc: "Emerging AI app builder for rapid development.", url: "https://rork.ai", category: "frontend", pricing: "freemium", tags: ["app-builder", "rapid"], isNew: true, isTrending: false },
  { name: "UI Bakery", desc: "Prompt-to-full-stack with low-code flexibility.", url: "https://uibakery.io", category: "frontend", pricing: "freemium", tags: ["low-code", "fullstack"], isNew: false, isTrending: false },

  // AI Backend / CMS
  { name: "Hygraph", desc: "Headless CMS with strong AI/content tools.", url: "https://hygraph.com", category: "backend", pricing: "freemium", tags: ["cms", "headless"], isNew: false, isTrending: false },
  { name: "Sanity", desc: "AI-enhanced content platform for modern websites.", url: "https://www.sanity.io", category: "backend", pricing: "freemium", tags: ["cms", "platform"], isNew: false, isTrending: false },
  { name: "Contentful", desc: "Enterprise headless CMS with AI integrations.", url: "https://www.contentful.com", category: "backend", pricing: "paid", tags: ["enterprise", "cms"], isNew: false, isTrending: false },
  { name: "Firebase + Gen AI", desc: "Backend + AI for rapid web apps.", url: "https://firebase.google.com", category: "backend", pricing: "freemium", tags: ["firebase", "backend-as-a-service"], isNew: false, isTrending: false },

  // AI Website Builders (Misc)
  { name: "Wix AI", desc: "Chat a few questions to full custom website.", url: "https://www.wix.com/ai-website-builder", category: "misc", pricing: "freemium", tags: ["website-builder", "no-code"], isNew: false, isTrending: true },
  { name: "Hostinger AI", desc: "Quick 4-click or prompt-based sites with hosting.", url: "https://www.hostinger.com/ai-website-builder", category: "misc", pricing: "paid", tags: ["hosting", "website-builder"], isNew: false, isTrending: false },
  { name: "Durable", desc: "AI builds complete business websites fast.", url: "https://durable.co", category: "misc", pricing: "paid", tags: ["business", "website-builder"], isNew: false, isTrending: true },
  { name: "Dorik", desc: "AI-powered no-code website creator.", url: "https://dorik.com", category: "misc", pricing: "freemium", tags: ["no-code", "website-builder"], isNew: false, isTrending: false },
  { name: "Duda", desc: "AI website builder for agencies.", url: "https://www.duda.co", category: "misc", pricing: "paid", tags: ["agencies", "website-builder"], isNew: false, isTrending: false },
  { name: "CodeDesign.ai", desc: "AI companion for generating and editing websites via chat.", url: "https://codedesign.ai", category: "misc", pricing: "freemium", tags: ["chat", "website-builder"], isNew: false, isTrending: false },
  { name: "Bookipi", desc: "Simple AI website builder.", url: "https://bookipi.com", category: "misc", pricing: "freemium", tags: ["simple", "website-builder"], isNew: false, isTrending: false },
  { name: "GoDaddy AI", desc: "AI site builder with e-commerce focus.", url: "https://www.godaddy.com/ai-website-builder", category: "misc", pricing: "paid", tags: ["ecommerce", "website-builder"], isNew: false, isTrending: false },
  { name: "Wegic", desc: "AI website builder that creates sites in seconds with guided assistance.", url: "https://wegic.ai", category: "misc", pricing: "freemium", tags: ["guided", "website-builder"], isNew: false, isTrending: false },
  { name: "LandingHero.ai", desc: "Fast AI website builder for landing pages and SaaS sites.", url: "https://www.landinghero.ai", category: "misc", pricing: "freemium", tags: ["landing-page", "saas"], isNew: true, isTrending: false },
  { name: "Skywork", desc: "Quick AI-powered site and app builder.", url: "https://skywork.ai", category: "misc", pricing: "freemium", tags: ["app-builder", "website-builder"], isNew: false, isTrending: false },
  { name: "Neo Sites", desc: "Simple, smart AI builder for everyday business sites.", url: "https://neosites.com", category: "misc", pricing: "freemium", tags: ["business", "website-builder"], isNew: false, isTrending: false },
  { name: "Olitt", desc: "AI website creator with global appeal and quick setup.", url: "https://olitt.com", category: "misc", pricing: "free", tags: ["quick-setup", "website-builder"], isNew: false, isTrending: false },
  { name: "Tithely Sites", desc: "AI-powered sites tailored for organizations/churches.", url: "https://tithely.com", category: "misc", pricing: "paid", tags: ["churches", "organizations"], isNew: false, isTrending: false },
  { name: "Design.com", desc: "AI website builder with design-focused features.", url: "https://design.com", category: "misc", pricing: "freemium", tags: ["design", "website-builder"], isNew: false, isTrending: false },
  { name: "Squarespace AI", desc: "AI-assisted professional site building.", url: "https://www.squarespace.com/ai-website-builder", category: "misc", pricing: "paid", tags: ["professional", "website-builder"], isNew: false, isTrending: false },
  { name: "IONOS AI", desc: "Budget-friendly AI site creation with hosting.", url: "https://www.ionos.com/ai-website-builder", category: "misc", pricing: "paid", tags: ["hosting", "budget"], isNew: false, isTrending: false },
  { name: "DreamHost AI", desc: "AI-powered sites with strong hosting integration.", url: "https://www.dreamhost.com/ai-website-builder", category: "misc", pricing: "paid", tags: ["hosting", "website-builder"], isNew: false, isTrending: false },
  { name: "Mobirise", desc: "Offline-friendly AI website builder.", url: "https://mobirise.com", category: "misc", pricing: "free", tags: ["offline", "windows"], isNew: false, isTrending: false },
  { name: "Webstudio", desc: "Pro designer’s AI/no-code tool for custom sites.", url: "https://webstudio.is", category: "misc", pricing: "freemium", tags: ["designer", "no-code"], isNew: false, isTrending: false }
];

// ═══════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════
let favorites = JSON.parse(localStorage.getItem('aihub_templates_favorites') || '[]');
let ratings = JSON.parse(localStorage.getItem('aihub_templates_ratings') || '{}');
let activeCategory = 'all';
let activePrice = 'all';
let activeSort = 'default';
let activeSearch = '';
let activeTag = '';

// ═══════════════════════════════════════════
//  RENDER
// ═══════════════════════════════════════════
function getFiltered() {
  let list = [...tools];

  if (activeCategory === 'favorites') {
    list = list.filter(t => favorites.includes(t.name));
  } else if (activeCategory !== 'all') {
    list = list.filter(t => t.category === activeCategory);
  }

  if (activePrice !== 'all') {
    list = list.filter(t => t.pricing === activePrice);
  }

  if (activeTag) {
    list = list.filter(t => t.tags.includes(activeTag));
  }

  if (activeSearch.trim()) {
    const q = activeSearch.toLowerCase();
    list = list.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.desc.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.includes(q)) ||
      t.category.includes(q)
    );
  }

  if (activeCategory === 'favorites') {
    // Sort by exact order in favorites array (for drag-and-drop support)
    list.sort((a, b) => favorites.indexOf(a.name) - favorites.indexOf(b.name));
  } else {
    // Normal sorting
    if (activeSort === 'az') list.sort((a, b) => a.name.localeCompare(b.name));
    else if (activeSort === 'za') list.sort((a, b) => b.name.localeCompare(a.name));
    else if (activeSort === 'rating') list.sort((a, b) => (ratings[b.name] || 0) - (ratings[a.name] || 0));
    else if (activeSort === 'newest') list.sort((a, b) => b.isNew - a.isNew);
  }

  return list;
}

function pricingBadgeHTML(p) {
  const map = { free: '🟢 Free', freemium: '🟡 Freemium', paid: '🔴 Paid' };
  return `<span class="badge badge-${p}">${map[p]}</span>`;
}

function statusBadgeHTML(t) {
  if (t.isTrending) return `<span class="badge badge-trending">🔥 Trending</span>`;
  if (t.isNew) return `<span class="badge badge-new">✨ New</span>`;
  return '';
}

function starsHTML(toolName) {
  const r = ratings[toolName] || 0;
  let html = '<div class="stars">';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star ${i <= r ? 'filled' : ''}" data-tool="${toolName}" data-star="${i}">★</span>`;
  }
  html += `<span class="rating-val">${r > 0 ? r.toFixed(1) : '—'}</span></div>`;
  return html;
}

function tagsHTML(tags) {
  return `<div class="tag-list">${tags.slice(0, 3).map(t => `<span class="tag" data-tag="${t}">#${t}</span>`).join('')}</div>`;
}

function renderCards() {
  const container = document.getElementById('cards');
  const noResults = document.getElementById('no-results');
  const list = getFiltered();

  document.getElementById('result-count').textContent =
    `${list.length} template${list.length !== 1 ? 's' : ''} found`;

  document.getElementById('active-tag-label').textContent =
    activeTag ? `· Filtered by #${activeTag}` : '';

  if (list.length === 0) {
    container.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  let compareList = JSON.parse(localStorage.getItem('aihub_compare_templates')) || [];

  container.innerHTML = list.map(tool => {
    const isFav = favorites.includes(tool.name);
    const isCompare = compareList.includes(tool.name);
    return `
    <div class="card" data-category="${tool.category}" data-name="${tool.name}">
      <div class="card-badges">
        ${pricingBadgeHTML(tool.pricing)}
        ${statusBadgeHTML(tool)}
      </div>
      <button class="fav-btn ${isFav ? 'active' : ''}" data-tool="${tool.name}" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
        <i class="fa${isFav ? 's' : 'r'} fa-heart"></i>
      </button>
      <button class="compare-btn ${isCompare ? 'active' : ''}" data-tool="${tool.name}" title="${isCompare ? 'Remove from compare' : 'Compare'}">
        <i class="fas fa-balance-scale"></i>
      </button>
      <div class="card-icon">${getCategoryIcon(tool.category)}</div>
      <h3>${tool.name}</h3>
      <p>${tool.desc}</p>
      ${starsHTML(tool.name)}
      ${tagsHTML(tool.tags)}
      <a href="${tool.url}" target="_blank" rel="noopener" class="visit-btn">
        Visit <i class="fas fa-arrow-up-right-from-square"></i>
      </a>
    </div>`;
  }).join('');

  // Events on new cards
  container.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleFavorite(btn.dataset.tool);
    });
  });

  container.querySelectorAll('.compare-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleCompare(btn.dataset.tool);
    });
  });

  container.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', e => {
      e.stopPropagation();
      setRating(star.dataset.tool, parseInt(star.dataset.star));
    });
    star.addEventListener('mouseenter', e => previewRating(star));
    star.addEventListener('mouseleave', e => clearPreview(star.dataset.tool));
  });

  container.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', e => {
      e.stopPropagation();
      const t = tag.dataset.tag;
      if (activeTag === t) { activeTag = ''; } else { activeTag = t; }
      renderCards();
    });
  });

  // Modal Open
  container.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.star') || e.target.closest('.tag')) return;
      openModal(card.dataset.name);
    });
  });

  updateFavCount();
  updateCompareDock();

  // Drag and Drop implementation
  if (typeof window.sortableInstance !== 'undefined' && window.sortableInstance) {
    window.sortableInstance.destroy();
    window.sortableInstance = null;
  }

  if (activeCategory === 'favorites' && typeof Sortable !== 'undefined' && list.length > 0) {
    window.sortableInstance = new Sortable(container, {
      animation: 200,
      ghostClass: 'sortable-ghost',
      dragClass: 'sortable-drag',
      onEnd: function () {
        // Update favorites array based on new DOM order
        const newOrder = Array.from(container.children).map(child => child.dataset.name);
        favorites = newOrder;
        localStorage.setItem('aihub_favs', JSON.stringify(favorites));
      }
    });
  }
}

// Comparison functionality
function toggleCompare(toolName) {
  let compareList = JSON.parse(localStorage.getItem('aihub_compare_templates')) || [];
  if (compareList.includes(toolName)) {
    compareList = compareList.filter(n => n !== toolName);
  } else {
    if (compareList.length >= 3) {
      showToast('You can only compare up to 3 templates.');
      return;
    }
    compareList.push(toolName);
  }
  localStorage.setItem('aihub_compare_templates', JSON.stringify(compareList));
  renderCards(); // Re-render to update buttons
}

function updateCompareDock() {
  const dock = document.getElementById('compare-dock');
  if (!dock) return;
  const compareList = JSON.parse(localStorage.getItem('aihub_compare_templates')) || [];
  document.getElementById('compare-count').textContent = compareList.length;
  if (compareList.length > 0) {
    dock.classList.add('visible');
  } else {
    dock.classList.remove('visible');
  }
}

if (document.getElementById('compare-clear')) {
  document.getElementById('compare-clear').addEventListener('click', () => {
    localStorage.removeItem('aihub_compare_templates');
    renderCards();
  });
}

function getCategoryIcon(cat) {
  const icons = {
    ui: '🎨', frontend: '🖥️', backend: '⚙️', database: '🗄️',
    automation: '🤖', misc: '🔮'
  };
  return icons[cat] || '🤖';
}

// ═══════════════════════════════════════════
//  FAVORITES
// ═══════════════════════════════════════════
function toggleFavorite(name) {
  const idx = favorites.indexOf(name);
  if (idx === -1) {
    favorites.push(name);
    showToast(`❤️ ${name} added to Favorites`);
  } else {
    favorites.splice(idx, 1);
    showToast(`💔 ${name} removed from Favorites`);
    if (activeCategory === 'favorites') { renderCards(); return; }
  }
  localStorage.setItem('aihub_templates_favorites', JSON.stringify(favorites));
  renderCards();
}

function updateFavCount() {
  const el = document.getElementById('fav-count');
  if (el) el.textContent = favorites.length;
}

// ═══════════════════════════════════════════
//  RATINGS
// ═══════════════════════════════════════════
function setRating(toolName, val) {
  ratings[toolName] = val;
  localStorage.setItem('aihub_templates_ratings', JSON.stringify(ratings));
  showToast(`⭐ Rated ${toolName}: ${val}/5`);
  renderCards();
}

function previewRating(star) {
  const val = parseInt(star.dataset.star);
  const name = star.dataset.tool;
  const card = star.closest('.card');
  card.querySelectorAll('.star').forEach((s, i) => {
    s.classList.toggle('hover', i < val);
  });
}

function clearPreview(toolName) {
  const card = document.querySelector(`.card[data-name="${toolName}"]`);
  if (!card) return;
  const r = ratings[toolName] || 0;
  card.querySelectorAll('.star').forEach((s, i) => {
    s.classList.remove('hover');
    s.classList.toggle('filled', i < r);
  });
}

// ═══════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ═══════════════════════════════════════════
//  UI CONTROLS
// ═══════════════════════════════════════════

// Theme
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('aihub_theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});
let currentTheme = localStorage.getItem('aihub_theme');
if (!currentTheme) {
  currentTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}
if (currentTheme === 'light') {
  document.body.classList.add('light-theme');
}

// Scroll top
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Search
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clear-search');
searchInput.addEventListener('input', () => {
  activeSearch = searchInput.value;
  clearSearch.style.display = activeSearch ? 'flex' : 'none';
  renderCards();
});
clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  activeSearch = '';
  clearSearch.style.display = 'none';
  renderCards();
});

// Sidebar toggle
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const mainContent = document.getElementById('main-content');
menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  mainContent.classList.toggle('menu-open');
});

// Category links
document.querySelectorAll('.side-menu a').forEach(link => {
  link.addEventListener('click', e => {
    if (!link.hasAttribute('data-category')) return;
    e.preventDefault();
    document.querySelectorAll('.side-menu a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    activeCategory = link.dataset.category;
    activeTag = '';
    renderCards();
    if (window.innerWidth < 768) {
      sideMenu.classList.remove('open');
      mainContent.classList.remove('menu-open');
    }
  });
});

// Price filter chips
document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activePrice = chip.dataset.price;
    renderCards();
  });
});

// Sort
document.getElementById('sortSelect').addEventListener('change', e => {
  activeSort = e.target.value;
  renderCards();
});

// Close sidebar on outside click (mobile)
document.addEventListener('click', e => {
  if (window.innerWidth < 768 &&
    !sideMenu.contains(e.target) &&
    !menuToggle.contains(e.target) &&
    sideMenu.classList.contains('open')) {
    sideMenu.classList.remove('open');
    mainContent.classList.remove('menu-open');
  }
});

// ═══════════════════════════════════════════
//  AUTH STATE UI
// ═══════════════════════════════════════════
function updateAuthUI() {
  const user = localStorage.getItem('aihub_user');

  // Header auth button
  const authBtn = document.getElementById('auth-btn');
  if (authBtn) {
    if (user) {
      authBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> <span id="auth-btn-text">Logout</span>';
      authBtn.href = '#';
      authBtn.onclick = (e) => {
        e.preventDefault();
        localStorage.removeItem('aihub_user');
        window.location.replace('login.html');
      };
    } else {
      authBtn.innerHTML = '<i class="fas fa-user"></i> <span id="auth-btn-text">Login</span>';
      authBtn.href = 'login.html';
      authBtn.onclick = null;
    }
  }

  // Sidebar nav items
  const navAuthLinks = document.getElementById('nav-auth-links');
  const navLogout = document.getElementById('nav-logout');
  const sideLogoutBtn = document.getElementById('side-logout-btn');

  if (user) {
    if (navAuthLinks) navAuthLinks.style.display = 'none';
    if (navLogout) {
      navLogout.style.display = 'block';
      if (sideLogoutBtn) {
        sideLogoutBtn.onclick = (e) => {
          e.preventDefault();
          localStorage.removeItem('aihub_user');
          window.location.replace('login.html');
        };
      }
    }
  } else {
    if (navAuthLinks) navAuthLinks.style.display = 'flex';
    if (navLogout) navLogout.style.display = 'none';
  }
}

// ═══════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════
if (document.getElementById('cards')) {
  renderCards();
  updateFavCount();
  updateAuthUI();
}

// ═══════════════════════════════════════════
//  MODAL LOGIC
// ═══════════════════════════════════════════
function openModal(toolName) {
  const tool = tools.find(t => t.name === toolName);
  if (!tool) return;
  document.getElementById('modal-icon').innerHTML = getCategoryIcon(tool.category);
  document.getElementById('modal-title').textContent = tool.name;
  document.getElementById('modal-badges').innerHTML = pricingBadgeHTML(tool.pricing) + statusBadgeHTML(tool);
  document.getElementById('modal-desc').textContent = tool.desc;
  
  const catNames = { ui: 'UI Elements', frontend: 'Frontend App', backend: 'Backend', database: 'Database', automation: 'Automation', misc: 'Misc' };
  document.getElementById('modal-category').textContent = catNames[tool.category] || tool.category;
  
  const priceMap = { free: 'Free', freemium: 'Freemium', paid: 'Paid' };
  document.getElementById('modal-pricing').textContent = priceMap[tool.pricing] || tool.pricing;
  
  const r = ratings[tool.name] || 0;
  let starsHtml = '';
  for (let i = 1; i <= 5; i++) {
    starsHtml += `<span class="star ${i <= r ? 'filled' : ''}" style="pointer-events: none;">★</span>`;
  }
  document.getElementById('modal-stars').innerHTML = starsHtml;
  document.getElementById('modal-rating-val').textContent = r > 0 ? r.toFixed(1) : '—';
  
  document.getElementById('modal-tags').innerHTML = tool.tags.map(t => `<span class="tag">#${t}</span>`).join('');
  document.getElementById('modal-visit-btn').href = tool.url;
  
  document.getElementById('tool-modal').classList.add('active');
}

document.getElementById('modal-close-btn').addEventListener('click', () => {
  document.getElementById('tool-modal').classList.remove('active');
});

document.getElementById('tool-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('tool-modal')) {
    document.getElementById('tool-modal').classList.remove('active');
  }
});

// ═══════════════════════════════════════════
//  SPOTLIGHT SEARCH
// ═══════════════════════════════════════════
const spotlightOverlay = document.getElementById('spotlight-overlay');
const spotlightInput = document.getElementById('spotlight-input');
const spotlightResults = document.getElementById('spotlight-results');
let spotlightIndex = -1;

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    if (spotlightOverlay) {
      spotlightOverlay.classList.add('active');
      spotlightInput.focus();
      spotlightInput.value = '';
      renderSpotlight('');
    }
  }
  if (e.key === 'Escape' && spotlightOverlay && spotlightOverlay.classList.contains('active')) {
    spotlightOverlay.classList.remove('active');
  }
});

if (spotlightOverlay) {
  spotlightOverlay.addEventListener('click', e => {
    if (e.target === spotlightOverlay) spotlightOverlay.classList.remove('active');
  });

  spotlightInput.addEventListener('input', e => {
    renderSpotlight(e.target.value.toLowerCase());
  });

  spotlightInput.addEventListener('keydown', e => {
    const items = spotlightResults.querySelectorAll('.spotlight-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      spotlightIndex = (spotlightIndex + 1) % items.length;
      updateSpotlightSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      spotlightIndex = (spotlightIndex - 1 + items.length) % items.length;
      updateSpotlightSelection(items);
    } else if (e.key === 'Enter' && spotlightIndex >= 0 && items[spotlightIndex]) {
      e.preventDefault();
      items[spotlightIndex].click();
    }
  });
}

function updateSpotlightSelection(items) {
  items.forEach((item, i) => {
    if (i === spotlightIndex) {
      item.classList.add('active');
      item.scrollIntoView({ block: 'nearest' });
    } else {
      item.classList.remove('active');
    }
  });
}

function renderSpotlight(query) {
  if (!query) {
    spotlightResults.innerHTML = '<div style="padding: 1rem; color: var(--text-dim); text-align: center;">Start typing to search templates...</div>';
    spotlightIndex = -1;
    return;
  }
  
  const filtered = tools.filter(t => 
    t.name.toLowerCase().includes(query) || 
    t.desc.toLowerCase().includes(query) || 
    t.category.toLowerCase().includes(query)
  ).slice(0, 10); // Limit to top 10

  if (filtered.length === 0) {
    spotlightResults.innerHTML = '<div style="padding: 1rem; color: var(--text-dim); text-align: center;">No matching templates found.</div>';
    spotlightIndex = -1;
    return;
  }

  spotlightIndex = 0;
  spotlightResults.innerHTML = filtered.map((tool, i) => `
    <div class="spotlight-item ${i === 0 ? 'active' : ''}" data-name="${tool.name}">
      <div class="spotlight-item-icon">${getCategoryIcon(tool.category)}</div>
      <div class="spotlight-item-content">
        <div class="spotlight-item-title">${tool.name}</div>
        <div class="spotlight-item-desc">${tool.desc}</div>
      </div>
    </div>
  `).join('');

  spotlightResults.querySelectorAll('.spotlight-item').forEach(item => {
    item.addEventListener('click', () => {
      spotlightOverlay.classList.remove('active');
      openModal(item.dataset.name);
    });
    item.addEventListener('mouseenter', () => {
      spotlightIndex = Array.from(spotlightResults.children).indexOf(item);
      updateSpotlightSelection(spotlightResults.querySelectorAll('.spotlight-item'));
    });
  });
}

// ═══════════════════════════════════════════
//  HUBBOT AI
// ═══════════════════════════════════════════
const hubbotBtn = document.getElementById('hubbot-btn');
const hubbotWindow = document.getElementById('hubbot-window');
const hubbotClose = document.getElementById('hubbot-close');
const hubbotSend = document.getElementById('hubbot-send');
const hubbotInput = document.getElementById('hubbot-input');
const hubbotMessages = document.getElementById('hubbot-messages');

if (hubbotBtn && hubbotWindow) {
  hubbotBtn.addEventListener('click', () => {
    hubbotWindow.classList.add('active');
    hubbotInput.focus();
  });

  hubbotClose.addEventListener('click', () => {
    hubbotWindow.classList.remove('active');
  });

  hubbotSend.addEventListener('click', handleHubbotSend);
  hubbotInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') handleHubbotSend();
  });
}

function handleHubbotSend() {
  const text = hubbotInput.value.trim();
  if (!text) return;

  // Add User Message
  appendHubbotMessage(text, 'user-msg');
  hubbotInput.value = '';

  // Simulate AI Thinking
  setTimeout(() => {
    const response = processHubbotQuery(text);
    appendHubbotMessage(response, 'bot-msg');
  }, 600);
}

function appendHubbotMessage(htmlContent, className) {
  const msg = document.createElement('div');
  msg.className = className;
  msg.innerHTML = htmlContent;
  hubbotMessages.appendChild(msg);
  hubbotMessages.scrollTop = hubbotMessages.scrollHeight;
}

function processHubbotQuery(query) {
  const qStr = query.toLowerCase().trim();
  
  // 1. Conversational / Small Talk
  if (['hi', 'hello', 'hey', 'greetings', 'sup'].includes(qStr)) {
    return "Hello! 👋 I'm HubBot. What kind of AI template are you looking to discover today?";
  }
  if (qStr.includes('how are you')) {
    return "I'm just a few lines of code, but I'm feeling incredibly helpful today! What can I find for you?";
  }
  if (qStr.includes('who are you') || qStr.includes('what are you')) {
    return "I am HubBot, your personal AI directory assistant. Tell me what you want to build or do, and I'll recommend the best AI templates for the job!";
  }
  if (qStr.includes('thank you') || qStr.includes('thanks')) {
    return "You're very welcome! Let me know if you need anything else. 🚀";
  }
  if (qStr.includes('bye') || qStr.includes('goodbye')) {
    return "Goodbye! Keep innovating! ✨";
  }

  // 2. Keyword Mapping Logic
  const intents = {
    ui: ['ui', 'frontend', 'react', 'vue', 'component', 'interface', 'design'],
    backend: ['backend', 'server', 'api', 'express', 'node', 'django', 'python'],
    database: ['database', 'sql', 'postgres', 'mongo', 'data', 'storage', 'prisma'],
    automation: ['automation', 'workflow', 'cron', 'task', 'trigger', 'ci/cd', 'deploy'],
    free: ['free', 'zero cost', 'no money', 'unpaid', 'open source']
  };

  let matchedCategory = null;
  let isFreeSearch = false;
  
  for (const [category, keywords] of Object.entries(intents)) {
    if (keywords.some(kw => qStr.includes(kw))) {
      if (category === 'free') {
        isFreeSearch = true;
      } else {
        matchedCategory = category;
      }
    }
  }

  let matches = [];

  // Filter based on matched logical category
  if (matchedCategory || isFreeSearch) {
    matches = tools.filter(t => {
      const catMatch = matchedCategory ? (t.category === matchedCategory || t.desc.toLowerCase().includes(matchedCategory)) : true;
      const priceMatch = isFreeSearch ? (t.pricing === 'free') : true;
      return catMatch && priceMatch;
    });
  } else {
    // 3. Fallback to broad fuzzy matching
    const searchTerms = qStr.split(' ').filter(word => word.length > 2);
    if (searchTerms.length > 0) {
      matches = tools.filter(t => {
        return searchTerms.some(term => 
          t.name.toLowerCase().includes(term) || 
          t.desc.toLowerCase().includes(term) ||
          t.category.toLowerCase().includes(term) ||
          t.tags.some(tag => tag.toLowerCase().includes(term))
        );
      });
    }
  }

  // 4. Format Output
  if (matches.length > 0) {
    matches.sort((a, b) => (ratings[b.name] || 0) - (ratings[a.name] || 0));
    const top3 = matches.slice(0, 3);
    const links = top3.map(t => `<br>• <a href="#" onclick="openModal('${t.name}'); return false;" style="color: var(--accent); font-weight: 600; text-decoration: none;">${t.name}</a> - <span style="font-size: 0.8em; color: var(--text-dim);">${t.category}</span>`).join('');
    
    const responses = [
      "Here are the top templates that match what you're looking for:",
      "I've searched the database. These might be exactly what you need:",
      "Based on your request, I highly recommend checking these out:"
    ];
    const randomIntro = responses[Math.floor(Math.random() * responses.length)];
    
    return `${randomIntro}${links}`;
  }

  // 5. Final Fallback
  return "I couldn't find an exact match for that! Could you try describing what you want to do differently? (e.g., 'ui components' or 'api integrations')";
}
