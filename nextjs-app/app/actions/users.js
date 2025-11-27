'use server'

const users = {
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
}

const userPosts = {
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
}

export async function getUserData(userId) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return users[userId]
}

export async function getUserPosts(userId) {
  await new Promise(resolve => setTimeout(resolve, 1200))
  return userPosts[userId] || []
}
