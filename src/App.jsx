import { useState } from 'react'

import { askQuestion } from './api/agentApi'
import ChatWindow from './components/ChatWindow'
import Sidebar from './components/Sidebar'

/** A blank chat. `sessionId` stays null until the first answer names one. */
function createSession() {
  return {
    key: crypto.randomUUID(),
    sessionId: null,
    title: 'New chat',
    messages: [],
    loading: false,
  }
}

function titleFrom(question) {
  const trimmed = question.trim()
  return trimmed.length > 40 ? `${trimmed.slice(0, 40)}…` : trimmed
}

export default function App() {
  const [sessions, setSessions] = useState(() => [createSession()])
  const [activeKey, setActiveKey] = useState(() => sessions[0].key)

  const activeSession = sessions.find((session) => session.key === activeKey)

  /** Apply `change` to one session, leaving the others untouched. */
  function updateSession(key, change) {
    setSessions((previous) =>
      previous.map((session) => (session.key === key ? { ...session, ...change(session) } : session)),
    )
  }

  function handleNewChat() {
    const session = createSession()
    setSessions((previous) => [session, ...previous])
    setActiveKey(session.key)
  }

  async function handleSend(question) {
    // Captured now, so a slow answer still lands in the chat that asked, even
    // if the user has switched to another one in the meantime.
    const { key, sessionId } = activeSession

    updateSession(key, (session) => ({
      loading: true,
      title: session.messages.length === 0 ? titleFrom(question) : session.title,
      messages: [...session.messages, { id: crypto.randomUUID(), role: 'user', text: question }],
    }))

    try {
      const data = await askQuestion(question, sessionId)
      updateSession(key, (session) => ({
        loading: false,
        sessionId: data.session_id,
        messages: [
          ...session.messages,
          {
            id: crypto.randomUUID(),
            role: 'assistant',
            text: data.answer,
            citations: data.citations,
            confidence: data.confidence,
          },
        ],
      }))
    } catch (error) {
      updateSession(key, (session) => ({
        loading: false,
        messages: [
          ...session.messages,
          { id: crypto.randomUUID(), role: 'assistant', text: error.message, isError: true },
        ],
      }))
    }
  }

  return (
    <div className="app">
      <Sidebar
        sessions={sessions}
        activeKey={activeKey}
        onSelect={setActiveKey}
        onNewChat={handleNewChat}
      />
      <ChatWindow session={activeSession} onSend={handleSend} />
    </div>
  )
}
