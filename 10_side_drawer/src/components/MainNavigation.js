import SideDrawer from "./SideDrawer";
import classes from "./MainNavigation.module.css";
import { useState } from "react";

function MainNavigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function openDrawerHandler() {
    setIsDrawerOpen(true);
  }

  function closeDrawerHandler() {
    setIsDrawerOpen(false);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>Demo App</h1>
        <button className={classes.btn} onClick={openDrawerHandler}>
          <div />
          <div />
          <div />
        </button>
      </header>
      {isDrawerOpen && <SideDrawer onDrawerClose={closeDrawerHandler} />}
    </>
  );
}

export default MainNavigation;
