import "./Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import vietnamfood from "../../../images/vietnamfood.jpg";
import { Link } from "react-router-dom";
import coconut from "../../../images/coconut.png";
function Navigation() {
  return (
    <nav className="navigation">
      <div className="circle--left circle">
        <div className="sub-circle"></div>
      </div>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="menu_shop">
          <div>
            <span>Shop</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <ul className="dropdown">
            <li className="dropdown__item flex j-spaceBetween a-center">
              <span>Combo</span>
              <FontAwesomeIcon icon={faAngleRight} color="#00a149" />
              <div className="drop-right flex j-spaceBetween">
                <div className=" flex f-column">
                  <h3>Combo</h3>
                  <div className="drop-right__menu flex j-spaceBetween">
                    <ul>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={vietnamfood}></img>
              </div>
            </li>
            <li className="dropdown__item flex j-spaceBetween a-center">
              <span>Combo</span>
              <FontAwesomeIcon icon={faAngleRight} color="#00a149" />
              <div className="drop-right flex j-spaceBetween">
                <div className=" flex f-column">
                  <h3>Combo</h3>
                  <div className="drop-right__menu flex j-spaceBetween">
                    <ul>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={vietnamfood}></img>
              </div>
            </li>
            <li className="dropdown__item flex j-spaceBetween a-center">
              <span>Combo</span>
              <FontAwesomeIcon icon={faAngleRight} color="#00a149" />
              <div className="drop-right flex j-spaceBetween">
                <div className=" flex f-column">
                  <h3>Combo</h3>
                  <div className="drop-right__menu flex j-spaceBetween">
                    <ul>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={vietnamfood}></img>
              </div>
            </li>
            <li className="dropdown__item flex j-spaceBetween a-center">
              <span>Combo</span>
              <FontAwesomeIcon icon={faAngleRight} color="#00a149" />
              <div className="drop-right flex j-spaceBetween">
                <div className=" flex f-column">
                  <h3>Combo</h3>
                  <div className="drop-right__menu flex j-spaceBetween">
                    <ul>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={vietnamfood}></img>
              </div>
            </li>
            <li className="dropdown__item flex j-spaceBetween a-center">
              <span>Combo</span>
              <FontAwesomeIcon icon={faAngleRight} color="#00a149" />
              <div className="drop-right flex j-spaceBetween">
                <div className=" flex f-column">
                  <h3>Combo</h3>
                  <div className="drop-right__menu flex j-spaceBetween">
                    <ul>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={vietnamfood}></img>
              </div>
            </li>
            <li className="dropdown__item flex j-spaceBetween a-center">
              <span>Combo</span>
              <FontAwesomeIcon icon={faAngleRight} color="#00a149" />
              <div className="drop-right flex j-spaceBetween">
                <div className=" flex f-column">
                  <h3>Combo</h3>
                  <div className="drop-right__menu flex j-spaceBetween">
                    <ul>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                      <li>
                        <a href="#">Combo A</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={vietnamfood}></img>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="circle--right circle">
        <div className="sub-circle">
          <img src={coconut} />
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
