import "./styles/scss/App.scss";
import money from "./assets/money.png";
import Category from "./Views/Category/Category";
import Income from "./Views/Income/Income";

const App = () => {
  return (
    <>
      <header className="wrapper">
        <h1>
          <span>
            <img className="logo" src={money} alt="wallet" />
          </span>
          Budget Planner
        </h1>
      </header>
      <main className="wrapper">
        <Income />
        <Category />
      </main>
    </>
  );
};

export default App;
