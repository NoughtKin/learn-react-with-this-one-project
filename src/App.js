function App() {
  return (
    <div className="new-item-form">
      <form className="new-item-row">
        <label htmlFor="item">New item</label>
        <br></br>
        <input id="item"></input>
        <button className="btn">Add</button>
      </form>
    </div>
  );
}

export default App;
