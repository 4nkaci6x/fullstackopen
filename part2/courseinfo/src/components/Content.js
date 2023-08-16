import Part from './Part';
import './Content.css';

const Content = ({ course }) => {
  return (
    <div>
      <ul>
        {course.parts.map(part => (
          <li key={part.id}>
            <Part part={part} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
