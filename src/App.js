import { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";

function App() {
  const [Data, setData] = useState([]);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results
    // console.log(userInput.currentSavings)
    let currentSavings = userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = userInput.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = userInput.expectedReturn / 100;
    const duration = userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setData(yearlyData);
    // console.log(yearlyData);
  };

  return (
    <div>
      <Header />
      <CalculatorForm onFromSubmit={calculateHandler} />
      <ResultTable data={Data} />
    </div>
  );
}

export default App;
