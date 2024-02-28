/* eslint-disable react/prop-types */
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <h2>{props.title}</h2>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Card;
