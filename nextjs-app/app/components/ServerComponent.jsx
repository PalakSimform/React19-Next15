'use client'

import { useState } from 'react'

function ClientCounter({ serverData }) {
  const [count, setCount] = useState(0)

  return (
    <div className="client-component-demo">
      <h3>Client Component (Interactive)</h3>
      <p>This component has state and event handlers:</p>
      <button onClick={() => setCount(c => c + 1)} className="counter-btn">
        Clicked {count} times
      </button>
      <p className="server-data">Data from server: {serverData}</p>
    </div>
  )
}

export default function ServerComponentDemo() {
  const serverTimestamp = new Date().toISOString()

  return (
    <div className="demo-section">
      <h2>Server Components vs Client Components</h2>
      <p className="description">
        <strong>Key Concept:</strong> Next.js 15 lets you mix Server and Client Components.
        Server Components run on the server, Client Components run in the browser.
      </p>

      <div className="component-comparison">
        <div className="server-component-demo">
          <h3>Server Component (This Part)</h3>
          <ul>
            <li>No JavaScript sent to client</li>
            <li>Can access server resources directly</li>
            <li>SEO friendly (pre-rendered)</li>
            <li>No useState, useEffect, or event handlers</li>
            <li>Can be async functions</li>
          </ul>
          <p className="example-code">
            <code>
              async function Page() {'{'}<br/>
              &nbsp;&nbsp;const data = await db.query()<br/>
              &nbsp;&nbsp;return &lt;div&gt;{'{'}data{'}'}&lt;/div&gt;<br/>
              {'}'}
            </code>
          </p>
        </div>

        <ClientCounter serverData={serverTimestamp} />
      </div>

      <div className="feature-notes">
        <h4>When to Use Each:</h4>
        <div className="features-grid">
          <div className="feature-card">
            <h5>Server Components</h5>
            <ul>
              <li>Data fetching</li>
              <li>Accessing backend resources</li>
              <li>Keeping sensitive info on server</li>
              <li>Heavy dependencies (kept on server)</li>
              <li>SEO-critical content</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <h5>Client Components</h5>
            <ul>
              <li>Interactivity (onClick, onChange)</li>
              <li>State management (useState)</li>
              <li>Effects (useEffect)</li>
              <li>Browser APIs (localStorage, etc.)</li>
              <li>Custom hooks</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="server-badge">
        <strong>Architecture:</strong> Server Components by default, 'use client' for interactivity
      </div>
    </div>
  )
}
