import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const ProductList = ({ products, ...props }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} {...props} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
