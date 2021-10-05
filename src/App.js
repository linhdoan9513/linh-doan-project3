import "./App.css";
import money from "./assets/money.png";

import Category from "./Views/Category/Category";
import Income from "./Views/Income/Income";

const App = () => {
  return (
    <>
      <header>
        <h1>
          <span>
            <img className="logo" src={money} alt="wallet" />
          </span>
          Budget Planner
        </h1>
      </header>
      <main>
        <Category />
        <Income />
      </main>
    </>
  );
};

export default App;
