import { Link } from "react-router-dom";
import products from "../data/products";

function ProductsList() {
  return (
    <>
      <h1>Our Products</h1>
      <ul id="products-list">
        {products.map((el) => {
          return (
            <li key={el.id}>
              <Link to={`/products/${el.id}`}>{el.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductsList;
