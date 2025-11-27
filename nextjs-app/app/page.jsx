"use client";

import { useState } from "react";
import UseOptimisticDemo from "./components/UseOptimisticDemo";
import UseHookDemo from "./components/UseHookDemo";
import UseActionStateDemo from "./components/UseActionStateDemo";
import ServerComponentDemo from "./components/ServerComponentDemo";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("optimistic");

  return (
    <div className="app">
      <header className="app-header">
        <h1>React 19 + Next.js 15 Demo</h1>
        <p className="subtitle">Server Components & Server Actions Edition</p>
      </header>

      <nav className="tab-navigation">
        <button
          className={`tab-button ${activeTab === "optimistic" ? "active" : ""}`}
          onClick={() => setActiveTab("optimistic")}
        >
          useOptimistic
        </button>
        <button
          className={`tab-button ${activeTab === "use" ? "active" : ""}`}
          onClick={() => setActiveTab("use")}
        >
          use() Hook
        </button>
        <button
          className={`tab-button ${activeTab === "action" ? "active" : ""}`}
          onClick={() => setActiveTab("action")}
        >
          useActionState
        </button>
        <button
          className={`tab-button ${activeTab === "server" ? "active" : ""}`}
          onClick={() => setActiveTab("server")}
        >
          Server Components
        </button>
      </nav>

      <main className="main-content">
        {activeTab === "optimistic" && <UseOptimisticDemo />}
        {activeTab === "use" && <UseHookDemo />}
        {activeTab === "action" && <UseActionStateDemo />}
        {activeTab === "server" && <ServerComponentDemo />}
      </main>

      <footer className="app-footer">
        <p>Built with React 19 & Next.js 15 • Server Components Edition</p>
      </footer>
    </div>
  );
}
