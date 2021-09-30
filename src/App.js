import "./App.css";
import Category from "./Views/Category";
import BudgetCalendar from "./Views/BudgetCalendar";

const App = () => {
  return (
    <div className="App">
      <h1>Budget Tracker</h1>
      {/* <BudgetCalendar /> */}
      <Category />
    </div>
  );
};

export default App;
