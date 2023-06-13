import { lazy, Suspense, useState } from "react";

import Login from "./Login/Login";
import classes from "./Authentication.module.css";

// The Signup page is not always used by users and it internally uses the Validation component
// which is rather complex and includes thirdy-party package like reac-icons. That said, it makes sense to
// lazy-load this component in order to keep the bundle lean.
const Signup = lazy(() => import("./Signup/Signup"));

function Authentication() {
  const [mode, setMode] = useState("login");

  function switchAuthModeHandler() {
    setMode((prevMode) => (prevMode === "login" ? "signup" : "login"));
  }

  let authElement = <Login />;
  let switchBtnCaption = "Create a new account";

  if (mode !== "login") {
    authElement = <Signup />;

    switchBtnCaption = "Login instead";
  }

  return (
    <div className={classes.auth}>
      <h1>You must authenticate yourself first!</h1>
      <Suspense fallback={<p>Loading...</p>}>{authElement}</Suspense>
      <button className={classes.btn} onClick={switchAuthModeHandler}>
        {switchBtnCaption}
      </button>
    </div>
  );
}

export default Authentication;
