import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>statistics</h1>

      <p>
        good {good} <br />
        neutral {neutral} <br />
        bad {bad} <br />
        all {good + neutral + bad} <br />
        average {(good * 1 + neutral * 0 + bad * -1) /
          (good + neutral + bad)}{' '}
        <br />
        positive {((good * 1) / (good + neutral + bad)) * 100} %
      </p>
    </div>
  );
};

export default App;
