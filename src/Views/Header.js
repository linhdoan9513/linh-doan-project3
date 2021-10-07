import money from "../assets/money.png";

const Header = ({ user }) => {
  return (
    <header className="wrapper">
      <h1>
        Personal Wallet For {user.displayName}
        <span>
          <img className="logo" src={money} alt="wallet" />
        </span>
      </h1>
    </header>
  );
};

export default Header;
