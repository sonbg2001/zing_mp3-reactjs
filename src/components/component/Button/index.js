import './Button.scss'
function Button({ children }) {
  return <button tabIndex="0">{children}</button>;
}

export default Button;
