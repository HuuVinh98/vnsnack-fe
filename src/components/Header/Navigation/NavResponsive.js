import "./NavResponsive.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSearch,
  faShoppingBag,
  faShippingFast,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function NavResponsive() {
  return (
    <nav className="navigation-responsive">
      <div className="container">
        <ul className="icons">
          <li className="icons__shop">
            <div>
              <FontAwesomeIcon
                icon={faStore}
                color="#333"
                style={{ fontSize: "30px" }}
              />
            </div>
            <p>Shop</p>
          </li>
          <li className="icons__search">
            <div>
              <FontAwesomeIcon
                icon={faSearch}
                color="#333"
                style={{ fontSize: "30px" }}
              />
            </div>
            <p>Search</p>
          </li>
          <li className="icons__wishlist">
            <div>
              <a href="/wishlist">
                <FontAwesomeIcon
                  icon={faHeart}
                  color="#333"
                  style={{ fontSize: "30px" }}
                />
              </a>
              <span className="wishlist-num">0</span>
            </div>
            <p>Wishlist</p>
          </li>
          <li className="icons__cart">
            <div>
              <a href="/cart">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  color="#333"
                  style={{ fontSize: "30px" }}
                />
              </a>
              <span className="cart-num">0</span>
            </div>
            <p>Cart</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
