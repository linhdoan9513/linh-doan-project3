import { useState } from "react";
import DisplayCategory from "./DisplayUserCategory";
import Item from "../Item/Item";

const UserCategory = (props) => {
  const [value, setValue] = useState("default");
  // const [userCategories, setUserCategories] = useState([]);
  const defaultCategory = [
    "Groceries",
    "Utilities",
    "Shopping",
    "Dinning Out",
    "Cash",
    "Education",
    "Health",
    "Home",
    "Transportation",
  ];
  // const [displayInput, setDisplayInput] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // const displayUserCategories = () => {
  //   getUserCategories((snapshot) => {
  //     const data = snapshot.val();
  //     console.log(`data is ` + data);
  //     setUserCategories(data);
  //   });
  // };

  // useEffect(() => {
  //   displayUserCategories();
  // }, []);

  return (
    <section className="category">
      {/* <button onClick={() => setDisplayInput(!displayInput)}>+</button>
      {displayInput ? <AddUserCategory /> : null} */}
      <DisplayCategory category={defaultCategory} />
      <form>
        <label htmlFor="category" className="sr-only">
          Select Category
        </label>
        <select
          defaultValue={value}
          onChange={handleChange}
          type="select"
          name="category"
          id="category"
        >
          <option value="default" disabled>
            Choose a category
          </option>
          {defaultCategory.map((eachCategory) => {
            return (
              <option value={eachCategory} key={eachCategory}>
                {eachCategory}
              </option>
            );
          })}
        </select>
      </form>
      <Item categoryChoice={value} />
    </section>
  );
};

export default UserCategory;
