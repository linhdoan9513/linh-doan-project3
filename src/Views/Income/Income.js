import IncomeList from "./IncomeList";
import { getData } from "../../Models/CategoryModel";
import { useState, useEffect } from "react";
import { addFormat } from "../CustomFunctions/addFormat";

const Income = () => {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    getData("income/", (snapshot) => {
      const data = snapshot.val();
      setIncome(data);
    });
  }, []);

  let formattedDatabase = addFormat(income);

  return (
    <section className="incomeSection">
      <h2>Income</h2>
      <IncomeList income={formattedDatabase} />
    </section>
  );
};

export default Income;
