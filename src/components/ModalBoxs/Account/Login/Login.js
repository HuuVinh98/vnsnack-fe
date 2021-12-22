import "./Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <div className="login flex j-center a-center">
      <div className="login__box flex f-column">
        <div className="flex j-end">
          <span className="close-box">
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <form action="" className="flex f-column login-form">
          Login
          <div className="login-successfully"></div>
          <div className="login-user-name input-group">
            <input
              type="text"
              placeholder="User name or email address*"
              id="userName"
            />
          </div>
          <div className="login-password input-group">
            <input
              type="password"
              placeholder="Password*"
              name=""
              id="password"
            />
          </div>
          <div className="login-hint flex j-spaceBetween">
            <p>Remember me</p>
            <p>
              <a href="#">Forgot your password?</a>
            </p>
          </div>
          <button className="btn-login" id="log-in">
            Log in
          </button>
          <button className="btn-register" id="register">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
