import { useState } from "react";
import UseOptimisticDemo from "./UseOptimisticDemo";
import UseHookDemo from "./UseHookDemo";
import UseActionStateDemo from "./UseActionStateDemo";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("optimistic");

  const tabs = [
    { id: "optimistic", label: " useOptimistic", component: UseOptimisticDemo },
    { id: "use", label: " use()", component: UseHookDemo },
    {
      id: "actionstate",
      label: " useActionState + useFormStatus",
      component: UseActionStateDemo,
    },
  ];

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className="app">
      <header className="app-header">
        <h1>React 19 Features Demo</h1>
        <p className="subtitle">
          Explore the latest hooks and features in React 19
        </p>
      </header>

      <nav className="tab-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="main-content">
        {ActiveComponent && <ActiveComponent />}
      </main>

      <footer className="app-footer">
        <div className="react-19-highlights">
          <h3>Other React 19 Highlights:</h3>
          <ul>
            <li>
              <strong>ref as prop:</strong> No more forwardRef! Pass refs
              directly as props
            </li>
            <li>
              <strong>Document Metadata:</strong> Set title and meta tags
              directly in components
            </li>
            <li>
              <strong>Simplified Context:</strong> Use {"<Context>"} instead of{" "}
              {"<Context.Provider>"}
            </li>
            <li>
              <strong>Better Hydration:</strong> Improved error messages and
              mismatch handling
            </li>
            <li>
              <strong>Asset Loading:</strong> Built-in preload and prefetch APIs
            </li>
            <li>
              <strong>Cleanup in refs:</strong> Return cleanup functions from
              ref callbacks
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
