import useTotal from "../CustomHooks/useTotal";

const DisplayIncome = (props) => {
  let totalIncome = useTotal(props.income);
  console.log(props.income);

  return (
    <div>
      <p>Total Income: {totalIncome} </p>
    </div>
  );
};

export default DisplayIncome;
