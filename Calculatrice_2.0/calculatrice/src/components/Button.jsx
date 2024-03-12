import './Button.css';

const Button = ({ name, type, handleClick }) => {
const buttonClasses = `button ${type}`;
  return (
    <button onClick={handleClick} className={buttonClasses}>
      {name}
    </button>
  );
};

export default Button;
