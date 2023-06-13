import { lazy, Suspense, useState } from "react";

// Since resetting a password may involve quite a bit of code and logic, only loading that code
// when it's really needed makes sense, especially since most users will not need that feature for most of their visits.
const ResetPassword = lazy(() => import("./ResetPassword"));

function Login() {
  const [isResetting, setIsResetting] = useState();

  function loginHandler(event) {
    event.preventDefault();
  }

  function startResetPasswordHandler() {
    setIsResetting(true);
  }

  function finishResetPasswordHandler() {
    setIsResetting(false);
  }

  return (
    <>
      <form onSubmit={loginHandler}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <button className="main-btn">Login</button>
      </form>
      <button className="alt-btn" onClick={startResetPasswordHandler}>
        Reset password
      </button>
      <Suspense fallback={<p>Loading...</p>}>
        {isResetting && <ResetPassword onFinish={finishResetPasswordHandler} />}
      </Suspense>
    </>
  );
}

export default Login;
