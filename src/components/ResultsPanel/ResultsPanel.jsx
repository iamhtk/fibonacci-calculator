import './ResultsPanel.css'

function ResultsPanel({ results, hasGenerated, itemCount }) {
  return (
    <div className="results-panel">
      <div className="results-header">
        <h2 className="results-title">Results</h2>
        {hasGenerated && (
          <div className="results-count">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{itemCount} items generated</span>
          </div>
        )}
      </div>
      
      {!hasGenerated ? (
        <div className="results-empty">
          <div className="empty-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8V24M8 16H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="empty-title">Results will appear here</h3>
          <p className="empty-description">
            Set your parameters and click "Generate Sequence" to see the Fibonacci results
          </p>
        </div>
      ) : (
        <div className="results-grid">
          {results.map((result, index) => (
            <div
              key={index}
              className="result-item result-number"
            >
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ResultsPanel

