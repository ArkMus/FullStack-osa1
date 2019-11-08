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
  return (a / b) * 100
}

const Statistics = ({ good, neutral, bad }) => {
  const cA = countAll(good, neutral, bad)
  const aR = averageRate(good, bad, countAll(good, neutral, bad))
  const aP = averagePos(good, countAll(good, neutral, bad))

  if(cA === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <div>
    <h1>statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {cA}</p>
    <p>average {aR}</p>
    <p>positive {aP}%</p>
  </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>
        good
      </button>

      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>

      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>

      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)