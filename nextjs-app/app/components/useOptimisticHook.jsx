"use client";

import { useState, useOptimistic, useTransition } from "react";
import { sendMessage } from "../actions/messages";

export default function UseOptimisticDemo() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! This uses Server Actions!",
      status: "sent",
      timestamp: new Date().toISOString(),
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
        const newMessage = await sendMessage(message);
        setMessages((prev) => [...prev, newMessage]);
      } catch (error) {
        console.error("Failed to send message:", error);
        alert("Failed to send message.");
      }
    });
  };

  return (
    <div className="demo-section">
      <h2> useOptimistic + Server Actions</h2>
      <p className="description">
        <strong>What's Different:</strong> This version uses{" "}
        <strong>Server Actions</strong> instead of fetch! The sendMessage
        function runs on the server with the 'use server' directive. No API
        routes needed!
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
                {message.status === "sending" ? "Sending..." : "✓ Sent"}
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

      <div className="server-badge">
        <strong>Server Action:</strong> sendMessage() runs on the server
      </div>
    </div>
  );
}
