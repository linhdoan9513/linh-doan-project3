import redirect from "../Models/Authentication";

const SignIn = () => (
  <div className="signInContainer wrapper">
    <p className="signIn">Sign In to continue</p>
    <div>
      <button className="signInButton" onClick={redirect}>
        Sign In With Google
      </button>
    </div>
  </div>
);

export default SignIn;
