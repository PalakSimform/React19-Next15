# React 19 Demo - Vite Edition# React 19 Demo - Vite Edition# 🚀 React 19 Demo - All New Features



This is the React (Vite) implementation with client-side components.



## What Makes This Different?This is the **React (Vite) implementation** with client-side components.A simple, clean demo of all the exciting new features in React 19!



- Pure client-side - No server needed

- Vite - Lightning-fast HMR

- Simple - Easy to understand## What Makes This Different?## What's Demonstrated

- Simulated - All delays are setTimeout



## Getting Started

- 💻 **Pure client-side** - No server needed### 1. **useOptimistic** Hook

### 1. Install Dependencies

```bash- ⚡ **Vite** - Lightning-fast HMR- Instantly show UI updates while async operations are in progress

npm install

```- 🎯 **Simple** - Easy to understand- Perfect for chat apps, likes, follows, etc.



### 2. Run Development Server- 📦 **Simulated** - All delays are setTimeout- Shows "sending..." status immediately, then confirms

```bash

npm run dev

```

## 🚀 Getting Started### 2. **use()** Hook  

### 3. Open Browser

Visit: http://localhost:5173- Unwrap Promises and read Context values



## Project Structure### 1. Install Dependencies- Can be used conditionally (unlike other hooks!)



``````bash- Works with Suspense for elegant loading states

react-app/

├── src/npm install

│   ├── UseOptimisticDemo.jsx

│   ├── UseHookDemo.jsx```### 3. **useActionState** Hook

│   ├── UseActionStateDemo.jsx

│   ├── App.jsx- Simplify form handling with automatic pending states

│   ├── App.css

│   └── main.jsx### 2. Run Development Server- Built-in error management

├── package.json

└── vite.config.js```bash- Perfect for form submissions

```

npm run dev

## Features Demonstrated

```### 4. **useFormStatus** Hook

### 1. useOptimistic Hook

- Instantly show UI updates while async operations are in progress- Read parent form status from any child component

- Perfect for chat apps, likes, follows, etc.

- Shows "sending..." status immediately, then confirms### 3. Open Browser- No prop drilling needed!



### 2. use() HookVisit: **http://localhost:5173**- Imported from `react-dom` (not `react`)

- Unwrap Promises and read Context values

- Can be used conditionally (unlike other hooks!)

- Works with Suspense for elegant loading states

## 📁 Project Structure---

### 3. useActionState Hook

- Simplify form handling with automatic pending states

- Built-in error management

- Perfect for form submissions```## 🎯 Quick Start



### 4. useFormStatus Hookreact-app/

- Read parent form status from any child component

- No prop drilling needed!├── src/### 1. Install Dependencies

- Imported from 'react-dom' (not 'react')

│   ├── App.jsx                     # Main app with tabs```bash

## Tech Stack

│   ├── UseOptimisticDemo.jsx      # Chat demonpm install

- React 19.0.0 - Latest React with all new hooks

- Vite 6.0.1 - Lightning-fast build tool│   ├── UseHookDemo.jsx             # use() hook demo```

- Pure CSS - No framework dependencies

│   ├── UseActionStateDemo.jsx     # Form demo

## Notes

│   └── App.css                     # Styles### 2. Run the App

- All demos use setTimeout to simulate async operations

- No server or database needed├── index.html```bash

- Perfect for learning React 19 hooks

- Client-side only (runs entirely in browser)├── package.jsonnpm run dev



## Learning Resources└── vite.config.js```



- [React 19 Release](https://react.dev/blog/2024/12/05/react-19)```

- [useOptimistic](https://react.dev/reference/react/useOptimistic)

- [use Hook](https://react.dev/reference/react/use)### 3. Open Browser

- [useActionState](https://react.dev/reference/react/useActionState)

## 🎯 Key FeaturesVisit: **http://localhost:5173**



### All Client-Side---

Everything runs in the browser:

```javascript## 📁 Project Structure

// Simulated async operation

const sendMessage = async (message) => {```

  await new Promise(resolve => setTimeout(resolve, 2000))goal/

  // Update local state├── src/

}│   ├── App.jsx                    # Main app with tab navigation

```│   ├── UseOptimisticDemo.jsx     # Chat with optimistic updates

│   ├── UseHookDemo.jsx            # Promise unwrapping with use()

### React 19 Hooks Demonstrated│   └── UseActionStateDemo.jsx    # Form with useActionState + useFormStatus

1. **useOptimistic** - Optimistic UI updates├── index.html

2. **use()** - Promise unwrapping├── package.json

3. **useActionState** - Form state management└── vite.config.js

4. **useFormStatus** - Form status reading```



## 🔧 Tech Stack---



- **React 19.0.0** - Latest React## 💡 How It Works

- **Vite 6.0.1** - Build tool

- **Pure CSS** - No frameworks### No Backend Needed!

- All demos use **simulated delays** (setTimeout)

## 📝 Notes- Mock data stored in component state

- No database, no API, no servers!

- All data stored in component state

- No backend required### Realistic Experience

- Simulated delays with setTimeout- 1-2 second delays simulate real network latency

- Perfect for learning React 19 hooks- Validation and error handling included

- 10% random error chance for realistic testing

## 🎓 Learning Resources

---

- [React 19 Blog Post](https://react.dev/blog/2024/12/05/react-19)

- [useOptimistic](https://react.dev/reference/react/useOptimistic)## 🎨 Features

- [use() Hook](https://react.dev/reference/react/use)

- [useActionState](https://react.dev/reference/react/useActionState)- ✅ **React 19** stable release

- ✅ **Vite 6** for lightning-fast HMR

Happy coding! 🚀- ✅ Clean, modern UI with CSS animations

- ✅ Fully typed with JSDoc comments
- ✅ Tab navigation to explore each demo
- ✅ No external dependencies (except React & Vite)

---

## 🧪 Try These Things

1. **useOptimistic Demo**
   - Send multiple messages quickly
   - Notice how they appear instantly with "sending..." status
   - Watch them update to "sent" after 2 seconds

2. **use() Hook Demo**
   - Switch between User 1 and User 2
   - See Suspense fallback while loading
   - Toggle theme to see context reading with use()

3. **useActionState Demo**
   - Try submitting with invalid data
   - Watch the real-time form status indicator
   - See error messages and success states

---

## 📚 Learn More

- [React 19 Release Notes](https://react.dev/blog/2024/12/05/react-19)
- [useOptimistic Documentation](https://react.dev/reference/react/useOptimistic)
- [use() Hook Documentation](https://react.dev/reference/react/use)
- [useActionState Documentation](https://react.dev/reference/react/useActionState)
- [useFormStatus Documentation](https://react.dev/reference/react-dom/hooks/useFormStatus)

---

## 🛠️ Tech Stack

- **React 19.0.0** - Latest stable release
- **Vite 6.0.1** - Next generation frontend tooling
- **Pure CSS** - No UI libraries needed

---

## 📝 Notes

- All data is stored in memory (component state)
- No backend or database required
- Perfect for learning and experimentation
- Data resets when you refresh the page

---

## 🎉 Happy Coding!

Enjoy exploring React 19's amazing new features!
