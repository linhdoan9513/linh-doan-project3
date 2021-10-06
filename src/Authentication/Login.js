import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import redirect from "../Models/Authentication";
import SignIn from "./SignIn";

const [user, setUser] = useState({});
const [loggedIn, setLoggedIn] = useState(false);
useEffect(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
      setUser(user);
    }
  });
}, []);

const signOutUser = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      setLoggedIn(false);
      setUser({});
    })
    .catch((err) => {
      alert(err.messsage);
    });
};

{
  loggedIn ? (
    <>
      <header className="wrapper">
        <button onClick={signOutUser}>Sign Out </button>
        <h1>
          Budget Planner
          <span>
            <img className="logo" src={money} alt="wallet" />
          </span>
        </h1>
      </header>
      <main className="wrapper">
        <Summary expense={sortedExpense} income={sortedIncome} />
        <div className="individualSection">
          <Income income={sortedIncome} />
          <Expense expense={sortedExpense} />
        </div>
        <footer>Created at Juno College of Technology by Linh Doan</footer>
      </main>
    </>
  ) : (
    <SignIn signIn={redirect} />
  );
}
