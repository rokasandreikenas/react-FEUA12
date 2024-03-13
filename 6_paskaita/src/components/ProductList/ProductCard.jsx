import PropTypes from "prop-types";

const ProductCard = ({ product, disabled, onCopy, onDelete }) => {
  return <div disabled={disabled}>{product.name}</div>;
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  onCopy: PropTypes.func,
  onDelete: PropTypes.func,
};
export default ProductCard;
