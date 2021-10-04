import IncomeList from "./IncomeList";
import { getData } from "../../Models/CategoryModel";
import { useState, useEffect } from "react";
import useFormat from "../CustomHooks/useFormat";

const Income = () => {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    getData("income/", (snapshot) => {
      const data = snapshot.val();
      setIncome(data);
    });
  }, []);

  let formattedDatabase = useFormat(income);

  return (
    <section className="incomeSection">
      <IncomeList income={formattedDatabase} />
    </section>
  );
};

export default Income;
