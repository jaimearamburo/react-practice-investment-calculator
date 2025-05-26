import * as calcs from "../util/investment.js";

export default function Input({ investmentParameters, ...props }) {
  const durationIsValid = investmentParameters.duration > 0;
  const annualData = calcs.calculateInvestmentResults(investmentParameters);

  // const enhancedAnnualData = annualData.reduce((acc, yearData, index) => {
  //   const totalInterest = (acc[index - 1]?.totalInterest || 0) + yearData.interest;
  //   const totalInvestedCapital =
  //     investmentParameters.initialInvestment +
  //     yearData.annualInvestment * (index + 1);

  //   acc.push({
  //     ...yearData,
  //     totalInterest,
  //     totalInvestedCapital,
  //   });

  //   return acc;
  // }, []);

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {!durationIsValid && (<tr>
            <td style={{textAlign: 'center', color: 'salmon'}} colSpan="5">Please enter a duration greater than 0.</td>
          </tr>)}
          {durationIsValid && annualData.map((annualResult, index) => {
            const totalInterest = 
              annualResult.valueEndOfYear -
              annualResult.annualInvestment * (index + 1) -
              investmentParameters.initialInvestment;

            const totalInvestedCapital =
              investmentParameters.initialInvestment +
              annualResult.annualInvestment * (index + 1);
            
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{calcs.formatter.format(annualResult.valueEndOfYear)}</td>
                <td>{calcs.formatter.format(annualResult.interest)}</td>
                <td>{calcs.formatter.format(totalInterest)}</td>
                <td>{calcs.formatter.format(totalInvestedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}