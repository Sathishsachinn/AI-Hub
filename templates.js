// ═══════════════════════════════════════════
//  TEMPLATES DATA
// ═══════════════════════════════════════════
const tools = [

  { name: "Motion", desc: "Build stunning animated interfaces. Pre-built UI templates.", url: "https://motion.site.ai/", category: "ui", pricing: "freemium", tags: ["ui", "animation", "motion"], isNew: true, isTrending: true },
  { name: "Tailwind UI", desc: "Beautifully designed, expertly crafted components.", url: "https://tailwindui.com/", category: "ui", pricing: "paid", tags: ["tailwind", "css"], isNew: false, isTrending: true },

  { name: "Vercel Templates", desc: "Jumpstart your app development with pre-built solutions.", url: "https://vercel.com/templates", category: "frontend", pricing: "free", tags: ["nextjs", "react"], isNew: false, isTrending: true },
  { name: "Create React App", desc: "Set up a modern web app by running one command.", url: "https://create-react-app.dev/", category: "frontend", pricing: "free", tags: ["react", "boilerplate"], isNew: false, isTrending: false },

  { name: "Supabase", desc: "Open source Firebase alternative with auto-generated APIs.", url: "https://supabase.com/", category: "backend", pricing: "freemium", tags: ["backend", "postgres", "auth"], isNew: false, isTrending: true },
  { name: "Appwrite", desc: "Secure open-source backend server for Web, Mobile & Flutter.", url: "https://appwrite.io/", category: "backend", pricing: "free", tags: ["backend", "open-source"], isNew: false, isTrending: false },
  { name: "NestJS Boilerplate", desc: "A progressive Node.js framework for building efficient server-side apps.", url: "https://nestjs.com/", category: "backend", pricing: "free", tags: ["nodejs", "typescript"], isNew: false, isTrending: false },
  

  { name: "Prisma", desc: "Next-generation Node.js and TypeScript ORM.", url: "https://www.prisma.io/", category: "database", pricing: "free", tags: ["orm", "database"], isNew: false, isTrending: true },
  { name: "PlanetScale", desc: "The world's most advanced serverless MySQL platform.", url: "https://planetscale.com/", category: "database", pricing: "freemium", tags: ["mysql", "serverless"], isNew: false, isTrending: false },
  { name: "Neon", desc: "Serverless Postgres built for developers.", url: "https://neon.tech/", category: "database", pricing: "freemium", tags: ["postgres", "serverless"], isNew: false, isTrending: true },


  { name: "n8n", desc: "Fair-code workflow automation tool.", url: "https://n8n.io/", category: "automation", pricing: "freemium", tags: ["workflow", "automation"], isNew: false, isTrending: true },
  { name: "Make", desc: "Design, build, and automate anything.", url: "https://www.make.com/en", category: "automation", pricing: "freemium", tags: ["no-code", "automation"], isNew: false, isTrending: false },
  { name: "Axiom browser automation", desc: "Browser automation without code.", url: "https://axiom.ai/", category: "automation", pricing: "freemium", tags: ["browser", "bot"], isNew: false, isTrending: false },


  { name: "Framer", desc: "Design and ship your dream site. Zero code, maximum speed.", url: "https://www.framer.com/", category: "misc", pricing: "freemium", tags: ["website", "design"], isNew: false, isTrending: true },
  { name: "Webflow", desc: "Create, collaborate, and scale beautiful websites.", url: "https://webflow.com/", category: "misc", pricing: "freemium", tags: ["website", "cms"], isNew: false, isTrending: false },

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



function categoryBadgeHTML(cat, toolName) {
  const standardNames = {
    ui: 'UI Component',
    frontend: 'Frontend Template',
    backend: 'Backend Boilerplate',
    database: 'Database Schema',
    automation: 'Automation',
    misc: 'Miscellaneous'
  };
  const displayName = standardNames[cat] || cat;
  return `<span class="badge badge-category">${displayName}</span>`;
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
        ${categoryBadgeHTML(tool.category, tool.name)}
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
//  INIT
// ═══════════════════════════════════════════
if (document.getElementById('cards')) {
  renderCards();
  updateFavCount();
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
  
  const standardNames = {
    ui: 'UI Component',
    frontend: 'Frontend Template',
    backend: 'Backend Boilerplate',
    database: 'Database Schema',
    automation: 'Automation',
    misc: 'Miscellaneous'
  };
  const displayName = standardNames[tool.category] || tool.category;
  document.getElementById('modal-category').textContent = displayName;
  
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


