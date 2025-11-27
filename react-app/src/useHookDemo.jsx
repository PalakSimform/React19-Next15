import { use, Suspense, useState, createContext } from "react";

const mockUsers = {
  1: {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'Developer',
    avatar: '',
  },
  2: {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'Designer',
    avatar: '',
  },
};

const mockPosts = {
  1: [
    { id: 1, title: 'Building React 19 Apps', likes: 42 },
    { id: 2, title: 'Understanding useOptimistic', likes: 28 },
    { id: 3, title: 'Server Actions in Practice', likes: 15 },
  ],
  2: [
    { id: 4, title: 'Design Systems for React', likes: 56 },
    { id: 5, title: 'UI/UX Best Practices', likes: 33 },
    { id: 6, title: 'Figma to React Workflow', likes: 21 },
  ],
};

const fetchUserData = async (userId) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockUsers[userId];
};

const fetchUserPosts = async (userId) => {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return mockPosts[userId];
};

const ThemeContext = createContext("light");

function UserProfile({ userPromise, postsPromise }) {
  const user = use(userPromise);
  const posts = use(postsPromise);

  const theme = use(ThemeContext);

  return (
    <div className={`user-profile theme-${theme}`}>
      <div className="user-header">
        <h3>{user.name}</h3>
        <p className="user-email">{user.email}</p>
        <span className="user-role">{user.role}</span>
      </div>

      <div className="user-posts">
        <h4>Recent Posts</h4>
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <span>{post.title}</span>
            <span className="likes">Likes {post.likes}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function UserSelector({ selectedUser, onSelectUser }) {
  return (
    <div className="user-selector">
      <button
        onClick={() => onSelectUser(1)}
        className={selectedUser === 1 ? "active" : ""}
      >
        User 1
      </button>
      <button
        onClick={() => onSelectUser(2)}
        className={selectedUser === 2 ? "active" : ""}
      >
        User 2
      </button>
    </div>
  );
}

export default function UseHookDemo() {
  const [selectedUser, setSelectedUser] = useState(1);
  const [theme, setTheme] = useState("light");

  const [userPromise, setUserPromise] = useState(() => fetchUserData(1));
  const [postsPromise, setPostsPromise] = useState(() => fetchUserPosts(1));

  const handleUserChange = (userId) => {
    setSelectedUser(userId);
    setUserPromise(fetchUserData(userId));
    setPostsPromise(fetchUserPosts(userId));
  };

  return (
    <div className="demo-section">
      <h2>🎣 use() Hook</h2>
      <p className="description">
        <strong>What's New:</strong> The 'use' hook can unwrap Promises and read
        Context values. Unlike other hooks, it can be used conditionally! This demo
        simulates loading user data with delays. Click buttons to 
        load different users. The hook automatically suspends while promises are pending.
      </p>

      <div className="controls">
        <UserSelector
          selectedUser={selectedUser}
          onSelectUser={handleUserChange}
        />
        <button
          className="theme-toggle"
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        >
          Toggle Theme ({theme})
        </button>
      </div>

      <ThemeContext.Provider value={theme}>
        <Suspense
          fallback={<div className="loading">⏳ Loading user data...</div>}
        >
          <UserProfile userPromise={userPromise} postsPromise={postsPromise} />
        </Suspense>
      </ThemeContext.Provider>
    </div>
  );
}
