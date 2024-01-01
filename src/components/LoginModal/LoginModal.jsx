import "./loginModal.css";
const LoginModal = ({ modalVisibleValue , onCloseClick}) => {
  const handleCloseClick = () =>{
    onCloseClick();
  }
  return (
    <>
      <div className={`modal__container ${modalVisibleValue?"show":""}`}>
        <div className="modal">
          <div onClick={handleCloseClick}>
            <i className="fa-solid fa-xmark"></i>
          </div>
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
            <button>Log In</button>
          </form>
          <div>
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <div>
              <a>Forgot Password</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginModal;
