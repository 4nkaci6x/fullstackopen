import './Total.css';

const Total = ({ course }) => {
  const total = course.parts.reduce((acc, current) => {
    return acc + current.exercises;
  }, 0);
  return (
    <div>
      <p className='total'>total of {total} exercises</p>
    </div>
  );
};

export default Total;
