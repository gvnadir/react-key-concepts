import { useParams } from "react-router-dom";
import products from "../data/products";

function Product() {
  const params = useParams();
  let product = products.find((el) => el.id === params.id);

  return (
    <>
      <h1>{product.title}</h1>
      <p id="product-price">{product.price}</p>
      <p>{product.description}</p>
    </>
  );
}

export default Product;
