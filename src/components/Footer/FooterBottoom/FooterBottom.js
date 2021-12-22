import "./FooterBottom.scss";

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="container">
        <p>
          Ⓒ 2021 <span>Vietnam Snack</span> Made With 💙 By{" "}
          <a href="#">Vinh - Nghia</a>
        </p>
        <div className="payment">
          <a href="">
            <img
              src="https://template.hasthemes.com/hmart/hmart/assets/images/icons/payment.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
