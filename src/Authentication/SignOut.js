import { getAuth, signOut } from "firebase/auth";

const SignOut = ({ onSignOut }) => {
  const signOutUser = () => {
    const auth = getAuth();
    signOut(auth)
      .then(onSignOut)
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <button className="signOutButton" onClick={signOutUser}>
      Sign Out{" "}
    </button>
  );
};

export default SignOut;
