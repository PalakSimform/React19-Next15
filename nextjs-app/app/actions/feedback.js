'use server'

let feedbackSubmissions = []

export async function submitFeedback(previousState, formData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const rating = formData.get('rating')
  const message = formData.get('message')

  await new Promise(resolve => setTimeout(resolve, 2000))

  if (!name || name.length < 2) {
    return {
      success: false,
      error: 'Name must be at least 2 characters',
      data: null,
    }
  }

  if (!email || !email.includes('@')) {
    return {
      success: false,
      error: 'Please provide a valid email',
      data: null,
    }
  }

  if (!message || message.length < 10) {
    return {
      success: false,
      error: 'Message must be at least 10 characters',
      data: null,
    }
  }

  if (Math.random() < 0.1) {
    return {
      success: false,
      error: 'Server error occurred. Please try again.',
      data: null,
    }
  }

  const feedback = {
    id: Date.now(),
    name,
    email,
    rating: parseInt(rating) || 5,
    message,
    submittedAt: new Date().toISOString(),
  }

  feedbackSubmissions.push(feedback)

  return {
    success: true,
    error: null,
    data: feedback,
  }
}
