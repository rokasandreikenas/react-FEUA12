import "./Button.css";

const Button = ({ secondary, children }) => {
  return (
    <button className={`button ${secondary ? "secondary" : ""}`}>
      {children}
    </button>
  );
};

export default Button;
