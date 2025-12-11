import { useState } from 'react'
import Header from './components/Header/Header'
import ConfigurationPanel from './components/ConfigurationPanel/ConfigurationPanel'
import ResultsPanel from './components/ResultsPanel/ResultsPanel'
import InfoSection from './components/InfoSection/InfoSection'
import { generateFibonacci } from './utils/fibonacci'
import './App.css'

function App() {
  const [maxNumber, setMaxNumber] = useState('')
  const [f0, setF0] = useState(0)
  const [f1, setF1] = useState(1)
  const [results, setResults] = useState([])
  const [hasGenerated, setHasGenerated] = useState(false)

  const handleMaxNumberChange = (value) => {
    // Remove leading zeros
    let cleanedValue = value.replace(/^0+/, '') || '0'
    
    // Allow empty string for better UX while typing
    if (cleanedValue === '' || value === '') {
      setMaxNumber('')
      return
    }
    
    const num = parseInt(cleanedValue, 10)
    if (!isNaN(num) && num >= 0 && num <= 10000) {
      setMaxNumber(num)
    }
  }

  const handleF0Change = (value) => {
    // Allow empty string for better UX while typing
    if (value === '') {
      setF0('')
      return
    }
    
    // Remove leading zeros
    let cleanedValue = value.replace(/^0+/, '') || '0'
    
    const num = parseInt(cleanedValue, 10)
    if (!isNaN(num) && num >= -10000 && num <= 10000) {
      setF0(num)
    }
  }

  const handleF1Change = (value) => {
    // Allow empty string for better UX while typing
    if (value === '') {
      setF1('')
      return
    }
    
    // Remove leading zeros
    let cleanedValue = value.replace(/^0+/, '') || '0'
    
    const num = parseInt(cleanedValue, 10)
    if (!isNaN(num) && num >= -10000 && num <= 10000) {
      setF1(num)
    }
  }

  const handleGenerate = () => {
    if (maxNumber === '' || maxNumber === null || maxNumber === undefined || maxNumber === 0) {
      return
    }
    const num = typeof maxNumber === 'string' ? parseInt(maxNumber, 10) : maxNumber
    if (isNaN(num) || num <= 0) {
      return
    }
    const sequence = generateFibonacci(num, f0, f1)
    setResults(sequence)
    setHasGenerated(true)
  }

  const handleReset = () => {
    setMaxNumber('')
    setF0(0)
    setF1(1)
    setResults([])
    setHasGenerated(false)
  }

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <div className="left-column">
          <ConfigurationPanel
            maxNumber={maxNumber}
            f0={f0}
            f1={f1}
            onMaxNumberChange={handleMaxNumberChange}
            onF0Change={handleF0Change}
            onF1Change={handleF1Change}
            onGenerate={handleGenerate}
            onReset={handleReset}
          />
          <InfoSection />
        </div>
        <div className="right-column">
          <ResultsPanel
            results={results}
            hasGenerated={hasGenerated}
            itemCount={results.length}
          />
        </div>
      </div>
    </div>
  )
}

export default App

