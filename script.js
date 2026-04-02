// ═══════════════════════════════════════════
//  TOOL DATA
// ═══════════════════════════════════════════
const tools = [
  // Chat Bot / Writing
  { name: "ChatGPT", desc: "Conversations, writing help, coding assistant, and more.", url: "https://chat.openai.com/", category: "writing", pricing: "freemium", tags: ["chat", "writing", "coding"], isNew: false, isTrending: true },
  { name: "Claude AI", desc: "Anthropic's chatbot for safe, helpful, and honest answers.", url: "https://claude.ai/", category: "writing", pricing: "freemium", tags: ["chat", "writing", "safe-ai"], isNew: false, isTrending: true },
  { name: "Grok", desc: "Real-time AI assistant by xAI with web access.", url: "https://xai.com", category: "writing", pricing: "freemium", tags: ["chat", "realtime"], isNew: true, isTrending: false },
  { name: "Copy.ai", desc: "Create marketing copy, blogs, and emails faster with AI.", url: "https://copy.ai/", category: "writing", pricing: "freemium", tags: ["copywriting", "marketing"], isNew: false, isTrending: false },
  { name: "Jasper", desc: "AI writer for marketing content and blogs.", url: "https://www.jasper.ai/", category: "writing", pricing: "paid", tags: ["copywriting", "blogs"], isNew: false, isTrending: false },
  { name: "Writesonic", desc: "Content generation AI for ads, blogs, and websites.", url: "https://writesonic.com/", category: "writing", pricing: "freemium", tags: ["content", "ads"], isNew: false, isTrending: false },
  { name: "Sudowrite", desc: "Creative writing companion powered by AI.", url: "https://www.sudowrite.com/", category: "writing", pricing: "paid", tags: ["creative", "fiction"], isNew: false, isTrending: false },
  { name: "Chatbase", desc: "Build custom AI chatbots trained on your own data.", url: "https://www.chatbase.co", category: "writing", pricing: "freemium", tags: ["chatbot", "custom"], isNew: false, isTrending: false },

  // Image AI
  { name: "Midjourney", desc: "AI for stunning, creative image generation via prompts.", url: "https://midjourney.com/", category: "image", pricing: "paid", tags: ["image-gen", "art"], isNew: false, isTrending: true },
  { name: "DALL·E 3", desc: "OpenAI's AI to generate images from text prompts.", url: "https://openai.com/dall-e", category: "image", pricing: "freemium", tags: ["image-gen", "openai"], isNew: false, isTrending: false },
  { name: "RunwayML", desc: "AI for video, images, and media creation tools.", url: "https://runwayml.com/", category: "image", pricing: "freemium", tags: ["image-gen", "video"], isNew: false, isTrending: true },
  { name: "Stable Diffusion", desc: "Open-source AI image generation model you can run locally.", url: "https://stability.ai/", category: "image", pricing: "free", tags: ["open-source", "image-gen"], isNew: false, isTrending: false },
  { name: "Remini", desc: "Enhance and restore old blurry photos using AI.", url: "https://reminiapp.com/", category: "image", pricing: "freemium", tags: ["photo", "restore"], isNew: false, isTrending: false },
  { name: "Blackbox AI", desc: "Solve problems and generate creative images.", url: "https://blackbox.ai/", category: "image", pricing: "free", tags: ["image-gen", "coding"], isNew: false, isTrending: false },
  { name: "Dreamina AI", desc: "Create custom designs — characters, illustrations, and more.", url: "https://dreamina.capcut.com", category: "image", pricing: "freemium", tags: ["design", "art"], isNew: true, isTrending: false },

  // Video AI
  { name: "Pictory", desc: "Turn scripts or blog posts into videos using AI.", url: "https://pictory.ai/", category: "video", pricing: "freemium", tags: ["video-gen", "script"], isNew: false, isTrending: false },
  { name: "Synthesia", desc: "Create AI videos with avatars — no cameras or actors needed.", url: "https://www.synthesia.io/", category: "video", pricing: "paid", tags: ["avatar", "video-gen"], isNew: false, isTrending: true },
  { name: "Runway Gen-2", desc: "State-of-the-art text-to-video generation with AI.", url: "https://runwayml.com/ai-tools/gen-2", category: "video", pricing: "freemium", tags: ["video-gen", "text-to-video"], isNew: false, isTrending: true },
  { name: "Fliki", desc: "Convert text into videos with realistic AI voices.", url: "https://fliki.ai/", category: "video", pricing: "freemium", tags: ["text-to-video", "voiceover"], isNew: false, isTrending: false },
  { name: "Klingai", desc: "Powerful AI video generation and editing tool.", url: "https://klingai.com/", category: "video", pricing: "freemium", tags: ["video-gen"], isNew: true, isTrending: true },

  // Voice AI
  { name: "ElevenLabs", desc: "Realistic voice generation and text-to-speech AI.", url: "https://elevenlabs.io/", category: "voice", pricing: "freemium", tags: ["tts", "voice-clone"], isNew: false, isTrending: true },
  { name: "Descript", desc: "Voice cloning, podcast editing, and audio AI tool.", url: "https://www.descript.com/", category: "voice", pricing: "freemium", tags: ["podcast", "voice-clone"], isNew: false, isTrending: false },
  { name: "Murf.ai", desc: "Voiceover generator for videos, ads, and eLearning.", url: "https://murf.ai/", category: "voice", pricing: "freemium", tags: ["tts", "voiceover"], isNew: false, isTrending: false },
  { name: "Play.ht", desc: "AI text-to-speech with human-like natural voices.", url: "https://play.ht/", category: "voice", pricing: "freemium", tags: ["tts"], isNew: false, isTrending: false },
  { name: "Fish.audio", desc: "Advanced voice cloning AI for creators.", url: "https://fish.audio", category: "voice", pricing: "free", tags: ["voice-clone", "free"], isNew: true, isTrending: false },

  // Coding AI
  { name: "GitHub Copilot", desc: "AI tool that suggests code as you type in your editor.", url: "https://github.com/features/copilot", category: "coding", pricing: "paid", tags: ["autocomplete", "ide"], isNew: false, isTrending: true },
  { name: "Tabnine", desc: "AI code completions and suggestions for developers.", url: "https://www.tabnine.com/", category: "coding", pricing: "freemium", tags: ["autocomplete"], isNew: false, isTrending: false },
  { name: "Replit Ghostwriter", desc: "Code generation and error explanation inside Replit IDE.", url: "https://replit.com/", category: "coding", pricing: "freemium", tags: ["ide", "coding"], isNew: false, isTrending: false },
  { name: "Amazon CodeWhisperer", desc: "Machine learning–powered coding assistant by AWS.", url: "https://aws.amazon.com/codewhisperer/", category: "coding", pricing: "free", tags: ["aws", "autocomplete"], isNew: false, isTrending: false },
  { name: "Lovable", desc: "Idea to fully functional app in seconds.", url: "https://lovable.dev/", category: "coding", pricing: "freemium", tags: ["app-builder", "no-code"], isNew: true, isTrending: true },
  { name: "DeepCode", desc: "AI-driven static code analysis and bug detection.", url: "https://www.deepcode.ai", category: "coding", pricing: "free", tags: ["code-review", "security"], isNew: false, isTrending: false },

  // Gaming AI
  { name: "Scenario", desc: "AI platform to create immersive gaming worlds and assets.", url: "https://www.scenario.gg/", category: "gaming", pricing: "freemium", tags: ["game-art", "world-gen"], isNew: false, isTrending: false },
  { name: "Latitude Voyage", desc: "AI-generated text-based adventure games.", url: "https://voyage.latitude/", category: "gaming", pricing: "freemium", tags: ["rpg", "story-gen"], isNew: false, isTrending: false },

  // Devotional AI
  { name: "GitaGPT", desc: "Unlocking life's wisdom through Lord Krishna's teachings.", url: "https://gitagpt.org", category: "devotional", pricing: "free", tags: ["bhagavad-gita", "spiritual"], isNew: false, isTrending: false },
  { name: "Getfreegeeta", desc: "Get a free physical copy of the Bhagavad Gita book.", url: "https://yatharageeta.com", category: "devotional", pricing: "free", tags: ["gita", "book"], isNew: false, isTrending: false },
  { name: "Pray.com AI", desc: "Daily AI prayers, meditations, and bible studies.", url: "https://www.pray.com/", category: "devotional", pricing: "freemium", tags: ["prayer", "meditation"], isNew: false, isTrending: false },
  { name: "Bible AI", desc: "Ask Bible questions and get AI-powered answers.", url: "https://bibleai.com/", category: "devotional", pricing: "free", tags: ["bible", "spiritual"], isNew: false, isTrending: false },

  // Productivity
  { name: "Notion AI", desc: "AI inside Notion to speed up writing and organizing notes.", url: "https://www.notion.so/product/ai", category: "productivity", pricing: "freemium", tags: ["notes", "organization"], isNew: false, isTrending: true },
  { name: "Grammarly", desc: "AI writing assistant for grammar, clarity, and tone.", url: "https://grammarly.com", category: "productivity", pricing: "freemium", tags: ["writing", "grammar"], isNew: false, isTrending: false },
  { name: "ClickUp AI", desc: "AI-enhanced task and project management platform.", url: "https://clickup.com/ai", category: "productivity", pricing: "freemium", tags: ["project-mgmt", "tasks"], isNew: false, isTrending: false },
  { name: "Clockwise", desc: "AI-powered calendar optimization for focused work time.", url: "https://www.getclockwise.com", category: "productivity", pricing: "freemium", tags: ["calendar", "focus"], isNew: false, isTrending: false },
  { name: "Mem.ai", desc: "Smart note-taking app that automatically organizes your ideas.", url: "https://mem.ai/", category: "productivity", pricing: "freemium", tags: ["notes", "ai-search"], isNew: false, isTrending: false },

  // Editing AI
  { name: "Cleanup.pictures", desc: "Remove objects, defects, and watermarks using AI.", url: "https://cleanup.pictures/", category: "editing", pricing: "freemium", tags: ["photo-edit", "remove"], isNew: false, isTrending: false },
  { name: "Pixelcut", desc: "Instant background remover and photo editing AI.", url: "https://pixelcut.ai/", category: "editing", pricing: "freemium", tags: ["background-remove", "photo-edit"], isNew: false, isTrending: false },
  { name: "Vmake", desc: "AI watermark remover and video enhancer.", url: "https://vmake.ai/", category: "editing", pricing: "freemium", tags: ["watermark", "video-edit"], isNew: false, isTrending: false },

  // Automation AI
  { name: "Zapier AI", desc: "Automate tasks between your favourite apps using AI.", url: "https://zapier.com/", category: "automation", pricing: "freemium", tags: ["workflow", "integration"], isNew: false, isTrending: true },
  { name: "Make.com", desc: "Visual platform for building powerful AI-powered workflows.", url: "https://www.make.com/en/ai/", category: "automation", pricing: "freemium", tags: ["workflow", "no-code"], isNew: false, isTrending: false },

  // Portfolio AI
  { name: "Carbonmade", desc: "Showcase your creative work and professional designs.", url: "https://carbonmade.com", category: "portfolio", pricing: "freemium", tags: ["portfolio", "design"], isNew: false, isTrending: false },
  { name: "Journo Portfolio", desc: "Perfect for writers and journalists to highlight their work.", url: "https://journoportfolio.com", category: "portfolio", pricing: "freemium", tags: ["portfolio", "writing"], isNew: false, isTrending: false },
  { name: "Coroflot", desc: "Share creative projects and get noticed by top companies.", url: "https://coroflot.com", category: "portfolio", pricing: "free", tags: ["portfolio", "creative"], isNew: false, isTrending: false },
  { name: "Portfoliobox", desc: "Versatile platform to create a personalized portfolio site.", url: "https://www.portfoliobox.net", category: "portfolio", pricing: "freemium", tags: ["portfolio", "website"], isNew: false, isTrending: false },

  // Cloning AI
  { name: "HeyGen", desc: "AI avatar creation for cloning faces and voices in videos.", url: "https://www.heygen.com/", category: "cloning", pricing: "freemium", tags: ["avatar", "face-clone"], isNew: false, isTrending: true },
  { name: "Altered", desc: "Professional voice changing and cloning platform for creators.", url: "https://www.altered.ai/", category: "cloning", pricing: "freemium", tags: ["voice-clone"], isNew: false, isTrending: false },
  { name: "10Web", desc: "AI-powered website builder and WordPress manager.", url: "https://10web.io", category: "cloning", pricing: "paid", tags: ["website", "wordpress"], isNew: false, isTrending: false },
  { name: "Hostinger AI", desc: "AI website creator for fast, beautiful website deployment.", url: "https://hostinger.com", category: "cloning", pricing: "paid", tags: ["website", "hosting"], isNew: false, isTrending: false },

  // Miscellaneous
  { name: "Perplexity AI", desc: "AI search engine that explains answers with verified sources.", url: "https://www.perplexity.ai/", category: "misc", pricing: "freemium", tags: ["search", "research"], isNew: false, isTrending: true },
  { name: "Hugging Face", desc: "The GitHub of AI — thousands of open models and datasets.", url: "https://huggingface.co", category: "misc", pricing: "free", tags: ["open-source", "models"], isNew: false, isTrending: false },
  { name: "AI Image Detector", desc: "Detect whether an image was generated by AI.", url: "https://aiimagedetector.com", category: "misc", pricing: "free", tags: ["detection", "image"], isNew: false, isTrending: false },
  { name: "Beautiful.ai", desc: "AI-powered presentation design tool for stunning slides.", url: "https://www.beautiful.ai", category: "misc", pricing: "freemium", tags: ["slides", "design"], isNew: false, isTrending: false },
  { name: "Decopy", desc: "AI tool to detect AI-generated text content.", url: "https://decopy.ai", category: "misc", pricing: "free", tags: ["detection", "text"], isNew: false, isTrending: false },
  { name: "Ada", desc: "AI-powered virtual assistant for customer support automation.", url: "https://www.ada.cx", category: "misc", pricing: "paid", tags: ["customer-support", "chatbot"], isNew: false, isTrending: false },
  { name: "Character.AI", desc: "Create AI characters and have rich conversations with them.", url: "https://beta.character.ai/", category: "misc", pricing: "freemium", tags: ["chat", "roleplay"], isNew: false, isTrending: true },
  { name: "Canva Magic Design", desc: "AI-powered design suggestions based on your content.", url: "https://www.canva.com/", category: "misc", pricing: "freemium", tags: ["design", "graphics"], isNew: false, isTrending: false },
  { name: "Soundraw", desc: "AI music generator for creators, ads, and businesses.", url: "https://soundraw.io/", category: "misc", pricing: "freemium", tags: ["music", "audio"], isNew: false, isTrending: false },
  { name: "Elicit", desc: "AI research assistant for academic papers and literature review.", url: "https://elicit.org/", category: "misc", pricing: "freemium", tags: ["research", "academic"], isNew: false, isTrending: false },
];

// ═══════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════
let favorites = JSON.parse(localStorage.getItem('aihub_favorites') || '[]');
let ratings   = JSON.parse(localStorage.getItem('aihub_ratings')   || '{}');
let activeCategory = 'all';
let activePrice    = 'all';
let activeSort     = 'default';
let activeSearch   = '';
let activeTag      = '';

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

  if (activeSort === 'az') list.sort((a,b) => a.name.localeCompare(b.name));
  else if (activeSort === 'za') list.sort((a,b) => b.name.localeCompare(a.name));
  else if (activeSort === 'rating') list.sort((a,b) => (ratings[b.name]||0) - (ratings[a.name]||0));
  else if (activeSort === 'newest') list.sort((a,b) => b.isNew - a.isNew);

  return list;
}

function pricingBadgeHTML(p) {
  const map = { free: '🟢 Free', freemium: '🟡 Freemium', paid: '🔴 Paid' };
  return `<span class="badge badge-${p}">${map[p]}</span>`;
}

function statusBadgeHTML(t) {
  if (t.isTrending) return `<span class="badge badge-trending">🔥 Trending</span>`;
  if (t.isNew)      return `<span class="badge badge-new">✨ New</span>`;
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
  return `<div class="tag-list">${tags.slice(0,3).map(t => `<span class="tag" data-tag="${t}">#${t}</span>`).join('')}</div>`;
}

function renderCards() {
  const container = document.getElementById('cards');
  const noResults = document.getElementById('no-results');
  const list = getFiltered();

  document.getElementById('result-count').textContent =
    `${list.length} tool${list.length !== 1 ? 's' : ''} found`;

  document.getElementById('active-tag-label').textContent =
    activeTag ? `· Filtered by #${activeTag}` : '';

  if (list.length === 0) {
    container.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  container.innerHTML = list.map(tool => {
    const isFav = favorites.includes(tool.name);
    return `
    <div class="card" data-category="${tool.category}" data-name="${tool.name}">
      <div class="card-badges">
        ${pricingBadgeHTML(tool.pricing)}
        ${statusBadgeHTML(tool)}
      </div>
      <button class="fav-btn ${isFav ? 'active' : ''}" data-tool="${tool.name}" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
        <i class="fa${isFav ? 's' : 'r'} fa-heart"></i>
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

  updateFavCount();
}

function getCategoryIcon(cat) {
  const icons = {
    writing: '💬', image: '🖼️', video: '🎬', voice: '🎙️',
    coding: '💻', gaming: '🎮', devotional: '🙏', productivity: '⚡',
    editing: '✨', automation: '🤖', portfolio: '💼', cloning: '👤',
    misc: '🔮'
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
  localStorage.setItem('aihub_favorites', JSON.stringify(favorites));
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
  localStorage.setItem('aihub_ratings', JSON.stringify(ratings));
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
if (localStorage.getItem('aihub_theme') === 'light') {
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
const sideMenu   = document.getElementById('side-menu');
const mainContent = document.getElementById('main-content');
menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  mainContent.classList.toggle('menu-open');
});

// Category links
document.querySelectorAll('.side-menu a').forEach(link => {
  link.addEventListener('click', e => {
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
renderCards();
updateFavCount();
