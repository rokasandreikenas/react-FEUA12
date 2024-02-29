/* eslint-disable react/prop-types */
const Hero = ({ title, subtitle, color }) => {
  return (
    <div style={{ backgroundColor: color, padding: "1rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Hero;
