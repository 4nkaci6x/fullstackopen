import './Button.css';

const Button = ({ handleClick, text }) => {
  return (
    <div className='Button'>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default Button;
