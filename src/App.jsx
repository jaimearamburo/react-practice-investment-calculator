import { useState } from "react"
import Header from "./components/Header"
import Input from "./components/Input"
import Result from "./components/Result"

function App() {
  const [investmentParameters, setInvestmentParameters] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });

  const { initialInvestment, annualInvestment, expectedReturn, duration } = investmentParameters;
  
  const handleInputChange = (field) => {
    const { id, value } = field;

    setInvestmentParameters((prevParams) => ({
      ...prevParams,
      [id]: Number(value)
    }));
  }

  return (
    <>
    <Header />
    <main>
      <section id="user-input">
        <div className="input-group">
          <Input label="Initial Investment" id="initialInvestment" value={initialInvestment} onChange={handleInputChange} />
          <Input label="Annual Investment" id="annualInvestment" value={annualInvestment} onChange={handleInputChange} />
        </div>

        <div className="input-group">
          <Input label="Expected Return %" id="expectedReturn" value={expectedReturn} onChange={handleInputChange} />
          <Input label="Duration" id="duration" value={duration} onChange={handleInputChange} />
        </div>
      </section>

      <section>
        <Result investmentParameters={investmentParameters} />
      </section>
    </main>
    </>
  )
}

export default App
