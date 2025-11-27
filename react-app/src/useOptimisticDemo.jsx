import { useOptimistic, useState, useTransition } from "react";

const sendMessageAsync = async (message) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  return {
    id: Date.now(),
    text: message,
    status: "sent",
    timestamp: new Date().toISOString(),
  };
};

export default function UseOptimisticDemo() {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: 'Hello! Welcome to React 19', 
      status: 'sent', 
      timestamp: new Date().toISOString() 
    },
  ]);
  const [isPending, startTransition] = useTransition();

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        id: Date.now(),
        text: newMessage,
        status: "sending",
        timestamp: new Date().toISOString(),
      },
    ]
  );

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get("message");

    if (!message) return;

    e.target.reset();

    startTransition(async () => {
      addOptimisticMessage(message);

      try {
        const newMessage = await sendMessageAsync(message);
        
        setMessages((prev) => [...prev, newMessage]);
      } catch (error) {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again.');
      }
    });
  };

  return (
    <div className="demo-section">
      <h2>useOptimistic Hook</h2>
      <p className="description">
        <strong>What's New:</strong> useOptimistic lets you show optimistic UI
        updates immediately while waiting for async operations. This demo simulates
        a 2-second delay. Notice messages appear instantly with "sending..." status, 
        then update to "sent" after the operation completes.
      </p>

      <div className="chat-container">
        <div className="messages">
          {optimisticMessages.map((message) => (
            <div
              key={message.id}
              className={`message ${
                message.status === "sending" ? "sending" : "sent"
              }`}
            >
              <span>{message.text}</span>
              <span className="status">
                {message.status === "sending" ? "⏳ Sending..." : "✓ Sent"}
              </span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="message-form">
          <input
            type="text"
            name="message"
            placeholder="Type a message..."
            disabled={isPending}
            required
          />
          <button type="submit" disabled={isPending}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
