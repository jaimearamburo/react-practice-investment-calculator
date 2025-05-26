import * as calcs from "../util/investment.js";

export default function Input({ investmentParameters, ...props }) {
  const { initialInvestment, 
    annualInvestment, 
    expectedReturn, 
    duration 
  } = investmentParameters;

  const annualData = calcs.calculateInvestmentResults({
    initialInvestment: Number(initialInvestment),
    annualInvestment: Number(annualInvestment),
    expectedReturn: Number(expectedReturn),
    duration: Number(duration),
  });

  const enhancedAnnualData = (() => {
    let totalInterest = 0;

    return annualData.map((yearData, index) => {
      totalInterest += yearData.interest;

      return {
        ...yearData,
        totalInterest: totalInterest,
        totalInvestedCapital: Number(initialInvestment) + (yearData.annualInvestment * (index + 1)),
      };
    });
  })();

  //console.log(enhancedAnnualData);

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
          {duration < 1 && (<tr>
            <td style={{textAlign: 'center', color: 'salmon'}} colSpan="5">Please enter a duration greater than 1.</td>
          </tr>)}
          {enhancedAnnualData.map((annualResult, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{calcs.formatter.format(annualResult.valueEndOfYear)}</td>
              <td>{calcs.formatter.format(annualResult.interest)}</td>
              <td>{calcs.formatter.format(annualResult.totalInterest)}</td>
              <td>{calcs.formatter.format(annualResult.totalInvestedCapital)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}