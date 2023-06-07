import { useState } from "react";

function FeedbackForm() {
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState();
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();
    checkError();
  }

  function addEmailHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function addPasswordHandler(event) {
    setEnteredPassword(event.target.value);
  }

  function checkError() {
    if (!enteredEmail || !enteredEmail.includes("@")) {
      setEmailIsInvalid(true);
    }
    if (!enteredPassword || enteredPassword.trim().length < 6) {
      setPasswordIsInvalid(true);
    }
  }

  return (
    <div className="container">
      <form onSubmit={submitFormHandler}>
        <label className={emailIsInvalid ? "invalid" : null} htmlFor="email">
          Your email
        </label>
        <input
          className={emailIsInvalid ? "invalid" : null}
          type="email"
          onBlur={addEmailHandler}
        />
        <label
          className={passwordIsInvalid ? "invalid" : null}
          htmlFor="password"
        >
          Your password
        </label>
        <input
          className={passwordIsInvalid ? "invalid" : null}
          type="password"
          onBlur={addPasswordHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
