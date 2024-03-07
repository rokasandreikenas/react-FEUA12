import PropTypes from "prop-types";

const Hero = ({ title, subtitle }) => {
  return (
    <div style={{ background: "red", padding: 24 }}>
      {title && <h1>{title}</h1>}
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;
