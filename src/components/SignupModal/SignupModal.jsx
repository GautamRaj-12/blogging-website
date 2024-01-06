import "./signupmodal.css";
const SignupModal = ({ signupModalVisibleValue, onCloseClick }) => {
  const handleCloseClick = () => {
    onCloseClick();
  };
  return (
    <>
      <div className={`modal__container ${signupModalVisibleValue ? "show" : ""}`}>
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
            <div className="form__input form__input-cpassword">
              <i className="fa-solid fa-lock lock__icon"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                className="cpassword__input"
              />
            </div>
            <button className="login__button">Sign Up</button>
          </form>
          <div className="account__exists">
            <p>Already have an account? <a>Log in</a></p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignupModal;
