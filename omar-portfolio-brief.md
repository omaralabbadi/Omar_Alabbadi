# Omar Alabbadi — Portfolio Website Brief
> You are a **Senior Creative Frontend Engineer**. Build a world-class, Awwwards-worthy portfolio website for an Event Coordinator & Artistic Project Manager. Every decision — layout, motion, typography, color — should reflect premium craftsmanship. No generic AI aesthetics. No cookie-cutter layouts. This should feel like it was designed by a top-tier creative studio.

---

## 🧠 Project Overview

**Client:** Omar Alabbadi  
**Role:** Event Coordinator & Project Manager (Artistic Works)  
**Location:** Jeddah, Saudi Arabia  
**Target Audience:** Entertainment companies, corporate clients, cultural institutions — primarily Gulf region  
**Goal:** A portfolio that builds instant trust, showcases real work, and drives client inquiries  
**Language:** English (Primary)

---

## 🎨 Brand Identity

### Visual Direction
- **Aesthetic:** Luxury Editorial — think high-end event agency meets cultural institution
- **Mood:** Confident, refined, dynamic — the feeling of walking into a world-class event
- **NOT:** Generic freelancer template, SaaS dashboard, developer portfolio

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Deep Navy** | `#0A1628` | Primary background, hero |
| **Gold** | `#C9A84C` | Primary accent, highlights, CTAs |
| **Warm Gold Light** | `#E8C97A` | Hover states, subtle glow |
| **Off White** | `#F5F0E8` | Text on dark, light sections bg |
| **Charcoal** | `#1E2A3A` | Card backgrounds, secondary sections |
| **Muted Gold** | `#8B7355` | Subtle borders, dividers |
| **Pure White** | `#FFFFFF` | Body text on dark |

### Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| **Display/Hero** | `Cormorant Garamond` | 300–700 | Elegant serif for headlines |
| **Subheadings** | `Montserrat` | 400–600 | Clean sans for structure |
| **Body** | `Lato` | 300–400 | Readable, professional |
| **Accent/Labels** | `Montserrat` | 700, uppercase, tracked | Section labels, tags |

> Import from Google Fonts

### Design Principles
- **Generous whitespace** — luxury feels spacious
- **Gold accents sparingly** — it should feel precious, not cheap
- **Cinematic imagery** — full-bleed visuals, dramatic lighting
- **Asymmetric layouts** — break the grid intentionally
- **Smooth motion** — everything should glide, not snap

---

## ⚙️ Tech Stack

```
Framework:     React 18 + Vite
Styling:       Tailwind CSS + Custom CSS Variables
Animation:     Framer Motion (page transitions, scroll reveals, hover states)
Scroll:        Lenis (smooth scrolling)
Icons:         Lucide React
Routing:       React Router DOM v6
Deployment:    Vercel
```

### Key Libraries
```bash
npm install framer-motion lenis lucide-react react-router-dom
```

### Performance Requirements
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Images: WebP format, lazy loaded
- Fonts: Preloaded

---

## 🏗️ Site Structure & Sections

### Navigation (Fixed Top)
```
Logo (OA monogram)    |    About  Projects  Services  Contact    |    [Let's Talk] CTA
```
- Transparent on hero, solid on scroll
- Smooth scroll to sections
- Mobile: hamburger menu

---

### Section 1: Hero

**Goal:** Immediate impact — visitor knows who Omar is in 3 seconds

**Layout:** Full viewport height, dark background
```
[Background: subtle animated gradient mesh — deep navy with gold particles/dust]

────────────────────────────────────────
                                         
   OMAR ALABBADI                         
   ─────────────────                     
   Event Coordinator                     
   & Project Manager                     
   (Artistic Works)                      
                                         
   Delivering Seamless Experiences       
   From Music Festivals to               
   Corporate Events                      
                                         
   [View My Work ↓]   [Let's Talk →]    
                                         
────────────────────────────────────────
```

**Motion:**
- Name animates in with staggered letter reveal
- Tagline fades in after 0.5s delay
- Subtle floating gold particles in background
- Scroll indicator pulses gently

---

### Section 2: About

**Goal:** Build trust, establish positioning, show the human behind the work

**Layout:** Two-column — Text left, Visual right

**Content:**
```
ABOUT
─────

Event & Project Management professional
with 4+ years of experience delivering
seamless, high-impact events across
entertainment, cultural, and corporate sectors.

I specialize in two worlds:

🎭 Artistic Project Management
Music festivals, live performances,
cultural programming, artist relations

🏢 Event Coordination
End-to-end logistics, venue operations,
technical production, stakeholder management

────────────────────────────────
Education:
Bachelor's Degree — Ports & Marine Transportation
King Abdulaziz University, 2018

Languages:
Arabic (Native)  ·  English (Professional)
────────────────────────────────

[Key Stats Row:]
4+          4           2
Years    Major       Sectors
Exp.    Projects   Covered
```

**Motion:** Stats count up on scroll into view

---

### Section 3: Services

**Goal:** Tell potential clients exactly what Omar offers

**Layout:** 3 cards in a row (or 2+1 on mobile)

**Cards:**

#### Card 1 — Artistic Project Management
```
Icon: 🎭 (or custom SVG stage/spotlight icon)
Title: Artistic Project Management
──────────────────────────────────
Music festivals · Live concerts
Cultural programming · Artist relations
Dubbing productions · Creative coordination
```

#### Card 2 — Event Coordination
```
Icon: 📋 (or calendar/clipboard icon)
Title: Event Coordination
──────────────────────────────────
End-to-end logistics · Venue operations
Technical production · Stage operations
Vendor management · Timeline control
```

#### Card 3 — Corporate Events
```
Icon: 🏢 (or building/briefcase icon)
Title: Corporate Events
──────────────────────────────────
Employee festivals · Brand activations
Stakeholder events · Public events
Client account management
```

**Design:** Cards have subtle gold border on hover, lift animation

---

### Section 4: Projects (Case Studies)

**Goal:** Showcase real work with depth — the heart of the portfolio

**Layout:** 
- Grid of 4 project cards (overview)
- Each card opens into a full Case Study page

---

#### Project Cards Grid:
```
[Tarfeeh — 2024]    [Al-Ittihad — 2023]
[Attalah — 2022]    [Sunbula — 2022]
```

Each card shows:
- Project name + client
- Year + category tag
- Cover image (event photo or cinematic stock)
- Short one-liner description
- Hover: gold overlay + "View Case Study →"

---

#### Case Study Page Structure (for each project):

```
──────────────────────────────────────
HERO
Project Name — Client Name
Year · Category · Location
[Cover Image — Full Width]
──────────────────────────────────────
OVERVIEW
Role: [Omar's role]
Duration: [dates]
Client: [company name]
──────────────────────────────────────
THE CHALLENGE
[What was the problem/brief?]
──────────────────────────────────────
THE EXECUTION
[How did Omar handle it?
Step by step, what happened?]
──────────────────────────────────────
THE RESULT
[What was the outcome?]
[Any metrics, feedback, impact]
──────────────────────────────────────
SKILLS USED
[Tag chips: Stage Operations, Vendor Coordination, etc.]
──────────────────────────────────────
[← Back to Projects]    [Next Project →]
──────────────────────────────────────
```

---

#### Case Study Data:

##### 1. Tarfeeh Fakieh Company — Stage Operations
```
Year: 2024 (Mar – May)
Category: Artistic / Live Performance
Role: Stage Operations Manager
Associated With: Mawsim Alnjoom for Music

Challenge:
Coordinating end-to-end stage operations and technical setup 
for a major live entertainment client with high production standards 
and tight operational timelines.

Execution:
Managed full coordination of all logistical and technical aspects 
of stage operations. Oversaw resource allocation, supervised delivery 
and setup of technical equipment (AV systems, lighting, sound), 
and ensured all operational timelines were met in accordance 
with the project plan.

Result:
Seamless execution of live performances with zero technical incidents. 
All timelines met. Client satisfied with operational delivery.

Skills: Stage Operations · Technical Production · Vendor Coordination · 
        Logistics Management · Resource Allocation · Audio/Visual Systems
```

##### 2. Al-Ittihad Club — "Ittihad City" Event
```
Year: 2023 (Jan – Apr)
Category: Corporate / Public Event
Role: Public Relations & Corporate Coordinator
Associated With: Mawsim Alnjoom for Music

Challenge:
Managing a high-profile public event for a major corporate client 
(Al-Ittihad Club), acting as the primary liaison between all 
stakeholders while ensuring consistent messaging and seamless delivery.

Execution:
Served as primary liaison and operational lead. Managed all logistical 
requirements from vendor coordination to on-site execution. 
Maintained consistent communications and expectations across 
all stakeholders — corporate client, suppliers, and internal teams.

Result:
Successful delivery of high-profile public event. 
Strong stakeholder relationships maintained throughout. 
Seamless coordination across all parties.

Skills: Corporate Event Management · Public Relations · 
        Stakeholder Management · Contract Management · 
        Team Leadership · Media Relations
```

##### 3. Attalah Happy Land Park — Eid al-Fitr Festival
```
Year: 2022 (Oct – Dec)
Category: Public Festival / Cultural Event
Role: Project Lead
Associated With: Mawsim Alnjoom for Music

Challenge:
Leading the complete planning and execution of a large-scale 
public festival during peak holiday season (Eid al-Fitr) 
at a major entertainment park, with high footfall expectations 
and complex logistics.

Execution:
Led full project lifecycle from initial concept and planning 
through to final execution and delivery. Responsible for 
entire supply chain and logistics workstream including 
resource forecasting, procurement scheduling, vendor management, 
and on-site operational deployment. Coordinated multiple 
stakeholders to ensure on-time delivery.

Result:
Successful large-scale public festival delivered during 
peak holiday season. All milestones achieved efficiently. 
Seamless operational flow maintained throughout.

Skills: Festival Management · Event Planning · Logistics Coordination · 
        Vendor Management · Stakeholder Coordination · 
        Entertainment Programming · Public Event Delivery
```

##### 4. Sunbula Company — Employees Festival
```
Year: 2022 (May – Aug)
Category: Corporate / Employee Engagement
Role: Project Lead & Client Account Manager
Associated With: Mawsim Alnjoom for Music

Challenge:
Managing a corporate client account from concept to completion 
for an employee engagement festival — delivering a meaningful 
internal experience that reflects the client's brand values.

Execution:
Directed end-to-end planning and execution. Fully responsible 
for venue setup, entertainment scheduling, catering coordination, 
team logistics, and on-site management. Coordinated with multiple 
vendors and internal teams to deliver within budget and timeline.

Result:
Successful employee engagement event delivered. 
Positive client feedback. On-brand experience that strengthened 
internal culture and employee satisfaction.

Skills: Corporate Events · Employee Engagement · Budget Control · 
        Operational Planning · Vendor Management · 
        Event Coordination · Client Account Management
```

---

### Section 5: Experience & Expertise (Timeline + Skills)

**Goal:** Show career journey + skills in one compelling visual section

**Layout:** Horizontal timeline on desktop, vertical on mobile

**Timeline:**
```
2017 ──────────────────── 2020 ──────────────────── 2024 ── Present
 |                          |                          |
Training                  START                    SENIOR LEVEL
IsI + Baas             Mawsim Alnjoom           Event PM & Coordinator
Port Economics         Music & Events           Artistic Works Expert
```

**Under the Timeline — Skills Clusters:**

```
[Event Management]
Event Planning · Event Coordination · Festival Management
Venue Operations · Technical Production · Stage Operations

[Artistic & Creative]
Music Festivals · Live Performances · Cultural Programming
Artist Relations · Concert Production · Entertainment Programming

[Project Leadership]
Project Management · Stakeholder Management · Budget Control
Contract Negotiation · Vendor Coordination · Team Leadership

[Client & Business]
Client Account Management · Lead Conversion · Client Retention
Revenue Growth · Upselling Strategies · Public Relations
```

**Section Name:** `Experience & Expertise`

---

### Section 6: Contact

**Goal:** Make it dead simple to reach Omar

**Layout:** Two column — Left: text/info, Right: form

**Content:**
```
LEFT SIDE:
"Let's Work Together"

Whether you're planning a large-scale festival,
a corporate event, or an artistic production —
I'm here to make it happen.

📧 Omar.3bb@gmail.com
📱 +966 599 951 899
💼 LinkedIn → [link]

RIGHT SIDE:
Simple form:
Name _______________
Email ______________
Message ____________
[Send Message →]
```

**Design:** Dark section (Deep Navy), gold accents on form focus states

---

## 📱 Responsive Breakpoints

```
Mobile:   < 768px   — Single column, vertical timeline
Tablet:   768–1024px — 2 columns, adjusted spacing
Desktop:  > 1024px  — Full layout as designed
```

---

## ✨ Animation Guidelines (Framer Motion)

```javascript
// Page load — staggered reveal
initial: { opacity: 0, y: 30 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.6, ease: "easeOut" }

// Scroll reveal (use whileInView)
initial: { opacity: 0, y: 40 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true, margin: "-100px" }
transition: { duration: 0.7, ease: "easeOut" }

// Card hover
whileHover: { y: -8, transition: { duration: 0.3 } }

// Gold underline on nav links
// CSS: transform scaleX(0) → scaleX(1) on hover

// Hero name — letter stagger
// Each letter: delay = index * 0.05s
```

---

## 📁 Recommended Folder Structure

```
omar-portfolio/
├── public/
│   ├── images/
│   │   ├── hero-bg.webp
│   │   ├── projects/
│   │   │   ├── tarfeeh.webp
│   │   │   ├── ittihad.webp
│   │   │   ├── attalah.webp
│   │   │   └── sunbula.webp
│   │   └── og-image.webp
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── CaseStudy.jsx
│   │   ├── Timeline.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── projects.js      ← All case study data here
│   ├── styles/
│   │   └── globals.css      ← CSS variables, base styles
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── tailwind.config.js
```

---

## 🎯 Key Design Decisions Summary

| Decision | Choice | Reason |
|----------|--------|--------|
| Stack | React + Vite | No need for SSR, fast build, simple deploy |
| Animation | Framer Motion | Smooth, professional, React-native |
| Scroll | Lenis | Buttery smooth scroll feel |
| Styling | Tailwind + CSS Vars | Speed + consistency |
| Theme | Dark (Navy) + Gold | Premium, luxury event industry feel |
| Typography | Cormorant + Montserrat | Editorial elegance |
| Deployment | Vercel | Free, fast, automatic CI/CD |

---

## 🚀 First Build Priority

Build in this order:
1. `globals.css` — CSS variables, base styles, fonts
2. `Navbar.jsx` — Fixed nav with scroll behavior
3. `Hero.jsx` — Full viewport with animation
4. `About.jsx` — Two column layout
5. `Services.jsx` — 3 cards
6. `Projects.jsx` — 4 cards grid
7. `CaseStudy.jsx` — Template for all 4 projects
8. `Timeline.jsx` — Horizontal experience timeline
9. `Contact.jsx` — Form + info
10. `Footer.jsx` — Simple, clean

---

*Brief prepared for: Omar Alabbadi Portfolio — Fahmify Studio*
