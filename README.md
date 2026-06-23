<div align="center">

# ✨ Plan A ✨

### Premium Event Planners Sri Lanka

**Every Great Event Starts with Plan A**

![Next.js](https://img.shields.io/badge/Next.js-16.2.9-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-Proprietary-blue?style=for-the-badge)

---

From weddings and corporate gatherings to birthdays and concerts, **Plan A** creates unforgettable experiences across Sri Lanka. This is the official static website showcasing our event planning services, portfolio, and consultation booking system.

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Design System](#-design-system)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Pages](#-pages)
- [Available Scripts](#-available-scripts)
- [Responsive Design](#-responsive-design)
- [Component Architecture](#-component-architecture)
- [Event Categories](#-event-categories)
- [Deployment](#-deployment)
- [SEO and Metadata](#-seo-and-metadata)
- [License](#-license)

---

## ⭐ Overview

**Plan A** is a premium event planning agency based in Sri Lanka, specializing in weddings, corporate gatherings, birthdays, and large-scale concerts. This website serves as the digital presence for the agency, featuring:

- A cinematic hero section with a full-screen background image
- Detailed service breakdowns with deliverable blueprints
- A filterable portfolio of past events across Sri Lanka
- A consultation booking form for prospective clients
- Team profiles and company philosophy showcase
- Newsletter subscription and social media integration

The site is built as a **static Next.js application** with the App Router, leveraging React Server Components where applicable and client-side interactivity for forms, navigation, and hover effects.

---

## 🎯 Features

| Feature | Description |
|---------|-------------|
| 🏡 **Landing Page** | Full-screen hero with gradient overlays, core pillars section, service cards, portfolio showcase, and consultation form |
| 💼 **Services Page** | Detailed breakdowns of all four event categories with deliverable blueprints, workflow steps, and FAQ accordion |
| 📷 **Portfolio Page** | Filterable grid of past events (weddings, corporate, birthdays, concerts) with category-based hover effects and metric displays |
| 👥 **About Page** | Company philosophy ("Interconnected Loops"), core values, and team member profiles |
| 📧 **Contact Page** | Full consultation form with event parameters, Colombo office details, and booking status indicator |
| 📱 **Responsive Header** | Fixed glassmorphism header with desktop navigation and mobile slide-out drawer |
| 📰 **Footer** | Four-column layout with brand info, navigation links, service links, and newsletter subscription |
| 🧩 **Glassmorphism UI** | Consistent glass-card components with backdrop blur, border glow effects, and smooth hover transitions |
| 📈 **SEO Optimized** | Full metadata configuration with Open Graph tags, keywords, and semantic HTML |

---

## ⚙️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| ⚡ **Next.js** | `16.2.9` | React framework with App Router for file-based routing and SSR |
| ⚛️ **React** | `19.2.4` | UI library for building component-based interfaces |
| 🛡️ **TypeScript** | `^5` | Static type checking for safer, more reliable code |
| 🎨 **ESLint** | `^9` | Code linting with Next.js core web vitals and TypeScript rules |
| 📏 **Montserrat** | Google Fonts | Display font for headings, tags, and labels |
| 📖 **Open Sans** | Google Fonts | Body font for paragraphs and general content |

### Dependencies

**Production:**
- `next` - The React framework for production
- `react` - Declarative UI library
- `react-dom` - React DOM renderer

**Development:**
- `@types/node` - TypeScript definitions for Node.js
- `@types/react` - TypeScript definitions for React
- `@types/react-dom` - TypeScript definitions for React DOM
- `eslint` - Pluggable linting utility
- `eslint-config-next` - ESLint configuration for Next.js
- `typescript` - TypeScript compiler

---

## 🎨 Design System

The site uses a carefully crafted dark-themed design system with glassmorphism aesthetics.

### Color Palette

| Variable | Hex | Usage |
|----------|-----|-------|
| `--bg-primary` | `#0b0f19` | Main background |
| `--bg-secondary` | `#131b2e` | Secondary surfaces |
| `--bg-tertiary` | `#1b2640` | Elevated surfaces |
| `--color-navy` | `#1d4ed8` | Primary accent |
| `--color-cerulean` | `#0077b6` | Secondary accent |
| `--color-aqua` | `#00f0ff` | Highlight accent |
| `--color-powder` | `#8FD9D9` | Soft accent |
| `--color-sunset-gold` | `#f59e0b` | Warm accent (weddings) |
| `--color-sunset-coral` | `#ff6b6b` | Warm accent (events) |
| `--text-primary` | `#ffffff` | Primary text |
| `--text-secondary` | `#94a3b8` | Secondary text |
| `--text-muted` | `#64748b` | Muted text |

### Typography

- **Display Font:** Montserrat (weights 400, 600, 700, 800, 900) - Used for headings, tags, labels, and navigation
- **Body Font:** Open Sans (weights 300, 400, 500, 600, 700) - Used for paragraphs and general content

### Glass Effects

```css
--glass-bg: rgba(19, 27, 46, 0.55);
--glass-border: rgba(255, 255, 255, 0.06);
--glass-border-hover: rgba(0, 240, 255, 0.35);
--glass-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.4);
--glass-blur: blur(15px);
```

### Animations

- **Float:** Gentle vertical oscillation for tags and indicators
- **Loop Orbit:** Rotating circle motif animation
- **Smooth Transitions:** `cubic-bezier(0.16, 1, 0.3, 1)` for UI interactions
- **Bounce Transitions:** `cubic-bezier(0.34, 1.56, 0.64, 1)` for button hover effects

---

## 📁 Project Structure

```
plana-static-site/
├── public/
│   ├── images/
│   │   ├── hero_event_main.png    # Hero section background
│   │   ├── wedding.png            # Wedding portfolio image
│   │   ├── corporate.png          # Corporate portfolio image
│   │   ├── concert.png            # Concert portfolio image
│   │   └── gala.png               # Gala/milestone portfolio image
│   └── logo.png                   # Plan A brand logo
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx           # About page
│   │   ├── contact/
│   │   │   └── page.tsx           # Contact/booking page
│   │   ├── portfolio/
│   │   │   └── page.tsx           # Portfolio page
│   │   ├── services/
│   │   │   └── page.tsx           # Services page
│   │   ├── globals.css            # Global styles and design tokens
│   │   ├── layout.tsx             # Root layout with Header/Footer
│   │   ├── page.tsx               # Home page
│   │   ├── page.module.css        # Home page module styles
│   └── components/
│       ├── Header.tsx             # Site header with navigation
│       └── Footer.tsx             # Site footer with newsletter
├── AGENTS.md                      # AI coding agent instructions
├── CLAUDE.md                      # Claude-specific coding guidelines
├── eslint.config.mjs              # ESLint configuration
├── next.config.ts                 # Next.js configuration
├── package.json                   # Project dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # This file
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your development machine:

- 📦 **Node.js** (version 18.x or later recommended)
- 📦 **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/plana-static-site.git
   cd plana-static-site
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   Or with your preferred package manager:

   ```bash
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## 📄 Pages

### 🏡 Home (`/`)
The landing page features a cinematic hero section with a full-screen background image and gradient overlay, followed by the "Core Pillars" methodology section, service category cards, an asymmetrical portfolio grid with hover-activated stat panels, and a consultation booking form.

### 💼 Services (`/services`)
Detailed breakdowns of all four event categories (Weddings, Corporate, Birthdays, Concerts) with deliverable blueprints, metric badges, a four-step workflow timeline, an FAQ accordion section, and a call-to-action.

### 📷 Portfolio (`/portfolio`)
A filterable showcase of past events across Sri Lanka. Users can filter by category (All, Weddings, Corporate, Birthdays, Concerts). Each project card displays location, guest count, solution details, and a key metric with category-specific hover color effects.

### 👥 About (`/about`)
Company philosophy centered on the "Interconnected Loops" concept (Client Collaboration, Precision Planning, Vendor Network), four core values (Logistical Feasibility, Unique Concepts, Interconnection, Time Management), and team member profiles.

### 📧 Contact (`/contact`)
A comprehensive consultation form capturing name, email, event category, tentative date, location, guest count, and special requirements. Also displays Colombo office contact details and a live booking status indicator.

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:3000` |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

---

## 📱 Responsive Design

The site is fully responsive across three breakpoints:

| Breakpoint | Layout Adjustments |
|------------|-------------------|
| **Desktop** (>968px) | Full grid layouts, desktop navigation, side-by-side content |
| **Tablet** (641px - 968px) | 2-column grids collapse to single column, adjusted spacing |
| **Mobile** (<640px) | Single column layouts, mobile navigation drawer, stacked CTAs |

Key responsive features:
- 🍔 **Mobile navigation drawer** with slide-in animation and hamburger toggle
- ⬇️ **Stacked call-to-action buttons** on mobile hero section
- 🖼️ **Single-column grids** for services, portfolio, and forms on small screens
- 🔍 **Adjusted font sizes** for readability on smaller viewports

---

## 🧱 Component Architecture

### Header (`src/components/Header.tsx`)
- Fixed positioning with glassmorphism backdrop blur
- Active link detection using `usePathname()`
- Desktop navigation with underline indicators for active pages
- Mobile hamburger menu with animated toggle (three bars to X)
- Slide-out drawer navigation for mobile devices
- "Start Planning" CTA button linking to the contact page

### Footer (`src/components/Footer.tsx`)
- Four-column responsive grid layout
- Brand section with logo, tagline, and social media links (LinkedIn, Facebook, Instagram, YouTube)
- Navigation links and event service links
- Newsletter subscription form with success feedback
- Copyright notice with dynamic year and legal links

### Global Styles (`src/app/globals.css`)
- CSS custom properties for the entire design system
- Glass card component styles with hover effects
- Gradient text utility classes
- Glow button styles with hover animations
- Custom scrollbar styling
- Responsive grid utilities (`.grid-2`, `.grid-3`, `.grid-4`)
- Float and orbit keyframe animations

---

## 🎭 Event Categories

| Category | Icon | Accent Color | Description |
|----------|------|-------------|-------------|
| 💍 **Weddings** | Sunset gradient | Gold/Coral | Beachfront vows, ballroom galas, glass pavilion designs |
| 🏢 **Corporate** | Navy gradient | Deep blue | Product launches, conferences, executive galas |
| 🎂 **Birthdays** | Coral gradient | Pink/Coral | Milestone celebrations, themed dinners, private events |
| 🎵 **Concerts** | Stadium gradient | Navy/Cyan | Stadium-scale production, sound rigging, crowd management |

---

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy this Next.js application is through the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy with zero configuration

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:

- ☁️ **AWS Amplify**
- ☁️ **Netlify**
- ☁️ **Railway**
- ☁️ **DigitalOcean App Platform**
- ☁️ **Docker** (using the official Node.js image)

For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 📋 SEO and Metadata

The root layout (`src/app/layout.tsx`) includes comprehensive metadata:

```typescript
export const metadata: Metadata = {
  title: "Plan A | Premium Event Planners Sri Lanka",
  description: "From weddings and corporate gatherings to birthdays and concerts...",
  keywords: [
    "Event Planner Sri Lanka",
    "Wedding Planner Colombo",
    "Corporate Events Sri Lanka",
    "Concert Organizer Colombo",
    "Birthday Planner Sri Lanka",
    "Plan A Events"
  ],
  authors: [{ name: "Plan A Events Agency" }],
  openGraph: {
    title: "Plan A | Premium Event Planners Sri Lanka",
    description: "From weddings and corporate gatherings to birthdays and concerts...",
    type: "website",
  },
};
```

---

## ⚖️ License

This project is proprietary. All rights reserved by **Plan A Events Agency**, a subsidiary of [Codezela Technologies](https://codezela.com).

---

<div align="center">

**Made with ❤️ in Sri Lanka**

*A subsidiary of [Codezela Technologies](https://codezela.com)*

*Every Great Event Starts with Plan A*

</div>
