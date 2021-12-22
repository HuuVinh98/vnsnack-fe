import "./Register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export default function Register() {
  return (
    <div className="register flex j-center a-center">
      <div className="register__box flex f-column">
        <div className="flex j-end">
          <span className="close-box">
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <form action="" className="flex f-column register-form">
          Register
          <div className="register-successfully"></div>
          <div className="register-user-name register-group">
            <input type="text" placeholder="User name*" id="userName-reg" />
          </div>
          <div className="register-email register-group">
            <input type="text" placeholder="Email*" name="" id="email-reg" />
          </div>
          <div className="register-password register-group">
            <input
              type="password"
              placeholder="Password*"
              name=""
              id="password-reg"
            />
          </div>
          <p
            className="policy"
            style={{
              textAlign: "justify",
              fontSize: "14px",
              color: "#707070",
              marginBottom: "20px",
            }}
          >
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our
            <a
              style={{ fontSize: "14px", color: "blue" }}
              href="https://hn.arrowpress.net/lusion/privacy-policy/"
              className="woocommerce-privacy-policy-link"
              target="_blank"
            >
              privacy policy
            </a>
            .
          </p>
          <button className="btn-register" id="register-new">
            Register
          </button>
          <button className="btn-login" id="log-in-new">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
