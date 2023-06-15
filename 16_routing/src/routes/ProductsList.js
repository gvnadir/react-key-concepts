import { Link } from "react-router-dom";
import products from "../data/products";

function ProductsList() {
  return (
    <main>
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
    </main>
  );
}

export default ProductsList;
