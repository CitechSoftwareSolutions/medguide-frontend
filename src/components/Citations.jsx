/** The sources behind an answer's [n] markers. */
export default function Citations({ citations }) {
  if (!citations || citations.length === 0) return null

  return (
    <details className="citations">
      <summary>Sources ({citations.length})</summary>
      <ul>
        {citations.map((citation) => (
          <li key={citation.marker}>
            <span className="citations__marker">[{citation.marker}]</span>
            <span className="citations__title">{citation.title}</span>
            <span className="citations__score">{citation.score.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </details>
  )
}
