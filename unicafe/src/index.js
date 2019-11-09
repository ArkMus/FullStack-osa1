import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const countAll = (a, b, c) => {
  return (a + b + c)
}

const averageRate = (a, b, c) => {
  if(c === 0) {
    return 0
  }
  return ((a - b) / c)
}

const averagePos = function(a, b) {
  if (b === 0) {
    return 0
  } 
  return ((a / b) * 100) +"%"
}

const Statistics = ({ good, neutral, bad }) => {
  const cA = countAll(good, neutral, bad)
  const aR = averageRate(good, bad, countAll(good, neutral, bad))
  const aP = averagePos(good, countAll(good, neutral, bad))

  if(cA === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td><Statistic value={good}/></td>
          </tr>
          <tr>
            <td>neutral</td>
            <td><Statistic value={neutral}/></td>
          </tr>
          <tr>
            <td>bad</td>
            <td><Statistic value={bad}/></td>
          </tr>
          <tr>
            <td>all</td>
            <td><Statistic value={cA}/></td>
          </tr>
          <tr>
            <td>average</td>
            <td><Statistic value={aR}/></td>
          </tr>
          <tr>
            <td>positive</td>
            <td><Statistic value={aP}/></td>
          </tr>
        </tbody>
      </table>
  </div>
  )
}

const Statistic = (props) => {
  return (
    <div>
      <p>{props.value} </p>
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.clickHandler}>{props.text}</button>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => {
    setGood(good + 1)
  }

  const neutralHandler = () => {
    setNeutral(neutral + 1)
  }

  const badHandler = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button clickHandler={goodHandler} text="good"/>
      <Button clickHandler={neutralHandler} text="neutral"/>
      <Button clickHandler={badHandler} text="bad"/>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)