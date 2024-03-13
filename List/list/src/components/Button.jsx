import './Button.css';

const Button = ({ name, onClick, type }) => {
    return (
        <button onClick={onClick} className={type}>{name}</button>
    )
}

export default Button;
