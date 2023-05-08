export default function App() {
  return (
    <div>
      <form className="new-item-form">
        <label>
          New item
          <br></br>
          <input type="text"></input>
        </label>
        <button className="btn">Add</button>
      </form>
      <h1>Todo list</h1>
      <ul>
        <li>
          <input type="checkbox"></input>
          <text>Item 1</text>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </div>
  );
}
