import SignOut from "../Authentication/SignOut";

const Header = ({ user, onSignOut }) => {
  return (
    <header className="wrapper">
      <div className="centerButton">
        <h1>Personal Wallet For {user.displayName}</h1>
        <SignOut onSignOut={onSignOut}></SignOut>
      </div>
    </header>
  );
};

export default Header;
