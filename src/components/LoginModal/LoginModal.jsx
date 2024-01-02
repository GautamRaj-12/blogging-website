import "./loginModal.css";
const LoginModal = ({ modalVisibleValue, onCloseClick }) => {
  const handleCloseClick = () => {
    onCloseClick();
  };
  return (
    <>
      <div className={`modal__container ${modalVisibleValue ? "show" : ""}`}>
        <div className="modal">
          <div onClick={handleCloseClick}>
            <i className="fa-solid fa-xmark close__button"></i>
          </div>
          <div className="modal__heading">
            <p>Welcome to Rohan's Desk</p>
          </div>
          <form className="form">
            <div className="form__input form__input-email">
              <i className="fa-solid fa-at at__icon"></i>
              <input
                type="email"
                placeholder="Email"
                className="email__input"
              />
            </div>
            <div className="form__input form__input-password">
              <i className="fa-solid fa-lock lock__icon"></i>
              <input
                type="password"
                placeholder="Password"
                className="password__input"
              />
            </div>
            <button className="login__button">Log In</button>
          </form>
          <div className="remember__forgot">
            <div className="remember__me">
              <input type="checkbox" id="rememberMe" className="remember__input"/>
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <a>Forgot Password?</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginModal;
