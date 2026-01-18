# Directory Structure: Code-Server & Live Website

Complete reference for the project organization, build process, and file locations.

---

## **Project Overview**

```
ad-res-lex-v72-web/
├── client/              ← Frontend React application
├── server/              ← Express server (static serving)
├── shared/              ← Shared types and constants
├── scripts/             ← Utility scripts (rsync sync)
├── .devcontainer/       ← GitHub Codespace configuration
├── .github/             ← GitHub configuration
├── dist/                ← Built output (production)
├── node_modules/        ← Dependencies (474MB)
└── Configuration files
```

**Project Size:** 474MB (mostly node_modules)  
**Source Code:** 73 files (TypeScript, React, CSS)  
**Build Output:** 1.1MB

---

## **1. Client Directory (Frontend)**

```
client/
├── public/              ← Static assets (served at /)
│   └── .gitkeep         (empty, ready for images/assets)
│
├── src/                 ← React source code
│   ├── components/      ← Reusable UI components
│   │   ├── ui/          ← shadcn/ui components (50+ files)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── table.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── ... (40+ more UI components)
│   │   ├── Navigation.tsx    ← Main navigation bar
│   │   ├── ErrorBoundary.tsx ← Error handling
│   │   ├── ManusDialog.tsx   ← Dialog component
│   │   └── Map.tsx           ← Google Maps integration
│   │
│   ├── pages/           ← Page-level components
│   │   ├── Home.tsx                      ← Hero section & overview
│   │   ├── FrameworksOverview.tsx        ← V72 frameworks summary
│   │   ├── EntityRelationFramework.tsx   ← 14D agent modeling
│   │   ├── AgentModels.tsx               ← Verified agents
│   │   ├── ResponseStrategies.tsx        ← JR-DR synergy
│   │   ├── VerificationReport.tsx        ← Quality metrics
│   │   └── NotFound.tsx                  ← 404 page
│   │
│   ├── contexts/        ← React context providers
│   │   └── ThemeContext.tsx  ← Dark/light mode
│   │
│   ├── hooks/           ← Custom React hooks
│   │   ├── useComposition.ts
│   │   ├── useMobile.tsx
│   │   └── usePersistFn.ts
│   │
│   ├── lib/             ← Utility functions
│   │   └── utils.ts     ← Helper functions
│   │
│   ├── App.tsx          ← Main router & layout
│   ├── main.tsx         ← React entry point
│   ├── index.css        ← Global styles (Tailwind)
│   └── const.ts         ← Constants
│
└── index.html           ← HTML template
```

**Frontend Stats:**
- **Pages:** 7 (Home, Frameworks, Entity-Relation, Agents, Responses, Verification, 404)
- **Components:** 60+ (50+ shadcn/ui + custom)
- **Hooks:** 3 custom hooks
- **Styling:** Tailwind CSS 4 + CSS variables

---

## **2. Server Directory (Backend)**

```
server/
└── index.ts             ← Express server
    ├── Static file serving (dist/public)
    ├── Client-side routing fallback
    └── Runs on port 3000
```

**Server Features:**
- Serves built frontend files
- Handles client-side routing (SPA)
- No API endpoints (static-only)
- Can be upgraded to web-db-user for backend features

---

## **3. Shared Directory**

```
shared/
└── const.ts             ← Shared constants
```

**Purpose:** Shared types/constants between client and server (compatibility placeholder)

---

## **4. Scripts Directory**

```
scripts/
└── rsync-sync.sh        ← Rsync synchronization script
    ├── Push to Codespace
    ├── Pull from Codespace
    ├── Watch and auto-sync
    └── Status monitoring
```

---

## **5. Configuration Files**

```
Root Configuration:
├── vite.config.ts       ← Vite build configuration
├── tsconfig.json        ← TypeScript configuration
├── tsconfig.node.json   ← TypeScript for Node
├── package.json         ← Dependencies & scripts
├── pnpm-lock.yaml       ← Locked dependencies
├── components.json      ← shadcn/ui configuration
├── tailwind.config.ts   ← Tailwind CSS config
└── postcss.config.ts    ← PostCSS config
```

---

## **6. GitHub Configuration**

```
.github/
├── workflows/           ← GitHub Actions
│   └── sync-codespace.yml  ← Auto-build on push
│
.devcontainer/
└── devcontainer.json    ← Codespace configuration
    ├── Node.js 20 image
    ├── Auto-install dependencies
    ├── Port forwarding (3000, 5173)
    └── VS Code extensions
```

---

## **7. Build Output (dist)**

```
dist/
├── public/              ← Built frontend (1.1MB)
│   ├── index.html       ← Main HTML file
│   ├── assets/          ← Bundled JS/CSS
│   │   ├── index-*.js   ← Main bundle
│   │   ├── index-*.css  ← Global styles
│   │   └── *.js         ← Component chunks
│   └── ...
│
└── (server code built here in production)
```

**Build Process:**
1. Vite compiles React + TypeScript
2. Tailwind CSS processes styles
3. Outputs to `dist/public/`
4. Express serves from `dist/public/`

---

## **8. Development Server Structure**

### **Code-Server (Local)**
```
https://8329-i1k7qmvjohh5kvg1wbqmt-1df655df.us2.manus.computer
│
├── File Browser
│   └── /home/ubuntu/ad-res-lex-v72-web/
│       ├── client/src/        ← Edit React files
│       ├── client/public/      ← Static assets
│       ├── scripts/            ← Run rsync sync
│       └── ...
│
└── Terminal
    ├── pnpm dev              ← Start dev server
    ├── pnpm build            ← Build for production
    └── ./scripts/rsync-sync.sh ← Sync to Codespace
```

### **Live Website (Dev Server)**
```
https://3000-i1k7qmvjohh5kvg1wbqmt-1df655df.us2.manus.computer
│
├── / (Home)
│   └── Hero section + overview
│
├── /frameworks
│   └── V72 frameworks summary
│
├── /entity-relation
│   └── 14D agent state modeling
│
├── /agents
│   └── Verified agent definitions
│
├── /responses
│   └── JR-DR synergy strategies
│
├── /verification
│   └── Quality metrics & verification report
│
└── /404
    └── Not found page
```

---

## **9. File Statistics**

| Category | Count | Size |
|----------|-------|------|
| **TypeScript/React** | 7 pages | ~2KB each |
| **UI Components** | 50+ | ~1KB each |
| **Custom Components** | 4 | ~2KB each |
| **Hooks** | 3 | ~1KB each |
| **Styles** | 1 global | ~5KB |
| **Total Source** | 73 files | ~448KB |
| **Dependencies** | ~500 | 474MB |
| **Build Output** | ~50 files | 1.1MB |

---

## **10. Development Workflow**

### **Code-Server (Local Editing)**
```
1. Open: https://8329-i1k7qmvjohh5kvg1wbqmt-1df655df.us2.manus.computer
2. Password: 8e95bf977c0f0847
3. Edit files in client/src/
4. Changes auto-reload in dev server
5. View at: https://3000-...
```

### **Sync to Codespace**
```
1. ./scripts/rsync-sync.sh watch
2. Changes sync automatically
3. Codespace dev server updates
4. Test in cloud environment
```

### **Commit to GitHub**
```
1. git add .
2. git commit -m "Feature: description"
3. git push origin main
4. GitHub Actions auto-builds
```

---

## **11. Key File Locations**

| File | Purpose | Location |
|------|---------|----------|
| **Home Page** | Hero & overview | `client/src/pages/Home.tsx` |
| **Navigation** | Header & routing | `client/src/components/Navigation.tsx` |
| **Styles** | Tailwind + theme | `client/src/index.css` |
| **Router** | Page routing | `client/src/App.tsx` |
| **Entry Point** | React mount | `client/src/main.tsx` |
| **HTML Template** | Page structure | `client/index.html` |
| **Server** | Express app | `server/index.ts` |
| **Build Config** | Vite settings | `vite.config.ts` |
| **Sync Script** | Rsync automation | `scripts/rsync-sync.sh` |

---

## **12. Port Mapping**

| Port | Service | URL |
|------|---------|-----|
| **8329** | Code-Server (VS Code) | https://8329-... |
| **3000** | Dev Server (Vite) | https://3000-... |
| **5173** | Vite HMR (internal) | localhost:5173 |

---

## **13. Environment Variables**

Automatically injected by Manus:
```
VITE_APP_TITLE           ← Website title
VITE_APP_LOGO            ← Logo URL
VITE_ANALYTICS_ENDPOINT  ← Analytics service
VITE_ANALYTICS_WEBSITE_ID ← Analytics ID
VITE_OAUTH_PORTAL_URL    ← OAuth provider
```

---

## **14. Build Process**

```
Source Code (client/src/)
        ↓
TypeScript Compiler (tsc)
        ↓
React Transform (@vitejs/plugin-react)
        ↓
Tailwind CSS Processing
        ↓
Vite Bundler
        ↓
Code Splitting & Optimization
        ↓
dist/public/ (1.1MB)
        ↓
Express Server (server/index.ts)
        ↓
Live Website (port 3000)
```

---

## **15. Quick Reference**

### **Common Paths**
```bash
# Project root
/home/ubuntu/ad-res-lex-v72-web

# Frontend source
/home/ubuntu/ad-res-lex-v72-web/client/src

# Pages
/home/ubuntu/ad-res-lex-v72-web/client/src/pages

# Components
/home/ubuntu/ad-res-lex-v72-web/client/src/components

# Styles
/home/ubuntu/ad-res-lex-v72-web/client/src/index.css

# Build output
/home/ubuntu/ad-res-lex-v72-web/dist/public

# Rsync script
/home/ubuntu/ad-res-lex-v72-web/scripts/rsync-sync.sh
```

### **Common Commands**
```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview build
pnpm preview

# Sync to Codespace
./scripts/rsync-sync.sh push

# Watch and auto-sync
./scripts/rsync-sync.sh watch

# Check status
./scripts/rsync-sync.sh status
```

---

## **Summary**

✅ **Frontend:** React 19 + TypeScript + Tailwind CSS  
✅ **Backend:** Express (static serving only)  
✅ **Build:** Vite (fast, optimized)  
✅ **Components:** 60+ (shadcn/ui + custom)  
✅ **Pages:** 7 (Home, Frameworks, Agents, etc.)  
✅ **Sync:** Rsync for real-time code-server ↔ Codespace  
✅ **Deployment:** Manus built-in hosting  

**Everything is organized for rapid development and easy collaboration!**
