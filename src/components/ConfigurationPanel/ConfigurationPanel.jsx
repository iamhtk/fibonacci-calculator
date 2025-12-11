import './ConfigurationPanel.css'

function ConfigurationPanel({
  maxNumber,
  f0,
  f1,
  onMaxNumberChange,
  onF0Change,
  onF1Change,
  onGenerate,
  onReset
}) {
  return (
    <div className="configuration-panel">
      <div className="configuration-content">
        <h2 className="configuration-title">Configuration</h2>
        
        <div className="input-group">
          <label className="input-label">Maximum Number</label>
          <p className="input-description">Generate Fibonacci sequence up to this number</p>
          <input
            type="number"
            className="number-input"
            value={maxNumber === '' ? '' : maxNumber}
            onChange={(e) => {
              let value = e.target.value
              // Remove leading zeros immediately
              if (value.length > 1 && value.startsWith('0')) {
                value = value.replace(/^0+/, '') || '0'
                e.target.value = value
              }
              onMaxNumberChange(value)
            }}
            placeholder="Enter number..."
            min="0"
          />
        </div>

        <div className="starting-values-section">
          <h3 className="starting-values-title">Starting Values</h3>
          <p className="starting-values-description">Customize the first two numbers in the sequence</p>
          
          <div className="starting-values-inputs">
            <div className="starting-value-group">
              <label className="starting-value-label">f(0)</label>
              <input
                type="number"
                className="starting-value-input"
                value={f0 === '' ? '' : f0}
                onChange={(e) => {
                  let value = e.target.value
                  if (value.length > 1 && value.startsWith('0') && !value.startsWith('0.')) {
                    value = value.replace(/^0+/, '') || '0'
                    e.target.value = value
                  }
                  onF0Change(value)
                }}
                placeholder="0"
              />
            </div>
            <div className="starting-value-group">
              <label className="starting-value-label">f(1)</label>
              <input
                type="number"
                className="starting-value-input"
                value={f1 === '' ? '' : f1}
                onChange={(e) => {
                  let value = e.target.value
                  if (value.length > 1 && value.startsWith('0') && !value.startsWith('0.')) {
                    value = value.replace(/^0+/, '') || '0'
                    e.target.value = value
                  }
                  onF1Change(value)
                }}
                placeholder="1"
              />
            </div>
          </div>

          <div className="formula-box">
            <span className="formula-label">Formula:</span>
            <span className="formula-text">Next number = f(n-1) + f(n-2)</span>
          </div>
        </div>

        <div className="action-buttons">
          <button className="generate-button" onClick={onGenerate}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4L14 10L6 16V4Z" fill="currentColor"/>
            </svg>
            Generate Sequence
          </button>
          <button className="reset-button" onClick={onReset}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfigurationPanel

