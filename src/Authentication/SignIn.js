import redirect from "../Models/Authentication";

const SignIn = () => (
  <div className="SignIn">
    <p className="SignIn">Please Sign In to continue</p>
    <div>
      <button className="sign-in-btn" onClick={redirect}>
        Sign In With Google
      </button>
    </div>
  </div>
);

export default SignIn;
