import { sortItemsByDate } from "./CustomFunctions/sortItemsByDate";
import useGetIncome from "./CustomFunctions/useGetIncome";
import useGetExpense from "./CustomFunctions/useGetExpense";
import Summary from "./Summary";
import Expense from "./Expense/Expense";
import Income from "./Income/Income";

//Import getData function from firebaseModel to get allData from firebase database for both expense and income

const Main = ({ user }) => {
  const income = useGetIncome(user);
  const expense = useGetExpense(user);

  const sortedExpense = sortItemsByDate(expense);
  const sortedIncome = sortItemsByDate(income);

  return (
    <main className="wrapper">
      <Summary expense={sortedExpense} income={sortedIncome} />
      <div className="individualSection">
        <Income user={user} income={sortedIncome} />
        <Expense user={user} expense={sortedExpense} />
      </div>
    </main>
  );
};

export default Main;
