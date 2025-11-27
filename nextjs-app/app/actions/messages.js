'use server'

let messages = [
  { id: 1, text: 'Hello! Welcome to React 19 with Server Actions', status: 'sent', timestamp: new Date().toISOString() },
]

export async function sendMessage(message) {
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  const newMessage = {
    id: Date.now(),
    text: message,
    status: 'sent',
    timestamp: new Date().toISOString(),
  }
  
  messages.push(newMessage)
  
  return newMessage
}

export async function getMessages() {
  await new Promise(resolve => setTimeout(resolve, 500))
  return messages
}
