# Portfolio Starter (Next.js 14)

Production-ready portfolio starter built with:

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber (`@react-three/fiber`, `@react-three/drei`)

## Folder Structure

```txt
.
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── layout/
│   │       └── site-header.tsx
│   ├── config/
│   │   └── site.ts
│   ├── features/
│   │   └── home/
│   │       └── components/
│   │           ├── hero-canvas.tsx
│   │           └── hero-section.tsx
│   └── lib/
│       └── utils.ts
├── .eslintrc.json
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Configuration Highlights

- **Dark by default**: `layout.tsx` uses `<html className="dark">`
- **SEO metadata**: full `Metadata` object in `src/app/layout.tsx`
- **Google font**: Inter via `next/font/google` with `display: "swap"`
- **Tailwind custom theme**:
  - Brand colors: blue / purple / pink
  - Gradient utility (`bg-brand-gradient`)
  - Surface palette for dark UI
- **Reusable utilities**:
  - CSS utilities in `src/app/globals.css` (`text-gradient`, `glass-card`, `container-shell`)
  - `cn()` helper in `src/lib/utils.ts`
- **Absolute imports**: configured via `tsconfig.json` with `@/* -> src/*`

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## AI Chatbot Setup

The floating chatbot uses OpenAI to answer questions about your projects.

1. Copy env template:

```bash
cp .env.example .env.local
```

2. Add your key in `.env.local`:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

3. Restart dev server if already running.
