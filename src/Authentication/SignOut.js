import { getAuth, signOut } from "firebase/auth";

const SignOut = ({ onSignOut }) => {
  const signOutUser = () => {
    console.log("Signing out ");
    const auth = getAuth();
    signOut(auth)
      .then(onSignOut)
      .catch((err) => {
        alert(err.message);
      });
  };
  return <button onClick={signOutUser}>Sign Out </button>;
};

export default SignOut;
