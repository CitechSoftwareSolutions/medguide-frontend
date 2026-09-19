/** Client for the backend's question-answering endpoint. */

const ASK_URL = '/api/v1/agent/ask'

/** An error the backend reported through its `{error, message}` envelope. */
export class ApiError extends Error {
  constructor(code, message, status) {
    super(message)
    this.name = 'ApiError'
    this.code = code
    this.status = status
  }
}

/** Human-readable text for the error codes the ask route can return. */
function friendlyMessage(code, message) {
  switch (code) {
    case 'knowledge_base_empty':
      return 'The knowledge base is empty, so there is nothing to answer from yet. Index a document first.'
    case 'agent_unavailable':
      return 'The assistant is unavailable right now. Check that ANTHROPIC_API_KEY is set on the backend.'
    default:
      return message || 'Something went wrong while answering.'
  }
}

/**
 * Ask one question.
 *
 * Omitting `sessionId` is how a new conversation is started: the server mints a
 * fresh id and returns it, and sending that id back continues the same memory.
 * The request model forbids extra keys, so the field is left out entirely
 * rather than sent as null.
 */
export async function askQuestion(question, sessionId) {
  const body = { question }
  if (sessionId) body.session_id = sessionId

  let response
  try {
    response = await fetch(ASK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch {
    throw new ApiError('network_error', 'Could not reach the backend. Is it running on port 8000?', 0)
  }

  const payload = await response.json().catch(() => null)

  if (!response.ok) {
    const code = payload?.error ?? 'unknown_error'
    throw new ApiError(code, friendlyMessage(code, payload?.message), response.status)
  }

  return payload.data
}
