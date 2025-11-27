"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitFeedback } from "../actions/feedback";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="submit-section">
      <button type="submit" disabled={pending} className="submit-btn">
        {pending ? "⏳ Submitting to Server..." : "Submit Feedback"}
      </button>

      <div className="form-status-info">
        <small>
          <strong>useFormStatus:</strong>
          {pending ? " Calling Server Action..." : " Form ready"}
        </small>
      </div>
    </div>
  );
}

function FormStatusIndicator() {
  const { pending } = useFormStatus();

  if (!pending) return null;

  return (
    <div className="inline-status">
      <div className="status-bar">
        <div className="status-progress"></div>
      </div>
      <p>Processing on server...</p>
    </div>
  );
}

export default function UseActionStateDemo() {
  const [state, formAction, isPending] = useActionState(submitFeedback, {
    success: null,
    error: null,
    data: null,
  });

  return (
    <div className="demo-section">
      <h2>useActionState + Server Actions</h2>
      <p className="description">
        <strong>What's Different:</strong> submitFeedback() is a{" "}
        <strong>Server Action</strong>! It runs on the server with validation
        and data processing. No fetch, no API routes!
      </p>

      <div className="feedback-container">
        <form action={formAction} className="feedback-form">
          <FormStatusIndicator />

          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <select id="rating" name="rating">
              <option value="5">Excellent</option>
              <option value="4"> Good</option>
              <option value="3">Average</option>
              <option value="2">Poor</option>
              <option value="1">Very Poor</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us what you think..."
              required
            />
          </div>

          <SubmitButton />
        </form>

        <div className="form-status">
          {state.error && (
            <div className="error-message">
              <strong>Error:</strong> {state.error}
            </div>
          )}

          {state.success && state.data && (
            <div className="success-message">
              <strong>Success!</strong> Processed on server!
              <div className="submission-details">
                <p> Name: {state.data.name}</p>
                <p> Rating: {state.data.rating}/5</p>
                <p>Time: {new Date(state.data.submittedAt).toLocaleString()}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="server-badge">
        <strong>Server Action:</strong> submitFeedback() processes form on
        server
      </div>
    </div>
  );
}
