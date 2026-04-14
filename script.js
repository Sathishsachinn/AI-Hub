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

  // PROGRAMMING
  { name: "GitHub", desc: "Code hosting & collaboration", url: "https://github.com/", category: "programming", pricing: "freemium", tags: ["code", "hosting", "collaboration"], isNew: false, isTrending: true },
  { name: "Stack Overflow", desc: "Developer Q&A forum", url: "https://stackoverflow.com/", category: "programming", pricing: "free", tags: ["q&a", "forum", "coding"], isNew: false, isTrending: true },
  { name: "W3Schools", desc: "Coding tutorials & references", url: "https://www.w3schools.com/", category: "programming", pricing: "freemium", tags: ["tutorial", "learning"], isNew: false, isTrending: false },
  { name: "freeCodeCamp", desc: "Learn coding free", url: "https://www.freecodecamp.org/", category: "programming", pricing: "free", tags: ["learning", "coding"], isNew: false, isTrending: true },
  { name: "GeeksforGeeks", desc: "Coding practice & tutorials", url: "https://www.geeksforgeeks.org/", category: "programming", pricing: "freemium", tags: ["tutorial", "practice"], isNew: false, isTrending: false },
  { name: "LeetCode", desc: "Coding interview prep", url: "https://leetcode.com/", category: "programming", pricing: "freemium", tags: ["interview", "practice"], isNew: false, isTrending: true },
  { name: "HackerRank", desc: "Coding challenges & assessments", url: "https://www.hackerrank.com/", category: "programming", pricing: "freemium", tags: ["challenges", "assessment"], isNew: false, isTrending: false },
  { name: "MDN Web Docs", desc: "Web dev documentation", url: "https://developer.mozilla.org/", category: "programming", pricing: "free", tags: ["docs", "web-dev"], isNew: false, isTrending: true },
  { name: "CodePen", desc: "Frontend playground tool", url: "https://codepen.io/", category: "programming", pricing: "freemium", tags: ["frontend", "playground"], isNew: false, isTrending: false },
  { name: "Replit Workspace", desc: "Online code editor", url: "https://replit.com/", category: "programming", pricing: "freemium", tags: ["editor", "ide"], isNew: false, isTrending: true },

  // DESIGN
  { name: "Figma", desc: "UI/UX design tool", url: "https://www.figma.com/", category: "design", pricing: "freemium", tags: ["ui", "ux", "design"], isNew: false, isTrending: true },
  { name: "Canva", desc: "Easy graphic design", url: "https://www.canva.com/", category: "design", pricing: "freemium", tags: ["graphic-design", "easy"], isNew: false, isTrending: true },
  { name: "Behance", desc: "Creative portfolio showcase", url: "https://www.behance.net/", category: "design", pricing: "free", tags: ["portfolio", "showcase"], isNew: false, isTrending: false },
  { name: "Dribbble", desc: "Designer community platform", url: "https://dribbble.com/", category: "design", pricing: "freemium", tags: ["community", "design"], isNew: false, isTrending: false },
  { name: "Coolors", desc: "Color palette generator", url: "https://coolors.co/", category: "design", pricing: "freemium", tags: ["colors", "palette"], isNew: false, isTrending: false },
  { name: "Adobe XD", desc: "UI/UX prototyping tool", url: "https://helpx.adobe.com/xd/get-started.html", category: "design", pricing: "paid", tags: ["ui", "prototyping"], isNew: false, isTrending: false },
  { name: "Unsplash", desc: "Free stock photos", url: "https://unsplash.com/", category: "design", pricing: "free", tags: ["photos", "stock"], isNew: false, isTrending: true },
  { name: "Flaticon", desc: "Free icons library", url: "https://www.flaticon.com/", category: "design", pricing: "freemium", tags: ["icons", "library"], isNew: false, isTrending: true },
  { name: "LottieFiles", desc: "Animated icons library", url: "https://lottiefiles.com/", category: "design", pricing: "freemium", tags: ["animation", "icons"], isNew: false, isTrending: false },
  { name: "Remove.bg", desc: "Background remover tool", url: "https://www.remove.bg/", category: "design", pricing: "freemium", tags: ["background", "remover"], isNew: false, isTrending: true },

  // MARKETING
  { name: "HubSpot", desc: "CRM & marketing tools", url: "https://www.hubspot.com/", category: "marketing", pricing: "freemium", tags: ["crm", "marketing"], isNew: false, isTrending: true },
  { name: "Mailchimp", desc: "Email marketing platform", url: "https://mailchimp.com/", category: "marketing", pricing: "freemium", tags: ["email", "marketing"], isNew: false, isTrending: true },
  { name: "Buffer", desc: "Social media scheduling", url: "https://buffer.com/", category: "marketing", pricing: "freemium", tags: ["social-media", "scheduling"], isNew: false, isTrending: false },
  { name: "Hootsuite", desc: "Social media management", url: "https://www.hootsuite.com/", category: "marketing", pricing: "paid", tags: ["social-media", "management"], isNew: false, isTrending: false },
  { name: "Ahrefs", desc: "SEO & keyword research", url: "https://ahrefs.com/", category: "marketing", pricing: "paid", tags: ["seo", "research"], isNew: false, isTrending: true },
  { name: "SEMrush", desc: "SEO & marketing analytics", url: "https://www.semrush.com/", category: "marketing", pricing: "paid", tags: ["seo", "analytics"], isNew: false, isTrending: true },
  { name: "Google Analytics", desc: "Website traffic analysis", url: "https://analytics.google.com/", category: "marketing", pricing: "free", tags: ["analytics", "traffic"], isNew: false, isTrending: true },
  { name: "Zapier", desc: "Workflow automation tool", url: "https://zapier.com/", category: "marketing", pricing: "freemium", tags: ["automation", "workflow"], isNew: false, isTrending: true },
  { name: "Bitly", desc: "URL shortening tool", url: "https://bitly.com/", category: "marketing", pricing: "freemium", tags: ["url", "shortener"], isNew: false, isTrending: false },
  { name: "BuzzSumo", desc: "Content research tool", url: "https://buzzsumo.com/", category: "marketing", pricing: "paid", tags: ["content", "research"], isNew: false, isTrending: false },

  // JOBS & CAREER
  { name: "LinkedIn", desc: "Professional networking platform", url: "https://www.linkedin.com/", category: "jobs", pricing: "freemium", tags: ["networking", "jobs"], isNew: false, isTrending: true },
  { name: "Indeed", desc: "Global job listings", url: "https://www.indeed.com/", category: "jobs", pricing: "free", tags: ["jobs", "listings"], isNew: false, isTrending: true },
  { name: "Glassdoor", desc: "Company reviews & jobs", url: "https://www.glassdoor.com/", category: "jobs", pricing: "free", tags: ["reviews", "jobs"], isNew: false, isTrending: false },
  { name: "AngelList", desc: "Startup job opportunities", url: "https://angellist.com/", category: "jobs", pricing: "free", tags: ["startup", "jobs"], isNew: false, isTrending: false },
  { name: "Wellfound", desc: "Remote startup jobs", url: "https://wellfound.com/", category: "jobs", pricing: "free", tags: ["remote", "startup"], isNew: false, isTrending: true },
  { name: "Upwork", desc: "Freelance job marketplace", url: "https://www.upwork.com/", category: "jobs", pricing: "freemium", tags: ["freelance", "marketplace"], isNew: false, isTrending: true },
  { name: "Fiverr", desc: "Freelance gig platform", url: "https://www.fiverr.com/", category: "jobs", pricing: "freemium", tags: ["freelance", "gigs"], isNew: false, isTrending: true },
  { name: "Toptal", desc: "Elite freelancer network", url: "https://www.toptal.com/", category: "jobs", pricing: "freemium", tags: ["freelance", "elite"], isNew: false, isTrending: false },
  { name: "RemoteOK", desc: "Remote job listings", url: "https://remoteok.com/", category: "jobs", pricing: "free", tags: ["remote", "jobs"], isNew: false, isTrending: false },
  { name: "We Work Remotely", desc: "Remote work board", url: "https://weworkremotely.com/", category: "jobs", pricing: "free", tags: ["remote", "board"], isNew: false, isTrending: false },

  // PRODUCTIVITY (New Additions)
  { name: "Notion", desc: "Notes & project management", url: "https://www.notion.so/", category: "productivity", pricing: "freemium", tags: ["notes", "management"], isNew: false, isTrending: true },
  { name: "Trello", desc: "Task management boards", url: "https://trello.com/", category: "productivity", pricing: "freemium", tags: ["tasks", "boards"], isNew: false, isTrending: true },
  { name: "Asana", desc: "Team project tracking", url: "https://asana.com/", category: "productivity", pricing: "freemium", tags: ["project", "tracking"], isNew: false, isTrending: true },
  { name: "Slack", desc: "Team communication tool", url: "https://slack.com/", category: "productivity", pricing: "freemium", tags: ["communication", "team"], isNew: false, isTrending: true },
  { name: "ClickUp", desc: "All-in-one productivity", url: "https://clickup.com/", category: "productivity", pricing: "freemium", tags: ["productivity", "all-in-one"], isNew: false, isTrending: true },
  { name: "Todoist", desc: "Personal task manager", url: "https://todoist.com/", category: "productivity", pricing: "freemium", tags: ["tasks", "manager"], isNew: false, isTrending: true },
  { name: "Calendly", desc: "Schedule meetings easily", url: "https://calendly.com/", category: "productivity", pricing: "freemium", tags: ["scheduling", "meetings"], isNew: false, isTrending: true },
  { name: "Evernote", desc: "Note-taking & organization", url: "https://evernote.com/", category: "productivity", pricing: "freemium", tags: ["notes", "organization"], isNew: false, isTrending: false },
  { name: "RescueTime", desc: "Time tracking software", url: "https://www.rescuetime.com/", category: "productivity", pricing: "paid", tags: ["time", "tracking"], isNew: false, isTrending: false },
  { name: "Pomofocus", desc: "Pomodoro timer tool", url: "https://pomofocus.io/", category: "productivity", pricing: "free", tags: ["timer", "pomodoro"], isNew: false, isTrending: true },

  // SELF IMPROVEMENT
  { name: "Headspace", desc: "Guided meditation app", url: "https://www.headspace.com/", category: "self_improvement", pricing: "freemium", tags: ["meditation", "guided"], isNew: false, isTrending: true },
  { name: "Calm", desc: "Sleep & relaxation", url: "https://www.calm.com/", category: "self_improvement", pricing: "freemium", tags: ["sleep", "relaxation"], isNew: false, isTrending: true },
  { name: "Duolingo", desc: "Language learning app", url: "https://www.duolingo.com/", category: "self_improvement", pricing: "freemium", tags: ["language", "learning"], isNew: false, isTrending: true },
  { name: "Habitica", desc: "Gamify your habits", url: "https://habitica.com/", category: "self_improvement", pricing: "freemium", tags: ["habits", "gamify"], isNew: false, isTrending: false },
  { name: "Coursera", desc: "Online skill courses", url: "https://www.coursera.org/", category: "self_improvement", pricing: "freemium", tags: ["courses", "skills"], isNew: false, isTrending: true },
  { name: "Udemy", desc: "Affordable online courses", url: "https://www.udemy.com/", category: "self_improvement", pricing: "freemium", tags: ["courses", "learning"], isNew: false, isTrending: true },
  { name: "Khan Academy", desc: "Free education platform", url: "https://www.khanacademy.org/", category: "self_improvement", pricing: "free", tags: ["education", "free"], isNew: false, isTrending: true },
  { name: "Brilliant", desc: "Interactive learning app", url: "https://brilliant.org/", category: "self_improvement", pricing: "freemium", tags: ["interactive", "learning"], isNew: false, isTrending: false },
  { name: "Skillshare", desc: "Creative learning courses", url: "https://www.skillshare.com/", category: "self_improvement", pricing: "freemium", tags: ["creative", "courses"], isNew: false, isTrending: false },
  { name: "Atomic Habits Journal", desc: "Habit tracking tool", url: "https://jamesclear.com/atomic-habits", category: "self_improvement", pricing: "paid", tags: ["habits", "journal"], isNew: false, isTrending: false },

  // WRITING & CONTENT (New Additions)
  { name: "Hemingway App", desc: "Improve writing clarity", url: "https://hemingwayapp.com/", category: "writing", pricing: "free", tags: ["writing", "clarity"], isNew: false, isTrending: true },
  { name: "QuillBot", desc: "Paraphrasing & rewriting", url: "https://quillbot.com/", category: "writing", pricing: "freemium", tags: ["paraphrasing", "rewriting"], isNew: false, isTrending: true },
  { name: "ProWritingAid", desc: "Writing style analysis", url: "https://prowritingaid.com/", category: "writing", pricing: "freemium", tags: ["style", "analysis"], isNew: false, isTrending: false },
  { name: "Medium", desc: "Writing & publishing platform", url: "https://medium.com/", category: "writing", pricing: "free", tags: ["writing", "publishing"], isNew: false, isTrending: true },
  { name: "Substack", desc: "Newsletter publishing tool", url: "https://substack.com/", category: "writing", pricing: "free", tags: ["newsletter", "publishing"], isNew: false, isTrending: true },
  { name: "Wordtune", desc: "Sentence rewriting tool", url: "https://www.wordtune.com/", category: "writing", pricing: "freemium", tags: ["rewriting", "sentences"], isNew: false, isTrending: false },
  { name: "Paperpile", desc: "Research & citation manager", url: "https://paperpile.com/", category: "writing", pricing: "paid", tags: ["research", "citation"], isNew: false, isTrending: false },

  // FINANCE & MONEY
  { name: "PayPal", desc: "Online payment system", url: "https://www.paypal.com/", category: "finance", pricing: "free", tags: ["payment", "online"], isNew: false, isTrending: true },
  { name: "Stripe", desc: "Online payment gateway", url: "https://stripe.com/", category: "finance", pricing: "free", tags: ["payment", "gateway"], isNew: false, isTrending: true },
  { name: "Wise", desc: "International money transfer", url: "https://wise.com/", category: "finance", pricing: "free", tags: ["transfer", "money"], isNew: false, isTrending: true },
  { name: "Coinbase", desc: "Buy & trade crypto", url: "https://www.coinbase.com/", category: "finance", pricing: "free", tags: ["crypto", "trading"], isNew: false, isTrending: false },
  { name: "Robinhood", desc: "Stock & crypto trading", url: "https://robinhood.com/", category: "finance", pricing: "free", tags: ["stock", "trading"], isNew: false, isTrending: true },
  { name: "Wealthfront", desc: "Automated investing app", url: "https://www.wealthfront.com/", category: "finance", pricing: "free", tags: ["investing", "automated"], isNew: false, isTrending: false },
  { name: "Mint", desc: "Personal finance tracking", url: "https://mint.intuit.com/", category: "finance", pricing: "free", tags: ["finance", "tracking"], isNew: false, isTrending: false },
  { name: "YNAB (You Need A Budget)", desc: "Budget management app", url: "https://www.ynab.com/", category: "finance", pricing: "paid", tags: ["budget", "management"], isNew: false, isTrending: true },
  { name: "Revolut", desc: "Digital banking app", url: "https://www.revolut.com/", category: "finance", pricing: "freemium", tags: ["banking", "digital"], isNew: false, isTrending: true },
  { name: "Plaid", desc: "Financial data API", url: "https://plaid.com/", category: "finance", pricing: "paid", tags: ["api", "financial"], isNew: false, isTrending: false },

  // TOOLS & UTILITIES (New Additions)
  { name: "TinyURL", desc: "Link shortening service", url: "https://tinyurl.com/", category: "misc", pricing: "free", tags: ["link", "shortening"], isNew: false, isTrending: false },
  { name: "Cloudflare", desc: "Website security & CDN", url: "https://www.cloudflare.com/", category: "misc", pricing: "freemium", tags: ["security", "cdn"], isNew: false, isTrending: true },
  { name: "Google Drive", desc: "Cloud file storage", url: "https://www.google.com/drive/", category: "productivity", pricing: "freemium", tags: ["storage", "cloud"], isNew: false, isTrending: true },
  { name: "Dropbox", desc: "Cloud file sharing", url: "https://www.dropbox.com/", category: "productivity", pricing: "freemium", tags: ["sharing", "cloud"], isNew: false, isTrending: false },
  { name: "WeTransfer", desc: "Large file transfer", url: "https://wetransfer.com/", category: "misc", pricing: "freemium", tags: ["transfer", "file"], isNew: false, isTrending: true },
  { name: "LastPass", desc: "Password manager tool", url: "https://www.lastpass.com/", category: "misc", pricing: "freemium", tags: ["password", "manager"], isNew: false, isTrending: false },
  { name: "NordVPN", desc: "Secure VPN service", url: "https://nordvpn.com/", category: "misc", pricing: "paid", tags: ["vpn", "security"], isNew: false, isTrending: true },
  { name: "IFTTT", desc: "Task automation tool", url: "https://ifttt.com/", category: "automation", pricing: "freemium", tags: ["automation", "tasks"], isNew: false, isTrending: true },
  { name: "Loom", desc: "Screen recording tool", url: "https://www.loom.com/", category: "video", pricing: "freemium", tags: ["recording", "screen"], isNew: false, isTrending: true }
];

// ═══════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════
let favorites = JSON.parse(localStorage.getItem('aihub_favorites') || '[]');
let ratings = JSON.parse(localStorage.getItem('aihub_ratings') || '{}');
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

  let compareList = JSON.parse(localStorage.getItem('aihub_compare_tools')) || [];

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
  let compareList = JSON.parse(localStorage.getItem('aihub_compare_tools')) || [];
  if (compareList.includes(toolName)) {
    compareList = compareList.filter(n => n !== toolName);
  } else {
    if (compareList.length >= 3) {
      showToast('You can only compare up to 3 tools.');
      return;
    }
    compareList.push(toolName);
  }
  localStorage.setItem('aihub_compare_tools', JSON.stringify(compareList));
  renderCards(); // Re-render to update buttons
}

function updateCompareDock() {
  const dock = document.getElementById('compare-dock');
  if (!dock) return;
  const compareList = JSON.parse(localStorage.getItem('aihub_compare_tools')) || [];
  document.getElementById('compare-count').textContent = compareList.length;
  if (compareList.length > 0) {
    dock.classList.add('visible');
  } else {
    dock.classList.remove('visible');
  }
}

if (document.getElementById('compare-clear')) {
  document.getElementById('compare-clear').addEventListener('click', () => {
    localStorage.removeItem('aihub_compare_tools');
    renderCards();
  });
}

function getCategoryIcon(cat) {
  const icons = {
    writing: '💬', image: '🖼️', video: '🎬', voice: '🎙️',
    coding: '💻', gaming: '🎮', devotional: '🙏', productivity: '⚡',
    editing: '✨', automation: '🤖', portfolio: '💼', cloning: '👤',
    misc: '🔮', programming: '💻', design: '🎨', marketing: '📈',
    jobs: '👔', self_improvement: '🌱', finance: '💰'
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
  
  const catNames = { writing: 'Writing', image: 'Image Gen', video: 'Video Gen', voice: 'Voice', coding: 'Coding', gaming: 'Gaming', devotional: 'Devotional', productivity: 'Productivity', editing: 'Editing', automation: 'Automation', portfolio: 'Portfolio', cloning: 'Cloning', misc: 'Misc', programming: 'Programming', design: 'Design', marketing: 'Marketing', jobs: 'Jobs & Career', self_improvement: 'Self Improvement', finance: 'Finance & Money' };
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
    return "Hello! 👋 I'm HubBot. What kind of AI tool are you looking to discover today?";
  }
  if (qStr.includes('how are you')) {
    return "I'm just a few lines of code, but I'm feeling incredibly helpful today! What can I find for you?";
  }
  if (qStr.includes('who are you') || qStr.includes('what are you')) {
    return "I am HubBot, your personal AI directory assistant. Tell me what you want to build or do, and I'll recommend the best AI tools for the job!";
  }
  if (qStr.includes('thank you') || qStr.includes('thanks')) {
    return "You're very welcome! Let me know if you need anything else. 🚀";
  }
  if (qStr.includes('bye') || qStr.includes('goodbye')) {
    return "Goodbye! Keep innovating! ✨";
  }

  // 2. Keyword Mapping Logic
  // Map broader conversational concepts to our specific categories/tags
  const intents = {
    image: ['image', 'photo', 'picture', 'art', 'draw', 'generate image', 'painting'],
    video: ['video', 'animate', 'animation', 'movie', 'film', 'clip'],
    writing: ['write', 'text', 'chat', 'blog', 'essay', 'copywriting', 'article'],
    coding: ['code', 'program', 'develop', 'software', 'app', 'website', 'html', 'css', 'react'],
    voice: ['voice', 'audio', 'sound', 'speak', 'music', 'podcast', 'speech'],
    productivity: ['productive', 'organize', 'task', 'manage', 'schedule', 'planning'],
    free: ['free', 'zero cost', 'no money', 'unpaid']
  };

  let matchedCategory = null;
  let isFreeSearch = false;
  
  // Check against our intents map
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
    // 3. Fallback to broad fuzzy matching across name and description
    const searchTerms = qStr.split(' ').filter(word => word.length > 2); // Ignore 'a', 'is', etc.
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
    // Prioritize trending or highly rated tools if sorting is possible, otherwise slice top 3
    matches.sort((a, b) => (ratings[b.name] || 0) - (ratings[a.name] || 0));
    const top3 = matches.slice(0, 3);
    const links = top3.map(t => `<br>• <a href="#" onclick="openModal('${t.name}'); return false;" style="color: var(--accent); font-weight: 600; text-decoration: none;">${t.name}</a> - <span style="font-size: 0.8em; color: var(--text-dim);">${t.category}</span>`).join('');
    
    const responses = [
      "Here are the top tools that match what you're looking for:",
      "I've searched the database. These might be exactly what you need:",
      "Based on your request, I highly recommend checking these out:"
    ];
    const randomIntro = responses[Math.floor(Math.random() * responses.length)];
    
    return `${randomIntro}${links}`;
  }

  // 5. Final Fallback
  return "I couldn't find an exact match for that! Could you try describing what you want to do differently? (e.g., 'generate photos' or 'code a website')";
}
