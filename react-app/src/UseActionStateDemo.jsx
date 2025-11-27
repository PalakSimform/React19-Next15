import { useActionState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();

  return (
    <div className="submit-section">
      <button type="submit" disabled={pending} className="submit-btn">
        {pending ? "Submitting..." : "Submit Feedback"}
      </button>

      <div className="form-status-info">
        <small>
          <strong>useFormStatus:</strong>
          {pending ? " Form is submitting..." : " Form is ready"}
          {data && ` | Method: ${method || "POST"}`}
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
      <p>Processing your feedback...</p>
    </div>
  );
}

async function submitFeedback(previousState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const rating = formData.get("rating");
  const message = formData.get("message");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!name || name.length < 2) {
    return {
      success: false,
      error: "Name must be at least 2 characters",
      data: null,
    };
  }

  if (!email || !email.includes("@")) {
    return {
      success: false,
      error: "Please provide a valid email",
      data: null,
    };
  }

  if (!message || message.length < 10) {
    return {
      success: false,
      error: "Message must be at least 10 characters",
      data: null,
    };
  }

  if (Math.random() < 0.1) {
    return {
      success: false,
      error: "Simulated error occurred. Please try again.",
      data: null,
    };
  }

  const feedback = {
    id: Date.now(),
    name,
    email,
    rating: parseInt(rating) || 5,
    message,
    submittedAt: new Date().toISOString(),
  };

  return {
    success: true,
    error: null,
    data: feedback,
  };
}

export default function UseActionStateDemo() {
  const [state, formAction, isPending] = useActionState(submitFeedback, {
    success: null,
    error: null,
    data: null,
  });

  return (
    <div className="demo-section">
      <h2> useActionState + useFormStatus</h2>
      <p className="description">
        <strong>What's New:</strong> useActionState simplifies form handling
        with automatic pending states and error management.{" "}
        <strong>useFormStatus</strong>
        lets child components read the parent form's status without prop
        drilling! Form simulates a 2-second delay. Try submitting to see both
        hooks in action.
      </p>

      <div className="feedback-container">
        <form action={formAction} className="feedback-form">
          {/* useFormStatus indicator at the top */}
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
              <option value="5"> Excellent</option>
              <option value="4"> Good</option>
              <option value="3"> Average</option>
              <option value="2">Poor</option>
              <option value="1"> Very Poor</option>
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

          {/* Use the reusable SubmitButton component with useFormStatus */}
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
              <strong>Success!</strong> Thank you for your feedback!
              <div className="submission-details">
                <p>Submitted by: {state.data.name}</p>
                <p>Rating: {state.data.rating}/5</p>
                <p>Time: {new Date(state.data.submittedAt).toLocaleString()}</p>
              </div>
            </div>
          )}

          {isPending && (
            <div className="pending-message">Processing your feedback...</div>
          )}
        </div>
      </div>

      <div className="feature-notes">
        <h4>Key Features:</h4>
        <div className="features-grid">
          <div className="feature-card">
            <h5> useActionState</h5>
            <ul>
              <li> Automatic pending state management</li>
              <li>Progressive enhancement friendly</li>
              <li>Built-in error handling</li>
              <li> Previous state available in action</li>
              <li> Works with form actions natively</li>
            </ul>
          </div>

          <div className="feature-card">
            <h5>useFormStatus</h5>
            <ul>
              <li> Read form status from child components</li>
              <li>No prop drilling needed</li>
              <li> Must be called inside {"<form>"}</li>
              <li> Perfect for reusable form components</li>
              <li> Access pending, data, method, action</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
