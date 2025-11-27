# Next.js 15 + React 19 - Server Components Demo

This is the## Tech Stack

- React 19.0.0 - Latest React with all new hooks
- Next.js 15.1.0 - App Router with Server Components
- Server Actions - No API routes needed
- No Database - Uses in-memory storage for demo

## Notes implementation with Server Components and Server Actions.

## What Makes This Different?

- Server Actions - No API routes needed!
- Server Components - Faster initial load
- Server-side validation - More secure
- Smaller bundle - Less JavaScript to download

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Visit: http://localhost:3000

## Project Structure

```
nextjs-app/
├── app/
│   ├── actions/
│   │   ├── messages.js
│   │   ├── users.js
│   │   └── feedback.js
│   ├── components/
│   │   ├── UseOptimisticDemo.jsx
│   │   ├── UseHookDemo.jsx
│   │   ├── UseActionStateDemo.jsx
│   │   └── ServerComponentDemo.jsx
│   ├── page.jsx
│   ├── layout.jsx
│   └── globals.css
├── package.json
└── next.config.js
```

## Key Features

### Server Actions
All actions are marked with 'use server' directive:
```javascript
'use server'

export async function submitFeedback(prevState, formData) {
  return { success: true }
}
```

### Component Boundaries
- Server Components (default): No JavaScript sent to client
- Client Components ('use client'): Interactive with hooks

## Tech Stack

- **React 19.0.0** - Latest React with all new hooks
- **Next.js 15.1.0** - App Router with Server Components
- **Server Actions** - No API routes needed
- **No Database** - Uses in-memory storage for demo

## Notes

- Data is stored in memory (resets on server restart)
- All validation happens server-side
- Server Actions provide automatic request/response handling
- Smaller client bundle than traditional React apps

## Learning Resources

- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [React Server Components](https://react.dev/reference/rsc/server-components)
- [useOptimistic](https://react.dev/reference/react/useOptimistic)
