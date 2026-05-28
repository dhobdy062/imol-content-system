# AI Video Studio

A skill for generating visual content (video clips and images) for AI courses and

informational YouTube videos. The agent uses Replicate MCP to access image and video

models and returns both hosted URLs and saved files.

---

## Model Routing

Use this table to decide which model to call for every request:

| **Content Type**                                | **Model**        | **Model ID / Version**                                             |
| ----------------------------------------------- | ---------------- | ------------------------------------------------------------------ |
| Silent video clip (no sound)                    | LTX LightTricks  | `8c47da666861d081eeb4d1261853087de23923a268a69b63febdf5dc1dee08e4` |
| Image without text                              | Flux 2 Dev Turbo | `black-forest-labs/flux-2-dev-turbo`                               |
| Image WITH text (title cards, slides, graphics) | Grok Imagine     | `grok-imagine-image`                                               |

**Routing rules (in priority order):**

1. **Route to Grok** if the user explicitly requests text in the image (e.g., "with the words...", "title card that says...", "add text overlay", "with text")
2. **Route to Grok** if the provided script or content *describes* an image that inherently contains text — such as a slide, title card, chapter header, label, diagram with annotations, on-screen statistic, or quote graphic
3. **Route to Flux** for all other images — scenes, concepts, B-roll stills, environments, abstract visuals

**Key signal words in scripts that should trigger Grok routing:**

`title`, `slide`, `headline`, `caption`, `label`, `text overlay`, `quote`, `statistic`, `chapter`, `module`, `step`, `on-screen text`, `graphic that reads`, `displays the words`, `shows the text`

---

## Workflow

When the user provides content and requests visuals, follow this sequence every time:

### Step 1 — Read and Analyze the Content

Review what the user has provided: script segment, course outline, topic, or description.

Identify the key concepts, scenes, or moments that need visual support.

### Step 2 — Show a Brief Visual Plan

Before generating anything, present a short plan to the user:

```other
📋 Visual Plan
───────────────
1. [Asset name] — [type: video clip / image / title card] — [brief description]
2. [Asset name] — [type] — [brief description]
3. ...
  
Model routing:
- Clips → LTX LightTricks
- Images → Flux 2 Dev Turbo
- Text graphics → Grok Imagine
  
Aspect ratio: [detected or ask if unclear]
Ready to generate — confirm or adjust?
```

Wait for user confirmation before proceeding.

### Step 3 — Generate Assets via Replicate MCP

Call the appropriate Replicate model for each asset. See parameters below.

### Step 4 — Deliver Results

For each generated asset, provide:

- ✅ A descriptive name
- 🔗 The hosted URL from Replicate
- 💾 The saved file path (see File Saving below)
- 📝 A one-line prompt summary

---

## Aspect Ratios

Support these three ratios. Detect from context or ask if unclear:

| **Ratio** | **Use Case**                             | **Default?**                        |
| --------- | ---------------------------------------- | ----------------------------------- |
| 16:9      | YouTube videos, course B-roll, landscape | ✅ Yes — default                     |
| 9:16      | YouTube Shorts, vertical social clips    | When user mentions Shorts/vertical  |
| 1:1       | Thumbnails, square social graphics       | When user mentions thumbnail/square |

---

## Generation Parameters

### LTX LightTricks — Silent Video Clips

```other
model_version: 8c47da666861d081eeb4d1261853087de23923a268a69b63febdf5dc1dee08e4
prompt: [descriptive scene prompt — be cinematic and specific]
num_frames: 65        # ~5 seconds at default fps; use 97 for ~7 seconds
width: 1280           # 16:9 default
height: 720
guidance_scale: 7.5
num_inference_steps: 30
```

Adjust width/height for aspect ratio:

- 16:9 → 1280×720
- 9:16 → 720×1280
- 1:1 → 768×768

### Flux 2 Dev Turbo — Images (no text)

```other
model: black-forest-labs/flux-2-dev-turbo
prompt: [rich visual description, no text elements]
width: 1280
height: 720           # adjust per aspect ratio
num_outputs: 1
guidance_scale: 3.5
num_inference_steps: 4
```

### Grok Imagine — Images WITH Text

```other
model: grok-imagine-image
prompt: [describe the image AND specify exact text to appear, font style, placement]
```

When routing to Grok, instruct the user to specify:

- Exact text to display
- Preferred style (clean/minimal, bold, techy, etc.)
- Text placement (centered, lower third, top banner, etc.)

---

## Prompt Writing Guidelines

Good prompts produce great visuals. Apply these rules when constructing prompts:

**For video clips (LTX):**

- Be cinematic: "Slow zoom into a glowing neural network visualization, dark background,

blue and purple light pulses, ultra HD, professional"

- Describe motion: "camera slowly panning", "particles floating upward", "smooth fade"
- Avoid people/faces for cleaner B-roll results
- Match the course tone: techy/futuristic for AI topics

**For images (Flux):**

- Lead with the subject: "A sleek dashboard interface displaying AI analytics..."
- Add style keywords: "photorealistic", "digital art", "clean minimalist", "cinematic lighting"
- Include lighting and mood: "soft blue ambient light", "dark background with neon accents"

**For text graphics (Grok):**

- Specify text explicitly: `text: "Chapter 3: Prompt Engineering"`
- Describe layout: "centered white bold text on dark gradient background"
- Keep prompts clean and direct — Grok handles typography well with clear instructions

---

## File Saving

Save all generated assets to `/outputs/ai-video-studio/`.

**Naming convention:** `[type]-[slug-from-prompt]-[timestamp].[ext]`

Examples:

- `video-neural-network-broll-20250316-143022.mp4`
- `image-ai-dashboard-concept-20250316-143105.png`
- `title-chapter3-prompt-engineering-20250316-143210.png`

After saving, always report both the URL and the local file path to the user.

---

## Example Triggers

These are the kinds of requests this skill handles:

- "Here's my course outline — can you generate B-roll for each chapter?"
- "I'm recording a YouTube video about machine learning. Create 3 concept visuals."
- "Make a title card that says 'Module 2: Building with Claude'"
- "Generate a thumbnail for my video on AI for small businesses"
- "I need a 5-second video clip of data flowing through a network"
- "Create visuals to go with this script segment: [paste script]"
- "Make me a 9:16 intro clip for my YouTube Shorts channel"

---

## Notes for the Agent

- Always show the visual plan before generating — don't skip this step.
- If the user's content is long (full script or outline), identify the 3–5 most

important visual moments rather than generating for every line.

- If the user says "all of them" or "the whole course", suggest batching by section

and confirm before generating to avoid runaway API calls.

- If Replicate MCP returns an error, report the error clearly and suggest the user

check their Replicate API key and MCP connection.

- Quality over quantity — one great visual is better than five mediocre ones.