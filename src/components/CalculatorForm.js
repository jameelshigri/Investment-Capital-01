import React, { useState } from "react";
import Button from "../UI/Button";
import "./CalculatorForm.css";
const CalculatorForm = (props) => {
  const [userInput, setUserInput] = useState({
    currentSavings: 0,
    yearlySavings: 0,
    expectedReturn: 0,
    duration: 0,
  });
  const handleCs = (e) => {
    setUserInput({
      ...userInput,
      currentSavings: e.target.value,
    });
  };
  const handleYs = (e) => {
    setUserInput({
      ...userInput,
      yearlySavings: e.target.value,
    });
  };
  const handleEr = (e) => {
    setUserInput({
      ...userInput,
      expectedReturn: e.target.value,
    });
  };
  const handleDuration = (e) => {
    setUserInput({
      ...userInput,
      duration: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onFromSubmit(userInput);
    // console.log(userInput);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={handleCs}
            required
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={handleYs}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={handleEr}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={handleDuration}
            required
          />
        </p>
      </div>
      <p className="actions">
        <Button type="reset" className="buttonAlt" name="Reset" />
        <Button type="submit" className="button" name="Calculate" />
      </p>
    </form>
  );
};

export default CalculatorForm;
