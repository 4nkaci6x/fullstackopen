import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={all} />

          <StatisticLine
            text='average'
            value={((good * 1 + neutral * 0 + bad * -1) / all).toFixed(1)}
          />

          <StatisticLine
            text='positive'
            value={(((1.0 * good) / all) * 100).toFixed(1) + ' %'}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
