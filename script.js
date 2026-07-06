// ═══════════════════════════════════════════
//  TOOL DATA
// ═══════════════════════════════════════════
const tools = [
  // Chat Bot / Writing
  { name: "ChatGPT", desc: "Conversations, writing help, coding assistant, and more.", url: "https://chat.openai.com/", category: "writing", pricing: "freemium", tags: ["chat", "writing", "coding"], isNew: false, isTrending: true },
  { name: "Claude AI", desc: "Anthropic's chatbot for safe, helpful, and honest answers.", url: "https://claude.ai/", category: "writing", pricing: "freemium", tags: ["chat", "writing", "safe-ai"], isNew: false, isTrending: true },
  { name: "Grok", desc: "Real-time AI assistant by xAI with web access.", url: "https://grok.com/", category: "writing", pricing: "freemium", tags: ["chat", "realtime"], isNew: true, isTrending: false },
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

  // Newly Added Tools
  { name: "Gemini", desc: "Google's most capable AI model for text, code, and multimodal tasks.", url: "https://gemini.google.com/", category: "writing", pricing: "freemium", tags: ["chat", "multimodal", "google"], isNew: true, isTrending: true },
  { name: "Llama 3", desc: "Meta's highly advanced open-source linguistic AI model.", url: "https://llama.meta.com/", category: "writing", pricing: "free", tags: ["open-source", "meta"], isNew: true, isTrending: true },
  { name: "Sora", desc: "OpenAI's groundbreaking text-to-video generation tool.", url: "https://openai.com/sora", category: "video", pricing: "paid", tags: ["video-gen", "openai"], isNew: true, isTrending: true },
  { name: "AutoGPT", desc: "Experimental open-source application showcasing autonomous AI agents.", url: "https://agpt.co/", category: "automation", pricing: "free", tags: ["agents", "autonomous", "open-source"], isNew: false, isTrending: true },

  // More AI Coding & Automation
  { name: "Replit AI", desc: "Prompt to complete apps (frontend + backend + deploy).", url: "https://replit.com", category: "coding", pricing: "freemium", tags: ["ide", "fullstack"], isNew: false, isTrending: true },
  { name: "Cursor", desc: "AI-native code editor (VS Code fork) for full projects.", url: "https://www.cursor.com", category: "coding", pricing: "freemium", tags: ["ide", "editor"], isNew: false, isTrending: true },
  { name: "Windsurf", desc: "Agentic AI code editor for deep codebase work.", url: "https://windsurf.com", category: "coding", pricing: "freemium", tags: ["ide", "agent"], isNew: true, isTrending: true },
  { name: "Amazon Q Developer", desc: "AWS-integrated AI coding assistant.", url: "https://aws.amazon.com/q/developer", category: "coding", pricing: "freemium", tags: ["aws", "coding-assistant"], isNew: false, isTrending: false },
  { name: "Claude Code", desc: "Thoughtful, context-heavy coding in Claude.", url: "https://claude.ai", category: "coding", pricing: "freemium", tags: ["coding-assistant", "agent"], isNew: false, isTrending: true },
  { name: "CodeRabbit", desc: "AI code review and collaboration tool.", url: "https://coderabbit.ai", category: "coding", pricing: "freemium", tags: ["code-review", "github"], isNew: false, isTrending: false },
  { name: "Greptile", desc: "AI for codebase understanding and queries.", url: "https://greptile.com", category: "coding", pricing: "paid", tags: ["codebase", "search"], isNew: false, isTrending: false },
  { name: "Snyk AI", desc: "AI-powered code security and vulnerability scanning.", url: "https://snyk.io", category: "coding", pricing: "freemium", tags: ["security", "analysis"], isNew: false, isTrending: false },
  { name: "Mintlify", desc: "AI documentation generator for codebases.", url: "https://mintlify.com", category: "coding", pricing: "freemium", tags: ["documentation", "docs"], isNew: false, isTrending: false },
  { name: "Warp", desc: "AI-enhanced terminal for developers.", url: "https://www.warp.dev", category: "coding", pricing: "freemium", tags: ["terminal", "ide"], isNew: false, isTrending: true },
  { name: "Cline", desc: "Emerging AI coding agent for workflows.", url: "https://cline.ai", category: "coding", pricing: "free", tags: ["agent", "cli"], isNew: true, isTrending: true },
  { name: "Aider", desc: "Terminal-based AI pair programmer for git workflows.", url: "https://aider.chat", category: "coding", pricing: "free", tags: ["terminal", "git"], isNew: false, isTrending: false },
  { name: "Manus", desc: "AI for full-stack mobile/web apps with 4000+ integrations.", url: "https://manus.im", category: "coding", pricing: "paid", tags: ["agent", "fullstack"], isNew: true, isTrending: false },
  { name: "WordLift", desc: "AI for SEO and structured content on websites.", url: "https://wordlift.io", category: "automation", pricing: "paid", tags: ["seo", "content"], isNew: false, isTrending: false },

  // Learn Coding
  { name: "CodeCombat", desc: "Learn to code by playing a game.", url: "https://codecombat.com", category: "learn_coding", pricing: "freemium", tags: ["game", "learning"], isNew: false, isTrending: false },
  { name: "CodePip", desc: "Learn HTML, CSS, and JS through games.", url: "https://codepip.com", category: "learn_coding", pricing: "freemium", tags: ["css", "html", "game"], isNew: false, isTrending: false },
  { name: "Oh My Git!", desc: "An open source game about learning Git.", url: "https://ohmygit.org", category: "learn_coding", pricing: "free", tags: ["git", "game", "open-source"], isNew: false, isTrending: false },
  { name: "OverTheWire", desc: "Learn security concepts through war games.", url: "https://overthewire.org", category: "learn_coding", pricing: "free", tags: ["security", "linux", "game"], isNew: false, isTrending: false },
  { name: "DevOps Games", desc: "Games exploring DevOps concepts.", url: "https://devops.games", category: "learn_coding", pricing: "free", tags: ["devops", "game"], isNew: false, isTrending: false },
  { name: "K8s Games", desc: "Learn Kubernetes through gaming.", url: "https://k8sgames.com", category: "learn_coding", pricing: "free", tags: ["kubernetes", "game"], isNew: false, isTrending: false },
  { name: "PicoCTF", desc: "A free computer security education program with original content built on a capture-the-flag framework.", url: "https://picoctf.org", category: "learn_coding", pricing: "free", tags: ["security", "ctf", "learning"], isNew: false, isTrending: false },

  // Moved from Templates Hub
  { name: "Templates Hub", desc: "A curated collection of UI components, frontend templates, backend boilerplates, and database schemas for developers.", url: "templates.html", category: "coding", pricing: "free", tags: ["templates", "development", "boilerplates"], isNew: true, isTrending: true },
  { name: "v0 by Vercel", desc: "Generate React UI components using AI.", url: "https://v0.dev/", category: "coding", pricing: "freemium", tags: ["react", "ui-gen", "vercel"], isNew: false, isTrending: true },
  { name: "UIzard", desc: "AI-powered UI design tool for prototyping in minutes.", url: "https://uizard.io/", category: "coding", pricing: "freemium", tags: ["design", "prototype"], isNew: false, isTrending: false },
  { name: "Bolt.new", desc: "In-browser web development powered by AI.", url: "https://bolt.new/", category: "coding", pricing: "freemium", tags: ["web-builder", "ai-assist"], isNew: true, isTrending: true },
  { name: "Galileo AI", desc: "High-fidelity UI designs from text prompts.", url: "https://www.usegalileo.ai", category: "coding", pricing: "freemium", tags: ["design", "ui-gen"], isNew: false, isTrending: true },
  { name: "Subframe", desc: "Clean, production-ready AI UI components and systems.", url: "https://www.subframe.com", category: "coding", pricing: "freemium", tags: ["components", "system"], isNew: false, isTrending: false },
  { name: "Magic Patterns", desc: "AI design system and component generator.", url: "https://magicpatterns.com", category: "coding", pricing: "freemium", tags: ["design-system", "components"], isNew: false, isTrending: false },
  { name: "Komposo", desc: "Text or image to maintainable, framework-flexible UI code.", url: "https://www.komposo.ai", category: "coding", pricing: "freemium", tags: ["ui-code", "frameworks"], isNew: true, isTrending: false },
  { name: "Dyad", desc: "Open-source/local v0-style UI generator.", url: "https://dyad.sh", category: "coding", pricing: "free", tags: ["open-source", "ui-gen"], isNew: true, isTrending: false },
  { name: "Figma Make", desc: "Prompt to responsive interactive websites inside Figma.", url: "https://www.figma.com/solutions/ai-website-builder", category: "coding", pricing: "freemium", tags: ["figma", "design"], isNew: false, isTrending: true },
  { name: "Canva AI Code", desc: "Text prompts to interactive website elements/widgets.", url: "https://www.canva.com/ai-code-generator", category: "coding", pricing: "freemium", tags: ["canva", "widgets"], isNew: false, isTrending: false },
  { name: "Locofy", desc: "Figma/Sketch designs to production frontend code.", url: "https://www.locofy.ai", category: "coding", pricing: "free", tags: ["figma-to-code", "react"], isNew: false, isTrending: true },
  { name: "Relume", desc: "AI sitemaps, wireframes, and component library.", url: "https://www.relume.io", category: "coding", pricing: "freemium", tags: ["webflow", "wireframes"], isNew: false, isTrending: true },
  { name: "Flowstep", desc: "Conversational prompts to complete product UI experiences.", url: "https://flowstep.ai", category: "coding", pricing: "freemium", tags: ["ui-gen", "conversation"], isNew: false, isTrending: false },
  { name: "Google Stitch", desc: "Text/sketches to high-fidelity UI and code (experimental).", url: "https://labs.google", category: "coding", pricing: "free", tags: ["experimental", "google"], isNew: true, isTrending: false },
  { name: "ProtoPie", desc: "Advanced interactive prototypes with AI support.", url: "https://www.protopie.io", category: "coding", pricing: "freemium", tags: ["prototype", "interaction"], isNew: false, isTrending: false },
  { name: "Moonchild AI", desc: "Intent-based UI and logic orchestration for prototypes.", url: "https://moonchild.ai", category: "coding", pricing: "freemium", tags: ["ui", "logic"], isNew: true, isTrending: false },
  { name: "Banani", desc: "Prompt/image to high-fidelity designs or HTML/CSS exports.", url: "https://www.banani.co", category: "coding", pricing: "freemium", tags: ["html", "css"], isNew: false, isTrending: false },
  { name: "Motiff", desc: "AI UI generator for production-ready interfaces.", url: "https://www.motiff.com", category: "coding", pricing: "freemium", tags: ["ui-gen", "figma"], isNew: false, isTrending: false },
  { name: "Kombai", desc: "Design-to-code with high-fidelity Figma conversions.", url: "https://kombai.com", category: "coding", pricing: "freemium", tags: ["figma-to-code"], isNew: false, isTrending: false },
  { name: "AIDesigner", desc: "Premium UI generation with strong visual quality.", url: "https://www.aidesigner.ai", category: "coding", pricing: "freemium", tags: ["ui-gen"], isNew: false, isTrending: false },
  { name: "Supafine", desc: "AI-powered React UI component builder.", url: "https://supafine.ai", category: "coding", pricing: "freemium", tags: ["react", "components"], isNew: true, isTrending: false },
  { name: "Fine", desc: "Clean UI generation with focus on speed and simplicity.", url: "https://fine.dev", category: "coding", pricing: "freemium", tags: ["ui-gen"], isNew: false, isTrending: false },
  { name: "Morph", desc: "Innovative UI component tool for modern stacks.", url: "https://morph.dev", category: "coding", pricing: "freemium", tags: ["components", "modern"], isNew: false, isTrending: false },
  { name: "Anima", desc: "Design-to-production code (Figma to React/HTML).", url: "https://www.animaapp.com", category: "coding", pricing: "freemium", tags: ["figma-to-code", "react"], isNew: false, isTrending: true },
  { name: "Unicorn Studio", desc: "AI for adding 3D effects and interactive elements.", url: "https://unicorn.studio", category: "coding", pricing: "freemium", tags: ["3d", "interactive"], isNew: false, isTrending: false },
  { name: "Aura Build", desc: "New AI design tool for modern web prototypes.", url: "https://aurabuild.com", category: "coding", pricing: "freemium", tags: ["ui-gen", "modern"], isNew: true, isTrending: false },
  { name: "CopilotKit", desc: "Framework for building AI-powered user interfaces.", url: "https://copilotkit.ai", category: "coding", pricing: "freemium", tags: ["framework", "components"], isNew: false, isTrending: false },
  { name: "Base44", desc: "Fast prompt-to-app for internal tools and MVPs.", url: "https://base44.com", category: "coding", pricing: "paid", tags: ["mvp", "internal-tools"], isNew: false, isTrending: false },
  { name: "Emergent", desc: "Full-stack product development from prompts.", url: "https://emergent.sh", category: "coding", pricing: "paid", tags: ["product-dev", "fullstack"], isNew: false, isTrending: false },
  { name: "NxCode", desc: "Dual-agent system for building web apps & MVPs.", url: "https://www.nxcode.io", category: "coding", pricing: "paid", tags: ["agents", "mvp"], isNew: false, isTrending: false },
  { name: "Builder.io", desc: "Visual AI-powered development and CMS.", url: "https://www.builder.io", category: "coding", pricing: "freemium", tags: ["visual-builder", "cms"], isNew: false, isTrending: true },
  { name: "Softr", desc: "No-code apps on Airtable with AI features.", url: "https://softr.io", category: "coding", pricing: "freemium", tags: ["no-code", "airtable"], isNew: false, isTrending: false },
  { name: "Bubble", desc: "Visual web app builder with AI assistance.", url: "https://bubble.io", category: "coding", pricing: "freemium", tags: ["no-code", "visual"], isNew: false, isTrending: true },
  { name: "PlayCode", desc: "AI web design and coding playground.", url: "https://playcode.io", category: "coding", pricing: "free", tags: ["playground", "sandbox"], isNew: false, isTrending: false },
  { name: "LUMI.new", desc: "AI app builder focused on quick SaaS and web apps.", url: "https://lumi.new", category: "coding", pricing: "freemium", tags: ["saas", "app-builder"], isNew: true, isTrending: false },
  { name: "Reflex.build", desc: "Python-based AI app builder for cross-functional teams.", url: "https://reflex.dev", category: "coding", pricing: "freemium", tags: ["python", "app-builder"], isNew: false, isTrending: false },
  { name: "Rork", desc: "Emerging AI app builder for rapid development.", url: "https://rork.ai", category: "coding", pricing: "freemium", tags: ["app-builder", "rapid"], isNew: true, isTrending: false },
  { name: "UI Bakery", desc: "Prompt-to-full-stack with low-code flexibility.", url: "https://uibakery.io", category: "coding", pricing: "freemium", tags: ["low-code", "fullstack"], isNew: false, isTrending: false },
  { name: "Hygraph", desc: "Headless CMS with strong AI/content tools.", url: "https://hygraph.com", category: "coding", pricing: "freemium", tags: ["cms", "headless"], isNew: false, isTrending: false },
  { name: "Sanity", desc: "AI-enhanced content platform for modern websites.", url: "https://www.sanity.io", category: "coding", pricing: "freemium", tags: ["cms", "platform"], isNew: false, isTrending: false },
  { name: "Contentful", desc: "Enterprise headless CMS with AI integrations.", url: "https://www.contentful.com", category: "coding", pricing: "paid", tags: ["enterprise", "cms"], isNew: false, isTrending: false },
  { name: "Firebase + Gen AI", desc: "Backend + AI for rapid web apps.", url: "https://firebase.google.com", category: "coding", pricing: "freemium", tags: ["firebase", "backend-as-a-service"], isNew: false, isTrending: false },
  { name: "Wix AI", desc: "Chat a few questions to full custom website.", url: "https://www.wix.com/ai-website-builder", category: "cloning", pricing: "freemium", tags: ["website-builder", "no-code"], isNew: false, isTrending: true },
  { name: "Durable", desc: "AI builds complete business websites fast.", url: "https://durable.co", category: "cloning", pricing: "paid", tags: ["business", "website-builder"], isNew: false, isTrending: true },
  { name: "Dorik", desc: "AI-powered no-code website creator.", url: "https://dorik.com", category: "cloning", pricing: "freemium", tags: ["no-code", "website-builder"], isNew: false, isTrending: false },
  { name: "Duda", desc: "AI website builder for agencies.", url: "https://www.duda.co", category: "cloning", pricing: "paid", tags: ["agencies", "website-builder"], isNew: false, isTrending: false },
  { name: "CodeDesign.ai", desc: "AI companion for generating and editing websites via chat.", url: "https://codedesign.ai", category: "cloning", pricing: "freemium", tags: ["chat", "website-builder"], isNew: false, isTrending: false },
  { name: "Bookipi", desc: "Simple AI website builder.", url: "https://bookipi.com", category: "cloning", pricing: "freemium", tags: ["simple", "website-builder"], isNew: false, isTrending: false },
  { name: "GoDaddy AI", desc: "AI site builder with e-commerce focus.", url: "https://www.godaddy.com/ai-website-builder", category: "cloning", pricing: "paid", tags: ["ecommerce", "website-builder"], isNew: false, isTrending: false },
  { name: "Wegic", desc: "AI website builder that creates sites in seconds with guided assistance.", url: "https://wegic.ai", category: "cloning", pricing: "freemium", tags: ["guided", "website-builder"], isNew: false, isTrending: false },
  { name: "LandingHero.ai", desc: "Fast AI website builder for landing pages and SaaS sites.", url: "https://www.landinghero.ai", category: "cloning", pricing: "freemium", tags: ["landing-page", "saas"], isNew: true, isTrending: false },
  { name: "Skywork", desc: "Quick AI-powered site and app builder.", url: "https://skywork.ai", category: "cloning", pricing: "freemium", tags: ["app-builder", "website-builder"], isNew: false, isTrending: false },
  { name: "Neo Sites", desc: "Simple, smart AI builder for everyday business sites.", url: "https://neosites.com", category: "cloning", pricing: "freemium", tags: ["business", "website-builder"], isNew: false, isTrending: false },
  { name: "Olitt", desc: "AI website creator with global appeal and quick setup.", url: "https://olitt.com", category: "cloning", pricing: "free", tags: ["quick-setup", "website-builder"], isNew: false, isTrending: false },
  { name: "Tithely Sites", desc: "AI-powered sites tailored for organizations/churches.", url: "https://tithely.com", category: "cloning", pricing: "paid", tags: ["churches", "organizations"], isNew: false, isTrending: false },
  { name: "Design.com", desc: "AI website builder with design-focused features.", url: "https://design.com", category: "cloning", pricing: "freemium", tags: ["design", "website-builder"], isNew: false, isTrending: false },
  { name: "Squarespace AI", desc: "AI-assisted professional site building.", url: "https://www.squarespace.com/ai-website-builder", category: "cloning", pricing: "paid", tags: ["professional", "website-builder"], isNew: false, isTrending: false },
  { name: "IONOS AI", desc: "Budget-friendly AI site creation with hosting.", url: "https://www.ionos.com/ai-website-builder", category: "cloning", pricing: "paid", tags: ["hosting", "budget"], isNew: false, isTrending: false },
  { name: "DreamHost AI", desc: "AI-powered sites with strong hosting integration.", url: "https://www.dreamhost.com/ai-website-builder", category: "cloning", pricing: "paid", tags: ["hosting", "website-builder"], isNew: false, isTrending: false },
  { name: "Mobirise", desc: "Offline-friendly AI website builder.", url: "https://mobirise.com", category: "cloning", pricing: "free", tags: ["offline", "windows"], isNew: false, isTrending: false },
  { name: "Webstudio", desc: "Pro designer’s AI/no-code tool for custom sites.", url: "https://webstudio.is", category: "cloning", pricing: "freemium", tags: ["designer", "no-code"], isNew: false, isTrending: false },
];

// ═══════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════
function safeParseJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    console.warn(`Invalid localStorage JSON for ${key}, resetting.`, err);
    localStorage.removeItem(key);
    return fallback;
  }
}

function getArrayFromStorage(key) {
  const parsed = safeParseJSON(key, []);
  if (Array.isArray(parsed)) return parsed;
  localStorage.removeItem(key);
  return [];
}

function getObjectFromStorage(key) {
  const parsed = safeParseJSON(key, {});
  if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) return parsed;
  localStorage.removeItem(key);
  return {};
}

let favorites = getArrayFromStorage('aihub_favorites');
let ratings = getObjectFromStorage('aihub_ratings');
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
    `${list.length} tool${list.length !== 1 ? 's' : ''} found`;

  document.getElementById('active-tag-label').textContent =
    activeTag ? `· Filtered by #${activeTag}` : '';

  if (list.length === 0) {
    container.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  const catNames = {
    writing: 'Writing & Chat', image: 'Image AI', video: 'Video AI', voice: 'Voice AI',
    coding: 'Coding AI', gaming: 'Gaming AI', devotional: 'Devotional',
    productivity: 'Productivity', editing: 'Editing AI', automation: 'Automation',
    portfolio: 'Portfolio AI', cloning: 'Cloning AI', misc: 'Miscellaneous',
    programming: 'Programming', design: 'Design', marketing: 'Marketing',
    jobs: 'Jobs & Career', self_improvement: 'Self Improvement', finance: 'Finance & Money',
    learn_coding: 'Learn Coding'
  };
  
  const categoryOrder = Object.keys(catNames);

  // Group list by category
  const grouped = {};
  list.forEach(tool => {
    if (!grouped[tool.category]) grouped[tool.category] = [];
    grouped[tool.category].push(tool);
  });

  let html = '';
  categoryOrder.forEach(cat => {
    if (!grouped[cat]) return;

    html += `
    <div class="category-section">
      <div class="category-header">
        <span>${getCategoryIcon(cat)}</span>
        <h2 class="category-title">${catNames[cat]}</h2>
      </div>
      <div class="card-container">
        ${grouped[cat].map(tool => {
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
        }).join('')}
      </div>
    </div>`;
  });

  container.innerHTML = html;

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

  // Modal Open
  container.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.star') || e.target.closest('.tag')) return;
      openModal(card.dataset.name);
    });
  });

  updateFavCount();

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

function getCategoryIcon(cat) {
  const icons = {
    writing: '💬', image: '🖼️', video: '🎬', voice: '🎙️',
    coding: '💻', gaming: '🎮', devotional: '🙏', productivity: '⚡',
    editing: '✨', automation: '🤖', portfolio: '💼', cloning: '👤',
    misc: '🔮', learn_coding: '🧑‍💻'
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

// Header Favorites Link
const favLinkHeader = document.getElementById('fav-link-header');
if (favLinkHeader) {
  favLinkHeader.addEventListener('click', e => {
    e.preventDefault();
    if (activeCategory === 'favorites') {
      activeCategory = 'all';
      favLinkHeader.style.color = 'var(--text)';
    } else {
      activeCategory = 'favorites';
      favLinkHeader.style.color = 'var(--accent)';
    }
    activeTag = '';
    renderCards();
  });
}

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

// ═══════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════
if (document.getElementById('cards')) {
  const initToolsUI = () => {
    try {
      renderCards();
      updateFavCount();
    } catch (err) {
      console.error('Tools UI init failed:', err);
      const resultCountEl = document.getElementById('result-count');
      const cardsEl = document.getElementById('cards');
      if (resultCountEl) resultCountEl.textContent = 'Failed to load tools';
      if (cardsEl) {
        cardsEl.innerHTML = '<div class="no-results" style="display:block;"><i class="fas fa-triangle-exclamation"></i><p>Could not load tools. Refresh page once.</p></div>';
      }
    }
  };

  initToolsUI();
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

  const catNames = { writing: 'Writing', image: 'Image Gen', video: 'Video Gen', voice: 'Voice', coding: 'Coding', gaming: 'Gaming', devotional: 'Devotional', productivity: 'Productivity', editing: 'Editing', automation: 'Automation', portfolio: 'Portfolio', cloning: 'Cloning', misc: 'Misc', programming: 'Programming', design: 'Design', marketing: 'Marketing', jobs: 'Jobs & Career', self_improvement: 'Self Improvement', finance: 'Finance & Money', learn_coding: 'Learn Coding' };
  document.getElementById('modal-category').textContent = catNames[tool.category] || tool.category;

  const priceMap = { free: 'Free', freemium: 'Freemium', paid: 'Paid' };
  document.getElementById('modal-pricing').textContent = priceMap[tool.pricing] || tool.pricing;

  // Reuse stars renderer but we might not want to re-attach events in modal to keep it simple, just read-only or attach once
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
    spotlightResults.innerHTML = '<div style="padding: 1rem; color: var(--text-dim); text-align: center;">Start typing to search tools...</div>';
    spotlightIndex = -1;
    return;
  }

  const filtered = tools.filter(t =>
    t.name.toLowerCase().includes(query) ||
    t.desc.toLowerCase().includes(query) ||
    t.category.toLowerCase().includes(query)
  ).slice(0, 10); // Limit to top 10

  if (filtered.length === 0) {
    spotlightResults.innerHTML = '<div style="padding: 1rem; color: var(--text-dim); text-align: center;">No matching tools found.</div>';
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

