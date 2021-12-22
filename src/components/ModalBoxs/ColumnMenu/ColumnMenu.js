import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

import "./ColumnMenu.scss";

export default function ColumnMenu() {
  return (
    <ul className="column-menu flex j-spaceBetween f-column a-center">
      <li>
        <div>
          <a href="/wishlist">
            <FontAwesomeIcon
              icon={faStore}
              color="#333"
              style={{ fontSize: "14px" }}
            />
          </a>
        </div>
      </li>
      <li className="icons__wishlist">
        <div>
          <a href="/wishlist">
            <FontAwesomeIcon
              icon={faHeart}
              color="#333"
              style={{ fontSize: "14px" }}
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
              style={{ fontSize: "14px" }}
            />
          </a>
          <span className="cart-num">0</span>
        </div>
      </li>
    </ul>
  );
}
