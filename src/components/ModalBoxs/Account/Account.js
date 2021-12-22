import "./Account.scss";
import Login from "./Login/Login";
import Register from "./Register/Register";
export default function Account() {
  return (
    <div className="account-box">
      <Login />
      {/* <Register /> */}
    </div>
  );
}
