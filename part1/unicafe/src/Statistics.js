const Statistics = ({ good, neutral, bad, all }) => {
  if (!all) {
    return <p>No feedback given</p>;
  } else {
    return (
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {(good * 1 + neutral * 0 + bad * -1) / all}</p>
        <p>positive {(good / all) * 100} %</p>
      </div>
    );
  }
};

export default Statistics;
