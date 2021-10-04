import useTotal from "../CustomHooks/useTotal";
import { useState, useEffect } from "react";

const DisplayIncome = (props) => {
  let totalIncome = useTotal(props.income);
  const incomeTypes = props.list;
  let incomeObject = {};
  const [income, setIncome] = useState([]);

  useEffect(() => {
    if (props.income !== undefined) {
      setIncome(props.income);
    }
  }, [props.income]);

  const incomeTypeMap = () => {
    for (let i = 0; i < incomeTypes.length; i++) {
      incomeObject[incomeTypes[i]] = 0;
    }
    return incomeObject;
  };

  incomeTypeMap();

  const incomeAmountMap = () => {
    for (let i = 0; i < income.length; i++) {
      if (income[i].category in incomeObject) {
        incomeObject[income[i].category] += income[i].amount;
      }
    }
  };

  incomeAmountMap();
  console.log(incomeObject);

  return (
    <div>
      <p>Total Income: {totalIncome} </p>
    </div>
  );
};

export default DisplayIncome;
