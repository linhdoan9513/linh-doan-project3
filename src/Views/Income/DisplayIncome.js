import { getData } from "../../Models/incomeModel";

const DisplayIncome = () => {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    getData("income/", (snapshot) => {
      const data = snapshot.val();
      setIncome(data);
    });
  }, []);

  let formattedDatabase = [];
  const pushValue = () => {
    Object.entries(income).map(([_, value]) => {
      return formattedDatabase.push(value);
    });
  };

  console.log(pushValue());

  return <div></div>;
};

export default DisplayIncome;
