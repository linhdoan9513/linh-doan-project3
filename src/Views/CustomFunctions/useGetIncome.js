import { useState, useEffect } from "react";
import { getData } from "../../Models/firebaseModel";

const useGetIncome = () => {
  const [income, setIncome] = useState([]);
  useEffect(() => {
    getData("income/", (snapshot) => {
      const data = snapshot.val();
      setIncome(data);
    });
  }, []);
  return income;
};

export default useGetIncome;
