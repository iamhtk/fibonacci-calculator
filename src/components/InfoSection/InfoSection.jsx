import './InfoSection.css'

function InfoSection() {
  return (
    <div className="info-section">
      <h3 className="info-title">How Fibonacci Works</h3>
      <p className="info-description">
        Each number is the sum of the two preceding numbers. The formula is: <strong>f(n) = f(n-1) + f(n-2)</strong>
      </p>
      <div className="info-example">
        <p className="info-example-label">Example:</p>
        <p className="info-example-text">
          With defaults (0, 1): 0+1=1, 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13...
        </p>
      </div>
    </div>
  )
}

export default InfoSection

