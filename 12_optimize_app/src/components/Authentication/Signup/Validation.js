import { FaCheck } from "react-icons/fa";

import classes from "./Validation.module.css";
import { memo, useMemo } from "react";

const numberRegex = /\d/;
const specCharsRegex = /[ `!@#$%^&*()_+\-={};':"\\|,.<>\/?~]/;

function Validation({ email, confirmEmail, password }) {
  console.log("Evaluating <Validation /> component.");
  const emailsAreValid = email.includes("@") && email === confirmEmail;

  // Since the password validation involves various regular expressions, it makes sense
  // avoiding unnecessary code execution if the password prop doesn't change.
  // This can be achieved using useMemo().
  const passwordValidityData = useMemo(() => {
    const pwHasMinLength = password.length >= 8;
    const pwHasMinSpecChars = specCharsRegex.test(password);
    const pwHasMinNumbers = numberRegex.test(password);
    console.log("Validated password.");

    return {
      length: pwHasMinLength,
      specChars: pwHasMinSpecChars,
      numbers: pwHasMinNumbers,
    };
  }, [password]);

  return (
    <div className={classes.validation}>
      <section>
        <h2>Email</h2>
        <ul>
          <li className={emailsAreValid ? classes.valid : ""}>
            <span className={classes.icon}>
              {emailsAreValid && <FaCheck />}
            </span>
            <span>Valid email and equal to confirmation email</span>
          </li>
        </ul>
      </section>
      <section>
        <h2>Password</h2>
        <ul>
          <li className={passwordValidityData.length ? classes.valid : ""}>
            <span className={classes.icon}>
              {passwordValidityData.length && <FaCheck />}
            </span>
            <span>At least 8 characters long</span>
          </li>
          <li className={passwordValidityData.numbers ? classes.valid : ""}>
            <span className={classes.icon}>
              {passwordValidityData.numbers && <FaCheck />}
            </span>
            <span>Contains at least one number</span>
          </li>
          <li className={passwordValidityData.specChars ? classes.valid : ""}>
            <span className={classes.icon}>
              {passwordValidityData.specChars && <FaCheck />}
            </span>
            <span>Contains at least one special character</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

// When the "More Information" button in the parent component is clicked, the Validation component
// is re-evaluated even if no props changed. Using memo we can avoid this behaviour.
export default memo(Validation);
