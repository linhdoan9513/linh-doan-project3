import "./styles/scss/App.scss";
import firebaseApp from "./Models/firebaseApp";
import useLoggedInUser from "./Authentication/useLoggedInUser";
import SignIn from "./Authentication/SignIn";
import SignOut from "./Authentication/SignOut";
import Main from "./Views/Main";
import Header from "./Views/Header";
import Footer from "./Views/Footer";

const App = () => {
  const { user, setUser } = useLoggedInUser();
  //return login user
  return Object.keys(user).length !== 0 ? (
    <>
      <SignOut onSignOut={() => setUser({})}></SignOut>
      <Header user={user}></Header>
      <Main user={user}></Main>
      <Footer></Footer>
    </>
  ) : (
    <SignIn />
  );
};

export default App;
