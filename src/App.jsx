import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"

function App() {
  const [investmentParameters, setInvestmentParameters] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const { initialInvestment, annualInvestment, expectedReturn, duration } = investmentParameters;
  
  const handleInputChange = (field) => {
    const { id, value } = field;

    setInvestmentParameters((prevParams) => ({
      ...prevParams,
      [id]: +value
    }));
  }

  return (
    <>
    <Header />
    <main>
      <section id="user-input">
        <div className="input-group">
          <UserInput label="Initial Investment" id="initialInvestment" value={initialInvestment} onChange={handleInputChange} />
          <UserInput label="Annual Investment" id="annualInvestment" value={annualInvestment} onChange={handleInputChange} />
        </div>

        <div className="input-group">
          <UserInput label="Expected Return %" id="expectedReturn" value={expectedReturn} onChange={handleInputChange} />
          <UserInput label="Duration" id="duration" value={duration} onChange={handleInputChange} />
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
