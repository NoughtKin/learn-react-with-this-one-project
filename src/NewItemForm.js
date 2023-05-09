import { useState } from "react";

export function NewItemForm({ onSubmit }) {
  const [item, setItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (item === "") return;

    onSubmit(item);

    setItem("");
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <label htmlFor="item">New item</label>
      <br></br>
      <input
        type="text"
        id="item"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      ></input>
      <button className="btn">Add</button>
    </form>
  );
}
