import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  async function submitHandler(event) {
    event.preventDefault();
    // Todo: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com/posts (via a POST) request
    setIsSaving(true);
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title: enteredTitle }),
    });
    setIsSaving(false);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button>{isSaving ? "...Saving" : "Save"}</button>
    </form>
  );
}

export default NewPost;
