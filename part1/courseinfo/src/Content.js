import Part from './Part';

const Content = ({ parts, exercises }) => {
  return (
    <div>
      <Part partName={parts[0]} numOfExercises={exercises[0]} />
      <Part partName={parts[1]} numOfExercises={exercises[1]} />
      <Part partName={parts[2]} numOfExercises={exercises[2]} />
    </div>
  );
};

export default Content;
