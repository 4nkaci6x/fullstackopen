import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad, all }) => {
  if (!all) {
    return <p>No feedback given</p>;
  } else {
    return (
      <div>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={all} />
        <StatisticLine
          text='average'
          value={(good * 1 + neutral * 0 + bad * -1) / all}
        />
        <StatisticLine text='positive' value={(good / all) * 100 + ' %'} />
      </div>
    );
  }
};

export default Statistics;
