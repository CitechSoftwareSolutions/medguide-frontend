/** The chat list. Each entry is one backend session with its own memory. */
export default function Sidebar({ sessions, activeKey, onSelect, onNewChat }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__mark">✚</span>
        <span>Medical Knowledge Base</span>
      </div>

      <button type="button" className="sidebar__new" onClick={onNewChat}>
        + New chat
      </button>

      <nav className="sidebar__list">
        {sessions.map((session) => (
          <button
            key={session.key}
            type="button"
            className={`sidebar__item${session.key === activeKey ? ' sidebar__item--active' : ''}`}
            onClick={() => onSelect(session.key)}
          >
            <span className="sidebar__title">{session.title}</span>
            <span className="sidebar__meta">
              {session.sessionId ? `${session.messages.length} messages` : 'not started'}
            </span>
          </button>
        ))}
      </nav>

      <p className="sidebar__note">
        Chats live in this tab only. Reloading the page starts fresh.
      </p>
    </aside>
  )
}
