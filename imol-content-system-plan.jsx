import React, { useState } from "react";

const C = {
  primary: "#2563EB",
  secondary: "#0EA5E9",
  cta: "#F43F5E",
  bg: "#F8FAFC",
  text: "#172033",
  muted: "#64748B",
  border: "#E2E8F0",
  white: "#FFFFFF",
  success: "#10B981",
  warning: "#F59E0B",
  ink: "#0F172A",
  soft: "#EFF6FF",
};

const icons = {
  hub: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93A10 10 0 0 1 21 12a10 10 0 0 1-1.93 5.07M4.93 4.93A10 10 0 0 0 3 12a10 10 0 0 0 1.93 5.07M12 3v2M12 19v2M3 12H1M23 12h-2" />
    </svg>
  ),
  script: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  ),
  platform: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  automation: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  workflow: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  analytics: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  roadmap: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  skills: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  check: (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  close: (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
};

const pillars = [
  {
    title: "Health",
    color: C.success,
    desc: "Emotional regulation, wellness habits, student check-ins, and the 0-10 emotional scale.",
  },
  {
    title: "Heart",
    color: C.cta,
    desc: "Personal story, parent encouragement, belonging, classroom empathy, and community trust.",
  },
  {
    title: "Hustle",
    color: C.primary,
    desc: "Life skills, workforce readiness, consistency, school initiative growth, and action steps.",
  },
];

const audiences = [
  "Students and youth program participants",
  "Parents and caregivers",
  "Teachers, counselors, and administrators",
  "Community partners and local supporters",
  "Social audiences discovering #IMOL",
];

const skillsData = [
  {
    id: "s1",
    name: "0-10 Emotional Scale",
    pillar: "Health",
    category: "Emotional Regulation",
    audience: "Students, Parents, Teachers",
    anchor: "0-10 Scale Check-In",
    desc: "A key IMOL self-reflection anchor allowing youth to check in on their emotional state on a 0 (extreme crisis) to 10 (thriving) scale.",
    brandCopy: "We don't just ask kids 'how are you?' We ask them to map it on a scale from 0 to 10. That takes away the pressure to perform wellness and gives them a real, objective language for self-regulation.",
    schoolAsset: "Classroom Scale Wall Chart & Teacher Resource Binder Check-In Sheet",
    avoidFlag: "Do not use clinical health claims or diagnose anxiety levels based on scale check-ins.",
    hooks: [
      { type: "Contrarian", text: "Stop asking kids 'how are you?'—they will just say 'good' or 'fine'. Ask them where they are on a scale of 0 to 10 instead." },
      { type: "Educational", text: "The 0-10 scale isn't about scoring your mood. It's about recognizing when you're at a 4 so you can bring yourself back to a 7 before a crisis hits." },
      { type: "Story-Based", text: "I watched a classroom of eighth-graders enter, check the scale chart, and quietly self-regulate without a single teacher warning. Here is the exact check-in sheet they used." }
    ]
  },
  {
    id: "s2",
    name: "Backpacks & Binders",
    pillar: "Hustle",
    category: "Workforce Readiness & Organization",
    audience: "Students, Partners",
    anchor: "Physical Organization Tools",
    desc: "The physical organization system used in IMOL to teach responsibility, time management, and tactile task tracking as foundational hustle habits.",
    brandCopy: "A messy backpack is a messy mind. When we teach youth to organize their binders and carry their backpacks with intentionality, we are teaching them workforce consistency and showing up ready to work.",
    schoolAsset: "IMOL Guided Planner and Backpack Organization Matrix",
    avoidFlag: "Avoid naming specific school brand binders or requiring high-cost equipment in prompts.",
    hooks: [
      { type: "Contrarian", text: "Workforce readiness doesn't start in college. It starts with how a middle schooler packs their binder every single morning." },
      { type: "Educational", text: "Organizing your bag is organizing your day. Here are three simple binder tabs that teach youth consistency before they even reach high school." },
      { type: "Story-Based", text: "When Marcus got his first internship, he brought his IMOL-organized binder on day one. His manager said it was better than most executive desks. Here's how he built it." }
    ]
  },
  {
    id: "s3",
    name: "AI-ja Framework",
    pillar: "Heart",
    category: "Belonging & Identity",
    audience: "Students, Teachers, Parents",
    anchor: "Language of Respect & Space",
    desc: "A cultural and linguistic anchor used to define personal space, belonging, and boundaries within the classroom and youth-focused programs.",
    brandCopy: "AI-ja is the language of 'I see you, and I respect your space.' It is a verbal boundary that tells every student in the room that their presence is valued and their boundaries are absolute.",
    schoolAsset: "AI-ja Welcome Posters and Sunday Anxiety Parent Sheet",
    avoidFlag: "Ensure AI-ja is presented as a cultural, community-driven classroom culture tool, not a clinical therapy system.",
    hooks: [
      { type: "Contrarian", text: "Kids don't need another behavior lecture. They need a shared word that guarantees their physical and emotional space is safe." },
      { type: "Educational", text: "What is AI-ja? It is a simple, three-syllable verbal agreement that creates instant respect and alignment between youth and adults in a room." },
      { type: "Story-Based", text: "We introduced AI-ja to a high-tension program site on Tuesday. By Thursday, students were using it to self-moderate arguments without staff stepping in. This is why language matters." }
    ]
  },
  {
    id: "s4",
    name: "0-10 Parent Wellness Check-In",
    pillar: "Heart",
    category: "Parent Engagement",
    audience: "Parents",
    anchor: "Caregiver Coping Tools",
    desc: "Adapting the 0-10 emotional scale for caregivers to promote home-school alignment, emotional check-ins, and reducing Sunday night parent anxiety.",
    brandCopy: "Your child's teacher asks them for their number, but who is asking you? Parents need permission to say they are at a 3, so they can co-regulate with their children rather than pass down stress.",
    schoolAsset: "Sunday Night Parent Coping Sheet and Caregiver Scale Magnet",
    avoidFlag: "Do not give medical diagnosis or advise caregivers to ignore severe clinical warning signs.",
    hooks: [
      { type: "Contrarian", text: "We expect parents to be emotional rocks 24/7, but children learn resilience when we have the courage to say 'I'm at a 4 right now, let's take a beat together'." },
      { type: "Educational", text: "Use the 0-10 scale at the dinner table. It takes 2 minutes and bypasses the defensive walls kids put up when we ask 'how was school?'" },
      { type: "Story-Based", text: "A mother sent us a letter saying the 0-10 scale saved their Sunday nights. She and her son started writing their numbers on a fridge magnet instead of arguing. Here is the guide she used." }
    ]
  },
  {
    id: "s5",
    name: "Teacher Resource Binder",
    pillar: "Hustle",
    category: "Classroom Consistency",
    audience: "Teachers, Counselors, Administrators",
    anchor: "Educator Resource Kit",
    desc: "The central reference binder for teachers, containing classroom prompt scripts, physical scale assets, parent night templates, and pilot outreach notes.",
    brandCopy: "A classroom resource is only good if a busy teacher can use it in 60 seconds or less. The Teacher Resource Binder fits directly into their daily routine with ready-to-print tools.",
    schoolAsset: "Complete printable Teacher Resource Binder and Counselor Quick-Guides",
    avoidFlag: "Never promise academic achievement increases or behavior modifications that aren't verified by the local site lead.",
    hooks: [
      { type: "Contrarian", text: "Teachers don't need another professional development theory. They need a binder with actionable, 60-second classroom prompts they can print right now." },
      { type: "Educational", text: "Inside the IMOL Teacher Resource Binder are three check-in templates that counselors use to identify students who need immediate emotional check-ins." },
      { type: "Story-Based", text: "We dropped off 10 Teacher Binders at a local pilot school last week. Yesterday, the principal told us 100% of their homeroom teachers are using the 0-10 prompt daily. Here is what's inside it." }
    ]
  },
  {
    id: "s6",
    name: "Emotional Recovery Strategy",
    pillar: "Health",
    category: "Wellness Habits",
    audience: "Students, Parents",
    anchor: "Sunday Night Routine",
    desc: "Building a healthy sleep, recovery, and reflection cycle to combat Sunday night anxiety and set kids up for school-week hustle.",
    brandCopy: "School anxiety doesn't start on Monday morning at 8 AM. It starts on Sunday night. By teaching youth emotional recovery habits, we prep their minds for the academic week ahead.",
    schoolAsset: "Sunday Recovery Guide & Home Sleep hygiene Checksheet",
    avoidFlag: "Avoid clinical terminology regarding clinical sleep disorders or prescribing medical remedies.",
    hooks: [
      { type: "Contrarian", text: "If your child is having behavior issues on Monday, stop trying to fix Monday. Look at what's happening at 8 PM on Sunday night instead." },
      { type: "Educational", text: "The Sunday anxiety cycle is real. Here are two breathing anchors and one screen-free reflection game from IMOL to reset the home dynamic." },
      { type: "Story-Based", text: "Our students call Sunday night the 'transition hour'. We designed a checklist called the 'Quiet Room Matrix' that helped our youth transition from weekend play to weekday focus." }
    ]
  }
];

const systemOutcomes = [
  { metric: "6 weeks", label: "Practical phased rollout" },
  { metric: "3H", label: "Every asset aligned to Health, Heart, or Hustle" },
  { metric: "0-10", label: "Emotional scale becomes a repeatable content anchor" },
  { metric: "1 hub", label: "Social, school, and community ideas tracked together" },
];

const hubTabs = [
  ["Intake Log", "Raw submissions from forms, meetings, school moments, and content ideas", "Date, source, idea, audience, 3H pillar, initiative type, owner, status"],
  ["Script Queue", "Approved ideas ready for AI drafting and review", "Hook options, script, CTA, visual notes, school-use alignment, word count"],
  ["School Initiatives", "Offline activation opportunities and follow-up content", "School target, use case, asset, contact stage, follow-up need, content capture notes"],
  ["Resource Library", "Reusable brand, classroom, parent, and student references", "Backpacks, binders, 0-10 scale, AI-ja notes, Teacher Resource Binder, image links"],
  ["Published Tracker", "Live social posts and campaign results", "URL, platform, pillar, audience, views, saves, comments, school feedback, reuse idea"],
];

const intakeFields = [
  "Content idea or school moment",
  "Audience: student, parent, teacher, administrator, partner, or general social",
  "3H pillar: Health, Heart, or Hustle",
  "Use case: social post, classroom prompt, parent message, school outreach, event recap",
  "Visual anchor: backpack, binder, 0-10 scale, student resource, classroom scene, founder story",
  "Preferred CTA: comment, follow, request info, attend event, review resource, schedule conversation",
];

const hubDeliverables = [
  {
    name: "Intake Form",
    direction: "Create one front door for social ideas, school moments, parent questions, teacher resource needs, and community opportunities.",
    proof: "A test submission lands in the Intake Log with audience, pillar, use case, CTA, owner, and status filled in.",
  },
  {
    name: "Content Hub Sheet",
    direction: "Build the working database with tabs for intake, scripts, school initiatives, resource library, and published tracking.",
    proof: "The team can filter by 3H pillar, audience, platform/channel, school use case, and production status.",
  },
  {
    name: "School Initiative Map",
    direction: "Track outreach targets, classroom use cases, parent engagement plays, and community programming ideas separate from normal posts.",
    proof: "At least five school/community opportunities are mapped with next step, asset needed, follow-up date, and content capture note.",
  },
  {
    name: "Resource Library",
    direction: "Store the brand and classroom anchors the AI drafter must reference: 3H, AI-ja, backpacks, binders, 0-10 scale, and Teacher Resource Binder.",
    proof: "Every AI-ready idea can point to a source asset, approved language, or visual reference before drafting begins.",
  },
];

const hubBuilders = [
  ["Intake Architect", "Google Form questions, validation, and routing fields", "Working form plus 10 test submissions"],
  ["School Initiative Mapper", "School/community use cases, follow-up fields, and adoption status", "Five mapped initiative rows with next steps"],
  ["Resource Librarian", "Approved IMOL language, visual anchors, and source links", "Starter library for 3H, AI-ja, backpacks, binders, and 0-10 scale"],
  ["Publishing Tracker Builder", "Published content and offline outcome tracking", "Tracker with URL, channel, performance, feedback, and reuse fields"],
];

const schoolInitiativeTypes = [
  ["Classroom Prompt", "Short activity or discussion starter tied to Health, Heart, or Hustle.", "Teacher Resource Binder, 0-10 scale"],
  ["Parent Message", "Plain-language post, email, or event note that helps caregivers understand IMOL.", "Parent night, Sunday anxiety, wellness check"],
  ["School Outreach", "Administrator or counselor-facing message that explains fit, benefit, and next step.", "Pilot invitation, resource drop, mini-workshop"],
  ["Community Proof", "Recap, testimonial, or local partner moment that builds offline credibility.", "Event recap, partner quote, photo-safe story"],
];

const aiRules = [
  "Generate exactly three hooks: contrarian, educational, and story-based.",
  "Draft one record-ready short-form script under 150 words.",
  "Tag every output with one 3H pillar and one primary audience.",
  "Add school-use alignment notes for teachers, parents, or community programs when relevant.",
  "Include storyboard suggestions with IMOL anchors such as backpacks, binders, and the 0-10 scale.",
  "End with exactly one CTA written for the selected platform or offline use case.",
];

const aiOutputPackage = [
  ["Hook Set", "Contrarian, educational, and story-based hooks written for the selected audience."],
  ["Short-Form Script", "One 30-second script under 150 words with Hook, Bridge, Body, and CTA sections."],
  ["School-Use Alignment", "A note explaining how the idea supports classroom engagement, parent communication, or student development."],
  ["Storyboard Notes", "Shot, overlay, B-roll, and visual-anchor suggestions using IMOL assets."],
  ["Repurpose Angle", "One alternate version for a school channel, parent message, or community follow-up."],
];

const aiAvoidRules = [
  ["Generic wellness", "Avoid broad advice like 'take a deep breath' unless it connects to an IMOL tool, story, or school use case."],
  ["Unsupported claims", "Do not promise clinical, behavioral, academic, or mental health outcomes without approved source language."],
  ["Private details", "Do not include student names, identifying school details, or sensitive family context."],
  ["Mixed CTAs", "Do not ask viewers to comment, follow, click, and attend in the same script. Choose one next action."],
];

const promptBlueprint = [
  "Role: You are the IMOL content and school initiative drafting assistant.",
  "Context: IMOL teaches youth emotional literacy and life skills through the 3H Framework and AI-ja.",
  "Inputs: idea, audience, 3H pillar, channel, school use case, visual anchor, CTA, and approved source notes.",
  "Output order: metadata, three hooks, script, storyboard, school-use alignment, repurpose angle, QA flags.",
  "Guardrails: keep language school-safe, avoid private student details, avoid unsupported health claims, and use one CTA.",
];

const scriptSections = [
  { label: "Hook", timing: "0-3 sec", words: "0-15 words", color: C.cta, desc: "Stop the scroll with a clear tension, question, or story opening." },
  { label: "Bridge", timing: "3-6 sec", words: "15-30 words", color: C.warning, desc: "Explain why the message matters to students, parents, teachers, or the community." },
  { label: "Body", timing: "6-22 sec", words: "60-80 words", color: C.primary, desc: "Deliver one focused idea with 2-3 concrete points and simple language." },
  { label: "CTA", timing: "22-30 sec", words: "15-25 words", color: C.success, desc: "Invite one next action, such as comment, request the resource, or start a school conversation." },
];

const platformPlans = [
  {
    name: "TikTok",
    role: "Reach and awareness",
    color: "#111827",
    focus: "Student behavior signals, emotional checkpoints, backpack visuals, and fast education moments.",
    bestFor: ["Day-in-the-life clips", "Back-talk and overwhelm signals", "Founder story moments", "Comment-driven prompts"],
    checks: ["Hook is clear in the first second", "Captions are readable without sound", "CTA asks for one response"],
  },
  {
    name: "Instagram Reels",
    role: "Parent and community connection",
    color: "#E11D48",
    focus: "Sunday anxiety, wellness checks, parent encouragement, Heart-day content, and behind-the-scenes trust building.",
    bestFor: ["Parent encouragement", "Community event recaps", "Resource previews", "Founder credibility"],
    checks: ["Cover frame is clean", "Post is save-worthy", "Caption supports parent or community context"],
  },
  {
    name: "YouTube Shorts",
    role: "Authority and education",
    color: "#DC2626",
    focus: "Teacher-facing classroom management tips, 3H explanations, Teacher Resource Binder examples, and micro-lessons.",
    bestFor: ["How-to education", "Resource explainers", "Searchable short lessons", "School-safe examples"],
    checks: ["Title is keyword-rich", "Value is clear before the midpoint", "Description points to the next resource"],
  },
  {
    name: "School Channels",
    role: "Offline trust and adoption",
    color: C.success,
    focus: "Assemblies, parent nights, teacher workshops, counselor resources, school pilots, and community partner follow-up.",
    bestFor: ["Invitation language", "Follow-up emails", "Event talking points", "Testimonials and recap posts"],
    checks: ["Audience is school-safe", "Benefit is specific", "Follow-up step is easy to act on"],
  },
];

const automationScenarios = [
  ["Intake to Queue", "New form submission creates a row, tags the audience and 3H pillar, and alerts the content lead.", "Form submit", "Structured hub row"],
  ["AI Drafting", "Approved ideas are sent to the AI prompt and returned with hooks, script, storyboard, and school-use notes.", "Status: Drafting", "Draft package"],
  ["Approval Routing", "Approved scripts are stored as production-ready assets and assigned a recording or school follow-up owner.", "Status: Approved", "Ready-to-produce asset"],
  ["Publishing Tracker", "Published URLs are logged with platform, pillar, audience, and first review date.", "URL added", "Performance row"],
  ["Weekly Review", "Social results and school/community feedback are summarized into next-week script and outreach recommendations.", "Weekly schedule", "Optimization brief"],
];

const automationDeliverables = [
  {
    name: "Scenario 1: Intake Routing",
    direction: "Connect Google Form responses to the hub, normalize fields, assign status, and notify the operator.",
    proof: "Submitting one school idea and one social idea creates two correctly tagged rows.",
  },
  {
    name: "Scenario 2: Draft Generation",
    direction: "When status changes to Drafting, send the structured row into the AI prompt and write the output package back to Script Queue.",
    proof: "One test row returns hooks, script, storyboard, school-use alignment, repurpose angle, and QA flags.",
  },
  {
    name: "Scenario 3: Approval and Asset Storage",
    direction: "When approved, create the production asset record and link script, source notes, visual anchors, owner, and due date.",
    proof: "Approved scripts are visible in the production tracker with no missing owner or source reference.",
  },
  {
    name: "Scenario 4: Published and Feedback Loop",
    direction: "When a URL or offline outcome is added, schedule review and feed the results into the next content planning cycle.",
    proof: "A published post or school follow-up creates a weekly review item with performance and next-action fields.",
  },
];

const automationMvp = [
  ["Must Build First", "Intake Routing, Draft Generation, Approval and Asset Storage"],
  ["Can Stay Manual First", "Native platform publishing, advanced analytics imports, campaign cloning, and automated weekly email reports"],
  ["Human Checkpoints", "Draft approval, school-safe approval, production approval, publish or outreach approval"],
];

const automationFields = [
  ["Trigger Field", "Status, URL, review date, channel, owner"],
  ["Required IDs", "Row ID, script ID, asset folder link, source resource link"],
  ["Human Gates", "Draft review, brand safety, school-safe approval, publish approval"],
  ["Failure Handling", "Missing field flag, retry note, owner alert, manual review status"],
];

const workflowRoles = [
  {
    role: "IMOL Lead",
    color: C.cta,
    tasks: ["Approves final messaging", "Chooses priority audiences", "Provides founder stories and school context", "Confirms what can be shared publicly"],
  },
  {
    role: "Content System Operator",
    color: C.primary,
    tasks: ["Maintains the hub", "Runs AI drafts", "Checks scripts against the QA gates", "Keeps automation and handoff docs current"],
  },
  {
    role: "Creator or Recorder",
    color: C.success,
    tasks: ["Records approved scripts", "Captures school-safe visuals", "Shares delivery feedback", "Engages on published posts"],
  },
  {
    role: "School or Community Reviewer",
    color: C.warning,
    tasks: ["Validates classroom usefulness", "Flags sensitive language", "Suggests parent or teacher follow-up", "Feeds offline outcomes back into the hub"],
  },
];

const qaGroups = [
  ["Brand Safety", ["No private student details", "No unsupported health claims", "No off-brand humor", "No sensitive school identifiers without approval"]],
  ["3H Alignment", ["One primary pillar selected", "Tone matches the pillar", "Audience need is clear", "Message does not drift into multiple goals"]],
  ["Production Readiness", ["Script under 150 words", "One CTA only", "Visual notes included", "Creator can deliver it naturally"]],
  ["School Use", ["Parent, teacher, or student value is visible", "Offline follow-up is clear", "Resource reference is accurate", "Language is age-appropriate"]],
];

const analyticsRows = [
  ["TikTok", "Completion rate", "Shares, comments, profile visits", "Which student or emotional checkpoint themes earn attention"],
  ["Instagram Reels", "Saves", "Shares, reach, replies", "Which parent and community stories build trust"],
  ["YouTube Shorts", "Average view duration", "Title CTR, subscribers, search terms", "Which teacher/resource topics create authority"],
  ["School Channels", "Follow-up actions", "Event attendance, replies, resource requests", "Which offline messages move schools and partners forward"],
];

const optimizationLoop = [
  "Review published posts and school/community feedback every week.",
  "Tag the top three content patterns and the bottom three friction points.",
  "Clone the strongest hook, pillar, audience, or visual anchor into new submissions.",
  "Update the AI prompt when scripts sound unnatural, miss the school use case, or underperform repeatedly.",
  "Move evergreen content into the reuse library for future campaigns and school outreach.",
];

const phases = [
  {
    id: "p1",
    label: "Weeks 1-2",
    title: "Foundation and Intelligence Hub",
    color: C.primary,
    produces: "A working Google Workspace hub that captures social, school, parent, teacher, and community ideas in one place.",
    inputs: ["Brand assets and approved IMOL language", "3H Framework references", "Backpack, binder, and 0-10 scale examples", "Priority audiences and school initiative notes"],
    actions: ["Build intake form fields", "Create hub tabs and status system", "Add resource library categories", "Map school and community initiative types", "Test with sample ideas from each audience"],
    deliverables: ["Google Form intake", "Google Sheet content hub", "Resource library structure", "School initiative mapping sheet", "First 10 sample submissions"],
    acceptance: ["Every sample idea has audience, pillar, use case, owner, and status", "School initiatives can be tracked separately from social-only posts", "Resource references are easy to find during drafting"],
  },
  {
    id: "p2",
    label: "Weeks 3-4",
    title: "AI Drafter and QA Workflow",
    color: C.cta,
    produces: "A repeatable drafting engine that turns approved ideas into hooks, scripts, storyboard notes, and school-use alignment.",
    inputs: ["Approved sample ideas", "Voice and tone examples", "Platform priorities", "School-safe language rules", "Founder story prompts"],
    actions: ["Write the AI system prompt", "Test 10 script drafts", "Add 3H and audience guardrails", "Create QA checklist", "Document review and approval steps"],
    deliverables: ["AI prompt instructions", "Script output format", "QA checklist", "Review workflow", "First approved script batch"],
    acceptance: ["Each draft has 3 hooks, one script under 150 words, one CTA, storyboard notes, and school-use alignment", "Reviewer can reject or approve without guessing", "Scripts sound like IMOL, not generic wellness content"],
  },
  {
    id: "p3",
    label: "Weeks 5-6",
    title: "Automation, Publishing, Analytics, and Handoff",
    color: C.success,
    produces: "A usable operating system with automation touchpoints, publishing rhythm, analytics review, and team handoff.",
    inputs: ["Approved scripts", "Publishing owners", "Google Drive structure", "Analytics fields", "Training attendees"],
    actions: ["Connect intake and drafting scenarios", "Create production-ready asset storage", "Set publishing tracker workflow", "Build weekly review routine", "Deliver training and handoff guide"],
    deliverables: ["Automation scenarios", "Production tracker", "Weekly review template", "Prompt maintenance notes", "Training and handoff guide"],
    acceptance: ["A new idea can move from intake to approved script to published tracker", "Weekly review identifies next actions", "Team can operate the system after handoff"],
  },
];

const implementationWorkstreams = [
  {
    owner: "Subagent 1: Intel Hub Builder",
    scope: "Design the intake form, sheet tabs, field definitions, status system, and sample data.",
    deliverables: "Form field map, hub tab schema, school initiative tracker, resource library starter rows.",
    acceptance: "Ten sample submissions move cleanly from raw idea to categorized hub rows.",
  },
  {
    owner: "Subagent 2: AI Drafter Builder",
    scope: "Write the prompt package, output format, QA rules, and sample scripts for IMOL use cases.",
    deliverables: "System prompt, draft template, 10 test outputs, QA checklist, rejected-output examples.",
    acceptance: "Each output includes hooks, script, storyboard, school-use alignment, repurpose angle, and one CTA.",
  },
  {
    owner: "Subagent 3: Automation Builder",
    scope: "Map and configure workflow triggers, routing logic, storage links, alerts, and weekly review mechanics.",
    deliverables: "Make.com scenario map, field mapping table, error handling rules, review reminder workflow.",
    acceptance: "A test idea can travel intake to draft to approval to publish/review without losing context.",
  },
  {
    owner: "Subagent 4: Handoff and QA Reviewer",
    scope: "Validate the whole system, create the implementation guide, and prepare training direction.",
    deliverables: "Operator checklist, training agenda, acceptance test script, handoff guide.",
    acceptance: "A new operator can run the workflow using the guide without needing the builder present.",
  },
];

const prdRequirements = [
  ["Problem", "IMOL needs one repeatable operating system for social content and school initiative growth instead of scattered ideas, emails, and one-off scripts."],
  ["System Goal", "Capture ideas once, enrich them with IMOL context, draft usable content, route human approvals, and learn from published and offline results."],
  ["Core Artifacts", "Intel Hub, AI Drafter prompt package, automation map, QA checklist, weekly review template, training and handoff guide."],
  ["Definition of Done", "A new idea can move from intake to AI draft to approval to published/offline tracking with clear owner, source, status, and next action."],
];

const phaseChecklist = phases.flatMap((phase) =>
  phase.deliverables.map((item) => ({ id: `${phase.id}-${item}`, phaseId: phase.id, item }))
);

const Pill = ({ children, color = C.primary }) => (
  <span className="pill" style={{ background: `${color}18`, color, borderColor: `${color}30` }}>
    {children}
  </span>
);

const Card = ({ children, className = "", style = {} }) => (
  <section className={`card ${className}`} style={style}>
    {children}
  </section>
);

const Label = ({ children }) => <p className="label">{children}</p>;

const SectionTitle = ({ children }) => <h3 className="section-title">{children}</h3>;

const CheckItem = ({ children }) => (
  <li className="check-item">
    <span className="check-icon">{icons.check}</span>
    <span>{children}</span>
  </li>
);

const StepBadge = ({ n, color = C.primary }) => (
  <span className="step-badge" style={{ background: color }}>
    {n}
  </span>
);

const Hero = () => (
  <div className="hero">
    <div>
      <Pill color={C.cta}>#IMOL PRD and Build Instructions</Pill>
      <h2>Content and School Initiative System PRD</h2>
      <p>
        Product requirements and implementation instructions for building the content, school initiative, and community
        growth system behind IMOL. The system turns ideas, classroom moments, parent messages, and founder stories into
        reusable social content and offline adoption assets.
      </p>
    </div>
    <div className="hero-panel">
      <Label>PRD Scope</Label>
      <strong>6-week phased rollout</strong>
      <span>Intel Hub, AI Drafter, automation, analytics, and operator handoff.</span>
    </div>
  </div>
);

const PRDTab = () => (
  <div className="stack">
    <Hero />

    <Card className="table-card">
      <Label>Product Requirements</Label>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Area</th>
              <th>Instruction</th>
            </tr>
          </thead>
          <tbody>
            {prdRequirements.map(([area, instruction]) => (
              <tr key={area}>
                <td>{area}</td>
                <td>{instruction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>

    <Card>
      <Label>Orchestrated Workstreams</Label>
      <div className="workstream-grid">
        {implementationWorkstreams.map((stream) => (
          <div className="workstream" key={stream.owner}>
            <h4>{stream.owner}</h4>
            <p>{stream.scope}</p>
            <dl>
              <dt>Deliverables</dt>
              <dd>{stream.deliverables}</dd>
              <dt>Acceptance</dt>
              <dd>{stream.acceptance}</dd>
            </dl>
          </div>
        ))}
      </div>
    </Card>

    <div className="grid three">
      {[
        ["Intel Hub", "Google Form, Sheet tabs, school initiative tracker, and resource library."],
        ["AI Drafter", "Prompt package, output format, QA rules, draft examples, and rejected examples."],
        ["Automation", "Minimum viable routing from intake to draft to approval to review."],
      ].map(([title, desc]) => (
        <Card key={title} className="tight">
          <Pill color={title === "Automation" ? C.warning : C.primary}>{title}</Pill>
          <p>{desc}</p>
        </Card>
      ))}
    </div>
  </div>
);

const OverviewTab = () => (
  <div className="stack">
    <div>
      <Label>Core Alignment Framework</Label>
      <div className="grid three">
        {pillars.map((pillar) => (
          <Card key={pillar.title} className="tight" style={{ borderTop: `3px solid ${pillar.color}` }}>
            <h4 style={{ color: pillar.color }}>{pillar.title}</h4>
            <p>{pillar.desc}</p>
          </Card>
        ))}
      </div>
    </div>

    <div className="grid two">
      <Card>
        <Label>Primary Audiences</Label>
        <ul className="clean-list">
          {audiences.map((audience) => (
            <CheckItem key={audience}>{audience}</CheckItem>
          ))}
        </ul>
      </Card>
      <Card>
        <Label>System Outcomes</Label>
        <div className="metrics-grid">
          {systemOutcomes.map((item) => (
            <div key={item.label} className="metric">
              <strong>{item.metric}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>

    <Card className="accent">
      <Label>Client-Ready Positioning</Label>
      <p>
        IMOL should be presented as a connected youth emotional literacy and life-skills growth system. Social content
        creates awareness, school initiatives create trust, parent engagement deepens adoption, and community programming
        gives the message a practical offline path. The intelligence hub connects each side so strong
        stories, resources, and feedback can be reused.
      </p>
    </Card>
  </div>
);

const HubTab = () => (
  <div className="stack">
    <Card className="intro" style={{ borderLeftColor: C.primary }}>
      <SectionTitle>Central Intelligence Hub</SectionTitle>
      <p>
        The hub captures social ideas, school touchpoints, parent-facing messages, teacher resources, and community
        activation opportunities in one operating system.
      </p>
    </Card>

    <div className="grid two">
      <Card>
        <Label>Required Intake Fields</Label>
        <ul className="clean-list">
          {intakeFields.map((field) => (
            <CheckItem key={field}>{field}</CheckItem>
          ))}
        </ul>
      </Card>
      <Card>
        <Label>Build Checks</Label>
        <ul className="clean-list">
          {[
            "Every form response lands in the intake log.",
            "Ideas can be filtered by pillar, audience, platform, and offline use case.",
            "School initiatives can be tracked without mixing them into social-only posts.",
            "Resource references are linked before an idea moves into drafting.",
          ].map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </ul>
      </Card>
    </div>

    <div className="grid two">
      {hubDeliverables.map((item) => (
        <Card key={item.name} className="tight">
          <Pill color={C.primary}>{item.name}</Pill>
          <p>{item.direction}</p>
          <div className="proof-line">
            <strong>Acceptance proof</strong>
            <span>{item.proof}</span>
          </div>
        </Card>
      ))}
    </div>

    <Card className="table-card">
      <Label>Recommended Hub Tabs</Label>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tab</th>
              <th>Purpose</th>
              <th>Key Columns</th>
            </tr>
          </thead>
          <tbody>
            {hubTabs.map(([tab, purpose, columns]) => (
              <tr key={tab}>
                <td>{tab}</td>
                <td>{purpose}</td>
                <td>{columns}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>

    <div className="grid two">
      <Card className="table-card">
        <Label>Subagent Assignments by Hub Area</Label>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Builder</th>
                <th>Input</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              {hubBuilders.map(([builder, input, output]) => (
                <tr key={builder}>
                  <td>{builder}</td>
                  <td>{input}</td>
                  <td>{output}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card className="table-card">
        <Label>School Initiative Types</Label>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Instruction</th>
                <th>Example Anchor</th>
              </tr>
            </thead>
            <tbody>
              {schoolInitiativeTypes.map(([type, instruction, anchor]) => (
                <tr key={type}>
                  <td>{type}</td>
                  <td>{instruction}</td>
                  <td>{anchor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  </div>
);

const ScriptTab = () => (
  <div className="stack">
    <Card className="intro" style={{ borderLeftColor: C.cta }}>
      <SectionTitle>AI Script Drafter</SectionTitle>
      <p>
        The drafting workflow converts approved ideas into hooks, short-form scripts, visual notes, and school-use
        alignment. It should help IMOL create content faster without losing the personal and educational purpose.
      </p>
    </Card>

    <div className="grid two">
      <Card>
        <Label>AI-ja and 3H Guardrails</Label>
        <ul className="clean-list">
          {aiRules.map((rule) => (
            <CheckItem key={rule}>{rule}</CheckItem>
          ))}
        </ul>
      </Card>
      <Card>
        <Label>Hook Variants</Label>
        {[
          ["Contrarian", "Challenges a common assumption about youth, emotions, or readiness."],
          ["Educational", "Teaches one practical IMOL concept in plain language."],
          ["Story-Based", "Starts from a real founder, parent, classroom, or student-adjacent moment."],
        ].map(([type, desc], index) => (
          <div className="mini-row" key={type}>
            <StepBadge n={index + 1} color={[C.cta, C.primary, C.success][index]} />
            <div>
              <strong>{type}</strong>
              <span>{desc}</span>
            </div>
          </div>
        ))}
      </Card>
    </div>

    <Card className="table-card">
      <Label>Script Architecture</Label>
      <div className="script-steps">
        {scriptSections.map((section) => (
          <div className="script-step" key={section.label}>
            <div className="script-bar" style={{ background: section.color }} />
            <strong style={{ color: section.color }}>{section.label}</strong>
            <span>{section.desc}</span>
            <small>
              {section.timing} / {section.words}
            </small>
          </div>
        ))}
      </div>
    </Card>

    <div className="grid two">
      <Card className="table-card">
        <Label>Required AI Draft Package</Label>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Instruction</th>
              </tr>
            </thead>
            <tbody>
              {aiOutputPackage.map(([field, instruction]) => (
                <tr key={field}>
                  <td>{field}</td>
                  <td>{instruction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card>
        <Label>Prompt Blueprint</Label>
        <ul className="clean-list">
          {promptBlueprint.map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </ul>
      </Card>
    </div>

    <Card className="table-card">
      <Label>Negative Rules and Voice Guardrails</Label>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Avoid</th>
              <th>Instruction</th>
            </tr>
          </thead>
          <tbody>
            {aiAvoidRules.map(([avoid, instruction]) => (
              <tr key={avoid}>
                <td>{avoid}</td>
                <td>{instruction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  </div>
);

const PlatformTab = () => (
  <div className="stack">
    <Card className="intro" style={{ borderLeftColor: C.secondary }}>
      <SectionTitle>Platform and Channel Strategy</SectionTitle>
      <p>
        The system adapts the same core IMOL idea for discovery, community connection, authority building, and offline
        school adoption.
      </p>
    </Card>

    <div className="grid two">
      {platformPlans.map((platform) => (
        <Card key={platform.name} style={{ borderTop: `3px solid ${platform.color}` }}>
          <div className="card-head">
            <h4>{platform.name}</h4>
            <Pill color={platform.color}>{platform.role}</Pill>
          </div>
          <p>{platform.focus}</p>
          <div className="split">
            <div>
              <Label>Best For</Label>
              <ul className="clean-list">
                {platform.bestFor.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
            <div>
              <Label>Pre-Publish Checks</Label>
              <ul className="clean-list">
                {platform.checks.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const AutomationTab = () => (
  <div className="stack">
    <Card className="intro" style={{ borderLeftColor: C.warning }}>
      <SectionTitle>Automation Stack</SectionTitle>
      <p>
        Automation should remove handoffs that slow the team down while keeping human review in place for brand safety,
        school-sensitive content, and final approval.
      </p>
    </Card>

    <div className="grid three">
      {[
        ["Google Forms", "Input", "Capture ideas and school moments"],
        ["Google Sheets", "Hub", "Track status, audience, pillar, and resources"],
        ["AI Drafting", "Intelligence", "Generate hooks, scripts, and school-use notes"],
        ["Google Drive", "Storage", "Keep scripts, brand assets, and handoff docs"],
        ["Make.com", "Automation", "Move ideas through repeatable workflow steps"],
        ["Analytics Tracker", "Learning Loop", "Feed results back into future content"],
      ].map(([tool, layer, role]) => (
        <Card key={tool} className="tight">
          <Pill color={layer === "Automation" ? C.warning : C.primary}>{layer}</Pill>
          <h4>{tool}</h4>
          <p>{role}</p>
        </Card>
      ))}
    </div>

    <Card>
      <Label>Automation Scenarios</Label>
      <div className="scenario-list">
        {automationScenarios.map(([title, desc, trigger, output], index) => (
          <div className="scenario" key={title}>
            <StepBadge n={index + 1} color={C.warning} />
            <div>
              <strong>{title}</strong>
              <span>{desc}</span>
            </div>
            <aside>
              <small>Trigger</small>
              <b>{trigger}</b>
              <small>Output</small>
              <b>{output}</b>
            </aside>
          </div>
        ))}
      </div>
    </Card>

    <Card className="table-card">
      <Label>Minimum Viable Automation vs Later Automation</Label>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Instruction</th>
            </tr>
          </thead>
          <tbody>
            {automationMvp.map(([tier, instruction]) => (
              <tr key={tier}>
                <td>{tier}</td>
                <td>{instruction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>

    <div className="grid two">
      {automationDeliverables.map((item) => (
        <Card key={item.name} className="tight">
          <Pill color={C.warning}>{item.name}</Pill>
          <p>{item.direction}</p>
          <div className="proof-line">
            <strong>Acceptance proof</strong>
            <span>{item.proof}</span>
          </div>
        </Card>
      ))}
    </div>

    <Card className="table-card">
      <Label>Automation Field Mapping Rules</Label>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Required Direction</th>
            </tr>
          </thead>
          <tbody>
            {automationFields.map(([category, direction]) => (
              <tr key={category}>
                <td>{category}</td>
                <td>{direction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  </div>
);

const WorkflowTab = () => (
  <div className="stack">
    <Card className="intro" style={{ borderLeftColor: C.success }}>
      <SectionTitle>Review, Approval, and Handoff Workflow</SectionTitle>
      <p>
        The workflow protects the IMOL voice while making the system easy to operate after handoff. Each script must pass
        content, platform, school-use, and brand-safety checks before production.
      </p>
    </Card>

    <div className="grid two">
      {workflowRoles.map((role) => (
        <Card key={role.role} style={{ borderTop: `3px solid ${role.color}` }}>
          <h4>{role.role}</h4>
          <ul className="clean-list">
            {role.tasks.map((task) => (
              <CheckItem key={task}>{task}</CheckItem>
            ))}
          </ul>
        </Card>
      ))}
    </div>

    <div className="grid two">
      {qaGroups.map(([group, items]) => (
        <Card key={group}>
          <Label>{group}</Label>
          <ul className="clean-list">
            {items.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </div>
);

const AnalyticsTab = () => (
  <div className="stack">
    <Card className="intro" style={{ borderLeftColor: C.cta }}>
      <SectionTitle>Analytics and Optimization Loop</SectionTitle>
      <p>
        The system improves when social results and offline feedback are reviewed together. A strong post can become a
        school talking point, and a school conversation can become the next content campaign.
      </p>
    </Card>

    <Card className="table-card">
      <Label>Measurement Map</Label>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Channel</th>
              <th>Primary Signal</th>
              <th>Secondary Signals</th>
              <th>What It Teaches</th>
            </tr>
          </thead>
          <tbody>
            {analyticsRows.map(([channel, primary, secondary, teaches]) => (
              <tr key={channel}>
                <td>{channel}</td>
                <td>{primary}</td>
                <td>{secondary}</td>
                <td>{teaches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>

    <Card>
      <Label>Weekly Optimization Routine</Label>
      <ul className="clean-list two-col">
        {optimizationLoop.map((item) => (
          <CheckItem key={item}>{item}</CheckItem>
        ))}
      </ul>
    </Card>
  </div>
);

const RoadmapTab = () => {
  const [activePhase, setActivePhase] = useState(phases[0].id);
  const [checked, setChecked] = useState({});
  const selected = phases.find((phase) => phase.id === activePhase) || phases[0];
  const completedCount = phaseChecklist.filter((item) => checked[item.id]).length;

  const toggle = (id) => {
    setChecked((current) => ({ ...current, [id]: !current[id] }));
  };

  return (
    <div className="stack">
      <Card className="intro" style={{ borderLeftColor: C.primary }}>
        <SectionTitle>6-Week Implementation Guide</SectionTitle>
        <p>
          This roadmap guides the team through a realistic phased build. Each phase lists the inputs, actions,
          deliverables, acceptance checks, and completion items required before moving forward.
        </p>
      </Card>

      <div className="phase-shell">
        <aside className="phase-nav">
          {phases.map((phase, index) => (
            <button
              key={phase.id}
              type="button"
              onClick={() => setActivePhase(phase.id)}
              className={phase.id === activePhase ? "active" : ""}
              style={{ borderColor: phase.id === activePhase ? phase.color : C.border }}
            >
              <StepBadge n={index + 1} color={phase.color} />
              <span>
                <small>{phase.label}</small>
                <strong>{phase.title}</strong>
              </span>
            </button>
          ))}
          <div className="progress-card">
            <Label>Deliverable Progress</Label>
            <strong>
              {completedCount} / {phaseChecklist.length}
            </strong>
            <span>Items checked in this session</span>
          </div>
        </aside>

        <Card className="phase-detail">
          <div className="phase-title-row">
            <div>
              <Pill color={selected.color}>{selected.label}</Pill>
              <h3>{selected.title}</h3>
            </div>
          </div>

          <div className="produces" style={{ borderColor: `${selected.color}40`, background: `${selected.color}10` }}>
            <Label>What This Phase Produces</Label>
            <p>{selected.produces}</p>
          </div>

          <div className="grid two">
            <RoadmapList title="Required Inputs" items={selected.inputs} />
            <RoadmapList title="Build Actions" items={selected.actions} />
            <RoadmapList title="Deliverables" items={selected.deliverables} checkable checked={checked} toggle={toggle} phaseId={selected.id} />
            <RoadmapList title="Acceptance Checks" items={selected.acceptance} />
          </div>
        </Card>
      </div>

      <Card>
        <Label>Subagent Build Direction</Label>
        <div className="workstream-grid">
          {implementationWorkstreams.map((stream) => (
            <div className="workstream" key={stream.owner}>
              <h4>{stream.owner}</h4>
              <p>{stream.scope}</p>
              <dl>
                <dt>Deliverables</dt>
                <dd>{stream.deliverables}</dd>
                <dt>Acceptance</dt>
                <dd>{stream.acceptance}</dd>
              </dl>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

const RoadmapList = ({ title, items, checkable = false, checked = {}, toggle, phaseId }) => (
  <div>
    <Label>{title}</Label>
    <ul className="clean-list">
      {items.map((item) => {
        const id = `${phaseId}-${item}`;
        if (!checkable) {
          return <CheckItem key={item}>{item}</CheckItem>;
        }

        return (
          <li className="check-row" key={item}>
            <button
              type="button"
              aria-label={checked[id] ? `Mark ${item} incomplete` : `Mark ${item} complete`}
              onClick={() => toggle(id)}
              className={checked[id] ? "checked" : ""}
            >
              {checked[id] ? icons.check : null}
            </button>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  </div>
);

const SkillsTab = () => {
  const [search, setSearch] = useState("");
  const [activePillar, setActivePillar] = useState("All");
  const [activeAudience, setActiveAudience] = useState("All");
  const [selectedSkillId, setSelectedSkillId] = useState(skillsData[0].id);
  const [copiedId, setCopiedId] = useState(null);

  const selectedSkill = skillsData.find((s) => s.id === selectedSkillId) || skillsData[0];

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredSkills = skillsData.filter((skill) => {
    const matchesSearch =
      skill.name.toLowerCase().includes(search.toLowerCase()) ||
      skill.category.toLowerCase().includes(search.toLowerCase()) ||
      skill.desc.toLowerCase().includes(search.toLowerCase()) ||
      skill.anchor.toLowerCase().includes(search.toLowerCase());

    const matchesPillar = activePillar === "All" || skill.pillar === activePillar;

    const matchesAudience =
      activeAudience === "All" || skill.audience.includes(activeAudience);

    return matchesSearch && matchesPillar && matchesAudience;
  });

  const getPillarColor = (pillar) => {
    if (pillar === "Health") return C.success;
    if (pillar === "Heart") return C.cta;
    return C.primary;
  };

  return (
    <div className="stack">
      <Card className="intro" style={{ borderLeftColor: C.primary }}>
        <SectionTitle>IMOL Skills & Brand Anchors Library</SectionTitle>
        <p>
          Explore, copy, and utilize key emotional literacy skills, behavioral anchors, and hustle frameworks.
          This library feeds the AI Drafter approved brand language and helps review content against school-safe criteria.
        </p>
      </Card>

      <div className="filter-controls">
        <div className="search-box-wrap">
          <svg className="search-icon" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search skills, anchors, categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="clear-search" onClick={() => setSearch("")} type="button">
              {icons.close}
            </button>
          )}
        </div>

        <div className="filters-row">
          <div className="filter-group">
            <small className="filter-label">3H Pillar</small>
            <div className="filter-pills">
              {["All", "Health", "Heart", "Hustle"].map((pill) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActivePillar(pill)}
                  className={`filter-pill ${activePillar === pill ? "active" : ""}`}
                  style={{
                    borderColor: activePillar === pill ? getPillarColor(pill) : C.border,
                    background: activePillar === pill ? `${getPillarColor(pill)}12` : "transparent",
                    color: activePillar === pill ? getPillarColor(pill) : C.muted,
                  }}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <small className="filter-label">Target Audience</small>
            <div className="filter-pills">
              {["All", "Students", "Parents", "Teachers"].map((aud) => (
                <button
                  key={aud}
                  type="button"
                  onClick={() => setActiveAudience(aud)}
                  className={`filter-pill ${activeAudience === aud ? "active" : ""}`}
                  style={{
                    borderColor: activeAudience === aud ? C.primary : C.border,
                    background: activeAudience === aud ? `${C.primary}12` : "transparent",
                    color: activeAudience === aud ? C.primary : C.muted,
                  }}
                >
                  {aud}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="phase-shell">
        <div className="skills-grid-col">
          {filteredSkills.length === 0 ? (
            <div className="empty-state">
              <strong>No Skills Found</strong>
              <span>Adjust your filters or try a different search term.</span>
            </div>
          ) : (
            <div className="skills-cards-list">
              {filteredSkills.map((skill) => {
                const pColor = getPillarColor(skill.pillar);
                const isSelected = skill.id === selectedSkillId;
                return (
                  <button
                    key={skill.id}
                    type="button"
                    onClick={() => setSelectedSkillId(skill.id)}
                    className={`skill-card-btn ${isSelected ? "selected" : ""}`}
                    style={{
                      borderColor: isSelected ? pColor : C.border,
                      boxShadow: isSelected ? `0 10px 24px ${pColor}12` : "none",
                    }}
                  >
                    <div className="skill-card-header">
                      <Pill color={pColor}>{skill.pillar}</Pill>
                      <span className="skill-cat">{skill.category}</span>
                    </div>
                    <h4>{skill.name}</h4>
                    <p className="skill-desc-preview">{skill.desc}</p>
                    <div className="skill-card-footer">
                      <small>Anchor: <b>{skill.anchor}</b></small>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <Card className="skill-inspector" style={{ borderTop: `4px solid ${getPillarColor(selectedSkill.pillar)}` }}>
          <div className="inspector-head">
            <div>
              <Pill color={getPillarColor(selectedSkill.pillar)}>{selectedSkill.pillar}</Pill>
              <span className="inspector-cat">{selectedSkill.category}</span>
              <h3>{selectedSkill.name}</h3>
            </div>
          </div>

          <div className="inspector-body">
            <div className="inspector-section">
              <Label>Description</Label>
              <p className="inspector-desc">{selectedSkill.desc}</p>
            </div>

            <div className="inspector-split">
              <div>
                <Label>Primary Anchor</Label>
                <div className="info-badge">{selectedSkill.anchor}</div>
              </div>
              <div>
                <Label>School-Use Asset</Label>
                <div className="info-badge success-badge">{selectedSkill.schoolAsset}</div>
              </div>
            </div>

            <div className="inspector-section copyable-block">
              <div className="section-header-row">
                <Label>Approved Brand Language</Label>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(selectedSkill.brandCopy, "brand-copy")}
                >
                  {copiedId === "brand-copy" ? "Copied!" : "Copy Language"}
                </button>
              </div>
              <blockquote className="brand-quote">
                "{selectedSkill.brandCopy}"
              </blockquote>
            </div>

            <div className="inspector-section">
              <Label>Social Platform Script Hooks</Label>
              <div className="hooks-stack">
                {selectedSkill.hooks.map((hook, index) => {
                  const hookKey = `hook-${index}`;
                  return (
                    <div className="inspector-hook-row" key={hook.type}>
                      <div className="hook-type-badge" style={{ background: `${getPillarColor(selectedSkill.pillar)}15`, color: getPillarColor(selectedSkill.pillar) }}>
                        {hook.type}
                      </div>
                      <p className="hook-text">{hook.text}</p>
                      <button
                        type="button"
                        className="copy-icon-btn"
                        aria-label="Copy hook text"
                        onClick={() => handleCopy(hook.text, hookKey)}
                      >
                        {copiedId === hookKey ? icons.check : (
                          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="inspector-section sensitivity-alert">
              <Label style={{ color: C.warning }}>AI Drafting Guardrail</Label>
              <div className="guardrail-content">
                <span className="warning-icon">⚠️</span>
                <span>{selectedSkill.avoidFlag}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const TABS = [
  { id: "prd", label: "PRD", icon: icons.roadmap, component: PRDTab },
  { id: "overview", label: "Overview", icon: icons.hub, component: OverviewTab },
  { id: "hub", label: "Intel Hub", icon: icons.hub, component: HubTab },
  { id: "skills", label: "Skills Library", icon: icons.skills, component: SkillsTab },
  { id: "script", label: "AI Drafter", icon: icons.script, component: ScriptTab },
  { id: "platform", label: "Channels", icon: icons.platform, component: PlatformTab },
  { id: "automation", label: "Automation", icon: icons.automation, component: AutomationTab },
  { id: "workflow", label: "Workflow", icon: icons.workflow, component: WorkflowTab },
  { id: "analytics", label: "Analytics", icon: icons.analytics, component: AnalyticsTab },
  { id: "roadmap", label: "Roadmap", icon: icons.roadmap, component: RoadmapTab },
];

export default function App() {
  const [active, setActive] = useState("prd");
  const ActiveComponent = TABS.find((tab) => tab.id === active)?.component || PRDTab;

  return (
    <main className="app-shell">
      <link
        href="https://fonts.googleapis.com/css2?family=Newsreader:wght@400;600;700&family=Roboto:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{styles}</style>

      <header className="topbar">
        <div>
          <div className="brand-row">
            <span>#IMOL</span>
            <small>In My Own Lane Continuum</small>
          </div>
          <h1>Content and School Initiative System</h1>
        </div>
        <div className="version-block">
          <Pill color={C.success}>PRD + Build Guide</Pill>
          <small>Social, school, parent, teacher, and community workflow</small>
        </div>
      </header>

      <nav className="tabs" aria-label="IMOL content system sections">
        {TABS.map(({ id, label, icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              className={isActive ? "active" : ""}
              aria-current={isActive ? "page" : undefined}
            >
              <span>{icon}</span>
              {label}
            </button>
          );
        })}
      </nav>

      <section className="content">
        <ActiveComponent />
      </section>
    </main>
  );
}

const styles = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${C.bg};
  }

  .app-shell {
    min-height: 100vh;
    background:
      linear-gradient(180deg, #F8FAFC 0%, #EEF6FF 48%, #F8FAFC 100%);
    color: ${C.text};
    font-family: "Roboto", Arial, sans-serif;
  }

  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 18px 28px;
    background: ${C.ink};
    border-bottom: 3px solid ${C.primary};
  }

  .brand-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 6px;
  }

  .brand-row span {
    display: inline-flex;
    align-items: center;
    min-height: 26px;
    padding: 4px 11px;
    border-radius: 6px;
    background: ${C.cta};
    color: white;
    font-size: 13px;
    font-weight: 800;
  }

  .brand-row small,
  .version-block small {
    color: #94A3B8;
    font-size: 12px;
    line-height: 1.4;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    color: ${C.text};
    font-family: "Newsreader", Georgia, serif;
    letter-spacing: 0;
  }

  .topbar h1 {
    color: #F8FAFC;
    font-size: 22px;
    line-height: 1.15;
  }

  .version-block {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
    text-align: right;
  }

  .tabs {
    display: flex;
    gap: 2px;
    overflow-x: auto;
    padding: 0 18px;
    background: ${C.white};
    border-bottom: 1px solid ${C.border};
  }

  .tabs button {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-height: 48px;
    padding: 0 14px;
    border: 0;
    border-bottom: 3px solid transparent;
    background: transparent;
    color: ${C.muted};
    cursor: pointer;
    font: 500 13px/1 "Roboto", Arial, sans-serif;
    white-space: nowrap;
  }

  .tabs button.active {
    border-bottom-color: ${C.primary};
    color: ${C.primary};
  }

  .tabs svg {
    flex: 0 0 auto;
  }

  .content {
    width: min(1120px, 100%);
    margin: 0 auto;
    padding: 26px 24px 64px;
  }

  .stack {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 280px;
    gap: 24px;
    align-items: stretch;
    padding: 30px;
    border: 1px solid #BFDBFE;
    border-radius: 8px;
    background:
      linear-gradient(135deg, rgba(37, 99, 235, 0.10), rgba(14, 165, 233, 0.14)),
      ${C.white};
  }

  .hero h2 {
    margin-top: 12px;
    font-size: 34px;
    line-height: 1.02;
  }

  .hero p,
  .card p,
  .intro p,
  .produces p {
    margin: 8px 0 0;
    color: ${C.muted};
    font-size: 14px;
    line-height: 1.65;
  }

  .hero-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 160px;
    padding: 18px;
    border: 1px solid ${C.border};
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.75);
  }

  .hero-panel strong {
    color: ${C.primary};
    font-family: "Newsreader", Georgia, serif;
    font-size: 24px;
    line-height: 1.1;
  }

  .hero-panel span {
    margin-top: 8px;
    color: ${C.muted};
    font-size: 13px;
    line-height: 1.5;
  }

  .grid {
    display: grid;
    gap: 14px;
  }

  .grid.two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .grid.three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .card {
    min-width: 0;
    padding: 20px;
    border: 1px solid ${C.border};
    border-radius: 8px;
    background: ${C.white};
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
  }

  .card.tight {
    padding: 16px;
  }

  .card h4 {
    margin: 8px 0 4px;
    font-size: 19px;
  }

  .intro {
    border-left: 4px solid ${C.primary};
  }

  .section-title {
    font-size: 22px;
    line-height: 1.15;
  }

  .label {
    margin: 0 0 10px;
    color: ${C.muted};
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    line-height: 1.35;
    text-transform: uppercase;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    min-height: 24px;
    padding: 3px 10px;
    border: 1px solid transparent;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 800;
    line-height: 1.2;
    white-space: nowrap;
  }

  .clean-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .clean-list.two-col {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 18px;
  }

  .check-item,
  .check-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    color: ${C.text};
    font-size: 13.5px;
    line-height: 1.45;
  }

  .check-icon {
    display: inline-flex;
    flex: 0 0 auto;
    margin-top: 2px;
    color: ${C.success};
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .metric {
    min-height: 88px;
    padding: 14px;
    border: 1px solid ${C.border};
    border-radius: 8px;
    background: ${C.bg};
  }

  .metric strong {
    display: block;
    color: ${C.primary};
    font-family: "Newsreader", Georgia, serif;
    font-size: 29px;
    line-height: 1;
  }

  .metric span {
    display: block;
    margin-top: 6px;
    color: ${C.muted};
    font-size: 12px;
    line-height: 1.35;
  }

  .accent {
    border-color: #BFDBFE;
    background: ${C.soft};
  }

  .table-card {
    overflow: hidden;
  }

  .table-wrap {
    overflow-x: auto;
    border: 1px solid ${C.border};
    border-radius: 8px;
  }

  table {
    width: 100%;
    min-width: 720px;
    border-collapse: collapse;
    font-size: 12.5px;
  }

  th {
    padding: 11px 14px;
    background: ${C.ink};
    color: white;
    text-align: left;
    font-weight: 800;
  }

  td {
    padding: 11px 14px;
    border-bottom: 1px solid ${C.border};
    color: ${C.muted};
    line-height: 1.45;
    vertical-align: top;
  }

  td:first-child {
    color: ${C.text};
    font-weight: 800;
  }

  tr:last-child td {
    border-bottom: 0;
  }

  .mini-row {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    padding: 12px 0;
    border-bottom: 1px solid ${C.border};
  }

  .mini-row:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  .mini-row strong,
  .scenario strong {
    display: block;
    color: ${C.text};
    font-size: 14px;
  }

  .mini-row span,
  .scenario span {
    display: block;
    margin-top: 3px;
    color: ${C.muted};
    font-size: 12.5px;
    line-height: 1.45;
  }

  .step-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    color: white;
    font-size: 13px;
    font-weight: 800;
  }

  .script-steps {
    display: flex;
    flex-direction: column;
    border: 1px solid ${C.border};
    border-radius: 8px;
    overflow: hidden;
  }

  .script-step {
    display: grid;
    grid-template-columns: 8px 76px minmax(0, 1fr) 128px;
    align-items: center;
    gap: 12px;
    min-height: 68px;
    border-bottom: 1px solid ${C.border};
    background: white;
  }

  .script-step:last-child {
    border-bottom: 0;
  }

  .script-bar {
    align-self: stretch;
  }

  .script-step strong {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .script-step span,
  .script-step small {
    color: ${C.muted};
    font-size: 12.5px;
    line-height: 1.4;
  }

  .script-step small {
    padding-right: 12px;
    text-align: right;
  }

  .card-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }

  .card-head h4 {
    margin: 0;
  }

  .split {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    margin-top: 16px;
  }

  .scenario-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .scenario {
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr) 160px;
    gap: 12px;
    align-items: flex-start;
    padding: 14px;
    border: 1px solid ${C.border};
    border-radius: 8px;
    background: ${C.bg};
  }

  .scenario aside {
    display: grid;
    gap: 2px;
    justify-items: end;
    text-align: right;
  }

  .scenario aside small {
    color: ${C.muted};
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .scenario aside b {
    margin-bottom: 6px;
    color: ${C.text};
    font-size: 11.5px;
  }

  .proof-line {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid ${C.border};
  }

  .proof-line strong {
    display: block;
    color: ${C.text};
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.06em;
    line-height: 1.3;
    text-transform: uppercase;
  }

  .proof-line span {
    display: block;
    margin-top: 4px;
    color: ${C.muted};
    font-size: 12.5px;
    line-height: 1.45;
  }

  .workstream-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .workstream {
    min-width: 0;
    padding: 16px;
    border: 1px solid ${C.border};
    border-radius: 8px;
    background: ${C.bg};
  }

  .workstream h4 {
    margin: 0 0 6px;
    font-size: 17px;
  }

  .workstream dl {
    margin: 14px 0 0;
  }

  .workstream dt {
    margin-top: 10px;
    color: ${C.text};
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .workstream dd {
    margin: 4px 0 0;
    color: ${C.muted};
    font-size: 12.5px;
    line-height: 1.45;
  }

  .phase-shell {
    display: grid;
    grid-template-columns: 290px minmax(0, 1fr);
    gap: 18px;
    align-items: start;
  }

  .phase-nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .phase-nav button {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    padding: 13px;
    border: 1px solid ${C.border};
    border-radius: 8px;
    background: white;
    color: ${C.text};
    cursor: pointer;
    text-align: left;
  }

  .phase-nav button.active {
    box-shadow: 0 10px 24px rgba(37, 99, 235, 0.12);
  }

  .phase-nav small {
    display: block;
    color: ${C.muted};
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .phase-nav strong {
    display: block;
    margin-top: 3px;
    color: ${C.text};
    font-size: 13px;
    line-height: 1.25;
  }

  .progress-card {
    padding: 16px;
    border: 1px solid #BFDBFE;
    border-radius: 8px;
    background: ${C.soft};
  }

  .progress-card strong {
    display: block;
    color: ${C.primary};
    font-family: "Newsreader", Georgia, serif;
    font-size: 30px;
    line-height: 1;
  }

  .progress-card span {
    display: block;
    margin-top: 5px;
    color: ${C.muted};
    font-size: 12px;
  }

  .phase-detail h3 {
    margin-top: 8px;
    font-size: 26px;
  }

  .produces {
    margin: 16px 0 18px;
    padding: 16px;
    border: 1px solid;
    border-radius: 8px;
  }

  .check-row button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 19px;
    height: 19px;
    margin-top: 0;
    border: 1px solid ${C.border};
    border-radius: 5px;
    background: white;
    color: white;
    cursor: pointer;
  }

  .check-row button.checked {
    border-color: ${C.success};
    background: ${C.success};
  }

  @media (max-width: 860px) {
    .topbar,
    .hero,
    .grid.two,
    .grid.three,
    .split,
    .workstream-grid,
    .phase-shell {
      grid-template-columns: 1fr;
    }

    .topbar {
      display: grid;
      align-items: start;
    }

    .version-block {
      align-items: flex-start;
      text-align: left;
    }

    .hero {
      padding: 22px;
    }

    .hero h2 {
      font-size: 28px;
    }

    .clean-list.two-col {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 620px) {
    .content {
      padding: 18px 14px 44px;
    }

    .topbar {
      padding: 16px;
    }

    .topbar h1 {
      font-size: 19px;
    }

    .tabs {
      padding: 0 8px;
    }

    .tabs button {
      min-height: 44px;
      padding: 0 10px;
      font-size: 12px;
    }

    .card,
    .hero {
      border-radius: 8px;
    }

    .script-step {
      grid-template-columns: 6px minmax(0, 1fr);
      gap: 8px;
      padding-right: 10px;
    }

    .script-step strong,
    .script-step span,
    .script-step small {
      grid-column: 2;
      text-align: left;
    }

    .script-bar {
      grid-row: 1 / span 3;
    }

    .scenario {
      grid-template-columns: 34px minmax(0, 1fr);
    }

    .scenario aside {
      grid-column: 2;
      justify-items: start;
      text-align: left;
    }
  }

  /* Skills Tab Custom Premium Styles */
  .filter-controls {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
    border: 1px solid ${C.border};
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);
  }

  .search-box-wrap {
    position: relative;
    width: 100%;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    color: ${C.muted};
    pointer-events: none;
  }

  .search-input {
    width: 100%;
    min-height: 46px;
    padding: 10px 18px 10px 44px;
    border: 1.5px solid ${C.border};
    border-radius: 8px;
    background: ${C.white};
    color: ${C.text};
    font-size: 14.5px;
    transition: all 0.25s ease;
  }

  .search-input:focus {
    outline: none;
    border-color: ${C.primary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }

  .clear-search {
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 0;
    border: 0;
    background: transparent;
    color: ${C.muted};
    cursor: pointer;
  }

  .filters-row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .filter-label {
    color: ${C.muted};
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .filter-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .filter-pill {
    padding: 6px 14px;
    border: 1px solid;
    border-radius: 6px;
    font-size: 12.5px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .filter-pill:hover {
    transform: translateY(-1px);
  }

  .skills-grid-col {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .skills-cards-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .skill-card-btn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 16px;
    border: 1.5px solid;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.85);
    cursor: pointer;
    text-align: left;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .skill-card-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(15, 23, 42, 0.06);
    background: ${C.white};
  }

  .skill-card-btn.selected {
    background: ${C.white};
  }

  .skill-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8px;
  }

  .skill-cat {
    color: ${C.muted};
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .skill-card-btn h4 {
    margin: 4px 0 6px;
    font-size: 17px;
    color: ${C.text};
  }

  .skill-desc-preview {
    margin: 0;
    color: ${C.muted};
    font-size: 12.5px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .skill-card-footer {
    width: 100%;
    margin-top: 12px;
    padding-top: 10px;
    border-top: 1.5px dashed ${C.border};
    color: ${C.muted};
    font-size: 11.5px;
  }

  .skill-inspector {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: ${C.white};
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
  }

  .inspector-head h3 {
    margin-top: 8px;
    font-size: 24px;
    color: ${C.text};
  }

  .inspector-cat {
    display: inline-block;
    margin-left: 10px;
    color: ${C.muted};
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .inspector-body {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .inspector-section {
    display: flex;
    flex-direction: column;
  }

  .inspector-desc {
    margin: 0;
    font-size: 14px;
    line-height: 1.6;
    color: ${C.text};
  }

  .inspector-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .info-badge {
    padding: 10px 14px;
    border: 1px solid ${C.border};
    border-radius: 6px;
    background: ${C.bg};
    color: ${C.text};
    font-size: 13px;
    font-weight: 600;
  }

  .info-badge.success-badge {
    border-color: rgba(16, 185, 129, 0.2);
    background: rgba(16, 185, 129, 0.06);
    color: ${C.success};
  }

  .section-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .section-header-row .label {
    margin-bottom: 0;
  }

  .copy-btn {
    padding: 5px 12px;
    border: 1px solid ${C.primary};
    border-radius: 6px;
    background: transparent;
    color: ${C.primary};
    font-size: 11.5px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
  }

  .copy-btn:hover {
    background: ${C.primary};
    color: white;
  }

  .brand-quote {
    margin: 0;
    padding: 16px;
    border-left: 4px solid ${C.primary};
    border-radius: 0 8px 8px 0;
    background: rgba(37, 99, 235, 0.03);
    color: ${C.text};
    font-family: "Newsreader", Georgia, serif;
    font-size: 15.5px;
    font-style: italic;
    line-height: 1.6;
  }

  .hooks-stack {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .inspector-hook-row {
    display: grid;
    grid-template-columns: 88px minmax(0, 1fr) 28px;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border: 1.5px solid ${C.border};
    border-radius: 8px;
    background: ${C.bg};
    transition: border-color 0.2s;
  }

  .inspector-hook-row:hover {
    border-color: ${C.muted};
  }

  .hook-type-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 10.5px;
    font-weight: 800;
    text-transform: uppercase;
  }

  .hook-text {
    margin: 0;
    font-size: 12.5px;
    line-height: 1.45;
    color: ${C.text};
  }

  .copy-icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    padding: 0;
    border: 0;
    background: transparent;
    color: ${C.muted};
    cursor: pointer;
    transition: color 0.2s;
  }

  .copy-icon-btn:hover {
    color: ${C.primary};
  }

  .sensitivity-alert {
    padding: 12px 16px;
    border: 1.5px solid rgba(245, 158, 11, 0.25);
    border-radius: 8px;
    background: rgba(245, 158, 11, 0.05);
  }

  .guardrail-content {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: ${C.text};
    font-size: 12.5px;
    line-height: 1.5;
  }

  .warning-icon {
    font-size: 16px;
  }

  .empty-state {
    padding: 40px;
    text-align: center;
    border: 1.5px dashed ${C.border};
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.4);
  }

  .empty-state strong {
    display: block;
    font-size: 15px;
    color: ${C.text};
  }

  .empty-state span {
    display: block;
    margin-top: 6px;
    font-size: 12.5px;
    color: ${C.muted};
  }
`;
