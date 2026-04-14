document.addEventListener('DOMContentLoaded', () => {
  // Theme Setup
  let currentTheme = localStorage.getItem('aihub_theme');
  if (!currentTheme) {
    currentTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
  }

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.innerHTML = document.body.classList.contains('light-theme') ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-circle-half-stroke"></i>';
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      localStorage.setItem('aihub_theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
      themeToggle.innerHTML = document.body.classList.contains('light-theme') ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-circle-half-stroke"></i>';
    });
  }

  // Comparison Logic
  const urlParams = new URLSearchParams(window.window.location.search);
  const type = urlParams.get('type') || 'tools'; // 'tools' or 'templates'
  const storageKey = type === 'templates' ? 'aihub_compare_templates' : 'aihub_compare_tools';
  const subtitle = type === 'templates' ? 'Analyze templates side-by-side.' : 'Analyze AI tools side-by-side.';
  
  const subEl = document.getElementById('compare-subtitle');
  if (subEl) subEl.textContent = subtitle;

  const compareList = JSON.parse(localStorage.getItem(storageKey)) || [];
  const grid = document.getElementById('compare-grid');

  if (compareList.length === 0) {
    grid.innerHTML = `
      <div class="compare-empty" style="grid-column: 1 / -1;">
        <i class="fas fa-balance-scale" style="font-size: 3rem; margin-bottom: 1rem; color: var(--border);"></i>
        <h3>No ${type === 'templates' ? 'templates' : 'tools'} selected</h3>
        <p>Go back to the directory and add some items to compare.</p>
        <a href="${type === 'templates' ? 'templates.html' : 'index.html'}" style="display: inline-block; margin-top: 1rem; color: var(--accent); text-decoration: none; font-weight: 600;">Browse ${type === 'templates' ? 'Templates' : 'Tools'}</a>
      </div>
    `;
    return;
  }

  // Load the appropriate javascript file to get the 'tools' array
  const scriptEl = document.createElement('script');
  scriptEl.src = type === 'templates' ? 'templates.js' : 'script.js';
  scriptEl.onload = () => {
    // Both script.js and templates.js expose `tools`, `ratings`, and `getCategoryIcon` globally
    renderComparisonTable(compareList);
  };
  document.body.appendChild(scriptEl);

  window.removeCompare = function(toolName) {
    let list = JSON.parse(localStorage.getItem(storageKey)) || [];
    list = list.filter(n => n !== toolName);
    localStorage.setItem(storageKey, JSON.stringify(list));
    location.reload();
  };

  function renderComparisonTable(list) {
    // Array of full tool objects
    const items = list.map(name => tools.find(t => t.name === name)).filter(Boolean);

    if (items.length === 0) {
      grid.innerHTML = '<div class="compare-empty" style="grid-column: 1 / -1;"><h3>Items not found</h3></div>';
      return;
    }

    grid.innerHTML = items.map(tool => {
      const r = ratings[tool.name] || 0;
      let starsHtml = r > 0 ? `<span style="color: var(--gold); margin-right: 0.3rem;">★</span> ${r.toFixed(1)} / 5.0` : '—';
      
      const priceMap = { free: '🟢 Free', freemium: '🟡 Freemium', paid: '🔴 Paid' };
      const priceDisplay = priceMap[tool.pricing] || tool.pricing;
      
      const catNamesTools = { writing: 'Chat / Writing', image: 'Image Gen', video: 'Video Gen', voice: 'Voice', coding: 'Coding', gaming: 'Gaming AI', devotional: 'Devotional', productivity: 'Productivity', editing: 'Photo Editing', automation: 'Automation', portfolio: 'Portfolio', cloning: 'Cloning', misc: 'Misc' };
      const catNamesTemplates = { ui: 'UI Elements', frontend: 'Frontend App', backend: 'Backend', database: 'Database', automation: 'Automation', misc: 'Misc' };
      const displayCat = type === 'templates' ? catNamesTemplates[tool.category] : catNamesTools[tool.category];
      const categoryIcon = typeof getCategoryIcon === 'function' ? getCategoryIcon(tool.category) : '';

      return `
        <div class="compare-col">
          <button class="remove-compare-btn" onclick="removeCompare('${tool.name}')" title="Remove">
            <i class="fas fa-times"></i>
          </button>
          
          <div class="compare-col-header">
            <div class="compare-icon">${categoryIcon || '<i class="fas fa-cube"></i>'}</div>
            <h2 class="compare-name">${tool.name}</h2>
            <div style="margin-top: 0.5rem;">
              ${tool.isTrending ? '<span class="badge badge-trending" style="font-size: 0.7rem;">🔥 Trending</span>' : ''}
              ${tool.isNew ? '<span class="badge badge-new" style="font-size: 0.7rem;">✨ New</span>' : ''}
            </div>
          </div>
          
          <div class="compare-row">
            <div class="compare-label">Description</div>
            <div class="compare-desc">${tool.desc}</div>
          </div>
          
          <div class="compare-row">
            <div class="compare-label">Category</div>
            <div class="compare-value">${displayCat || tool.category}</div>
          </div>
          
          <div class="compare-row">
            <div class="compare-label">Pricing</div>
            <div class="compare-value">${priceDisplay}</div>
          </div>
          
          <div class="compare-row">
            <div class="compare-label">Community Rating</div>
            <div class="compare-value">${starsHtml}</div>
          </div>
          
          <div class="compare-row">
            <div class="compare-label">Tags</div>
            <div class="compare-value" style="display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: flex-start;">
              ${tool.tags.map(t => `<span class="tag" style="margin: 0; pointer-events: none;">#${t}</span>`).join('')}
            </div>
          </div>
          
          <div class="compare-row" style="margin-top: 2rem; text-align: center;">
            <a href="${tool.url}" target="_blank" style="background: var(--surface); color: var(--text); border: 1px solid var(--border); padding: 0.8rem 1.5rem; border-radius: var(--radius-sm); text-decoration: none; font-weight: 600; display: inline-block; transition: background 0.2s;">
              Visit Website <i class="fas fa-external-link-alt" style="font-size: 0.8rem; margin-left: 0.3rem;"></i>
            </a>
          </div>
        </div>
      `;
    }).join('');
  }
});
