import "./styles/scss/App.scss";
import firebaseApp from "./Models/firebaseApp";
import useLoggedInUser from "./Authentication/useLoggedInUser";
import SignIn from "./Authentication/SignIn";
import Main from "./Views/Main";
import Header from "./Views/Header";
import Footer from "./Views/Footer";

const App = () => {
  const { user, setUser } = useLoggedInUser();
  //return login user
  return Object.keys(user).length !== 0 ? (
    <>
      <Header user={user} onSignOut={() => setUser({})} />
      <Main user={user} />
      <Footer />
    </>
  ) : (
    <SignIn />
  );
};

export default App;
