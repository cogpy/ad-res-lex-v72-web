# AD-RES Lex V72 Documentation Website

A comprehensive web application hosting the v72 lex scheme documentation, entity-relation frameworks, and legal analysis for case 2025-137857.

## Features

- **Dark Mode Interface** with light mode toggle
- **Responsive Design** for all devices
- **Multi-Page Documentation** covering:
  - Entity-Relation Framework (14D agent state modeling)
  - High-Resolution Agent Models (quintuple-source verification)
  - Response Strategies (JR-DR synergy optimization)
  - Verification Report (4,500+ verification checks)
- **Professional Navigation** with mobile-responsive menu
- **Tailwind CSS 4** + **shadcn/ui** components

## Quick Start

### Prerequisites
- Node.js 20+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Development Server
- Local: `http://localhost:3000`
- Network: `http://169.254.0.21:3000`

## Project Structure

```
client/
  ├── public/          # Static assets
  ├── src/
  │   ├── pages/       # Page components
  │   ├── components/  # Reusable UI components
  │   ├── contexts/    # React contexts
  │   ├── hooks/       # Custom hooks
  │   ├── lib/         # Utility functions
  │   ├── App.tsx      # Main router
  │   ├── main.tsx     # Entry point
  │   └── index.css    # Global styles
server/               # Express server (static serving)
```

## Pages

- **Home** (`/`) - Overview and hero section
- **Frameworks** (`/frameworks`) - V72 frameworks overview
- **Entity-Relation** (`/entity-relation`) - 14D agent state modeling
- **Agents** (`/agents`) - Verified agent definitions
- **Responses** (`/responses`) - JR-DR synergy strategies
- **Verification** (`/verification`) - Quality metrics and verification report

## Technology Stack

- **Frontend:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui
- **Routing:** Wouter
- **Build:** Vite
- **Server:** Express

## Key Metrics

- **Verification Completeness:** 0.96
- **Factual Accuracy:** 0.96
- **Evidence Quality:** 0.94
- **JR-DR Synergy:** 0.98

## Repository

- **GitHub:** https://github.com/cogpy/ad-res-lex-v72-web
- **Case Reference:** 2025-137857 (Peter Faucitt v. Jacqueline Faucitt et al.)
- **Source Frameworks:** https://github.com/cogpy/ad-res-j7

## License

MIT

## Contact

For questions or contributions, please refer to the main case repository at https://github.com/cogpy/ad-res-j7
