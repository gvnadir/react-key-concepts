import classes from "./SideDrawer.module.css";
import { createPortal } from "react-dom";

function SideDrawer({ onDrawerClose }) {
  return createPortal(
    <>
      <div className={classes.backdrop} onClick={onDrawerClose} />
      <aside className={classes.drawer}>
        <nav>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/products">All Products</a>
            </li>
            <li>
              <a href="/profile">Your Profile</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>,
    document.getElementById("drawer")
  );
}

export default SideDrawer;
