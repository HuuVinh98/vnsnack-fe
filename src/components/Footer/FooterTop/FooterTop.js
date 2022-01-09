import "./FooterTop.scss";
import logo from "../../../images/logo.png";
import traidua from "../../../images/traidua.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
export default function FooterTop() {
  return (
    <div className="footer-top">
      <div className="footer-top__left">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </li>
          {/* <li style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
            nesciunt voluptatem beatae nemo.{" "}
          </li> */}
          <li>
            <span>
              <a href="">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </span>

            <span>
              <a href="">
                {" "}
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </span>
            <span>
              <a href="">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div className="footer-top__right flex j-spaceBetween">
        <ul>
          <li>Contact Us</li>
          <li>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />
            Phone: +0123456
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />{" "}
            Email: demo@gmail.com
          </li>
        </ul>

        <ul>
          <li>Feedback</li>
          <li>
            <a href="">About our services</a>
          </li>
          <li>
            <a href="">About our products</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
