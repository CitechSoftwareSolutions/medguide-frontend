import { useEffect, useRef } from 'react'

import ChatInput from './ChatInput'
import Message from './Message'

export default function ChatWindow({ session, onSend }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [session.messages.length, session.loading])

  return (
    <main className="chat">
      <header className="chat__header">
        <h1 className="chat__heading">{session.title}</h1>
        <span className="chat__session">
          {session.sessionId ? `session ${session.sessionId.slice(0, 8)}` : 'new session'}
        </span>
      </header>

      <div className="chat__messages">
        {session.messages.length === 0 && !session.loading && (
          <div className="chat__empty">
            <h2>Ask a clinical question</h2>
            <p>Answers are drawn from the indexed knowledge base, with sources attached.</p>
          </div>
        )}

        {session.messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}

        {session.loading && (
          <div className="bubble bubble--assistant bubble--thinking">
            Thinking<span className="dots">…</span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <ChatInput onSend={onSend} disabled={session.loading} />
    </main>
  )
}
