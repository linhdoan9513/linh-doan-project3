import IncomeList from "./IncomeList";

const Income = ({ income }) => {
  return (
    <section className="incomeSection">
      <h2>Income</h2>
      <IncomeList income={income} />
    </section>
  );
};

export default Income;
