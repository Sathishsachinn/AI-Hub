# AI Hub & Templates Documentation

This document outlines the internal logic, categorizations, and design methodologies used in the updated AI Hub project.

## 1. Core Architecture

The platform operates heavily on a Single Page Application (SPA) illusion using vanilla Javascript data injection. Instead of loading new static HTML pages for every category, it renders a predefined Javascript array (`tools`) into HTML nodes whenever a filter state changes.

### State Management
State is strictly separated between the two main pages:
- `index.html` relies on `script.js` which manages `aihub_favorites` and `aihub_ratings`.
- `templates.html` relies on `templates.js` which manages `aihub_templates_favorites` and `aihub_templates_ratings`.

This division prevents logical collisions. A 5-star rating on "Motion" in the Templates Hub will not bleed over and overwrite data on the standard AI Hub.

## 2. Categorization Rules

When the massive list of ~100 tools was injected, they were strictly categorized to maintain a clean user flow.

### The AI Tools Hub (`script.js`) 
Designed strictly for standalone applications, deep-level agents, and productivity engines.
- **Coding & IDEs (`coding`)**: E.g., Cursor, Windsurf, Claude Code, Aider, GitHub Copilot.
- **Content Creation (`writing`, `video`, `image`, `voice`)**: E.g., ChatGPT, Midjourney, Klingai, ElevenLabs, Sora.
- **Autonomous & Automation (`automation`)**: E.g., AutoGPT, Zapier AI, Make.com.
- **Misc Utilities (`misc`, `productivity`)**: E.g., Notion AI, Perplexity AI.

### The AI Templates Hub (`templates.js`)
Designed explicitly for modern developers and designers trying to build, spin up, or mock websites.
- **UI Generation (`ui`)**: Figma-to-code platforms, React component builders. E.g., Lovable, v0 by Vercel, Relume, Flowstep.
- **Web App Builders (`frontend`)**: Platforms generating full-stack MVPs or large-scale boilerplate apps. E.g., Builder.io, Bubble, Base44.
- **No-Code / Low-Code CMS (`misc`)**: Website builders intended for fast deployment. E.g., Wix AI, Webflow, Durable, Hostinger AI.
- **Backends & Databases (`backend`, `database`)**: Platforms providing rapid automated schemas or logic. E.g., Supabase, PostgREST, Sanity.

## 3. The Render Cycle

The function `renderCards()` handles UI updates. The sequence of resolution is as follows:
1. **Fetch**: Grabs the `tools` array.
2. **Filter by Category**: Applies sidebar state.
3. **Filter by Price**: Modifies the stream based on Free/Freemium/Paid tokens.
4. **Filter by Search Text**: Performs deep string matching on Title, Description, and Tags.
5. **Sort**: Alphabetizes, ranks by Highest Rated, or pushes New elements upward.
6. **Inject**: Rewrites the inner HTML of `.card-container`.

## 4. Design & CSS Tokens

The project uses a premium dark-mode foundation anchored by `.card` components.
- **Glassmorphism & Blurs**: The top `.header` features a heavy `backdrop-filter: blur(12px)`.
- **Card Interactivity**: Cards possess three layers of distinct pseudo-elements on hover:
  - Deep translation scaling (`transform: translateY(-8px) scale(1.015)`).
  - A sweeping background light effect crossing diagonally.
  - A bottom gradient border appearing (`opacity: 1`) to act as an anchor point.

## 5. Adding New Tools
To add a new tool or template, simply open either `script.js` or `templates.js` and push a new JSON object into the `const tools = []` array:
```javascript
{ 
  name: "New AI Tool", 
  desc: "A short catchy description.", 
  url: "https://newsite.ai", 
  category: "ui", /* Must match a sidebar data-attribute */
  pricing: "freemium", /* free | freemium | paid */
  tags: ["design", "prototype"], 
  isNew: true, 
  isTrending: false 
}
```
The system will automatically generate all HTML structure, star logic, and flavor badges upon refreshing the page.
