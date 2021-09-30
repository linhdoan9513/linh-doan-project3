import "./App.css";
import Category from "./Views/Category";
import Item from "./Views/Item";

const App = () => {
  return (
    <div className="App">
      <h1>Budget Tracker</h1>
      <Category />
      <Item />
    </div>
  );
};

export default App;
