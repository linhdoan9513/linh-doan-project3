import { getUserCategories } from "../../Models/CategoryModel";
import { useState, useEffect } from "react";
import DisplayCategory from "./DisplayUserCategory";
import AddUserCategory from "./AddUserCategory";
import Item from "../Item/Item";

const UserCategory = (props) => {
  const [value, setValue] = useState("default");
  const [userCategories, setUserCategories] = useState([]);
  const [displayInput, setDisplayInput] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const displayUserCategories = () => {
    getUserCategories((snapshot) => {
      const data = snapshot.val();
      setUserCategories(data);
    });
  };

  useEffect(() => {
    displayUserCategories();
  }, []);

  return (
    <section className="category">
      <button onClick={() => setDisplayInput(!displayInput)}>+</button>
      {displayInput ? <AddUserCategory /> : null}
      <DisplayCategory category={userCategories} />
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
          {Object.entries(userCategories).map(([eachCategory, _]) => {
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
