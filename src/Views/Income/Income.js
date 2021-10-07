import IncomeList from "./IncomeList";

//Receive income as props from App and passed to children components
//Income Component as the top Parent of Income category
//Generate IncomeList as direct child component and pass expense object aka firebase data

const Income = ({ user, income }) => {
  return (
    <section className="incomeSection">
      <h2>Income</h2>
      <IncomeList user={user} income={income} />
    </section>
  );
};

export default Income;
