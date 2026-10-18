# PSK Portfolio

A one-page UI/UX and product design portfolio built with Next.js, TypeScript, Tailwind CSS, Motion for React, and Lucide.

## Getting started

Install dependencies and start the development server:

    npm install
    npm run dev

Open http://localhost:3000.

## Update portfolio content

- Edit project names and artwork directions in data/projects.ts.
- Update the wordmark, email, social profiles, and resume link in data/site-config.ts.
- Add approved case study summaries and links to the project records when they are available.
- Replace the abstract hero graphic with an approved portrait asset when one is available.

Contact and resume links are omitted until real destinations are added. Project cards become links only when a case study URL is provided.

## Available checks

    npm run lint
    npm run typecheck
    npm run build

## Stack

- Next.js App Router and React Server Components by default
- TypeScript in strict mode
- Tailwind CSS 4 with a small set of centralized CSS design tokens
- Motion for React for restrained, reduced-motion-aware interactions
- Lucide React icons
- Manrope through next/font/google
