import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//create a custom hook to handle all Login
const useLoggedInUser = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const auth = getAuth();
    //onAuthStateChanged to extract current user from firebase
    onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser) {
        setUser(loggedInUser);
      }
    });
  }, []);

  return { user, setUser };
};

export default useLoggedInUser;
