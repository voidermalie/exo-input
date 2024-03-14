import './Button.css'

const Button = ({name, type, onClick}) => {
  return (
    <>
        <button className={type} onClick={onClick}>{name}</button>
    </>
  )
}

export default Button
