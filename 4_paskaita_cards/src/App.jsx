import ProductCard from "./components/ProductCard/ProductCard";
import "./App.css";
const App = () => {
  const products = [
    {
      id: 1,
      title: "Iphone XR",
      price: 999,
      color: "red",
      image:
        "https://wefix.co.za/cdn/shop/products/iPhone-XR-Black_9450f19b-803f-432d-8c43-2c312dd9ea50.png?v=1701412353",
    },
    {
      id: 2,
      title: "Iphone XS",
      price: 1099,
      color: "black",
      image:
        "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-xs-max/iphone-xs-max-silver.jpg",
    },
    {
      id: 3,
      title: "Samsung 20",
      price: 799,
      color: "blue",
      image:
        "https://img.merkandi.com/imgcache/resized/images/offer/2021/05/21/samsung-s20-5g-bleu-1-1621589588.jpg",
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default App;
