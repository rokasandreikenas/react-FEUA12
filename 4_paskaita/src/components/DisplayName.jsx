import PropTypes from "prop-types";

const DisplayName = ({ name }) => {
  return (
    <div>
      {name} {name.length <= 5 ? "is short name" : "is long name"}
    </div>
  );
};

DisplayName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DisplayName;
