import "./MenuResponsive.scss";
import exfish from "../../../images/exfish.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelope,
  faUser,
  faTimes,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

export default function MenuResponsive() {
  return (
    <nav class="nav-responsive">
      <ul class="flex f-column a-center">
        {/* <li>
          <span class="close-menu">
            <FontAwesomeIcon icon={faTimes} color="white" />
          </span>
        </li> */}
        <li>
          <ul class="flex f-column j-start">
            <li class="flex j-start a-center">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <p>+012 3456 789</p>
            </li>
            {/* <li class="flex j-start a-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>demo@example.com</p>
            </li>
            <li class="flex j-start a-center">
              <FontAwesomeIcon icon={faUser} />
              <p>Account</p>
            </li> */}
          </ul>
        </li>
        <li class="home">
          <div class="flex j-spaceBetween a-center">
            <span>Home</span>
            <span class="down">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
          <ul class="dropdown f-column">
            <li>
              <a href="#">Home 1</a>
            </li>
            <li>
              <a href="#">Home 2</a>
            </li>
            <li>
              <a href="#">Home 3</a>
            </li>
            <li>
              <a href="#">Home 4</a>
            </li>
            <li>
              <a href="#">Home 5</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li class="shop">
          <div class="flex j-spaceBetween a-center">
            <span>Shop</span>
            <span class="down">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>

          <div class="dropdown">
            <div class="flex f-column a-center j-spaceBetween">
              <ul class="flex j-spaceBetween a-start">
                <li>
                  <ul>
                    <li>Fish</li>
                    <li>
                      <a href="#">Fish 1</a>
                    </li>
                    <li>
                      <a href="#">Fish 2</a>
                    </li>
                    <li>
                      <a href="#">Fish 3</a>
                    </li>
                    <li>
                      <a href="#">Fish 4</a>
                    </li>
                    <li>
                      <a href="#">Fish 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>Hamster</li>
                    <li>
                      <a href="#">Hamster 1</a>
                    </li>
                    <li>
                      <a href="#">Hamster 2</a>
                    </li>
                    <li>
                      <a href="#">Hamster 3</a>
                    </li>
                    <li>
                      <a href="#">Hamster 4</a>
                    </li>
                    <li>
                      <a href="#">Hamster 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>Bird</li>
                    <li>
                      <a href="">Bird 1</a>
                    </li>
                    <li>
                      <a href="">Bird 2</a>
                    </li>
                    <li>
                      <a href="">Bird 3</a>
                    </li>
                    <li>
                      <a href="">Bird 4</a>
                    </li>
                    <li>
                      <a href="">Bird 5</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div class="cc flex j-center f-column a-center">
                <div class="image flex a-center j-center">
                  <img src={exfish} alt="" />
                </div>
                <p style={{ textAlign: "center" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li class="media">
          <ul class="flex j-center a-center">
            <li class="flex j-center a-center">
              <FontAwesomeIcon icon={faFacebookF} color="white" />
            </li>

            <li class="flex j-center a-center">
              <FontAwesomeIcon icon={faYoutube} color="white" />
            </li>
            <li class="flex j-center a-center">
              <FontAwesomeIcon icon={faInstagram} color="white" />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
