export default function App() {
  return (
    <div>
      <form className="new-item-form">
        <label htmlFor="item">New item</label>
        <br></br>
        <input type="text" id="item"></input>
        <button className="btn">Add</button>
      </form>
      <h1>Todo list</h1>
      <ul>
        <li>
          <input type="checkbox"></input>
          <label>Item 1</label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </div>
  );
}
