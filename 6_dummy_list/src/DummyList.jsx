import { useState } from "react";

const PRODUCT_LIST = [
  {
    id: "p1",
    title: "React - The Complete Guide",
    price: "$19.99",
  },
  {
    id: "p2",
    title: "Stylish Chair",
    price: "$329.99",
  },
  {
    id: "p3",
    title: "Ergonomic Chair",
    price: "$269.99",
  },
  {
    id: "p4",
    title: "History Video Game Collection",
    price: "$99.99",
  },
];

function DummyList() {
  const [product, setProduct] = useState(PRODUCT_LIST);

  const listItems = product.map((item) => (
    <li key={item.id}>{`${item.title} (${item.price})`}</li>
  ));

  function addProductHandler() {
    setProduct((prevItems) => [
      ...prevItems,
      {
        id: Date.now().toString(),
        title: "Another new product",
        price: "$15.99",
      },
    ]);
  }

  return (
    <div className="container">
      <button onClick={addProductHandler}>Add Product</button>
      <ul>{listItems}</ul>
    </div>
  );
}

export default DummyList;
