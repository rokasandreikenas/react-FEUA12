import PropTypes from "prop-types";

const VacationBox = ({ name, count }) => {
  const getDaysBackgroundColor = () => {
    if (count === 0) {
      return "blue";
    } else if (count <= 0) {
      return "red";
    } else {
      return "green";
    }
  };

  return (
    <div style={{ background: "grey", width: 100, padding: 24 }}>
      {name && <h3>{name}</h3>}
      <div
        style={{
          width: 50,
          height: 50,
          backgroundColor: getDaysBackgroundColor(),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 24,
        }}
      >
        {count}
      </div>
      {count > 10 && "Oho, turi daug atostogų, gal laikas pailsėti? :)"}
    </div>
  );
};

VacationBox.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number.isRequired,
};

export default VacationBox;
