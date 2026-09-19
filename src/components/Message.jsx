import { Children } from 'react'
import Markdown from 'react-markdown'

import Citations from './Citations'

/** How each confidence level is labelled. 'abstained' is a normal answer, not
 *  a failure: the agent declined rather than inventing something. */
const CONFIDENCE_LABELS = {
  high: 'High confidence',
  medium: 'Medium confidence',
  low: 'Low confidence',
  abstained: 'Not in knowledge base',
}

const CITATION_PATTERN = /\[(\d+)\]/g

/**
 * Turn the answer's [1][2] markers into small chips.
 *
 * Splitting on a capturing group alternates plain text and captured markers,
 * so the odd indexes are exactly the numbers. Only string children are
 * touched; a marker nested inside bold or a link stays as written.
 */
function withCitationChips(children) {
  return Children.map(children, (child) => {
    if (typeof child !== 'string') return child

    return child
      .split(CITATION_PATTERN)
      .map((part, index) =>
        index % 2 === 1 ? (
          <sup key={index} className="cite-marker">
            {part}
          </sup>
        ) : (
          part
        ),
      )
  })
}

const MARKDOWN_COMPONENTS = {
  p: ({ children }) => <p>{withCitationChips(children)}</p>,
  li: ({ children }) => <li>{withCitationChips(children)}</li>,
}

export default function Message({ message }) {
  if (message.role === 'user') {
    return <div className="bubble bubble--user">{message.text}</div>
  }

  return (
    <div className={`bubble bubble--assistant${message.isError ? ' bubble--error' : ''}`}>
      {/* The agent answers in markdown, so headings, bold and bullet lists are
          rendered rather than shown as raw ** and - characters. */}
      <div className="markdown">
        <Markdown components={MARKDOWN_COMPONENTS}>{message.text}</Markdown>
      </div>

      {message.confidence && (
        <span className={`badge badge--${message.confidence}`}>
          {CONFIDENCE_LABELS[message.confidence]}
        </span>
      )}

      <Citations citations={message.citations} />
    </div>
  )
}
