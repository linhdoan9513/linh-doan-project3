import "./App.css";

import Category from "./Views/Category/Category";
import Income from "./Views/Income/Income";

const App = () => {
  return (
    <>
      <h1>Budget Tracker</h1>
      <main>
        <Category />
        <Income />
      </main>
    </>
  );
};

export default App;
