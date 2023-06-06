import { useState } from "react";

function Calculator() {
  const [enteredNumber, setEnteredNumber] = useState({
    first: 0,
    second: 0,
  });
  const [operation, setOperation] = useState("sum");
  let result = 0;

  const { first, second } = enteredNumber;

  function changeFirstNumberHandler(event) {
    setEnteredNumber((prevNumbers) => ({
      first: +event.target.value,
      second: prevNumbers.second,
    }));
  }

  function changeSecondNumberHandler(event) {
    setEnteredNumber((prevNumbers) => ({
      first: prevNumbers.first,
      second: +event.target.value,
    }));
  }

  function changeSignHandler(event) {
    setOperation(event.target.value);
  }

  if (operation === "sum") {
    if (first > 0 && second > 0) {
      result = first + second;
    }
  }
  if (operation === "sub") {
    if (first > 0 && second > 0) {
      result = first - second;
    }
  }
  if (operation === "mul") {
    if (first > 0 && second > 0) {
      result = first * second;
    }
  }
  if (operation === "div") {
    if (first > 0 && second > 0) {
      result = first / second;
    }
  }

  return (
    <div>
      <input type="number" onBlur={changeFirstNumberHandler} />
      <select id="select" onChange={changeSignHandler}>
        <option value="sum">+</option>
        <option value="sub">-</option>
        <option value="mul">*</option>
        <option value="div">/</option>
      </select>
      <input type="number" onBlur={changeSecondNumberHandler} /> = {result}
    </div>
  );
}

export default Calculator;
