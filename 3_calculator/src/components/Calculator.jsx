import { useState } from "react";

function Calculator({ operation }) {
  const [enteredNumber, setEnteredNumber] = useState({
    first: 0,
    second: 0,
  });
  let sign = "";
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

  if (operation === "sum") {
    sign = " + ";
    if (first > 0 && second > 0) {
      result = first + second;
    }
  } else if (operation === "sub") {
    sign = " - ";
    if (first > 0 && second > 0) {
      result = first - second;
    }
  } else if (operation === "mul") {
    sign = " * ";
    if (first > 0 && second > 0) {
      result = first * second;
    }
  } else {
    sign = " / ";
    if (first > 0 && second > 0) {
      result = first / second;
    }
  }

  return (
    <div>
      <input type="number" onBlur={changeFirstNumberHandler} />
      {sign}
      <input type="number" onBlur={changeSecondNumberHandler} /> = {result}
    </div>
  );
}

export default Calculator;
