# #IMOL Intel Hub: Database Structure & Operational Architecture

Welcome to the **#IMOL Intel Hub**—the centralized engine and operational database for the *In My Own Lane* Content and School Initiative Operating System. 

The Intel Hub tracks social media content, classroom integrations, parent outreach, teacher tools, community opportunities, and publication outcomes. It ensures that every raw inspiration, school moment, or community question is captured, developed using the **3H Framework (Health, Heart, Hustle)**, and successfully executed online and offline.

---

## 1. System Overview & The 6-Tab Architecture

The Intel Hub is hosted on Google Sheets, connected directly to a Google Form intake, and automated via Make.com. It is structured into six core tabs:

```
                  ┌──────────────────────┐
                  │  Google Form Intake  │
                  └──────────┬───────────┘
                             │ (Automation via Make.com)
                             ▼
                  ┌──────────────────────┐
                  │    1. Intake Log     │
                  └──────┬────────────┬──┘
                         │            │
         (Approved Content Idea)      (Approved School Opportunity)
                         ▼            ▼
┌───────────────────────────┐      ┌───────────────────────────┐
│     2. Script Queue       │      │   3. School Initiatives   │
│  (Refers to tabs 4 & 5)   │      └──────────────┬────────────┘
└─────────────┬─────────────┘                     │
              │                                   │
              │ (Published Content)               │ (Offline Delivery & Metrics)
              ▼                                   ▼
┌──────────────────────────────────────────────────────────────┐
│                    6. Published Tracker                      │
│                (Social & Community Review)                   │
└──────────────────────────────────────────────────────────────┘
                             ▲
                             │ (Updates & Reference Logs)
┌────────────────────────────┴─────────────────────────────────┐
│     4. Resource Library    │       5. Skills Library         │
│  (Brand Assets & Prompts)  │   (Life Skills & Check-ins)     │
└────────────────────────────┴─────────────────────────────────┘
```

### The 6 Tabs Explained

1. **Intake Log**: The entry point for the entire ecosystem. Captures raw text, voice-to-text notes, teacher questions, school observations, and content inspirations.
2. **Script Queue**: The content engine. Houses approved ideas moving through AI drafting, human review, production preparation, and recording.
3. **School Initiatives**: The offline pipeline. Tracks targets, classroom use cases, parent communication scripts, and school outreach campaigns.
4. **Resource Library**: The system's memory. Holds approved language guidelines, logo assets, 3H Framework standards, and Teacher Resource Binder formats.
5. **Skills Library**: The academic and developmental foundation. Contains structured life-skills, somatic techniques, and emotional regulation checklists.
6. **Published Tracker**: The accountability layer. Records published URLs, analytics, and qualitative school/community feedback for weekly review.

---

## 2. Brand Anchors Integration Matrix

The Intel Hub is not a generic database; it is specifically customized to reinforce the core **#IMOL** brand anchors:

| Brand Anchor | Operational Definition in Intel Hub | Primary Tab Location | Actionable Use Case |
| :--- | :--- | :--- | :--- |
| **3H Framework** | Categorization of health (somatic/environment), heart (emotional intelligence/self-awareness), and hustle (consistency/skills). | All Tabs | Used to filter scripts, resources, and school programs to ensure balanced branding. |
| **0-10 Scale Check-in** | Somatic and focus rating system (0 = deep struggle, 10 = flow/regulation) to capture student emotional baselines. | Intake Log, Skills Library | Allows counselors, teachers, and students to log qualitative states and trigger content scripts. |
| **Backpacks & Binders** | "Backpacks" are the emotional/physical baggage youth carry; "Binders" are the organizational plans and consistency anchors. | Intake Log, School Initiatives | Used to target specific content or offline initiatives addressing heavy struggles (backpacks) or structural habits (binders). |
| **AI-ja Spaces** | Tech-enabled reflective journaling and digital sandboxes in schools where students utilize AI tools to process emotions. | School Initiatives, Resource Library | Tracks where AI-ja spaces are pilot-tested and holds optimized prompts in the Resource Library. |
| **Teacher Resource Binders**| Offline lesson plans, classroom prompts, parent messages, and physical trackers delivered to educational staff. | School Initiatives, Skills Library | Maps which published content gets converted into offline classroom modules and parent updates. |

---

## 3. Data Relationships & Flow

1. **Intake to Development**: A submission is made via Google Form. It lands on the `Intake Log` with a status of `New`.
2. **Evaluation Gate**: The **Content System Operator** evaluates submissions weekly.
   - If it is a creative content idea, status changes to `Approved for Script` $\rightarrow$ triggers a new row in the `Script Queue` carrying over the `Submission ID`.
   - If it is a school integration or local event, status changes to `Approved for School Initiative` $\rightarrow$ triggers a new row in the `School Initiatives` carrying over the `Submission ID`.
   - If it is a core copy update or master tip, it is moved to the `Resource Library` or `Skills Library`.
3. **Drafting & Review**:
   - Rows in `Script Queue` marked as `Drafting` go through the **AI Drafter** to receive hooks, scripts, captions, and school repurposing notes.
   - Once approved by the **IMOL Lead** and **School/Community Reviewer**, they are marked `Approved for Production` and recorded.
4. **Publishing & Review Loop**:
   - The creator records and publishes the asset.
   - The operator updates the `Published Tracker` with the live URL.
   - Every week, the team reviews the `Published Tracker` to analyze performance (views, comments) and notes classroom feedback.
   - Successful concepts are recycled into the `Resource Library` as active templates.

---

## 4. Intel Hub Files Directory

The complete implementation specifications and sample data sets are laid out in the following workspace files:

1. [database_schema.md](file:///Volumes/Donchalant%20/IMOL/IMOL%20Sys/Intel%20Hub/database_schema.md): Detailed layout of all 6 tabs, fields, data validation rules, and drop-down configuration arrays.
2. [intake_form_mapping.md](file:///Volumes/Donchalant%20/IMOL/IMOL%20Sys/Intel%20Hub/intake_form_mapping.md): Google Form question types, conditional logic mapping, and Make.com webhook JSON payloads.
3. [sample_submissions.md](file:///Volumes/Donchalant%20/IMOL/IMOL%20Sys/Intel%20Hub/sample_submissions.md): Exactly 10 high-fidelity, completely written sample rows representing realistic youth life-skills development, emotional regulation checks, and school moments.
4. [school_opportunities.md](file:///Volumes/Donchalant%20/IMOL/IMOL%20Sys/Intel%20Hub/school_opportunities.md): Exactly 5 deeply designed school/community partnership scenarios showing target audiences, multi-use cases, and offline action steps.

---

## 5. Setup & Operator Instructions

For a new Content System Operator or Hub Administrator, follow these steps to build and run this database:
1. **Google Sheets Setup**: Create a new spreadsheet. Initialize 6 tabs matching the names in `database_schema.md`. Use the tables to set up column headers exactly as listed.
2. **Data Validation**: Configure Drop-Down (Data Validation) rules for status, 3H pillars, audiences, and platforms using the approved arrays in `database_schema.md`.
3. **Form Integration**: Create a Google Form using the exact fields from `intake_form_mapping.md`. Connect it to the Google Sheet so submissions write directly to the `Intake Log`.
4. **Make.com Configuration**: Set up a webhook trigger listening to Form Submissions. Map the JSON payload to notify the Content System Operator via your team's communication channel (e.g., Slack or Discord).
5. **AI Prompt Seed**: Copy and paste the active prompts and rules from the `Resource Library` and `Skills Library` into the **AI Drafter** prompt settings to guarantee brand alignment.
