# IMOL Content and School Initiative System PRD

## Purpose
Build a working content and school initiative operating system for #IMOL, the In My Own Lane Continuum. The system must help the team capture ideas, convert them into IMOL-aligned scripts and school-use assets, route work through review, and feed social plus offline results back into future content.

## Product Outcomes
- One Intel Hub tracks social content, school initiatives, parent engagement, teacher resources, community programming, and published results.
- One AI Drafter turns approved ideas into hooks, scripts, captions, storyboards, school-use notes, sensitivity flags, and revision notes.
- One Automation workflow moves ideas from intake to drafting, approval, production, publishing, and weekly review.
- One handoff guide lets a new operator run the system without the builder present.

## Primary Users
- IMOL Lead: approves voice, priorities, sensitive claims, and school-safe language.
- Content System Operator: maintains the hub, runs AI drafts, checks QA, and updates workflow docs.
- Creator or Recorder: records approved scripts and provides delivery feedback.
- School or Community Reviewer: validates classroom usefulness, parent fit, and offline follow-up value.

## Intel Hub Requirements
The Intel Hub must be built in Google Sheets with a connected Google Form intake.

Required tabs:
- Intake Log: captures raw submissions from content ideas, school moments, parent questions, teacher needs, and community opportunities.
- Script Queue: stores approved ideas ready for AI drafting and review.
- School Initiatives: tracks outreach targets, classroom use cases, parent engagement plays, and community programming.
- Resource Library: stores approved language, IMOL assets, 3H Framework notes, AI-ja context, backpacks, binders, 0-10 scale references, and Teacher Resource Binder examples.
- Skills Library: captures youth life-skills, emotional regulation tools, consistency anchors, and approved copy for the operator to copy/paste into prompts or reviews.
- Published Tracker: tracks live content and offline outcomes.

Required proof:
- 10 sample intake rows.
- 5 school/community opportunity rows.
- Filters for audience, 3H pillar, use case, platform/channel, owner, and status.
- Every AI-ready idea has a source reference or approved visual/text anchor.

## AI Drafter Requirements
The AI Drafter must create a complete draft package for every approved idea.

Required output package:
- Idea summary.
- Metadata: audience, 3H pillar, channel, school use case, and CTA.
- Three hooks: contrarian, educational, story-based.
- Selected hook recommendation.
- Short-form script under 150 words.
- Caption or post copy.
- Storyboard notes.
- B-roll or visual anchor suggestions.
- School-use alignment note.
- Sensitivity flags.
- Revision notes.
- One repurpose angle for school, parent, or community follow-up.

Required guardrails:
- School-safe language only.
- No private student details.
- No unsupported health claims.
- No generic wellness content detached from IMOL.
- Exactly one CTA.
- Clear connection to Health, Heart, or Hustle.

Required proof:
- 10 AI draft packages.
- 5 approved scripts.
- 2 rejected-output examples showing what fails QA and why.

## Automation Requirements
Automation should use Make.com or an equivalent workflow tool. Human review gates must stay in place.

Minimum viable automation:
- Scenario 1: Google Form intake creates a structured hub row and alerts the operator.
- Scenario 2: Status change to Drafting sends the row into the AI Drafter and writes the draft package back to Script Queue.
- Scenario 3: Approved scripts create or update production tracker records with owner, due date, source references, and asset links.

Later automation:
- Published URL or offline outcome creates a weekly review item.
- Weekly report summarizes top content patterns, weak content patterns, and school/community follow-up needs.
- Reuse candidates are copied into the Resource Library or a future campaign queue.

Required proof:
- One test idea travels from intake to draft to approval to tracker.
- Failed or incomplete rows show owner alert, retry note, or manual review status.
- Human approval checkpoints are visible before publish or school-facing use.

## Orchestrated Build Plan
Subagent 1: Intel Hub Builder
- Scope: intake form, sheet tabs, field definitions, status system, and sample data.
- Deliverables: form field map, hub tab schema, school initiative tracker, resource library starter rows.
- Acceptance: 10 sample submissions become categorized hub rows.

Subagent 2: AI Drafter Builder
- Scope: prompt package, output format, QA rules, and sample scripts.
- Deliverables: system prompt, draft template, 10 test outputs, QA checklist, rejected-output examples.
- Acceptance: every output includes hooks, script, storyboard, school-use alignment, repurpose angle, and one CTA.

Subagent 3: Automation Builder
- Scope: workflow triggers, field mapping, storage links, alerts, and weekly review mechanics.
- Deliverables: scenario map, field mapping table, error handling rules, review reminder workflow.
- Acceptance: one test idea completes the intake-to-review path without losing context.

Subagent 4: Handoff and QA Reviewer
- Scope: validate the system, create training direction, and prepare the operating guide.
- Deliverables: operator checklist, training agenda, acceptance test script, handoff guide.
- Acceptance: a new operator can run the workflow using the guide.

## Six-Week Implementation Plan
Weeks 1-2: Foundation and Intel Hub
- Build the Google Form and Google Sheet.
- Load sample rows and resource references.
- Map school initiative and content use cases.
- Signoff evidence: sample rows, filters, status flow, resource references.

Weeks 3-4: AI Drafter and QA Workflow
- Build the prompt and output package.
- Create test scripts and rejected examples.
- Finalize QA, approval, and revision rules.
- Signoff evidence: 10 draft packages, 5 approved scripts, QA checklist.

Weeks 5-6: Automation, Publishing, Analytics, and Handoff
- Configure minimum viable automation.
- Create production tracker and weekly review process.
- Train the operator and deliver handoff docs.
- Signoff evidence: test idea path, automation map, training guide, live operating checklist.

## Definition of Done
- The Intel Hub, AI Drafter, Automation workflow, and Handoff Guide exist as usable artifacts.
- Required sample counts are complete.
- Every section has acceptance evidence.
- The team can operate the system after handoff.
