import PropTypes from "prop-types";
import "./SpreadingPropButton.css";

const SpreadingPropButton = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

SpreadingPropButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpreadingPropButton;
