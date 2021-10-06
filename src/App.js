import "./styles/scss/App.scss";
import money from "./assets/money.png";
import Category from "./Views/Category/Category";
import Income from "./Views/Income/Income";

const App = () => {
  return (
    <>
      <header className="wrapper">
        <h1>
          Budget Planner
          <span>
            <img className="logo" src={money} alt="wallet" />
          </span>
        </h1>
      </header>
      <main className="wrapper">
        <Income />
        <Category />
        <div className="pieChart"></div>
      </main>
    </>
  );
};

export default App;
