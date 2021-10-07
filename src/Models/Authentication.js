import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

//Use redirect method from Google Authentication
const redirect = () => {
  signInWithRedirect(auth, provider);
};

export default redirect;
