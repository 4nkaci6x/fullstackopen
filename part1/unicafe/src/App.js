import { useState } from 'react';
import Statistics from './Statistics';
import Button from './Button';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const display = () => {
    if (good + neutral + bad > 0) {
      return <Statistics good={good} neutral={neutral} bad={bad} />;
    } else {
      return <p>no feedback given</p>;
    }
  };

  return (
    <div>
      <h2>give feedback</h2>
      <br />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <br />
      <h2>statistics</h2>
      {display()}
    </div>
  );
};

export default App;
