import IncomeList from "./IncomeList";

//Receive income as props from App and passed to children components
//Income Component as the top Parent of Income category
//Generate IncomeList as direct child component and pass expense object aka firebase data

const Income = ({ income }) => {
  return (
    <section className="incomeSection">
      <h2>Income</h2>
      <IncomeList income={income} />
    </section>
  );
};

export default Income;
