import { useState } from 'react'
import './App.css'

const App = () => {
  const tenureData = [12, 24, 36, 48]
  const [cost, setCost] = useState(0)
  const [interestRate, setInterestRate] = useState(10)
  const [processingFee, setProcessingFee] = useState(1)
  const [downPayment, setDownPayment] = useState(0)
  const [tenure, setTenure] = useState(12)
  const [emi, setEmi] = useState(0)
  const calculateEmi = downPayment => {
    if (!cost) return
    const loanAmount = cost - downPayment
    const rateOfInterest = interestRate / 100
    const noOfYears = tenure / 12

    const emi =
      (loanAmount * rateOfInterest * (1 + rateOfInterest) ** noOfYears) /
      ((1 + rateOfInterest) ** noOfYears - 1)
    return Number(emi).toFixed(0)
  }
  const updateEmi = e => {
    if (!cost) return
    const downPayment = Number(e.target.value)
    setDownPayment(downPayment.toFixed(0))
    // calculate emi
    const emi = calculateEmi(downPayment)
    setEmi(emi)
  }
  const updateDownPayment = e => {
    if (!cost) return
    const emi = Number(e.target.value)
    setEmi(emi.toFixed(0))
    // calculate downpayment
  }
  return (
    <div className='container'>
      <div className='input-wrapper'>
        <span>Total cost of assets </span>
        <input
          type='number'
          value={cost}
          onChange={e => setCost(e.target.value)}
          placeholder='Total cost of assets '
        />
      </div>
      <div className='input-wrapper'>
        <span>Interest Rate </span>
        <input
          type='text'
          value={interestRate}
          onChange={e => setInterestRate(e.target.value)}
          placeholder='Interest Rate  in % '
        />
      </div>
      <div className='input-wrapper'>
        <span>Processing fee </span>
        <input
          type='text'
          value={processingFee}
          onChange={e => setProcessingFee(e.target.value)}
          placeholder='processing fee in percent'
        />
      </div>
      <div className='input-wrapper'>
        <span>DownPayment </span>

        <input
          type='range'
          min={0}
          max={cost}
          value={downPayment}
          placeholder='range in % '
          onChange={e => updateDownPayment(e)}
        />
        <div className='lables'>
          <label>0%</label>
          <b>{emi}</b>
          <label>10%</label>
        </div>
      </div>
      <div className='input-wrapper'>
        <span>loans pre month </span>
        <input
          type='range'
          value={emi}
          min={calculateEmi(cost)}
          max={calculateEmi(0)}
          placeholder='range in % '
          onChange={e => updateEmi(e)}
          // onChange={e => setEmi(e.target.value)}
        />
        <div className='lables'>
          <label>{calculateEmi(cost)}</label>
          <b>{emi}</b>
          <label>{calculateEmi(0)}</label>
        </div>
      </div>
      <div className='input-wrapper'>
        <span>Select Tenure </span>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {tenureData.map(t => {
            return (
              <button
                className={`tenure ${tenure === t ? 'tenure_selected' : ''}`}
                onClick={() => setTenure(t)}
              >
                {t}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
