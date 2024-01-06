import "./navbar.css";
const Navbar = ({onLoginClick,onSignupClick}) => {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar__heading">Rohan's Desk</h1>
        <ul className="navbar__list">
          <li className="navbar__item">Home</li>
          <li className="navbar__item">About</li>
          <li className="navbar__item">Contact</li>
          <li className="navbar__item" onClick={onLoginClick}>Login</li>
          <li className="navbar__item" onClick={onSignupClick}>Signup</li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
