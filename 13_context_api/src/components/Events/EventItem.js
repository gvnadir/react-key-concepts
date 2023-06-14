import { useContext } from "react";
import classes from "./EventItem.module.css";
import CartContext from "../../store/cart-context";

function EventItem({ event }) {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const isInCart = cartItems.some((item) => item.id === event.id);
  let buttonCaption = "Add to Cart";
  let buttonAction = () => addToCart(event);

  if (isInCart) {
    buttonCaption = "Remove from Cart";
    buttonAction = () => removeFromCart(event.id);
  }

  return (
    <li className={classes.event}>
      <img src={event.image} alt={event.title} />
      <div className={classes.content}>
        <h2>{event.title}</h2>
        <p className={classes.price}>${event.price}</p>
        <p>{event.description}</p>
        <div className={classes.actions}>
          <button onClick={buttonAction}>{buttonCaption}</button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
