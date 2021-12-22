import "./HeaderBottom.scss";
import logo from "../../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "../Navigation/Navigation";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faBars,
  faHeart,
  faSearch,
  faShoppingBag,
  faShippingFast,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import MenuResponsive from "../Navigation/MenuResponsive";

function HeaderBottom() {
  const [showMenu, setShowMenu] = useState(false);
  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);

  return (
    <Fragment>
      <div className="header-bottom ">
        <div className="container">
          <div className="bar--left bar" onClick={handleShow}>
            <FontAwesomeIcon
              icon={faBars}
              color="#333"
              style={{ fontSize: "30px" }}
            />
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <Navigation />

          <ul className="icons">
            <li className="icons__shipping">
              <FontAwesomeIcon
                icon={faShippingFast}
                color="#eea243"
                style={{ fontSize: "40px" }}
                className="fa-icon"
              />
              <div className="text">
                <p>Call and Order In</p>
                <h3>+1234-457-890</h3>
              </div>
            </li>
            <li className="icons__search">
              <a href="/search">
                <div>
                  <FontAwesomeIcon
                    icon={faSearch}
                    color="#333"
                    style={{ fontSize: "18px" }}
                  />
                </div>
              </a>
            </li>
            <li className="icons__wishlist">
              <div>
                <a href="/wishlist">
                  <FontAwesomeIcon
                    icon={faHeart}
                    color="#333"
                    style={{ fontSize: "18px" }}
                  />
                </a>
                <span className="wishlist-num">0</span>
              </div>
            </li>
            <li className="icons__cart">
              <div>
                <a href="/cart">
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    color="#333"
                    style={{ fontSize: "18px" }}
                  />
                </a>
                <span className="cart-num">0</span>
              </div>
            </li>
            <li className="bar--right bar" onClick={handleShow}>
              <FontAwesomeIcon
                icon={faBars}
                color="#333"
                style={{ fontSize: "30px" }}
              />
            </li>
          </ul>

          <FontAwesomeIcon
            icon={faPhone}
            color="#333"
            style={{ fontSize: "30px" }}
            className="fa-phone"
          />
        </div>
      </div>
      <Modal show={showMenu} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <MenuResponsive />
        <Modal.Body></Modal.Body>
      </Modal>
    </Fragment>
  );
}

export default HeaderBottom;
