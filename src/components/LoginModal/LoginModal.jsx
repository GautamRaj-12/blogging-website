import "./loginModal.css";
const LoginModal = () => {
  return (
    <>
      <div className="modal__container">
        <div className="modal">
          <div>
            <p>Welcome to Rohan's Desk</p>
          </div>
          <form className="form">
            <div className="form__input form__input-email">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form__input form__input-email">
              <input type="password" placeholder="Password" />
            </div>
            <button>Sign Up</button>
          </form>
          <div>
            <div>
              <div>
                <input type="checkbox" name="" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <div>
                <p><a href="#">Forgot Password?</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginModal;
