import React from 'react'
import './ResultTable.css'
const ResultTable = (props) => {
  return (
    <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item)=>
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{Math.round(item.savingsEndOfYear)}</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
          )}
        </tbody>
      </table>
  )
}

export default ResultTable