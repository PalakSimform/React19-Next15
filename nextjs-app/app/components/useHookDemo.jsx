'use client'

import { use, Suspense, useState, createContext, useEffect } from 'react'
import { getUserData, getUserPosts } from '../actions/users'

const ThemeContext = createContext('light')

function UserProfile({ userPromise, postsPromise }) {
  const user = use(userPromise)
  const posts = use(postsPromise)
  const theme = use(ThemeContext)

  return (
    <div className={`user-profile theme-${theme}`}>
      <div className="user-header">
        <h3>{user.avatar} {user.name}</h3>
        <p className="user-email">{user.email}</p>
        <span className="user-role">{user.role}</span>
      </div>

      <div className="user-posts">
        <h4>Recent Posts</h4>
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <span>{post.title}</span>
            <span className="likes">❤️ {post.likes}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function UseHookDemo() {
  const [selectedUser, setSelectedUser] = useState(1)
  const [theme, setTheme] = useState('light')

  const [userPromise, setUserPromise] = useState(null)
  const [postsPromise, setPostsPromise] = useState(null)

  useEffect(() => {
    setUserPromise(getUserData(selectedUser))
    setPostsPromise(getUserPosts(selectedUser))
  }, [selectedUser])

  const handleUserChange = (userId) => {
    setSelectedUser(userId)
  }

  return (
    <div className="demo-section">
      <h2>use() Hook + Server Actions</h2>
      <p className="description">
        <strong>What's Different:</strong> getUserData() and getUserPosts() are
        <strong> Server Actions</strong> that run on the server. No fetch needed!
      </p>

      <div className="controls">
        <div className="user-selector">
          <button
            onClick={() => handleUserChange(1)}
            className={selectedUser === 1 ? 'active' : ''}
          >
            User 1
          </button>
          <button
            onClick={() => handleUserChange(2)}
            className={selectedUser === 2 ? 'active' : ''}
          >
            User 2
          </button>
        </div>
        <button
          className="theme-toggle"
          onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}
        >
          Toggle Theme ({theme})
        </button>
      </div>

      <ThemeContext.Provider value={theme}>
        {userPromise && postsPromise ? (
          <Suspense fallback={<div className="loading">Loading from server...</div>}>
            <UserProfile userPromise={userPromise} postsPromise={postsPromise} />
          </Suspense>
        ) : (
          <div className="loading">Loading from server...</div>
        )}
      </ThemeContext.Provider>

      <div className="server-badge">
        <strong>Server Actions:</strong> getUserData() & getUserPosts() run on server
      </div>
    </div>
  )
}
