import { useState } from 'react'

const MAX_LENGTH = 2000

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState('')

  function submit(event) {
    event.preventDefault()
    const question = value.trim()
    if (!question || disabled) return
    onSend(question)
    setValue('')
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      submit(event)
    }
  }

  return (
    <form className="composer" onSubmit={submit}>
      <textarea
        className="composer__input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask a clinical question…"
        maxLength={MAX_LENGTH}
        rows={2}
        disabled={disabled}
      />
      <button type="submit" className="composer__send" disabled={disabled || !value.trim()}>
        Send
      </button>
    </form>
  )
}
