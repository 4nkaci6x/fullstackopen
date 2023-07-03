import Part from './Part';

const Content = ({ course }) => {
  return (
    <>
      <Part
        part={course.parts[0].name}
        numOfExercises={course.parts[0].exercises}
      />
      <Part
        part={course.parts[1].name}
        numOfExercises={course.parts[1].exercises}
      />
      <Part
        part={course.parts[2].name}
        numOfExercises={course.parts[2].exercises}
      />
    </>
  );
};

export default Content;
