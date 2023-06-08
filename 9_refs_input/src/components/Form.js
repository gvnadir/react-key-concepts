import { useRef } from "react";

function Form() {
  const inputRef = useRef();
  const selectRef = useRef();

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log("Entered Name: ", inputRef.current.value);
    console.log("Selected Program: ", selectRef.current.value);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={inputRef} />
      </div>
      <div className="form-control">
        <label htmlFor="program">Choose your program</label>
        <select id="program" ref={selectRef}>
          <option value="basics">The Basics</option>
          <option value="advanced">Advanced Concepts</option>
          <option value="mastery">Mastery</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
