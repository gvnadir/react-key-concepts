import { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function submitFormHandler(event) {
    event.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid email address entered!");
    }
  }

  function changeInputHandler(event) {
    setEmail(event.target.value);
    setError(null);
  }

  const displayError = error && <div style={{ color: "red" }}>{error}</div>;

  return (
    <div className="container">
      <form onSubmit={submitFormHandler}>
        <label htmlFor="email">Your email</label>
        <input type="text" id="email" onChange={changeInputHandler}></input>
        <button>Submit</button>
        {displayError}
      </form>
    </div>
  );
}

export default EmailForm;
